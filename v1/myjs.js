var max_depth = 501;
var min_depth = 500;
var bg_num = 2;
var bg_max = 22;
var audio_mode = "local";
var song_num = 1;
var youtube_playlist = "";
var soundcloud_playlist = "";
var dancer_uid = 0;
var is_dragging = false;
var myGroup;
var gif_max_width = 600;
var gif_max_height = 800;
var gif_min_width = 120;
var this_domain = "https://" + window.location.host;
if (window.location.href.indexOf("gdp_new2") !== -1) {
    this_domain += "/gdp_new2/"
}
var dancer_count = 0;
var global_volume = 40;
var share_obj = {
    "uid": null,
    "audio-mode": audio_mode,
    "song_num": song_num,
    "youtube-playlist": youtube_playlist,
    "soundcloud-playlist": soundcloud_playlist,
    "bg_num": bg_num,
    "dancers": [{
        "uid": "1",
        "name": "smooch",
        "x_pct": 0.23,
        "y_pct": 0.41,
        "size_pct": 0.15,
        "depth": 500,
        "flip": false
    }, {
        "uid": "2",
        "name": "pumpgirl",
        "x_pct": 0.32,
        "y_pct": 0.47,
        "size_pct": 0.16,
        "depth": 501,
        "flip": false
    }, {
        "uid": "3",
        "name": "wormjelly",
        "x_pct": 0.60,
        "y_pct": 0.30,
        "size_pct": 0.05,
        "depth": 501,
        "flip": false
    }]
};
function find_index_from_uid(uid) {
    for (var i = 0; i < share_obj.dancers.length; i++) {
        if (share_obj.dancers[i].uid == uid) {
            return i
        }
    }
    return false
}
function append_a_dancer(uid, name, x, y, z, w) {
        $(".all_dancers").append("<div class='dance_outter' id='" + uid + "' style='z-index:" + z + ";top:" + y + "px;left:" + x + "px;width:auto;height:auto;'>" + "<div class='resizer' style='width:" + w + "px;height:auto;'><img class='dancer' data-flip='false' src='assets/dancers/" + name + ".gif' width='100%'></div>" + "<div class='hflip dfont'>FLIP</div><div class='bfront dfont'>FRONT</div><div class='bback dfont'>BACK</div><div class='resize_help dfont2'>RESIZE</div><div class='close_dancer dfont'>X</div><div class='clone_dancer dfont' id='" + name + "'>CLONE</div>" + "</div>");
        $(".dfont,.dfont2").hide();
        all_resizable();
        all_draggable();
        $("#" + uid).find(".ui-resizable-handle").hide();
        $("#" + uid).find(".ui-resizable-se").hide();
        dancer_count++
}
function add_dancer(name, ratio) {
    max_depth++;
    dancer_uid++;
    var size_of_created_gif = ($("body").width() * 0.18) * ratio;
    if (size_of_created_gif > gif_max_width) {
        size_of_created_gif = gif_max_width
    }
    if (size_of_created_gif < gif_min_width) {
        size_of_created_gif = gif_min_width
    }
    append_a_dancer(dancer_uid, name, 50, 100, max_depth, size_of_created_gif);
    var new_dancer = {
        "uid": dancer_uid,
        "name": name,
        "x_pct": null,
        "y_pct": null,
        "size_pct": null,
        "depth": max_depth,
        "flip": false
    };
    new_dancer.x_pct = 50 / $("body").width();
    new_dancer.y_pct = 100 / $("body").height();
    new_dancer.size_pct = $("#" + dancer_uid).width() / $("body").width();
    share_obj.dancers.push(new_dancer)
}
function remove_dancer(uid) {
    $("#" + uid).remove();
    var idx = find_index_from_uid(uid);
    share_obj.dancers.splice(idx, 1);
    dancer_count--
}
function move_dancer(uid, x, y) {
    var idx = find_index_from_uid(uid);
    share_obj.dancers[idx].x_pct = x / $("body").width();
    share_obj.dancers[idx].y_pct = y / $("body").height()
}
function send_to_back(uid) {
    var idx = find_index_from_uid(uid);
    min_depth--;
    share_obj.dancers[idx].depth = min_depth;
    $("#" + uid).css("z-index", min_depth)
}
function bring_to_front(uid) {
    var idx = find_index_from_uid(uid);
    max_depth++;
    share_obj.dancers[idx].depth = max_depth;
    $("#" + uid).css("z-index", max_depth)
}
function flip_dancer(uid) {
    var idx = find_index_from_uid(uid);
    var flip_element = $("#" + share_obj.dancers[idx].uid).find(".dancer");
    if (flip_element.attr("data-flip") === "false") {
        flip_element.addClass("flip-h");
        flip_element.attr("data-flip", "true");
        share_obj.dancers[idx].flip = true
    } else {
        flip_element.removeClass("flip-h");
        flip_element.attr("data-flip", "false");
        share_obj.dancers[idx].flip = false
    }
}
function resize_dancer(uid, width) {
    var idx = find_index_from_uid(uid);
    share_obj.dancers[idx].size_pct = width / $("body").width()
}
function clone_dancer(name, uid) {
    var clone_flip = $("#" + uid).find(".dancer").attr("data-flip");
    var clone_w = $("#" + uid).width();
    var clone_x = $("#" + uid).position().left - 40;
    var clone_y = $("#" + uid).position().top;
    max_depth++;
    dancer_uid++;
    append_a_dancer(dancer_uid, name, clone_x, clone_y, max_depth, clone_w);
    if (clone_flip === "true") {
        $("#" + dancer_uid).find(".dancer").addClass("flip-h");
        $("#" + dancer_uid).find(".dancer").attr("data-flip", "true")
    }
    var new_dancer = {
        "uid": dancer_uid,
        "name": name,
        "x_pct": clone_x / $("body").width(),
        "y_pct": clone_y / $("body").height(),
        "size_pct": clone_w / $("body").width(),
        "depth": max_depth,
        "flip": clone_flip
    };
    share_obj.dancers.push(new_dancer)
}
$.fn.center = function(x, y) {
    this.css("position", "absolute");
    if (x == 1) {
        this.css("left", Math.max(0, (($(this).parent().width() - $(this).outerWidth()) / 2)) + "px")
    }
    if (y == 1) {
        this.css("top", Math.max(0, (($(this).parent().height() - $(this).outerHeight()) / 2)) + "px")
    }
    return this
}
;
function uber_responsive() {
    $(".center_me").each(function() {
        $(this).center(1, 1)
    })
}
$(window).resize(function() {
    uber_responsive()
});
document.addEventListener("contextmenu", function(e) {
    e.preventDefault()
}, false);
function all_draggable() {
    $(".dance_outter").draggable({
        scroll: false,
        start: function() {
            is_dragging = true
        },
        stop: function(event, ui) {
            var offset = $(this).position();
            var xPos = offset.left;
            var yPos = offset.top;
            var uid = $(this).attr("id");
            var idx = find_index_from_uid(uid);
            move_dancer(uid, xPos, yPos);
            is_dragging = false
        }
    })
}
function all_resizable() {
    $(".resizer").resizable({
        aspectRatio: true,
        minWidth: 120,
        maxWidth: gif_max_width,
        maxHeight: gif_max_height,
        resize: function(event, ui) {
            $(this).parent().css("width", ui.size.width + "px").css("height", ui.size.height + "px")
        },
        stop: function(event, ui) {
            var uid = $(this).parent().attr("id");
            resize_dancer(uid, ui.size.width)
        }
    })
}
function preload_stuff() {
    var loader = new PxLoader();
    for (var i = 1; i < bg_max + 1; i++) {
        loader.addImage('assets/dancefloors/dancefloor_' + i + '.jpg')
    }
    loader.addCompletionListener(function() {
        done_preload()
    });
    loader.start();
    if (audio_mode == "local") {
        buzz.defaults.loop = true;
        buzz.defaults.formats = ['mp3', 'ogg'];
        buzz.defaults.preload = 'auto';
        buzz.defaults.autoplay = false;
        var fatboy = new buzz.sound("assets/music/fatboy");
        fatboy.set("id", "fatboy");
        var walkmen = new buzz.sound("assets/music/walkmen");
        walkmen.set("id", "walkmen");
        var nahnahnah = new buzz.sound("assets/music/nahnahnah");
        nahnahnah.set("id", "nahnahnah");
        var sandstorm = new buzz.sound("assets/music/sandstorm");
        sandstorm.set("id", "sandstorm");
        var Taylor_shake_it_off = new buzz.sound("assets/music/Taylor_shake_it_off");
        Taylor_shake_it_off.set("id", "Taylor_shake_it_off");
        var heman = new buzz.sound("assets/music/heman");
        heman.set("id", "heman");
        var oakenfold = new buzz.sound("assets/music/oakenfold");
        oakenfold.set("id", "oakenfold");
        var grounded = new buzz.sound("assets/music/grounded");
        grounded.set("id", "grounded");
        var singalong = new buzz.sound("assets/music/singalong");
        singalong.set("id", "singalong");
        var trololo = new buzz.sound("assets/music/trololo");
        trololo.set("id", "trololo");
        var breadfish = new buzz.sound("assets/music/breadfish");
        breadfish.set("id", "breadfish");
        var bubblebutt = new buzz.sound("assets/music/bubblebutt");
        bubblebutt.set("id", "bubblebutt");
        var twist = new buzz.sound("assets/music/twist");
        twist.set("id", "twist");
        var wegotyou = new buzz.sound("assets/music/wegotyou");
        wegotyou.set("id", "wegotyou");
        var bazz = new buzz.sound("assets/music/bazz");
        bazz.set("id", "bazz");
        var halffull = new buzz.sound("assets/music/halffull");
        halffull.set("id", "halffull");
        var hotlineloop = new buzz.sound("assets/music/hotlineloop");
        hotlineloop.set("id", "hotlineloop");
        var nopanties = new buzz.sound("assets/music/nopanties");
        nopanties.set("id", "nopanties");
        myGroup = new buzz.group([fatboy, walkmen, trololo, bubblebutt, singalong, nopanties, nahnahnah, oakenfold, grounded, twist, wegotyou, bazz, halffull, hotlineloop, sandstorm, heman, Taylor_shake_it_off, breadfish]);
        myGroup.setVolume(global_volume)
    }
    function done_preload() {
        var o = location.search.split('o=')[1];
        if (o && o != undefined) {
            $.ajax({
                type: "POST",
                url: "db_get.php",
                data: {
                    share_id: o
                },
                dataType: "json",
                success: function(msg) {
                    if (msg.obj.party) {
                        load_share(JSON.parse(msg.obj.party))
                    } else {
                        console.log("msg.obj.party is blank");
                        init_default()
                    }
                },
                error: function() {
                    console.log("there was an ajax error");
                    init_default()
                }
            })
        } else {
            init_default()
        }
        $(".loading_container").fadeOut(2000, function() {
            $(".main_page").show();
            $(".all_dancers").show();
            $(".bg").show();
            $(".footer_container").show();
            $(".header_container").show();
            $(".bg").backstretch("resize");
            uber_responsive()
        });
        uber_responsive()
    }
}
function init_default() {
    for (var i = 0; i < share_obj.dancers.length; i++) {
        max_depth++;
        dancer_uid++;
        var x = share_obj.dancers[i].x_pct * $("body").width();
        var y = share_obj.dancers[i].y_pct * $("body").height();
        var w = share_obj.dancers[i].size_pct * $("body").width();
        if (w > gif_max_width) {
            w = gif_max_width
        }
        if (w < gif_min_width) {
            w = gif_min_width
        }
        var n = share_obj.dancers[i].name;
        append_a_dancer(dancer_uid, n, x, y, max_depth, w)
    }
    setTimeout(function() {
        buzz.sounds[song_num].play().setVolume(global_volume)
    }, 2000);
    $(".bg").backstretch("assets/dancefloors/dancefloor_" + bg_num + ".jpg")
}
function load_share(loaded_obj) {
    for (var i = 0; i < loaded_obj.dancers.length; i++) {
        max_depth++;
        dancer_uid++;
        var xx = loaded_obj.dancers[i].x_pct * $("body").width();
        var yy = loaded_obj.dancers[i].y_pct * $("body").height();
        var ww = loaded_obj.dancers[i].size_pct * $("body").width();
        if (ww > gif_max_width) {
            ww = gif_max_width
        }
        if (ww < gif_min_width) {
            ww = gif_min_width
        }
        var nn = loaded_obj.dancers[i].name;
        var dd = loaded_obj.dancers[i].depth;
        if (dd > max_depth) {
            max_depth = dd
        }
        if (dd < min_depth) {
            min_depth = dd
        }
        append_a_dancer(dancer_uid, nn, xx, yy, dd, ww);
        if (loaded_obj.dancers[i].flip === true) {
            var flip_element = $("#" + dancer_uid).find(".dancer");
            flip_element.addClass("flip-h");
            flip_element.attr("data-flip", "true")
        }
    }
    setTimeout(function() {
        buzz.sounds[loaded_obj.song_num].play().setVolume(global_volume)
    }, 2000);
    $(".bg").backstretch("assets/dancefloors/dancefloor_" + loaded_obj.bg_num + ".jpg");
    $(".dfont,.dfont2").hide();
    share_obj = loaded_obj
}
$(document).ready(function() {
    uber_responsive();
    $(".blackout").show();
    $(".blackout_alpha").hide();
    $(".full_screen_container").hide();
    $(".overlay").hide();
    $(".dancer_thumb").click(function() {
        var name = $(this).attr('id');
        var ratio_txt = $(this).attr('data-size');
        var ratio_arr = ratio_txt.split("x");
        var ratio = ratio_arr[0] / ratio_arr[1];
        add_dancer(name, ratio);
        $(".overlay").fadeOut(500);
        $(".blackout_alpha").fadeOut(500)
    });
    $(document).on('click', '.close_dancer', function() {
        var uid = $(this).closest(".dance_outter").attr("id");
        remove_dancer(uid)
    });
    $(document).on('click', '.bfront', function() {
        var uid = $(this).closest(".dance_outter").attr("id");
        bring_to_front(uid)
    });
    $(document).on('click', '.bback', function() {
        var uid = $(this).closest(".dance_outter").attr("id");
        send_to_back(uid)
    });
    $(document).on('click', '.clone_dancer', function() {
        var name = $(this).attr("id");
        var uid = $(this).closest(".dance_outter").attr("id");
        clone_dancer(name, uid)
    });
    $(document).on('click', '.hflip', function() {
        var uid = $(this).closest(".dance_outter").attr("id");
        flip_dancer(uid)
    });
    $("#songswitch").click(function() {
        song_num++;
        if (song_num > buzz.sounds.length - 1) {
            song_num = 0
        }
        myGroup.stop();
        buzz.sounds[song_num].play().setVolume(global_volume);
        share_obj.song_num = song_num
    });
    $("#dancefloorswitch").click(function() {
        bg_num++;
        if (bg_num > bg_max) {
            bg_num = 1
        }
        $(".bg").backstretch("destroy", false);
        $(".bg").backstretch("assets/dancefloors/dancefloor_" + bg_num + ".jpg");
        share_obj.bg_num = bg_num
    });
    $("#selectdancer").click(function() {
        $(".blackout_alpha").fadeIn(500);
        $(".select_gif").fadeIn(500)
    });
    $("#share").click(function() {
        $(".blackout_alpha").fadeIn(500);
        $(".share_container").fadeIn(500);
        var share_uid = stringGen(8);
        var share_obj_str = JSON.stringify(share_obj);
        $.ajax({
            type: "POST",
            url: "db_upd.php",
            data: {
                share_id: share_uid,
                share_data: share_obj_str
            },
            dataType: "json",
            success: function(msg) {
                if (msg.res === true) {
                    $(".share_url").val("https://thetoonsofjosh.github.io/gifdanceparty/?o=" + share_uid)
                } else {
                    $(".overlay").fadeOut(500);
                    $(".blackout_alpha").fadeOut(500)
                }
            }
        })
    });
    function stringGen(len) {
        var text = "";
        var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < len; i++) {
            text += charset.charAt(Math.floor(Math.random() * charset.length))
        }
        return text
    }
    $(".share_url").on("click", function() {
        $(this).select()
    });
    $("#about").click(function() {
        $(".blackout_alpha").fadeIn(500);
        $(".about_container2").fadeIn(500)
    });
    $(document).on('mouseenter', '.dance_outter', function() {
        if (is_dragging === false) {
            $('.dance_outter').css("background-color", "rgba(20,20,20,0.0)");
            $('.dance_outter').css("border", "none");
            $('.dance_outter').children("div:not(:first-child)").hide();
            $('.dance_outter').find(".ui-resizable-handle").hide();
            $('.dance_outter').find(".ui-resizable-se").hide();
            $(this).css("background-color", "rgba(20,20,20,0.25)");
            $(this).css({
                "border-width": "1px",
                "border-style": "dashed",
                "border-color": "#ccc"
            });
            $(this).children("div:not(:first-child)").show();
            $(this).find(".ui-resizable-handle").show();
            $(this).find(".ui-resizable-se").show()
        }
    });
    $(document).on('mouseleave', '.dance_outter', function() {
        if (is_dragging === false) {
            $(this).css("background-color", "rgba(20,20,20,0.0)");
            $(this).css("border", "none");
            $(this).children("div:not(:first-child)").hide();
            $(this).find(".ui-resizable-handle").hide();
            $(this).find(".ui-resizable-se").hide()
        }
    });
    $(".blackout_alpha").click(function() {
        $(".overlay").fadeOut(500);
        $(".blackout_alpha").fadeOut(500)
    });
    $(window).on("blur focus", function(e) {
        var prevType = $(this).data("prevType");
        if (prevType != e.type) {
            switch (e.type) {
            case "blur":
                myGroup.setVolume(0);
                console.log("bye");
                break;
            case "focus":
                if (myGroup) {
                    myGroup.setVolume(global_volume);
                    console.log("hi")
                }
                break;
            default:
                break
            }
        }
        $(this).data("prevType", e.type)
    })
});
$(window).load(function() {
    $(".loading_container").show();
    uber_responsive();
    $(".blackout").fadeOut(500, function() {
        uber_responsive()
    });
    preload_stuff()
});
