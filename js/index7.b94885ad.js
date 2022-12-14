function t(t) {
  return t && t.__esModule ? t.default : t
}
var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
  r = {},
  n = {},
  i = e.parcelRequiredfe1;
null == i && ((i = function (t) {
  if (t in r) return r[t].exports;
  if (t in n) {
    var e = n[t];
    delete n[t];
    var i = {
      id: t,
      exports: {}
    };
    return r[t] = i, e.call(i.exports, i, i.exports), i.exports
  }
  var o = new Error("Cannot find module '" + t + "'");
  throw o.code = "MODULE_NOT_FOUND", o
}).register = function (t, e) {
  n[t] = e
}, e.parcelRequiredfe1 = i), i.register("4hJWI", (function (t, e) {
  ! function (e, r) {
    t.exports ? t.exports = r() : e.EvEmitter = r()
  }("undefined" != typeof window ? window : t.exports, (function () {
    function t() {}
    let e = t.prototype;
    return e.on = function (t, e) {
      if (!t || !e) return this;
      let r = this._events = this._events || {},
        n = r[t] = r[t] || [];
      return n.includes(e) || n.push(e), this
    }, e.once = function (t, e) {
      if (!t || !e) return this;
      this.on(t, e);
      let r = this._onceEvents = this._onceEvents || {};
      return (r[t] = r[t] || {})[e] = !0, this
    }, e.off = function (t, e) {
      let r = this._events && this._events[t];
      if (!r || !r.length) return this;
      let n = r.indexOf(e);
      return -1 != n && r.splice(n, 1), this
    }, e.emitEvent = function (t, e) {
      let r = this._events && this._events[t];
      if (!r || !r.length) return this;
      r = r.slice(0), e = e || [];
      let n = this._onceEvents && this._onceEvents[t];
      for (let i of r) {
        n && n[i] && (this.off(t, i), delete n[i]), i.apply(this, e)
      }
      return this
    }, e.allOff = function () {
      return delete this._events, delete this._onceEvents, this
    }, t
  }))
}));
var o = {};
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function (t, e) {
  o ? o = e(t, i("4hJWI")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : o, (function (t, e) {
  let r = t.jQuery,
    n = t.console;

  function i(t, e, o) {
    if (!(this instanceof i)) return new i(t, e, o);
    let s = t;
    var a;
    ("string" == typeof t && (s = document.querySelectorAll(t)), s) ? (this.elements = (a = s, Array.isArray(a) ? a : "object" == typeof a && "number" == typeof a.length ? [...a] : [a]), this.options = {}, "function" == typeof e ? o = e : Object.assign(this.options, e), o && this.on("always", o), this.getImages(), r && (this.jqDeferred = new r.Deferred), setTimeout(this.check.bind(this))) : n.error(`Bad element for imagesLoaded ${s||t}`)
  }
  i.prototype = Object.create(e.prototype), i.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  };
  const o = [1, 9, 11];
  i.prototype.addElementImages = function (t) {
    "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
    let {
      nodeType: e
    } = t;
    if (!e || !o.includes(e)) return;
    let r = t.querySelectorAll("img");
    for (let t of r) this.addImage(t);
    if ("string" == typeof this.options.background) {
      let e = t.querySelectorAll(this.options.background);
      for (let t of e) this.addElementBackgroundImages(t)
    }
  };
  const s = /url\((['"])?(.*?)\1\)/gi;

  function a(t) {
    this.img = t
  }

  function u(t, e) {
    this.url = t, this.element = e, this.img = new Image
  }
  return i.prototype.addElementBackgroundImages = function (t) {
    let e = getComputedStyle(t);
    if (!e) return;
    let r = s.exec(e.backgroundImage);
    for (; null !== r;) {
      let n = r && r[2];
      n && this.addBackground(n, t), r = s.exec(e.backgroundImage)
    }
  }, i.prototype.addImage = function (t) {
    let e = new a(t);
    this.images.push(e)
  }, i.prototype.addBackground = function (t, e) {
    let r = new u(t, e);
    this.images.push(r)
  }, i.prototype.check = function () {
    if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
    let t = (t, e, r) => {
      setTimeout((() => {
        this.progress(t, e, r)
      }))
    };
    this.images.forEach((function (e) {
      e.once("progress", t), e.check()
    }))
  }, i.prototype.progress = function (t, e, r) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log(`progress: ${r}`, t, e)
  }, i.prototype.complete = function () {
    let t = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      let t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this)
    }
  }, a.prototype = Object.create(e.prototype), a.prototype.check = function () {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
  }, a.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth
  }, a.prototype.confirm = function (t, e) {
    this.isLoaded = t;
    let {
      parentNode: r
    } = this.img, n = "PICTURE" === r.nodeName ? r : this.img;
    this.emitEvent("progress", [this, n, e])
  }, a.prototype.handleEvent = function (t) {
    let e = "on" + t.type;
    this[e] && this[e](t)
  }, a.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, a.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, a.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, u.prototype = Object.create(a.prototype), u.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, u.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, u.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
  }, i.makeJQueryPlugin = function (e) {
    (e = e || t.jQuery) && (r = e, r.fn.imagesLoaded = function (t, e) {
      return new i(this, t, e).jqDeferred.promise(r(this))
    })
  }, i.makeJQueryPlugin(), i
}));
var s = {};

function a() {}
a.prototype = {
  on: function (t, e, r) {
    var n = this.e || (this.e = {});
    return (n[t] || (n[t] = [])).push({
      fn: e,
      ctx: r
    }), this
  },
  once: function (t, e, r) {
    var n = this;

    function i() {
      n.off(t, i), e.apply(r, arguments)
    }
    return i._ = e, this.on(t, i, r)
  },
  emit: function (t) {
    for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[n].ctx, e);
    return this
  },
  off: function (t, e) {
    var r = this.e || (this.e = {}),
      n = r[t],
      i = [];
    if (n && e)
      for (var o = 0, s = n.length; o < s; o++) n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
    return i.length ? r[t] = i : delete r[t], this
  }
}, (s = a).TinyEmitter = a;
var u = {};

function l(t, e) {
  return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t
  })(t, e)
}
u = function () {
  var t = 0;

  function e(e) {
    return "__private_" + t++ + "_" + e
  }

  function r(t, e) {
    if (!Object.prototype.hasOwnProperty.call(t, e)) throw new TypeError("attempted to use private field on non-instance");
    return t
  }

  function n() {}
  n.prototype = {
    on: function (t, e, r) {
      var n = this.e || (this.e = {});
      return (n[t] || (n[t] = [])).push({
        fn: e,
        ctx: r
      }), this
    },
    once: function (t, e, r) {
      var n = this;

      function i() {
        n.off(t, i), e.apply(r, arguments)
      }
      return i._ = e, this.on(t, i, r)
    },
    emit: function (t) {
      for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[n].ctx, e);
      return this
    },
    off: function (t, e) {
      var r = this.e || (this.e = {}),
        n = r[t],
        i = [];
      if (n && e)
        for (var o = 0, s = n.length; o < s; o++) n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
      return i.length ? r[t] = i : delete r[t], this
    }
  };
  var i = n;
  i.TinyEmitter = n;
  var o, s = "virtualscroll",
    a = e("options"),
    u = e("el"),
    l = e("emitter"),
    h = e("event"),
    c = e("touchStart"),
    f = e("newTouchAction");
  return function () {
    function t(t) {
      var e = this;
      Object.defineProperty(this, a, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, u, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, l, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, h, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, c, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, f, {
        writable: !0,
        value: void 0
      }), this._onWheel = function (t) {
        var n = r(e, a)[a],
          i = r(e, h)[h];
        i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, o.isFirefox && 1 === t.deltaMode && (i.deltaX *= n.firefoxMultiplier, i.deltaY *= n.firefoxMultiplier), i.deltaX *= n.mouseMultiplier, i.deltaY *= n.mouseMultiplier, e._notify(t)
      }, this._onMouseWheel = function (t) {
        var n = r(e, h)[h];
        n.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, n.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, e._notify(t)
      }, this._onTouchStart = function (t) {
        var n = t.targetTouches ? t.targetTouches[0] : t;
        r(e, c)[c].x = n.pageX, r(e, c)[c].y = n.pageY
      }, this._onTouchMove = function (t) {
        var n = r(e, a)[a];
        n.preventTouch && !t.target.classList.contains(n.unpreventTouchClass) && t.preventDefault();
        var i = r(e, h)[h],
          o = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (o.pageX - r(e, c)[c].x) * n.touchMultiplier, i.deltaY = (o.pageY - r(e, c)[c].y) * n.touchMultiplier, r(e, c)[c].x = o.pageX, r(e, c)[c].y = o.pageY, e._notify(t)
      }, this._onKeyDown = function (t) {
        var n = r(e, h)[h];
        n.deltaX = n.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
          case 37:
          case 38:
            n.deltaY = r(e, a)[a].keyStep;
            break;
          case 39:
          case 40:
            n.deltaY = -r(e, a)[a].keyStep;
            break;
          case 32:
            n.deltaY = i * (t.shiftKey ? 1 : -1);
            break;
          default:
            return
        }
        e._notify(t)
      }, r(this, u)[u] = window, t && t.el && (r(this, u)[u] = t.el, delete t.el), o || (o = {
        hasWheelEvent: "onwheel" in document,
        hasMouseWheelEvent: "onmousewheel" in document,
        hasTouch: "ontouchstart" in document,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: "onkeydown" in document,
        isFirefox: navigator.userAgent.indexOf("Firefox") > -1
      }), r(this, a)[a] = Object.assign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: !1,
        unpreventTouchClass: "vs-touchmove-allowed",
        useKeyboard: !0,
        useTouch: !0
      }, t), r(this, l)[l] = new i, r(this, h)[h] = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
      }, r(this, c)[c] = {
        x: null,
        y: null
      }, r(this, f)[f] = null, void 0 !== r(this, a)[a].passive && (this.listenerOptions = {
        passive: r(this, a)[a].passive
      })
    }
    var e = t.prototype;
    return e._notify = function (t) {
      var e = r(this, h)[h];
      e.x += e.deltaX, e.y += e.deltaY, r(this, l)[l].emit(s, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t
      })
    }, e._bind = function () {
      o.hasWheelEvent && r(this, u)[u].addEventListener("wheel", this._onWheel, this.listenerOptions), o.hasMouseWheelEvent && r(this, u)[u].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), o.hasTouch && r(this, a)[a].useTouch && (r(this, u)[u].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), r(this, u)[u].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), o.hasPointer && o.hasTouchWin && (r(this, f)[f] = document.new.style.msTouchAction, document.new.style.msTouchAction = "none", r(this, u)[u].addEventListener("MSPointerDown", this._onTouchStart, !0), r(this, u)[u].addEventListener("MSPointerMove", this._onTouchMove, !0)), o.hasKeyDown && r(this, a)[a].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
    }, e._unbind = function () {
      o.hasWheelEvent && r(this, u)[u].removeEventListener("wheel", this._onWheel), o.hasMouseWheelEvent && r(this, u)[u].removeEventListener("mousewheel", this._onMouseWheel), o.hasTouch && (r(this, u)[u].removeEventListener("touchstart", this._onTouchStart), r(this, u)[u].removeEventListener("touchmove", this._onTouchMove)), o.hasPointer && o.hasTouchWin && (document.new.style.msTouchAction = r(this, f)[f], r(this, u)[u].removeEventListener("MSPointerDown", this._onTouchStart, !0), r(this, u)[u].removeEventListener("MSPointerMove", this._onTouchMove, !0)), o.hasKeyDown && r(this, a)[a].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
    }, e.on = function (t, e) {
      r(this, l)[l].on(s, t, e);
      var n = r(this, l)[l].e;
      n && n[s] && 1 === n[s].length && this._bind()
    }, e.off = function (t, e) {
      r(this, l)[l].off(s, t, e);
      var n = r(this, l)[l].e;
      (!n[s] || n[s].length <= 0) && this._unbind()
    }, e.destroy = function () {
      r(this, l)[l].off(), this._unbind()
    }, t
  }()
}();
var h = function (e) {
  var r, n;

  function i(r) {
    var n, i, o, s, a = void 0 === r ? {} : r,
      l = a.lerp,
      h = void 0 === l ? .1 : l,
      c = a.smooth,
      f = void 0 === c || c;
    (s = e.call(this) || this).onResize = function (t) {
      var e = t[0];
      e && (s.maxScroll = e.contentRect.height - s.windowHeight)
    }, s.onWindowResize = function () {
      s.windowHeight = window.innerHeight, s.windowWidth = window.innerWidth
    }, s.onWheel = function (t) {
      s.smooth && !t.ctrlKey && t.preventDefault()
    }, s.onVirtualScroll = function (t) {
      var e, r;
      s.stopped || (s.targetScroll -= t.deltaY, s.targetScroll = (r = s.maxScroll, (e = s.targetScroll) < 0 ? 0 : e > r ? r : e))
    }, s.onScroll = function (t) {
      s.scrolling && s.smooth || (s.targetScroll = s.scroll = window.scrollY, s.emit("scroll", {
        scroll: s.scroll
      }))
    }, s.lerp = h, s.smooth = f, document.addEventListener("wheel", s.onWheel, {
      passive: !1
    }), window.addEventListener("scroll", s.onScroll, !1), window.addEventListener("resize", s.onWindowResize, !1);
    var d = (null == (n = navigator) || null == (i = n.userAgentData) ? void 0 : i.platform) || (null == (o = navigator) ? void 0 : o.platform) || "unknown";
    return s.virtualScroll = new(t(u))({
      firefoxMultiplier: 50,
      mouseMultiplier: d.indexOf("Win") > -1 ? 1 : .4,
      useKeyboard: !1,
      useTouch: !1,
      passive: !0
    }), s.virtualScroll.on(s.onVirtualScroll), s.onWindowResize(), s.maxScroll = document.new.offsetHeight - s.windowHeight, s.resizeObserver = new ResizeObserver(s.onResize), s.resizeObserver.observe(document.new), s.targetScroll = s.scroll = window.scrollY, s
  }
  n = e, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, l(r, n);
  var o = i.prototype;
  return o.start = function () {
    this.stopped = !1
  }, o.stop = function () {
    this.stopped = !0
  }, o.destroy = function () {
    document.removeEventListener("wheel", this.onWheel, {
      passive: !1
    }), window.removeEventListener("scroll", this.onScroll, !1), window.removeEventListener("resize", this.onWindowResize, !1), this.virtualScroll.destroy(), this.resizeObserver.disconnect()
  }, o.raf = function () {
    var t;
    this.smooth && !this.stopped && (this.scroll = (1 - (t = this.lerp)) * this.scroll + t * this.targetScroll, Math.round(this.scroll) === Math.round(this.targetScroll) && (this.scroll = this.targetScroll), this.scrolling && (window.scrollTo(0, this.scroll), this.emit("scroll", {
      scroll: this.scroll
    })), this.scrolling = this.scroll !== this.targetScroll)
  }, o.scrollTo = function (t, e) {
    var r, n = (void 0 === e ? {} : e).offset,
      i = void 0 === n ? 0 : n;
    if ("number" == typeof t) r = t;
    else if ("#top" === t) r = 0;
    else if ("#bottom" === t) r = this.maxScroll;
    else {
      var o;
      if ("string" == typeof t) o = document.querySelector(t);
      else {
        if (null == t || !t.nodeType) return;
        o = t
      }
      if (!t) return;
      r = o.getBoundingClientRect().top + this.scroll
    }
    this.targetScroll = r += i, this.scrolling = !0, this.smooth || (this.scroll = r)
  }, i
}(t(s));

