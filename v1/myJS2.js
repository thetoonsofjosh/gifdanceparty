var model = function() {
    var stage = window;
    return {
        ds: [{
            id: 1,
            n: "smooch",
            t: 230,
            l: 300,
            z: 500,
            h: 302,
            w: 234,
            f: false
        }, {
            id: 2,
            n: "pumpgirl",
            t: 280,
            l: 630,
            z: 501,
            h: 283,
            w: 221,
            f: false
        }],
        bg: "",
        s: "spiltmilk",
        df: 2,
        i: 3,
        wn: [$(stage).height(), $(stage).width()],
        v: "1",
        wasLoaded: false,
        hasChanged: false,
        setBG: function(bgImg) {
            this.bg = bgImg;
            this.hasChanged = true
        },
        addDancer: function(d) {
            d.id = this.i;
            this.ds.push(d);
            this.i++;
            this.hasChanged = true;
            return d.id
        },
        cloneDancer: function(d) {
            d.id = this.i;
            this.ds.push(d);
            this.i++;
            this.hasChanged = true;
            return d.id
        },
        removeDancer: function(id) {
            this.ds = _.without(this.ds, _.findWhere(this.ds, {
                id: id
            }));
            this.hasChanged = true
        },
        moveDancer: function(id, left, top) {
            var dancer = _.findWhere(this.ds, {
                id: id
            });
            dancer.t = top;
            dancer.l = left;
            this.hasChanged = true
        },
        resizeDancer: function(id, width, height) {
            var dancer = _.findWhere(this.ds, {
                id: id
            });
            dancer.w = width;
            dancer.h = height;
            this.hasChanged = true
        },
        changeZ: function(id, z) {
            _.findWhere(this.ds, {
                id: id
            }).z = z;
            this.hasChanged = true
        },
        flipDancer: function(id, flip) {
            _.findWhere(this.ds, {
                id: id
            }).f = flip;
            this.hasChanged = true
        },
        setSong: function(songName) {
            this.s = songName;
            this.hasChanged = true
        },
        load: function(sharedModel) {
            this.wasLoaded = true;
            this.ds = sharedModel.ds;
            try {
                _.each(this.ds, function(d) {
                    d.id = parseInt(d.id);
                    d.l = parseInt(d.l);
                    d.t = parseInt(d.t)
                });
                this.i = parseInt(sharedModel.i);
                this.wn = [parseInt(sharedModel.wn[0]), parseInt(sharedModel.wn[1])]
            } catch (e) {
                console.log("error parsing int values", e)
            }
            this.bg = sharedModel.bg;
            this.s = sharedModel.s;
            this.df = sharedModel.df;
            this.v = sharedModel.v
        },
        getShare: function() {
            this.wn = [$(stage).height(), $(stage).width()];
            return {
                ds: this.ds,
                bg: this.bg,
                s: this.s,
                df: this.df,
                i: this.i,
                wn: this.wn,
                v: this.v
            }
        },
        getTRatio: function() {
            return $(stage).height() / this.wn[0]
        },
        getLRatio: function() {
            return $(stage).width() / this.wn[1]
        }
    }
}();
(function($) {
    $.fn.liveDraggable = function(opts) {
        opts = opts || {};
        opts.drag = _.debounce(function(event, ui) {
            model.moveDancer($(event.target).data('id'), ui.position.left, ui.position.top)
        }, 300);
        this.live("mouseover", function() {
            if (!$(this).data("init")) {
                $(this).data("init", true).draggable(opts)
            }
        });
        return $()
    }
}(jQuery));
(function($) {
    $.fn.liveResizable = function(opts) {
        opts = opts || {};
        opts.resize = _.debounce(function(event, ui) {
            model.resizeDancer($(event.target).parent().data('id'), ui.size.width, ui.size.height)
        }, 300);
        this.live("mouseover", function() {
            if (!$(this).data("init")) {
                $(this).data("init", true).resizable(opts)
            }
        });
        return $()
    }
}(jQuery));
(function($) {
    $.fn.disableSelection = function() {
        return this.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false)
    }
}
)(jQuery);
function playSong(songName) {
    for (var i in buzz.sounds) {
        var soundID = buzz.sounds[i].get("id");
        if (soundID == songName) {
            buzz.sounds[i].play().setVolume(50)
        }
    }
}
function center(div) {
    $(div).css({
        position: 'absolute',
        left: ($(window).width() - $(div).outerWidth()) / 2,
        top: ($(window).height() - $(div).outerHeight()) / 2
    })
}
function fixChromeBug() {
    if (chrome == 1) {
        $('body').hide().show(0)
    }
}
var bgNum = 2;
var bgMax = 25;
var zIndex = 500;
var zIndex_low = 499;
var onDancer = 0;
var chrome;
if (navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15) {
    chrome = 1
} else {
    chrome = 0
}
$(function() {
    center($("#modal_loading"));
    $("#modal_loading").show();
    $("#container").hide();
    $(".modal").hide();
    $("#menu_top").hide();
    $.fn.preload = function() {
        this.each(function() {
            $('<img/>')[0].src = this
        })
    }
    ;
    $(['dancefloors/dancefloor_1.jpg', 'dancefloors/dancefloor_2.jpg', 'dancefloors/dancefloor_3.jpg', 'dancefloors/dancefloor_4.jpg', 'dancefloors/dancefloor_5.jpg', 'dancefloors/dancefloor_6.jpg', 'dancefloors/dancefloor_7.jpg', 'dancefloors/dancefloor_8.jpg', 'dancefloors/dancefloor_9.jpg', 'dancefloors/dancefloor_10.jpg', 'dancefloors/dancefloor_11.jpg', 'dancefloors/dancefloor_12.jpg', 'dancefloors/dancefloor_13.jpg']).preload()
});
function hide_modal() {
    $(".modal").fadeOut(300, function() {
        $(".modal_bg").fadeOut(300)
    })
}
$(document).ready(function() {
    buzz.defaults.loop = true;
    buzz.defaults.formats = ['mp3'];
    buzz.defaults.preload = 'auto';
    buzz.defaults.autoplay = false;
	var spiltmilk = new buzz.sound("music/spilt_milk_neighbor_128"); spiltmilk.set("id","spiltmilk");
	var money = new buzz.sound("music/gdp_money2"); money.set("id","money");
	var bubblebutt = new buzz.sound("music/bubblebutt"); bubblebutt.set("id","bubblebutt");
	var twist = new buzz.sound("music/twist"); twist.set("id","twist");
	var wegotyou = new buzz.sound("music/wegotyou"); wegotyou.set("id","wegotyou");
	var nahnah = new buzz.sound("music/nahnahnah"); nahnah.set("id","nahnah");
	var sandstorm = new buzz.sound("music/sandstorm"); sandstorm.set("id","sandstorm");
	var Taylor_shake_it_off = new buzz.sound("music/Taylor_shake_it_off"); Taylor_shake_it_off.set("id","Taylor_shake_it_off");
	var heman = new buzz.sound("music/heman"); heman.set("id","heman");
	var oakenfold = new buzz.sound("music/oakenfold"); oakenfold.set("id","oakenfold");
	var grounded = new buzz.sound("music/grounded"); grounded.set("id","grounded");
	var singalong = new buzz.sound("music/singalong"); singalong.set("id","singalong");
	var trololo = new buzz.sound("music/trololo"); trololo.set("id","trololo");
	var breadfish = new buzz.sound("music/breadfish"); breadfish.set("id","breadfish");
	var rex = new buzz.sound("music/rex_the_dog_128"); rex.set("id","rex");
	var whitehorse = new buzz.sound("music/gdp_whitehorse"); whitehorse.set("id", "whitehorse");
	var halffull = new buzz.sound("music/halffull"); halffull.set("id","halffull");
	var nopanties = new buzz.sound("music/nopanties"); nopanties.set("id","nopanties");
	var walkmen = new buzz.sound("music/walkmen"); walkmen.set("id","walkmen");
	var bazz = new buzz.sound("music/bazz"); bazz.set("id","bazz");
	var fatboy = new buzz.sound("music/fatboy"); fatboy.set("id","fatboy");
	var rex2 = new buzz.sound("music/gdp_rex"); rex2.set("id","rex2");
	var spiltmilk2 = new buzz.sound("music/gdp_spiltmilk"); spiltmilk2.set("id","spiltmilk2");
	var hotlineloop = new buzz.sound("music/hotlineloop"); hotlineloop.set("id","hotlineloop");
	myGroup = new buzz.group([rex,money,walkmen,whitehorse,spiltmilk,spiltmilk2,rex2,bazz,breadfish,singalong,fatboy,grounded,trololo,sandstorm,nopanties,halffull,heman,wegotyou,bubblebutt,hotlineloop,twist,Taylor_shake_it_off,oakenfold,nahnah]); 
    $("#dancefloorswitch").click(function(event) {
        bgNum++;
        if (bgNum > bgMax) {
            bgNum = 1
        }
        $("#container").backstretch("destroy", false);
        $("#container").backstretch("dancefloors/dancefloor_" + bgNum + ".jpg");
        model.df = bgNum;
        model.bg = ""
    });
    $(document).on('mouseenter', '.dance_outter', function() {
        if (onDancer === 0) {
            $(this).css("background-color", "rgba(20,20,20,0.25)");
            $(this).css({
                "border-width": "1px",
                "border-style": "dashed",
                "border-color": "#ccc"
            });
            $(this).children("div:not(:first-child)").show();
            $(this).find(".ui-resizable-handle").show();
            $(this).find(".ui-resizable-se").show();
            onDancer = 1
        }
    });
    $(document).on('mouseleave', '.dance_outter', function() {
        $(this).css("background-color", "rgba(20,20,20,0.0)");
        $(this).css("border", "none");
        $(this).children("div:not(:first-child)").hide();
        $(this).find(".ui-resizable-handle").hide();
        $(this).find(".ui-resizable-se").hide();
        onDancer = 0
    });
    $(document).on('click', '.close_dancer', function() {
        var deleted_element = $(this).closest(".dance_outter").remove();
        model.removeDancer(deleted_element.data('id'));
        onDancer = 0
    });
    $(document).on('click', '.bfront', function() {
        var updated_element = $(this).closest(".dance_outter").css("z-index", zIndex);
        model.changeZ(updated_element.data('id'), zIndex);
        zIndex++
    });
    $(document).on('click', '.bback', function() {
        var updated_element = $(this).closest(".dance_outter").css("z-index", zIndex_low);
        model.changeZ(updated_element.data('id'), zIndex_low);
        zIndex_low--
    });
    $(document).on('click', '.clone_dancer', function() {
        var clone_name = $(this).attr('id');
        var newZ = zIndex++;
        var id = model.cloneDancer({
            n: clone_name,
            t: 50,
            l: 20,
            z: newZ,
            f: false
        });
        $("#dancers").append("<div class='dance_outter' data-id='" + id + "' style='z-index:" + newZ + ";top:50px;left:20px'><img class='dancer' data-flip='0' src='dancers/" + clone_name + ".gif' /><div class='hflip'>FLIP</div><div class='bfront'>FRONT</div><div class='bback'>BACK</div><div class='resize_help'>RESIZE</div><div class='close_dancer'>X</div><div class='clone_dancer' id='" + clone_name + "'>CLONE</div></div>")
    });
    $(document).on('click', '.hflip', function() {
        var parent_element = $(this).closest(".dance_outter");
        var updated_element = $(this).closest(".dance_outter").find(".dancer");
        var flip_state;
        if (updated_element.attr("data-flip") == "0") {
            updated_element.addClass("flip-h");
            updated_element.attr("data-flip", "1");
            flip_state = true
        } else {
            updated_element.removeClass("flip-h");
            updated_element.attr("data-flip", "0");
            flip_state = false
        }
        model.flipDancer(parent_element.data('id'), flip_state)
    });
    $(".dancer_thumb").click(function() {
        var dancer_name = $(this).attr('id');
        if (dancer_name !== "") {
            var newZ = zIndex++;
            var id = model.addDancer({
                n: dancer_name,
                t: 50,
                l: 20,
                z: newZ,
                f: false
            });
            $("#dancers").append("<div class='dance_outter' data-id='" + id + "' style='z-index:" + newZ + ";top:50px;left:20px'><img class='dancer' data-flip='0' src='dancers/" + dancer_name + ".gif' /><div class='hflip'>FLIP</div><div class='bfront'>FRONT</div><div class='bback'>BACK</div><div class='resize_help'>RESIZE</div><div class='close_dancer'>X</div><div class='clone_dancer' id='" + dancer_name + "'>CLONE</div></div>");
            $("#select_dancer").val("");
            $('img').bind('contextmenu', function(e) {
                return false
            })
        }
        hide_modal();
        model.hasChanged = true
    });
    $(".song_list").click(function() {
        var song_name = $(this).attr('id');
        myGroup.stop();
        playSong(song_name);
        model.setSong(song_name);
        hide_modal();
        model.hasChanged = true
    });
    $(".modal_open").click(function() {
        var thisModal = "#modal_" + $(this).attr('id');
        center($(thisModal));
        $(thisModal).fadeIn(500);
        $(".modal_bg").fadeIn(500)
    });
    $(".modal_bg").click(function() {
        hide_modal()
    });
    $(".submit_background_button").click(function() {
        $("#form_response").html("Uploading...");
        $("#submit_background_form").ajaxSubmit({
            dataType: 'json',
            success: submit_response,
            error: form_error
        })
    });
    function submit_response(data) {
        if (data.success) {
            $("#form_response").html("");
            $("#container").backstretch("destroy", false);
            $("#container").backstretch("uploaded_backgrounds/" + data.success);
            model.setBG(data.success);
            $('#submit_background_form').resetForm();
            hide_modal()
        } else {
            $("#form_response").html(data.err)
        }
    }
    function form_error() {
        alert("Upload Error")
    }
    var bitlyAccessToken = '58a301bca7f3c6bce87532f008fff87eebad189c';
    $("#share").click(function() {
        var path = (sharePath || window.location.host);
        var shareURL = path + '?' + decodeURIComponent($.param({
            d: model.getShare()
        }));
        var bitlyCall = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + bitlyAccessToken + '&domain=j.mp';
        var makeErrorShareUrl = function() {
            alert("Bitly Sharing Error")
        };
        var makeBitlyCall = function(bitlyCall) {
            console.log(bitlyCall);
            $.ajax({
                dataType: "json",
                url: bitlyCall,
                success: function(data) {
                    if (data.status_code == "200") {
                        $('#input_shareURL').val(data.data.url);
                        $("#copy_button").attr("data-clipboard-text", data.data.url)
                    } else {
                        makeErrorShareUrl()
                    }
                },
                error: function() {
                    makeErrorShareUrl()
                }
            })
        };
        if (model.hasChanged) {
            bitlyCall += '&longUrl=' + encodeURIComponent(shareURL);
            makeBitlyCall(bitlyCall)
        } else if (model.wasLoaded && !model.hasChanged) {
            bitlyCall += '&longUrl=' + encodeURIComponent(window.location);
            makeBitlyCall(bitlyCall)
        } else {
            $('#input_shareURL').val(path);
            $("#copy_button").attr("data-clipboard-text", path)
        }
        var swf_path = "js/ZeroClipboard.swf";
        ZeroClipboard.config({
            moviePath: swf_path
        });
        var client = new ZeroClipboard(document.getElementById("copy_button"));
        client.on('noflash', function(client, args) {});
        client.on('wrongflash', function(client, args) {});
        client.on("load", function(client) {});
        client.on('complete', function(client, args) {
            $("#input_shareURL").select()
        })
    });
    $("#input_shareURL").on("click", function() {
        $(this).select()
    });
    $(window).resize(function() {});
    $('img').bind('contextmenu', function(e) {
        return false
    })
});
$(window).load(function() {
    $("#modal_loading").fadeOut(500);
    $("#blackout").fadeOut(500, function() {});
    $("#container").show();
    $("#menu_top").show();
    hide_modal();
    $(".menu_hover").disableSelection();
    $(".menu_sel").disableSelection();
    $(".modal").disableSelection();
    var deep_link = $.deparam.querystring();
    if (_.has(deep_link, 'd')) {
        model.load(deep_link.d)
    }
    zIndex = _.max(model.ds, function(d) {
        return d.z
    }).z;
    if (model.bg === "") {
        $("#container").backstretch("dancefloors/dancefloor_" + model.df + ".jpg")
    } else {
        $("#container").backstretch("uploaded_backgrounds/" + model.bg)
    }
    playSong(model.s);
    _.each(model.ds, function(d) {
        var l = d.l = Math.floor(d.l * model.getLRatio());
        var t = d.t = Math.floor(d.t * model.getTRatio());
        var flip_class, flip_val;
        if (d.f == "true") {
            flip_class = "flip-h";
            flip_val = "1"
        } else {
            flip_class = "";
            flip_val = "0"
        }
        $("#dancers").append("<div class='dance_outter' data-id='" + d.id + "' style='z-index:" + d.z + ";position:absolute;left:" + l + "px;top:" + t + "px;'><img class='dancer " + flip_class + "' data-flip='" + flip_val + "' src='dancers/" + d.n + ".gif' height='" + d.h + "' width='" + d.w + "' /><div class='hflip'>FLIP</div><div class='bfront'>FRONT</div><div class='bback'>BACK</div><div class='resize_help'>RESIZE</div><div class='close_dancer'>X</div><div class='clone_dancer' id='" + d.n + "'>CLONE</div></div>")
    });
    $(".dancer").liveResizable({
        stop: function() {
            fixChromeBug()
        },
        aspectRatio: true,
        minWidth: 120,
        maxWidth: 400
    });
    $(".dance_outter").liveDraggable({
        scroll: false,
        stop: function() {
            fixChromeBug()
        }
    });
    $(".dance_outter").each(function() {
        $(this).css("background-color", "rgba(20,20,20,0.0)");
        $(this).css("border", "none");
        $(this).children("div:not(:first-child)").hide()
    });
    $('img').bind('contextmenu', function(e) {
        return false
    })
});
