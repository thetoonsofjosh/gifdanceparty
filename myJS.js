/** @type {Array} */
var _0x9083 = ["smooch", "pumpgirl", "", "twist", "height", "width", "1", "bg", "hasChanged", "id", "i", "push", "ds", "findWhere", "without", "t", "l", "w", "h", "z", "s", "wasLoaded", "each", "wn", "error parsing int values", "log", "df", "v", "thetoonsofjosh.github.io/gifdanceparty", "94220288d7657a3eace62d0480ecb4c170cc0900", "liveDraggable", "fn", "drag", "data", "target", "left", "position", "top", "moveDancer", "debounce", "mouseover", "init", "draggable", "live", "liveResizable", "resize", "parent", "size", 
"resizeDancer", "resizable", "disableSelection", "selectstart", "on", "user-select", "none", "css", "unselectable", "attr", "sounds", "get", "setVolume", "play", "absolute", "outerWidth", "outerHeight", "show", "hide", "body", "chrome fix!", "Chrome", "indexOf", "userAgent", " ", "split", "substring", "#modal_loading", "#container", ".modal", "#menu_top", "preload", "src", "<img/>", "dancefloors/dancefloor_01.jpg", "dancefloors/dancefloor_02.jpg", "dancefloors/dancefloor_03.jpg", "dancefloors/dancefloor_04.jpg", 
"dancefloors/dancefloor_05.jpg", "dancefloors/dancefloor_06.jpg", "dancefloors/dancefloor_07.jpg", "dancefloors/dancefloor_08.jpg", "loop", "defaults", "formats", "ogg", "mp3", "auto", "autoplay", "music/fatboy", "sound", "fatboy", "set", "music/walkmen", "walkmen", "music/nahnahnah", "nahnahnah", "music/grounded", "grounded", "music/singalong", "singalong", "music/trololo", "trololo", "music/bubblebutt", "bubblebutt", "music/twist", "music/wegotyou", "wegotyou", "music/bazz", "bazz", "music/halffull", 
"halffull", "group", "destroy", "backstretch", "dancefloors/dancefloor_0", ".jpg", "click", "#dancefloorswitch", "mouseenter", ".dance_outter", "background-color", "rgba(20,20,20,0.25)", "1px", "dashed", "#ccc", "div:not(:first-child)", "children", ".ui-resizable-handle", "find", ".ui-resizable-se", "mouseleave", "rgba(20,20,20,0.0)", "border", ".close_dancer", "remove", "closest", "removeDancer", ".bfront", "z-index", "changeZ", ".bback", ".clone_dancer", "CLONE ", "cloneDancer", "<div class='dance_outter' data-id='", 
"' style='z-index:", ";top:50px;left:20px'><img class='dancer' src='dancers/", ".gif' /><div class='bfront'>FRONT</div><div class='bback'>BACK</div><div class='resize_help'>RESIZE</div><div class='close_dancer'>X</div><div class='clone_dancer' id='", "'>CLONE</div></div>", "append", "#dancers", "addDancer", "val", "#select_dancer", "contextmenu", "bind", "img", ".dancer_thumb", "stop", "setSong", ".song_list", "#modal_", "fadeIn", ".modal_open", ".close_modal", "Uploading...", "html", "#form_response", 
"json", "ajaxSubmit", "#submit_background_form", ".submit_background_button", "success", "uploaded_backgrounds/", "setBG", "resetForm", "err", "upload error", "Getting URL...", "#input_shareURL", "http://", "host", "location", "?", "getShare", "param", "https://api-ssl.bitly.com/v3/shorten?access_token=", "&domain=j.mp", "SHARING ERROR", "status_code", "200", "url", "data-clipboard-text", "#copy_button", "ajax", "&longUrl=", "js/ZeroClipboard.swf", "config", "copy_button", "getElementById", "noflash", 
"wrongflash", "load", "complete", "select", "#share", "ready", ".menu_hover", ".menu_sel", "querystring", "deparam", "d", "has", "max", "getLRatio", "floor", "getTRatio", ";position:absolute;left:", "px;top:", "px;'><img class='dancer' src='dancers/", "n", ".gif' height='", "' width='", "' /><div class='bfront'>FRONT</div><div class='bback'>BACK</div><div class='resize_help'>RESIZE</div><div class='close_dancer'>X</div><div class='clone_dancer' id='", "stop resizing...", ".dancer", "stop dragging..."];
var model = function() {
  /** @type {Window} */
  var _window = window;
  return{
    ds : [{
      id : 1,
      n : _0x9083[0],
      t : 330,
      l : 400,
      z : 500,
      h : 302,
      w : 234
    }, {
      id : 2,
      n : _0x9083[1],
      t : 380,
      l : 730,
      z : 501,
      h : 283,
      w : 221
    }],
    bg : _0x9083[2],
    s : _0x9083[3],
    df : 2,
    i : 3,
    wn : [$(_window)[_0x9083[4]](), $(_window)[_0x9083[5]]()],
    v : _0x9083[6],
    wasLoaded : false,
    hasChanged : false,
    /**
     * @param {?} el
     * @return {undefined}
     */
    setBG : function(el) {
      this[_0x9083[7]] = el;
      /** @type {boolean} */
      this[_0x9083[8]] = true;
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    addDancer : function(deepDataAndEvents) {
      deepDataAndEvents[_0x9083[9]] = this[_0x9083[10]];
      this[_0x9083[12]][_0x9083[11]](deepDataAndEvents);
      this[_0x9083[10]]++;
      /** @type {boolean} */
      this[_0x9083[8]] = true;
      return deepDataAndEvents[_0x9083[9]];
    },
    /**
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    cloneDancer : function(deepDataAndEvents) {
      deepDataAndEvents[_0x9083[9]] = this[_0x9083[10]];
      this[_0x9083[12]][_0x9083[11]](deepDataAndEvents);
      this[_0x9083[10]]++;
      /** @type {boolean} */
      this[_0x9083[8]] = true;
      return deepDataAndEvents[_0x9083[9]];
    },
    /**
     * @param {string} term
     * @return {undefined}
     */
    removeDancer : function(term) {
      this[_0x9083[12]] = _[_0x9083[14]](this[_0x9083[12]], _[_0x9083[13]](this[_0x9083[12]], {
        id : term
      }));
      /** @type {boolean} */
      this[_0x9083[8]] = true;
    },
    /**
     * @param {string} term
     * @param {?} dataAndEvents
     * @param {?} offsetPosition
     * @return {undefined}
     */
    moveDancer : function(term, dataAndEvents, offsetPosition) {
      var myAt = _[_0x9083[13]](this[_0x9083[12]], {
        id : term
      });
      myAt[_0x9083[15]] = offsetPosition;
      myAt[_0x9083[16]] = dataAndEvents;
      /** @type {boolean} */
      this[_0x9083[8]] = true;
    },
    /**
     * @param {string} term
     * @param {?} offsetPosition
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    resizeDancer : function(term, offsetPosition, dataAndEvents) {
      var myAt = _[_0x9083[13]](this[_0x9083[12]], {
        id : term
      });
      myAt[_0x9083[17]] = offsetPosition;
      myAt[_0x9083[18]] = dataAndEvents;
      /** @type {boolean} */
      this[_0x9083[8]] = true;
    },
    /**
     * @param {string} term
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    changeZ : function(term, dataAndEvents) {
      _[_0x9083[13]](this[_0x9083[12]], {
        id : term
      })[_0x9083[19]] = dataAndEvents;
      /** @type {boolean} */
      this[_0x9083[8]] = true;
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    setSong : function(dataAndEvents) {
      this[_0x9083[20]] = dataAndEvents;
      /** @type {boolean} */
      this[_0x9083[8]] = true;
    },
    /**
     * @param {?} uri
     * @return {undefined}
     */
    load : function(uri) {
      /** @type {boolean} */
      this[_0x9083[21]] = true;
      this[_0x9083[12]] = uri[_0x9083[12]];
      try {
        _[_0x9083[22]](this[_0x9083[12]], function(pair) {
          /** @type {number} */
          pair[_0x9083[9]] = parseInt(pair[_0x9083[9]]);
          /** @type {number} */
          pair[_0x9083[16]] = parseInt(pair[_0x9083[16]]);
          /** @type {number} */
          pair[_0x9083[15]] = parseInt(pair[_0x9083[15]]);
        });
        /** @type {number} */
        this[_0x9083[10]] = parseInt(uri[_0x9083[10]]);
        /** @type {Array} */
        this[_0x9083[23]] = [parseInt(uri[_0x9083[23]][0]), parseInt(uri[_0x9083[23]][1])];
      } catch (ext) {
        console[_0x9083[25]](_0x9083[24], ext);
      }
      this[_0x9083[7]] = uri[_0x9083[7]];
      this[_0x9083[20]] = uri[_0x9083[20]];
      this[_0x9083[26]] = uri[_0x9083[26]];
      this[_0x9083[27]] = uri[_0x9083[27]];
    },
    /**
     * @return {?}
     */
    getShare : function() {
      /** @type {Array} */
      this[_0x9083[23]] = [$(_window)[_0x9083[4]](), $(_window)[_0x9083[5]]()];
      return{
        ds : this[_0x9083[12]],
        bg : this[_0x9083[7]],
        s : this[_0x9083[20]],
        df : this[_0x9083[26]],
        i : this[_0x9083[10]],
        wn : this[_0x9083[23]],
        v : this[_0x9083[27]]
      };
    },
    /**
     * @return {?}
     */
    getTRatio : function() {
      return $(_window)[_0x9083[4]]() / this[_0x9083[23]][0];
    },
    /**
     * @return {?}
     */
    getLRatio : function() {
      return $(_window)[_0x9083[5]]() / this[_0x9083[23]][1];
    }
  };
}();
var sharePath = _0x9083[28];
var bitlyAccessToken = _0x9083[29];
(function($) {
  /**
   * @param {Object} made
   * @return {?}
   */
  $[_0x9083[31]][_0x9083[30]] = function(made) {
    made = made || {};
    made[_0x9083[32]] = _[_0x9083[39]](function(headers, dataAndEvents) {
      model[_0x9083[38]]($(headers[_0x9083[34]])[_0x9083[33]](_0x9083[9]), dataAndEvents[_0x9083[36]][_0x9083[35]], dataAndEvents[_0x9083[36]][_0x9083[37]]);
    }, 300);
    this[_0x9083[43]](_0x9083[40], function() {
      if (!$(this)[_0x9083[33]](_0x9083[41])) {
        $(this)[_0x9083[33]](_0x9083[41], true)[_0x9083[42]](made);
      }
    });
    return $();
  };
})(jQuery);
(function($) {
  /**
   * @param {Object} made
   * @return {?}
   */
  $[_0x9083[31]][_0x9083[44]] = function(made) {
    made = made || {};
    made[_0x9083[45]] = _[_0x9083[39]](function(headers, dataAndEvents) {
      model[_0x9083[48]]($(headers[_0x9083[34]])[_0x9083[46]]()[_0x9083[33]](_0x9083[9]), dataAndEvents[_0x9083[47]][_0x9083[5]], dataAndEvents[_0x9083[47]][_0x9083[4]]);
    }, 300);
    this[_0x9083[43]](_0x9083[40], function() {
      if (!$(this)[_0x9083[33]](_0x9083[41])) {
        $(this)[_0x9083[33]](_0x9083[41], true)[_0x9083[49]](made);
      }
    });
    return $();
  };
})(jQuery);
(function($) {
  /**
   * @return {?}
   */
  $[_0x9083[31]][_0x9083[50]] = function() {
    return this[_0x9083[57]](_0x9083[56], _0x9083[52])[_0x9083[55]](_0x9083[53], _0x9083[54])[_0x9083[52]](_0x9083[51], false);
  };
})(jQuery);
/**
 * @param {?} value
 * @return {undefined}
 */