function c(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function f(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var d, p, g, _, m, v, y, w, b, x, T, k, M, O, E, S, C, A, P, D, R, z, L, I, Y, B, F, X, W = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  N = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
  q = 2 * Math.PI,
  j = q / 4,
  U = 0,
  H = Math.sqrt,
  V = Math.cos,
  G = Math.sin,
  K = function (t) {
    return "string" == typeof t
  },
  Q = function (t) {
    return "function" == typeof t
  },
  $ = function (t) {
    return "number" == typeof t
  },
  Z = function (t) {
    return void 0 === t
  },
  J = function (t) {
    return "object" == typeof t
  },
  tt = function (t) {
    return !1 !== t
  },
  et = function () {
    return "undefined" != typeof window
  },
  rt = function (t) {
    return Q(t) || K(t)
  },
  nt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
  it = Array.isArray,
  ot = /(?:-?\.?\d|\.)+/gi,
  st = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  at = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  ut = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  lt = /[+-]=-?[.\d]+/,
  ht = /[^,'"\[\]\s]+/gi,
  ct = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ft = {},
  dt = {},
  pt = function (t) {
    return (dt = Xt(t, ft)) && Cr
  },
  gt = function (t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
  },
  _t = function (t, e) {
    return !e && console.warn(t)
  },
  mt = function (t, e) {
    return t && (ft[t] = e) && dt && (dt[t] = e) || ft
  },
  vt = function () {
    return 0
  },
  yt = {},
  wt = [],
  bt = {},
  xt = {},
  Tt = {},
  kt = 30,
  Mt = [],
  Ot = "",
  Et = function (t) {
    var e, r, n = t[0];
    if (J(n) || Q(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
      for (r = Mt.length; r-- && !Mt[r].targetTest(n););
      e = Mt[r]
    }
    for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ze(t[r], e))) || t.splice(r, 1);
    return t
  },
  St = function (t) {
    return t._gsap || Et(ve(t))[0]._gsap
  },
  Ct = function (t, e, r) {
    return (r = t[e]) && Q(r) ? t[e]() : Z(r) && t.getAttribute && t.getAttribute(e) || r
  },
  At = function (t, e) {
    return (t = t.split(",")).forEach(e) || t
  },
  Pt = function (t) {
    return Math.round(1e5 * t) / 1e5 || 0
  },
  Dt = function (t) {
    return Math.round(1e7 * t) / 1e7 || 0
  },
  Rt = function (t, e) {
    var r = e.charAt(0),
      n = parseFloat(e.substr(2));
    return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
  },
  zt = function (t, e) {
    for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
    return n < r
  },
  Lt = function () {
    var t, e, r = wt.length,
      n = wt.slice(0);
    for (bt = {}, wt.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
  },
  It = function (t, e, r, n) {
    wt.length && Lt(), t.render(e, r, n), wt.length && Lt()
  },
  Yt = function (t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(ht).length < 2 ? e : K(t) ? t.trim() : t
  },
  Bt = function (t) {
    return t
  },
  Ft = function (t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t
  },
  Xt = function (t, e) {
    for (var r in e) t[r] = e[r];
    return t
  },
  Wt = function t(e, r) {
    for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = J(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
    return e
  },
  Nt = function (t, e) {
    var r, n = {};
    for (r in t) r in e || (n[r] = t[r]);
    return n
  },
  qt = function (t) {
    var e, r = t.parent || p,
      n = t.keyframes ? (e = it(t.keyframes), function (t, r) {
        for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
      }) : Ft;
    if (tt(t.inherit))
      for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
    return t
  },
  jt = function (t, e, r, n, i) {
    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
    var o, s = t[n];
    if (i)
      for (o = e[i]; s && s[i] > o;) s = s._prev;
    return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t, e
  },
  Ut = function (t, e, r, n) {
    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
    var i = e._prev,
      o = e._next;
    i ? i._next = o : t[r] === e && (t[r] = o), o ? o._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
  },
  Ht = function (t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
  },
  Vt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r;) r._dirty = 1, r = r.parent;
    return t
  },
  Gt = function (t) {
    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
    return t
  },
  Kt = function t(e) {
    return !e || e._ts && t(e.parent)
  },

  Qt = function (t) {
    return t._repeat ? $t(t._tTime, t = t.duration() + t._rDelay) * t : 0
  },
  $t = function (t, e) {
    var r = Math.floor(t /= e);
    return t && r === t ? r - 1 : r
  },
  Zt = function (t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
  },
  Jt = function (t) {
    return t._end = Dt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
  },
  te = function (t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = Dt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Jt(t), r._dirty || Vt(r, t)), t
  },
  ee = function (t, e) {
    var r;
    if ((e._time || e._initted && !e._dur) && (r = Zt(t.rawTime(), e), (!e._dur || de(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)), Vt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration())
        for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
      t._zTime = -1e-8
    }
  },
  re = function (t, e, r, n) {
    return e.parent && Ht(e), e._start = Dt(($(r) ? r : r || t !== p ? he(t, r, e) : t._time) + e._delay), e._end = Dt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), jt(t, e, "_first", "_last", t._sort ? "_start" : 0), se(e) || (t._recent = e), n || ee(t, e), t
  },
  ne = function (t, e) {
    return (ft.ScrollTrigger || gt("scrollTrigger", e)) && ft.ScrollTrigger.create(e, t)
  },
  ie = function (t, e, r, n) {
    return sr(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && y !== Fe.frame ? (wt.push(t), t._lazy = [e, n], 1) : void 0 : 1
  },
  oe = function t(e) {
    var r = e.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
  },
  se = function (t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e
  },
  ae = function (t, e, r, n) {
    var i = t._repeat,
      o = Dt(e) || 0,
      s = t._tTime / t._tDur;
    return s && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : Dt(o * (i + 1) + t._rDelay * i) : o, s > 0 && !n ? te(t, t._tTime = t._tDur * s) : t.parent && Jt(t), r || Vt(t.parent, t), t
  },
  ue = function (t) {
    return t instanceof tr ? Vt(t) : ae(t, t._dur)
  },
  le = {
    _start: 0,
    endTime: vt,
    totalDuration: vt
  },
  he = function t(e, r, n) {
    var i, o, s, a = e.labels,
      u = e._recent || le,
      l = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
    return K(r) && (isNaN(r) || r in a) ? (o = r.charAt(0), s = "%" === r.substr(-1), i = r.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = l), a[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), s && n && (o = o / 100 * (it(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : l + o)) : null == r ? l : +r
  },
  ce = function (t, e, r) {
    var n, i, o = $(e[1]),
      s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
      a = e[s];
    if (o && (a.duration = e[1]), a.parent = r, t) {
      for (n = a, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = tt(i.vars.inherit) && i.parent;
      a.immediateRender = tt(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
    }
    return new cr(e[0], a, e[s + 1])
  },
  fe = function (t, e) {
    return t || 0 === t ? e(t) : e
  },
  de = function (t, e, r) {
    return r < t ? t : r > e ? e : r
  },
  pe = function (t, e) {
    return K(t) && (e = ct.exec(t)) ? e[1] : ""
  },
  ge = [].slice,
  _e = function (t, e) {
    return t && J(t) && "length" in t && (!e && !t.length || t.length - 1 in t && J(t[0])) && !t.nodeType && t !== g
  },
  me = function (t, e, r) {
    return void 0 === r && (r = []), t.forEach((function (t) {
      var n;
      return K(t) && !e || _e(t, 1) ? (n = r).push.apply(n, ve(t)) : r.push(t)
    })) || r
  },
  ve = function (t, e, r) {
    return !K(t) || r || !_ && Xe() ? it(t) ? me(t, r) : _e(t) ? ge.call(t, 0) : t ? [t] : [] : ge.call((e || m).querySelectorAll(t), 0)
  },
  ye = function (t) {
    return t.sort((function () {
      return .5 - Math.random()
    }))
  },
  we = function (t) {
    if (Q(t)) return t;
    var e = J(t) ? t : {
        each: t
      },
      r = Ve(e.ease),
      n = e.from || 0,
      i = parseFloat(e.base) || 0,
      o = {},
      s = n > 0 && n < 1,
      a = isNaN(n) || s,
      u = e.axis,
      l = n,
      h = n;
    return K(n) ? l = h = {
        center: .5,
        edges: .5,
        end: 1
      } [n] || 0 : !s && a && (l = n[0], h = n[1]),
      function (t, s, c) {
        var f, d, p, g, _, m, v, y, w, b = (c || e).length,
          x = o[b];
        if (!x) {
          if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
            for (v = -1e8; v < (v = c[w++].getBoundingClientRect().left) && w < b;);
            w--
          }
          for (x = o[b] = [], f = a ? Math.min(w, b) * l - .5 : n % w, d = 1e8 === w ? 0 : a ? b * h / w - .5 : n / w | 0, v = 0, y = 1e8, m = 0; m < b; m++) p = m % w - f, g = d - (m / w | 0), x[m] = _ = u ? Math.abs("y" === u ? g : p) : H(p * p + g * g), _ > v && (v = _), _ < y && (y = _);
          "random" === n && ye(x), x.max = v - y, x.min = y, x.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (w > b ? b - 1 : u ? "y" === u ? b / w : w : Math.max(w, b / w)) || 0) * ("edges" === n ? -1 : 1), x.b = b < 0 ? i - b : i, x.u = pe(e.amount || e.each) || 0, r = r && b < 0 ? Ue(r) : r
        }
        return b = (x[t] - x.min) / x.max || 0, Dt(x.b + (r ? r(b) : b) * x.v) + x.u
      }
  },
  be = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (r) {
      var n = Math.round(parseFloat(r) / t) * t * e;
      return (n - n % 1) / e + ($(r) ? 0 : pe(r))
    }
  },
  xe = function (t, e) {
    var r, n, i = it(t);
    return !i && J(t) && (r = i = t.radius || 1e8, t.values ? (t = ve(t.values), (n = !$(t[0])) && (r *= r)) : t = be(t.increment)), fe(e, i ? Q(t) ? function (e) {
      return n = t(e), Math.abs(n - e) <= r ? n : e
    } : function (e) {
      for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = 1e8, l = 0, h = t.length; h--;)(i = n ? (i = t[h].x - s) * i + (o = t[h].y - a) * o : Math.abs(t[h] - s)) < u && (u = i, l = h);
      return l = !r || u <= r ? t[l] : e, n || l === e || $(e) ? l : l + pe(e)
    } : be(t))
  },
  Te = function (t, e, r, n) {
    return fe(it(t) ? !e : !0 === r ? (r = 0, !1) : !n, (function () {
      return it(t) ? t[~~(Math.random() * t.length)] : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
    }))
  },
  ke = function (t, e, r) {
    return fe(r, (function (r) {
      return t[~~e(r)]
    }))
  },
  Me = function (t) {
    for (var e, r, n, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? ht : ot), s += t.substr(o, e - o) + Te(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), o = n + 1;
    return s + t.substr(o, t.length - o)
  },
  Oe = function (t, e, r, n, i) {
    var o = e - t,
      s = n - r;
    return fe(i, (function (e) {
      return r + ((e - t) / o * s || 0)
    }))
  },
  Ee = function (t, e, r) {
    var n, i, o, s = t.labels,
      a = 1e8;
    for (n in s)(i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (o = n, a = i);
    return o
  },
  Se = function (t, e, r) {
    var n, i, o = t.vars,
      s = o[e];
    if (s) return n = o[e + "Params"], i = o.callbackScope || t, r && wt.length && Lt(), n ? s.apply(i, n) : s.call(i)
  },
  Ce = function (t) {
    return Ht(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Se(t, "onInterrupt"), t
  },
  Ae = function (t) {
    var e = (t = !t.name && t.default || t).name,
      r = Q(t),
      n = e && !r && t.init ? function () {
        this._props = []
      } : t,
      i = {
        init: vt,
        render: wr,
        add: ir,
        kill: xr,
        modifier: br,
        rawVars: 0
      },
      o = {
        targetTest: 0,
        get: 0,
        getSetter: _r,
        aliases: {},
        register: 0
      };
    if (Xe(), t !== n) {
      if (xt[e]) return;
      Ft(n, Ft(Nt(t, i), o)), Xt(n.prototype, Xt(i, Nt(t, o))), xt[n.prop = e] = n, t.targetTest && (Mt.push(n), yt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
    }
    mt(e, n), t.register && t.register(Cr, n, Mr)
  },
  Pe = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0]
  },
  De = function (t, e, r) {
    return 255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + .5 | 0
  },
  Re = function (t, e, r) {
    var n, i, o, s, a, u, l, h, c, f, d = t ? $(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : Pe.black;
    if (!d) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Pe[t]) d = Pe[t];
      else if ("#" === t.charAt(0)) {
        if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & 255, 255 & d, parseInt(t.substr(7), 16) / 255];
        d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
      } else if ("hsl" === t.substr(0, 3))
        if (d = f = t.match(ot), e) {
          if (~t.indexOf("=")) return d = t.match(st), r && d.length < 4 && (d[3] = 1), d
        } else s = +d[0] % 360 / 360, a = +d[1] / 100, n = 2 * (u = +d[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a), d.length > 3 && (d[3] *= 1), d[0] = De(s + 1 / 3, n, i), d[1] = De(s, n, i), d[2] = De(s - 1 / 3, n, i);
      else d = t.match(ot) || Pe.transparent;
      d = d.map(Number)
    }
    return e && !f && (n = d[0] / 255, i = d[1] / 255, o = d[2] / 255, u = ((l = Math.max(n, i, o)) + (h = Math.min(n, i, o))) / 2, l === h ? s = a = 0 : (c = l - h, a = u > .5 ? c / (2 - l - h) : c / (l + h), s = l === n ? (i - o) / c + (i < o ? 6 : 0) : l === i ? (o - n) / c + 2 : (n - i) / c + 4, s *= 60), d[0] = ~~(s + .5), d[1] = ~~(100 * a + .5), d[2] = ~~(100 * u + .5)), r && d.length < 4 && (d[3] = 1), d
  },
  ze = function (t) {
    var e = [],
      r = [],
      n = -1;
    return t.split(Ie).forEach((function (t) {
      var i = t.match(at) || [];
      e.push.apply(e, i), r.push(n += i.length + 1)
    })), e.c = r, e
  },
  Le = function (t, e, r) {
    var n, i, o, s, a = "",
      u = (t + a).match(Ie),
      l = e ? "hsla(" : "rgba(",
      h = 0;
    if (!u) return t;
    if (u = u.map((function (t) {
        return (t = Re(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
      })), r && (o = ze(t), (n = r.c).join(a) !== o.c.join(a)))
      for (s = (i = t.replace(Ie, "1").split(at)).length - 1; h < s; h++) a += i[h] + (~n.indexOf(h) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : r).shift());
    if (!i)
      for (s = (i = t.split(Ie)).length - 1; h < s; h++) a += i[h] + u[h];
    return a + i[s]
  },
  Ie = function () {
    var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (t in Pe) e += "|" + t + "\\b";
    return new RegExp(e + ")", "gi")
  }(),
  Ye = /hsl[a]?\(/,
  Be = function (t) {
    var e, r = t.join(" ");
    if (Ie.lastIndex = 0, Ie.test(r)) return e = Ye.test(r), t[1] = Le(t[1], e), t[0] = Le(t[0], e, ze(t[1])), !0
  },
  Fe = (S = Date.now, C = 500, A = 33, P = S(), D = P, z = R = 1e3 / 240, I = function t(e) {
    var r, n, i, o, s = S() - D,
      a = !0 === e;
    if (s > C && (P += s - A), ((r = (i = (D += s) - P) - z) > 0 || a) && (o = ++M.frame, O = i - 1e3 * M.time, M.time = i /= 1e3, z += r + (r >= R ? 4 : R - r), n = 1), a || (x = T(t)), n)
      for (E = 0; E < L.length; E++) L[E](i, O, o, e)
  }, M = {
    time: 0,
    frame: 0,
    tick: function () {
      I(!0)
    },
    deltaRatio: function (t) {
      return O / (1e3 / (t || 60))
    },
    wake: function () {
      v && (!_ && et() && (g = _ = window, m = g.document || {}, ft.gsap = Cr, (g.gsapVersions || (g.gsapVersions = [])).push(Cr.version), pt(dt || g.GreenSockGlobals || !g.gsap && g || {}), k = g.requestAnimationFrame), x && M.sleep(), T = k || function (t) {
        return setTimeout(t, z - 1e3 * M.time + 1 | 0)
      }, b = 1, I(2))
    },
    sleep: function () {
      (k ? g.cancelAnimationFrame : clearTimeout)(x), b = 0, T = vt
    },
    lagSmoothing: function (t, e) {
      C = t || 1 / 1e-8, A = Math.min(e, C, 0)
    },
    fps: function (t) {
      R = 1e3 / (t || 240), z = 1e3 * M.time + R
    },
    add: function (t, e, r) {
      var n = e ? function (e, r, i, o) {
        t(e, r, i, o), M.remove(n)
      } : t;
      return M.remove(t), L[r ? "unshift" : "push"](n), Xe(), n
    },
    remove: function (t, e) {
      ~(e = L.indexOf(t)) && L.splice(e, 1) && E >= e && E--
    },
    _listeners: L = []
  }),
  Xe = function () {
    return !b && Fe.wake()
  },
  We = {},
  Ne = /^[\d.\-M][\d.\-,\s]/,
  qe = /["']/g,
  je = function (t) {
    for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++) r = o[a], e = a !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(qe, "").trim() : +n, s = r.substr(e + 1).trim();
    return i
  },
  Ue = function (t) {
    return function (e) {
      return 1 - t(1 - e)
    }
  },
  He = function t(e, r) {
    for (var n, i = e._first; i;) i instanceof tr ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
  },
  Ve = function (t, e) {
    return t && (Q(t) ? t : We[t] || function (t) {
      var e, r, n, i, o = (t + "").split("("),
        s = We[o[0]];
      return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [je(o[1])] : (e = t, r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(Yt)) : We._CE && Ne.test(t) ? We._CE("", t) : s
    }(t)) || e
  },
  Ge = function (t, e, r, n) {
    void 0 === r && (r = function (t) {
      return 1 - e(1 - t)
    }), void 0 === n && (n = function (t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
    });
    var i, o = {
      easeIn: e,
      easeOut: r,
      easeInOut: n
    };
    return At(t, (function (t) {
      for (var e in We[t] = ft[t] = o, We[i = t.toLowerCase()] = r, o) We[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = We[t + "." + e] = o[e]
    })), o
  },
  Ke = function (t) {
    return function (e) {
      return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
    }
  },
  Qe = function t(e, r, n) {
    var i = r >= 1 ? r : 1,
      o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
      s = o / q * (Math.asin(1 / i) || 0),
      a = function (t) {
        return 1 === t ? 1 : i * Math.pow(2, -10 * t) * G((t - s) * o) + 1
      },
      u = "out" === e ? a : "in" === e ? function (t) {
        return 1 - a(1 - t)
      } : Ke(a);
    return o = q / o, u.config = function (r, n) {
      return t(e, r, n)
    }, u
  },
  $e = function t(e, r) {
    void 0 === r && (r = 1.70158);
    var n = function (t) {
        return t ? --t * t * ((r + 1) * t + r) + 1 : 0
      },
      i = "out" === e ? n : "in" === e ? function (t) {
        return 1 - n(1 - t)
      } : Ke(n);
    return i.config = function (r) {
      return t(e, r)
    }, i
  };
At("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
  var r = e < 5 ? e + 1 : e;
  Ge(t + ",Power" + (r - 1), e ? function (t) {
    return Math.pow(t, r)
  } : function (t) {
    return t
  }, (function (t) {
    return 1 - Math.pow(1 - t, r)
  }), (function (t) {
    return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
  }))
})), We.Linear.easeNone = We.none = We.Linear.easeIn, Ge("Elastic", Qe("in"), Qe("out"), Qe()), Y = 7.5625, F = 1 / (B = 2.75), Ge("Bounce", (function (t) {
  return 1 - X(1 - t)
}), X = function (t) {
  return t < F ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / B, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / B) * t + .9375 : Y * Math.pow(t - 2.625 / B, 2) + .984375
}), Ge("Expo", (function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0
})), Ge("Circ", (function (t) {
  return -(H(1 - t * t) - 1)
})), Ge("Sine", (function (t) {
  return 1 === t ? 1 : 1 - V(t * j)
})), Ge("Back", $e("in"), $e("out"), $e()), We.SteppedEase = We.steps = ft.SteppedEase = {
  config: function (t, e) {
    void 0 === t && (t = 1);
    var r = 1 / t,
      n = t + (e ? 0 : 1),
      i = e ? 1 : 0;
    return function (t) {
      return ((n * de(0, .99999999, t) | 0) + i) * r
    }
  }
}, N.ease = We["quad.out"], At("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
  return Ot += t + "," + t + "Params,"
}));
var Ze = function (t, e) {
    this.id = U++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ct, this.set = e ? e.getSetter : _r
  },
  Je = function () {
    function t(t) {
      this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ae(this, +t.duration, 1, 1), this.data = t.data, b || Fe.wake()
    }
    var e = t.prototype;
    return e.delay = function (t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
    }, e.duration = function (t) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }, e.totalDuration = function (t) {
      return arguments.length ? (this._dirty = 0, ae(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e.totalTime = function (t, e) {
      if (Xe(), !arguments.length) return this._tTime;
      var r = this._dp;
      if (r && r.smoothChildTiming && this._ts) {
        for (te(this, t), !r._dp || r.parent || ee(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && re(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), It(this, t, e)), this
    }, e.time = function (t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Qt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }, e.totalProgress = function (t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, e.progress = function (t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Qt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, e.iteration = function (t, e) {
      var r = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? $t(this._tTime, r) + 1 : 1
    }, e.timeScale = function (t) {
      if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
      if (this._rts === t) return this;
      var e = this.parent && this._ts ? Zt(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(de(-this._delay, this._tDur, e), !0), Jt(this), Gt(this)
    }, e.paused = function (t) {
      return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Xe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
    }, e.startTime = function (t) {
      if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return e && (e._sort || !this.parent) && re(e, this, t - this._delay), this
      }
      return this._start
    }, e.endTime = function (t) {
      return this._start + (tt(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e.rawTime = function (t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Zt(e.rawTime(t), this) : this._tTime : this._tTime
    }, e.globalTime = function (t) {
      for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
      return r
    }, e.repeat = function (t) {
      return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, ue(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }, e.repeatDelay = function (t) {
      if (arguments.length) {
        var e = this._time;
        return this._rDelay = t, ue(this), e ? this.time(e) : this
      }
      return this._rDelay
    }, e.yoyo = function (t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo
    }, e.seek = function (t, e) {
      return this.totalTime(he(this, t), tt(e))
    }, e.restart = function (t, e) {
      return this.play().totalTime(t ? -this._delay : 0, tt(e))
    }, e.play = function (t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
    }, e.reverse = function (t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, e.pause = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!0)
    }, e.resume = function () {
      return this.paused(!1)
    }, e.reversed = function (t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
    }, e.invalidate = function () {
      return this._initted = this._act = 0, this._zTime = -1e-8, this
    }, e.isActive = function () {
      var t, e = this.parent || this._dp,
        r = this._start;
      return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8))
    }, e.eventCallback = function (t, e, r) {
      var n = this.vars;
      return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
    }, e.then = function (t) {
      var e = this;
      return new Promise((function (r) {
        var n = Q(t) ? t : Bt,
          i = function () {
            var t = e.then;
            e.then = null, Q(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t
          };
        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
      }))
    }, e.kill = function () {
      Ce(this)
    }, t
  }();
Ft(Je.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var tr = function (t) {
  function e(e, r) {
    var n;
    return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = tt(e.sortChildren), p && re(e.parent || p, c(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && ne(c(n), e.scrollTrigger), n
  }
  f(e, t);
  var r = e.prototype;
  return r.to = function (t, e, r) {
    return ce(0, arguments, this), this
  }, r.from = function (t, e, r) {
    return ce(1, arguments, this), this
  }, r.fromTo = function (t, e, r, n) {
    return ce(2, arguments, this), this
  }, r.set = function (t, e, r) {
    return e.duration = 0, e.parent = this, qt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new cr(t, e, he(this, r), 1), this
  }, r.call = function (t, e, r) {
    return re(this, cr.delayedCall(0, t, e), r)
  }, r.staggerTo = function (t, e, r, n, i, o, s) {
    return r.duration = e, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = s, r.parent = this, new cr(t, r, he(this, i)), this
  }, r.staggerFrom = function (t, e, r, n, i, o, s) {
    return r.runBackwards = 1, qt(r).immediateRender = tt(r.immediateRender), this.staggerTo(t, e, r, n, i, o, s)
  }, r.staggerFromTo = function (t, e, r, n, i, o, s, a) {
    return n.startAt = r, qt(n).immediateRender = tt(n.immediateRender), this.staggerTo(t, e, n, i, o, s, a)
  }, r.render = function (t, e, r) {
    var n, i, o, s, a, u, l, h, c, f, d, g, _ = this._time,
      m = this._dirty ? this.totalDuration() : this._tDur,
      v = this._dur,
      y = t <= 0 ? 0 : Dt(t),
      w = this._zTime < 0 != t < 0 && (this._initted || !v);
    if (this !== p && y > m && t >= 0 && (y = m), y !== this._tTime || r || w) {
      if (_ !== this._time && v && (y += this._time - _, t += this._time - _), n = y, c = this._start, u = !(h = this._ts), w && (v || (_ = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
        if (d = this._yoyo, a = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
        if (n = Dt(y % a), y === m ? (s = this._repeat, n = v) : ((s = ~~(y / a)) && s === y / a && (n = v, s--), n > v && (n = v)), f = $t(this._tTime, a), !_ && this._tTime && f !== s && (f = s), d && 1 & s && (n = v - n, g = 1), s !== f && !this._lock) {
          var b = d && 1 & f,
            x = b === (d && 1 & s);
          if (s < f && (b = !b), _ = b ? 0 : v, this._lock = 1, this.render(_ || (g ? 0 : Dt(s * a)), e, !v)._lock = 0, this._tTime = y, !e && this.parent && Se(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), _ && _ !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (v = this._dur, m = this._tDur, x && (this._lock = 2, _ = b ? v : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
          He(this, g)
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (l = function (t, e, r) {
          var n;
          if (r > e)
            for (n = t._first; n && n._start <= r;) {
              if ("isPause" === n.data && n._start > e) return n;
              n = n._next
            } else
              for (n = t._last; n && n._start >= r;) {
                if ("isPause" === n.data && n._start < e) return n;
                n = n._prev
              }
        }(this, Dt(_), Dt(n)), l && (y -= n - (n = l._start))), this._tTime = y, this._time = n, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && n && !e && (Se(this, "onStart"), this._tTime !== y)) return this;
      if (n >= _ && t >= 0)
        for (i = this._first; i;) {
          if (o = i._next, (i._act || n >= i._start) && i._ts && l !== i) {
            if (i.parent !== this) return this.render(t, e, r);
            if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !u) {
              l = 0, o && (y += this._zTime = -1e-8);
              break
            }
          }
          i = o
        } else {
          i = this._last;
          for (var T = t < 0 ? t : n; i;) {
            if (o = i._prev, (i._act || T <= i._end) && i._ts && l !== i) {
              if (i.parent !== this) return this.render(t, e, r);
              if (i.render(i._ts > 0 ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, e, r), n !== this._time || !this._ts && !u) {
                l = 0, o && (y += this._zTime = T ? -1e-8 : 1e-8);
                break
              }
            }
            i = o
          }
        }
      if (l && !e && (this.pause(), l.render(n >= _ ? 0 : -1e-8)._zTime = n >= _ ? 1 : -1, this._ts)) return this._start = c, Jt(this), this.render(t, e, r);
      this._onUpdate && !e && Se(this, "onUpdate", !0), (y === m && this._tTime >= this.totalDuration() || !y && _) && (c !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === m && this._ts > 0 || !y && this._ts < 0) && Ht(this, 1), e || t < 0 && !_ || !y && !_ && m || (Se(this, y === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < m && this.timeScale() > 0) && this._prom())))
    }
    return this
  }, r.add = function (t, e) {
    var r = this;
    if ($(e) || (e = he(this, e, t)), !(t instanceof Je)) {
      if (it(t)) return t.forEach((function (t) {
        return r.add(t, e)
      })), this;
      if (K(t)) return this.addLabel(t, e);
      if (!Q(t)) return this;
      t = cr.delayedCall(0, t)
    }
    return this !== t ? re(this, t, e) : this
  }, r.getChildren = function (t, e, r, n) {
    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8);
    for (var i = [], o = this._first; o;) o._start >= n && (o instanceof cr ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), o = o._next;
    return i
  }, r.getById = function (t) {
    for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
      if (e[r].vars.id === t) return e[r]
  }, r.remove = function (t) {
    return K(t) ? this.removeLabel(t) : Q(t) ? this.killTweensOf(t) : (Ut(this, t), t === this._recent && (this._recent = this._last), Vt(this))
  }, r.totalTime = function (e, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Dt(Fe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
  }, r.addLabel = function (t, e) {
    return this.labels[t] = he(this, e), this
  }, r.removeLabel = function (t) {
    return delete this.labels[t], this
  }, r.addPause = function (t, e, r) {
    var n = cr.delayedCall(0, e || vt, r);
    return n.data = "isPause", this._hasPause = 1, re(this, n, he(this, t))
  }, r.removePause = function (t) {
    var e = this._first;
    for (t = he(this, t); e;) e._start === t && "isPause" === e.data && Ht(e), e = e._next
  }, r.killTweensOf = function (t, e, r) {
    for (var n = this.getTweensOf(t, r), i = n.length; i--;) er !== n[i] && n[i].kill(t, e);
    return this
  }, r.getTweensOf = function (t, e) {
    for (var r, n = [], i = ve(t), o = this._first, s = $(e); o;) o instanceof cr ? zt(o._targets, i) && (s ? (!er || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
    return n
  }, r.tweenTo = function (t, e) {
    e = e || {};
    var r, n = this,
      i = he(n, t),
      o = e,
      s = o.startAt,
      a = o.onStart,
      u = o.onStartParams,
      l = o.immediateRender,
      h = cr.to(n, Ft({
        ease: e.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: i,
        overwrite: "auto",
        duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || 1e-8,
        onStart: function () {
          if (n.pause(), !r) {
            var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale());
            h._dur !== t && ae(h, t, 0, 1).render(h._time, !0, !0), r = 1
          }
          a && a.apply(h, u || [])
        }
      }, e));
    return l ? h.render(0) : h
  }, r.tweenFromTo = function (t, e, r) {
    return this.tweenTo(e, Ft({
      startAt: {
        time: he(this, t)
      }
    }, r))
  }, r.recent = function () {
    return this._recent
  }, r.nextLabel = function (t) {
    return void 0 === t && (t = this._time), Ee(this, he(this, t))
  }, r.previousLabel = function (t) {
    return void 0 === t && (t = this._time), Ee(this, he(this, t), 1)
  }, r.currentLabel = function (t) {
    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
  }, r.shiftChildren = function (t, e, r) {
    void 0 === r && (r = 0);
    for (var n, i = this._first, o = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
    if (e)
      for (n in o) o[n] >= r && (o[n] += t);
    return Vt(this)
  }, r.invalidate = function () {
    var e = this._first;
    for (this._lock = 0; e;) e.invalidate(), e = e._next;
    return t.prototype.invalidate.call(this)
  }, r.clear = function (t) {
    void 0 === t && (t = !0);
    for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
    return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Vt(this)
  }, r.totalDuration = function (t) {
    var e, r, n, i = 0,
      o = this,
      s = o._last,
      a = 1e8;
    if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
    if (o._dirty) {
      for (n = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && o._sort && s._ts && !o._lock ? (o._lock = 1, re(o, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (i -= r, (!n && !o._dp || n && n.smoothChildTiming) && (o._start += r / o._ts, o._time -= r, o._tTime -= r), o.shiftChildren(-r, !1, -1 / 0), a = 0), s._end > i && s._ts && (i = s._end), s = e;
      ae(o, o === p && o._time > i ? o._time : i, 1, 1), o._dirty = 0
    }
    return o._tDur
  }, e.updateRoot = function (t) {
    if (p._ts && (It(p, Zt(t, p)), y = Fe.frame), Fe.frame >= kt) {
      kt += W.autoSleep || 120;
      var e = p._first;
      if ((!e || !e._ts) && W.autoSleep && Fe._listeners.length < 2) {
        for (; e && !e._ts;) e = e._next;
        e || Fe.sleep()
      }
    }
  }, e
}(Je);
Ft(tr.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var er, rr, nr = function (t, e, r, n, i, o, s) {
    var a, u, l, h, c, f, d, p, g = new Mr(this._pt, t, e, 0, 1, yr, null, i),
      _ = 0,
      m = 0;
    for (g.b = r, g.e = n, r += "", (d = ~(n += "").indexOf("random(")) && (n = Me(n)), o && (o(p = [r, n], t, e), r = p[0], n = p[1]), u = r.match(ut) || []; a = ut.exec(n);) h = a[0], c = n.substring(_, a.index), l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1), h !== u[m++] && (f = parseFloat(u[m - 1]) || 0, g._pt = {
      _next: g._pt,
      p: c || 1 === m ? c : ",",
      s: f,
      c: "=" === h.charAt(1) ? Rt(f, h) - f : parseFloat(h) - f,
      m: l && l < 4 ? Math.round : 0
    }, _ = ut.lastIndex);
    return g.c = _ < n.length ? n.substring(_, n.length) : "", g.fp = s, (lt.test(n) || d) && (g.e = 0), this._pt = g, g
  },
  ir = function (t, e, r, n, i, o, s, a, u) {
    Q(n) && (n = n(i || 0, t, o));
    var l, h = t[e],
      c = "get" !== r ? r : Q(h) ? u ? t[e.indexOf("set") || !Q(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h,
      f = Q(h) ? u ? pr : dr : fr;
    if (K(n) && (~n.indexOf("random(") && (n = Me(n)), "=" === n.charAt(1) && ((l = Rt(c, n) + (pe(c) || 0)) || 0 === l) && (n = l)), c !== n || rr) return isNaN(c * n) || "" === n ? (!h && !(e in t) && gt(e, n), nr.call(this, t, e, c, n, f, a || W.stringFilter, u)) : (l = new Mr(this._pt, t, e, +c || 0, n - (c || 0), "boolean" == typeof h ? vr : mr, 0, f), u && (l.fp = u), s && l.modifier(s, this, t), this._pt = l)
  },
  or = function (t, e, r, n, i, o) {
    var s, a, u, l;
    if (xt[t] && !1 !== (s = new xt[t]).init(i, s.rawVars ? e[t] : function (t, e, r, n, i) {
        if (Q(t) && (t = ur(t, i, e, r, n)), !J(t) || t.style && t.nodeType || it(t) || nt(t)) return K(t) ? ur(t, i, e, r, n) : t;
        var o, s = {};
        for (o in t) s[o] = ur(t[o], i, e, r, n);
        return s
      }(e[t], n, i, o, r), r, n, o) && (r._pt = a = new Mr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority), r !== w))
      for (u = r._ptLookup[r._targets.indexOf(i)], l = s._props.length; l--;) u[s._props[l]] = a;
    return s
  },
  sr = function t(e, r) {
    var n, i, o, s, a, u, l, h, c, f, g, _, m, v = e.vars,
      y = v.ease,
      w = v.startAt,
      b = v.immediateRender,
      x = v.lazy,
      T = v.onUpdate,
      k = v.onUpdateParams,
      M = v.callbackScope,
      O = v.runBackwards,
      E = v.yoyoEase,
      S = v.keyframes,
      C = v.autoRevert,
      A = e._dur,
      P = e._startAt,
      D = e._targets,
      R = e.parent,
      z = R && "nested" === R.data ? R.parent._targets : D,
      L = "auto" === e._overwrite && !d,
      I = e.timeline;
    if (I && (!S || !y) && (y = "none"), e._ease = Ve(y, N.ease), e._yEase = E ? Ue(Ve(!0 === E ? y : E, N.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !I && !!v.runBackwards, !I || S && !v.stagger) {
      if (_ = (h = D[0] ? St(D[0]).harness : 0) && v[h.prop], n = Nt(v, yt), P && (Ht(P.render(-1, !0)), P._lazy = 0), w)
        if (Ht(e._startAt = cr.set(D, Ft({
            data: "isStart",
            overwrite: !1,
            parent: R,
            immediateRender: !0,
            lazy: tt(x),
            startAt: null,
            delay: 0,
            onUpdate: T,
            onUpdateParams: k,
            callbackScope: M,
            stagger: 0
          }, w))), r < 0 && !b && !C && e._startAt.render(-1, !0), b) {
          if (r > 0 && !C && (e._startAt = 0), A && r <= 0) return void(r && (e._zTime = r))
        } else !1 === C && (e._startAt = 0);
      else if (O && A)
        if (P) !C && (e._startAt = 0);
        else if (r && (b = !1), o = Ft({
          overwrite: !1,
          data: "isFromStart",
          lazy: b && tt(x),
          immediateRender: b,
          stagger: 0,
          parent: R
        }, n), _ && (o[h.prop] = _), Ht(e._startAt = cr.set(D, o)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, b) {
        if (!r) return
      } else t(e._startAt, 1e-8);
      for (e._pt = e._ptCache = 0, x = A && tt(x) || x && !A, i = 0; i < D.length; i++) {
        if (l = (a = D[i])._gsap || Et(D)[i]._gsap, e._ptLookup[i] = f = {}, bt[l.id] && wt.length && Lt(), g = z === D ? i : z.indexOf(a), h && !1 !== (c = new h).init(a, _ || n, e, g, z) && (e._pt = s = new Mr(e._pt, a, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach((function (t) {
            f[t] = s
          })), c.priority && (u = 1)), !h || _)
          for (o in n) xt[o] && (c = or(o, n, e, g, a, z)) ? c.priority && (u = 1) : f[o] = s = ir.call(e, a, o, "get", n[o], g, z, 0, v.stringFilter);
        e._op && e._op[i] && e.kill(a, e._op[i]), L && e._pt && (er = e, p.killTweensOf(a, f, e.globalTime(r)), m = !e.parent, er = 0), e._pt && x && (bt[l.id] = 1)
      }
      u && kr(e), e._onInit && e._onInit(e)
    }
    e._onUpdate = T, e._initted = (!e._op || e._pt) && !m, S && r <= 0 && I.render(1e8, !0, !0)
  },
  ar = function (t, e, r, n) {
    var i, o, s = e.ease || n || "power1.inOut";
    if (it(e)) o = r[t] || (r[t] = []), e.forEach((function (t, r) {
      return o.push({
        t: r / (e.length - 1) * 100,
        v: t,
        e: s
      })
    }));
    else
      for (i in e) o = r[i] || (r[i] = []), "ease" === i || o.push({
        t: parseFloat(t),
        v: e[i],
        e: s
      })
  },
  ur = function (t, e, r, n, i) {
    return Q(t) ? t.call(e, r, n, i) : K(t) && ~t.indexOf("random(") ? Me(t) : t
  },
  lr = Ot + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  hr = {};
At(lr + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
  return hr[t] = 1
}));
var cr = function (t) {
  function e(e, r, n, i) {
    var o;
    "number" == typeof r && (n.duration = r, r = n, n = null);
    var s, a, u, l, h, f, g, _, m = (o = t.call(this, i ? r : qt(r)) || this).vars,
      v = m.duration,
      y = m.delay,
      w = m.immediateRender,
      b = m.stagger,
      x = m.overwrite,
      T = m.keyframes,
      k = m.defaults,
      M = m.scrollTrigger,
      O = m.yoyoEase,
      E = r.parent || p,
      S = (it(e) || nt(e) ? $(e[0]) : "length" in r) ? [e] : ve(e);
    if (o._targets = S.length ? Et(S) : _t("GSAP target " + e + " not found. https://greensock.com", !W.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = x, T || b || rt(v) || rt(y)) {
      if (r = o.vars, (s = o.timeline = new tr({
          data: "nested",
          defaults: k || {}
        })).kill(), s.parent = s._dp = c(o), s._start = 0, b || rt(v) || rt(y)) {
        if (l = S.length, g = b && we(b), J(b))
          for (h in b) ~lr.indexOf(h) && (_ || (_ = {}), _[h] = b[h]);
        for (a = 0; a < l; a++)(u = Nt(r, hr)).stagger = 0, O && (u.yoyoEase = O), _ && Xt(u, _), f = S[a], u.duration = +ur(v, c(o), a, f, S), u.delay = (+ur(y, c(o), a, f, S) || 0) - o._delay, !b && 1 === l && u.delay && (o._delay = y = u.delay, o._start += y, u.delay = 0), s.to(f, u, g ? g(a, f, S) : 0), s._ease = We.none;
        s.duration() ? v = y = 0 : o.timeline = 0
      } else if (T) {
        qt(Ft(s.vars.defaults, {
          ease: "none"
        })), s._ease = Ve(T.ease || r.ease || "none");
        var C, A, P, D = 0;
        if (it(T)) T.forEach((function (t) {
          return s.to(S, t, ">")
        }));
        else {
          for (h in u = {}, T) "ease" === h || "easeEach" === h || ar(h, T[h], u, T.easeEach);
          for (h in u)
            for (C = u[h].sort((function (t, e) {
                return t.t - e.t
              })), D = 0, a = 0; a < C.length; a++)(P = {
              ease: (A = C[a]).e,
              duration: (A.t - (a ? C[a - 1].t : 0)) / 100 * v
            })[h] = A.v, s.to(S, P, D), D += P.duration;
          s.duration() < v && s.to({}, {
            duration: v - s.duration()
          })
        }
      }
      v || o.duration(v = s.duration())
    } else o.timeline = 0;
    return !0 !== x || d || (er = c(o), p.killTweensOf(S), er = 0), re(E, c(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (w || !v && !T && o._start === Dt(E._time) && tt(w) && Kt(c(o)) && "nested" !== E.data) && (o._tTime = -1e-8, o.render(Math.max(0, -y))), M && ne(c(o), M), o
  }
  f(e, t);
  var r = e.prototype;
  return r.render = function (t, e, r) {
    var n, i, o, s, a, u, l, h, c, f = this._time,
      d = this._tDur,
      p = this._dur,
      g = t > d - 1e-8 && t >= 0 ? d : t < 1e-8 ? 0 : t;
    if (p) {
      if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
        if (n = g, h = this.timeline, this._repeat) {
          if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
          if (n = Dt(g % s), g === d ? (o = this._repeat, n = p) : ((o = ~~(g / s)) && o === g / s && (n = p, o--), n > p && (n = p)), (u = this._yoyo && 1 & o) && (c = this._yEase, n = p - n), a = $t(this._tTime, s), n === f && !r && this._initted) return this._tTime = g, this;
          o !== a && (h && this._yEase && He(h, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(Dt(s * o), !0).invalidate()._lock = 0))
        }
        if (!this._initted) {
          if (ie(this, t < 0 ? t : n, r, e)) return this._tTime = 0, this;
          if (f !== this._time) return this;
          if (p !== this._dur) return this.render(t, e, r)
        }
        if (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (c || this._ease)(n / p), this._from && (this.ratio = l = 1 - l), n && !f && !e && (Se(this, "onStart"), this._tTime !== g)) return this;
        for (i = this._pt; i;) i.r(l, i.d), i = i._next;
        h && h.render(t < 0 ? t : !n && u ? -1e-8 : h._dur * h._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), Se(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && Se(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !p) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Ht(this, 1), e || t < 0 && !f || !g && !f || (Se(this, g === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < d && this.timeScale() > 0) && this._prom()))
      }
    } else ! function (t, e, r, n) {
      var i, o, s, a = t.ratio,
        u = e < 0 || !e && (!t._start && oe(t) && (t._initted || !se(t)) || (t._ts < 0 || t._dp._ts < 0) && !se(t)) ? 0 : 1,
        l = t._rDelay,
        h = 0;
      if (l && t._repeat && (h = de(0, t._tDur, e), o = $t(h, l), t._yoyo && 1 & o && (u = 1 - u), o !== $t(t._tTime, l) && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || n || 1e-8 === t._zTime || !e && t._zTime) {
        if (!t._initted && ie(t, e, n, r)) return;
        for (s = t._zTime, t._zTime = e || (r ? 1e-8 : 0), r || (r = e && !s), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = h, i = t._pt; i;) i.r(u, i.d), i = i._next;
        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && Se(t, "onUpdate"), h && t._repeat && !r && t.parent && Se(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Ht(t, 1), r || (Se(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
      } else t._zTime || (t._zTime = e)
    }(this, t, e, r);
    return this
  }, r.targets = function () {
    return this._targets
  }, r.invalidate = function () {
    return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
  }, r.resetTo = function (t, e, r, n) {
    b || Fe.wake(), this._ts || this.play();
    var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
    return this._initted || sr(this, i),
      function (t, e, r, n, i, o, s) {
        var a, u, l, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!h)
          for (h = t._ptCache[e] = [], u = t._ptLookup, l = t._targets.length; l--;) {
            if ((a = u[l][e]) && a.d && a.d._pt)
              for (a = a.d._pt; a && a.p !== e;) a = a._next;
            if (!a) return rr = 1, t.vars[e] = "+=0", sr(t, s), rr = 0, 1;
            h.push(a)
          }
        for (l = h.length; l--;)(a = h[l]).s = !n && 0 !== n || i ? a.s + (n || 0) + o * a.c : n, a.c = r - a.s, a.e && (a.e = Pt(r) + pe(a.e)), a.b && (a.b = a.s + pe(a.b))
      }(this, t, e, r, n, this._ease(i / this._dur), i) ? this.resetTo(t, e, r, n) : (te(this, 0), this.parent || jt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
  }, r.kill = function (t, e) {
    if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Ce(this) : this;
    if (this.timeline) {
      var r = this.timeline.totalDuration();
      return this.timeline.killTweensOf(t, e, er && !0 !== er.vars.overwrite)._first || Ce(this), this.parent && r !== this.timeline.totalDuration() && ae(this, this._dur * this.timeline._tDur / r, 0, 1), this
    }
    var n, i, o, s, a, u, l, h = this._targets,
      c = t ? ve(t) : h,
      f = this._ptLookup,
      d = this._pt;
    if ((!e || "all" === e) && function (t, e) {
        for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
        return r < 0
      }(h, c)) return "all" === e && (this._pt = 0), Ce(this);
    for (n = this._op = this._op || [], "all" !== e && (K(e) && (a = {}, At(e, (function (t) {
        return a[t] = 1
      })), e = a), e = function (t, e) {
        var r, n, i, o, s = t[0] ? St(t[0]).harness : 0,
          a = s && s.aliases;
        if (!a) return e;
        for (n in r = Xt({}, e), a)
          if (n in r)
            for (i = (o = a[n].split(",")).length; i--;) r[o[i]] = r[n];
        return r
      }(h, e)), l = h.length; l--;)
      if (~c.indexOf(h[l]))
        for (a in i = f[l], "all" === e ? (n[l] = e, s = i, o = {}) : (o = n[l] = n[l] || {}, s = e), s)(u = i && i[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || Ut(this, u, "_pt"), delete i[a]), "all" !== o && (o[a] = 1);
    return this._initted && !this._pt && d && Ce(this), this
  }, e.to = function (t, r) {
    return new e(t, r, arguments[2])
  }, e.from = function (t, e) {
    return ce(1, arguments)
  }, e.delayedCall = function (t, r, n, i) {
    return new e(r, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: t,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: n,
      onReverseCompleteParams: n,
      callbackScope: i
    })
  }, e.fromTo = function (t, e, r) {
    return ce(2, arguments)
  }, e.set = function (t, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
  }, e.killTweensOf = function (t, e, r) {
    return p.killTweensOf(t, e, r)
  }, e
}(Je);
Ft(cr.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}), At("staggerTo,staggerFrom,staggerFromTo", (function (t) {
  cr[t] = function () {
    var e = new tr,
      r = ge.call(arguments, 0);
    return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
  }
}));
var fr = function (t, e, r) {
    return t[e] = r
  },
  dr = function (t, e, r) {
    return t[e](r)
  },
  pr = function (t, e, r, n) {
    return t[e](n.fp, r)
  },
  gr = function (t, e, r) {
    return t.setAttribute(e, r)
  },
  _r = function (t, e) {
    return Q(t[e]) ? dr : Z(t[e]) && t.setAttribute ? gr : fr
  },
  mr = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
  },
  vr = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
  },
  yr = function (t, e) {
    var r = e._pt,
      n = "";
    if (!t && e.b) n = e.b;
    else if (1 === t && e.e) n = e.e;
    else {
      for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
      n += e.c
    }
    e.set(e.t, e.p, n, e)
  },
  wr = function (t, e) {
    for (var r = e._pt; r;) r.r(t, r.d), r = r._next
  },
  br = function (t, e, r, n) {
    for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(t, e, r), o = i
  },
  xr = function (t) {
    for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? Ut(this, n, "_pt") : n.dep || (e = 1), n = r;
    return !e
  },
  Tr = function (t, e, r, n) {
    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
  },
  kr = function (t) {
    for (var e, r, n, i, o = t._pt; o;) {
      for (e = o._next, r = n; r && r.pr > o.pr;) r = r._next;
      (o._prev = r ? r._prev : i) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : i = o, o = e
    }
    t._pt = n
  },
  Mr = function () {
    function t(t, e, r, n, i, o, s, a, u) {
      this.t = e, this.s = n, this.c = i, this.p = r, this.r = o || mr, this.d = s || this, this.set = a || fr, this.pr = u || 0, this._next = t, t && (t._prev = this)
    }
    return t.prototype.modifier = function (t, e, r) {
      this.mSet = this.mSet || this.set, this.set = Tr, this.m = t, this.mt = r, this.tween = e
    }, t
  }();
At(Ot + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
  return yt[t] = 1
})), ft.TweenMax = ft.TweenLite = cr, ft.TimelineLite = ft.TimelineMax = tr, p = new tr({
  sortChildren: !1,
  defaults: N,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
}), W.stringFilter = Be;
var Or = {
  registerPlugin: function () {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    e.forEach((function (t) {
      return Ae(t)
    }))
  },
  timeline: function (t) {
    return new tr(t)
  },
  getTweensOf: function (t, e) {
    return p.getTweensOf(t, e)
  },
  getProperty: function (t, e, r, n) {
    K(t) && (t = ve(t)[0]);
    var i = St(t || {}).get,
      o = r ? Bt : Yt;
    return "native" === r && (r = ""), t ? e ? o((xt[e] && xt[e].get || i)(t, e, r, n)) : function (e, r, n) {
      return o((xt[e] && xt[e].get || i)(t, e, r, n))
    } : t
  },
  quickSetter: function (t, e, r) {
    if ((t = ve(t)).length > 1) {
      var n = t.map((function (t) {
          return Cr.quickSetter(t, e, r)
        })),
        i = n.length;
      return function (t) {
        for (var e = i; e--;) n[e](t)
      }
    }
    t = t[0] || {};
    var o = xt[e],
      s = St(t),
      a = s.harness && (s.harness.aliases || {})[e] || e,
      u = o ? function (e) {
        var n = new o;
        w._pt = 0, n.init(t, r ? e + r : e, w, 0, [t]), n.render(1, n), w._pt && wr(1, w)
      } : s.set(t, a);
    return o ? u : function (e) {
      return u(t, a, r ? e + r : e, s, 1)
    }
  },
  quickTo: function (t, e, r) {
    var n, i = Cr.to(t, Xt(((n = {})[e] = "+=0.1", n.paused = !0, n), r || {})),
      o = function (t, r, n) {
        return i.resetTo(e, t, r, n)
      };
    return o.tween = i, o
  },
  isTweening: function (t) {
    return p.getTweensOf(t, !0).length > 0
  },
  defaults: function (t) {
    return t && t.ease && (t.ease = Ve(t.ease, N.ease)), Wt(N, t || {})
  },
  config: function (t) {
    return Wt(W, t || {})
  },
  registerEffect: function (t) {
    var e = t.name,
      r = t.effect,
      n = t.plugins,
      i = t.defaults,
      o = t.extendTimeline;
    (n || "").split(",").forEach((function (t) {
      return t && !xt[t] && !ft[t] && _t(e + " effect requires " + t + " plugin.")
    })), Tt[e] = function (t, e, n) {
      return r(ve(t), Ft(e || {}, i), n)
    }, o && (tr.prototype[e] = function (t, r, n) {
      return this.add(Tt[e](t, J(r) ? r : (n = r) && {}, this), n)
    })
  },
  registerEase: function (t, e) {
    We[t] = Ve(e)
  },
  parseEase: function (t, e) {
    return arguments.length ? Ve(t, e) : We
  },
  getById: function (t) {
    return p.getById(t)
  },
  exportRoot: function (t, e) {
    void 0 === t && (t = {});
    var r, n, i = new tr(t);
    for (i.smoothChildTiming = tt(t.smoothChildTiming), p.remove(i), i._dp = 0, i._time = i._tTime = p._time, r = p._first; r;) n = r._next, !e && !r._dur && r instanceof cr && r.vars.onComplete === r._targets[0] || re(i, r, r._start - r._delay), r = n;
    return re(p, i, 0), i
  },
  utils: {
    wrap: function t(e, r, n) {
      var i = r - e;
      return it(e) ? ke(e, t(0, e.length), r) : fe(n, (function (t) {
        return (i + (t - e) % i) % i + e
      }))
    },
    wrapYoyo: function t(e, r, n) {
      var i = r - e,
        o = 2 * i;
      return it(e) ? ke(e, t(0, e.length - 1), r) : fe(n, (function (t) {
        return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
      }))
    },
    distribute: we,
    random: Te,
    snap: xe,
    normalize: function (t, e, r) {
      return Oe(t, e, 0, 1, r)
    },
    getUnit: pe,
    clamp: function (t, e, r) {
      return fe(r, (function (r) {
        return de(t, e, r)
      }))
    },
    splitColor: Re,
    toArray: ve,
    selector: function (t) {
      return t = ve(t)[0] || _t("Invalid scope") || {},
        function (e) {
          var r = t.current || t.nativeElement || t;
          return ve(e, r.querySelectorAll ? r : r === t ? _t("Invalid scope") || m.createElement("div") : t)
        }
    },
    mapRange: Oe,
    pipe: function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      return function (t) {
        return e.reduce((function (t, e) {
          return e(t)
        }), t)
      }
    },
    unitize: function (t, e) {
      return function (r) {
        return t(parseFloat(r)) + (e || pe(r))
      }
    },
    interpolate: function t(e, r, n, i) {
      var o = isNaN(e + r) ? 0 : function (t) {
        return (1 - t) * e + t * r
      };
      if (!o) {
        var s, a, u, l, h, c = K(e),
          f = {};
        if (!0 === n && (i = 1) && (n = null), c) e = {
          p: e
        }, r = {
          p: r
        };
        else if (it(e) && !it(r)) {
          for (u = [], l = e.length, h = l - 2, a = 1; a < l; a++) u.push(t(e[a - 1], e[a]));
          l--, o = function (t) {
            t *= l;
            var e = Math.min(h, ~~t);
            return u[e](t - e)
          }, n = r
        } else i || (e = Xt(it(e) ? [] : {}, e));
        if (!u) {
          for (s in r) ir.call(f, e, s, "get", r[s]);
          o = function (t) {
            return wr(t, f) || (c ? e.p : e)
          }
        }
      }
      return fe(n, o)
    },
    shuffle: ye
  },
  install: pt,
  effects: Tt,
  ticker: Fe,
  updateRoot: tr.updateRoot,
  plugins: xt,
  globalTimeline: p,
  core: {
    PropTween: Mr,
    globals: mt,
    Tween: cr,
    Timeline: tr,
    Animation: Je,
    getCache: St,
    _removeLinkedListItem: Ut,
    suppressOverwrites: function (t) {
      return d = t
    }
  }
};
At("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
  return Or[t] = cr[t]
})), Fe.add(tr.updateRoot), w = Or.to({}, {
  duration: 0
});
var Er = function (t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
    return r
  },
  Sr = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (t, r, n) {
        n._onInit = function (t) {
          var n, i;
          if (K(r) && (n = {}, At(r, (function (t) {
              return n[t] = 1
            })), r = n), e) {
            for (i in n = {}, r) n[i] = e(r[i]);
            r = n
          }! function (t, e) {
            var r, n, i, o = t._targets;
            for (r in e)
              for (n = o.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = Er(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r))
          }(t, r)
        }
      }
    }
  },
  Cr = Or.registerPlugin({
    name: "attr",
    init: function (t, e, r, n, i) {
      var o, s;
      for (o in e)(s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], n, i, 0, 0, o)) && (s.op = o), this._props.push(o)
    }
  }, {
    name: "endArray",
    init: function (t, e) {
      for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
    }
  }, Sr("roundProps", be), Sr("modifiers"), Sr("snap", xe)) || Or;
cr.version = tr.version = Cr.version = "3.10.4", v = 1, et() && Xe();
We.Power0, We.Power1, We.Power2, We.Power3, We.Power4, We.Linear, We.Quad, We.Cubic, We.Quart, We.Quint, We.Strong, We.Elastic, We.Back, We.SteppedEase, We.Bounce, We.Sine, We.Expo, We.Circ;
var Ar, Pr, Dr, Rr, zr, Lr, Ir, Yr = {},
  Br = 180 / Math.PI,
  Fr = Math.PI / 180,
  Xr = Math.atan2,
  Wr = /([A-Z])/g,
  Nr = /(left|right|width|margin|padding|x)/i,
  qr = /[\s,\(]\S/,
  jr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  Ur = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  },
  Hr = function (t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  },
  Vr = function (t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
  },
  Gr = function (t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
  },
  Kr = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
  },
  Qr = function (t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
  },
  $r = function (t, e, r) {
    return t.style[e] = r
  },
  Zr = function (t, e, r) {
    return t.style.setProperty(e, r)
  },
  Jr = function (t, e, r) {
    return t._gsap[e] = r
  },
  tn = function (t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r
  },
  en = function (t, e, r, n, i) {
    var o = t._gsap;
    o.scaleX = o.scaleY = r, o.renderTransform(i, o)
  },
  rn = function (t, e, r, n, i) {
    var o = t._gsap;
    o[e] = r, o.renderTransform(i, o)
  },
  nn = "transform",
  on = nn + "Origin",
  sn = function (t, e) {
    var r = Pr.createElementNS ? Pr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Pr.createElement(t);
    return r.style ? r : Pr.createElement(t)
  },
  an = function t(e, r, n) {
    var i = getComputedStyle(e);
    return i[r] || i.getPropertyValue(r.replace(Wr, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, ln(r) || r, 1) || ""
  },
  un = "O,Moz,ms,Ms,Webkit".split(","),
  ln = function (t, e, r) {
    var n = (e || zr).style,
      i = 5;
    if (t in n && !r) return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(un[i] + t in n););
    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? un[i] : "") + t
  },
  hn = function () {
    "undefined" != typeof window && window.document && (Ar = window, Pr = Ar.document, Dr = Pr.documentElement, zr = sn("div") || {
      style: {}
    }, sn("div"), nn = ln(nn), on = nn + "Origin", zr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ir = !!ln("perspective"), Rr = 1)
  },
  cn = function t(e) {
    var r, n = sn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      i = this.parentNode,
      o = this.nextSibling,
      s = this.style.cssText;
    if (Dr.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
      r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
    } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
    return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), Dr.removeChild(n), this.style.cssText = s, r
  },
  fn = function (t, e) {
    for (var r = e.length; r--;)
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
  },
  dn = function (t) {
    var e;
    try {
      e = t.getBBox()
    } catch (r) {
      e = cn.call(t, !0)
    }
    return e && (e.width || e.height) || t.getBBox === cn || (e = cn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
      x: +fn(t, ["x", "cx", "x1"]) || 0,
      y: +fn(t, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    }
  },
  pn = function (t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !dn(t))
  },
  gn = function (t, e) {
    if (e) {
      var r = t.style;
      e in Yr && e !== on && (e = nn), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Wr, "-$1").toLowerCase())) : r.removeAttribute(e)
    }
  },
  _n = function (t, e, r, n, i, o) {
    var s = new Mr(t._pt, e, r, 0, 1, o ? Qr : Kr);
    return t._pt = s, s.b = n, s.e = i, t._props.push(r), s
  },
  mn = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  vn = function t(e, r, n, i) {
    var o, s, a, u, l = parseFloat(n) || 0,
      h = (n + "").trim().substr((l + "").length) || "px",
      c = zr.style,
      f = Nr.test(r),
      d = "svg" === e.tagName.toLowerCase(),
      p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      g = 100,
      _ = "px" === i,
      m = "%" === i;
    return i === h || !l || mn[i] || mn[h] ? l : ("px" !== h && !_ && (l = t(e, r, n, "px")), u = e.getCTM && pn(e), !m && "%" !== h || !Yr[r] && !~r.indexOf("adius") ? (c[f ? "width" : "height"] = g + (_ ? h : i), s = ~r.indexOf("adius") || "em" === i && e.appendChild && !d ? e : e.parentNode, u && (s = (e.ownerSVGElement || {}).parentNode), s && s !== Pr && s.appendChild || (s = Pr.new), (a = s._gsap) && m && a.width && f && a.time === Fe.time ? Pt(l / a.width * g) : ((m || "%" === h) && (c.position = an(e, "position")), s === e && (c.position = "static"), s.appendChild(zr), o = zr[p], s.removeChild(zr), c.position = "absolute", f && m && ((a = St(s)).time = Fe.time, a.width = s[p]), Pt(_ ? o * l / g : o && l ? g / o * l : 0))) : (o = u ? e.getBBox()[f ? "width" : "height"] : e[p], Pt(m ? l / o * g : l / 100 * o)))
  },
  yn = function (t, e, r, n) {
    var i;
    return Rr || hn(), e in jr && "transform" !== e && ~(e = jr[e]).indexOf(",") && (e = e.split(",")[0]), Yr[e] && "transform" !== e ? (i = An(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Pn(an(t, on)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = Tn[e] && Tn[e](t, e, r) || an(t, e) || Ct(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? vn(t, e, i, r) + r : i
  },
  wn = function (t, e, r, n) {
    if (!r || "none" === r) {
      var i = ln(e, t, 1),
        o = i && an(t, i, 1);
      o && o !== r ? (e = i, r = o) : "borderColor" === e && (r = an(t, "borderTopColor"))
    }
    var s, a, u, l, h, c, f, d, p, g, _, m = new Mr(this._pt, t.style, e, 0, 1, yr),
      v = 0,
      y = 0;
    if (m.b = r, m.e = n, r += "", "auto" === (n += "") && (t.style[e] = n, n = an(t, e) || n, t.style[e] = r), Be(s = [r, n]), n = s[1], u = (r = s[0]).match(at) || [], (n.match(at) || []).length) {
      for (; a = at.exec(n);) f = a[0], p = n.substring(v, a.index), h ? h = (h + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (h = 1), f !== (c = u[y++] || "") && (l = parseFloat(c) || 0, _ = c.substr((l + "").length), "=" === f.charAt(1) && (f = Rt(l, f) + _), d = parseFloat(f), g = f.substr((d + "").length), v = at.lastIndex - g.length, g || (g = g || W.units[e] || _, v === n.length && (n += g, m.e += g)), _ !== g && (l = vn(t, e, c, g) || 0), m._pt = {
        _next: m._pt,
        p: p || 1 === y ? p : ",",
        s: l,
        c: d - l,
        m: h && h < 4 || "zIndex" === e ? Math.round : 0
      });
      m.c = v < n.length ? n.substring(v, n.length) : ""
    } else m.r = "display" === e && "none" === n ? Qr : Kr;
    return lt.test(n) && (m.e = 0), this._pt = m, m
  },
  bn = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  xn = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r, n, i, o = e.t,
        s = o.style,
        a = e.u,
        u = o._gsap;
      if ("all" === a || !0 === a) s.cssText = "", n = 1;
      else
        for (i = (a = a.split(",")).length; --i > -1;) r = a[i], Yr[r] && (n = 1, r = "transformOrigin" === r ? on : nn), gn(o, r);
      n && (gn(o, nn), u && (u.svg && o.removeAttribute("transform"), An(o, 1), u.uncache = 1))
    }
  },
  Tn = {
    clearProps: function (t, e, r, n, i) {
      if ("isFromStart" !== i.data) {
        var o = t._pt = new Mr(t._pt, e, r, 0, 0, xn);
        return o.u = n, o.pr = -10, o.tween = i, t._props.push(r), 1
      }
    }
  },
  kn = [1, 0, 0, 1, 0, 0],
  Mn = {},
  On = function (t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
  },
  En = function (t) {
    var e = an(t, nn);
    return On(e) ? kn : e.substr(7).match(st).map(Pt)
  },
  Sn = function (t, e) {
    var r, n, i, o, s = t._gsap || St(t),
      a = t.style,
      u = En(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? kn : u : (u !== kn || t.offsetParent || t === Dr || s.svg || (i = a.display, a.display = "block", (r = t.parentNode) && t.offsetParent || (o = 1, n = t.nextSibling, Dr.appendChild(t)), u = En(t), i ? a.display = i : gn(t, "display"), o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : Dr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
  },
  Cn = function (t, e, r, n, i, o) {
    var s, a, u, l = t._gsap,
      h = i || Sn(t, !0),
      c = l.xOrigin || 0,
      f = l.yOrigin || 0,
      d = l.xOffset || 0,
      p = l.yOffset || 0,
      g = h[0],
      _ = h[1],
      m = h[2],
      v = h[3],
      y = h[4],
      w = h[5],
      b = e.split(" "),
      x = parseFloat(b[0]) || 0,
      T = parseFloat(b[1]) || 0;
    r ? h !== kn && (a = g * v - _ * m) && (u = x * (-_ / a) + T * (g / a) - (g * w - _ * y) / a, x = x * (v / a) + T * (-m / a) + (m * w - v * y) / a, T = u) : (x = (s = dn(t)).x + (~b[0].indexOf("%") ? x / 100 * s.width : x), T = s.y + (~(b[1] || b[0]).indexOf("%") ? T / 100 * s.height : T)), n || !1 !== n && l.smooth ? (y = x - c, w = T - f, l.xOffset = d + (y * g + w * m) - y, l.yOffset = p + (y * _ + w * v) - w) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = T, l.smooth = !!n, l.origin = e, l.originIsAbsolute = !!r, t.style[on] = "0px 0px", o && (_n(o, l, "xOrigin", c, x), _n(o, l, "yOrigin", f, T), _n(o, l, "xOffset", d, l.xOffset), _n(o, l, "yOffset", p, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + T)
  },
  An = function (t, e) {
    var r = t._gsap || new Ze(t);
    if ("x" in r && !e && !r.uncache) return r;
    var n, i, o, s, a, u, l, h, c, f, d, p, g, _, m, v, y, w, b, x, T, k, M, O, E, S, C, A, P, D, R, z, L = t.style,
      I = r.scaleX < 0,
      Y = "px",
      B = "deg",
      F = an(t, on) || "0";
    return n = i = o = u = l = h = c = f = d = 0, s = a = 1, r.svg = !(!t.getCTM || !pn(t)), _ = Sn(t, r.svg), r.svg && (O = (!r.uncache || "0px 0px" === F) && !e && t.getAttribute("data-svg-origin"), Cn(t, O || F, !!O || r.originIsAbsolute, !1 !== r.smooth, _)), p = r.xOrigin || 0, g = r.yOrigin || 0, _ !== kn && (w = _[0], b = _[1], x = _[2], T = _[3], n = k = _[4], i = M = _[5], 6 === _.length ? (s = Math.sqrt(w * w + b * b), a = Math.sqrt(T * T + x * x), u = w || b ? Xr(b, w) * Br : 0, (c = x || T ? Xr(x, T) * Br + u : 0) && (a *= Math.abs(Math.cos(c * Fr))), r.svg && (n -= p - (p * w + g * x), i -= g - (p * b + g * T))) : (z = _[6], D = _[7], C = _[8], A = _[9], P = _[10], R = _[11], n = _[12], i = _[13], o = _[14], l = (m = Xr(z, P)) * Br, m && (O = k * (v = Math.cos(-m)) + C * (y = Math.sin(-m)), E = M * v + A * y, S = z * v + P * y, C = k * -y + C * v, A = M * -y + A * v, P = z * -y + P * v, R = D * -y + R * v, k = O, M = E, z = S), h = (m = Xr(-x, P)) * Br, m && (v = Math.cos(-m), R = T * (y = Math.sin(-m)) + R * v, w = O = w * v - C * y, b = E = b * v - A * y, x = S = x * v - P * y), u = (m = Xr(b, w)) * Br, m && (O = w * (v = Math.cos(m)) + b * (y = Math.sin(m)), E = k * v + M * y, b = b * v - w * y, M = M * v - k * y, w = O, k = E), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, h = 180 - h), s = Pt(Math.sqrt(w * w + b * b + x * x)), a = Pt(Math.sqrt(M * M + z * z)), m = Xr(k, M), c = Math.abs(m) > 2e-4 ? m * Br : 0, d = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !On(an(t, nn)), O && t.setAttribute("transform", O))), Math.abs(c) > 90 && Math.abs(c) < 270 && (I ? (s *= -1, c += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + Y, r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + Y, r.z = o + Y, r.scaleX = Pt(s), r.scaleY = Pt(a), r.rotation = Pt(u) + B, r.rotationX = Pt(l) + B, r.rotationY = Pt(h) + B, r.skewX = c + B, r.skewY = f + B, r.transformPerspective = d + Y, (r.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (L[on] = Pn(F)), r.xOffset = r.yOffset = 0, r.force3D = W.force3D, r.renderTransform = r.svg ? Ln : Ir ? zn : Rn, r.uncache = 0, r
  },
  Pn = function (t) {
    return (t = t.split(" "))[0] + " " + t[1]
  },
  Dn = function (t, e, r) {
    var n = pe(e);
    return Pt(parseFloat(e) + parseFloat(vn(t, "x", r + "px", n))) + n
  },
  Rn = function (t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, zn(t, e)
  },
  zn = function (t, e) {
    var r = e || this,
      n = r.xPercent,
      i = r.yPercent,
      o = r.x,
      s = r.y,
      a = r.z,
      u = r.rotation,
      l = r.rotationY,
      h = r.rotationX,
      c = r.skewX,
      f = r.skewY,
      d = r.scaleX,
      p = r.scaleY,
      g = r.transformPerspective,
      _ = r.force3D,
      m = r.target,
      v = r.zOrigin,
      y = "",
      w = "auto" === _ && t && 1 !== t || !0 === _;
    if (v && ("0deg" !== h || "0deg" !== l)) {
      var b, x = parseFloat(l) * Fr,
        T = Math.sin(x),
        k = Math.cos(x);
      x = parseFloat(h) * Fr, b = Math.cos(x), o = Dn(m, o, T * b * -v), s = Dn(m, s, -Math.sin(x) * -v), a = Dn(m, a, k * b * -v + v)
    }
    "0px" !== g && (y += "perspective(" + g + ") "), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (w || "0px" !== o || "0px" !== s || "0px" !== a) && (y += "0px" !== a || w ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "), "0deg" !== u && (y += "rotate(" + u + ") "), "0deg" !== l && (y += "rotateY(" + l + ") "), "0deg" !== h && (y += "rotateX(" + h + ") "), "0deg" === c && "0deg" === f || (y += "skew(" + c + ", " + f + ") "), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + ") "), m.style[nn] = y || "translate(0, 0)"
  },
  Ln = function (t, e) {
    var r, n, i, o, s, a = e || this,
      u = a.xPercent,
      l = a.yPercent,
      h = a.x,
      c = a.y,
      f = a.rotation,
      d = a.skewX,
      p = a.skewY,
      g = a.scaleX,
      _ = a.scaleY,
      m = a.target,
      v = a.xOrigin,
      y = a.yOrigin,
      w = a.xOffset,
      b = a.yOffset,
      x = a.forceCSS,
      T = parseFloat(h),
      k = parseFloat(c);
    f = parseFloat(f), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), f += p), f || d ? (f *= Fr, d *= Fr, r = Math.cos(f) * g, n = Math.sin(f) * g, i = Math.sin(f - d) * -_, o = Math.cos(f - d) * _, d && (p *= Fr, s = Math.tan(d - p), i *= s = Math.sqrt(1 + s * s), o *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), n *= s)), r = Pt(r), n = Pt(n), i = Pt(i), o = Pt(o)) : (r = g, o = _, n = i = 0), (T && !~(h + "").indexOf("px") || k && !~(c + "").indexOf("px")) && (T = vn(m, "x", h, "px"), k = vn(m, "y", c, "px")), (v || y || w || b) && (T = Pt(T + v - (v * r + y * i) + w), k = Pt(k + y - (v * n + y * o) + b)), (u || l) && (s = m.getBBox(), T = Pt(T + u / 100 * s.width), k = Pt(k + l / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + o + "," + T + "," + k + ")", m.setAttribute("transform", s), x && (m.style[nn] = s)
  },
  In = function (t, e, r, n, i) {
    var o, s, a = 360,
      u = K(i),
      l = parseFloat(i) * (u && ~i.indexOf("rad") ? Br : 1) - n,
      h = n + l + "deg";
    return u && ("short" === (o = i.split("_")[1]) && (l %= a) !== l % 180 && (l += l < 0 ? a : -360), "cw" === o && l < 0 ? l = (l + 36e9) % a - ~~(l / a) * a : "ccw" === o && l > 0 && (l = (l - 36e9) % a - ~~(l / a) * a)), t._pt = s = new Mr(t._pt, e, r, n, l, Hr), s.e = h, s.u = "deg", t._props.push(r), s
  },
  Yn = function (t, e) {
    for (var r in e) t[r] = e[r];
    return t
  },
  Bn = function (t, e, r) {
    var n, i, o, s, a, u, l, h = Yn({}, r._gsap),
      c = r.style;
    for (i in h.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), c[nn] = e, n = An(r, 1), gn(r, nn), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[nn], c[nn] = e, n = An(r, 1), c[nn] = o), Yr)(o = h[i]) !== (s = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = pe(o) !== (l = pe(s)) ? vn(r, i, o, l) : parseFloat(o), u = parseFloat(s), t._pt = new Mr(t._pt, n, i, a, u - a, Ur), t._pt.u = l || 0, t._props.push(i));
    Yn(n, h)
  };
At("padding,margin,Width,Radius", (function (t, e) {
  var r = "Top",
    n = "Right",
    i = "Bottom",
    o = "Left",
    s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map((function (r) {
      return e < 2 ? t + r : "border" + r + t
    }));
  Tn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
    var o, a;
    if (arguments.length < 4) return o = s.map((function (e) {
      return yn(t, e, r)
    })), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
    o = (n + "").split(" "), a = {}, s.forEach((function (t, e) {
      return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
    })), t.init(e, a, i)
  }
}));
var Fn, Xn, Wn, Nn = {
  name: "css",
  register: hn,
  targetTest: function (t) {
    return t.style && t.nodeType
  },
  init: function (t, e, r, n, i) {
    var o, s, a, u, l, h, c, f, d, p, g, _, m, v, y, w, b, x, T, k = this._props,
      M = t.style,
      O = r.vars.startAt;
    for (c in Rr || hn(), e)
      if ("autoRound" !== c && (s = e[c], !xt[c] || !or(c, e, r, n, t, i)))
        if (l = typeof s, h = Tn[c], "function" === l && (l = typeof (s = s.call(r, n, t, i))), "string" === l && ~s.indexOf("random(") && (s = Me(s)), h) h(this, t, c, s, r) && (y = 1);
        else if ("--" === c.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(c) + "").trim(), s += "", Ie.lastIndex = 0, Ie.test(o) || (f = pe(o), d = pe(s)), d ? f !== d && (o = vn(t, c, o, d) + d) : f && (s += f), this.add(M, "setProperty", o, s, n, i, 0, 0, c), k.push(c);
    else if ("undefined" !== l) {
      if (O && c in O ? (o = "function" == typeof O[c] ? O[c].call(r, n, t, i) : O[c], K(o) && ~o.indexOf("random(") && (o = Me(o)), pe(o + "") || (o += W.units[c] || pe(yn(t, c)) || ""), "=" === (o + "").charAt(1) && (o = yn(t, c))) : o = yn(t, c), u = parseFloat(o), (p = "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), c in jr && ("autoAlpha" === c && (1 === u && "hidden" === yn(t, "visibility") && a && (u = 0), _n(this, M, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== c && "transform" !== c && ~(c = jr[c]).indexOf(",") && (c = c.split(",")[0])), g = c in Yr)
        if (_ || ((m = t._gsap).renderTransform && !e.parseTransform || An(t, e.parseTransform), v = !1 !== e.smoothOrigin && m.smooth, (_ = this._pt = new Mr(this._pt, M, nn, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === c) this._pt = new Mr(this._pt, m, "scaleY", m.scaleY, (p ? Rt(m.scaleY, p + a) : a) - m.scaleY || 0), k.push("scaleY", c), c += "X";
        else {
          if ("transformOrigin" === c) {
            b = void 0, x = void 0, T = void 0, b = (w = s).split(" "), x = b[0], T = b[1] || "50%", "top" !== x && "bottom" !== x && "left" !== T && "right" !== T || (w = x, x = T, T = w), b[0] = bn[x] || x, b[1] = bn[T] || T, s = b.join(" "), m.svg ? Cn(t, s, 0, v, 0, this) : ((d = parseFloat(s.split(" ")[2]) || 0) !== m.zOrigin && _n(this, m, "zOrigin", m.zOrigin, d), _n(this, M, c, Pn(o), Pn(s)));
            continue
          }
          if ("svgOrigin" === c) {
            Cn(t, s, 1, v, 0, this);
            continue
          }
          if (c in Mn) {
            In(this, m, c, u, p ? Rt(u, p + s) : s);
            continue
          }
          if ("smoothOrigin" === c) {
            _n(this, m, "smooth", m.smooth, s);
            continue
          }
          if ("force3D" === c) {
            m[c] = s;
            continue
          }
          if ("transform" === c) {
            Bn(this, s, t);
            continue
          }
        }
      else c in M || (c = ln(c) || c);
      if (g || (a || 0 === a) && (u || 0 === u) && !qr.test(s) && c in M) a || (a = 0), (f = (o + "").substr((u + "").length)) !== (d = pe(s) || (c in W.units ? W.units[c] : f)) && (u = vn(t, c, o, d)), this._pt = new Mr(this._pt, g ? m : M, c, u, (p ? Rt(u, p + a) : a) - u, g || "px" !== d && "zIndex" !== c || !1 === e.autoRound ? Ur : Gr), this._pt.u = d || 0, f !== d && "%" !== d && (this._pt.b = o, this._pt.r = Vr);
      else if (c in M) wn.call(this, t, c, o, p ? p + s : s);
      else {
        if (!(c in t)) {
          gt(c, s);
          continue
        }
        this.add(t, c, o || t[c], p ? p + s : s, n, i)
      }
      k.push(c)
    }
    y && kr(this)
  },
  get: yn,
  aliases: jr,
  getSetter: function (t, e, r) {
    var n = jr[e];
    return n && n.indexOf(",") < 0 && (e = n), e in Yr && e !== on && (t._gsap.x || yn(t, "x")) ? r && Lr === r ? "scale" === e ? tn : Jr : (Lr = r || {}, "scale" === e ? en : rn) : t.style && !Z(t.style[e]) ? $r : ~e.indexOf("-") ? Zr : _r(t, e)
  },
  core: {
    _removeProperty: gn,
    _getMatrix: Sn
  }
};
Cr.utils.checkPrefix = ln, Wn = At((Fn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Xn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
  Yr[t] = 1
})), At(Xn, (function (t) {
  W.units[t] = "deg", Mn[t] = 1
})), jr[Wn[13]] = Fn + "," + Xn, At("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
  var e = t.split(":");
  jr[e[1]] = Wn[e[0]]
})), At("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
  W.units[t] = "px"
})), Cr.registerPlugin(Nn);
var qn = Cr.registerPlugin(Nn) || Cr;
qn.core.Tween;

function jn(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
  }
}
/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Un, Hn, Vn, Gn, Kn, Qn, $n, Zn, Jn, ti, ei, ri, ni = function () {
    return Un || "undefined" != typeof window && (Un = window.gsap) && Un.registerPlugin && Un
  },
  ii = 1,
  oi = [],
  si = [],
  ai = [],
  ui = Date.now,
  li = function (t, e) {
    return e
  },
  hi = function (t, e) {
    return ~ai.indexOf(t) && ai[ai.indexOf(t) + 1][e]
  },
  ci = function (t) {
    return !!~ti.indexOf(t)
  },
  fi = function (t, e, r, n, i) {
    return t.addEventListener(e, r, {
      passive: !n,
      capture: !!i
    })
  },
  di = function (t, e, r, n) {
    return t.removeEventListener(e, r, !!n)
  },
  pi = function () {
    return ei && ei.isPressed || si.cache++
  },
  gi = function (t, e) {
    var r = function r(n) {
      if (n || 0 === n) {
        ii && (Vn.history.scrollRestoration = "manual");
        var i = ei && ei.isPressed;
        n = r.v = Math.round(n) || (ei && ei.iOS ? 1 : 0), t(n), r.cacheID = si.cache, i && li("ss", n)
      } else(e || si.cache !== r.cacheID || li("ref")) && (r.cacheID = si.cache, r.v = t());
      return r.v + r.offset
    };
    return r.offset = 0, t && r
  },
  _i = {
    s: "scrollLeft",
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: gi((function (t) {
      return arguments.length ? Vn.scrollTo(t, mi.sc()) : Vn.pageXOffset || Gn.scrollLeft || Kn.scrollLeft || Qn.scrollLeft || 0
    }))
  },
  mi = {
    s: "scrollTop",
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _i,
    sc: gi((function (t) {
      return arguments.length ? Vn.scrollTo(_i.sc(), t) : Vn.pageYOffset || Gn.scrollTop || Kn.scrollTop || Qn.scrollTop || 0
    }))
  },
  vi = function (t) {
    return Un.utils.toArray(t)[0] || ("string" == typeof t && !1 !== Un.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
  },
  yi = function (t, e) {
    var r = e.s,
      n = e.sc,
      i = si.indexOf(t),
      o = n === mi.sc ? 1 : 2;
    return !~i && (i = si.push(t) - 1), si[i + o] || (si[i + o] = gi(hi(t, r), !0) || (ci(t) ? n : gi((function (e) {
      return arguments.length ? t[r] = e : t[r]
    }))))
  },
  wi = function (t, e, r) {
    var n = t,
      i = t,
      o = ui(),
      s = o,
      a = e || 50,
      u = Math.max(500, 3 * a),
      l = function (t, e) {
        var u = ui();
        e || u - o > a ? (i = n, n = t, s = o, o = u) : r ? n += t : n = i + (t - i) / (u - s) * (o - s)
      };
    return {
      update: l,
      reset: function () {
        i = n = r ? 0 : n, s = o = 0
      },
      getVelocity: function (t) {
        var e = s,
          a = i,
          h = ui();
        return (t || 0 === t) && t !== n && l(t), o === s || h - s > u ? 0 : (n + (r ? a : -a)) / ((r ? h : o) - e) * 1e3
      }
    }
  },
  bi = function (t, e) {
    return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
  },
  xi = function (t) {
    var e = Math.max.apply(Math, t),
      r = Math.min.apply(Math, t);
    return Math.abs(e) >= Math.abs(r) ? e : r
  },
  Ti = function () {
    var t, e, r, n;
    (Jn = Un.core.globals().ScrollTrigger) && Jn.core && (t = Jn.core, e = t.bridge || {}, r = t._scrollers, n = t._proxies, r.push.apply(r, si), n.push.apply(n, ai), si = r, ai = n, li = function (t, r) {
      return e[t](r)
    })
  },
  ki = function (t) {
    return (Un = t || ni()) && "undefined" != typeof document && document.new && (Vn = window, Gn = document, Kn = Gn.documentElement, Qn = Gn.new, ti = [Vn, Gn, Kn, Qn], Un.utils.clamp, Zn = "onpointerenter" in Qn ? "pointer" : "mouse", $n = Mi.isTouch = Vn.matchMedia && Vn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Vn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, ri = Mi.eventTypes = ("ontouchstart" in Kn ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Kn ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function () {
      return ii = 0
    }), 500), Ti(), Hn = 1), Hn
  };
_i.op = mi, si.cache = 0;
var Mi = function () {
  function t(t) {
    this.init(t)
  }
  var e, r, n;
  return t.prototype.init = function (t) {
    Hn || ki(Un) || console.warn("Please gsap.registerPlugin(Observer)"), Jn || Ti();
    var e = t.tolerance,
      r = t.dragMinimum,
      n = t.type,
      i = t.target,
      o = t.lineHeight,
      s = t.debounce,
      a = t.preventDefault,
      u = t.onStop,
      l = t.onStopDelay,
      h = t.ignore,
      c = t.wheelSpeed,
      f = t.event,
      d = t.onDragStart,
      p = t.onDragEnd,
      g = t.onDrag,
      _ = t.onPress,
      m = t.onRelease,
      v = t.onRight,
      y = t.onLeft,
      w = t.onUp,
      b = t.onDown,
      x = t.onChangeX,
      T = t.onChangeY,
      k = t.onChange,
      M = t.onToggleX,
      O = t.onToggleY,
      E = t.onHover,
      S = t.onHoverEnd,
      C = t.onMove,
      A = t.ignoreCheck,
      P = t.isNormalizer,
      D = t.onGestureStart,
      R = t.onGestureEnd,
      z = t.onWheel,
      L = t.onEnable,
      I = t.onDisable,
      Y = t.onClick,
      B = t.scrollSpeed,
      F = t.capture,
      X = t.allowClicks,
      W = t.lockAxis,
      N = t.onLockAxis;
    this.target = i = vi(i) || Kn, this.vars = t, h && (h = Un.utils.toArray(h)), e = e || 0, r = r || 0, c = c || 1, B = B || 1, n = n || "wheel,touch,pointer", s = !1 !== s, o || (o = parseFloat(Vn.getComputedStyle(Qn).lineHeight) || 22);
    var q, j, U, H, V, G, K, Q = this,
      $ = 0,
      Z = 0,
      J = yi(i, _i),
      tt = yi(i, mi),
      et = J(),
      rt = tt(),
      nt = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === ri[0],
      it = ci(i),
      ot = i.ownerDocument || Gn,
      st = [0, 0, 0],
      at = [0, 0, 0],
      ut = 0,
      lt = function () {
        return ut = ui()
      },
      ht = function (t, e) {
        return (Q.event = t) && h && ~h.indexOf(t.target) || e && nt && "touch" !== t.pointerType || A && A(t, e)
      },
      ct = function () {
        var t = Q.deltaX = xi(st),
          r = Q.deltaY = xi(at),
          n = Math.abs(t) >= e,
          i = Math.abs(r) >= e;
        k && (n || i) && k(Q, t, r, st, at), n && (v && Q.deltaX > 0 && v(Q), y && Q.deltaX < 0 && y(Q), x && x(Q), M && Q.deltaX < 0 != $ < 0 && M(Q), $ = Q.deltaX, st[0] = st[1] = st[2] = 0), i && (b && Q.deltaY > 0 && b(Q), w && Q.deltaY < 0 && w(Q), T && T(Q), O && Q.deltaY < 0 != Z < 0 && O(Q), Z = Q.deltaY, at[0] = at[1] = at[2] = 0), (H || U) && (C && C(Q), N && G && N(Q), U && (g(Q), U = !1), H = G = !1), V && (z(Q), V = !1), q = 0
      },
      ft = function (t, e, r) {
        st[r] += t, at[r] += e, Q._vx.update(t), Q._vy.update(e), s ? q || (q = requestAnimationFrame(ct)) : ct()
      },
      dt = function (t, e) {
        "y" !== K && (st[2] += t, Q._vx.update(t, !0)), "x" !== K && (at[2] += e, Q._vy.update(e, !0)), W && !K && (Q.axis = K = Math.abs(t) > Math.abs(e) ? "x" : "y", G = !0), s ? q || (q = requestAnimationFrame(ct)) : ct()
      },
      pt = function (t) {
        if (!ht(t, 1)) {
          var e = (t = bi(t, a)).clientX,
            n = t.clientY,
            i = e - Q.x,
            o = n - Q.y,
            s = Q.isDragging;
          Q.x = e, Q.y = n, (s || Math.abs(Q.startX - e) >= r || Math.abs(Q.startY - n) >= r) && (g && (U = !0), s || (Q.isDragging = !0), dt(i, o), s || d && d(Q))
        }
      },
      gt = Q.onPress = function (t) {
        ht(t, 1) || (Q.axis = K = null, j.pause(), Q.isPressed = !0, t = bi(t), $ = Z = 0, Q.startX = Q.x = t.clientX, Q.startY = Q.y = t.clientY, Q._vx.reset(), Q._vy.reset(), fi(P ? i : ot, ri[1], pt, a, !0), Q.deltaX = Q.deltaY = 0, _ && _(Q))
      },
      _t = function (t) {
        if (!ht(t, 1)) {
          di(P ? i : ot, ri[1], pt, !0);
          var e = Q.isDragging && (Math.abs(Q.x - Q.startX) > 3 || Math.abs(Q.y - Q.startY) > 3),
            r = bi(t);
          e || (Q._vx.reset(), Q._vy.reset(), a && X && Un.delayedCall(.08, (function () {
            if (ui() - ut > 300 && !t.defaultPrevented)
              if (t.target.click) t.target.click();
              else if (ot.createEvent) {
              var e = ot.createEvent("MouseEvents");
              e.initMouseEvent("click", !0, !0, Vn, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
            }
          }))), Q.isDragging = Q.isGesturing = Q.isPressed = !1, u && !P && j.restart(!0), p && e && p(Q), m && m(Q, e)
        }
      },
      mt = function (t) {
        return t.touches && t.touches.length > 1 && (Q.isGesturing = !0) && D(t, Q.isDragging)
      },
      vt = function () {
        return Q.isGesturing = !1, R(Q)
      },
      yt = function (t) {
        if (!ht(t)) {
          var e = J(),
            r = tt();
          ft((e - et) * B, (r - rt) * B, 1), et = e, rt = r, u && j.restart(!0)
        }
      },
      wt = function (t) {
        if (!ht(t)) {
          t = bi(t, a), z && (V = !0);
          var e = (1 === t.deltaMode ? o : 2 === t.deltaMode ? Vn.innerHeight : 1) * c;
          ft(t.deltaX * e, t.deltaY * e, 0), u && !P && j.restart(!0)
        }
      },
      bt = function (t) {
        if (!ht(t)) {
          var e = t.clientX,
            r = t.clientY,
            n = e - Q.x,
            i = r - Q.y;
          Q.x = e, Q.y = r, H = !0, (n || i) && dt(n, i)
        }
      },
      xt = function (t) {
        Q.event = t, E(Q)
      },
      Tt = function (t) {
        Q.event = t, S(Q)
      },
      kt = function (t) {
        return ht(t) || bi(t, a) && Y(Q)
      };
    j = Q._dc = Un.delayedCall(l || .25, (function () {
      Q._vx.reset(), Q._vy.reset(), j.pause(), u && u(Q)
    })).pause(), Q.deltaX = Q.deltaY = 0, Q._vx = wi(0, 50, !0), Q._vy = wi(0, 50, !0), Q.scrollX = J, Q.scrollY = tt, Q.isDragging = Q.isGesturing = Q.isPressed = !1, Q.enable = function (t) {
      return Q.isEnabled || (fi(it ? ot : i, "scroll", pi), n.indexOf("scroll") >= 0 && fi(it ? ot : i, "scroll", yt, a, F), n.indexOf("wheel") >= 0 && fi(i, "wheel", wt, a, F), (n.indexOf("touch") >= 0 && $n || n.indexOf("pointer") >= 0) && (fi(i, ri[0], gt, a, F), fi(ot, ri[2], _t), fi(ot, ri[3], _t), X && fi(i, "click", lt, !1, !0), Y && fi(i, "click", kt), D && fi(ot, "gesturestart", mt), R && fi(ot, "gestureend", vt), E && fi(i, Zn + "enter", xt), S && fi(i, Zn + "leave", Tt), C && fi(i, Zn + "move", bt)), Q.isEnabled = !0, t && t.type && gt(t), L && L(Q)), Q
    }, Q.disable = function () {
      Q.isEnabled && (oi.filter((function (t) {
        return t !== Q && ci(t.target)
      })).length || di(it ? ot : i, "scroll", pi), Q.isPressed && (Q._vx.reset(), Q._vy.reset(), di(P ? i : ot, ri[1], pt, !0)), di(it ? ot : i, "scroll", yt, F), di(i, "wheel", wt, F), di(i, ri[0], gt, F), di(ot, ri[2], _t), di(ot, ri[3], _t), di(i, "click", lt, !0), di(i, "click", kt), di(ot, "gesturestart", mt), di(ot, "gestureend", vt), di(i, Zn + "enter", xt), di(i, Zn + "leave", Tt), di(i, Zn + "move", bt), Q.isEnabled = Q.isPressed = Q.isDragging = !1, I && I(Q))
    }, Q.kill = function () {
      Q.disable();
      var t = oi.indexOf(Q);
      t >= 0 && oi.splice(t, 1), ei === Q && (ei = 0)
    }, oi.push(Q), P && ci(i) && (ei = Q), Q.enable(f)
  }, e = t, (r = [{
    key: "velocityX",
    get: function () {
      return this._vx.getVelocity()
    }
  }, {
    key: "velocityY",
    get: function () {
      return this._vy.getVelocity()
    }
  }]) && jn(e.prototype, r), n && jn(e, n), t
}();
Mi.version = "3.10.4", Mi.create = function (t) {
  return new Mi(t)
}, Mi.register = ki, Mi.getAll = function () {
  return oi.slice()
}, Mi.getById = function (t) {
  return oi.filter((function (e) {
    return e.vars.id === t
  }))[0]
}, ni() && Un.registerPlugin(Mi);
var Oi, Ei, Si, Ci, Ai, Pi, Di, Ri, zi, Li, Ii, Yi, Bi, Fi, Xi, Wi, Ni, qi, ji, Ui, Hi, Vi, Gi, Ki, Qi, $i, Zi, Ji, to, eo, ro, no, io, oo = 1,
  so = Date.now,
  ao = so(),
  uo = 0,
  lo = 0,
  ho = function () {
    return Fi = 1
  },
  co = function () {
    return Fi = 0
  },
  fo = function (t) {
    return t
  },
  po = function (t) {
    return Math.round(1e5 * t) / 1e5 || 0
  },
  go = function () {
    return "undefined" != typeof window
  },
  _o = function () {
    return Oi || go() && (Oi = window.gsap) && Oi.registerPlugin && Oi
  },
  mo = function (t) {
    return !!~Di.indexOf(t)
  },
  vo = function (t) {
    return hi(t, "getBoundingClientRect") || (mo(t) ? function () {
      return ys.width = Si.innerWidth, ys.height = Si.innerHeight, ys
    } : function () {
      return Do(t)
    })
  },
  yo = function (t, e) {
    var r = e.s,
      n = e.d2,
      i = e.d,
      o = e.a;
    return (o = hi(t, r = "scroll" + n)) ? o() - vo(t)()[i] : mo(t) ? (Ai[r] || Pi[r]) - (Si["inner" + n] || Ai["client" + n] || Pi["client" + n]) : t[r] - t["offset" + n]
  },
  wo = function (t, e) {
    for (var r = 0; r < ji.length; r += 3)(!e || ~e.indexOf(ji[r + 1])) && t(ji[r], ji[r + 1], ji[r + 2])
  },
  bo = function (t) {
    return "string" == typeof t
  },
  xo = function (t) {
    return "function" == typeof t
  },
  To = function (t) {
    return "number" == typeof t
  },
  ko = function (t) {
    return "object" == typeof t
  },
  Mo = function (t) {
    return xo(t) && t()
  },
  Oo = function (t, e) {
    return function () {
      var r = Mo(t),
        n = Mo(e);
      return function () {
        Mo(r), Mo(n)
      }
    }
  },
  Eo = function (t, e, r) {
    return t && t.progress(e ? 0 : 1) && r && t.pause()
  },
  So = function (t, e) {
    if (t.enabled) {
      var r = e(t);
      r && r.totalTime && (t.callbackAnimation = r)
    }
  },
  Co = Math.abs,
  Ao = function (t) {
    return Si.getComputedStyle(t)
  },
  Po = function (t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t
  },
  Do = function (t, e) {
    var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== Ao(t)[Xi] && Oi.to(t, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
      }).progress(1),
      n = t.getBoundingClientRect();
    return r && r.progress(0).kill(), n
  },
  Ro = function (t, e) {
    var r = e.d2;
    return t["offset" + r] || t["client" + r] || 0
  },
  zo = function (t) {
    var e, r = [],
      n = t.labels,
      i = t.duration();
    for (e in n) r.push(n[e] / i);
    return r
  },
  Lo = function (t) {
    var e = Oi.utils.snap(t),
      r = Array.isArray(t) && t.slice(0).sort((function (t, e) {
        return t - e
      }));
    return r ? function (t, n, i) {
      var o;
      if (void 0 === i && (i = .001), !n) return e(t);
      if (n > 0) {
        for (t -= i, o = 0; o < r.length; o++)
          if (r[o] >= t) return r[o];
        return r[o - 1]
      }
      for (o = r.length, t += i; o--;)
        if (r[o] <= t) return r[o];
      return r[0]
    } : function (r, n, i) {
      void 0 === i && (i = .001);
      var o = e(r);
      return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : e(n < 0 ? r - t : r + t)
    }
  },
  Io = function (t, e, r, n) {
    return r.split(",").forEach((function (r) {
      return t(e, r, n)
    }))
  },
  Yo = function (t, e, r, n, i) {
    return t.addEventListener(e, r, {
      passive: !n,
      capture: !!i
    })
  },
  Bo = function (t, e, r, n) {
    return t.removeEventListener(e, r, !!n)
  },
  Fo = function (t, e, r) {
    return r && r.wheelHandler && t(e, "wheel", r)
  },
  Xo = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
  Wo = {
    toggleActions: "play",
    anticipatePin: 0
  },
  No = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
  qo = function (t, e) {
    if (bo(t)) {
      var r = t.indexOf("="),
        n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
      ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in No ? No[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
    }
    return t
  },
  jo = function (t, e, r, n, i, o, s, a) {
    var u = i.startColor,
      l = i.endColor,
      h = i.fontSize,
      c = i.indent,
      f = i.fontWeight,
      d = Ci.createElement("div"),
      p = mo(r) || "fixed" === hi(r, "pinType"),
      g = -1 !== t.indexOf("scroller"),
      _ = p ? Pi : r,
      m = -1 !== t.indexOf("start"),
      v = m ? u : l,
      y = "border-color:" + v + ";font-size:" + h + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((g || a) && p ? "fixed;" : "absolute;"), (g || a || !p) && (y += (n === mi ? "right" : "bottom") + ":" + (o + parseFloat(c)) + "px;"), s && (y += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), d._isStart = m, d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), d.style.cssText = y, d.innerText = e || 0 === e ? t + "-" + e : t, _.children[0] ? _.insertBefore(d, _.children[0]) : _.appendChild(d), d._offset = d["offset" + n.op.d2], Uo(d, 0, n, m), d
  },
  Uo = function (t, e, r, n) {
    var i = {
        display: "block"
      },
      o = r[n ? "os2" : "p2"],
      s = r[n ? "p2" : "os2"];
    t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + "Width"] = 1, i["border" + s + "Width"] = 0, i[r.p] = e + "px", Oi.set(t, i)
  },
  Ho = [],
  Vo = {},
  Go = function () {
    return so() - uo > 34 && fs()
  },
  Ko = function () {
    (!Gi || !Gi.isPressed || Gi.startX > Pi.clientWidth) && (si.cache++, to || (to = requestAnimationFrame(fs)), uo || ns("scrollStart"), uo = so())
  },
  Qo = function () {
    $i = Si.innerWidth, Qi = Si.innerHeight
  },
  $o = function () {
    si.cache++, !Bi && !Vi && !Ci.fullscreenElement && !Ci.webkitFullscreenElement && (!Ki || $i !== Si.innerWidth || Math.abs(Si.innerHeight - Qi) > .25 * Si.innerHeight) && Ri.restart(!0)
  },
  Zo = {},
  Jo = [],
  ts = [],
  es = function (t) {
    var e, r = Oi.ticker.frame,
      n = [],
      i = 0;
    if (ro !== r || oo) {
      for (ss(); i < ts.length; i += 4)(e = Si.matchMedia(ts[i]).matches) !== ts[i + 3] && (ts[i + 3] = e, e ? n.push(i) : ss(1, ts[i]) || xo(ts[i + 2]) && ts[i + 2]());
      for (os(), i = 0; i < n.length; i++) e = n[i], eo = ts[e], ts[e + 2] = ts[e + 1](t);
      eo = 0, Ei && ls(0, 1), ro = r, ns("matchMedia")
    }
  },
  rs = function t() {
    return Bo(ks, "scrollEnd", t) || ls(!0)
  },
  ns = function (t) {
    return Zo[t] && Zo[t].map((function (t) {
      return t()
    })) || Jo
  },
  is = [],
  os = function (t) {
    for (var e = 0; e < is.length; e += 5) t && is[e + 4] !== t || (is[e].style.cssText = is[e + 1], is[e].getBBox && is[e].setAttribute("transform", is[e + 2] || ""), is[e + 3].uncache = 1)
  },
  ss = function (t, e) {
    var r;
    for (Wi = 0; Wi < Ho.length; Wi++) r = Ho[Wi], e && r.media !== e || (t ? r.kill(1) : r.revert());
    e && os(e), e || ns("revert")
  },
  as = function () {
    return si.cache++ && si.forEach((function (t) {
      return "function" == typeof t && (t.rec = 0)
    }))
  },
  us = 0,
  ls = function (t, e) {
    if (!uo || t) {
      no = !0;
      var r = ns("refreshInit");
      Ui && ks.sort(), e || ss(), Ho.slice(0).forEach((function (t) {
        return t.refresh()
      })), Ho.forEach((function (t) {
        return "max" === t.vars.end && t.setPositions(t.start, yo(t.scroller, t._dir))
      })), r.forEach((function (t) {
        return t && t.render && t.render(-1)
      })), as(), Ri.pause(), us++, no = !1, ns("refresh")
    } else Yo(ks, "scrollEnd", rs)
  },
  hs = 0,
  cs = 1,
  fs = function () {
    if (!no) {
      ks.isUpdating = !0, io && io.update(0);
      var t = Ho.length,
        e = so(),
        r = e - ao >= 50,
        n = t && Ho[0].scroll();
      if (cs = hs > n ? -1 : 1, hs = n, r && (uo && !Fi && e - uo > 200 && (uo = 0, ns("scrollEnd")), Ii = ao, ao = e), cs < 0) {
        for (Wi = t; Wi-- > 0;) Ho[Wi] && Ho[Wi].update(0, r);
        cs = 1
      } else
        for (Wi = 0; Wi < t; Wi++) Ho[Wi] && Ho[Wi].update(0, r);
      ks.isUpdating = !1
    }
    to = 0
  },
  ds = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
  ps = ds.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
  gs = function (t, e, r, n) {
    if (t.parentNode !== e) {
      for (var i, o = ds.length, s = e.style, a = t.style; o--;) s[i = ds[o]] = r[i];
      s.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (s.display = "inline-block"), a.bottom = a.right = s.flexBasis = "auto", s.overflow = "visible", s.boxSizing = "border-box", s.width = Ro(t, _i) + "px", s.height = Ro(t, mi) + "px", s.padding = a.margin = a.top = a.left = "0", ms(n), a.width = a.maxWidth = r.width, a.height = a.maxHeight = r.height, a.padding = r.padding, t.parentNode.insertBefore(e, t), e.appendChild(t)
    }
  },
  _s = /([A-Z])/g,
  ms = function (t) {
    if (t) {
      var e, r, n = t.t.style,
        i = t.length,
        o = 0;
      for ((t.t._gsap || Oi.core.getCache(t.t)).uncache = 1; o < i; o += 2) r = t[o + 1], e = t[o], r ? n[e] = r : n[e] && n.removeProperty(e.replace(_s, "-$1").toLowerCase())
    }
  },
  vs = function (t) {
    for (var e = ps.length, r = t.style, n = [], i = 0; i < e; i++) n.push(ps[i], r[ps[i]]);
    return n.t = t, n
  },
  ys = {
    left: 0,
    top: 0
  },
  ws = function (t, e, r, n, i, o, s, a, u, l, h, c, f) {
    xo(t) && (t = t(a)), bo(t) && "max" === t.substr(0, 3) && (t = c + ("=" === t.charAt(4) ? qo("0" + t.substr(3), r) : 0));
    var d, p, g, _ = f ? f.time() : 0;
    if (f && f.seek(0), To(t)) s && Uo(s, r, n, !0);
    else {
      xo(e) && (e = e(a));
      var m, v, y, w, b = t.split(" ");
      g = vi(e) || Pi, (m = Do(g) || {}) && (m.left || m.top) || "none" !== Ao(g).display || (w = g.style.display, g.style.display = "block", m = Do(g), w ? g.style.display = w : g.style.removeProperty("display")), v = qo(b[0], m[n.d]), y = qo(b[1] || "0", r), t = m[n.p] - u[n.p] - l + v + i - y, s && Uo(s, y, n, r - y < 20 || s._isStart && y > 20), r -= r - y
    }
    if (o) {
      var x = t + r,
        T = o._isStart;
      d = "scroll" + n.d2, Uo(o, x, n, T && x > 20 || !T && (h ? Math.max(Pi[d], Ai[d]) : o.parentNode[d]) <= x + 1), h && (u = Do(s), h && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + "px"))
    }
    return f && g && (d = Do(g), f.seek(c), p = Do(g), f._caScrollDist = d[n.p] - p[n.p], t = t / f._caScrollDist * c), f && f.seek(_), f ? t : Math.round(t)
  },
  bs = /(webkit|moz|length|cssText|inset)/i,
  xs = function (t, e, r, n) {
    if (t.parentNode !== e) {
      var i, o, s = t.style;
      if (e === Pi) {
        for (i in t._stOrig = s.cssText, o = Ao(t)) + i || bs.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
        s.top = r, s.left = n
      } else s.cssText = t._stOrig;
      Oi.core.getCache(t).uncache = 1, e.appendChild(t)
    }
  },
  Ts = function (t, e) {
    var r, n, i = yi(t, e),
      o = "_scroll" + e.p2,
      s = function e(s, a, u, l, h) {
        var c = e.tween,
          f = a.onComplete,
          d = {};
        return u = u || i(), h = l && h || 0, l = l || s - u, c && c.kill(), r = Math.round(u), a[o] = s, a.modifiers = d, d[o] = function (t) {
          return (t = po(i())) !== r && t !== n && Math.abs(t - r) > 2 && Math.abs(t - n) > 2 ? (c.kill(), e.tween = 0) : t = u + l * c.ratio + h * c.ratio * c.ratio, n = r, r = po(t)
        }, a.onComplete = function () {
          e.tween = 0, f && f.call(c)
        }, c = e.tween = Oi.to(t, a)
      };
    return t[o] = i, i.wheelHandler = function () {
      return s.tween && s.tween.kill() && (s.tween = 0)
    }, Yo(t, "wheel", i.wheelHandler), s
  },
  ks = function () {
    function t(e, r) {
      Ei || t.register(Oi) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, r)
    }
    return t.prototype.init = function (e, r) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), lo) {
        var n, i, o, s, a, u, l, h, c, f, d, p, g, _, m, v, y, w, b, x, T, k, M, O, E, S, C, A, P, D, R, z, L, I, Y, B, F, X, W, N, q, j = e = Po(bo(e) || To(e) || e.nodeType ? {
            trigger: e
          } : e, Wo),
          U = j.onUpdate,
          H = j.toggleClass,
          V = j.id,
          G = j.onToggle,
          K = j.onRefresh,
          Q = j.scrub,
          $ = j.trigger,
          Z = j.pin,
          J = j.pinSpacing,
          tt = j.invalidateOnRefresh,
          et = j.anticipatePin,
          rt = j.onScrubComplete,
          nt = j.onSnapComplete,
          it = j.once,
          ot = j.snap,
          st = j.pinReparent,
          at = j.pinSpacer,
          ut = j.containerAnimation,
          lt = j.fastScrollEnd,
          ht = j.preventOverlaps,
          ct = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? _i : mi,
          ft = !Q && 0 !== Q,
          dt = vi(e.scroller || Si),
          pt = Oi.core.getCache(dt),
          gt = mo(dt),
          _t = "fixed" === ("pinType" in e ? e.pinType : hi(dt, "pinType") || gt && "fixed"),
          mt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
          vt = ft && e.toggleActions.split(" "),
          yt = "markers" in e ? e.markers : Wo.markers,
          wt = gt ? 0 : parseFloat(Ao(dt)["border" + ct.p2 + "Width"]) || 0,
          bt = this,
          xt = e.onRefreshInit && function () {
            return e.onRefreshInit(bt)
          },
          Tt = function (t, e, r) {
            var n = r.d,
              i = r.d2,
              o = r.a;
            return (o = hi(t, "getBoundingClientRect")) ? function () {
              return o()[n]
            } : function () {
              return (e ? Si["inner" + i] : t["client" + i]) || 0
            }
          }(dt, gt, ct),
          kt = function (t, e) {
            return !e || ~ai.indexOf(t) ? vo(t) : function () {
              return ys
            }
          }(dt, gt),
          Mt = 0,
          Ot = 0,
          Et = yi(dt, ct);
        if (bt.media = eo, bt._dir = ct, et *= 45, bt.scroller = dt, bt.scroll = ut ? ut.time.bind(ut) : Et, s = Et(), bt.vars = e, r = r || e.animation, "refreshPriority" in e && (Ui = 1, -9999 === e.refreshPriority && (io = bt)), pt.tweenScroll = pt.tweenScroll || {
            top: Ts(dt, mi),
            left: Ts(dt, _i)
          }, bt.tweenTo = n = pt.tweenScroll[ct.p], bt.scrubDuration = function (t) {
            (R = To(t) && t) ? D ? D.duration(t) : D = Oi.to(r, {
              ease: "expo",
              totalProgress: "+=0.001",
              duration: R,
              paused: !0,
              onComplete: function () {
                return rt && rt(bt)
              }
            }): (D && D.progress(1).kill(), D = 0)
          }, r && (r.vars.lazy = !1, r._initted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.render(0, !0, !0), bt.animation = r.pause(), r.scrollTrigger = bt, bt.scrubDuration(Q), A = 0, V || (V = r.vars.id)), Ho.push(bt), ot && (ko(ot) && !ot.push || (ot = {
            snapTo: ot
          }), "scrollBehavior" in Pi.style && Oi.set(gt ? [Pi, Ai] : dt, {
            scrollBehavior: "auto"
          }), o = xo(ot.snapTo) ? ot.snapTo : "labels" === ot.snapTo ? function (t) {
            return function (e) {
              return Oi.utils.snap(zo(t), e)
            }
          }(r) : "labelsDirectional" === ot.snapTo ? (W = r, function (t, e) {
            return Lo(zo(W))(t, e.direction)
          }) : !1 !== ot.directional ? function (t, e) {
            return Lo(ot.snapTo)(t, so() - Ot < 500 ? 0 : e.direction)
          } : Oi.utils.snap(ot.snapTo), z = ot.duration || {
            min: .1,
            max: 2
          }, z = ko(z) ? Li(z.min, z.max) : Li(z, z), L = Oi.delayedCall(ot.delay || R / 2 || .1, (function () {
            var t = Et(),
              e = so() - Ot < 500,
              i = n.tween;
            if (!(e || Math.abs(bt.getVelocity()) < 10) || i || Fi || Mt === t) bt.isActive && Mt !== t && L.restart(!0);
            else {
              var s = (t - u) / g,
                a = r && !ft ? r.totalProgress() : s,
                h = e ? 0 : (a - P) / (so() - Ii) * 1e3 || 0,
                c = Oi.utils.clamp(-s, 1 - s, Co(h / 2) * h / .185),
                f = s + (!1 === ot.inertia ? 0 : c),
                d = Li(0, 1, o(f, bt)),
                p = Math.round(u + d * g),
                _ = ot,
                m = _.onStart,
                v = _.onInterrupt,
                y = _.onComplete;
              if (t <= l && t >= u && p !== t) {
                if (i && !i._initted && i.data <= Co(p - t)) return;
                !1 === ot.inertia && (c = d - s), n(p, {
                  duration: z(Co(.185 * Math.max(Co(f - a), Co(d - a)) / h / .05 || 0)),
                  ease: ot.ease || "power3",
                  data: Co(p - t),
                  onInterrupt: function () {
                    return L.restart(!0) && v && v(bt)
                  },
                  onComplete: function () {
                    bt.update(), Mt = Et(), A = P = r && !ft ? r.totalProgress() : bt.progress, nt && nt(bt), y && y(bt)
                  }
                }, t, c * g, p - t - c * g), m && m(bt, n.tween)
              }
            }
          })).pause()), V && (Vo[V] = bt), (X = ($ = bt.trigger = vi($ || Z)) && $._gsap && $._gsap.stRevert) && (X = X(bt)), Z = !0 === Z ? $ : vi(Z), bo(H) && (H = {
            targets: $,
            className: H
          }), Z && (!1 === J || "margin" === J || (J = !(!J && "flex" === Ao(Z.parentNode).display) && "padding"), bt.pin = Z, !1 !== e.force3D && Oi.set(Z, {
            force3D: !0
          }), (i = Oi.core.getCache(Z)).spacer ? _ = i.pinState : (at && ((at = vi(at)) && !at.nodeType && (at = at.current || at.nativeElement), i.spacerIsNative = !!at, at && (i.spacerState = vs(at))), i.spacer = y = at || Ci.createElement("div"), y.classList.add("pin-spacer"), V && y.classList.add("pin-spacer-" + V), i.pinState = _ = vs(Z)), bt.spacer = y = i.spacer, C = Ao(Z), M = C[J + ct.os2], b = Oi.getProperty(Z), x = Oi.quickSetter(Z, ct.a, "px"), gs(Z, y, C), v = vs(Z)), yt) {
          p = ko(yt) ? Po(yt, Xo) : Xo, f = jo("scroller-start", V, dt, ct, p, 0), d = jo("scroller-end", V, dt, ct, p, 0, f), w = f["offset" + ct.op.d2];
          var St = vi(hi(dt, "content") || dt);
          h = this.markerStart = jo("start", V, St, ct, p, w, 0, ut), c = this.markerEnd = jo("end", V, St, ct, p, w, 0, ut), ut && (F = Oi.quickSetter([h, c], ct.a, "px")), _t || ai.length && !0 === hi(dt, "fixedMarkers") || (q = Ao(N = gt ? Pi : dt).position, N.style.position = "absolute" === q || "fixed" === q ? q : "relative", Oi.set([f, d], {
            force3D: !0
          }), E = Oi.quickSetter(f, ct.a, "px"), S = Oi.quickSetter(d, ct.a, "px"))
        }
        if (ut) {
          var Ct = ut.vars.onUpdate,
            At = ut.vars.onUpdateParams;
          ut.eventCallback("onUpdate", (function () {
            bt.update(0, 0, 1), Ct && Ct.apply(At || [])
          }))
        }
        bt.previous = function () {
          return Ho[Ho.indexOf(bt) - 1]
        }, bt.next = function () {
          return Ho[Ho.indexOf(bt) + 1]
        }, bt.revert = function (t) {
          var e = !1 !== t || !bt.enabled,
            n = Bi;
          e !== bt.isReverted && (e && (bt.scroll.rec || !Bi || !no || (bt.scroll.rec = Et()), Y = Math.max(Et(), bt.scroll.rec || 0), I = bt.progress, B = r && r.progress()), h && [h, c, f, d].forEach((function (t) {
            return t.style.display = e ? "none" : "block"
          })), e && (Bi = 1), bt.update(e), Bi = n, Z && (e ? function (t, e, r) {
            ms(r);
            var n = t._gsap;
            if (n.spacerIsNative) ms(n.spacerState);
            else if (t.parentNode === e) {
              var i = e.parentNode;
              i && (i.insertBefore(t, e), i.removeChild(e))
            }
          }(Z, y, _) : (!st || !bt.isActive) && gs(Z, y, Ao(Z), O)), bt.isReverted = e)
        }, bt.refresh = function (i, o) {
          if (!Bi && bt.enabled || o)
            if (Z && i && uo) Yo(t, "scrollEnd", rs);
            else {
              !no && xt && xt(bt), Bi = 1, Ot = so(), n.tween && (n.tween.kill(), n.tween = 0), D && D.pause(), tt && r && r.time(-.01, !0).invalidate(), bt.isReverted || bt.revert();
              for (var p, w, x, M, E, S, C, A, P, R, z = Tt(), F = kt(), X = ut ? ut.duration() : yo(dt, ct), W = 0, N = 0, q = e.end, j = e.endTrigger || $, U = e.start || (0 !== e.start && $ ? Z ? "0 0" : "0 100%" : 0), H = bt.pinnedContainer = e.pinnedContainer && vi(e.pinnedContainer), V = $ && Math.max(0, Ho.indexOf(bt)) || 0, G = V; G--;)(S = Ho[G]).end || S.refresh(0, 1) || (Bi = 1), !(C = S.pin) || C !== $ && C !== Z || S.isReverted || (R || (R = []), R.unshift(S), S.revert()), S !== Ho[G] && (V--, G--);
              for (xo(U) && (U = U(bt)), u = ws(U, $, z, ct, Et(), h, f, bt, F, wt, _t, X, ut) || (Z ? -.001 : 0), xo(q) && (q = q(bt)), bo(q) && !q.indexOf("+=") && (~q.indexOf(" ") ? q = (bo(U) ? U.split(" ")[0] : "") + q : (W = qo(q.substr(2), z), q = bo(U) ? U : u + W, j = $)), l = Math.max(u, ws(q || (j ? "100% 0" : X), j, z, ct, Et() + W, c, d, bt, F, wt, _t, X, ut)) || -.001, g = l - u || (u -= .01) && .001, W = 0, G = V; G--;)(C = (S = Ho[G]).pin) && S.start - S._pinPush < u && !ut && S.end > 0 && (p = S.end - S.start, C !== $ && C !== H || To(U) || (W += p * (1 - S.progress)), C === Z && (N += p));
              if (u += W, l += W, bt._pinPush = N, h && W && ((p = {})[ct.a] = "+=" + W, H && (p[ct.p] = "-=" + Et()), Oi.set([h, c], p)), Z) p = Ao(Z), M = ct === mi, x = Et(), T = parseFloat(b(ct.a)) + N, !X && l > 1 && ((gt ? Pi : dt).style["overflow-" + ct.a] = "scroll"), gs(Z, y, p), v = vs(Z), w = Do(Z, !0), A = _t && yi(dt, M ? _i : mi)(), J && ((O = [J + ct.os2, g + N + "px"]).t = y, (G = "padding" === J ? Ro(Z, ct) + g + N : 0) && O.push(ct.d, G + "px"), ms(O), _t && Et(Y)), _t && ((E = {
                top: w.top + (M ? x - u : A) + "px",
                left: w.left + (M ? A : x - u) + "px",
                boxSizing: "border-box",
                position: "fixed"
              }).width = E.maxWidth = Math.ceil(w.width) + "px", E.height = E.maxHeight = Math.ceil(w.height) + "px", E.margin = E.marginTop = E.marginRight = E.marginBottom = E.marginLeft = "0", E.padding = p.padding, E.paddingTop = p.paddingTop, E.paddingRight = p.paddingRight, E.paddingBottom = p.paddingBottom, E.paddingLeft = p.paddingLeft, m = function (t, e, r) {
                for (var n, i = [], o = t.length, s = r ? 8 : 0; s < o; s += 2) n = t[s], i.push(n, n in e ? e[n] : t[s + 1]);
                return i.t = t.t, i
              }(_, E, st)), r ? (P = r._initted, Hi(1), r.render(r.duration(), !0, !0), k = b(ct.a) - T + g + N, g !== k && _t && m.splice(m.length - 2, 2), r.render(0, !0, !0), P || r.invalidate(), Hi(0)) : k = g;
              else if ($ && Et() && !ut)
                for (w = $.parentNode; w && w !== Pi;) w._pinOffset && (u -= w._pinOffset, l -= w._pinOffset), w = w.parentNode;
              R && R.forEach((function (t) {
                return t.revert(!1)
              })), bt.start = u, bt.end = l, s = a = Et(), ut || (s < Y && Et(Y), bt.scroll.rec = 0), bt.revert(!1), L && (Mt = -1, bt.isActive && Et(u + g * I), L.restart(!0)), Bi = 0, r && ft && (r._initted || B) && r.progress() !== B && r.progress(B, !0).render(r.time(), !0, !0), (I !== bt.progress || ut) && (r && !ft && r.totalProgress(I, !0), bt.progress = I, bt.update(0, 0, 1)), Z && J && (y._pinOffset = Math.round(bt.progress * k)), K && K(bt)
            }
        }, bt.getVelocity = function () {
          return (Et() - a) / (so() - Ii) * 1e3 || 0
        }, bt.endAnimation = function () {
          Eo(bt.callbackAnimation), r && (D ? D.progress(1) : r.paused() ? ft || Eo(r, bt.direction < 0, 1) : Eo(r, r.reversed()))
        }, bt.labelToScroll = function (t) {
          return r && r.labels && (u || bt.refresh() || u) + r.labels[t] / r.duration() * g || 0
        }, bt.getTrailing = function (t) {
          var e = Ho.indexOf(bt),
            r = bt.direction > 0 ? Ho.slice(0, e).reverse() : Ho.slice(e + 1);
          return (bo(t) ? r.filter((function (e) {
            return e.vars.preventOverlaps === t
          })) : r).filter((function (t) {
            return bt.direction > 0 ? t.end <= u : t.start >= l
          }))
        }, bt.update = function (t, e, i) {
          if (!ut || i || t) {
            var o, h, c, d, p, _, w, b = bt.scroll(),
              O = t ? 0 : (b - u) / g,
              C = O < 0 ? 0 : O > 1 ? 1 : O || 0,
              R = bt.progress;
            if (e && (a = s, s = ut ? Et() : b, ot && (P = A, A = r && !ft ? r.totalProgress() : C)), et && !C && Z && !Bi && !oo && uo && u < b + (b - a) / (so() - Ii) * et && (C = 1e-4), C !== R && bt.enabled) {
              if (d = (p = (o = bt.isActive = !!C && C < 1) !== (!!R && R < 1)) || !!C != !!R, bt.direction = C > R ? 1 : -1, bt.progress = C, d && !Bi && (h = C && !R ? 0 : 1 === C ? 1 : 1 === R ? 2 : 3, ft && (c = !p && "none" !== vt[h + 1] && vt[h + 1] || vt[h], w = r && ("complete" === c || "reset" === c || c in r))), ht && (p || w) && (w || Q || !r) && (xo(ht) ? ht(bt) : bt.getTrailing(ht).forEach((function (t) {
                  return t.endAnimation()
                }))), ft || (!D || Bi || oo ? r && r.totalProgress(C, !!Bi) : ((ut || io && io !== bt) && D.render(D._dp._time - D._start), D.resetTo ? D.resetTo("totalProgress", C, r._tTime / r._tDur) : (D.vars.totalProgress = C, D.invalidate().restart()))), Z)
                if (t && J && (y.style[J + ct.os2] = M), _t) {
                  if (d) {
                    if (_ = !t && C > R && l + 1 > b && b + 1 >= yo(dt, ct), st)
                      if (t || !o && !_) xs(Z, y);
                      else {
                        var z = Do(Z, !0),
                          I = b - u;
                        xs(Z, Pi, z.top + (ct === mi ? I : 0) + "px", z.left + (ct === mi ? 0 : I) + "px")
                      } ms(o || _ ? m : v), k !== g && C < 1 && o || x(T + (1 !== C || _ ? 0 : k))
                  }
                } else x(po(T + k * C));
              ot && !n.tween && !Bi && !oo && L.restart(!0), H && (p || it && C && (C < 1 || !Ji)) && zi(H.targets).forEach((function (t) {
                return t.classList[o || it ? "add" : "remove"](H.className)
              })), U && !ft && !t && U(bt), d && !Bi ? (ft && (w && ("complete" === c ? r.pause().totalProgress(1) : "reset" === c ? r.restart(!0).pause() : "restart" === c ? r.restart(!0) : r[c]()), U && U(bt)), !p && Ji || (G && p && So(bt, G), mt[h] && So(bt, mt[h]), it && (1 === C ? bt.kill(!1, 1) : mt[h] = 0), p || mt[h = 1 === C ? 1 : 3] && So(bt, mt[h])), lt && !o && Math.abs(bt.getVelocity()) > (To(lt) ? lt : 2500) && (Eo(bt.callbackAnimation), D ? D.progress(1) : Eo(r, !C, 1))) : ft && U && !Bi && U(bt)
            }
            if (S) {
              var Y = ut ? b / ut.duration() * (ut._caScrollDist || 0) : b;
              E(Y + (f._isFlipped ? 1 : 0)), S(Y)
            }
            F && F(-b / ut.duration() * (ut._caScrollDist || 0))
          }
        }, bt.enable = function (e, r) {
          bt.enabled || (bt.enabled = !0, Yo(dt, "resize", $o), Yo(gt ? Ci : dt, "scroll", Ko), xt && Yo(t, "refreshInit", xt), !1 !== e && (bt.progress = I = 0, s = a = Mt = Et()), !1 !== r && bt.refresh())
        }, bt.getTween = function (t) {
          return t && n ? n.tween : D
        }, bt.setPositions = function (t, e) {
          Z && (T += t - u, k += e - t - g), bt.start = u = t, bt.end = l = e, g = e - t, bt.update()
        }, bt.disable = function (e, r) {
          if (bt.enabled && (!1 !== e && bt.revert(), bt.enabled = bt.isActive = !1, r || D && D.pause(), Y = 0, i && (i.uncache = 1), xt && Bo(t, "refreshInit", xt), L && (L.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !gt)) {
            for (var o = Ho.length; o--;)
              if (Ho[o].scroller === dt && Ho[o] !== bt) return;
            Bo(dt, "resize", $o), Bo(dt, "scroll", Ko)
          }
        }, bt.kill = function (t, n) {
          bt.disable(t, n), D && !n && D.kill(), V && delete Vo[V];
          var o = Ho.indexOf(bt);
          o >= 0 && Ho.splice(o, 1), o === Wi && cs > 0 && Wi--, o = 0, Ho.forEach((function (t) {
            return t.scroller === bt.scroller && (o = 1)
          })), o || (bt.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.render(-1), n || r.kill()), h && [h, c, f, d].forEach((function (t) {
            return t.parentNode && t.parentNode.removeChild(t)
          })), io === bt && (io = 0), Z && (i && (i.uncache = 1), o = 0, Ho.forEach((function (t) {
            return t.pin === Z && o++
          })), o || (i.spacer = 0)), e.onKill && e.onKill(bt)
        }, bt.enable(!1, !1), X && X(bt), r && r.add && !g ? Oi.delayedCall(.01, (function () {
          return u || l || bt.refresh()
        })) && (g = .01) && (u = l = 0) : bt.refresh()
      } else this.update = this.refresh = this.kill = fo
    }, t.register = function (e) {
      return Ei || (Oi = e || _o(), go() && window.document && t.enable(), Ei = lo), Ei
    }, t.defaults = function (t) {
      if (t)
        for (var e in t) Wo[e] = t[e];
      return Wo
    }, t.disable = function (t, e) {
      lo = 0, Ho.forEach((function (r) {
        return r[e ? "kill" : "disable"](t)
      })), Bo(Si, "wheel", Ko), Bo(Ci, "scroll", Ko), clearInterval(Yi), Bo(Ci, "touchcancel", fo), Bo(Pi, "touchstart", fo), Io(Bo, Ci, "pointerdown,touchstart,mousedown", ho), Io(Bo, Ci, "pointerup,touchend,mouseup", co), Ri.kill(), wo(Bo);
      for (var r = 0; r < si.length; r += 3) Fo(Bo, si[r], si[r + 1]), Fo(Bo, si[r], si[r + 2])
    }, t.enable = function () {
      if (Si = window, Ci = document, Ai = Ci.documentElement, Pi = Ci.new, Oi && (zi = Oi.utils.toArray, Li = Oi.utils.clamp, Hi = Oi.core.suppressOverwrites || fo, Oi.core.globals("ScrollTrigger", t), Pi)) {
        lo = 1, Mi.register(Oi), t.isTouch = Mi.isTouch, Zi = Mi.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Yo(Si, "wheel", Ko), Di = [Si, Ci, Ai, Pi], t.matchMedia({
          "(orientation: portrait)": function () {
            return Qo(), Qo
          }
        }), Yo(Ci, "scroll", Ko);
        var e, r, n = Pi.style,
          i = n.borderTopStyle;
        for (n.borderTopStyle = "solid", e = Do(Pi), mi.m = Math.round(e.top + mi.sc()) || 0, _i.m = Math.round(e.left + _i.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), Yi = setInterval(Go, 250), Oi.delayedCall(.5, (function () {
            return oo = 0
          })), Yo(Ci, "touchcancel", fo), Yo(Pi, "touchstart", fo), Io(Yo, Ci, "pointerdown,touchstart,mousedown", ho), Io(Yo, Ci, "pointerup,touchend,mouseup", co), Xi = Oi.utils.checkPrefix("transform"), ps.push(Xi), Ei = so(), Ri = Oi.delayedCall(.2, ls).pause(), ji = [Ci, "visibilitychange", function () {
            var t = Si.innerWidth,
              e = Si.innerHeight;
            Ci.hidden ? (Ni = t, qi = e) : Ni === t && qi === e || $o()
          }, Ci, "DOMContentLoaded", ls, Si, "load", ls, Si, "resize", $o], wo(Yo), Ho.forEach((function (t) {
            return t.enable(0, 1)
          })), r = 0; r < si.length; r += 3) Fo(Bo, si[r], si[r + 1]), Fo(Bo, si[r], si[r + 2])
      }
    }, t.config = function (e) {
      "limitCallbacks" in e && (Ji = !!e.limitCallbacks);
      var r = e.syncInterval;
      r && clearInterval(Yi) || (Yi = r) && setInterval(Go, r), "ignoreMobileResize" in e && (Ki = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (wo(Bo) || wo(Yo, e.autoRefreshEvents || "none"), Vi = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }, t.scrollerProxy = function (t, e) {
      var r = vi(t),
        n = si.indexOf(r),
        i = mo(r);
      ~n && si.splice(n, i ? 6 : 2), e && (i ? ai.unshift(Si, e, Pi, e, Ai, e) : ai.unshift(r, e))
    }, t.matchMedia = function (t) {
      var e, r, n, i, o;
      for (r in t) n = ts.indexOf(r), i = t[r], eo = r, "all" === r ? i() : (e = Si.matchMedia(r)) && (e.matches && (o = i()), ~n ? (ts[n + 1] = Oo(ts[n + 1], i), ts[n + 2] = Oo(ts[n + 2], o)) : (n = ts.length, ts.push(r, i, o), e.addListener ? e.addListener(es) : e.addEventListener("change", es)), ts[n + 3] = e.matches), eo = 0;
      return ts
    }, t.clearMatchMedia = function (t) {
      t || (ts.length = 0), (t = ts.indexOf(t)) >= 0 && ts.splice(t, 4)
    }, t.isInViewport = function (t, e, r) {
      var n = (bo(t) ? vi(t) : t).getBoundingClientRect(),
        i = n[r ? "width" : "height"] * e || 0;
      return r ? n.right - i > 0 && n.left + i < Si.innerWidth : n.bottom - i > 0 && n.top + i < Si.innerHeight
    }, t.positionInViewport = function (t, e, r) {
      bo(t) && (t = vi(t));
      var n = t.getBoundingClientRect(),
        i = n[r ? "width" : "height"],
        o = null == e ? i / 2 : e in No ? No[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
      return r ? (n.left + o) / Si.innerWidth : (n.top + o) / Si.innerHeight
    }, t
  }();
ks.version = "3.10.4", ks.saveStyles = function (t) {
  return t ? zi(t).forEach((function (t) {
    if (t && t.style) {
      var e = is.indexOf(t);
      e >= 0 && is.splice(e, 5), is.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Oi.core.getCache(t), eo)
    }
  })) : is
}, ks.revert = function (t, e) {
  return ss(!t, e)
}, ks.create = function (t, e) {
  return new ks(t, e)
}, ks.refresh = function (t) {
  return t ? $o() : (Ei || ks.register()) && ls(!0)
}, ks.update = fs, ks.clearScrollMemory = as, ks.maxScroll = function (t, e) {
  return yo(t, e ? _i : mi)
}, ks.getScrollFunc = function (t, e) {
  return yi(vi(t), e ? _i : mi)
}, ks.getById = function (t) {
  return Vo[t]
}, ks.getAll = function () {
  return Ho.filter((function (t) {
    return "ScrollSmoother" !== t.vars.id
  }))
}, ks.isScrolling = function () {
  return !!uo
}, ks.snapDirectional = Lo, ks.addEventListener = function (t, e) {
  var r = Zo[t] || (Zo[t] = []);
  ~r.indexOf(e) || r.push(e)
}, ks.removeEventListener = function (t, e) {
  var r = Zo[t],
    n = r && r.indexOf(e);
  n >= 0 && r.splice(n, 1)
}, ks.batch = function (t, e) {
  var r, n = [],
    i = {},
    o = e.interval || .016,
    s = e.batchMax || 1e9,
    a = function (t, e) {
      var r = [],
        n = [],
        i = Oi.delayedCall(o, (function () {
          e(r, n), r = [], n = []
        })).pause();
      return function (t) {
        r.length || i.restart(!0), r.push(t.trigger), n.push(t), s <= r.length && i.progress(1)
      }
    };
  for (r in e) i[r] = "on" === r.substr(0, 2) && xo(e[r]) && "onRefreshInit" !== r ? a(0, e[r]) : e[r];
  return xo(s) && (s = s(), Yo(ks, "refresh", (function () {
    return s = e.batchMax()
  }))), zi(t).forEach((function (t) {
    var e = {};
    for (r in i) e[r] = i[r];
    e.trigger = t, n.push(ks.create(e))
  })), n
};
var Ms, Os = function (t, e, r, n) {
    return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
  },
  Es = function t(e, r) {
    !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Mi.isTouch ? " pinch-zoom" : "") : "none", e === Ai && t(Pi, r)
  },
  Ss = {
    auto: 1,
    scroll: 1
  },
  Cs = function (t) {
    var e, r = t.event,
      n = t.target,
      i = t.axis,
      o = (r.changedTouches ? r.changedTouches[0] : r).target,
      s = o._gsap || Oi.core.getCache(o),
      a = so();
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
      for (; o && o.scrollHeight <= o.clientHeight;) o = o.parentNode;
      s._isScroll = o && !mo(o) && o !== n && (Ss[(e = Ao(o)).overflowY] || Ss[e.overflowX]), s._isScrollT = a
    }(s._isScroll || "x" === i) && (r._gsapAllow = !0)
  },
  As = function (t, e, r, n) {
    return Mi.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: e,
      onWheel: n = n && Cs,
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function () {
        return r && Yo(Ci, Mi.eventTypes[0], Ds, !1, !0)
      },
      onDisable: function () {
        return Bo(Ci, Mi.eventTypes[0], Ds, !0)
      }
    })
  },
  Ps = /(input|label|select|textarea)/i,
  Ds = function (t) {
    var e = Ps.test(t.target.tagName);
    (e || Ms) && (t._gsapAllow = !0, Ms = e)
  },
  Rs = function (t) {
    ko(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
    var e, r, n, i, o, s, a, u, l = t,
      h = l.normalizeScrollX,
      c = l.momentum,
      f = l.allowNestedScroll,
      d = vi(t.target) || Ai,
      p = Oi.core.globals().ScrollSmoother,
      g = Zi && (t.content && vi(t.content) || p && p.get() && p.get().content()),
      _ = yi(d, mi),
      m = yi(d, _i),
      v = 1,
      y = (Mi.isTouch && Si.visualViewport ? Si.visualViewport.scale * Si.visualViewport.width : Si.outerWidth) / Si.innerWidth,
      w = 0,
      b = xo(c) ? function () {
        return c(e)
      } : function () {
        return c || 2.8
      },
      x = As(d, t.type, !0, f),
      T = function () {
        return n = !1
      },
      k = fo,
      M = fo,
      O = function () {
        r = yo(d, mi), M = Li(Zi ? 1 : 0, r), h && (k = Li(0, yo(d, _i))), i = us
      },
      E = function () {
        O(), o.isActive() && o.vars.scrollY > r && (_() > r ? o.progress(1) && _(r) : o.resetTo("scrollY", r))
      };
    return t.ignoreCheck = function (t) {
      return Zi && "touchmove" === t.type && function () {
        if (n) {
          requestAnimationFrame(T);
          var t = po(e.deltaY / 2),
            r = M(_.v - t);
          return g && r !== _.v + _.offset && (_.offset = r - _.v, g.style.transform = "translateY(" + -_.offset + "px)", g._gsap && (g._gsap.y = -_.offset + "px"), _.cacheID = si.cache, fs()), !0
        }
        g && (g.style.transform = "translateY(0px)", _.offset = _.cacheID = 0, g._gsap && (g._gsap.y = "0px")), n = !0
      }() || v > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
    }, t.onPress = function () {
      var t = v;
      v = po((Si.visualViewport && Si.visualViewport.scale || 1) / y), o.pause(), t !== v && Es(d, v > 1.01 || !h && "x"), n = !1, s = m(), a = _(), O(), i = us
    }, t.onRelease = t.onGestureStart = function (t, e) {
      if (g && (g.style.transform = "translateY(0px)", _.offset = _.cacheID = 0, g._gsap && (g._gsap.y = "0px")), e) {
        si.cache++;
        var n, i, s = b();
        h && (i = (n = m()) + .05 * s * -t.velocityX / .227, s *= Os(m, n, i, yo(d, _i)), o.vars.scrollX = k(i)), i = (n = _()) + .05 * s * -t.velocityY / .227, s *= Os(_, n, i, yo(d, mi)), o.vars.scrollY = M(i), o.invalidate().duration(s).play(.01), (Zi && o.vars.scrollY >= r || n >= r - 1) && Oi.to({}, {
          onUpdate: E,
          duration: s
        })
      } else u.restart(!0)
    }, t.onWheel = function () {
      o._ts && o.pause(), so() - w > 1e3 && (i = 0, w = so())
    }, t.onChange = function (t, e, r, n, o) {
      us !== i && O(), e && h && m(k(n[2] === e ? s + (t.startX - t.x) : m() + e - n[1])), r && _(M(o[2] === r ? a + (t.startY - t.y) : _() + r - o[1])), fs()
    }, t.onEnable = function () {
      Es(d, !h && "x"), Yo(Si, "resize", E), x.enable()
    }, t.onDisable = function () {
      Es(d, !0), Bo(Si, "resize", E), x.kill()
    }, (e = new Mi(t)).iOS = Zi, Zi && !_() && _(1), u = e._dc, o = Oi.to(e, {
      ease: "power4",
      paused: !0,
      scrollX: h ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      onComplete: u.vars.onComplete
    }), e
  };
ks.sort = function (t) {
  return Ho.sort(t || function (t, e) {
    return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
  })
}, ks.observe = function (t) {
  return new Mi(t)
}, ks.normalizeScroll = function (t) {
  if (void 0 === t) return Gi;
  if (!0 === t && Gi) return Gi.enable();
  if (!1 === t) return Gi && Gi.kill();
  var e = t instanceof Mi ? t : Rs(t);
  return Gi && Gi.target === e.target && Gi.kill(), mo(e.target) && (Gi = e), e
}, ks.core = {
  _getVelocityProp: wi,
  _inputObserver: As,
  _scrollers: si,
  _proxies: ai,
  bridge: {
    ss: function () {
      uo || ns("scrollStart"), uo = so()
    },
    ref: function () {
      return Bi
    }
  }
}, _o() && Oi.registerPlugin(ks), qn.registerPlugin(ks);
const zs = document.querySelector(".grid"),
  Ls = [...zs.querySelectorAll(".grid__item")];
((t = "img") => new Promise((e => {
  o(document.querySelectorAll(t), {
    background: !0
  }, e)
})))(".grid__item-img").then((t => {
  document.new.classList.remove("loading");
  const e = new h({
      lerp: .1,
      smooth: !0
    }),
    r = () => {
      e.raf(), requestAnimationFrame(r)
    };
  let n;
  requestAnimationFrame(r);
  const i = () => {
    n = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };
  i(), window.addEventListener("resize", i), Ls.forEach((t => {
    qn.timeline().set(zs, {
      perspective: 1e3,
      perspectiveOrigin: `50% ${n.height/2+e.scroll}px`
    }).to(t, {
      ease: "none",
      startAt: {
        rotationX: 70,
        scale: .7
      },
      scale: 1,
      rotationX: -70,
      scrollTrigger: {
        trigger: t,
        start: "top bottom",
        end: "bottom top",
        scrub: !0,
        onUpdate: t => qn.set(zs, {
          perspectiveOrigin: () => `50% ${n.height/2+e.scroll}px`
        })
      }
    })
  }))
}));
