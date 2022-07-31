! function () {
  function t(t) {
    return t && t.__esModule ? t.default : t
  }
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    r = {},
    n = {},
    i = e.parcelRequiredfe1;

  function o(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
  }

  function s(t) {
    return function (t) {
      if (Array.isArray(t)) return o(t)
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function (t, e) {
      if (t) {
        if ("string" == typeof t) return o(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(t, e) : void 0
      }
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function a(t) {
    return t && t.constructor === Symbol ? "symbol" : typeof t
  }
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
  }, e.parcelRequiredfe1 = i), i.register("hobco", (function (t, e) {
    ! function (e, r) {
      t.exports ? t.exports = r() : e.EvEmitter = r()
    }("undefined" != typeof window ? window : t.exports, (function () {
      function t() {}
      var e = t.prototype;
      return e.on = function (t, e) {
        if (!t || !e) return this;
        var r = this._events = this._events || {},
          n = r[t] = r[t] || [];
        return n.includes(e) || n.push(e), this
      }, e.once = function (t, e) {
        if (!t || !e) return this;
        this.on(t, e);
        var r = this._onceEvents = this._onceEvents || {};
        return (r[t] = r[t] || {})[e] = !0, this
      }, e.off = function (t, e) {
        var r = this._events && this._events[t];
        if (!r || !r.length) return this;
        var n = r.indexOf(e);
        return -1 != n && r.splice(n, 1), this
      }, e.emitEvent = function (t, e) {
        var r = this._events && this._events[t];
        if (!r || !r.length) return this;
        r = r.slice(0), e = e || [];
        var n = this._onceEvents && this._onceEvents[t],
          i = !0,
          o = !1,
          s = void 0;
        try {
          for (var a, u = r[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
            var l = a.value;
            n && n[l] && (this.off(t, l), delete n[l]), l.apply(this, e)
          }
        } catch (t) {
          o = !0, s = t
        } finally {
          try {
            i || null == u.return || u.return()
          } finally {
            if (o) throw s
          }
        }
        return this
      }, e.allOff = function () {
        return delete this._events, delete this._onceEvents, this
      }, t
    }))
  }));
  var u = {};
  /*!
   * imagesLoaded v5.0.0
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  ! function (t, e) {
    u ? u = e(t, i("hobco")) : t.imagesLoaded = e(t, t.EvEmitter)
  }("undefined" != typeof window ? window : void 0, (function (t, e) {
    var r = t.jQuery,
      n = t.console;

    function i(t, e, o) {
      if (!(this instanceof i)) return new i(t, e, o);
      var a, u = t;
      ("string" == typeof t && (u = document.querySelectorAll(t)), u) ? (this.elements = (a = u, Array.isArray(a) ? a : "object" == typeof a && "number" == typeof a.length ? s(a) : [a]), this.options = {}, "function" == typeof e ? o = e : Object.assign(this.options, e), o && this.on("always", o), this.getImages(), r && (this.jqDeferred = new r.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded ".concat(u || t))
    }
    i.prototype = Object.create(e.prototype), i.prototype.getImages = function () {
      this.images = [], this.elements.forEach(this.addElementImages, this)
    };
    var o = [1, 9, 11];
    i.prototype.addElementImages = function (t) {
      "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
      var e = t.nodeType;
      if (e && o.includes(e)) {
        var r = t.querySelectorAll("img"),
          n = !0,
          i = !1,
          s = void 0;
        try {
          for (var a, u = r[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
            var l = a.value;
            this.addImage(l)
          }
        } catch (t) {
          i = !0, s = t
        } finally {
          try {
            n || null == u.return || u.return()
          } finally {
            if (i) throw s
          }
        }
        if ("string" == typeof this.options.background) {
          var c = t.querySelectorAll(this.options.background),
            h = !0,
            f = !1,
            d = void 0;
          try {
            for (var p, g = c[Symbol.iterator](); !(h = (p = g.next()).done); h = !0) {
              var m = p.value;
              this.addElementBackgroundImages(m)
            }
          } catch (t) {
            f = !0, d = t
          } finally {
            try {
              h || null == g.return || g.return()
            } finally {
              if (f) throw d
            }
          }
        }
      }
    };
    var a = /url\((['"])?(.*?)\1\)/gi;

    function u(t) {
      this.img = t
    }

    function l(t, e) {
      this.url = t, this.element = e, this.img = new Image
    }
    return i.prototype.addElementBackgroundImages = function (t) {
      var e = getComputedStyle(t);
      if (e)
        for (var r = a.exec(e.backgroundImage); null !== r;) {
          var n = r && r[2];
          n && this.addBackground(n, t), r = a.exec(e.backgroundImage)
        }
    }, i.prototype.addImage = function (t) {
      var e = new u(t);
      this.images.push(e)
    }, i.prototype.addBackground = function (t, e) {
      var r = new l(t, e);
      this.images.push(r)
    }, i.prototype.check = function () {
      var t = this;
      if (this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length) {
        var e = function (e, r, n) {
          var i = t;
          setTimeout((function () {
            i.progress(e, r, n)
          }))
        };
        this.images.forEach((function (t) {
          t.once("progress", e), t.check()
        }))
      } else this.complete()
    }, i.prototype.progress = function (t, e, r) {
      this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log("progress: ".concat(r), t, e)
    }, i.prototype.complete = function () {
      var t = this.hasAnyBroken ? "fail" : "done";
      if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
        var e = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[e](this)
      }
    }, u.prototype = Object.create(e.prototype), u.prototype.check = function () {
      this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
    }, u.prototype.getIsImageComplete = function () {
      return this.img.complete && this.img.naturalWidth
    }, u.prototype.confirm = function (t, e) {
      this.isLoaded = t;
      var r = this.img.parentNode,
        n = "PICTURE" === r.nodeName ? r : this.img;
      this.emitEvent("progress", [this, n, e])
    }, u.prototype.handleEvent = function (t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, u.prototype.onload = function () {
      this.confirm(!0, "onload"), this.unbindEvents()
    }, u.prototype.onerror = function () {
      this.confirm(!1, "onerror"), this.unbindEvents()
    }, u.prototype.unbindEvents = function () {
      this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, l.prototype = Object.create(u.prototype), l.prototype.check = function () {
      this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, l.prototype.unbindEvents = function () {
      this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, l.prototype.confirm = function (t, e) {
      this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, i.makeJQueryPlugin = function (e) {
      (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function (t, e) {
        return new i(this, t, e).jqDeferred.promise(r(this))
      })
    }, i.makeJQueryPlugin(), i
  }));
  var l = {};

  function c() {}
  c.prototype = {
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
  }, (l = c).TinyEmitter = c;
  var h = {};

  function f(t, e) {
    return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  h = function () {
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
      c = e("event"),
      h = e("touchStart"),
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
        }), Object.defineProperty(this, c, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, h, {
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, f, {
          writable: !0,
          value: void 0
        }), this._onWheel = function (t) {
          var n = r(e, a)[a],
            i = r(e, c)[c];
          i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, o.isFirefox && 1 === t.deltaMode && (i.deltaX *= n.firefoxMultiplier, i.deltaY *= n.firefoxMultiplier), i.deltaX *= n.mouseMultiplier, i.deltaY *= n.mouseMultiplier, e._notify(t)
        }, this._onMouseWheel = function (t) {
          var n = r(e, c)[c];
          n.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, n.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, e._notify(t)
        }, this._onTouchStart = function (t) {
          var n = t.targetTouches ? t.targetTouches[0] : t;
          r(e, h)[h].x = n.pageX, r(e, h)[h].y = n.pageY
        }, this._onTouchMove = function (t) {
          var n = r(e, a)[a];
          n.preventTouch && !t.target.classList.contains(n.unpreventTouchClass) && t.preventDefault();
          var i = r(e, c)[c],
            o = t.targetTouches ? t.targetTouches[0] : t;
          i.deltaX = (o.pageX - r(e, h)[h].x) * n.touchMultiplier, i.deltaY = (o.pageY - r(e, h)[h].y) * n.touchMultiplier, r(e, h)[h].x = o.pageX, r(e, h)[h].y = o.pageY, e._notify(t)
        }, this._onKeyDown = function (t) {
          var n = r(e, c)[c];
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
        }, t), r(this, l)[l] = new i, r(this, c)[c] = {
          y: 0,
          x: 0,
          deltaX: 0,
          deltaY: 0
        }, r(this, h)[h] = {
          x: null,
          y: null
        }, r(this, f)[f] = null, void 0 !== r(this, a)[a].passive && (this.listenerOptions = {
          passive: r(this, a)[a].passive
        })
      }
      var e = t.prototype;
      return e._notify = function (t) {
        var e = r(this, c)[c];
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
  var d = function (e) {
    var r, n;

    function i(r) {
      var n, i, o, s, a = void 0 === r ? {} : r,
        u = a.lerp,
        l = void 0 === u ? .1 : u,
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
      }, s.lerp = l, s.smooth = f, document.addEventListener("wheel", s.onWheel, {
        passive: !1
      }), window.addEventListener("scroll", s.onScroll, !1), window.addEventListener("resize", s.onWindowResize, !1);
      var d = (null == (n = navigator) || null == (i = n.userAgentData) ? void 0 : i.platform) || (null == (o = navigator) ? void 0 : o.platform) || "unknown";
      return s.virtualScroll = new(t(h))({
        firefoxMultiplier: 50,
        mouseMultiplier: d.indexOf("Win") > -1 ? 1 : .4,
        useKeyboard: !1,
        useTouch: !1,
        passive: !0
      }), s.virtualScroll.on(s.onVirtualScroll), s.onWindowResize(), s.maxScroll = document.new.offsetHeight - s.windowHeight, s.resizeObserver = new ResizeObserver(s.onResize), s.resizeObserver.observe(document.new), s.targetScroll = s.scroll = window.scrollY, s
    }
    n = e, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, f(r, n);
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
  }(t(l));

  function p(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function g(t, e) {
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
  var m, _, v, y, b, w, x, T, k, M, O, S, E, A, C, P, D, R, z, L, I, Y, B, F, X, W, N, q, j = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    U = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    H = 1e8,
    V = 1e-8,
    G = 2 * Math.PI,
    K = G / 4,
    Q = 0,
    Z = Math.sqrt,
    $ = Math.cos,
    J = Math.sin,
    tt = function (t) {
      return "string" == typeof t
    },
    et = function (t) {
      return "function" == typeof t
    },
    rt = function (t) {
      return "number" == typeof t
    },
    nt = function (t) {
      return void 0 === t
    },
    it = function (t) {
      return "object" == typeof t
    },
    ot = function (t) {
      return !1 !== t
    },
    st = function () {
      return "undefined" != typeof window
    },
    at = function (t) {
      return et(t) || tt(t)
    },
    ut = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
    lt = Array.isArray,
    ct = /(?:-?\.?\d|\.)+/gi,
    ht = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ft = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    dt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    pt = /[+-]=-?[.\d]+/,
    gt = /[^,'"\[\]\s]+/gi,
    mt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _t = {},
    vt = {},
    yt = function (t) {
      return (vt = Ut(t, _t)) && Lr
    },
    bt = function (t, e) {
      return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    },
    wt = function (t, e) {
      return !e && console.warn(t)
    },
    xt = function (t, e) {
      return t && (_t[t] = e) && vt && (vt[t] = e) || _t
    },
    Tt = function () {
      return 0
    },
    kt = {},
    Mt = [],
    Ot = {},
    St = {},
    Et = {},
    At = 30,
    Ct = [],
    Pt = "",
    Dt = function (t) {
      var e, r, n = t[0];
      if (it(n) || et(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
        for (r = Ct.length; r-- && !Ct[r].targetTest(n););
        e = Ct[r]
      }
      for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new ir(t[r], e))) || t.splice(r, 1);
      return t
    },
    Rt = function (t) {
      return t._gsap || Dt(Te(t))[0]._gsap
    },
    zt = function (t, e, r) {
      return (r = t[e]) && et(r) ? t[e]() : nt(r) && t.getAttribute && t.getAttribute(e) || r
    },
    Lt = function (t, e) {
      return (t = t.split(",")).forEach(e) || t
    },
    It = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0
    },
    Yt = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0
    },
    Bt = function (t, e) {
      var r = e.charAt(0),
        n = parseFloat(e.substr(2));
      return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
    },
    Ft = function (t, e) {
      for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
      return n < r
    },
    Xt = function () {
      var t, e, r = Mt.length,
        n = Mt.slice(0);
      for (Ot = {}, Mt.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    },
    Wt = function (t, e, r, n) {
      Mt.length && Xt(), t.render(e, r, n), Mt.length && Xt()
    },
    Nt = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(gt).length < 2 ? e : tt(t) ? t.trim() : t
    },
    qt = function (t) {
      return t
    },
    jt = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t
    },
    Ut = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t
    },
    Ht = function t(e, r) {
      for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = it(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
      return e
    },
    Vt = function (t, e) {
      var r, n = {};
      for (r in t) r in e || (n[r] = t[r]);
      return n
    },
    Gt = function (t) {
      var e, r = t.parent || _,
        n = t.keyframes ? (e = lt(t.keyframes), function (t, r) {
          for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
        }) : jt;
      if (ot(t.inherit))
        for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
      return t
    },
    Kt = function (t, e, r, n, i) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var o, s = t[n];
      if (i)
        for (o = e[i]; s && s[i] > o;) s = s._prev;
      return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t, e
    },
    Qt = function (t, e, r, n) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var i = e._prev,
        o = e._next;
      i ? i._next = o : t[r] === e && (t[r] = o), o ? o._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
    },
    Zt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
    },
    $t = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r;) r._dirty = 1, r = r.parent;
      return t
    },
    Jt = function (t) {
      for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
      return t
    },
    te = function t(e) {
      return !e || e._ts && t(e.parent)
    },
    ee = function (t) {
      return t._repeat ? re(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    re = function (t, e) {
      var r = Math.floor(t /= e);
      return t && r === t ? r - 1 : r
    },
    ne = function (t, e) {
      return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    },
    ie = function (t) {
      return t._end = Yt(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0))
    },
    oe = function (t, e) {
      var r = t._dp;
      return r && r.smoothChildTiming && t._ts && (t._start = Yt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ie(t), r._dirty || $t(r, t)), t
    },
    se = function (t, e) {
      var r;
      if ((e._time || e._initted && !e._dur) && (r = ne(t.rawTime(), e), (!e._dur || ve(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), $t(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
          for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
        t._zTime = -1e-8
      }
    },
    ae = function (t, e, r, n) {
      return e.parent && Zt(e), e._start = Yt((rt(r) ? r : r || t !== _ ? ge(t, r, e) : t._time) + e._delay), e._end = Yt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Kt(t, e, "_first", "_last", t._sort ? "_start" : 0), he(e) || (t._recent = e), n || se(t, e), t
    },
    ue = function (t, e) {
      return (_t.ScrollTrigger || bt("scrollTrigger", e)) && _t.ScrollTrigger.create(e, t)
    },
    le = function (t, e, r, n) {
      return fr(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && x !== Ue.frame ? (Mt.push(t), t._lazy = [e, n], 1) : void 0 : 1
    },
    ce = function t(e) {
      var r = e.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
    },
    he = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e
    },
    fe = function (t, e, r, n) {
      var i = t._repeat,
        o = Yt(e) || 0,
        s = t._tTime / t._tDur;
      return s && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : Yt(o * (i + 1) + t._rDelay * i) : o, s > 0 && !n ? oe(t, t._tTime = t._tDur * s) : t.parent && ie(t), r || $t(t.parent, t), t
    },
    de = function (t) {
      return t instanceof sr ? $t(t) : fe(t, t._dur)
    },
    pe = {
      _start: 0,
      endTime: Tt,
      totalDuration: Tt
    },
    ge = function t(e, r, n) {
      var i, o, s, a = e.labels,
        u = e._recent || pe,
        l = e.duration() >= H ? u.endTime(!1) : e._dur;
      return tt(r) && (isNaN(r) || r in a) ? (o = r.charAt(0), s = "%" === r.substr(-1), i = r.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = l), a[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), s && n && (o = o / 100 * (lt(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : l + o)) : null == r ? l : +r
    },
    me = function (t, e, r) {
      var n, i, o = rt(e[1]),
        s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
        a = e[s];
      if (o && (a.duration = e[1]), a.parent = r, t) {
        for (n = a, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = ot(i.vars.inherit) && i.parent;
        a.immediateRender = ot(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
      }
      return new _r(e[0], a, e[s + 1])
    },
    _e = function (t, e) {
      return t || 0 === t ? e(t) : e
    },
    ve = function (t, e, r) {
      return r < t ? t : r > e ? e : r
    },
    ye = function (t, e) {
      return tt(t) && (e = mt.exec(t)) ? e[1] : ""
    },
    be = [].slice,
    we = function (t, e) {
      return t && it(t) && "length" in t && (!e && !t.length || t.length - 1 in t && it(t[0])) && !t.nodeType && t !== v
    },
    xe = function (t, e, r) {
      return void 0 === r && (r = []), t.forEach((function (t) {
        var n;
        return tt(t) && !e || we(t, 1) ? (n = r).push.apply(n, Te(t)) : r.push(t)
      })) || r
    },
    Te = function (t, e, r) {
      return !tt(t) || r || !y && He() ? lt(t) ? xe(t, r) : we(t) ? be.call(t, 0) : t ? [t] : [] : be.call((e || b).querySelectorAll(t), 0)
    },
    ke = function (t) {
      return t.sort((function () {
        return .5 - Math.random()
      }))
    },
    Me = function (t) {
      if (et(t)) return t;
      var e = it(t) ? t : {
          each: t
        },
        r = Je(e.ease),
        n = e.from || 0,
        i = parseFloat(e.base) || 0,
        o = {},
        s = n > 0 && n < 1,
        a = isNaN(n) || s,
        u = e.axis,
        l = n,
        c = n;
      return tt(n) ? l = c = {
          center: .5,
          edges: .5,
          end: 1
        } [n] || 0 : !s && a && (l = n[0], c = n[1]),
        function (t, s, h) {
          var f, d, p, g, m, _, v, y, b, w = (h || e).length,
            x = o[w];
          if (!x) {
            if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, H])[1])) {
              for (v = -1e8; v < (v = h[b++].getBoundingClientRect().left) && b < w;);
              b--
            }
            for (x = o[w] = [], f = a ? Math.min(b, w) * l - .5 : n % b, d = b === H ? 0 : a ? w * c / b - .5 : n / b | 0, v = 0, y = H, _ = 0; _ < w; _++) p = _ % b - f, g = d - (_ / b | 0), x[_] = m = u ? Math.abs("y" === u ? g : p) : Z(p * p + g * g), m > v && (v = m), m < y && (y = m);
            "random" === n && ke(x), x.max = v - y, x.min = y, x.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : u ? "y" === u ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === n ? -1 : 1), x.b = w < 0 ? i - w : i, x.u = ye(e.amount || e.each) || 0, r = r && w < 0 ? Ze(r) : r
          }
          return w = (x[t] - x.min) / x.max || 0, Yt(x.b + (r ? r(w) : w) * x.v) + x.u
        }
    },
    Oe = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var n = Math.round(parseFloat(r) / t) * t * e;
        return (n - n % 1) / e + (rt(r) ? 0 : ye(r))
      }
    },
    Se = function (t, e) {
      var r, n, i = lt(t);
      return !i && it(t) && (r = i = t.radius || H, t.values ? (t = Te(t.values), (n = !rt(t[0])) && (r *= r)) : t = Oe(t.increment)), _e(e, i ? et(t) ? function (e) {
        return n = t(e), Math.abs(n - e) <= r ? n : e
      } : function (e) {
        for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = H, l = 0, c = t.length; c--;)(i = n ? (i = t[c].x - s) * i + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < u && (u = i, l = c);
        return l = !r || u <= r ? t[l] : e, n || l === e || rt(e) ? l : l + ye(e)
      } : Oe(t))
    },
    Ee = function (t, e, r, n) {
      return _e(lt(t) ? !e : !0 === r ? (r = 0, !1) : !n, (function () {
        return lt(t) ? t[~~(Math.random() * t.length)] : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
      }))
    },
    Ae = function (t, e, r) {
      return _e(r, (function (r) {
        return t[~~e(r)]
      }))
    },
    Ce = function (t) {
      for (var e, r, n, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? gt : ct), s += t.substr(o, e - o) + Ee(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), o = n + 1;
      return s + t.substr(o, t.length - o)
    },
    Pe = function (t, e, r, n, i) {
      var o = e - t,
        s = n - r;
      return _e(i, (function (e) {
        return r + ((e - t) / o * s || 0)
      }))
    },
    De = function (t, e, r) {
      var n, i, o, s = t.labels,
        a = H;
      for (n in s)(i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (o = n, a = i);
      return o
    },
    Re = function (t, e, r) {
      var n, i, o = t.vars,
        s = o[e];
      if (s) return n = o[e + "Params"], i = o.callbackScope || t, r && Mt.length && Xt(), n ? s.apply(i, n) : s.call(i)
    },
    ze = function (t) {
      return Zt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Re(t, "onInterrupt"), t
    },
    Le = function (t) {
      var e = (t = !t.name && t.default || t).name,
        r = et(t),
        n = e && !r && t.init ? function () {
          this._props = []
        } : t,
        i = {
          init: Tt,
          render: Or,
          add: cr,
          kill: Er,
          modifier: Sr,
          rawVars: 0
        },
        o = {
          targetTest: 0,
          get: 0,
          getSetter: xr,
          aliases: {},
          register: 0
        };
      if (He(), t !== n) {
        if (St[e]) return;
        jt(n, jt(Vt(t, i), o)), Ut(n.prototype, Ut(i, Vt(t, o))), St[n.prop = e] = n, t.targetTest && (Ct.push(n), kt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
      }
      xt(e, n), t.register && t.register(Lr, n, Pr)
    },
    Ie = 255,
    Ye = {
      aqua: [0, Ie, Ie],
      lime: [0, Ie, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Ie],
      navy: [0, 0, 128],
      white: [Ie, Ie, Ie],
      olive: [128, 128, 0],
      yellow: [Ie, Ie, 0],
      orange: [Ie, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Ie, 0, 0],
      pink: [Ie, 192, 203],
      cyan: [0, Ie, Ie],
      transparent: [Ie, Ie, Ie, 0]
    },
    Be = function (t, e, r) {
      return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ie + .5 | 0
    },
    Fe = function (t, e, r) {
      var n, i, o, s, a, u, l, c, h, f, d = t ? rt(t) ? [t >> 16, t >> 8 & Ie, t & Ie] : 0 : Ye.black;
      if (!d) {
        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ye[t]) d = Ye[t];
        else if ("#" === t.charAt(0)) {
          if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & Ie, d & Ie, parseInt(t.substr(7), 16) / 255];
          d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Ie, t & Ie]
        } else if ("hsl" === t.substr(0, 3))
          if (d = f = t.match(ct), e) {
            if (~t.indexOf("=")) return d = t.match(ht), r && d.length < 4 && (d[3] = 1), d
          } else s = +d[0] % 360 / 360, a = +d[1] / 100, n = 2 * (u = +d[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a), d.length > 3 && (d[3] *= 1), d[0] = Be(s + 1 / 3, n, i), d[1] = Be(s, n, i), d[2] = Be(s - 1 / 3, n, i);
        else d = t.match(ct) || Ye.transparent;
        d = d.map(Number)
      }
      return e && !f && (n = d[0] / Ie, i = d[1] / Ie, o = d[2] / Ie, u = ((l = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2, l === c ? s = a = 0 : (h = l - c, a = u > .5 ? h / (2 - l - c) : h / (l + c), s = l === n ? (i - o) / h + (i < o ? 6 : 0) : l === i ? (o - n) / h + 2 : (n - i) / h + 4, s *= 60), d[0] = ~~(s + .5), d[1] = ~~(100 * a + .5), d[2] = ~~(100 * u + .5)), r && d.length < 4 && (d[3] = 1), d
    },
    Xe = function (t) {
      var e = [],
        r = [],
        n = -1;
      return t.split(Ne).forEach((function (t) {
        var i = t.match(ft) || [];
        e.push.apply(e, i), r.push(n += i.length + 1)
      })), e.c = r, e
    },
    We = function (t, e, r) {
      var n, i, o, s, a = "",
        u = (t + a).match(Ne),
        l = e ? "hsla(" : "rgba(",
        c = 0;
      if (!u) return t;
      if (u = u.map((function (t) {
          return (t = Fe(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        })), r && (o = Xe(t), (n = r.c).join(a) !== o.c.join(a)))
        for (s = (i = t.replace(Ne, "1").split(ft)).length - 1; c < s; c++) a += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : r).shift());
      if (!i)
        for (s = (i = t.split(Ne)).length - 1; c < s; c++) a += i[c] + u[c];
      return a + i[s]
    },
    Ne = function () {
      var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Ye) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi")
    }(),
    qe = /hsl[a]?\(/,
    je = function (t) {
      var e, r = t.join(" ");
      if (Ne.lastIndex = 0, Ne.test(r)) return e = qe.test(r), t[1] = We(t[1], e), t[0] = We(t[0], e, Xe(t[1])), !0
    },
    Ue = (P = Date.now, D = 500, R = 33, z = P(), L = z, Y = I = 1e3 / 240, F = function t(e) {
      var r, n, i, o, s = P() - L,
        a = !0 === e;
      if (s > D && (z += s - R), ((r = (i = (L += s) - z) - Y) > 0 || a) && (o = ++E.frame, A = i - 1e3 * E.time, E.time = i /= 1e3, Y += r + (r >= I ? 4 : I - r), n = 1), a || (M = O(t)), n)
        for (C = 0; C < B.length; C++) B[C](i, A, o, e)
    }, E = {
      time: 0,
      frame: 0,
      tick: function () {
        F(!0)
      },
      deltaRatio: function (t) {
        return A / (1e3 / (t || 60))
      },
      wake: function () {
        w && (!y && st() && (v = y = window, b = v.document || {}, _t.gsap = Lr, (v.gsapVersions || (v.gsapVersions = [])).push(Lr.version), yt(vt || v.GreenSockGlobals || !v.gsap && v || {}), S = v.requestAnimationFrame), M && E.sleep(), O = S || function (t) {
          return setTimeout(t, Y - 1e3 * E.time + 1 | 0)
        }, k = 1, F(2))
      },
      sleep: function () {
        (S ? v.cancelAnimationFrame : clearTimeout)(M), k = 0, O = Tt
      },
      lagSmoothing: function (t, e) {
        D = t || 1e8, R = Math.min(e, D, 0)
      },
      fps: function (t) {
        I = 1e3 / (t || 240), Y = 1e3 * E.time + I
      },
      add: function (t, e, r) {
        var n = e ? function (e, r, i, o) {
          t(e, r, i, o), E.remove(n)
        } : t;
        return E.remove(t), B[r ? "unshift" : "push"](n), He(), n
      },
      remove: function (t, e) {
        ~(e = B.indexOf(t)) && B.splice(e, 1) && C >= e && C--
      },
      _listeners: B = []
    }),
    He = function () {
      return !k && Ue.wake()
    },
    Ve = {},
    Ge = /^[\d.\-M][\d.\-,\s]/,
    Ke = /["']/g,
    Qe = function (t) {
      for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++) r = o[a], e = a !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(Ke, "").trim() : +n, s = r.substr(e + 1).trim();
      return i
    },
    Ze = function (t) {
      return function (e) {
        return 1 - t(1 - e)
      }
    },
    $e = function t(e, r) {
      for (var n, i = e._first; i;) i instanceof sr ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
    },
    Je = function (t, e) {
      return t && (et(t) ? t : Ve[t] || function (t) {
        var e, r, n, i, o = (t + "").split("("),
          s = Ve[o[0]];
        return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Qe(o[1])] : (e = t, r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(Nt)) : Ve._CE && Ge.test(t) ? Ve._CE("", t) : s
      }(t)) || e
    },
    tr = function (t, e, r, n) {
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
      return Lt(t, (function (t) {
        for (var e in Ve[t] = _t[t] = o, Ve[i = t.toLowerCase()] = r, o) Ve[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ve[t + "." + e] = o[e]
      })), o
    },
    er = function (t) {
      return function (e) {
        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
      }
    },
    rr = function t(e, r, n) {
      var i = r >= 1 ? r : 1,
        o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
        s = o / G * (Math.asin(1 / i) || 0),
        a = function (t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * J((t - s) * o) + 1
        },
        u = "out" === e ? a : "in" === e ? function (t) {
          return 1 - a(1 - t)
        } : er(a);
      return o = G / o, u.config = function (r, n) {
        return t(e, r, n)
      }, u
    },
    nr = function t(e, r) {
      void 0 === r && (r = 1.70158);
      var n = function (t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        },
        i = "out" === e ? n : "in" === e ? function (t) {
          return 1 - n(1 - t)
        } : er(n);
      return i.config = function (r) {
        return t(e, r)
      }, i
    };
  Lt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
    var r = e < 5 ? e + 1 : e;
    tr(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r)
    } : function (t) {
      return t
    }, (function (t) {
      return 1 - Math.pow(1 - t, r)
    }), (function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
    }))
  })), Ve.Linear.easeNone = Ve.none = Ve.Linear.easeIn, tr("Elastic", rr("in"), rr("out"), rr()), X = 7.5625, N = 1 / (W = 2.75), tr("Bounce", (function (t) {
    return 1 - q(1 - t)
  }), q = function (t) {
    return t < N ? X * t * t : t < .7272727272727273 ? X * Math.pow(t - 1.5 / W, 2) + .75 : t < .9090909090909092 ? X * (t -= 2.25 / W) * t + .9375 : X * Math.pow(t - 2.625 / W, 2) + .984375
  }), tr("Expo", (function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
  })), tr("Circ", (function (t) {
    return -(Z(1 - t * t) - 1)
  })), tr("Sine", (function (t) {
    return 1 === t ? 1 : 1 - $(t * K)
  })), tr("Back", nr("in"), nr("out"), nr()), Ve.SteppedEase = Ve.steps = _t.SteppedEase = {
    config: function (t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
        n = t + (e ? 0 : 1),
        i = e ? 1 : 0;
      return function (t) {
        return ((n * ve(0, .99999999, t) | 0) + i) * r
      }
    }
  }, U.ease = Ve["quad.out"], Lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
    return Pt += t + "," + t + "Params,"
  }));
  var ir = function (t, e) {
      this.id = Q++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : zt, this.set = e ? e.getSetter : xr
    },
    or = function () {
      function t(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, fe(this, +t.duration, 1, 1), this.data = t.data, k || Ue.wake()
      }
      var e = t.prototype;
      return e.delay = function (t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
      }, e.duration = function (t) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
      }, e.totalDuration = function (t) {
        return arguments.length ? (this._dirty = 0, fe(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
      }, e.totalTime = function (t, e) {
        if (He(), !arguments.length) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (oe(this, t), !r._dp || r.parent || se(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
          !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && ae(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === V || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Wt(this, t, e)), this
      }, e.time = function (t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ee(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
      }, e.totalProgress = function (t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
      }, e.progress = function (t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ee(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
      }, e.iteration = function (t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? re(this._tTime, r) + 1 : 1
      }, e.timeScale = function (t) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === t) return this;
        var e = this.parent && this._ts ? ne(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(ve(-this._delay, this._tDur, e), !0), ie(this), Jt(this)
      }, e.paused = function (t) {
        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (He(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps
      }, e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return e && (e._sort || !this.parent) && ae(e, this, t - this._delay), this
        }
        return this._start
      }, e.endTime = function (t) {
        return this._start + (ot(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
      }, e.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ne(e.rawTime(t), this) : this._tTime : this._tTime
      }, e.globalTime = function (t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
        return r
      }, e.repeat = function (t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, de(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
      }, e.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return this._rDelay = t, de(this), e ? this.time(e) : this
        }
        return this._rDelay
      }, e.yoyo = function (t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo
      }, e.seek = function (t, e) {
        return this.totalTime(ge(this, t), ot(e))
      }, e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, ot(e))
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
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - V))
      }, e.eventCallback = function (t, e, r) {
        var n = this.vars;
        return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
      }, e.then = function (t) {
        var e = this;
        return new Promise((function (r) {
          var n = et(t) ? t : qt,
            i = function () {
              var t = e.then;
              e.then = null, et(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t
            };
          e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
        }))
      }, e.kill = function () {
        ze(this)
      }, t
    }();
  jt(or.prototype, {
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
  var sr = function (t) {
    function e(e, r) {
      var n;
      return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ot(e.sortChildren), _ && ae(e.parent || _, p(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && ue(p(n), e.scrollTrigger), n
    }
    g(e, t);
    var r = e.prototype;
    return r.to = function (t, e, r) {
      return me(0, arguments, this), this
    }, r.from = function (t, e, r) {
      return me(1, arguments, this), this
    }, r.fromTo = function (t, e, r, n) {
      return me(2, arguments, this), this
    }, r.set = function (t, e, r) {
      return e.duration = 0, e.parent = this, Gt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new _r(t, e, ge(this, r), 1), this
    }, r.call = function (t, e, r) {
      return ae(this, _r.delayedCall(0, t, e), r)
    }, r.staggerTo = function (t, e, r, n, i, o, s) {
      return r.duration = e, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = s, r.parent = this, new _r(t, r, ge(this, i)), this
    }, r.staggerFrom = function (t, e, r, n, i, o, s) {
      return r.runBackwards = 1, Gt(r).immediateRender = ot(r.immediateRender), this.staggerTo(t, e, r, n, i, o, s)
    }, r.staggerFromTo = function (t, e, r, n, i, o, s, a) {
      return n.startAt = r, Gt(n).immediateRender = ot(n.immediateRender), this.staggerTo(t, e, n, i, o, s, a)
    }, r.render = function (t, e, r) {
      var n, i, o, s, a, u, l, c, h, f, d, p, g = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        v = this._dur,
        y = t <= 0 ? 0 : Yt(t),
        b = this._zTime < 0 != t < 0 && (this._initted || !v);
      if (this !== _ && y > m && t >= 0 && (y = m), y !== this._tTime || r || b) {
        if (g !== this._time && v && (y += this._time - g, t += this._time - g), n = y, h = this._start, u = !(c = this._ts), b && (v || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
          if (d = this._yoyo, a = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
          if (n = Yt(y % a), y === m ? (s = this._repeat, n = v) : ((s = ~~(y / a)) && s === y / a && (n = v, s--), n > v && (n = v)), f = re(this._tTime, a), !g && this._tTime && f !== s && (f = s), d && 1 & s && (n = v - n, p = 1), s !== f && !this._lock) {
            var w = d && 1 & f,
              x = w === (d && 1 & s);
            if (s < f && (w = !w), g = w ? 0 : v, this._lock = 1, this.render(g || (p ? 0 : Yt(s * a)), e, !v)._lock = 0, this._tTime = y, !e && this.parent && Re(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), g && g !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (v = this._dur, m = this._tDur, x && (this._lock = 2, g = w ? v : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            $e(this, p)
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
          }(this, Yt(g), Yt(n)), l && (y -= n - (n = l._start))), this._tTime = y, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && n && !e && (Re(this, "onStart"), this._tTime !== y)) return this;
        if (n >= g && t >= 0)
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
                  l = 0, o && (y += this._zTime = T ? -1e-8 : V);
                  break
                }
              }
              i = o
            }
          }
        if (l && !e && (this.pause(), l.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = h, ie(this), this.render(t, e, r);
        this._onUpdate && !e && Re(this, "onUpdate", !0), (y === m && this._tTime >= this.totalDuration() || !y && g) && (h !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === m && this._ts > 0 || !y && this._ts < 0) && Zt(this, 1), e || t < 0 && !g || !y && !g && m || (Re(this, y === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < m && this.timeScale() > 0) && this._prom())))
      }
      return this
    }, r.add = function (t, e) {
      var r = this;
      if (rt(e) || (e = ge(this, e, t)), !(t instanceof or)) {
        if (lt(t)) return t.forEach((function (t) {
          return r.add(t, e)
        })), this;
        if (tt(t)) return this.addLabel(t, e);
        if (!et(t)) return this;
        t = _r.delayedCall(0, t)
      }
      return this !== t ? ae(this, t, e) : this
    }, r.getChildren = function (t, e, r, n) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8);
      for (var i = [], o = this._first; o;) o._start >= n && (o instanceof _r ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), o = o._next;
      return i
    }, r.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
        if (e[r].vars.id === t) return e[r]
    }, r.remove = function (t) {
      return tt(t) ? this.removeLabel(t) : et(t) ? this.killTweensOf(t) : (Qt(this, t), t === this._recent && (this._recent = this._last), $t(this))
    }, r.totalTime = function (e, r) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Yt(Ue.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
    }, r.addLabel = function (t, e) {
      return this.labels[t] = ge(this, e), this
    }, r.removeLabel = function (t) {
      return delete this.labels[t], this
    }, r.addPause = function (t, e, r) {
      var n = _r.delayedCall(0, e || Tt, r);
      return n.data = "isPause", this._hasPause = 1, ae(this, n, ge(this, t))
    }, r.removePause = function (t) {
      var e = this._first;
      for (t = ge(this, t); e;) e._start === t && "isPause" === e.data && Zt(e), e = e._next
    }, r.killTweensOf = function (t, e, r) {
      for (var n = this.getTweensOf(t, r), i = n.length; i--;) ar !== n[i] && n[i].kill(t, e);
      return this
    }, r.getTweensOf = function (t, e) {
      for (var r, n = [], i = Te(t), o = this._first, s = rt(e); o;) o instanceof _r ? Ft(o._targets, i) && (s ? (!ar || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
      return n
    }, r.tweenTo = function (t, e) {
      e = e || {};
      var r, n = this,
        i = ge(n, t),
        o = e,
        s = o.startAt,
        a = o.onStart,
        u = o.onStartParams,
        l = o.immediateRender,
        c = _r.to(n, jt({
          ease: e.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: i,
          overwrite: "auto",
          duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || V,
          onStart: function () {
            if (n.pause(), !r) {
              var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale());
              c._dur !== t && fe(c, t, 0, 1).render(c._time, !0, !0), r = 1
            }
            a && a.apply(c, u || [])
          }
        }, e));
      return l ? c.render(0) : c
    }, r.tweenFromTo = function (t, e, r) {
      return this.tweenTo(e, jt({
        startAt: {
          time: ge(this, t)
        }
      }, r))
    }, r.recent = function () {
      return this._recent
    }, r.nextLabel = function (t) {
      return void 0 === t && (t = this._time), De(this, ge(this, t))
    }, r.previousLabel = function (t) {
      return void 0 === t && (t = this._time), De(this, ge(this, t), 1)
    }, r.currentLabel = function (t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + V)
    }, r.shiftChildren = function (t, e, r) {
      void 0 === r && (r = 0);
      for (var n, i = this._first, o = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
      if (e)
        for (n in o) o[n] >= r && (o[n] += t);
      return $t(this)
    }, r.invalidate = function () {
      var e = this._first;
      for (this._lock = 0; e;) e.invalidate(), e = e._next;
      return t.prototype.invalidate.call(this)
    }, r.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), $t(this)
    }, r.totalDuration = function (t) {
      var e, r, n, i = 0,
        o = this,
        s = o._last,
        a = H;
      if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
      if (o._dirty) {
        for (n = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && o._sort && s._ts && !o._lock ? (o._lock = 1, ae(o, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (i -= r, (!n && !o._dp || n && n.smoothChildTiming) && (o._start += r / o._ts, o._time -= r, o._tTime -= r), o.shiftChildren(-r, !1, -1 / 0), a = 0), s._end > i && s._ts && (i = s._end), s = e;
        fe(o, o === _ && o._time > i ? o._time : i, 1, 1), o._dirty = 0
      }
      return o._tDur
    }, e.updateRoot = function (t) {
      if (_._ts && (Wt(_, ne(t, _)), x = Ue.frame), Ue.frame >= At) {
        At += j.autoSleep || 120;
        var e = _._first;
        if ((!e || !e._ts) && j.autoSleep && Ue._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;
          e || Ue.sleep()
        }
      }
    }, e
  }(or);
  jt(sr.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var ar, ur, lr = function (t, e, r, n, i, o, s) {
      var a, u, l, c, h, f, d, p, g = new Pr(this._pt, t, e, 0, 1, Mr, null, i),
        m = 0,
        _ = 0;
      for (g.b = r, g.e = n, r += "", (d = ~(n += "").indexOf("random(")) && (n = Ce(n)), o && (o(p = [r, n], t, e), r = p[0], n = p[1]), u = r.match(dt) || []; a = dt.exec(n);) c = a[0], h = n.substring(m, a.index), l ? l = (l + 1) % 5 : "rgba(" === h.substr(-5) && (l = 1), c !== u[_++] && (f = parseFloat(u[_ - 1]) || 0, g._pt = {
        _next: g._pt,
        p: h || 1 === _ ? h : ",",
        s: f,
        c: "=" === c.charAt(1) ? Bt(f, c) - f : parseFloat(c) - f,
        m: l && l < 4 ? Math.round : 0
      }, m = dt.lastIndex);
      return g.c = m < n.length ? n.substring(m, n.length) : "", g.fp = s, (pt.test(n) || d) && (g.e = 0), this._pt = g, g
    },
    cr = function (t, e, r, n, i, o, s, a, u) {
      et(n) && (n = n(i || 0, t, o));
      var l, c = t[e],
        h = "get" !== r ? r : et(c) ? u ? t[e.indexOf("set") || !et(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : c,
        f = et(c) ? u ? br : yr : vr;
      if (tt(n) && (~n.indexOf("random(") && (n = Ce(n)), "=" === n.charAt(1) && ((l = Bt(h, n) + (ye(h) || 0)) || 0 === l) && (n = l)), h !== n || ur) return isNaN(h * n) || "" === n ? (!c && !(e in t) && bt(e, n), lr.call(this, t, e, h, n, f, a || j.stringFilter, u)) : (l = new Pr(this._pt, t, e, +h || 0, n - (h || 0), "boolean" == typeof c ? kr : Tr, 0, f), u && (l.fp = u), s && l.modifier(s, this, t), this._pt = l)
    },
    hr = function (t, e, r, n, i, o) {
      var s, a, u, l;
      if (St[t] && !1 !== (s = new St[t]).init(i, s.rawVars ? e[t] : function (t, e, r, n, i) {
          if (et(t) && (t = pr(t, i, e, r, n)), !it(t) || t.style && t.nodeType || lt(t) || ut(t)) return tt(t) ? pr(t, i, e, r, n) : t;
          var o, s = {};
          for (o in t) s[o] = pr(t[o], i, e, r, n);
          return s
        }(e[t], n, i, o, r), r, n, o) && (r._pt = a = new Pr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority), r !== T))
        for (u = r._ptLookup[r._targets.indexOf(i)], l = s._props.length; l--;) u[s._props[l]] = a;
      return s
    },
    fr = function t(e, r) {
      var n, i, o, s, a, u, l, c, h, f, d, p, g, v = e.vars,
        y = v.ease,
        b = v.startAt,
        w = v.immediateRender,
        x = v.lazy,
        T = v.onUpdate,
        k = v.onUpdateParams,
        M = v.callbackScope,
        O = v.runBackwards,
        S = v.yoyoEase,
        E = v.keyframes,
        A = v.autoRevert,
        C = e._dur,
        P = e._startAt,
        D = e._targets,
        R = e.parent,
        z = R && "nested" === R.data ? R.parent._targets : D,
        L = "auto" === e._overwrite && !m,
        I = e.timeline;
      if (I && (!E || !y) && (y = "none"), e._ease = Je(y, U.ease), e._yEase = S ? Ze(Je(!0 === S ? y : S, U.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), e._from = !I && !!v.runBackwards, !I || E && !v.stagger) {
        if (p = (c = D[0] ? Rt(D[0]).harness : 0) && v[c.prop], n = Vt(v, kt), P && (Zt(P.render(-1, !0)), P._lazy = 0), b)
          if (Zt(e._startAt = _r.set(D, jt({
              data: "isStart",
              overwrite: !1,
              parent: R,
              immediateRender: !0,
              lazy: ot(x),
              startAt: null,
              delay: 0,
              onUpdate: T,
              onUpdateParams: k,
              callbackScope: M,
              stagger: 0
            }, b))), r < 0 && !w && !A && e._startAt.render(-1, !0), w) {
            if (r > 0 && !A && (e._startAt = 0), C && r <= 0) return void(r && (e._zTime = r))
          } else !1 === A && (e._startAt = 0);
        else if (O && C)
          if (P) !A && (e._startAt = 0);
          else if (r && (w = !1), o = jt({
            overwrite: !1,
            data: "isFromStart",
            lazy: w && ot(x),
            immediateRender: w,
            stagger: 0,
            parent: R
          }, n), p && (o[c.prop] = p), Zt(e._startAt = _r.set(D, o)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, w) {
          if (!r) return
        } else t(e._startAt, V);
        for (e._pt = e._ptCache = 0, x = C && ot(x) || x && !C, i = 0; i < D.length; i++) {
          if (l = (a = D[i])._gsap || Dt(D)[i]._gsap, e._ptLookup[i] = f = {}, Ot[l.id] && Mt.length && Xt(), d = z === D ? i : z.indexOf(a), c && !1 !== (h = new c).init(a, p || n, e, d, z) && (e._pt = s = new Pr(e._pt, a, h.name, 0, 1, h.render, h, 0, h.priority), h._props.forEach((function (t) {
              f[t] = s
            })), h.priority && (u = 1)), !c || p)
            for (o in n) St[o] && (h = hr(o, n, e, d, a, z)) ? h.priority && (u = 1) : f[o] = s = cr.call(e, a, o, "get", n[o], d, z, 0, v.stringFilter);
          e._op && e._op[i] && e.kill(a, e._op[i]), L && e._pt && (ar = e, _.killTweensOf(a, f, e.globalTime(r)), g = !e.parent, ar = 0), e._pt && x && (Ot[l.id] = 1)
        }
        u && Cr(e), e._onInit && e._onInit(e)
      }
      e._onUpdate = T, e._initted = (!e._op || e._pt) && !g, E && r <= 0 && I.render(H, !0, !0)
    },
    dr = function (t, e, r, n) {
      var i, o, s = e.ease || n || "power1.inOut";
      if (lt(e)) o = r[t] || (r[t] = []), e.forEach((function (t, r) {
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
    pr = function (t, e, r, n, i) {
      return et(t) ? t.call(e, r, n, i) : tt(t) && ~t.indexOf("random(") ? Ce(t) : t
    },
    gr = Pt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    mr = {};
  Lt(gr + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
    return mr[t] = 1
  }));
  var _r = function (t) {
    function e(e, r, n, i) {
      var o;
      "number" == typeof r && (n.duration = r, r = n, n = null);
      var s, a, u, l, c, h, f, d, g = (o = t.call(this, i ? r : Gt(r)) || this).vars,
        v = g.duration,
        y = g.delay,
        b = g.immediateRender,
        w = g.stagger,
        x = g.overwrite,
        T = g.keyframes,
        k = g.defaults,
        M = g.scrollTrigger,
        O = g.yoyoEase,
        S = r.parent || _,
        E = (lt(e) || ut(e) ? rt(e[0]) : "length" in r) ? [e] : Te(e);
      if (o._targets = E.length ? Dt(E) : wt("GSAP target " + e + " not found. https://greensock.com", !j.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = x, T || w || at(v) || at(y)) {
        if (r = o.vars, (s = o.timeline = new sr({
            data: "nested",
            defaults: k || {}
          })).kill(), s.parent = s._dp = p(o), s._start = 0, w || at(v) || at(y)) {
          if (l = E.length, f = w && Me(w), it(w))
            for (c in w) ~gr.indexOf(c) && (d || (d = {}), d[c] = w[c]);
          for (a = 0; a < l; a++)(u = Vt(r, mr)).stagger = 0, O && (u.yoyoEase = O), d && Ut(u, d), h = E[a], u.duration = +pr(v, p(o), a, h, E), u.delay = (+pr(y, p(o), a, h, E) || 0) - o._delay, !w && 1 === l && u.delay && (o._delay = y = u.delay, o._start += y, u.delay = 0), s.to(h, u, f ? f(a, h, E) : 0), s._ease = Ve.none;
          s.duration() ? v = y = 0 : o.timeline = 0
        } else if (T) {
          Gt(jt(s.vars.defaults, {
            ease: "none"
          })), s._ease = Je(T.ease || r.ease || "none");
          var A, C, P, D = 0;
          if (lt(T)) T.forEach((function (t) {
            return s.to(E, t, ">")
          }));
          else {
            for (c in u = {}, T) "ease" === c || "easeEach" === c || dr(c, T[c], u, T.easeEach);
            for (c in u)
              for (A = u[c].sort((function (t, e) {
                  return t.t - e.t
                })), D = 0, a = 0; a < A.length; a++)(P = {
                ease: (C = A[a]).e,
                duration: (C.t - (a ? A[a - 1].t : 0)) / 100 * v
              })[c] = C.v, s.to(E, P, D), D += P.duration;
            s.duration() < v && s.to({}, {
              duration: v - s.duration()
            })
          }
        }
        v || o.duration(v = s.duration())
      } else o.timeline = 0;
      return !0 !== x || m || (ar = p(o), _.killTweensOf(E), ar = 0), ae(S, p(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (b || !v && !T && o._start === Yt(S._time) && ot(b) && te(p(o)) && "nested" !== S.data) && (o._tTime = -1e-8, o.render(Math.max(0, -y))), M && ue(p(o), M), o
    }
    g(e, t);
    var r = e.prototype;
    return r.render = function (t, e, r) {
      var n, i, o, s, a, u, l, c, h, f = this._time,
        d = this._tDur,
        p = this._dur,
        g = t > d - V && t >= 0 ? d : t < V ? 0 : t;
      if (p) {
        if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
          if (n = g, c = this.timeline, this._repeat) {
            if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
            if (n = Yt(g % s), g === d ? (o = this._repeat, n = p) : ((o = ~~(g / s)) && o === g / s && (n = p, o--), n > p && (n = p)), (u = this._yoyo && 1 & o) && (h = this._yEase, n = p - n), a = re(this._tTime, s), n === f && !r && this._initted) return this._tTime = g, this;
            o !== a && (c && this._yEase && $e(c, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(Yt(s * o), !0).invalidate()._lock = 0))
          }
          if (!this._initted) {
            if (le(this, t < 0 ? t : n, r, e)) return this._tTime = 0, this;
            if (f !== this._time) return this;
            if (p !== this._dur) return this.render(t, e, r)
          }
          if (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (h || this._ease)(n / p), this._from && (this.ratio = l = 1 - l), n && !f && !e && (Re(this, "onStart"), this._tTime !== g)) return this;
          for (i = this._pt; i;) i.r(l, i.d), i = i._next;
          c && c.render(t < 0 ? t : !n && u ? -1e-8 : c._dur * c._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), Re(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && Re(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !p) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Zt(this, 1), e || t < 0 && !f || !g && !f || (Re(this, g === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < d && this.timeScale() > 0) && this._prom()))
        }
      } else ! function (t, e, r, n) {
        var i, o, s, a = t.ratio,
          u = e < 0 || !e && (!t._start && ce(t) && (t._initted || !he(t)) || (t._ts < 0 || t._dp._ts < 0) && !he(t)) ? 0 : 1,
          l = t._rDelay,
          c = 0;
        if (l && t._repeat && (c = ve(0, t._tDur, e), o = re(c, l), t._yoyo && 1 & o && (u = 1 - u), o !== re(t._tTime, l) && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || n || t._zTime === V || !e && t._zTime) {
          if (!t._initted && le(t, e, n, r)) return;
          for (s = t._zTime, t._zTime = e || (r ? V : 0), r || (r = e && !s), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = c, i = t._pt; i;) i.r(u, i.d), i = i._next;
          t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && Re(t, "onUpdate"), c && t._repeat && !r && t.parent && Re(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Zt(t, 1), r || (Re(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = e)
      }(this, t, e, r);
      return this
    }, r.targets = function () {
      return this._targets
    }, r.invalidate = function () {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
    }, r.resetTo = function (t, e, r, n) {
      k || Ue.wake(), this._ts || this.play();
      var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || fr(this, i),
        function (t, e, r, n, i, o, s) {
          var a, u, l, c = (t._pt && t._ptCache || (t._ptCache = {}))[e];
          if (!c)
            for (c = t._ptCache[e] = [], u = t._ptLookup, l = t._targets.length; l--;) {
              if ((a = u[l][e]) && a.d && a.d._pt)
                for (a = a.d._pt; a && a.p !== e;) a = a._next;
              if (!a) return ur = 1, t.vars[e] = "+=0", fr(t, s), ur = 0, 1;
              c.push(a)
            }
          for (l = c.length; l--;)(a = c[l]).s = !n && 0 !== n || i ? a.s + (n || 0) + o * a.c : n, a.c = r - a.s, a.e && (a.e = It(r) + ye(a.e)), a.b && (a.b = a.s + ye(a.b))
        }(this, t, e, r, n, this._ease(i / this._dur), i) ? this.resetTo(t, e, r, n) : (oe(this, 0), this.parent || Kt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, r.kill = function (t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ze(this) : this;
      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, ar && !0 !== ar.vars.overwrite)._first || ze(this), this.parent && r !== this.timeline.totalDuration() && fe(this, this._dur * this.timeline._tDur / r, 0, 1), this
      }
      var n, i, o, s, a, u, l, c = this._targets,
        h = t ? Te(t) : c,
        f = this._ptLookup,
        d = this._pt;
      if ((!e || "all" === e) && function (t, e) {
          for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
          return r < 0
        }(c, h)) return "all" === e && (this._pt = 0), ze(this);
      for (n = this._op = this._op || [], "all" !== e && (tt(e) && (a = {}, Lt(e, (function (t) {
          return a[t] = 1
        })), e = a), e = function (t, e) {
          var r, n, i, o, s = t[0] ? Rt(t[0]).harness : 0,
            a = s && s.aliases;
          if (!a) return e;
          for (n in r = Ut({}, e), a)
            if (n in r)
              for (i = (o = a[n].split(",")).length; i--;) r[o[i]] = r[n];
          return r
        }(c, e)), l = c.length; l--;)
        if (~h.indexOf(c[l]))
          for (a in i = f[l], "all" === e ? (n[l] = e, s = i, o = {}) : (o = n[l] = n[l] || {}, s = e), s)(u = i && i[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || Qt(this, u, "_pt"), delete i[a]), "all" !== o && (o[a] = 1);
      return this._initted && !this._pt && d && ze(this), this
    }, e.to = function (t, r) {
      return new e(t, r, arguments[2])
    }, e.from = function (t, e) {
      return me(1, arguments)
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
      return me(2, arguments)
    }, e.set = function (t, r) {
      return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
    }, e.killTweensOf = function (t, e, r) {
      return _.killTweensOf(t, e, r)
    }, e
  }(or);
  jt(_r.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), Lt("staggerTo,staggerFrom,staggerFromTo", (function (t) {
    _r[t] = function () {
      var e = new sr,
        r = be.call(arguments, 0);
      return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
    }
  }));
  var vr = function (t, e, r) {
      return t[e] = r
    },
    yr = function (t, e, r) {
      return t[e](r)
    },
    br = function (t, e, r, n) {
      return t[e](n.fp, r)
    },
    wr = function (t, e, r) {
      return t.setAttribute(e, r)
    },
    xr = function (t, e) {
      return et(t[e]) ? yr : nt(t[e]) && t.setAttribute ? wr : vr
    },
    Tr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    },
    kr = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    Mr = function (t, e) {
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
    Or = function (t, e) {
      for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    },
    Sr = function (t, e, r, n) {
      for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(t, e, r), o = i
    },
    Er = function (t) {
      for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? Qt(this, n, "_pt") : n.dep || (e = 1), n = r;
      return !e
    },
    Ar = function (t, e, r, n) {
      n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
    },
    Cr = function (t) {
      for (var e, r, n, i, o = t._pt; o;) {
        for (e = o._next, r = n; r && r.pr > o.pr;) r = r._next;
        (o._prev = r ? r._prev : i) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : i = o, o = e
      }
      t._pt = n
    },
    Pr = function () {
      function t(t, e, r, n, i, o, s, a, u) {
        this.t = e, this.s = n, this.c = i, this.p = r, this.r = o || Tr, this.d = s || this, this.set = a || vr, this.pr = u || 0, this._next = t, t && (t._prev = this)
      }
      return t.prototype.modifier = function (t, e, r) {
        this.mSet = this.mSet || this.set, this.set = Ar, this.m = t, this.mt = r, this.tween = e
      }, t
    }();
  Lt(Pt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
    return kt[t] = 1
  })), _t.TweenMax = _t.TweenLite = _r, _t.TimelineLite = _t.TimelineMax = sr, _ = new sr({
    sortChildren: !1,
    defaults: U,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), j.stringFilter = je;
  var Dr = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach((function (t) {
        return Le(t)
      }))
    },
    timeline: function (t) {
      return new sr(t)
    },
    getTweensOf: function (t, e) {
      return _.getTweensOf(t, e)
    },
    getProperty: function (t, e, r, n) {
      tt(t) && (t = Te(t)[0]);
      var i = Rt(t || {}).get,
        o = r ? qt : Nt;
      return "native" === r && (r = ""), t ? e ? o((St[e] && St[e].get || i)(t, e, r, n)) : function (e, r, n) {
        return o((St[e] && St[e].get || i)(t, e, r, n))
      } : t
    },
    quickSetter: function (t, e, r) {
      if ((t = Te(t)).length > 1) {
        var n = t.map((function (t) {
            return Lr.quickSetter(t, e, r)
          })),
          i = n.length;
        return function (t) {
          for (var e = i; e--;) n[e](t)
        }
      }
      t = t[0] || {};
      var o = St[e],
        s = Rt(t),
        a = s.harness && (s.harness.aliases || {})[e] || e,
        u = o ? function (e) {
          var n = new o;
          T._pt = 0, n.init(t, r ? e + r : e, T, 0, [t]), n.render(1, n), T._pt && Or(1, T)
        } : s.set(t, a);
      return o ? u : function (e) {
        return u(t, a, r ? e + r : e, s, 1)
      }
    },
    quickTo: function (t, e, r) {
      var n, i = Lr.to(t, Ut(((n = {})[e] = "+=0.1", n.paused = !0, n), r || {})),
        o = function (t, r, n) {
          return i.resetTo(e, t, r, n)
        };
      return o.tween = i, o
    },
    isTweening: function (t) {
      return _.getTweensOf(t, !0).length > 0
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Je(t.ease, U.ease)), Ht(U, t || {})
    },
    config: function (t) {
      return Ht(j, t || {})
    },
    registerEffect: function (t) {
      var e = t.name,
        r = t.effect,
        n = t.plugins,
        i = t.defaults,
        o = t.extendTimeline;
      (n || "").split(",").forEach((function (t) {
        return t && !St[t] && !_t[t] && wt(e + " effect requires " + t + " plugin.")
      })), Et[e] = function (t, e, n) {
        return r(Te(t), jt(e || {}, i), n)
      }, o && (sr.prototype[e] = function (t, r, n) {
        return this.add(Et[e](t, it(r) ? r : (n = r) && {}, this), n)
      })
    },
    registerEase: function (t, e) {
      Ve[t] = Je(e)
    },
    parseEase: function (t, e) {
      return arguments.length ? Je(t, e) : Ve
    },
    getById: function (t) {
      return _.getById(t)
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var r, n, i = new sr(t);
      for (i.smoothChildTiming = ot(t.smoothChildTiming), _.remove(i), i._dp = 0, i._time = i._tTime = _._time, r = _._first; r;) n = r._next, !e && !r._dur && r instanceof _r && r.vars.onComplete === r._targets[0] || ae(i, r, r._start - r._delay), r = n;
      return ae(_, i, 0), i
    },
    utils: {
      wrap: function t(e, r, n) {
        var i = r - e;
        return lt(e) ? Ae(e, t(0, e.length), r) : _e(n, (function (t) {
          return (i + (t - e) % i) % i + e
        }))
      },
      wrapYoyo: function t(e, r, n) {
        var i = r - e,
          o = 2 * i;
        return lt(e) ? Ae(e, t(0, e.length - 1), r) : _e(n, (function (t) {
          return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
        }))
      },
      distribute: Me,
      random: Ee,
      snap: Se,
      normalize: function (t, e, r) {
        return Pe(t, e, 0, 1, r)
      },
      getUnit: ye,
      clamp: function (t, e, r) {
        return _e(r, (function (r) {
          return ve(t, e, r)
        }))
      },
      splitColor: Fe,
      toArray: Te,
      selector: function (t) {
        return t = Te(t)[0] || wt("Invalid scope") || {},
          function (e) {
            var r = t.current || t.nativeElement || t;
            return Te(e, r.querySelectorAll ? r : r === t ? wt("Invalid scope") || b.createElement("div") : t)
          }
      },
      mapRange: Pe,
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
          return t(parseFloat(r)) + (e || ye(r))
        }
      },
      interpolate: function t(e, r, n, i) {
        var o = isNaN(e + r) ? 0 : function (t) {
          return (1 - t) * e + t * r
        };
        if (!o) {
          var s, a, u, l, c, h = tt(e),
            f = {};
          if (!0 === n && (i = 1) && (n = null), h) e = {
            p: e
          }, r = {
            p: r
          };
          else if (lt(e) && !lt(r)) {
            for (u = [], l = e.length, c = l - 2, a = 1; a < l; a++) u.push(t(e[a - 1], e[a]));
            l--, o = function (t) {
              t *= l;
              var e = Math.min(c, ~~t);
              return u[e](t - e)
            }, n = r
          } else i || (e = Ut(lt(e) ? [] : {}, e));
          if (!u) {
            for (s in r) cr.call(f, e, s, "get", r[s]);
            o = function (t) {
              return Or(t, f) || (h ? e.p : e)
            }
          }
        }
        return _e(n, o)
      },
      shuffle: ke
    },
    install: yt,
    effects: Et,
    ticker: Ue,
    updateRoot: sr.updateRoot,
    plugins: St,
    globalTimeline: _,
    core: {
      PropTween: Pr,
      globals: xt,
      Tween: _r,
      Timeline: sr,
      Animation: or,
      getCache: Rt,
      _removeLinkedListItem: Qt,
      suppressOverwrites: function (t) {
        return m = t
      }
    }
  };
  Lt("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
    return Dr[t] = _r[t]
  })), Ue.add(sr.updateRoot), T = Dr.to({}, {
    duration: 0
  });
  var Rr = function (t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
      return r
    },
    zr = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, r, n) {
          n._onInit = function (t) {
            var n, i;
            if (tt(r) && (n = {}, Lt(r, (function (t) {
                return n[t] = 1
              })), r = n), e) {
              for (i in n = {}, r) n[i] = e(r[i]);
              r = n
            }! function (t, e) {
              var r, n, i, o = t._targets;
              for (r in e)
                for (n = o.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = Rr(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r))
            }(t, r)
          }
        }
      }
    },
    Lr = Dr.registerPlugin({
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
    }, zr("roundProps", Oe), zr("modifiers"), zr("snap", Se)) || Dr;
  _r.version = sr.version = Lr.version = "3.10.4", w = 1, st() && He();
  Ve.Power0, Ve.Power1, Ve.Power2, Ve.Power3, Ve.Power4, Ve.Linear, Ve.Quad, Ve.Cubic, Ve.Quart, Ve.Quint, Ve.Strong, Ve.Elastic, Ve.Back, Ve.SteppedEase, Ve.Bounce, Ve.Sine, Ve.Expo, Ve.Circ;
  var Ir, Yr, Br, Fr, Xr, Wr, Nr, qr = {},
    jr = 180 / Math.PI,
    Ur = Math.PI / 180,
    Hr = Math.atan2,
    Vr = /([A-Z])/g,
    Gr = /(left|right|width|margin|padding|x)/i,
    Kr = /[\s,\(]\S/,
    Qr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    Zr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    $r = function (t, e) {
      return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    Jr = function (t, e) {
      return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    },
    tn = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    },
    en = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    rn = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    },
    nn = function (t, e, r) {
      return t.style[e] = r
    },
    on = function (t, e, r) {
      return t.style.setProperty(e, r)
    },
    sn = function (t, e, r) {
      return t._gsap[e] = r
    },
    an = function (t, e, r) {
      return t._gsap.scaleX = t._gsap.scaleY = r
    },
    un = function (t, e, r, n, i) {
      var o = t._gsap;
      o.scaleX = o.scaleY = r, o.renderTransform(i, o)
    },
    ln = function (t, e, r, n, i) {
      var o = t._gsap;
      o[e] = r, o.renderTransform(i, o)
    },
    cn = "transform",
    hn = cn + "Origin",
    fn = function (t, e) {
      var r = Yr.createElementNS ? Yr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Yr.createElement(t);
      return r.style ? r : Yr.createElement(t)
    },
    dn = function t(e, r, n) {
      var i = getComputedStyle(e);
      return i[r] || i.getPropertyValue(r.replace(Vr, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, gn(r) || r, 1) || ""
    },
    pn = "O,Moz,ms,Ms,Webkit".split(","),
    gn = function (t, e, r) {
      var n = (e || Xr).style,
        i = 5;
      if (t in n && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(pn[i] + t in n););
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? pn[i] : "") + t
    },
    mn = function () {
      "undefined" != typeof window && window.document && (Ir = window, Yr = Ir.document, Br = Yr.documentElement, Xr = fn("div") || {
        style: {}
      }, fn("div"), cn = gn(cn), hn = cn + "Origin", Xr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Nr = !!gn("perspective"), Fr = 1)
    },
    _n = function t(e) {
      var r, n = fn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        o = this.nextSibling,
        s = this.style.cssText;
      if (Br.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
        r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
      } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
      return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), Br.removeChild(n), this.style.cssText = s, r
    },
    vn = function (t, e) {
      for (var r = e.length; r--;)
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    },
    yn = function (t) {
      var e;
      try {
        e = t.getBBox()
      } catch (r) {
        e = _n.call(t, !0)
      }
      return e && (e.width || e.height) || t.getBBox === _n || (e = _n.call(t, !0)), !e || e.width || e.x || e.y ? e : {
        x: +vn(t, ["x", "cx", "x1"]) || 0,
        y: +vn(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      }
    },
    bn = function (t) {
      return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !yn(t))
    },
    wn = function (t, e) {
      if (e) {
        var r = t.style;
        e in qr && e !== hn && (e = cn), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Vr, "-$1").toLowerCase())) : r.removeAttribute(e)
      }
    },
    xn = function (t, e, r, n, i, o) {
      var s = new Pr(t._pt, e, r, 0, 1, o ? rn : en);
      return t._pt = s, s.b = n, s.e = i, t._props.push(r), s
    },
    Tn = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    kn = function t(e, r, n, i) {
      var o, s, a, u, l = parseFloat(n) || 0,
        c = (n + "").trim().substr((l + "").length) || "px",
        h = Xr.style,
        f = Gr.test(r),
        d = "svg" === e.tagName.toLowerCase(),
        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        g = 100,
        m = "px" === i,
        _ = "%" === i;
      return i === c || !l || Tn[i] || Tn[c] ? l : ("px" !== c && !m && (l = t(e, r, n, "px")), u = e.getCTM && bn(e), !_ && "%" !== c || !qr[r] && !~r.indexOf("adius") ? (h[f ? "width" : "height"] = g + (m ? c : i), s = ~r.indexOf("adius") || "em" === i && e.appendChild && !d ? e : e.parentNode, u && (s = (e.ownerSVGElement || {}).parentNode), s && s !== Yr && s.appendChild || (s = Yr.new), (a = s._gsap) && _ && a.width && f && a.time === Ue.time ? It(l / a.width * g) : ((_ || "%" === c) && (h.position = dn(e, "position")), s === e && (h.position = "static"), s.appendChild(Xr), o = Xr[p], s.removeChild(Xr), h.position = "absolute", f && _ && ((a = Rt(s)).time = Ue.time, a.width = s[p]), It(m ? o * l / g : o && l ? g / o * l : 0))) : (o = u ? e.getBBox()[f ? "width" : "height"] : e[p], It(_ ? l / o * g : l / 100 * o)))
    },
    Mn = function (t, e, r, n) {
      var i;
      return Fr || mn(), e in Qr && "transform" !== e && ~(e = Qr[e]).indexOf(",") && (e = e.split(",")[0]), qr[e] && "transform" !== e ? (i = In(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Yn(dn(t, hn)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = An[e] && An[e](t, e, r) || dn(t, e) || zt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? kn(t, e, i, r) + r : i
    },
    On = function (t, e, r, n) {
      if (!r || "none" === r) {
        var i = gn(e, t, 1),
          o = i && dn(t, i, 1);
        o && o !== r ? (e = i, r = o) : "borderColor" === e && (r = dn(t, "borderTopColor"))
      }
      var s, a, u, l, c, h, f, d, p, g, m, _ = new Pr(this._pt, t.style, e, 0, 1, Mr),
        v = 0,
        y = 0;
      if (_.b = r, _.e = n, r += "", "auto" === (n += "") && (t.style[e] = n, n = dn(t, e) || n, t.style[e] = r), je(s = [r, n]), n = s[1], u = (r = s[0]).match(ft) || [], (n.match(ft) || []).length) {
        for (; a = ft.exec(n);) f = a[0], p = n.substring(v, a.index), c ? c = (c + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (c = 1), f !== (h = u[y++] || "") && (l = parseFloat(h) || 0, m = h.substr((l + "").length), "=" === f.charAt(1) && (f = Bt(l, f) + m), d = parseFloat(f), g = f.substr((d + "").length), v = ft.lastIndex - g.length, g || (g = g || j.units[e] || m, v === n.length && (n += g, _.e += g)), m !== g && (l = kn(t, e, h, g) || 0), _._pt = {
          _next: _._pt,
          p: p || 1 === y ? p : ",",
          s: l,
          c: d - l,
          m: c && c < 4 || "zIndex" === e ? Math.round : 0
        });
        _.c = v < n.length ? n.substring(v, n.length) : ""
      } else _.r = "display" === e && "none" === n ? rn : en;
      return pt.test(n) && (_.e = 0), this._pt = _, _
    },
    Sn = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    En = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r, n, i, o = e.t,
          s = o.style,
          a = e.u,
          u = o._gsap;
        if ("all" === a || !0 === a) s.cssText = "", n = 1;
        else
          for (i = (a = a.split(",")).length; --i > -1;) r = a[i], qr[r] && (n = 1, r = "transformOrigin" === r ? hn : cn), wn(o, r);
        n && (wn(o, cn), u && (u.svg && o.removeAttribute("transform"), In(o, 1), u.uncache = 1))
      }
    },
    An = {
      clearProps: function (t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
          var o = t._pt = new Pr(t._pt, e, r, 0, 0, En);
          return o.u = n, o.pr = -10, o.tween = i, t._props.push(r), 1
        }
      }
    },
    Cn = [1, 0, 0, 1, 0, 0],
    Pn = {},
    Dn = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    },
    Rn = function (t) {
      var e = dn(t, cn);
      return Dn(e) ? Cn : e.substr(7).match(ht).map(It)
    },
    zn = function (t, e) {
      var r, n, i, o, s = t._gsap || Rt(t),
        a = t.style,
        u = Rn(t);
      return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Cn : u : (u !== Cn || t.offsetParent || t === Br || s.svg || (i = a.display, a.display = "block", (r = t.parentNode) && t.offsetParent || (o = 1, n = t.nextSibling, Br.appendChild(t)), u = Rn(t), i ? a.display = i : wn(t, "display"), o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : Br.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    },
    Ln = function (t, e, r, n, i, o) {
      var s, a, u, l = t._gsap,
        c = i || zn(t, !0),
        h = l.xOrigin || 0,
        f = l.yOrigin || 0,
        d = l.xOffset || 0,
        p = l.yOffset || 0,
        g = c[0],
        m = c[1],
        _ = c[2],
        v = c[3],
        y = c[4],
        b = c[5],
        w = e.split(" "),
        x = parseFloat(w[0]) || 0,
        T = parseFloat(w[1]) || 0;
      r ? c !== Cn && (a = g * v - m * _) && (u = x * (-m / a) + T * (g / a) - (g * b - m * y) / a, x = x * (v / a) + T * (-_ / a) + (_ * b - v * y) / a, T = u) : (x = (s = yn(t)).x + (~w[0].indexOf("%") ? x / 100 * s.width : x), T = s.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * s.height : T)), n || !1 !== n && l.smooth ? (y = x - h, b = T - f, l.xOffset = d + (y * g + b * _) - y, l.yOffset = p + (y * m + b * v) - b) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = T, l.smooth = !!n, l.origin = e, l.originIsAbsolute = !!r, t.style[hn] = "0px 0px", o && (xn(o, l, "xOrigin", h, x), xn(o, l, "yOrigin", f, T), xn(o, l, "xOffset", d, l.xOffset), xn(o, l, "yOffset", p, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + T)
    },
    In = function (t, e) {
      var r = t._gsap || new ir(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n, i, o, s, a, u, l, c, h, f, d, p, g, m, _, v, y, b, w, x, T, k, M, O, S, E, A, C, P, D, R, z, L = t.style,
        I = r.scaleX < 0,
        Y = "px",
        B = "deg",
        F = dn(t, hn) || "0";
      return n = i = o = u = l = c = h = f = d = 0, s = a = 1, r.svg = !(!t.getCTM || !bn(t)), m = zn(t, r.svg), r.svg && (O = (!r.uncache || "0px 0px" === F) && !e && t.getAttribute("data-svg-origin"), Ln(t, O || F, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, g = r.yOrigin || 0, m !== Cn && (b = m[0], w = m[1], x = m[2], T = m[3], n = k = m[4], i = M = m[5], 6 === m.length ? (s = Math.sqrt(b * b + w * w), a = Math.sqrt(T * T + x * x), u = b || w ? Hr(w, b) * jr : 0, (h = x || T ? Hr(x, T) * jr + u : 0) && (a *= Math.abs(Math.cos(h * Ur))), r.svg && (n -= p - (p * b + g * x), i -= g - (p * w + g * T))) : (z = m[6], D = m[7], A = m[8], C = m[9], P = m[10], R = m[11], n = m[12], i = m[13], o = m[14], l = (_ = Hr(z, P)) * jr, _ && (O = k * (v = Math.cos(-_)) + A * (y = Math.sin(-_)), S = M * v + C * y, E = z * v + P * y, A = k * -y + A * v, C = M * -y + C * v, P = z * -y + P * v, R = D * -y + R * v, k = O, M = S, z = E), c = (_ = Hr(-x, P)) * jr, _ && (v = Math.cos(-_), R = T * (y = Math.sin(-_)) + R * v, b = O = b * v - A * y, w = S = w * v - C * y, x = E = x * v - P * y), u = (_ = Hr(w, b)) * jr, _ && (O = b * (v = Math.cos(_)) + w * (y = Math.sin(_)), S = k * v + M * y, w = w * v - b * y, M = M * v - k * y, b = O, k = S), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, c = 180 - c), s = It(Math.sqrt(b * b + w * w + x * x)), a = It(Math.sqrt(M * M + z * z)), _ = Hr(k, M), h = Math.abs(_) > 2e-4 ? _ * jr : 0, d = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Dn(dn(t, cn)), O && t.setAttribute("transform", O))), Math.abs(h) > 90 && Math.abs(h) < 270 && (I ? (s *= -1, h += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, h += h <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + Y, r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + Y, r.z = o + Y, r.scaleX = It(s), r.scaleY = It(a), r.rotation = It(u) + B, r.rotationX = It(l) + B, r.rotationY = It(c) + B, r.skewX = h + B, r.skewY = f + B, r.transformPerspective = d + Y, (r.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (L[hn] = Yn(F)), r.xOffset = r.yOffset = 0, r.force3D = j.force3D, r.renderTransform = r.svg ? jn : Nr ? qn : Fn, r.uncache = 0, r
    },
    Yn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1]
    },
    Bn = function (t, e, r) {
      var n = ye(e);
      return It(parseFloat(e) + parseFloat(kn(t, "x", r + "px", n))) + n
    },
    Fn = function (t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, qn(t, e)
    },
    Xn = "0deg",
    Wn = "0px",
    Nn = ") ",
    qn = function (t, e) {
      var r = e || this,
        n = r.xPercent,
        i = r.yPercent,
        o = r.x,
        s = r.y,
        a = r.z,
        u = r.rotation,
        l = r.rotationY,
        c = r.rotationX,
        h = r.skewX,
        f = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        g = r.transformPerspective,
        m = r.force3D,
        _ = r.target,
        v = r.zOrigin,
        y = "",
        b = "auto" === m && t && 1 !== t || !0 === m;
      if (v && (c !== Xn || l !== Xn)) {
        var w, x = parseFloat(l) * Ur,
          T = Math.sin(x),
          k = Math.cos(x);
        x = parseFloat(c) * Ur, w = Math.cos(x), o = Bn(_, o, T * w * -v), s = Bn(_, s, -Math.sin(x) * -v), a = Bn(_, a, k * w * -v + v)
      }
      g !== Wn && (y += "perspective(" + g + Nn), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (b || o !== Wn || s !== Wn || a !== Wn) && (y += a !== Wn || b ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + Nn), u !== Xn && (y += "rotate(" + u + Nn), l !== Xn && (y += "rotateY(" + l + Nn), c !== Xn && (y += "rotateX(" + c + Nn), h === Xn && f === Xn || (y += "skew(" + h + ", " + f + Nn), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Nn), _.style[cn] = y || "translate(0, 0)"
    },
    jn = function (t, e) {
      var r, n, i, o, s, a = e || this,
        u = a.xPercent,
        l = a.yPercent,
        c = a.x,
        h = a.y,
        f = a.rotation,
        d = a.skewX,
        p = a.skewY,
        g = a.scaleX,
        m = a.scaleY,
        _ = a.target,
        v = a.xOrigin,
        y = a.yOrigin,
        b = a.xOffset,
        w = a.yOffset,
        x = a.forceCSS,
        T = parseFloat(c),
        k = parseFloat(h);
      f = parseFloat(f), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), f += p), f || d ? (f *= Ur, d *= Ur, r = Math.cos(f) * g, n = Math.sin(f) * g, i = Math.sin(f - d) * -m, o = Math.cos(f - d) * m, d && (p *= Ur, s = Math.tan(d - p), i *= s = Math.sqrt(1 + s * s), o *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), n *= s)), r = It(r), n = It(n), i = It(i), o = It(o)) : (r = g, o = m, n = i = 0), (T && !~(c + "").indexOf("px") || k && !~(h + "").indexOf("px")) && (T = kn(_, "x", c, "px"), k = kn(_, "y", h, "px")), (v || y || b || w) && (T = It(T + v - (v * r + y * i) + b), k = It(k + y - (v * n + y * o) + w)), (u || l) && (s = _.getBBox(), T = It(T + u / 100 * s.width), k = It(k + l / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + o + "," + T + "," + k + ")", _.setAttribute("transform", s), x && (_.style[cn] = s)
    },
    Un = function (t, e, r, n, i) {
      var o, s, a = 360,
        u = tt(i),
        l = parseFloat(i) * (u && ~i.indexOf("rad") ? jr : 1) - n,
        c = n + l + "deg";
      return u && ("short" === (o = i.split("_")[1]) && (l %= a) !== l % 180 && (l += l < 0 ? a : -360), "cw" === o && l < 0 ? l = (l + 36e9) % a - ~~(l / a) * a : "ccw" === o && l > 0 && (l = (l - 36e9) % a - ~~(l / a) * a)), t._pt = s = new Pr(t._pt, e, r, n, l, $r), s.e = c, s.u = "deg", t._props.push(r), s
    },
    Hn = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t
    },
    Vn = function (t, e, r) {
      var n, i, o, s, a, u, l, c = Hn({}, r._gsap),
        h = r.style;
      for (i in c.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), h[cn] = e, n = In(r, 1), wn(r, cn), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[cn], h[cn] = e, n = In(r, 1), h[cn] = o), qr)(o = c[i]) !== (s = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = ye(o) !== (l = ye(s)) ? kn(r, i, o, l) : parseFloat(o), u = parseFloat(s), t._pt = new Pr(t._pt, n, i, a, u - a, Zr), t._pt.u = l || 0, t._props.push(i));
      Hn(n, c)
    };
  Lt("padding,margin,Width,Radius", (function (t, e) {
    var r = "Top",
      n = "Right",
      i = "Bottom",
      o = "Left",
      s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map((function (r) {
        return e < 2 ? t + r : "border" + r + t
      }));
    An[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
      var o, a;
      if (arguments.length < 4) return o = s.map((function (e) {
        return Mn(t, e, r)
      })), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
      o = (n + "").split(" "), a = {}, s.forEach((function (t, e) {
        return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
      })), t.init(e, a, i)
    }
  }));
  var Gn, Kn, Qn, Zn = {
    name: "css",
    register: mn,
    targetTest: function (t) {
      return t.style && t.nodeType
    },
    init: function (t, e, r, n, i) {
      var o, s, u, l, c, h, f, d, p, g, m, _, v, y, b, w, x, T, k, M = this._props,
        O = t.style,
        S = r.vars.startAt;
      for (f in Fr || mn(), e)
        if ("autoRound" !== f && (s = e[f], !St[f] || !hr(f, e, r, n, t, i)))
          if (c = void 0 === s ? "undefined" : a(s), h = An[f], "function" === c && (c = void 0 === (s = s.call(r, n, t, i)) ? "undefined" : a(s)), "string" === c && ~s.indexOf("random(") && (s = Ce(s)), h) h(this, t, f, s, r) && (b = 1);
          else if ("--" === f.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(f) + "").trim(), s += "", Ne.lastIndex = 0, Ne.test(o) || (d = ye(o), p = ye(s)), p ? d !== p && (o = kn(t, f, o, p) + p) : d && (s += d), this.add(O, "setProperty", o, s, n, i, 0, 0, f), M.push(f);
      else if ("undefined" !== c) {
        if (S && f in S ? (o = "function" == typeof S[f] ? S[f].call(r, n, t, i) : S[f], tt(o) && ~o.indexOf("random(") && (o = Ce(o)), ye(o + "") || (o += j.units[f] || ye(Mn(t, f)) || ""), "=" === (o + "").charAt(1) && (o = Mn(t, f))) : o = Mn(t, f), l = parseFloat(o), (g = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), u = parseFloat(s), f in Qr && ("autoAlpha" === f && (1 === l && "hidden" === Mn(t, "visibility") && u && (l = 0), xn(this, O, "visibility", l ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== f && "transform" !== f && ~(f = Qr[f]).indexOf(",") && (f = f.split(",")[0])), m = f in qr)
          if (_ || ((v = t._gsap).renderTransform && !e.parseTransform || In(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (_ = this._pt = new Pr(this._pt, O, cn, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === f) this._pt = new Pr(this._pt, v, "scaleY", v.scaleY, (g ? Bt(v.scaleY, g + u) : u) - v.scaleY || 0), M.push("scaleY", f), f += "X";
          else {
            if ("transformOrigin" === f) {
              x = void 0, T = void 0, k = void 0, x = (w = s).split(" "), T = x[0], k = x[1] || "50%", "top" !== T && "bottom" !== T && "left" !== k && "right" !== k || (w = T, T = k, k = w), x[0] = Sn[T] || T, x[1] = Sn[k] || k, s = x.join(" "), v.svg ? Ln(t, s, 0, y, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && xn(this, v, "zOrigin", v.zOrigin, p), xn(this, O, f, Yn(o), Yn(s)));
              continue
            }
            if ("svgOrigin" === f) {
              Ln(t, s, 1, y, 0, this);
              continue
            }
            if (f in Pn) {
              Un(this, v, f, l, g ? Bt(l, g + s) : s);
              continue
            }
            if ("smoothOrigin" === f) {
              xn(this, v, "smooth", v.smooth, s);
              continue
            }
            if ("force3D" === f) {
              v[f] = s;
              continue
            }
            if ("transform" === f) {
              Vn(this, s, t);
              continue
            }
          }
        else f in O || (f = gn(f) || f);
        if (m || (u || 0 === u) && (l || 0 === l) && !Kr.test(s) && f in O) u || (u = 0), (d = (o + "").substr((l + "").length)) !== (p = ye(s) || (f in j.units ? j.units[f] : d)) && (l = kn(t, f, o, p)), this._pt = new Pr(this._pt, m ? v : O, f, l, (g ? Bt(l, g + u) : u) - l, m || "px" !== p && "zIndex" !== f || !1 === e.autoRound ? Zr : tn), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = o, this._pt.r = Jr);
        else if (f in O) On.call(this, t, f, o, g ? g + s : s);
        else {
          if (!(f in t)) {
            bt(f, s);
            continue
          }
          this.add(t, f, o || t[f], g ? g + s : s, n, i)
        }
        M.push(f)
      }
      b && Cr(this)
    },
    get: Mn,
    aliases: Qr,
    getSetter: function (t, e, r) {
      var n = Qr[e];
      return n && n.indexOf(",") < 0 && (e = n), e in qr && e !== hn && (t._gsap.x || Mn(t, "x")) ? r && Wr === r ? "scale" === e ? an : sn : (Wr = r || {}, "scale" === e ? un : ln) : t.style && !nt(t.style[e]) ? nn : ~e.indexOf("-") ? on : xr(t, e)
    },
    core: {
      _removeProperty: wn,
      _getMatrix: zn
    }
  };
  Lr.utils.checkPrefix = gn, Qn = Lt((Gn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Kn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
    qr[t] = 1
  })), Lt(Kn, (function (t) {
    j.units[t] = "deg", Pn[t] = 1
  })), Qr[Qn[13]] = Gn + "," + Kn, Lt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
    var e = t.split(":");
    Qr[e[1]] = Qn[e[0]]
  })), Lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
    j.units[t] = "px"
  })), Lr.registerPlugin(Zn);
  var $n = Lr.registerPlugin(Zn) || Lr;
  $n.core.Tween;

  function Jn(t, e) {
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
  var ti, ei, ri, ni, ii, oi, si, ai, ui, li, ci, hi, fi = function () {
      return ti || "undefined" != typeof window && (ti = window.gsap) && ti.registerPlugin && ti
    },
    di = 1,
    pi = [],
    gi = [],
    mi = [],
    _i = Date.now,
    vi = function (t, e) {
      return e
    },
    yi = function (t, e) {
      return ~mi.indexOf(t) && mi[mi.indexOf(t) + 1][e]
    },
    bi = function (t) {
      return !!~li.indexOf(t)
    },
    wi = function (t, e, r, n, i) {
      return t.addEventListener(e, r, {
        passive: !n,
        capture: !!i
      })
    },
    xi = function (t, e, r, n) {
      return t.removeEventListener(e, r, !!n)
    },
    Ti = "scrollLeft",
    ki = "scrollTop",
    Mi = function () {
      return ci && ci.isPressed || gi.cache++
    },
    Oi = function (t, e) {
      var r = function r(n) {
        if (n || 0 === n) {
          di && (ri.history.scrollRestoration = "manual");
          var i = ci && ci.isPressed;
          n = r.v = Math.round(n) || (ci && ci.iOS ? 1 : 0), t(n), r.cacheID = gi.cache, i && vi("ss", n)
        } else(e || gi.cache !== r.cacheID || vi("ref")) && (r.cacheID = gi.cache, r.v = t());
        return r.v + r.offset
      };
      return r.offset = 0, t && r
    },
    Si = {
      s: Ti,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Oi((function (t) {
        return arguments.length ? ri.scrollTo(t, Ei.sc()) : ri.pageXOffset || ni.scrollLeft || ii.scrollLeft || oi.scrollLeft || 0
      }))
    },
    Ei = {
      s: ki,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Si,
      sc: Oi((function (t) {
        return arguments.length ? ri.scrollTo(Si.sc(), t) : ri.pageYOffset || ni.scrollTop || ii.scrollTop || oi.scrollTop || 0
      }))
    },
    Ai = function (t) {
      return ti.utils.toArray(t)[0] || ("string" == typeof t && !1 !== ti.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    },
    Ci = function (t, e) {
      var r = e.s,
        n = e.sc,
        i = gi.indexOf(t),
        o = n === Ei.sc ? 1 : 2;
      return !~i && (i = gi.push(t) - 1), gi[i + o] || (gi[i + o] = Oi(yi(t, r), !0) || (bi(t) ? n : Oi((function (e) {
        return arguments.length ? t[r] = e : t[r]
      }))))
    },
    Pi = function (t, e, r) {
      var n = t,
        i = t,
        o = _i(),
        s = o,
        a = e || 50,
        u = Math.max(500, 3 * a),
        l = function (t, e) {
          var u = _i();
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
            c = _i();
          return (t || 0 === t) && t !== n && l(t), o === s || c - s > u ? 0 : (n + (r ? a : -a)) / ((r ? c : o) - e) * 1e3
        }
      }
    },
    Di = function (t, e) {
      return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
    },
    Ri = function (t) {
      var e = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(r) ? e : r
    },
    zi = function () {
      var t, e, r, n;
      (ui = ti.core.globals().ScrollTrigger) && ui.core && (t = ui.core, e = t.bridge || {}, r = t._scrollers, n = t._proxies, r.push.apply(r, gi), n.push.apply(n, mi), gi = r, mi = n, vi = function (t, r) {
        return e[t](r)
      })
    },
    Li = function (t) {
      return (ti = t || fi()) && "undefined" != typeof document && document.new && (ri = window, ni = document, ii = ni.documentElement, oi = ni.new, li = [ri, ni, ii, oi], ti.utils.clamp, ai = "onpointerenter" in oi ? "pointer" : "mouse", si = Ii.isTouch = ri.matchMedia && ri.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ri || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, hi = Ii.eventTypes = ("ontouchstart" in ii ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ii ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function () {
        return di = 0
      }), 500), zi(), ei = 1), ei
    };
  Si.op = Ei, gi.cache = 0;
  var Ii = function () {
    function t(t) {
      this.init(t)
    }
    var e, r, n;
    return t.prototype.init = function (t) {
      ei || Li(ti) || console.warn("Please gsap.registerPlugin(Observer)"), ui || zi();
      var e = t.tolerance,
        r = t.dragMinimum,
        n = t.type,
        i = t.target,
        o = t.lineHeight,
        s = t.debounce,
        a = t.preventDefault,
        u = t.onStop,
        l = t.onStopDelay,
        c = t.ignore,
        h = t.wheelSpeed,
        f = t.event,
        d = t.onDragStart,
        p = t.onDragEnd,
        g = t.onDrag,
        m = t.onPress,
        _ = t.onRelease,
        v = t.onRight,
        y = t.onLeft,
        b = t.onUp,
        w = t.onDown,
        x = t.onChangeX,
        T = t.onChangeY,
        k = t.onChange,
        M = t.onToggleX,
        O = t.onToggleY,
        S = t.onHover,
        E = t.onHoverEnd,
        A = t.onMove,
        C = t.ignoreCheck,
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
      this.target = i = Ai(i) || ii, this.vars = t, c && (c = ti.utils.toArray(c)), e = e || 0, r = r || 0, h = h || 1, B = B || 1, n = n || "wheel,touch,pointer", s = !1 !== s, o || (o = parseFloat(ri.getComputedStyle(oi).lineHeight) || 22);
      var q, j, U, H, V, G, K, Q = this,
        Z = 0,
        $ = 0,
        J = Ci(i, Si),
        tt = Ci(i, Ei),
        et = J(),
        rt = tt(),
        nt = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === hi[0],
        it = bi(i),
        ot = i.ownerDocument || ni,
        st = [0, 0, 0],
        at = [0, 0, 0],
        ut = 0,
        lt = function () {
          return ut = _i()
        },
        ct = function (t, e) {
          return (Q.event = t) && c && ~c.indexOf(t.target) || e && nt && "touch" !== t.pointerType || C && C(t, e)
        },
        ht = function () {
          var t = Q.deltaX = Ri(st),
            r = Q.deltaY = Ri(at),
            n = Math.abs(t) >= e,
            i = Math.abs(r) >= e;
          k && (n || i) && k(Q, t, r, st, at), n && (v && Q.deltaX > 0 && v(Q), y && Q.deltaX < 0 && y(Q), x && x(Q), M && Q.deltaX < 0 != Z < 0 && M(Q), Z = Q.deltaX, st[0] = st[1] = st[2] = 0), i && (w && Q.deltaY > 0 && w(Q), b && Q.deltaY < 0 && b(Q), T && T(Q), O && Q.deltaY < 0 != $ < 0 && O(Q), $ = Q.deltaY, at[0] = at[1] = at[2] = 0), (H || U) && (A && A(Q), N && G && N(Q), U && (g(Q), U = !1), H = G = !1), V && (z(Q), V = !1), q = 0
        },
        ft = function (t, e, r) {
          st[r] += t, at[r] += e, Q._vx.update(t), Q._vy.update(e), s ? q || (q = requestAnimationFrame(ht)) : ht()
        },
        dt = function (t, e) {
          "y" !== K && (st[2] += t, Q._vx.update(t, !0)), "x" !== K && (at[2] += e, Q._vy.update(e, !0)), W && !K && (Q.axis = K = Math.abs(t) > Math.abs(e) ? "x" : "y", G = !0), s ? q || (q = requestAnimationFrame(ht)) : ht()
        },
        pt = function (t) {
          if (!ct(t, 1)) {
            var e = (t = Di(t, a)).clientX,
              n = t.clientY,
              i = e - Q.x,
              o = n - Q.y,
              s = Q.isDragging;
            Q.x = e, Q.y = n, (s || Math.abs(Q.startX - e) >= r || Math.abs(Q.startY - n) >= r) && (g && (U = !0), s || (Q.isDragging = !0), dt(i, o), s || d && d(Q))
          }
        },
        gt = Q.onPress = function (t) {
          ct(t, 1) || (Q.axis = K = null, j.pause(), Q.isPressed = !0, t = Di(t), Z = $ = 0, Q.startX = Q.x = t.clientX, Q.startY = Q.y = t.clientY, Q._vx.reset(), Q._vy.reset(), wi(P ? i : ot, hi[1], pt, a, !0), Q.deltaX = Q.deltaY = 0, m && m(Q))
        },
        mt = function (t) {
          if (!ct(t, 1)) {
            xi(P ? i : ot, hi[1], pt, !0);
            var e = Q.isDragging && (Math.abs(Q.x - Q.startX) > 3 || Math.abs(Q.y - Q.startY) > 3),
              r = Di(t);
            e || (Q._vx.reset(), Q._vy.reset(), a && X && ti.delayedCall(.08, (function () {
              if (_i() - ut > 300 && !t.defaultPrevented)
                if (t.target.click) t.target.click();
                else if (ot.createEvent) {
                var e = ot.createEvent("MouseEvents");
                e.initMouseEvent("click", !0, !0, ri, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
              }
            }))), Q.isDragging = Q.isGesturing = Q.isPressed = !1, u && !P && j.restart(!0), p && e && p(Q), _ && _(Q, e)
          }
        },
        _t = function (t) {
          return t.touches && t.touches.length > 1 && (Q.isGesturing = !0) && D(t, Q.isDragging)
        },
        vt = function () {
          return Q.isGesturing = !1, R(Q)
        },
        yt = function (t) {
          if (!ct(t)) {
            var e = J(),
              r = tt();
            ft((e - et) * B, (r - rt) * B, 1), et = e, rt = r, u && j.restart(!0)
          }
        },
        bt = function (t) {
          if (!ct(t)) {
            t = Di(t, a), z && (V = !0);
            var e = (1 === t.deltaMode ? o : 2 === t.deltaMode ? ri.innerHeight : 1) * h;
            ft(t.deltaX * e, t.deltaY * e, 0), u && !P && j.restart(!0)
          }
        },
        wt = function (t) {
          if (!ct(t)) {
            var e = t.clientX,
              r = t.clientY,
              n = e - Q.x,
              i = r - Q.y;
            Q.x = e, Q.y = r, H = !0, (n || i) && dt(n, i)
          }
        },
        xt = function (t) {
          Q.event = t, S(Q)
        },
        Tt = function (t) {
          Q.event = t, E(Q)
        },
        kt = function (t) {
          return ct(t) || Di(t, a) && Y(Q)
        };
      j = Q._dc = ti.delayedCall(l || .25, (function () {
        Q._vx.reset(), Q._vy.reset(), j.pause(), u && u(Q)
      })).pause(), Q.deltaX = Q.deltaY = 0, Q._vx = Pi(0, 50, !0), Q._vy = Pi(0, 50, !0), Q.scrollX = J, Q.scrollY = tt, Q.isDragging = Q.isGesturing = Q.isPressed = !1, Q.enable = function (t) {
        return Q.isEnabled || (wi(it ? ot : i, "scroll", Mi), n.indexOf("scroll") >= 0 && wi(it ? ot : i, "scroll", yt, a, F), n.indexOf("wheel") >= 0 && wi(i, "wheel", bt, a, F), (n.indexOf("touch") >= 0 && si || n.indexOf("pointer") >= 0) && (wi(i, hi[0], gt, a, F), wi(ot, hi[2], mt), wi(ot, hi[3], mt), X && wi(i, "click", lt, !1, !0), Y && wi(i, "click", kt), D && wi(ot, "gesturestart", _t), R && wi(ot, "gestureend", vt), S && wi(i, ai + "enter", xt), E && wi(i, ai + "leave", Tt), A && wi(i, ai + "move", wt)), Q.isEnabled = !0, t && t.type && gt(t), L && L(Q)), Q
      }, Q.disable = function () {
        Q.isEnabled && (pi.filter((function (t) {
          return t !== Q && bi(t.target)
        })).length || xi(it ? ot : i, "scroll", Mi), Q.isPressed && (Q._vx.reset(), Q._vy.reset(), xi(P ? i : ot, hi[1], pt, !0)), xi(it ? ot : i, "scroll", yt, F), xi(i, "wheel", bt, F), xi(i, hi[0], gt, F), xi(ot, hi[2], mt), xi(ot, hi[3], mt), xi(i, "click", lt, !0), xi(i, "click", kt), xi(ot, "gesturestart", _t), xi(ot, "gestureend", vt), xi(i, ai + "enter", xt), xi(i, ai + "leave", Tt), xi(i, ai + "move", wt), Q.isEnabled = Q.isPressed = Q.isDragging = !1, I && I(Q))
      }, Q.kill = function () {
        Q.disable();
        var t = pi.indexOf(Q);
        t >= 0 && pi.splice(t, 1), ci === Q && (ci = 0)
      }, pi.push(Q), P && bi(i) && (ci = Q), Q.enable(f)
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
    }]) && Jn(e.prototype, r), n && Jn(e, n), t
  }();
  Ii.version = "3.10.4", Ii.create = function (t) {
    return new Ii(t)
  }, Ii.register = Li, Ii.getAll = function () {
    return pi.slice()
  }, Ii.getById = function (t) {
    return pi.filter((function (e) {
      return e.vars.id === t
    }))[0]
  }, fi() && ti.registerPlugin(Ii);
  var Yi, Bi, Fi, Xi, Wi, Ni, qi, ji, Ui, Hi, Vi, Gi, Ki, Qi, Zi, $i, Ji, to, eo, ro, no, io, oo, so, ao, uo, lo, co, ho, fo, po, go, mo, _o = 1,
    vo = Date.now,
    yo = vo(),
    bo = 0,
    wo = 0,
    xo = function () {
      return Qi = 1
    },
    To = function () {
      return Qi = 0
    },
    ko = function (t) {
      return t
    },
    Mo = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0
    },
    Oo = function () {
      return "undefined" != typeof window
    },
    So = function () {
      return Yi || Oo() && (Yi = window.gsap) && Yi.registerPlugin && Yi
    },
    Eo = function (t) {
      return !!~qi.indexOf(t)
    },
    Ao = function (t) {
      return yi(t, "getBoundingClientRect") || (Eo(t) ? function () {
        return Fs.width = Fi.innerWidth, Fs.height = Fi.innerHeight, Fs
      } : function () {
        return $o(t)
      })
    },
    Co = function (t, e) {
      var r = e.s,
        n = e.d2,
        i = e.d,
        o = e.a;
      return (o = yi(t, r = "scroll" + n)) ? o() - Ao(t)()[i] : Eo(t) ? (Wi[r] || Ni[r]) - (Fi["inner" + n] || Wi["client" + n] || Ni["client" + n]) : t[r] - t["offset" + n]
    },
    Po = function (t, e) {
      for (var r = 0; r < eo.length; r += 3)(!e || ~e.indexOf(eo[r + 1])) && t(eo[r], eo[r + 1], eo[r + 2])
    },
    Do = function (t) {
      return "string" == typeof t
    },
    Ro = function (t) {
      return "function" == typeof t
    },
    zo = function (t) {
      return "number" == typeof t
    },
    Lo = function (t) {
      return "object" == typeof t
    },
    Io = function (t) {
      return Ro(t) && t()
    },
    Yo = function (t, e) {
      return function () {
        var r = Io(t),
          n = Io(e);
        return function () {
          Io(r), Io(n)
        }
      }
    },
    Bo = function (t, e, r) {
      return t && t.progress(e ? 0 : 1) && r && t.pause()
    },
    Fo = function (t, e) {
      if (t.enabled) {
        var r = e(t);
        r && r.totalTime && (t.callbackAnimation = r)
      }
    },
    Xo = Math.abs,
    Wo = "left",
    No = "right",
    qo = "bottom",
    jo = "width",
    Uo = "height",
    Ho = "padding",
    Vo = "margin",
    Go = "Width",
    Ko = "px",
    Qo = function (t) {
      return Fi.getComputedStyle(t)
    },
    Zo = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t
    },
    $o = function (t, e) {
      var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== Qo(t)[Zi] && Yi.to(t, {
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
    Jo = function (t, e) {
      var r = e.d2;
      return t["offset" + r] || t["client" + r] || 0
    },
    ts = function (t) {
      var e, r = [],
        n = t.labels,
        i = t.duration();
      for (e in n) r.push(n[e] / i);
      return r
    },
    es = function (t) {
      var e = Yi.utils.snap(t),
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
    rs = function (t, e, r, n) {
      return r.split(",").forEach((function (r) {
        return t(e, r, n)
      }))
    },
    ns = function (t, e, r, n, i) {
      return t.addEventListener(e, r, {
        passive: !n,
        capture: !!i
      })
    },
    is = function (t, e, r, n) {
      return t.removeEventListener(e, r, !!n)
    },
    os = function (t, e, r) {
      return r && r.wheelHandler && t(e, "wheel", r)
    },
    ss = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
    as = {
      toggleActions: "play",
      anticipatePin: 0
    },
    us = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
    ls = function (t, e) {
      if (Do(t)) {
        var r = t.indexOf("="),
          n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in us ? us[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
      }
      return t
    },
    cs = function (t, e, r, n, i, o, s, a) {
      var u = i.startColor,
        l = i.endColor,
        c = i.fontSize,
        h = i.indent,
        f = i.fontWeight,
        d = Xi.createElement("div"),
        p = Eo(r) || "fixed" === yi(r, "pinType"),
        g = -1 !== t.indexOf("scroller"),
        m = p ? Ni : r,
        _ = -1 !== t.indexOf("start"),
        v = _ ? u : l,
        y = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return y += "position:" + ((g || a) && p ? "fixed;" : "absolute;"), (g || a || !p) && (y += (n === Ei ? No : qo) + ":" + (o + parseFloat(h)) + "px;"), s && (y += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), d._isStart = _, d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), d.style.cssText = y, d.innerText = e || 0 === e ? t + "-" + e : t, m.children[0] ? m.insertBefore(d, m.children[0]) : m.appendChild(d), d._offset = d["offset" + n.op.d2], hs(d, 0, n, _), d
    },
    hs = function (t, e, r, n) {
      var i = {
          display: "block"
        },
        o = r[n ? "os2" : "p2"],
        s = r[n ? "p2" : "os2"];
      t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + Go] = 1, i["border" + s + Go] = 0, i[r.p] = e + "px", Yi.set(t, i)
    },
    fs = [],
    ds = {},
    ps = function () {
      return vo() - bo > 34 && Ds()
    },
    gs = function () {
      (!oo || !oo.isPressed || oo.startX > Ni.clientWidth) && (gi.cache++, ho || (ho = requestAnimationFrame(Ds)), bo || Ts("scrollStart"), bo = vo())
    },
    ms = function () {
      uo = Fi.innerWidth, ao = Fi.innerHeight
    },
    _s = function () {
      gi.cache++, !Ki && !io && !Xi.fullscreenElement && !Xi.webkitFullscreenElement && (!so || uo !== Fi.innerWidth || Math.abs(Fi.innerHeight - ao) > .25 * Fi.innerHeight) && ji.restart(!0)
    },
    vs = {},
    ys = [],
    bs = [],
    ws = function (t) {
      var e, r = Yi.ticker.frame,
        n = [],
        i = 0;
      if (po !== r || _o) {
        for (Os(); i < bs.length; i += 4)(e = Fi.matchMedia(bs[i]).matches) !== bs[i + 3] && (bs[i + 3] = e, e ? n.push(i) : Os(1, bs[i]) || Ro(bs[i + 2]) && bs[i + 2]());
        for (Ms(), i = 0; i < n.length; i++) e = n[i], fo = bs[e], bs[e + 2] = bs[e + 1](t);
        fo = 0, Bi && As(0, 1), po = r, Ts("matchMedia")
      }
    },
    xs = function t() {
      return is(js, "scrollEnd", t) || As(!0)
    },
    Ts = function (t) {
      return vs[t] && vs[t].map((function (t) {
        return t()
      })) || ys
    },
    ks = [],
    Ms = function (t) {
      for (var e = 0; e < ks.length; e += 5) t && ks[e + 4] !== t || (ks[e].style.cssText = ks[e + 1], ks[e].getBBox && ks[e].setAttribute("transform", ks[e + 2] || ""), ks[e + 3].uncache = 1)
    },
    Os = function (t, e) {
      var r;
      for ($i = 0; $i < fs.length; $i++) r = fs[$i], e && r.media !== e || (t ? r.kill(1) : r.revert());
      e && Ms(e), e || Ts("revert")
    },
    Ss = function () {
      return gi.cache++ && gi.forEach((function (t) {
        return "function" == typeof t && (t.rec = 0)
      }))
    },
    Es = 0,
    As = function (t, e) {
      if (!bo || t) {
        go = !0;
        var r = Ts("refreshInit");
        ro && js.sort(), e || Os(), fs.slice(0).forEach((function (t) {
          return t.refresh()
        })), fs.forEach((function (t) {
          return "max" === t.vars.end && t.setPositions(t.start, Co(t.scroller, t._dir))
        })), r.forEach((function (t) {
          return t && t.render && t.render(-1)
        })), Ss(), ji.pause(), Es++, go = !1, Ts("refresh")
      } else ns(js, "scrollEnd", xs)
    },
    Cs = 0,
    Ps = 1,
    Ds = function () {
      if (!go) {
        js.isUpdating = !0, mo && mo.update(0);
        var t = fs.length,
          e = vo(),
          r = e - yo >= 50,
          n = t && fs[0].scroll();
        if (Ps = Cs > n ? -1 : 1, Cs = n, r && (bo && !Qi && e - bo > 200 && (bo = 0, Ts("scrollEnd")), Vi = yo, yo = e), Ps < 0) {
          for ($i = t; $i-- > 0;) fs[$i] && fs[$i].update(0, r);
          Ps = 1
        } else
          for ($i = 0; $i < t; $i++) fs[$i] && fs[$i].update(0, r);
        js.isUpdating = !1
      }
      ho = 0
    },
    Rs = [Wo, "top", qo, No, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    zs = Rs.concat([jo, Uo, "boxSizing", "maxWidth", "maxHeight", "position", Vo, Ho, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
    Ls = function (t, e, r, n) {
      if (t.parentNode !== e) {
        for (var i, o = Rs.length, s = e.style, a = t.style; o--;) s[i = Rs[o]] = r[i];
        s.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (s.display = "inline-block"), a.bottom = a.right = s.flexBasis = "auto", s.overflow = "visible", s.boxSizing = "border-box", s.width = Jo(t, Si) + Ko, s.height = Jo(t, Ei) + Ko, s.padding = a.margin = a.top = a.left = "0", Ys(n), a.width = a.maxWidth = r.width, a.height = a.maxHeight = r.height, a.padding = r.padding, t.parentNode.insertBefore(e, t), e.appendChild(t)
      }
    },
    Is = /([A-Z])/g,
    Ys = function (t) {
      if (t) {
        var e, r, n = t.t.style,
          i = t.length,
          o = 0;
        for ((t.t._gsap || Yi.core.getCache(t.t)).uncache = 1; o < i; o += 2) r = t[o + 1], e = t[o], r ? n[e] = r : n[e] && n.removeProperty(e.replace(Is, "-$1").toLowerCase())
      }
    },
    Bs = function (t) {
      for (var e = zs.length, r = t.style, n = [], i = 0; i < e; i++) n.push(zs[i], r[zs[i]]);
      return n.t = t, n
    },
    Fs = {
      left: 0,
      top: 0
    },
    Xs = function (t, e, r, n, i, o, s, a, u, l, c, h, f) {
      Ro(t) && (t = t(a)), Do(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? ls("0" + t.substr(3), r) : 0));
      var d, p, g, m = f ? f.time() : 0;
      if (f && f.seek(0), zo(t)) s && hs(s, r, n, !0);
      else {
        Ro(e) && (e = e(a));
        var _, v, y, b, w = t.split(" ");
        g = Ai(e) || Ni, (_ = $o(g) || {}) && (_.left || _.top) || "none" !== Qo(g).display || (b = g.style.display, g.style.display = "block", _ = $o(g), b ? g.style.display = b : g.style.removeProperty("display")), v = ls(w[0], _[n.d]), y = ls(w[1] || "0", r), t = _[n.p] - u[n.p] - l + v + i - y, s && hs(s, y, n, r - y < 20 || s._isStart && y > 20), r -= r - y
      }
      if (o) {
        var x = t + r,
          T = o._isStart;
        d = "scroll" + n.d2, hs(o, x, n, T && x > 20 || !T && (c ? Math.max(Ni[d], Wi[d]) : o.parentNode[d]) <= x + 1), c && (u = $o(s), c && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + Ko))
      }
      return f && g && (d = $o(g), f.seek(h), p = $o(g), f._caScrollDist = d[n.p] - p[n.p], t = t / f._caScrollDist * h), f && f.seek(m), f ? t : Math.round(t)
    },
    Ws = /(webkit|moz|length|cssText|inset)/i,
    Ns = function (t, e, r, n) {
      if (t.parentNode !== e) {
        var i, o, s = t.style;
        if (e === Ni) {
          for (i in t._stOrig = s.cssText, o = Qo(t)) + i || Ws.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
          s.top = r, s.left = n
        } else s.cssText = t._stOrig;
        Yi.core.getCache(t).uncache = 1, e.appendChild(t)
      }
    },
    qs = function (t, e) {
      var r, n, i = Ci(t, e),
        o = "_scroll" + e.p2,
        s = function e(s, a, u, l, c) {
          var h = e.tween,
            f = a.onComplete,
            d = {};
          return u = u || i(), c = l && c || 0, l = l || s - u, h && h.kill(), r = Math.round(u), a[o] = s, a.modifiers = d, d[o] = function (t) {
            return (t = Mo(i())) !== r && t !== n && Math.abs(t - r) > 2 && Math.abs(t - n) > 2 ? (h.kill(), e.tween = 0) : t = u + l * h.ratio + c * h.ratio * h.ratio, n = r, r = Mo(t)
          }, a.onComplete = function () {
            e.tween = 0, f && f.call(h)
          }, h = e.tween = Yi.to(t, a)
        };
      return t[o] = i, i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0)
      }, ns(t, "wheel", i.wheelHandler), s
    },
    js = function () {
      function t(e, r) {
        Bi || t.register(Yi) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, r)
      }
      return t.prototype.init = function (e, r) {
        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), wo) {
          var n, i, o, s, a, u, l, c, h, f, d, p, g, m, _, v, y, b, w, x, T, k, M, O, S, E, A, C, P, D, R, z, L, I, Y, B, F, X, W, N, q, j = e = Zo(Do(e) || zo(e) || e.nodeType ? {
              trigger: e
            } : e, as),
            U = j.onUpdate,
            H = j.toggleClass,
            V = j.id,
            G = j.onToggle,
            K = j.onRefresh,
            Q = j.scrub,
            Z = j.trigger,
            $ = j.pin,
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
            ct = j.preventOverlaps,
            ht = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Si : Ei,
            ft = !Q && 0 !== Q,
            dt = Ai(e.scroller || Fi),
            pt = Yi.core.getCache(dt),
            gt = Eo(dt),
            mt = "fixed" === ("pinType" in e ? e.pinType : yi(dt, "pinType") || gt && "fixed"),
            _t = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            vt = ft && e.toggleActions.split(" "),
            yt = "markers" in e ? e.markers : as.markers,
            bt = gt ? 0 : parseFloat(Qo(dt)["border" + ht.p2 + Go]) || 0,
            wt = this,
            xt = e.onRefreshInit && function () {
              return e.onRefreshInit(wt)
            },
            Tt = function (t, e, r) {
              var n = r.d,
                i = r.d2,
                o = r.a;
              return (o = yi(t, "getBoundingClientRect")) ? function () {
                return o()[n]
              } : function () {
                return (e ? Fi["inner" + i] : t["client" + i]) || 0
              }
            }(dt, gt, ht),
            kt = function (t, e) {
              return !e || ~mi.indexOf(t) ? Ao(t) : function () {
                return Fs
              }
            }(dt, gt),
            Mt = 0,
            Ot = 0,
            St = Ci(dt, ht);
          if (wt.media = fo, wt._dir = ht, et *= 45, wt.scroller = dt, wt.scroll = ut ? ut.time.bind(ut) : St, s = St(), wt.vars = e, r = r || e.animation, "refreshPriority" in e && (ro = 1, -9999 === e.refreshPriority && (mo = wt)), pt.tweenScroll = pt.tweenScroll || {
              top: qs(dt, Ei),
              left: qs(dt, Si)
            }, wt.tweenTo = n = pt.tweenScroll[ht.p], wt.scrubDuration = function (t) {
              (R = zo(t) && t) ? D ? D.duration(t) : D = Yi.to(r, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: R,
                paused: !0,
                onComplete: function () {
                  return rt && rt(wt)
                }
              }): (D && D.progress(1).kill(), D = 0)
            }, r && (r.vars.lazy = !1, r._initted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.render(0, !0, !0), wt.animation = r.pause(), r.scrollTrigger = wt, wt.scrubDuration(Q), C = 0, V || (V = r.vars.id)), fs.push(wt), ot && (Lo(ot) && !ot.push || (ot = {
              snapTo: ot
            }), "scrollBehavior" in Ni.style && Yi.set(gt ? [Ni, Wi] : dt, {
              scrollBehavior: "auto"
            }), o = Ro(ot.snapTo) ? ot.snapTo : "labels" === ot.snapTo ? function (t) {
              return function (e) {
                return Yi.utils.snap(ts(t), e)
              }
            }(r) : "labelsDirectional" === ot.snapTo ? (W = r, function (t, e) {
              return es(ts(W))(t, e.direction)
            }) : !1 !== ot.directional ? function (t, e) {
              return es(ot.snapTo)(t, vo() - Ot < 500 ? 0 : e.direction)
            } : Yi.utils.snap(ot.snapTo), z = ot.duration || {
              min: .1,
              max: 2
            }, z = Lo(z) ? Hi(z.min, z.max) : Hi(z, z), L = Yi.delayedCall(ot.delay || R / 2 || .1, (function () {
              var t = St(),
                e = vo() - Ot < 500,
                i = n.tween;
              if (!(e || Math.abs(wt.getVelocity()) < 10) || i || Qi || Mt === t) wt.isActive && Mt !== t && L.restart(!0);
              else {
                var s = (t - u) / g,
                  a = r && !ft ? r.totalProgress() : s,
                  c = e ? 0 : (a - P) / (vo() - Vi) * 1e3 || 0,
                  h = Yi.utils.clamp(-s, 1 - s, Xo(c / 2) * c / .185),
                  f = s + (!1 === ot.inertia ? 0 : h),
                  d = Hi(0, 1, o(f, wt)),
                  p = Math.round(u + d * g),
                  m = ot,
                  _ = m.onStart,
                  v = m.onInterrupt,
                  y = m.onComplete;
                if (t <= l && t >= u && p !== t) {
                  if (i && !i._initted && i.data <= Xo(p - t)) return;
                  !1 === ot.inertia && (h = d - s), n(p, {
                    duration: z(Xo(.185 * Math.max(Xo(f - a), Xo(d - a)) / c / .05 || 0)),
                    ease: ot.ease || "power3",
                    data: Xo(p - t),
                    onInterrupt: function () {
                      return L.restart(!0) && v && v(wt)
                    },
                    onComplete: function () {
                      wt.update(), Mt = St(), C = P = r && !ft ? r.totalProgress() : wt.progress, nt && nt(wt), y && y(wt)
                    }
                  }, t, h * g, p - t - h * g), _ && _(wt, n.tween)
                }
              }
            })).pause()), V && (ds[V] = wt), (X = (Z = wt.trigger = Ai(Z || $)) && Z._gsap && Z._gsap.stRevert) && (X = X(wt)), $ = !0 === $ ? Z : Ai($), Do(H) && (H = {
              targets: Z,
              className: H
            }), $ && (!1 === J || J === Vo || (J = !(!J && "flex" === Qo($.parentNode).display) && Ho), wt.pin = $, !1 !== e.force3D && Yi.set($, {
              force3D: !0
            }), (i = Yi.core.getCache($)).spacer ? m = i.pinState : (at && ((at = Ai(at)) && !at.nodeType && (at = at.current || at.nativeElement), i.spacerIsNative = !!at, at && (i.spacerState = Bs(at))), i.spacer = y = at || Xi.createElement("div"), y.classList.add("pin-spacer"), V && y.classList.add("pin-spacer-" + V), i.pinState = m = Bs($)), wt.spacer = y = i.spacer, A = Qo($), M = A[J + ht.os2], w = Yi.getProperty($), x = Yi.quickSetter($, ht.a, Ko), Ls($, y, A), v = Bs($)), yt) {
            p = Lo(yt) ? Zo(yt, ss) : ss, f = cs("scroller-start", V, dt, ht, p, 0), d = cs("scroller-end", V, dt, ht, p, 0, f), b = f["offset" + ht.op.d2];
            var Et = Ai(yi(dt, "content") || dt);
            c = this.markerStart = cs("start", V, Et, ht, p, b, 0, ut), h = this.markerEnd = cs("end", V, Et, ht, p, b, 0, ut), ut && (F = Yi.quickSetter([c, h], ht.a, Ko)), mt || mi.length && !0 === yi(dt, "fixedMarkers") || (q = Qo(N = gt ? Ni : dt).position, N.style.position = "absolute" === q || "fixed" === q ? q : "relative", Yi.set([f, d], {
              force3D: !0
            }), S = Yi.quickSetter(f, ht.a, Ko), E = Yi.quickSetter(d, ht.a, Ko))
          }
          if (ut) {
            var At = ut.vars.onUpdate,
              Ct = ut.vars.onUpdateParams;
            ut.eventCallback("onUpdate", (function () {
              wt.update(0, 0, 1), At && At.apply(Ct || [])
            }))
          }
          wt.previous = function () {
            return fs[fs.indexOf(wt) - 1]
          }, wt.next = function () {
            return fs[fs.indexOf(wt) + 1]
          }, wt.revert = function (t) {
            var e = !1 !== t || !wt.enabled,
              n = Ki;
            e !== wt.isReverted && (e && (wt.scroll.rec || !Ki || !go || (wt.scroll.rec = St()), Y = Math.max(St(), wt.scroll.rec || 0), I = wt.progress, B = r && r.progress()), c && [c, h, f, d].forEach((function (t) {
              return t.style.display = e ? "none" : "block"
            })), e && (Ki = 1), wt.update(e), Ki = n, $ && (e ? function (t, e, r) {
              Ys(r);
              var n = t._gsap;
              if (n.spacerIsNative) Ys(n.spacerState);
              else if (t.parentNode === e) {
                var i = e.parentNode;
                i && (i.insertBefore(t, e), i.removeChild(e))
              }
            }($, y, m) : (!st || !wt.isActive) && Ls($, y, Qo($), O)), wt.isReverted = e)
          }, wt.refresh = function (i, o) {
            if (!Ki && wt.enabled || o)
              if ($ && i && bo) ns(t, "scrollEnd", xs);
              else {
                !go && xt && xt(wt), Ki = 1, Ot = vo(), n.tween && (n.tween.kill(), n.tween = 0), D && D.pause(), tt && r && r.time(-.01, !0).invalidate(), wt.isReverted || wt.revert();
                for (var p, b, x, M, S, E, A, C, P, R, z = Tt(), F = kt(), X = ut ? ut.duration() : Co(dt, ht), W = 0, N = 0, q = e.end, j = e.endTrigger || Z, U = e.start || (0 !== e.start && Z ? $ ? "0 0" : "0 100%" : 0), H = wt.pinnedContainer = e.pinnedContainer && Ai(e.pinnedContainer), V = Z && Math.max(0, fs.indexOf(wt)) || 0, G = V; G--;)(E = fs[G]).end || E.refresh(0, 1) || (Ki = 1), !(A = E.pin) || A !== Z && A !== $ || E.isReverted || (R || (R = []), R.unshift(E), E.revert()), E !== fs[G] && (V--, G--);
                for (Ro(U) && (U = U(wt)), u = Xs(U, Z, z, ht, St(), c, f, wt, F, bt, mt, X, ut) || ($ ? -.001 : 0), Ro(q) && (q = q(wt)), Do(q) && !q.indexOf("+=") && (~q.indexOf(" ") ? q = (Do(U) ? U.split(" ")[0] : "") + q : (W = ls(q.substr(2), z), q = Do(U) ? U : u + W, j = Z)), l = Math.max(u, Xs(q || (j ? "100% 0" : X), j, z, ht, St() + W, h, d, wt, F, bt, mt, X, ut)) || -.001, g = l - u || (u -= .01) && .001, W = 0, G = V; G--;)(A = (E = fs[G]).pin) && E.start - E._pinPush < u && !ut && E.end > 0 && (p = E.end - E.start, A !== Z && A !== H || zo(U) || (W += p * (1 - E.progress)), A === $ && (N += p));
                if (u += W, l += W, wt._pinPush = N, c && W && ((p = {})[ht.a] = "+=" + W, H && (p[ht.p] = "-=" + St()), Yi.set([c, h], p)), $) p = Qo($), M = ht === Ei, x = St(), T = parseFloat(w(ht.a)) + N, !X && l > 1 && ((gt ? Ni : dt).style["overflow-" + ht.a] = "scroll"), Ls($, y, p), v = Bs($), b = $o($, !0), C = mt && Ci(dt, M ? Si : Ei)(), J && ((O = [J + ht.os2, g + N + Ko]).t = y, (G = J === Ho ? Jo($, ht) + g + N : 0) && O.push(ht.d, G + Ko), Ys(O), mt && St(Y)), mt && ((S = {
                  top: b.top + (M ? x - u : C) + Ko,
                  left: b.left + (M ? C : x - u) + Ko,
                  boxSizing: "border-box",
                  position: "fixed"
                }).width = S.maxWidth = Math.ceil(b.width) + Ko, S.height = S.maxHeight = Math.ceil(b.height) + Ko, S.margin = S.marginTop = S.marginRight = S.marginBottom = S.marginLeft = "0", S.padding = p.padding, S.paddingTop = p.paddingTop, S.paddingRight = p.paddingRight, S.paddingBottom = p.paddingBottom, S.paddingLeft = p.paddingLeft, _ = function (t, e, r) {
                  for (var n, i = [], o = t.length, s = r ? 8 : 0; s < o; s += 2) n = t[s], i.push(n, n in e ? e[n] : t[s + 1]);
                  return i.t = t.t, i
                }(m, S, st)), r ? (P = r._initted, no(1), r.render(r.duration(), !0, !0), k = w(ht.a) - T + g + N, g !== k && mt && _.splice(_.length - 2, 2), r.render(0, !0, !0), P || r.invalidate(), no(0)) : k = g;
                else if (Z && St() && !ut)
                  for (b = Z.parentNode; b && b !== Ni;) b._pinOffset && (u -= b._pinOffset, l -= b._pinOffset), b = b.parentNode;
                R && R.forEach((function (t) {
                  return t.revert(!1)
                })), wt.start = u, wt.end = l, s = a = St(), ut || (s < Y && St(Y), wt.scroll.rec = 0), wt.revert(!1), L && (Mt = -1, wt.isActive && St(u + g * I), L.restart(!0)), Ki = 0, r && ft && (r._initted || B) && r.progress() !== B && r.progress(B, !0).render(r.time(), !0, !0), (I !== wt.progress || ut) && (r && !ft && r.totalProgress(I, !0), wt.progress = I, wt.update(0, 0, 1)), $ && J && (y._pinOffset = Math.round(wt.progress * k)), K && K(wt)
              }
          }, wt.getVelocity = function () {
            return (St() - a) / (vo() - Vi) * 1e3 || 0
          }, wt.endAnimation = function () {
            Bo(wt.callbackAnimation), r && (D ? D.progress(1) : r.paused() ? ft || Bo(r, wt.direction < 0, 1) : Bo(r, r.reversed()))
          }, wt.labelToScroll = function (t) {
            return r && r.labels && (u || wt.refresh() || u) + r.labels[t] / r.duration() * g || 0
          }, wt.getTrailing = function (t) {
            var e = fs.indexOf(wt),
              r = wt.direction > 0 ? fs.slice(0, e).reverse() : fs.slice(e + 1);
            return (Do(t) ? r.filter((function (e) {
              return e.vars.preventOverlaps === t
            })) : r).filter((function (t) {
              return wt.direction > 0 ? t.end <= u : t.start >= l
            }))
          }, wt.update = function (t, e, i) {
            if (!ut || i || t) {
              var o, c, h, d, p, m, b, w = wt.scroll(),
                O = t ? 0 : (w - u) / g,
                A = O < 0 ? 0 : O > 1 ? 1 : O || 0,
                R = wt.progress;
              if (e && (a = s, s = ut ? St() : w, ot && (P = C, C = r && !ft ? r.totalProgress() : A)), et && !A && $ && !Ki && !_o && bo && u < w + (w - a) / (vo() - Vi) * et && (A = 1e-4), A !== R && wt.enabled) {
                if (d = (p = (o = wt.isActive = !!A && A < 1) !== (!!R && R < 1)) || !!A != !!R, wt.direction = A > R ? 1 : -1, wt.progress = A, d && !Ki && (c = A && !R ? 0 : 1 === A ? 1 : 1 === R ? 2 : 3, ft && (h = !p && "none" !== vt[c + 1] && vt[c + 1] || vt[c], b = r && ("complete" === h || "reset" === h || h in r))), ct && (p || b) && (b || Q || !r) && (Ro(ct) ? ct(wt) : wt.getTrailing(ct).forEach((function (t) {
                    return t.endAnimation()
                  }))), ft || (!D || Ki || _o ? r && r.totalProgress(A, !!Ki) : ((ut || mo && mo !== wt) && D.render(D._dp._time - D._start), D.resetTo ? D.resetTo("totalProgress", A, r._tTime / r._tDur) : (D.vars.totalProgress = A, D.invalidate().restart()))), $)
                  if (t && J && (y.style[J + ht.os2] = M), mt) {
                    if (d) {
                      if (m = !t && A > R && l + 1 > w && w + 1 >= Co(dt, ht), st)
                        if (t || !o && !m) Ns($, y);
                        else {
                          var z = $o($, !0),
                            I = w - u;
                          Ns($, Ni, z.top + (ht === Ei ? I : 0) + Ko, z.left + (ht === Ei ? 0 : I) + Ko)
                        } Ys(o || m ? _ : v), k !== g && A < 1 && o || x(T + (1 !== A || m ? 0 : k))
                    }
                  } else x(Mo(T + k * A));
                ot && !n.tween && !Ki && !_o && L.restart(!0), H && (p || it && A && (A < 1 || !co)) && Ui(H.targets).forEach((function (t) {
                  return t.classList[o || it ? "add" : "remove"](H.className)
                })), U && !ft && !t && U(wt), d && !Ki ? (ft && (b && ("complete" === h ? r.pause().totalProgress(1) : "reset" === h ? r.restart(!0).pause() : "restart" === h ? r.restart(!0) : r[h]()), U && U(wt)), !p && co || (G && p && Fo(wt, G), _t[c] && Fo(wt, _t[c]), it && (1 === A ? wt.kill(!1, 1) : _t[c] = 0), p || _t[c = 1 === A ? 1 : 3] && Fo(wt, _t[c])), lt && !o && Math.abs(wt.getVelocity()) > (zo(lt) ? lt : 2500) && (Bo(wt.callbackAnimation), D ? D.progress(1) : Bo(r, !A, 1))) : ft && U && !Ki && U(wt)
              }
              if (E) {
                var Y = ut ? w / ut.duration() * (ut._caScrollDist || 0) : w;
                S(Y + (f._isFlipped ? 1 : 0)), E(Y)
              }
              F && F(-w / ut.duration() * (ut._caScrollDist || 0))
            }
          }, wt.enable = function (e, r) {
            wt.enabled || (wt.enabled = !0, ns(dt, "resize", _s), ns(gt ? Xi : dt, "scroll", gs), xt && ns(t, "refreshInit", xt), !1 !== e && (wt.progress = I = 0, s = a = Mt = St()), !1 !== r && wt.refresh())
          }, wt.getTween = function (t) {
            return t && n ? n.tween : D
          }, wt.setPositions = function (t, e) {
            $ && (T += t - u, k += e - t - g), wt.start = u = t, wt.end = l = e, g = e - t, wt.update()
          }, wt.disable = function (e, r) {
            if (wt.enabled && (!1 !== e && wt.revert(), wt.enabled = wt.isActive = !1, r || D && D.pause(), Y = 0, i && (i.uncache = 1), xt && is(t, "refreshInit", xt), L && (L.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !gt)) {
              for (var o = fs.length; o--;)
                if (fs[o].scroller === dt && fs[o] !== wt) return;
              is(dt, "resize", _s), is(dt, "scroll", gs)
            }
          }, wt.kill = function (t, n) {
            wt.disable(t, n), D && !n && D.kill(), V && delete ds[V];
            var o = fs.indexOf(wt);
            o >= 0 && fs.splice(o, 1), o === $i && Ps > 0 && $i--, o = 0, fs.forEach((function (t) {
              return t.scroller === wt.scroller && (o = 1)
            })), o || (wt.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.render(-1), n || r.kill()), c && [c, h, f, d].forEach((function (t) {
              return t.parentNode && t.parentNode.removeChild(t)
            })), mo === wt && (mo = 0), $ && (i && (i.uncache = 1), o = 0, fs.forEach((function (t) {
              return t.pin === $ && o++
            })), o || (i.spacer = 0)), e.onKill && e.onKill(wt)
          }, wt.enable(!1, !1), X && X(wt), r && r.add && !g ? Yi.delayedCall(.01, (function () {
            return u || l || wt.refresh()
          })) && (g = .01) && (u = l = 0) : wt.refresh()
        } else this.update = this.refresh = this.kill = ko
      }, t.register = function (e) {
        return Bi || (Yi = e || So(), Oo() && window.document && t.enable(), Bi = wo), Bi
      }, t.defaults = function (t) {
        if (t)
          for (var e in t) as[e] = t[e];
        return as
      }, t.disable = function (t, e) {
        wo = 0, fs.forEach((function (r) {
          return r[e ? "kill" : "disable"](t)
        })), is(Fi, "wheel", gs), is(Xi, "scroll", gs), clearInterval(Gi), is(Xi, "touchcancel", ko), is(Ni, "touchstart", ko), rs(is, Xi, "pointerdown,touchstart,mousedown", xo), rs(is, Xi, "pointerup,touchend,mouseup", To), ji.kill(), Po(is);
        for (var r = 0; r < gi.length; r += 3) os(is, gi[r], gi[r + 1]), os(is, gi[r], gi[r + 2])
      }, t.enable = function () {
        if (Fi = window, Xi = document, Wi = Xi.documentElement, Ni = Xi.new, Yi && (Ui = Yi.utils.toArray, Hi = Yi.utils.clamp, no = Yi.core.suppressOverwrites || ko, Yi.core.globals("ScrollTrigger", t), Ni)) {
          wo = 1, Ii.register(Yi), t.isTouch = Ii.isTouch, lo = Ii.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ns(Fi, "wheel", gs), qi = [Fi, Xi, Wi, Ni], t.matchMedia({
            "(orientation: portrait)": function () {
              return ms(), ms
            }
          }), ns(Xi, "scroll", gs);
          var e, r, n = Ni.style,
            i = n.borderTopStyle;
          for (n.borderTopStyle = "solid", e = $o(Ni), Ei.m = Math.round(e.top + Ei.sc()) || 0, Si.m = Math.round(e.left + Si.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), Gi = setInterval(ps, 250), Yi.delayedCall(.5, (function () {
              return _o = 0
            })), ns(Xi, "touchcancel", ko), ns(Ni, "touchstart", ko), rs(ns, Xi, "pointerdown,touchstart,mousedown", xo), rs(ns, Xi, "pointerup,touchend,mouseup", To), Zi = Yi.utils.checkPrefix("transform"), zs.push(Zi), Bi = vo(), ji = Yi.delayedCall(.2, As).pause(), eo = [Xi, "visibilitychange", function () {
              var t = Fi.innerWidth,
                e = Fi.innerHeight;
              Xi.hidden ? (Ji = t, to = e) : Ji === t && to === e || _s()
            }, Xi, "DOMContentLoaded", As, Fi, "load", As, Fi, "resize", _s], Po(ns), fs.forEach((function (t) {
              return t.enable(0, 1)
            })), r = 0; r < gi.length; r += 3) os(is, gi[r], gi[r + 1]), os(is, gi[r], gi[r + 2])
        }
      }, t.config = function (e) {
        "limitCallbacks" in e && (co = !!e.limitCallbacks);
        var r = e.syncInterval;
        r && clearInterval(Gi) || (Gi = r) && setInterval(ps, r), "ignoreMobileResize" in e && (so = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Po(is) || Po(ns, e.autoRefreshEvents || "none"), io = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
      }, t.scrollerProxy = function (t, e) {
        var r = Ai(t),
          n = gi.indexOf(r),
          i = Eo(r);
        ~n && gi.splice(n, i ? 6 : 2), e && (i ? mi.unshift(Fi, e, Ni, e, Wi, e) : mi.unshift(r, e))
      }, t.matchMedia = function (t) {
        var e, r, n, i, o;
        for (r in t) n = bs.indexOf(r), i = t[r], fo = r, "all" === r ? i() : (e = Fi.matchMedia(r)) && (e.matches && (o = i()), ~n ? (bs[n + 1] = Yo(bs[n + 1], i), bs[n + 2] = Yo(bs[n + 2], o)) : (n = bs.length, bs.push(r, i, o), e.addListener ? e.addListener(ws) : e.addEventListener("change", ws)), bs[n + 3] = e.matches), fo = 0;
        return bs
      }, t.clearMatchMedia = function (t) {
        t || (bs.length = 0), (t = bs.indexOf(t)) >= 0 && bs.splice(t, 4)
      }, t.isInViewport = function (t, e, r) {
        var n = (Do(t) ? Ai(t) : t).getBoundingClientRect(),
          i = n[r ? jo : Uo] * e || 0;
        return r ? n.right - i > 0 && n.left + i < Fi.innerWidth : n.bottom - i > 0 && n.top + i < Fi.innerHeight
      }, t.positionInViewport = function (t, e, r) {
        Do(t) && (t = Ai(t));
        var n = t.getBoundingClientRect(),
          i = n[r ? jo : Uo],
          o = null == e ? i / 2 : e in us ? us[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
        return r ? (n.left + o) / Fi.innerWidth : (n.top + o) / Fi.innerHeight
      }, t
    }();
  js.version = "3.10.4", js.saveStyles = function (t) {
    return t ? Ui(t).forEach((function (t) {
      if (t && t.style) {
        var e = ks.indexOf(t);
        e >= 0 && ks.splice(e, 5), ks.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Yi.core.getCache(t), fo)
      }
    })) : ks
  }, js.revert = function (t, e) {
    return Os(!t, e)
  }, js.create = function (t, e) {
    return new js(t, e)
  }, js.refresh = function (t) {
    return t ? _s() : (Bi || js.register()) && As(!0)
  }, js.update = Ds, js.clearScrollMemory = Ss, js.maxScroll = function (t, e) {
    return Co(t, e ? Si : Ei)
  }, js.getScrollFunc = function (t, e) {
    return Ci(Ai(t), e ? Si : Ei)
  }, js.getById = function (t) {
    return ds[t]
  }, js.getAll = function () {
    return fs.filter((function (t) {
      return "ScrollSmoother" !== t.vars.id
    }))
  }, js.isScrolling = function () {
    return !!bo
  }, js.snapDirectional = es, js.addEventListener = function (t, e) {
    var r = vs[t] || (vs[t] = []);
    ~r.indexOf(e) || r.push(e)
  }, js.removeEventListener = function (t, e) {
    var r = vs[t],
      n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1)
  }, js.batch = function (t, e) {
    var r, n = [],
      i = {},
      o = e.interval || .016,
      s = e.batchMax || 1e9,
      a = function (t, e) {
        var r = [],
          n = [],
          i = Yi.delayedCall(o, (function () {
            e(r, n), r = [], n = []
          })).pause();
        return function (t) {
          r.length || i.restart(!0), r.push(t.trigger), n.push(t), s <= r.length && i.progress(1)
        }
      };
    for (r in e) i[r] = "on" === r.substr(0, 2) && Ro(e[r]) && "onRefreshInit" !== r ? a(0, e[r]) : e[r];
    return Ro(s) && (s = s(), ns(js, "refresh", (function () {
      return s = e.batchMax()
    }))), Ui(t).forEach((function (t) {
      var e = {};
      for (r in i) e[r] = i[r];
      e.trigger = t, n.push(js.create(e))
    })), n
  };
  var Us, Hs = function (t, e, r, n) {
      return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
    },
    Vs = function t(e, r) {
      !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Ii.isTouch ? " pinch-zoom" : "") : "none", e === Wi && t(Ni, r)
    },
    Gs = {
      auto: 1,
      scroll: 1
    },
    Ks = function (t) {
      var e, r = t.event,
        n = t.target,
        i = t.axis,
        o = (r.changedTouches ? r.changedTouches[0] : r).target,
        s = o._gsap || Yi.core.getCache(o),
        a = vo();
      if (!s._isScrollT || a - s._isScrollT > 2e3) {
        for (; o && o.scrollHeight <= o.clientHeight;) o = o.parentNode;
        s._isScroll = o && !Eo(o) && o !== n && (Gs[(e = Qo(o)).overflowY] || Gs[e.overflowX]), s._isScrollT = a
      }(s._isScroll || "x" === i) && (r._gsapAllow = !0)
    },
    Qs = function (t, e, r, n) {
      return Ii.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: n = n && Ks,
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return r && ns(Xi, Ii.eventTypes[0], $s, !1, !0)
        },
        onDisable: function () {
          return is(Xi, Ii.eventTypes[0], $s, !0)
        }
      })
    },
    Zs = /(input|label|select|textarea)/i,
    $s = function (t) {
      var e = Zs.test(t.target.tagName);
      (e || Us) && (t._gsapAllow = !0, Us = e)
    },
    Js = function (t) {
      Lo(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
      var e, r, n, i, o, s, a, u, l = t,
        c = l.normalizeScrollX,
        h = l.momentum,
        f = l.allowNestedScroll,
        d = Ai(t.target) || Wi,
        p = Yi.core.globals().ScrollSmoother,
        g = lo && (t.content && Ai(t.content) || p && p.get() && p.get().content()),
        m = Ci(d, Ei),
        _ = Ci(d, Si),
        v = 1,
        y = (Ii.isTouch && Fi.visualViewport ? Fi.visualViewport.scale * Fi.visualViewport.width : Fi.outerWidth) / Fi.innerWidth,
        b = 0,
        w = Ro(h) ? function () {
          return h(e)
        } : function () {
          return h || 2.8
        },
        x = Qs(d, t.type, !0, f),
        T = function () {
          return n = !1
        },
        k = ko,
        M = ko,
        O = function () {
          r = Co(d, Ei), M = Hi(lo ? 1 : 0, r), c && (k = Hi(0, Co(d, Si))), i = Es
        },
        S = function () {
          O(), o.isActive() && o.vars.scrollY > r && (m() > r ? o.progress(1) && m(r) : o.resetTo("scrollY", r))
        };
      return t.ignoreCheck = function (t) {
        return lo && "touchmove" === t.type && function () {
          if (n) {
            requestAnimationFrame(T);
            var t = Mo(e.deltaY / 2),
              r = M(m.v - t);
            return g && r !== m.v + m.offset && (m.offset = r - m.v, g.style.transform = "translateY(" + -m.offset + "px)", g._gsap && (g._gsap.y = -m.offset + "px"), m.cacheID = gi.cache, Ds()), !0
          }
          g && (g.style.transform = "translateY(0px)", m.offset = m.cacheID = 0, g._gsap && (g._gsap.y = "0px")), n = !0
        }() || v > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
      }, t.onPress = function () {
        var t = v;
        v = Mo((Fi.visualViewport && Fi.visualViewport.scale || 1) / y), o.pause(), t !== v && Vs(d, v > 1.01 || !c && "x"), n = !1, s = _(), a = m(), O(), i = Es
      }, t.onRelease = t.onGestureStart = function (t, e) {
        if (g && (g.style.transform = "translateY(0px)", m.offset = m.cacheID = 0, g._gsap && (g._gsap.y = "0px")), e) {
          gi.cache++;
          var n, i, s = w();
          c && (i = (n = _()) + .05 * s * -t.velocityX / .227, s *= Hs(_, n, i, Co(d, Si)), o.vars.scrollX = k(i)), i = (n = m()) + .05 * s * -t.velocityY / .227, s *= Hs(m, n, i, Co(d, Ei)), o.vars.scrollY = M(i), o.invalidate().duration(s).play(.01), (lo && o.vars.scrollY >= r || n >= r - 1) && Yi.to({}, {
            onUpdate: S,
            duration: s
          })
        } else u.restart(!0)
      }, t.onWheel = function () {
        o._ts && o.pause(), vo() - b > 1e3 && (i = 0, b = vo())
      }, t.onChange = function (t, e, r, n, o) {
        Es !== i && O(), e && c && _(k(n[2] === e ? s + (t.startX - t.x) : _() + e - n[1])), r && m(M(o[2] === r ? a + (t.startY - t.y) : m() + r - o[1])), Ds()
      }, t.onEnable = function () {
        Vs(d, !c && "x"), ns(Fi, "resize", S), x.enable()
      }, t.onDisable = function () {
        Vs(d, !0), is(Fi, "resize", S), x.kill()
      }, (e = new Ii(t)).iOS = lo, lo && !m() && m(1), u = e._dc, o = Yi.to(e, {
        ease: "power4",
        paused: !0,
        scrollX: c ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: u.vars.onComplete
      }), e
    };
  js.sort = function (t) {
    return fs.sort(t || function (t, e) {
      return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
    })
  }, js.observe = function (t) {
    return new Ii(t)
  }, js.normalizeScroll = function (t) {
    if (void 0 === t) return oo;
    if (!0 === t && oo) return oo.enable();
    if (!1 === t) return oo && oo.kill();
    var e = t instanceof Ii ? t : Js(t);
    return oo && oo.target === e.target && oo.kill(), Eo(e.target) && (oo = e), e
  }, js.core = {
    _getVelocityProp: Pi,
    _inputObserver: Qs,
    _scrollers: gi,
    _proxies: mi,
    bridge: {
      ss: function () {
        bo || Ts("scrollStart"), bo = vo()
      },
      ref: function () {
        return Ki
      }
    }
  }, So() && Yi.registerPlugin(js), $n.registerPlugin(js);
  var ta = document.querySelector(".grid"),
    ea = s(ta.querySelectorAll(".grid__item"));
  (function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "img";
    return new Promise((function (e) {
      u(document.querySelectorAll(t), {
        background: !0
      }, e)
    }))
  })(".grid__item-img").then((function (t) {
    document.new.classList.remove("loading");
    var e, r = new d({
        lerp: .1,
        smooth: !0
      }),
      n = function () {
        r.raf(), requestAnimationFrame(n)
      };
    requestAnimationFrame(n);
    var i = function () {
      e = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
    i(), window.addEventListener("resize", i), ea.forEach((function (t) {
      $n.timeline().set(ta, {
        perspective: 1e3,
        perspectiveOrigin: "50% ".concat(e.height / 2 + r.scroll, "px")
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
          onUpdate: function (t) {
            return $n.set(ta, {
              perspectiveOrigin: function () {
                return "50% ".concat(e.height / 2 + r.scroll, "px")
              }
            })
          }
        }
      })
    }))
  }))
}();