function playSong(value) {
  var unlock;
  for (unlock in buzz[_0x9083[58]]) {
    var el = buzz[_0x9083[58]][unlock][_0x9083[59]](_0x9083[9]);
    if (el == value) {
      buzz[_0x9083[58]][unlock][_0x9083[61]]()[_0x9083[60]](50);
    }
  }
}
/**
 * @param {?} el
 * @return {undefined}
 */
function center(el) {
  $(el)[_0x9083[55]]({
    position : _0x9083[62],
    left : ($(window)[_0x9083[5]]() - $(el)[_0x9083[63]]()) / 2,
    top : ($(window)[_0x9083[4]]() - $(el)[_0x9083[64]]()) / 2
  });
}
/**
 * @return {undefined}
 */
function fixChromeBug() {
  if (chrome == 1) {
    $(_0x9083[67])[_0x9083[66]]()[_0x9083[65]](0);
    console[_0x9083[25]](_0x9083[68]);
  }
}
/** @type {number} */
var bgNum = 2;
/** @type {number} */
var bgMax = 8;
/** @type {number} */
var zIndex = 500;
/** @type {number} */
var zIndex_low = 499;
/** @type {number} */
var onDancer = 0;
var chrome;
if (navigator[_0x9083[71]][_0x9083[70]](_0x9083[69]) != -1 && parseFloat(navigator[_0x9083[71]][_0x9083[74]](navigator[_0x9083[71]][_0x9083[70]](_0x9083[69]) + 7)[_0x9083[73]](_0x9083[72])[0]) >= 15) {
  /** @type {number} */
  chrome = 1;
} else {
  /** @type {number} */
  chrome = 0;
}
$(function() {
  center($(_0x9083[75]));
  $(_0x9083[75])[_0x9083[65]]();
  $(_0x9083[76])[_0x9083[66]]();
  $(_0x9083[77])[_0x9083[66]]();
  $(_0x9083[78])[_0x9083[66]]();
  /**
   * @return {undefined}
   */
  $[_0x9083[31]][_0x9083[79]] = function() {
    this[_0x9083[22]](function() {
      $(_0x9083[81])[0][_0x9083[80]] = this;
    });
  };
  $([_0x9083[82], _0x9083[83], _0x9083[84], _0x9083[85], _0x9083[86], _0x9083[87], _0x9083[88], _0x9083[89]])[_0x9083[79]]();
});
$(document)[_0x9083[215]](function() {
  /**
   * @param {?} args
   * @return {undefined}
   */
  function callbackSuccess(args) {
    if (args[_0x9083[181]]) {
      $(_0x9083[176])[_0x9083[175]](_0x9083[2]);
      $(_0x9083[76])[_0x9083[122]](_0x9083[121], false);
      $(_0x9083[76])[_0x9083[122]](_0x9083[182] + args[_0x9083[181]]);
      model[_0x9083[183]](args[_0x9083[181]]);
      $(_0x9083[179])[_0x9083[184]]();
    } else {
      $(_0x9083[176])[_0x9083[175]](args[_0x9083[185]]);
    }
  }
  /**
   * @return {undefined}
   */
  function err() {
    console[_0x9083[25]](_0x9083[186]);
  }
  /** @type {boolean} */
  buzz[_0x9083[91]][_0x9083[90]] = true;
  /** @type {Array} */
  buzz[_0x9083[91]][_0x9083[92]] = [_0x9083[93], _0x9083[94]];
  buzz[_0x9083[91]][_0x9083[79]] = _0x9083[95];
  /** @type {boolean} */
  buzz[_0x9083[91]][_0x9083[96]] = false;
  var _0x968dx20 = new buzz[_0x9083[98]](_0x9083[97]);
  _0x968dx20[_0x9083[100]](_0x9083[9], _0x9083[99]);
  var _0x968dx21 = new buzz[_0x9083[98]](_0x9083[101]);
  _0x968dx21[_0x9083[100]](_0x9083[9], _0x9083[102]);
  var _0x968dx22 = new buzz[_0x9083[98]](_0x9083[103]);
  _0x968dx22[_0x9083[100]](_0x9083[9], _0x9083[104]);
  var _0x968dx23 = new buzz[_0x9083[98]](_0x9083[105]);
  _0x968dx23[_0x9083[100]](_0x9083[9], _0x9083[106]);
  var _0x968dx24 = new buzz[_0x9083[98]](_0x9083[107]);
  _0x968dx24[_0x9083[100]](_0x9083[9], _0x9083[108]);
  var _0x968dx25 = new buzz[_0x9083[98]](_0x9083[109]);
  _0x968dx25[_0x9083[100]](_0x9083[9], _0x9083[110]);
  var _0x968dx26 = new buzz[_0x9083[98]](_0x9083[111]);
  _0x968dx26[_0x9083[100]](_0x9083[9], _0x9083[112]);
  var _0x968dx27 = new buzz[_0x9083[98]](_0x9083[113]);
  _0x968dx27[_0x9083[100]](_0x9083[9], _0x9083[3]);
  var _0x968dx28 = new buzz[_0x9083[98]](_0x9083[114]);
  _0x968dx28[_0x9083[100]](_0x9083[9], _0x9083[115]);
  var _0x968dx29 = new buzz[_0x9083[98]](_0x9083[116]);
  _0x968dx29[_0x9083[100]](_0x9083[9], _0x9083[117]);
  var _0x968dx2a = new buzz[_0x9083[98]](_0x9083[118]);
  _0x968dx2a[_0x9083[100]](_0x9083[9], _0x9083[119]);
  var _0x968dx2b = new buzz[_0x9083[120]]([_0x968dx20, _0x968dx21, _0x968dx25, _0x968dx26, _0x968dx24, _0x968dx22, _0x968dx23, _0x968dx27, _0x968dx28, _0x968dx29, _0x968dx2a]);
  $(_0x9083[126])[_0x9083[125]](function(dataAndEvents) {
    bgNum++;
    if (bgNum > bgMax) {
      /** @type {number} */
      bgNum = 1;
    }
    $(_0x9083[76])[_0x9083[122]](_0x9083[121], false);
    $(_0x9083[76])[_0x9083[122]](_0x9083[123] + bgNum + _0x9083[124]);
    /** @type {number} */
    model[_0x9083[26]] = bgNum;
    model[_0x9083[7]] = _0x9083[2];
  });
  $(document)[_0x9083[52]](_0x9083[127], _0x9083[128], function() {
    if (onDancer == 0) {
      $(this)[_0x9083[55]](_0x9083[129], _0x9083[130]);
      $(this)[_0x9083[55]]({
        "border-width" : _0x9083[131],
        "border-style" : _0x9083[132],
        "border-color" : _0x9083[133]
      });
      $(this)[_0x9083[135]](_0x9083[134])[_0x9083[65]]();
      $(this)[_0x9083[137]](_0x9083[136])[_0x9083[65]]();
      $(this)[_0x9083[137]](_0x9083[138])[_0x9083[65]]();
      /** @type {number} */
      onDancer = 1;
    }
  });
  $(document)[_0x9083[52]](_0x9083[139], _0x9083[128], function() {
    $(this)[_0x9083[55]](_0x9083[129], _0x9083[140]);
    $(this)[_0x9083[55]](_0x9083[141], _0x9083[54]);
    $(this)[_0x9083[135]](_0x9083[134])[_0x9083[66]]();
    $(this)[_0x9083[137]](_0x9083[136])[_0x9083[66]]();
    $(this)[_0x9083[137]](_0x9083[138])[_0x9083[66]]();
    /** @type {number} */
    onDancer = 0;
  });
  $(document)[_0x9083[52]](_0x9083[125], _0x9083[142], function() {
    var _0x968dx2c = $(this)[_0x9083[144]](_0x9083[128])[_0x9083[143]]();
    model[_0x9083[145]](_0x968dx2c[_0x9083[33]](_0x9083[9]));
    /** @type {number} */
    onDancer = 0;
  });
  $(document)[_0x9083[52]](_0x9083[125], _0x9083[146], function() {
    var zi = $(this)[_0x9083[144]](_0x9083[128])[_0x9083[55]](_0x9083[147], zIndex);
    model[_0x9083[148]](zi[_0x9083[33]](_0x9083[9]), zIndex);
    zIndex++;
  });
  $(document)[_0x9083[52]](_0x9083[125], _0x9083[149], function() {
    var _0x968dx2d = $(this)[_0x9083[144]](_0x9083[128])[_0x9083[55]](_0x9083[147], zIndex_low);
    model[_0x9083[148]](_0x968dx2d[_0x9083[33]](_0x9083[9]), zIndex_low);
    zIndex_low--;
  });
  $(document)[_0x9083[52]](_0x9083[125], _0x9083[150], function() {
    var name = $(this)[_0x9083[57]](_0x9083[9]);
    console[_0x9083[25]](_0x9083[151] + name);
    /** @type {number} */
    var z = zIndex++;
    var _0x968dx5 = model[_0x9083[152]]({
      n : name,
      t : 50,
      l : 20,
      z : z
    });
    $(_0x9083[159])[_0x9083[158]](_0x9083[153] + _0x968dx5 + _0x9083[154] + z + _0x9083[155] + name + _0x9083[156] + name + _0x9083[157]);
  });
  $(_0x9083[166])[_0x9083[125]](function() {
    var importedContacts = $(this)[_0x9083[57]](_0x9083[9]);
    if (importedContacts != _0x9083[2]) {
      /** @type {number} */
      var z = zIndex++;
      var _0x968dx5 = model[_0x9083[160]]({
        n : importedContacts,
        t : 50,
        l : 20,
        z : z
      });
      $(_0x9083[159])[_0x9083[158]](_0x9083[153] + _0x968dx5 + _0x9083[154] + z + _0x9083[155] + importedContacts + _0x9083[156] + importedContacts + _0x9083[157]);
      $(_0x9083[162])[_0x9083[161]](_0x9083[2]);
      $(_0x9083[165])[_0x9083[164]](_0x9083[163], function(dataAndEvents) {
        return false;
      });
    }
    $(_0x9083[77])[_0x9083[66]]();
    /** @type {boolean} */
    model[_0x9083[8]] = true;
  });
  $(_0x9083[169])[_0x9083[125]](function() {
    var udataCur = $(this)[_0x9083[57]](_0x9083[9]);
    _0x968dx2b[_0x9083[167]]();
    playSong(udataCur);
    model[_0x9083[168]](udataCur);
    $(_0x9083[77])[_0x9083[66]]();
    /** @type {boolean} */
    model[_0x9083[8]] = true;
  });
  $(_0x9083[172])[_0x9083[125]](function() {
    $(_0x9083[77])[_0x9083[66]]();
    var statsTemplate = _0x9083[170] + $(this)[_0x9083[57]](_0x9083[9]);
    center($(statsTemplate));
    $(statsTemplate)[_0x9083[171]](500);
  });
  $(_0x9083[173])[_0x9083[125]](function() {
    $(_0x9083[77])[_0x9083[66]]();
  });
  $(_0x9083[180])[_0x9083[125]](function() {
    $(_0x9083[176])[_0x9083[175]](_0x9083[174]);
    $(_0x9083[179])[_0x9083[178]]({
      dataType : _0x9083[177],
      /** @type {function (?): undefined} */
      success : callbackSuccess,
      /** @type {function (): undefined} */
      error : err
    });
  });
  $(_0x9083[214])[_0x9083[125]](function() {
    $(_0x9083[188])[_0x9083[161]](_0x9083[187]);
    var r20 = _0x9083[189] + (sharePath || window[_0x9083[191]][_0x9083[190]]);
    /** @type {string} */
    var x = r20 + _0x9083[192] + decodeURIComponent($[_0x9083[194]]({
      d : model[_0x9083[193]]()
    }));
    console[_0x9083[25]](x);
    var url = _0x9083[195] + bitlyAccessToken + _0x9083[196];
    /**
     * @return {undefined}
     */
    var showError = function() {
      alert(_0x9083[197]);
    };
    /**
     * @param {string} url
     * @return {undefined}
     */
    var getJSON = function(url) {
      $[_0x9083[203]]({
        dataType : _0x9083[177],
        url : url,
        /**
         * @param {?} textStatus
         * @return {undefined}
         */
        success : function(textStatus) {
          if (textStatus[_0x9083[198]] == _0x9083[199]) {
            $(_0x9083[188])[_0x9083[161]](textStatus[_0x9083[33]][_0x9083[200]]);
            $(_0x9083[202])[_0x9083[57]](_0x9083[201], textStatus[_0x9083[33]][_0x9083[200]]);
          } else {
            showError();
          }
        },
        /**
         * @return {undefined}
         */
        error : function() {
          showError();
        }
      });
    };
    if (model[_0x9083[8]]) {
      url += _0x9083[204] + encodeURIComponent(x);
      getJSON(url);
    } else {
      if (model[_0x9083[21]] && !model[_0x9083[8]]) {
        console[_0x9083[25]](window[_0x9083[191]]);
        url += _0x9083[204] + encodeURIComponent(window[_0x9083[191]]);
        getJSON(url);
      } else {
        $(_0x9083[188])[_0x9083[161]](r20);
        $(_0x9083[202])[_0x9083[57]](_0x9083[201], r20);
      }
    }
    var newPath = _0x9083[205];
    ZeroClipboard[_0x9083[206]]({
      moviePath : newPath
    });
    var clip = new ZeroClipboard(document[_0x9083[208]](_0x9083[207]));
    clip[_0x9083[52]](_0x9083[209], function(dataAndEvents, deepDataAndEvents) {
    });
    clip[_0x9083[52]](_0x9083[210], function(dataAndEvents, deepDataAndEvents) {
    });
    clip[_0x9083[52]](_0x9083[211], function(dataAndEvents) {
    });
    clip[_0x9083[52]](_0x9083[212], function(dataAndEvents, deepDataAndEvents) {
      $(_0x9083[188])[_0x9083[213]]();
    });
  });
  $(_0x9083[188])[_0x9083[52]](_0x9083[125], function() {
    $(this)[_0x9083[213]]();
  });
  $(window)[_0x9083[45]](function() {
  });
  $(_0x9083[165])[_0x9083[164]](_0x9083[163], function(dataAndEvents) {
    return false;
  });
});
$(window)[_0x9083[211]](function() {
  $(_0x9083[75])[_0x9083[66]]();
  $(_0x9083[76])[_0x9083[65]]();
  $(_0x9083[78])[_0x9083[65]]();
  $(_0x9083[216])[_0x9083[50]]();
  $(_0x9083[217])[_0x9083[50]]();
  $(_0x9083[77])[_0x9083[50]]();
  var obj = $[_0x9083[219]][_0x9083[218]]();
  if (_[_0x9083[221]](obj, _0x9083[220])) {
    model[_0x9083[211]](obj[_0x9083[220]]);
  }
  zIndex = _[_0x9083[222]](model[_0x9083[12]], function(dataAndEvents) {
    return dataAndEvents[_0x9083[19]];
  })[_0x9083[19]];
  if (model[_0x9083[7]] == _0x9083[2]) {
    $(_0x9083[76])[_0x9083[122]](_0x9083[123] + model[_0x9083[26]] + _0x9083[124]);
  } else {
    $(_0x9083[76])[_0x9083[122]](_0x9083[182] + model[_0x9083[7]]);
  }
  playSong(model[_0x9083[20]]);
  _[_0x9083[22]](model[_0x9083[12]], function(dataAndEvents) {
    var _0x968dx40 = dataAndEvents[_0x9083[16]] = Math[_0x9083[224]](dataAndEvents[_0x9083[16]] * model[_0x9083[223]]());
    var _0x968dx41 = dataAndEvents[_0x9083[15]] = Math[_0x9083[224]](dataAndEvents[_0x9083[15]] * model[_0x9083[225]]());
    $(_0x9083[159])[_0x9083[158]](_0x9083[153] + dataAndEvents[_0x9083[9]] + _0x9083[154] + dataAndEvents[_0x9083[19]] + _0x9083[226] + _0x968dx40 + _0x9083[227] + _0x968dx41 + _0x9083[228] + dataAndEvents[_0x9083[229]] + _0x9083[230] + dataAndEvents[_0x9083[18]] + _0x9083[231] + dataAndEvents[_0x9083[17]] + _0x9083[232] + dataAndEvents[_0x9083[229]] + _0x9083[157]);
  });
  $(_0x9083[234])[_0x9083[44]]({
    /**
     * @return {undefined}
     */
    stop : function() {
      console[_0x9083[25]](_0x9083[233]);
      fixChromeBug();
    }
  });
  $(_0x9083[128])[_0x9083[30]]({
    scroll : false,
    /**
     * @return {undefined}
     */
    stop : function() {
      console[_0x9083[25]](_0x9083[235]);
      fixChromeBug();
    }
  });
  $(_0x9083[128])[_0x9083[22]](function() {
    $(this)[_0x9083[55]](_0x9083[129], _0x9083[140]);
    $(this)[_0x9083[55]](_0x9083[141], _0x9083[54]);
    $(this)[_0x9083[135]](_0x9083[134])[_0x9083[66]]();
  });
  $(_0x9083[165])[_0x9083[164]](_0x9083[163], function(dataAndEvents) {
    return false;
  });
});
