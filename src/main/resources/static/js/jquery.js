/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(b, O) {
    function d(b) {
        var O = V[b] = {};
        return D.each(b.split(G), function(b, d) {
            O[d] = !0
        }), O
    }

    function h(b, d, h) {
        if (h === O && b.nodeType === 1) {
            var bg = "data-" + d.replace(X, "-$1").toLowerCase();
            h = b.getAttribute(bg);
            if (typeof h == "string") {
                try {
                    h = h === "true" ? !0 : h === "false" ? !1 : h === "null" ? null : +h + "" === h ? +h : W.test(h) ? D.parseJSON(h) : h
                } catch (b) {}
                D.data(b, d, h)
            } else h = O
        }
        return h
    }

    function bg(b) {
        var O;
        for (O in b) {
            if (O === "data" && D.isEmptyObject(b[O])) continue;
            if (O !== "toJSON") return !1
        }
        return !0
    }

    function c() {
        return !1
    }

    function A() {
        return !0
    }

    function e(b) {
        return !b || !b.parentNode || b.parentNode.nodeType === 11
    }

    function cb(b, O) {
        do {
            b = b[O]
        } while (b && b.nodeType !== 1);
        return b
    }

    function B(b, O, d) {
        O = O || 0;
        if (D.isFunction(O)) return D.grep(b, function(b, h) {
            var bg = !!O.call(b, h, b);
            return bg === d
        });
        if (O.nodeType) return D.grep(b, function(b, h) {
            return b === O === d
        });
        if (typeof O == "string") {
            var h = D.grep(b, function(b) {
                return b.nodeType === 1
            });
            if (cab.test(O)) return D.filter(O, h, !d);
            O = D.filter(O, h)
        }
        return D.grep(b, function(b, h) {
            return D.inArray(b, O) >= 0 === d
        })
    }

    function dd(b) {
        var O = bBb.split("|"),
            d = b.createDocumentFragment();
        if (d.createElement)
            while (O.length) d.createElement(O.pop());
        return d
    }

    function a(b, O) {
        return b.getElementsByTagName(O)[0] || b.appendChild(b.ownerDocument.createElement(O))
    }

    function j(b, O) {
        if (O.nodeType !== 1 || !D.hasData(b)) return;
        var d, h, bg, c = D._data(b),
            A = D._data(O, c),
            e = c.events;
        if (e) {
            delete A.handle, A.events = {};
            for (d in e)
                for (h = 0, bg = e[d].length; h < bg; h++) D.event.add(O, d, e[d][h])
        }
        A.data && (A.data = D.extend({}, A.data))
    }

    function bE(b, O) {
        var d;
        if (O.nodeType !== 1) return;
        O.clearAttributes && O.clearAttributes(), O.mergeAttributes && O.mergeAttributes(b), d = O.nodeName.toLowerCase(), d === "object" ? (O.parentNode && (O.outerHTML = b.outerHTML), D.support.html5Clone && b.innerHTML && !D.trim(O.innerHTML) && (O.innerHTML = b.innerHTML)) : d === "input" && eDb.test(b.type) ? (O.defaultChecked = O.checked = b.checked, O.value !== b.value && (O.value = b.value)) : d === "option" ? O.selected = b.defaultSelected : d === "input" || d === "textarea" ? O.defaultValue = b.defaultValue : d === "script" && O.text !== b.text && (O.text = b.text), O.removeAttribute(D.expando)
    }

    function bf(b) {
        return typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : typeof b.querySelectorAll != "undefined" ? b.querySelectorAll("*") : []
    }

    function dG(b) {
        eDb.test(b.type) && (b.defaultChecked = b.checked)
    }

    function ca(b, O) {
        if (O in b) return O;
        var d = O.charAt(0).toUpperCase() + O.slice(1),
            h = O,
            bg = Cb.length;
        while (bg--) {
            O = Cb[bg] + d;
            if (O in b) return O
        }
        return h
    }

    function cH(b, O) {
        return b = O || b, D.css(b, "display") === "none" || !D.contains(b.ownerDocument, b)
    }

    function dh(b, O) {
        var d, h, bg = [],
            c = 0,
            A = b.length;
        for (; c < A; c++) {
            d = b[c];
            if (!d.style) continue;
            bg[c] = D._data(d, "olddisplay"), O ? (!bg[c] && d.style.display === "none" && (d.style.display = ""), d.style.display === "" && cH(d) && (bg[c] = D._data(d, "olddisplay", I(d.nodeName)))) : (h = lb(d, "display"), !bg[c] && h !== "none" && D._data(d, "olddisplay", h))
        }
        for (c = 0; c < A; c++) {
            d = b[c];
            if (!d.style) continue;
            if (!O || d.style.display === "none" || d.style.display === "") d.style.display = O ? bg[c] || "" : "none"
        }
        return b
    }

    function bB(b, O, d) {
        var h = tb.exec(O);
        return h ? Math.max(0, h[1] - (d || 0)) + (h[2] || "px") : O
    }

    function cd(b, O, d, h) {
        var bg = d === (h ? "border" : "content") ? 4 : O === "width" ? 1 : 0,
            c = 0;
        for (; bg < 4; bg += 2) d === "margin" && (c += D.css(b, d + zb[bg], !0)), h ? (d === "content" && (c -= parseFloat(lb(b, "padding" + zb[bg])) || 0), d !== "margin" && (c -= parseFloat(lb(b, "border" + zb[bg] + "Width")) || 0)) : (c += parseFloat(lb(b, "padding" + zb[bg])) || 0, d !== "padding" && (c += parseFloat(lb(b, "border" + zb[bg] + "Width")) || 0));
        return c
    }

    function g(b, O, d) {
        var h = O === "width" ? b.offsetWidth : b.offsetHeight,
            bg = !0,
            c = D.support.boxSizing && D.css(b, "boxSizing") === "border-box";
        if (h <= 0 || h == null) {
            h = lb(b, O);
            if (h < 0 || h == null) h = b.style[O];
            if (ub.test(h)) return h;
            bg = c && (D.support.boxSizingReliable || h === b.style[O]), h = parseFloat(h) || 0
        }
        return h + cd(b, O, d || (c ? "border" : "content"), bg) + "px"
    }

    function I(b) {
        if (wb[b]) return wb[b];
        var O = D("<" + b + ">").appendTo(q.body),
            d = O.css("display");
        O.remove();
        if (d === "none" || d === "") {
            mb = q.body.appendChild(mb || D.extend(q.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!nb || !mb.createElement) nb = (mb.contentWindow || mb.contentDocument).document, nb.write("<!doctype html><html><body>"), nb.close();
            O = nb.body.appendChild(nb.createElement(b)), d = lb(O, "display"), q.body.removeChild(mb)
        }
        return wb[b] = d, d
    }

    function ea(b, O, d, h) {
        var bg;
        if (D.isArray(O)) D.each(O, function(O, bg) {
            d || Fb.test(b) ? h(b, bg) : ea(b + "[" + (typeof bg == "object" ? O : "") + "]", bg, d, h)
        });
        else if (!d && D.type(O) === "object")
            for (bg in O) ea(b + "[" + bg + "]", O[bg], d, h);
        else h(b, O)
    }

    function gX(b) {
        return function(O, d) {
            typeof O != "string" && (d = O, O = "*");
            var h, bg, c, A = O.toLowerCase().split(G),
                e = 0,
                cb = A.length;
            if (D.isFunction(d))
                for (; e < cb; e++) h = A[e], c = /^\+/.test(h), c && (h = h.substr(1) || "*"), bg = b[h] = b[h] || [], bg[c ? "unshift" : "push"](d)
        }
    }

    function aZ(b, d, h, bg, c, A) {
        c = c || d.dataTypes[0], A = A || {}, A[c] = !0;
        var e, cb = b[c],
            B = 0,
            dd = cb ? cb.length : 0,
            a = b === Xb;
        for (; B < dd && (a || !e); B++) e = cb[B](d, h, bg), typeof e == "string" && (!a || A[e] ? e = O : (d.dataTypes.unshift(e), e = aZ(b, d, h, bg, e, A)));
        return (a || !e) && !A["*"] && (e = aZ(b, d, h, bg, "*", A)), e
    }

    function f(b, d) {
        var h, bg, c = D.ajaxSettings.flatOptions || {};
        for (h in d) d[h] !== O && ((c[h] ? b : bg || (bg = {}))[h] = d[h]);
        bg && D.extend(!0, b, bg)
    }

    function Ac(b, d, h) {
        var bg, c, A, e, cb = b.contents,
            B = b.dataTypes,
            dd = b.responseFields;
        for (c in dd) c in h && (d[dd[c]] = h[c]);
        while (B[0] === "*") B.shift(), bg === O && (bg = b.mimeType || d.getResponseHeader("content-type"));
        if (bg)
            for (c in cb)
                if (cb[c] && cb[c].test(bg)) {
                    B.unshift(c);
                    break
                } if (B[0] in h) A = B[0];
        else {
            for (c in h) {
                if (!B[0] || b.converters[c + " " + B[0]]) {
                    A = c;
                    break
                }
                e || (e = c)
            }
            A = A || e
        }
        if (A) return A !== B[0] && B.unshift(A), h[A]
    }

    function cdM(b, O) {
        var d, h, bg, c, A = b.dataTypes.slice(),
            e = A[0],
            cb = {},
            B = 0;
        b.dataFilter && (O = b.dataFilter(O, b.dataType));
        if (A[1])
            for (d in b.converters) cb[d.toLowerCase()] = b.converters[d];
        for (; bg = A[++B];)
            if (bg !== "*") {
                if (e !== "*" && e !== bg) {
                    d = cb[e + " " + bg] || cb["* " + bg];
                    if (!d)
                        for (h in cb) {
                            c = h.split(" ");
                            if (c[1] === bg) {
                                d = cb[e + " " + c[0]] || cb["* " + c[0]];
                                if (d) {
                                    d === !0 ? d = cb[h] : cb[h] !== !0 && (bg = c[0], A.splice(B--, 0, bg));
                                    break
                                }
                            }
                        }
                    if (d !== !0)
                        if (d && b["throws"]) O = d(O);
                        else try {
                            O = d(O)
                        } catch (b) {
                            return {
                                state: "parsererror",
                                error: d ? b : "No conversion from " + e + " to " + bg
                            }
                        }
                }
                e = bg
            } return {
            state: "success",
            data: O
        }
    }

    function eD() {
        try {
            return new b.XMLHttpRequest
        } catch (b) {}
    }

    function ba() {
        try {
            return new b.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function bG() {
        return setTimeout(function() {
            cO = O
        }, 0), cO = D.now()
    }

    function bS(b, O) {
        D.each(O, function(O, d) {
            var h = (aO[O] || []).concat(aO["*"]),
                bg = 0,
                c = h.length;
            for (; bg < c; bg++)
                if (h[bg].call(b, O, d)) return
        })
    }

    function gR(b, O, d) {
        var h, bg = 0,
            c = 0,
            A = ddO.length,
            e = D.Deferred().always(function() {
                delete cb.elem
            }),
            cb = function() {
                var O = cO || bG(),
                    d = Math.max(0, B.startTime + B.duration - O),
                    h = d / B.duration || 0,
                    bg = 1 - h,
                    c = 0,
                    A = B.tweens.length;
                for (; c < A; c++) B.tweens[c].run(bg);
                return e.notifyWith(b, [B, bg, d]), bg < 1 && A ? d : (e.resolveWith(b, [B]), !1)
            },
            B = e.promise({
                elem: b,
                props: D.extend({}, O),
                opts: D.extend(!0, {
                    specialEasing: {}
                }, d),
                originalProperties: O,
                originalOptions: d,
                startTime: cO || bG(),
                duration: d.duration,
                tweens: [],
                createTween: function(O, d, h) {
                    var bg = D.Tween(b, B.opts, O, d, B.opts.specialEasing[O] || B.opts.easing);
                    return B.tweens.push(bg), bg
                },
                stop: function(O) {
                    var d = 0,
                        h = O ? B.tweens.length : 0;
                    for (; d < h; d++) B.tweens[d].run(1);
                    return O ? e.resolveWith(b, [B, O]) : e.rejectWith(b, [B, O]), this
                }
            }),
            dd = B.props;
        i(dd, B.opts.specialEasing);
        for (; bg < A; bg++) {
            h = ddO[bg].call(B, b, dd, B.opts);
            if (h) return h
        }
        return bS(B, dd), D.isFunction(B.opts.start) && B.opts.start.call(b, B), D.fx.timer(D.extend(cb, {
            anim: B,
            queue: B.opts.queue,
            elem: b
        })), B.progress(B.opts.progress).done(B.opts.done, B.opts.complete).fail(B.opts.fail).always(B.opts.always)
    }

    function i(b, O) {
        var d, h, bg, c, A;
        for (d in b) {
            h = D.camelCase(d), bg = O[h], c = b[d], D.isArray(c) && (bg = c[1], c = b[d] = c[0]), d !== h && (b[h] = c, delete b[d]), A = D.cssHooks[h];
            if (A && "expand" in A) {
                c = A.expand(c), delete b[h];
                for (d in c) d in b || (b[d] = c[d], O[d] = bg)
            } else O[h] = bg
        }
    }

    function k(b, O, d) {
        var h, bg, c, A, e, cb, B, dd, a, j = this,
            bE = b.style,
            bf = {},
            dG = [],
            ca = b.nodeType && cH(b);
        d.queue || (dd = D._queueHooks(b, "fx"), dd.unqueued == null && (dd.unqueued = 0, a = dd.empty.fire, dd.empty.fire = function() {
            dd.unqueued || a()
        }), dd.unqueued++, j.always(function() {
            j.always(function() {
                dd.unqueued--, D.queue(b, "fx").length || dd.empty.fire()
            })
        })), b.nodeType === 1 && ("height" in O || "width" in O) && (d.overflow = [bE.overflow, bE.overflowX, bE.overflowY], D.css(b, "display") === "inline" && D.css(b, "float") === "none" && (!D.support.inlineBlockNeedsLayout || I(b.nodeName) === "inline" ? bE.display = "inline-block" : bE.zoom = 1)), d.overflow && (bE.overflow = "hidden", D.support.shrinkWrapBlocks || j.done(function() {
            bE.overflow = d.overflow[0], bE.overflowX = d.overflow[1], bE.overflowY = d.overflow[2]
        }));
        for (h in O) {
            c = O[h];
            if (eO.exec(c)) {
                delete O[h], cb = cb || c === "toggle";
                if (c === (ca ? "hide" : "show")) continue;
                dG.push(h)
            }
        }
        A = dG.length;
        if (A) {
            e = D._data(b, "fxshow") || D._data(b, "fxshow", {}), "hidden" in e && (ca = e.hidden), cb && (e.hidden = !ca), ca ? D(b).show() : j.done(function() {
                D(b).hide()
            }), j.done(function() {
                var O;
                D.removeData(b, "fxshow", !0);
                for (O in bf) D.style(b, O, bf[O])
            });
            for (h = 0; h < A; h++) bg = dG[h], B = j.createTween(bg, ca ? e[bg] : 0), bf[bg] = e[bg] || D.style(b, bg), bg in e || (e[bg] = B.start, ca && (B.end = B.start, B.start = bg === "width" || bg === "height" ? 1 : 0))
        }
    }

    function l(b, O, d, h, bg) {
        return new l.prototype.init(b, O, d, h, bg)
    }

    function m(b, O) {
        var d, h = {
                height: b
            },
            bg = 0;
        O = O ? 1 : 0;
        for (; bg < 4; bg += 2 - O) d = zb[bg], h["margin" + d] = h["padding" + d] = b;
        return O && (h.opacity = h.width = b), h
    }

    function n(b) {
        return D.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : !1
    }
    var o, p, q = b.document,
        r = b.location,
        s = b.navigator,
        t = b.jQuery,
        u = b.$,
        v = Array.prototype.push,
        w = Array.prototype.slice,
        x = Array.prototype.indexOf,
        y = Object.prototype.toString,
        z = Object.prototype.hasOwnProperty,
        C = String.prototype.trim,
        D = function(b, O) {
            return new D.fn.init(b, O, o)
        },
        E = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        F = /\S/,
        G = /\s+/,
        H = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        J = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        K = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        L = /^[\],:{}\s]*$/,
        M = /(?:^|:|,)(?:\s*\[)+/g,
        N = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        P = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Q = /^-ms-/,
        R = /-([\da-z])/gi,
        S = function(b, O) {
            return (O + "").toUpperCase()
        },
        T = function() {
            q.addEventListener ? (q.removeEventListener("DOMContentLoaded", T, !1), D.ready()) : q.readyState === "complete" && (q.detachEvent("onreadystatechange", T), D.ready())
        },
        U = {};
    D.fn = D.prototype = {
        constructor: D,
        init: function(b, d, h) {
            var bg, c, A, e;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if (typeof b == "string") {
                b.charAt(0) === "<" && b.charAt(b.length - 1) === ">" && b.length >= 3 ? bg = [null, b, null] : bg = J.exec(b);
                if (bg && (bg[1] || !d)) {
                    if (bg[1]) return d = d instanceof D ? d[0] : d, e = d && d.nodeType ? d.ownerDocument || d : q, b = D.parseHTML(bg[1], e, !0), K.test(bg[1]) && D.isPlainObject(d) && this.attr.call(b, d, !0), D.merge(this, b);
                    c = q.getElementById(bg[2]);
                    if (c && c.parentNode) {
                        if (c.id !== bg[2]) return h.find(b);
                        this.length = 1, this[0] = c
                    }
                    return this.context = q, this.selector = b, this
                }
                return !d || d.jquery ? (d || h).find(b) : this.constructor(d).find(b)
            }
            return D.isFunction(b) ? h.ready(b) : (b.selector !== O && (this.selector = b.selector, this.context = b.context), D.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return w.call(this)
        },
        get: function(b) {
            return b == null ? this.toArray() : b < 0 ? this[this.length + b] : this[b]
        },
        pushStack: function(b, O, d) {
            var h = D.merge(this.constructor(), b);
            return h.prevObject = this, h.context = this.context, O === "find" ? h.selector = this.selector + (this.selector ? " " : "") + d : O && (h.selector = this.selector + "." + O + "(" + d + ")"), h
        },
        each: function(b, O) {
            return D.each(this, b, O)
        },
        ready: function(b) {
            return D.ready.promise().done(b), this
        },
        eq: function(b) {
            return b = +b, b === -1 ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(w.apply(this, arguments), "slice", w.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(D.map(this, function(O, d) {
                return b.call(O, d, O)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: v,
        sort: [].sort,
        splice: [].splice
    }, D.fn.init.prototype = D.fn, D.extend = D.fn.extend = function() {
        var b, d, h, bg, c, A, e = arguments[0] || {},
            cb = 1,
            B = arguments.length,
            dd = !1;
        typeof e == "boolean" && (dd = e, e = arguments[1] || {}, cb = 2), typeof e != "object" && !D.isFunction(e) && (e = {}), B === cb && (e = this, --cb);
        for (; cb < B; cb++)
            if ((b = arguments[cb]) != null)
                for (d in b) {
                    h = e[d], bg = b[d];
                    if (e === bg) continue;
                    dd && bg && (D.isPlainObject(bg) || (c = D.isArray(bg))) ? (c ? (c = !1, A = h && D.isArray(h) ? h : []) : A = h && D.isPlainObject(h) ? h : {}, e[d] = D.extend(dd, A, bg)) : bg !== O && (e[d] = bg)
                }
        return e
    }, D.extend({
        noConflict: function(O) {
            return b.$ === D && (b.$ = u), O && b.jQuery === D && (b.jQuery = t), D
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? D.readyWait++ : D.ready(!0)
        },
        ready: function(b) {
            if (b === !0 ? --D.readyWait : D.isReady) return;
            if (!q.body) return setTimeout(D.ready, 1);
            D.isReady = !0;
            if (b !== !0 && --D.readyWait > 0) return;
            p.resolveWith(q, [D]), D.fn.trigger && D(q).trigger("ready").off("ready")
        },
        isFunction: function(b) {
            return D.type(b) === "function"
        },
        isArray: Array.isArray || function(b) {
            return D.type(b) === "array"
        },
        isWindow: function(b) {
            return b != null && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return b == null ? String(b) : U[y.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || D.type(b) !== "object" || b.nodeType || D.isWindow(b)) return !1;
            try {
                if (b.constructor && !z.call(b, "constructor") && !z.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            var d;
            for (d in b);
            return d === O || z.call(b, d)
        },
        isEmptyObject: function(b) {
            var O;
            for (O in b) return !1;
            return !0
        },
        error: function(b) {
            throw new Error(b)
        },
        parseHTML: function(b, O, d) {
            var h;
            return !b || typeof b != "string" ? null : (typeof O == "boolean" && (d = O, O = 0), O = O || q, (h = K.exec(b)) ? [O.createElement(h[1])] : (h = D.buildFragment([b], O, d ? null : []), D.merge([], (h.cacheable ? D.clone(h.fragment) : h.fragment).childNodes)))
        },
        parseJSON: function(O) {
            if (!O || typeof O != "string") return null;
            O = D.trim(O);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(O);
            if (L.test(O.replace(N, "@").replace(P, "]").replace(M, ""))) return new Function("return " + O)();
            D.error("Invalid JSON: " + O)
        },
        parseXML: function(d) {
            var h, bg;
            if (!d || typeof d != "string") return null;
            try {
                b.DOMParser ? (bg = new DOMParser, h = bg.parseFromString(d, "text/xml")) : (h = new ActiveXObject("Microsoft.XMLDOM"), h.async = "false", h.loadXML(d))
            } catch (b) {
                h = O
            }
            return (!h || !h.documentElement || h.getElementsByTagName("parsererror").length) && D.error("Invalid XML: " + d), h
        },
        noop: function() {},
        globalEval: function(O) {
            O && F.test(O) && (b.execScript || function(O) {
                b.eval.call(b, O)
            })(O)
        },
        camelCase: function(b) {
            return b.replace(Q, "ms-").replace(R, S)
        },
        nodeName: function(b, O) {
            return b.nodeName && b.nodeName.toLowerCase() === O.toLowerCase()
        },
        each: function(b, d, h) {
            var bg, c = 0,
                A = b.length,
                e = A === O || D.isFunction(b);
            if (h) {
                if (e) {
                    for (bg in b)
                        if (d.apply(b[bg], h) === !1) break
                } else
                    for (; c < A;)
                        if (d.apply(b[c++], h) === !1) break
            } else if (e) {
                for (bg in b)
                    if (d.call(b[bg], bg, b[bg]) === !1) break
            } else
                for (; c < A;)
                    if (d.call(b[c], c, b[c++]) === !1) break;
            return b
        },
        trim: C && !C.call("\ufeff ") ? function(b) {
            return b == null ? "" : C.call(b)
        } : function(b) {
            return b == null ? "" : (b + "").replace(H, "")
        },
        makeArray: function(b, O) {
            var d, h = O || [];
            return b != null && (d = D.type(b), b.length == null || d === "string" || d === "function" || d === "regexp" || D.isWindow(b) ? v.call(h, b) : D.merge(h, b)), h
        },
        inArray: function(b, O, d) {
            var h;
            if (O) {
                if (x) return x.call(O, b, d);
                h = O.length, d = d ? d < 0 ? Math.max(0, h + d) : d : 0;
                for (; d < h; d++)
                    if (d in O && O[d] === b) return d
            }
            return -1
        },
        merge: function(b, d) {
            var h = d.length,
                bg = b.length,
                c = 0;
            if (typeof h == "number")
                for (; c < h; c++) b[bg++] = d[c];
            else
                while (d[c] !== O) b[bg++] = d[c++];
            return b.length = bg, b
        },
        grep: function(b, O, d) {
            var h, bg = [],
                c = 0,
                A = b.length;
            d = !!d;
            for (; c < A; c++) h = !!O(b[c], c), d !== h && bg.push(b[c]);
            return bg
        },
        map: function(b, d, h) {
            var bg, c, A = [],
                e = 0,
                cb = b.length,
                B = b instanceof D || cb !== O && typeof cb == "number" && (cb > 0 && b[0] && b[cb - 1] || cb === 0 || D.isArray(b));
            if (B)
                for (; e < cb; e++) bg = d(b[e], e, h), bg != null && (A[A.length] = bg);
            else
                for (c in b) bg = d(b[c], c, h), bg != null && (A[A.length] = bg);
            return A.concat.apply([], A)
        },
        guid: 1,
        proxy: function(b, d) {
            var h, bg, c;
            return typeof d == "string" && (h = b[d], d = b, b = h), D.isFunction(b) ? (bg = w.call(arguments, 2), c = function() {
                return b.apply(d, bg.concat(w.call(arguments)))
            }, c.guid = b.guid = b.guid || D.guid++, c) : O
        },
        access: function(b, d, h, bg, c, A, e) {
            var cb, B = h == null,
                dd = 0,
                a = b.length;
            if (h && typeof h == "object") {
                for (dd in h) D.access(b, d, dd, h[dd], 1, A, bg);
                c = 1
            } else if (bg !== O) {
                cb = e === O && D.isFunction(bg), B && (cb ? (cb = d, d = function(b, O, d) {
                    return cb.call(D(b), d)
                }) : (d.call(b, bg), d = null));
                if (d)
                    for (; dd < a; dd++) d(b[dd], h, cb ? bg.call(b[dd], dd, d(b[dd], h)) : bg, e);
                c = 1
            }
            return c ? b : B ? d.call(b) : a ? d(b[0], h) : A
        },
        now: function() {
            return (new Date).getTime()
        }
    }), D.ready.promise = function(O) {
        if (!p) {
            p = D.Deferred();
            if (q.readyState === "complete") setTimeout(D.ready, 1);
            else if (q.addEventListener) q.addEventListener("DOMContentLoaded", T, !1), b.addEventListener("load", D.ready, !1);
            else {
                q.attachEvent("onreadystatechange", T), b.attachEvent("onload", D.ready);
                var d = !1;
                try {
                    d = b.frameElement == null && q.documentElement
                } catch (b) {}
                d && d.doScroll && function b() {
                    if (!D.isReady) {
                        try {
                            d.doScroll("left")
                        } catch (O) {
                            return setTimeout(b, 50)
                        }
                        D.ready()
                    }
                }()
            }
        }
        return p.promise(O)
    }, D.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, O) {
        U["[object " + O + "]"] = O.toLowerCase()
    }), o = D(q);
    var V = {};
    D.Callbacks = function(b) {
        b = typeof b == "string" ? V[b] || d(b) : D.extend({}, b);
        var h, bg, c, A, e, cb, B = [],
            dd = !b.once && [],
            a = function(O) {
                h = b.memory && O, bg = !0, cb = A || 0, A = 0, e = B.length, c = !0;
                for (; B && cb < e; cb++)
                    if (B[cb].apply(O[0], O[1]) === !1 && b.stopOnFalse) {
                        h = !1;
                        break
                    } c = !1, B && (dd ? dd.length && a(dd.shift()) : h ? B = [] : j.disable())
            },
            j = {
                add: function() {
                    if (B) {
                        var O = B.length;
                        (function O(d) {
                            D.each(d, function(d, h) {
                                var bg = D.type(h);
                                bg === "function" ? (!b.unique || !j.has(h)) && B.push(h) : h && h.length && bg !== "string" && O(h)
                            })
                        })(arguments), c ? e = B.length : h && (A = O, a(h))
                    }
                    return this
                },
                remove: function() {
                    return B && D.each(arguments, function(b, O) {
                        var d;
                        while ((d = D.inArray(O, B, d)) > -1) B.splice(d, 1), c && (d <= e && e--, d <= cb && cb--)
                    }), this
                },
                has: function(b) {
                    return D.inArray(b, B) > -1
                },
                empty: function() {
                    return B = [], this
                },
                disable: function() {
                    return B = dd = h = O, this
                },
                disabled: function() {
                    return !B
                },
                lock: function() {
                    return dd = O, h || j.disable(), this
                },
                locked: function() {
                    return !dd
                },
                fireWith: function(b, O) {
                    return O = O || [], O = [b, O.slice ? O.slice() : O], B && (!bg || dd) && (c ? dd.push(O) : a(O)), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!bg
                }
            };
        return j
    }, D.extend({
        Deferred: function(b) {
            var O = [
                    ["resolve", "done", D.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", D.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", D.Callbacks("memory")]
                ],
                d = "pending",
                h = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return bg.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return D.Deferred(function(d) {
                            D.each(O, function(O, h) {
                                var c = h[0],
                                    A = b[O];
                                bg[h[1]](D.isFunction(A) ? function() {
                                    var b = A.apply(this, arguments);
                                    b && D.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[c + "With"](this === bg ? d : this, [b])
                                } : d[c])
                            }), b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return b != null ? D.extend(b, h) : h
                    }
                },
                bg = {};
            return h.pipe = h.then, D.each(O, function(b, c) {
                var A = c[2],
                    e = c[3];
                h[c[1]] = A.add, e && A.add(function() {
                    d = e
                }, O[b ^ 1][2].disable, O[2][2].lock), bg[c[0]] = A.fire, bg[c[0] + "With"] = A.fireWith
            }), h.promise(bg), b && b.call(bg, bg), bg
        },
        when: function(b) {
            var O = 0,
                d = w.call(arguments),
                h = d.length,
                bg = h !== 1 || b && D.isFunction(b.promise) ? h : 0,
                c = bg === 1 ? b : D.Deferred(),
                A = function(b, O, d) {
                    return function(h) {
                        O[b] = this, d[b] = arguments.length > 1 ? w.call(arguments) : h, d === e ? c.notifyWith(O, d) : --bg || c.resolveWith(O, d)
                    }
                },
                e, cb, B;
            if (h > 1) {
                e = new Array(h), cb = new Array(h), B = new Array(h);
                for (; O < h; O++) d[O] && D.isFunction(d[O].promise) ? d[O].promise().done(A(O, B, d)).fail(c.reject).progress(A(O, cb, e)) : --bg
            }
            return bg || c.resolveWith(B, d), c.promise()
        }
    }), D.support = function() {
        var O, d, h, bg, c, A, e, cb, B, dd, a, j = q.createElement("div");
        j.setAttribute("className", "t"), j.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = j.getElementsByTagName("*"), h = j.getElementsByTagName("a")[0];
        if (!d || !h || !d.length) return {};
        bg = q.createElement("select"), c = bg.appendChild(q.createElement("option")), A = j.getElementsByTagName("input")[0], h.style.cssText = "top:1px;float:left;opacity:.5", O = {
            leadingWhitespace: j.firstChild.nodeType === 3,
            tbody: !j.getElementsByTagName("tbody").length,
            htmlSerialize: !!j.getElementsByTagName("link").length,
            style: /top/.test(h.getAttribute("style")),
            hrefNormalized: h.getAttribute("href") === "/a",
            opacity: /^0.5/.test(h.style.opacity),
            cssFloat: !!h.style.cssFloat,
            checkOn: A.value === "on",
            optSelected: c.selected,
            getSetAttribute: j.className !== "t",
            enctype: !!q.createElement("form").enctype,
            html5Clone: q.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: q.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, A.checked = !0, O.noCloneChecked = A.cloneNode(!0).checked, bg.disabled = !0, O.optDisabled = !c.disabled;
        try {
            delete j.test
        } catch (b) {
            O.deleteExpando = !1
        }!j.addEventListener && j.attachEvent && j.fireEvent && (j.attachEvent("onclick", a = function() {
            O.noCloneEvent = !1
        }), j.cloneNode(!0).fireEvent("onclick"), j.detachEvent("onclick", a)), A = q.createElement("input"), A.value = "t", A.setAttribute("type", "radio"), O.radioValue = A.value === "t", A.setAttribute("checked", "checked"), A.setAttribute("name", "t"), j.appendChild(A), e = q.createDocumentFragment(), e.appendChild(j.lastChild), O.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, O.appendChecked = A.checked, e.removeChild(A), e.appendChild(j);
        if (j.attachEvent)
            for (B in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) cb = "on" + B, dd = cb in j, dd || (j.setAttribute(cb, "return;"), dd = typeof j[cb] == "function"), O[B + "Bubbles"] = dd;
        return D(function() {
            var d, h, bg, c, A = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                e = q.getElementsByTagName("body")[0];
            if (!e) return;
            d = q.createElement("div"), d.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", e.insertBefore(d, e.firstChild), h = q.createElement("div"), d.appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", bg = h.getElementsByTagName("td"), bg[0].style.cssText = "padding:0;margin:0;border:0;display:none", dd = bg[0].offsetHeight === 0, bg[0].style.display = "", bg[1].style.display = "none", O.reliableHiddenOffsets = dd && bg[0].offsetHeight === 0, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", O.boxSizing = h.offsetWidth === 4, O.doesNotIncludeMarginInBodyOffset = e.offsetTop !== 1, b.getComputedStyle && (O.pixelPosition = (b.getComputedStyle(h, null) || {}).top !== "1%", O.boxSizingReliable = (b.getComputedStyle(h, null) || {
                width: "4px"
            }).width === "4px", c = q.createElement("div"), c.style.cssText = h.style.cssText = A, c.style.marginRight = c.style.width = "0", h.style.width = "1px", h.appendChild(c), O.reliableMarginRight = !parseFloat((b.getComputedStyle(c, null) || {}).marginRight)), typeof h.style.zoom != "undefined" && (h.innerHTML = "", h.style.cssText = A + "width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = h.offsetWidth === 3, h.style.display = "block", h.style.overflow = "visible", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", O.shrinkWrapBlocks = h.offsetWidth !== 3, d.style.zoom = 1), e.removeChild(d), d = h = bg = c = null
        }), e.removeChild(j), d = h = bg = c = A = e = j = null, O
    }();
    var W = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        X = /([A-Z])/g;
    D.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (D.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? D.cache[b[D.expando]] : b[D.expando], !!b && !bg(b)
        },
        data: function(b, d, h, bg) {
            if (!D.acceptData(b)) return;
            var c, A, e = D.expando,
                cb = typeof d == "string",
                B = b.nodeType,
                dd = B ? D.cache : b,
                a = B ? b[e] : b[e] && e;
            if ((!a || !dd[a] || !bg && !dd[a].data) && cb && h === O) return;
            a || (B ? b[e] = a = D.deletedIds.pop() || D.guid++ : a = e), dd[a] || (dd[a] = {}, B || (dd[a].toJSON = D.noop));
            if (typeof d == "object" || typeof d == "function") bg ? dd[a] = D.extend(dd[a], d) : dd[a].data = D.extend(dd[a].data, d);
            return c = dd[a], bg || (c.data || (c.data = {}), c = c.data), h !== O && (c[D.camelCase(d)] = h), cb ? (A = c[d], A == null && (A = c[D.camelCase(d)])) : A = c, A
        },
        removeData: function(b, O, d) {
            if (!D.acceptData(b)) return;
            var h, c, A, e = b.nodeType,
                cb = e ? D.cache : b,
                B = e ? b[D.expando] : D.expando;
            if (!cb[B]) return;
            if (O) {
                h = d ? cb[B] : cb[B].data;
                if (h) {
                    D.isArray(O) || (O in h ? O = [O] : (O = D.camelCase(O), O in h ? O = [O] : O = O.split(" ")));
                    for (c = 0, A = O.length; c < A; c++) delete h[O[c]];
                    if (!(d ? bg : D.isEmptyObject)(h)) return
                }
            }
            if (!d) {
                delete cb[B].data;
                if (!bg(cb[B])) return
            }
            e ? D.cleanData([b], !0) : D.support.deleteExpando || cb != cb.window ? delete cb[B] : cb[B] = null
        },
        _data: function(b, O, d) {
            return D.data(b, O, d, !0)
        },
        acceptData: function(b) {
            var O = b.nodeName && D.noData[b.nodeName.toLowerCase()];
            return !O || O !== !0 && b.getAttribute("classid") === O
        }
    }), D.fn.extend({
        data: function(b, d) {
            var bg, c, A, e, cb, B = this[0],
                dd = 0,
                a = null;
            if (b === O) {
                if (this.length) {
                    a = D.data(B);
                    if (B.nodeType === 1 && !D._data(B, "parsedAttrs")) {
                        A = B.attributes;
                        for (cb = A.length; dd < cb; dd++) e = A[dd].name, e.indexOf("data-") || (e = D.camelCase(e.substring(5)), h(B, e, a[e]));
                        D._data(B, "parsedAttrs", !0)
                    }
                }
                return a
            }
            return typeof b == "object" ? this.each(function() {
                D.data(this, b)
            }) : (bg = b.split(".", 2), bg[1] = bg[1] ? "." + bg[1] : "", c = bg[1] + "!", D.access(this, function(d) {
                if (d === O) return a = this.triggerHandler("getData" + c, [bg[0]]), a === O && B && (a = D.data(B, b), a = h(B, b, a)), a === O && bg[1] ? this.data(bg[0]) : a;
                bg[1] = d, this.each(function() {
                    var O = D(this);
                    O.triggerHandler("setData" + c, bg), D.data(this, b, d), O.triggerHandler("changeData" + c, bg)
                })
            }, null, d, arguments.length > 1, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                D.removeData(this, b)
            })
        }
    }), D.extend({
        queue: function(b, O, d) {
            var h;
            if (b) return O = (O || "fx") + "queue", h = D._data(b, O), d && (!h || D.isArray(d) ? h = D._data(b, O, D.makeArray(d)) : h.push(d)), h || []
        },
        dequeue: function(b, O) {
            O = O || "fx";
            var d = D.queue(b, O),
                h = d.length,
                bg = d.shift(),
                c = D._queueHooks(b, O),
                A = function() {
                    D.dequeue(b, O)
                };
            bg === "inprogress" && (bg = d.shift(), h--), bg && (O === "fx" && d.unshift("inprogress"), delete c.stop, bg.call(b, A, c)), !h && c && c.empty.fire()
        },
        _queueHooks: function(b, O) {
            var d = O + "queueHooks";
            return D._data(b, d) || D._data(b, d, {
                empty: D.Callbacks("once memory").add(function() {
                    D.removeData(b, O + "queue", !0), D.removeData(b, d, !0)
                })
            })
        }
    }), D.fn.extend({
        queue: function(b, d) {
            var h = 2;
            return typeof b != "string" && (d = b, b = "fx", h--), arguments.length < h ? D.queue(this[0], b) : d === O ? this : this.each(function() {
                var O = D.queue(this, b, d);
                D._queueHooks(this, b), b === "fx" && O[0] !== "inprogress" && D.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                D.dequeue(this, b)
            })
        },
        delay: function(b, O) {
            return b = D.fx ? D.fx.speeds[b] || b : b, O = O || "fx", this.queue(O, function(O, d) {
                var h = setTimeout(O, b);
                d.stop = function() {
                    clearTimeout(h)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, d) {
            var h, bg = 1,
                c = D.Deferred(),
                A = this,
                e = this.length,
                cb = function() {
                    --bg || c.resolveWith(A, [A])
                };
            typeof b != "string" && (d = b, b = O), b = b || "fx";
            while (e--) h = D._data(A[e], b + "queueHooks"), h && h.empty && (bg++, h.empty.add(cb));
            return cb(), c.promise(d)
        }
    });
    var Y, Z, $, _ = /[\t\r\n]/g,
        bb = /\r/g,
        Ob = /^(?:button|input)$/i,
        db = /^(?:button|input|object|select|textarea)$/i,
        hb = /^a(?:rea|)$/i,
        bgb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ab = D.support.getSetAttribute;
    D.fn.extend({
        attr: function(b, O) {
            return D.access(this, D.attr, b, O, arguments.length > 1)
        },
        removeAttr: function(b) {
            return this.each(function() {
                D.removeAttr(this, b)
            })
        },
        prop: function(b, O) {
            return D.access(this, D.prop, b, O, arguments.length > 1)
        },
        removeProp: function(b) {
            return b = D.propFix[b] || b, this.each(function() {
                try {
                    this[b] = O, delete this[b]
                } catch (b) {}
            })
        },
        addClass: function(b) {
            var O, d, h, bg, c, A, e;
            if (D.isFunction(b)) return this.each(function(O) {
                D(this).addClass(b.call(this, O, this.className))
            });
            if (b && typeof b == "string") {
                O = b.split(G);
                for (d = 0, h = this.length; d < h; d++) {
                    bg = this[d];
                    if (bg.nodeType === 1)
                        if (!bg.className && O.length === 1) bg.className = b;
                        else {
                            c = " " + bg.className + " ";
                            for (A = 0, e = O.length; A < e; A++) c.indexOf(" " + O[A] + " ") < 0 && (c += O[A] + " ");
                            bg.className = D.trim(c)
                        }
                }
            }
            return this
        },
        removeClass: function(b) {
            var d, h, bg, c, A, e, cb;
            if (D.isFunction(b)) return this.each(function(O) {
                D(this).removeClass(b.call(this, O, this.className))
            });
            if (b && typeof b == "string" || b === O) {
                d = (b || "").split(G);
                for (e = 0, cb = this.length; e < cb; e++) {
                    bg = this[e];
                    if (bg.nodeType === 1 && bg.className) {
                        h = (" " + bg.className + " ").replace(_, " ");
                        for (c = 0, A = d.length; c < A; c++)
                            while (h.indexOf(" " + d[c] + " ") >= 0) h = h.replace(" " + d[c] + " ", " ");
                        bg.className = b ? D.trim(h) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(b, O) {
            var d = typeof b,
                h = typeof O == "boolean";
            return D.isFunction(b) ? this.each(function(d) {
                D(this).toggleClass(b.call(this, d, this.className, O), O)
            }) : this.each(function() {
                if (d === "string") {
                    var bg, c = 0,
                        A = D(this),
                        e = O,
                        cb = b.split(G);
                    while (bg = cb[c++]) e = h ? e : !A.hasClass(bg), A[e ? "addClass" : "removeClass"](bg)
                } else if (d === "undefined" || d === "boolean") this.className && D._data(this, "__className__", this.className), this.className = this.className || b === !1 ? "" : D._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            var O = " " + b + " ",
                d = 0,
                h = this.length;
            for (; d < h; d++)
                if (this[d].nodeType === 1 && (" " + this[d].className + " ").replace(_, " ").indexOf(O) >= 0) return !0;
            return !1
        },
        val: function(b) {
            var d, h, bg, c = this[0];
            if (!arguments.length) {
                if (c) return d = D.valHooks[c.type] || D.valHooks[c.nodeName.toLowerCase()], d && "get" in d && (h = d.get(c, "value")) !== O ? h : (h = c.value, typeof h == "string" ? h.replace(bb, "") : h == null ? "" : h);
                return
            }
            return bg = D.isFunction(b), this.each(function(h) {
                var c, A = D(this);
                if (this.nodeType !== 1) return;
                bg ? c = b.call(this, h, A.val()) : c = b, c == null ? c = "" : typeof c == "number" ? c += "" : D.isArray(c) && (c = D.map(c, function(b) {
                    return b == null ? "" : b + ""
                })), d = D.valHooks[this.type] || D.valHooks[this.nodeName.toLowerCase()];
                if (!d || !("set" in d) || d.set(this, c, "value") === O) this.value = c
            })
        }
    }), D.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var O = b.attributes.value;
                    return !O || O.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var O, d, h = b.options,
                        bg = b.selectedIndex,
                        c = b.type === "select-one" || bg < 0,
                        A = c ? null : [],
                        e = c ? bg + 1 : h.length,
                        cb = bg < 0 ? e : c ? bg : 0;
                    for (; cb < e; cb++) {
                        d = h[cb];
                        if ((d.selected || cb === bg) && (D.support.optDisabled ? !d.disabled : d.getAttribute("disabled") === null) && (!d.parentNode.disabled || !D.nodeName(d.parentNode, "optgroup"))) {
                            O = D(d).val();
                            if (c) return O;
                            A.push(O)
                        }
                    }
                    return A
                },
                set: function(b, O) {
                    var d = D.makeArray(O);
                    return D(b).find("option").each(function() {
                        this.selected = D.inArray(D(this).val(), d) >= 0
                    }), d.length || (b.selectedIndex = -1), d
                }
            }
        },
        attrFn: {},
        attr: function(b, d, h, bg) {
            var c, A, e, cb = b.nodeType;
            if (!b || cb === 3 || cb === 8 || cb === 2) return;
            if (bg && D.isFunction(D.fn[d])) return D(b)[d](h);
            if (typeof b.getAttribute == "undefined") return D.prop(b, d, h);
            e = cb !== 1 || !D.isXMLDoc(b), e && (d = d.toLowerCase(), A = D.attrHooks[d] || (bgb.test(d) ? Z : Y));
            if (h !== O) {
                if (h === null) {
                    D.removeAttr(b, d);
                    return
                }
                return A && "set" in A && e && (c = A.set(b, h, d)) !== O ? c : (b.setAttribute(d, h + ""), h)
            }
            return A && "get" in A && e && (c = A.get(b, d)) !== null ? c : (c = b.getAttribute(d), c === null ? O : c)
        },
        removeAttr: function(b, O) {
            var d, h, bg, c, A = 0;
            if (O && b.nodeType === 1) {
                h = O.split(G);
                for (; A < h.length; A++) bg = h[A], bg && (d = D.propFix[bg] || bg, c = bgb.test(bg), c || D.attr(b, bg, ""), b.removeAttribute(Ab ? bg : d), c && d in b && (b[d] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(b, O) {
                    if (Ob.test(b.nodeName) && b.parentNode) D.error("type property can't be changed");
                    else if (!D.support.radioValue && O === "radio" && D.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", O), d && (b.value = d), O
                    }
                }
            },
            value: {
                get: function(b, O) {
                    return Y && D.nodeName(b, "button") ? Y.get(b, O) : O in b ? b.value : null
                },
                set: function(b, O, d) {
                    if (Y && D.nodeName(b, "button")) return Y.set(b, O, d);
                    b.value = O
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, d, h) {
            var bg, c, A, e = b.nodeType;
            if (!b || e === 3 || e === 8 || e === 2) return;
            return A = e !== 1 || !D.isXMLDoc(b), A && (d = D.propFix[d] || d, c = D.propHooks[d]), h !== O ? c && "set" in c && (bg = c.set(b, h, d)) !== O ? bg : b[d] = h : c && "get" in c && (bg = c.get(b, d)) !== null ? bg : b[d]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var d = b.getAttributeNode("tabindex");
                    return d && d.specified ? parseInt(d.value, 10) : db.test(b.nodeName) || hb.test(b.nodeName) && b.href ? 0 : O
                }
            }
        }
    }), Z = {
        get: function(b, d) {
            var h, bg = D.prop(b, d);
            return bg === !0 || typeof bg != "boolean" && (h = b.getAttributeNode(d)) && h.nodeValue !== !1 ? d.toLowerCase() : O
        },
        set: function(b, O, d) {
            var h;
            return O === !1 ? D.removeAttr(b, d) : (h = D.propFix[d] || d, h in b && (b[h] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
    }, Ab || ($ = {
        name: !0,
        id: !0,
        coords: !0
    }, Y = D.valHooks.button = {
        get: function(b, d) {
            var h;
            return h = b.getAttributeNode(d), h && ($[d] ? h.value !== "" : h.specified) ? h.value : O
        },
        set: function(b, O, d) {
            var h = b.getAttributeNode(d);
            return h || (h = q.createAttribute(d), b.setAttributeNode(h)), h.value = O + ""
        }
    }, D.each(["width", "height"], function(b, O) {
        D.attrHooks[O] = D.extend(D.attrHooks[O], {
            set: function(b, d) {
                if (d === "") return b.setAttribute(O, "auto"), d
            }
        })
    }), D.attrHooks.contenteditable = {
        get: Y.get,
        set: function(b, O, d) {
            O === "" && (O = "false"), Y.set(b, O, d)
        }
    }), D.support.hrefNormalized || D.each(["href", "src", "width", "height"], function(b, d) {
        D.attrHooks[d] = D.extend(D.attrHooks[d], {
            get: function(b) {
                var h = b.getAttribute(d, 2);
                return h === null ? O : h
            }
        })
    }), D.support.style || (D.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || O
        },
        set: function(b, O) {
            return b.style.cssText = O + ""
        }
    }), D.support.optSelected || (D.propHooks.selected = D.extend(D.propHooks.selected, {
        get: function(b) {
            var O = b.parentNode;
            return O && (O.selectedIndex, O.parentNode && O.parentNode.selectedIndex), null
        }
    })), D.support.enctype || (D.propFix.enctype = "encoding"), D.support.checkOn || D.each(["radio", "checkbox"], function() {
        D.valHooks[this] = {
            get: function(b) {
                return b.getAttribute("value") === null ? "on" : b.value
            }
        }
    }), D.each(["radio", "checkbox"], function() {
        D.valHooks[this] = D.extend(D.valHooks[this], {
            set: function(b, O) {
                if (D.isArray(O)) return b.checked = D.inArray(D(b).val(), O) >= 0
            }
        })
    });
    var eb = /^(?:textarea|input|select)$/i,
        cbb = /^([^\.]*|)(?:\.(.+)|)$/,
        Bb = /(?:^|\s)hover(\.\S+|)\b/,
        ddb = /^key/,
        ab = /^(?:mouse|contextmenu)|click/,
        jb = /^(?:focusinfocus|focusoutblur)$/,
        bEb = function(b) {
            return D.event.special.hover ? b : b.replace(Bb, "mouseenter$1 mouseleave$1")
        };
    D.event = {
            add: function(b, d, h, bg, c) {
                var A, e, cb, B, dd, a, j, bE, bf, dG, ca;
                if (b.nodeType === 3 || b.nodeType === 8 || !d || !h || !(A = D._data(b))) return;
                h.handler && (bf = h, h = bf.handler, c = bf.selector), h.guid || (h.guid = D.guid++), cb = A.events, cb || (A.events = cb = {}), e = A.handle, e || (A.handle = e = function(b) {
                    return typeof D == "undefined" || !!b && D.event.triggered === b.type ? O : D.event.dispatch.apply(e.elem, arguments)
                }, e.elem = b), d = D.trim(bEb(d)).split(" ");
                for (B = 0; B < d.length; B++) {
                    dd = cbb.exec(d[B]) || [], a = dd[1], j = (dd[2] || "").split(".").sort(), ca = D.event.special[a] || {}, a = (c ? ca.delegateType : ca.bindType) || a, ca = D.event.special[a] || {}, bE = D.extend({
                        type: a,
                        origType: dd[1],
                        data: bg,
                        handler: h,
                        guid: h.guid,
                        selector: c,
                        needsContext: c && D.expr.match.needsContext.test(c),
                        namespace: j.join(".")
                    }, bf), dG = cb[a];
                    if (!dG) {
                        dG = cb[a] = [], dG.delegateCount = 0;
                        if (!ca.setup || ca.setup.call(b, bg, j, e) === !1) b.addEventListener ? b.addEventListener(a, e, !1) : b.attachEvent && b.attachEvent("on" + a, e)
                    }
                    ca.add && (ca.add.call(b, bE), bE.handler.guid || (bE.handler.guid = h.guid)), c ? dG.splice(dG.delegateCount++, 0, bE) : dG.push(bE), D.event.global[a] = !0
                }
                b = null
            },
            global: {},
            remove: function(b, O, d, h, bg) {
                var c, A, e, cb, B, dd, a, j, bE, bf, dG, ca = D.hasData(b) && D._data(b);
                if (!ca || !(j = ca.events)) return;
                O = D.trim(bEb(O || "")).split(" ");
                for (c = 0; c < O.length; c++) {
                    A = cbb.exec(O[c]) || [], e = cb = A[1], B = A[2];
                    if (!e) {
                        for (e in j) D.event.remove(b, e + O[c], d, h, !0);
                        continue
                    }
                    bE = D.event.special[e] || {}, e = (h ? bE.delegateType : bE.bindType) || e, bf = j[e] || [], dd = bf.length, B = B ? new RegExp("(^|\\.)" + B.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (a = 0; a < bf.length; a++) dG = bf[a], (bg || cb === dG.origType) && (!d || d.guid === dG.guid) && (!B || B.test(dG.namespace)) && (!h || h === dG.selector || h === "**" && dG.selector) && (bf.splice(a--, 1), dG.selector && bf.delegateCount--, bE.remove && bE.remove.call(b, dG));
                    bf.length === 0 && dd !== bf.length && ((!bE.teardown || bE.teardown.call(b, B, ca.handle) === !1) && D.removeEvent(b, e, ca.handle), delete j[e])
                }
                D.isEmptyObject(j) && (delete ca.handle, D.removeData(b, "events", !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(d, h, bg, c) {
                if (!bg || bg.nodeType !== 3 && bg.nodeType !== 8) {
                    var A, e, cb, B, dd, a, j, bE, bf, dG, ca = d.type || d,
                        cH = [];
                    if (jb.test(ca + D.event.triggered)) return;
                    ca.indexOf("!") >= 0 && (ca = ca.slice(0, -1), e = !0), ca.indexOf(".") >= 0 && (cH = ca.split("."), ca = cH.shift(), cH.sort());
                    if ((!bg || D.event.customEvent[ca]) && !D.event.global[ca]) return;
                    d = typeof d == "object" ? d[D.expando] ? d : new D.Event(ca, d) : new D.Event(ca), d.type = ca, d.isTrigger = !0, d.exclusive = e, d.namespace = cH.join("."), d.namespace_re = d.namespace ? new RegExp("(^|\\.)" + cH.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a = ca.indexOf(":") < 0 ? "on" + ca : "";
                    if (!bg) {
                        A = D.cache;
                        for (cb in A) A[cb].events && A[cb].events[ca] && D.event.trigger(d, h, A[cb].handle.elem, !0);
                        return
                    }
                    d.result = O, d.target || (d.target = bg), h = h != null ? D.makeArray(h) : [], h.unshift(d), j = D.event.special[ca] || {};
                    if (j.trigger && j.trigger.apply(bg, h) === !1) return;
                    bf = [
                        [bg, j.bindType || ca]
                    ];
                    if (!c && !j.noBubble && !D.isWindow(bg)) {
                        dG = j.delegateType || ca, B = jb.test(dG + ca) ? bg : bg.parentNode;
                        for (dd = bg; B; B = B.parentNode) bf.push([B, dG]), dd = B;
                        dd === (bg.ownerDocument || q) && bf.push([dd.defaultView || dd.parentWindow || b, dG])
                    }
                    for (cb = 0; cb < bf.length && !d.isPropagationStopped(); cb++) B = bf[cb][0], d.type = bf[cb][1], bE = (D._data(B, "events") || {})[d.type] && D._data(B, "handle"), bE && bE.apply(B, h), bE = a && B[a], bE && D.acceptData(B) && bE.apply && bE.apply(B, h) === !1 && d.preventDefault();
                    return d.type = ca, !c && !d.isDefaultPrevented() && (!j._default || j._default.apply(bg.ownerDocument, h) === !1) && (ca !== "click" || !D.nodeName(bg, "a")) && D.acceptData(bg) && a && bg[ca] && (ca !== "focus" && ca !== "blur" || d.target.offsetWidth !== 0) && !D.isWindow(bg) && (dd = bg[a], dd && (bg[a] = null), D.event.triggered = ca, bg[ca](), D.event.triggered = O, dd && (bg[a] = dd)), d.result
                }
                return
            },
            dispatch: function(d) {
                d = D.event.fix(d || b.event);
                var h, bg, c, A, e, cb, B, dd, a, j, bE = (D._data(this, "events") || {})[d.type] || [],
                    bf = bE.delegateCount,
                    dG = w.call(arguments),
                    ca = !d.exclusive && !d.namespace,
                    cH = D.event.special[d.type] || {},
                    dh = [];
                dG[0] = d, d.delegateTarget = this;
                if (cH.preDispatch && cH.preDispatch.call(this, d) === !1) return;
                if (bf && (!d.button || d.type !== "click"))
                    for (c = d.target; c != this; c = c.parentNode || this)
                        if (c.disabled !== !0 || d.type !== "click") {
                            e = {}, B = [];
                            for (h = 0; h < bf; h++) dd = bE[h], a = dd.selector, e[a] === O && (e[a] = dd.needsContext ? D(a, this).index(c) >= 0 : D.find(a, this, null, [c]).length), e[a] && B.push(dd);
                            B.length && dh.push({
                                elem: c,
                                matches: B
                            })
                        } bE.length > bf && dh.push({
                    elem: this,
                    matches: bE.slice(bf)
                });
                for (h = 0; h < dh.length && !d.isPropagationStopped(); h++) {
                    cb = dh[h], d.currentTarget = cb.elem;
                    for (bg = 0; bg < cb.matches.length && !d.isImmediatePropagationStopped(); bg++) {
                        dd = cb.matches[bg];
                        if (ca || !d.namespace && !dd.namespace || d.namespace_re && d.namespace_re.test(dd.namespace)) d.data = dd.data, d.handleObj = dd, A = ((D.event.special[dd.origType] || {}).handle || dd.handler).apply(cb.elem, dG), A !== O && (d.result = A, A === !1 && (d.preventDefault(), d.stopPropagation()))
                    }
                }
                return cH.postDispatch && cH.postDispatch.call(this, d), d.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(b, O) {
                    return b.which == null && (b.which = O.charCode != null ? O.charCode : O.keyCode), b
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(b, d) {
                    var h, bg, c, A = d.button,
                        e = d.fromElement;
                    return b.pageX == null && d.clientX != null && (h = b.target.ownerDocument || q, bg = h.documentElement, c = h.body, b.pageX = d.clientX + (bg && bg.scrollLeft || c && c.scrollLeft || 0) - (bg && bg.clientLeft || c && c.clientLeft || 0), b.pageY = d.clientY + (bg && bg.scrollTop || c && c.scrollTop || 0) - (bg && bg.clientTop || c && c.clientTop || 0)), !b.relatedTarget && e && (b.relatedTarget = e === b.target ? d.toElement : e), !b.which && A !== O && (b.which = A & 1 ? 1 : A & 2 ? 3 : A & 4 ? 2 : 0), b
                }
            },
            fix: function(b) {
                if (b[D.expando]) return b;
                var O, d, h = b,
                    bg = D.event.fixHooks[b.type] || {},
                    c = bg.props ? this.props.concat(bg.props) : this.props;
                b = D.Event(h);
                for (O = c.length; O;) d = c[--O], b[d] = h[d];
                return b.target || (b.target = h.srcElement || q), b.target.nodeType === 3 && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, bg.filter ? bg.filter(b, h) : b
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(b, O, d) {
                        D.isWindow(this) && (this.onbeforeunload = d)
                    },
                    teardown: function(b, O) {
                        this.onbeforeunload === O && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(b, O, d, h) {
                var bg = D.extend(new D.Event, d, {
                    type: b,
                    isSimulated: !0,
                    originalEvent: {}
                });
                h ? D.event.trigger(bg, null, O) : D.event.dispatch.call(O, bg), bg.isDefaultPrevented() && d.preventDefault()
            }
        }, D.event.handle = D.event.dispatch, D.removeEvent = q.removeEventListener ? function(b, O, d) {
            b.removeEventListener && b.removeEventListener(O, d, !1)
        } : function(b, O, d) {
            var h = "on" + O;
            b.detachEvent && (typeof b[h] == "undefined" && (b[h] = null), b.detachEvent(h, d))
        }, D.Event = function(b, O) {
            if (!(this instanceof D.Event)) return new D.Event(b, O);
            b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || b.returnValue === !1 || b.getPreventDefault && b.getPreventDefault() ? A : c) : this.type = b, O && D.extend(this, O), this.timeStamp = b && b.timeStamp || D.now(), this[D.expando] = !0
        }, D.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = A;
                var b = this.originalEvent;
                if (!b) return;
                b.preventDefault ? b.preventDefault() : b.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = A;
                var b = this.originalEvent;
                if (!b) return;
                b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = A, this.stopPropagation()
            },
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c
        }, D.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(b, O) {
            D.event.special[b] = {
                delegateType: O,
                bindType: O,
                handle: function(b) {
                    var d, h = this,
                        bg = b.relatedTarget,
                        c = b.handleObj,
                        A = c.selector;
                    if (!bg || bg !== h && !D.contains(h, bg)) b.type = c.origType, d = c.handler.apply(this, arguments), b.type = O;
                    return d
                }
            }
        }), D.support.submitBubbles || (D.event.special.submit = {
            setup: function() {
                if (D.nodeName(this, "form")) return !1;
                D.event.add(this, "click._submit keypress._submit", function(b) {
                    var d = b.target,
                        h = D.nodeName(d, "input") || D.nodeName(d, "button") ? d.form : O;
                    h && !D._data(h, "_submit_attached") && (D.event.add(h, "submit._submit", function(b) {
                        b._submit_bubble = !0
                    }), D._data(h, "_submit_attached", !0))
                })
            },
            postDispatch: function(b) {
                b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && D.event.simulate("submit", this.parentNode, b, !0))
            },
            teardown: function() {
                if (D.nodeName(this, "form")) return !1;
                D.event.remove(this, "._submit")
            }
        }), D.support.changeBubbles || (D.event.special.change = {
            setup: function() {
                if (eb.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") D.event.add(this, "propertychange._change", function(b) {
                        b.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), D.event.add(this, "click._change", function(b) {
                        this._just_changed && !b.isTrigger && (this._just_changed = !1), D.event.simulate("change", this, b, !0)
                    });
                    return !1
                }
                D.event.add(this, "beforeactivate._change", function(b) {
                    var O = b.target;
                    eb.test(O.nodeName) && !D._data(O, "_change_attached") && (D.event.add(O, "change._change", function(b) {
                        this.parentNode && !b.isSimulated && !b.isTrigger && D.event.simulate("change", this.parentNode, b, !0)
                    }), D._data(O, "_change_attached", !0))
                })
            },
            handle: function(b) {
                var O = b.target;
                if (this !== O || b.isSimulated || b.isTrigger || O.type !== "radio" && O.type !== "checkbox") return b.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return D.event.remove(this, "._change"), !eb.test(this.nodeName)
            }
        }), D.support.focusinBubbles || D.each({
            focus: "focusin",
            blur: "focusout"
        }, function(b, O) {
            var d = 0,
                h = function(b) {
                    D.event.simulate(O, b.target, D.event.fix(b), !0)
                };
            D.event.special[O] = {
                setup: function() {
                    d++ === 0 && q.addEventListener(b, h, !0)
                },
                teardown: function() {
                    --d === 0 && q.removeEventListener(b, h, !0)
                }
            }
        }), D.fn.extend({
            on: function(b, d, h, bg, A) {
                var e, cb;
                if (typeof b == "object") {
                    typeof d != "string" && (h = h || d, d = O);
                    for (cb in b) this.on(cb, d, h, b[cb], A);
                    return this
                }
                h == null && bg == null ? (bg = d, h = d = O) : bg == null && (typeof d == "string" ? (bg = h, h = O) : (bg = h, h = d, d = O));
                if (bg === !1) bg = c;
                else if (!bg) return this;
                return A === 1 && (e = bg, bg = function(b) {
                    return D().off(b), e.apply(this, arguments)
                }, bg.guid = e.guid || (e.guid = D.guid++)), this.each(function() {
                    D.event.add(this, b, bg, h, d)
                })
            },
            one: function(b, O, d, h) {
                return this.on(b, O, d, h, 1)
            },
            off: function(b, d, h) {
                var bg, A;
                if (b && b.preventDefault && b.handleObj) return bg = b.handleObj, D(b.delegateTarget).off(bg.namespace ? bg.origType + "." + bg.namespace : bg.origType, bg.selector, bg.handler), this;
                if (typeof b == "object") {
                    for (A in b) this.off(A, d, b[A]);
                    return this
                }
                if (d === !1 || typeof d == "function") h = d, d = O;
                return h === !1 && (h = c), this.each(function() {
                    D.event.remove(this, b, h, d)
                })
            },
            bind: function(b, O, d) {
                return this.on(b, null, O, d)
            },
            unbind: function(b, O) {
                return this.off(b, null, O)
            },
            live: function(b, O, d) {
                return D(this.context).on(b, this.selector, O, d), this
            },
            die: function(b, O) {
                return D(this.context).off(b, this.selector || "**", O), this
            },
            delegate: function(b, O, d, h) {
                return this.on(O, b, d, h)
            },
            undelegate: function(b, O, d) {
                return arguments.length === 1 ? this.off(b, "**") : this.off(O, b || "**", d)
            },
            trigger: function(b, O) {
                return this.each(function() {
                    D.event.trigger(b, O, this)
                })
            },
            triggerHandler: function(b, O) {
                if (this[0]) return D.event.trigger(b, O, this[0], !0)
            },
            toggle: function(b) {
                var O = arguments,
                    d = b.guid || D.guid++,
                    h = 0,
                    bg = function(d) {
                        var bg = (D._data(this, "lastToggle" + b.guid) || 0) % h;
                        return D._data(this, "lastToggle" + b.guid, bg + 1), d.preventDefault(), O[bg].apply(this, arguments) || !1
                    };
                bg.guid = d;
                while (h < O.length) O[h++].guid = d;
                return this.click(bg)
            },
            hover: function(b, O) {
                return this.mouseenter(b).mouseleave(O || b)
            }
        }), D.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, O) {
            D.fn[O] = function(b, d) {
                return d == null && (d = b, b = null), arguments.length > 0 ? this.on(O, null, b, d) : this.trigger(O)
            }, ddb.test(O) && (D.event.fixHooks[O] = D.event.keyHooks), ab.test(O) && (D.event.fixHooks[O] = D.event.mouseHooks)
        }),
        function(b, O) {
            function d(b, O, d, h) {
                d = d || [], O = O || bG;
                var bg, c, A, e, cb = O.nodeType;
                if (!b || typeof b != "string") return d;
                if (cb !== 1 && cb !== 9) return [];
                A = g(O);
                if (!A && !h)
                    if (bg = H.exec(b))
                        if (e = bg[1]) {
                            if (cb === 9) {
                                c = O.getElementById(e);
                                if (!c || !c.parentNode) return d;
                                if (c.id === e) return d.push(c), d
                            } else if (O.ownerDocument && (c = O.ownerDocument.getElementById(e)) && I(O, c) && c.id === e) return d.push(c), d
                        } else {
                            if (bg[2]) return l.apply(d, m.call(O.getElementsByTagName(b), 0)), d;
                            if ((e = bg[3]) && V && O.getElementsByClassName) return l.apply(d, m.call(O.getElementsByClassName(e), 0)), d
                        } return dG(b.replace(C, "$1"), O, d, h, A)
            }

            function h(b) {
                return function(O) {
                    var d = O.nodeName.toLowerCase();
                    return d === "input" && O.type === b
                }
            }

            function bg(b) {
                return function(O) {
                    var d = O.nodeName.toLowerCase();
                    return (d === "input" || d === "button") && O.type === b
                }
            }

            function c(b) {
                return o(function(O) {
                    return O = +O, o(function(d, h) {
                        var bg, c = b([], d.length, O),
                            A = c.length;
                        while (A--) d[bg = c[A]] && (d[bg] = !(h[bg] = d[bg]))
                    })
                })
            }

            function A(b, O, d) {
                if (b === O) return d;
                var h = b.nextSibling;
                while (h) {
                    if (h === O) return -1;
                    h = h.nextSibling
                }
                return 1
            }

            function e(b, O) {
                var h, bg, c, A, e, cb, B, dd = r[eD][b + " "];
                if (dd) return O ? 0 : dd.slice(0);
                e = b, cb = [], B = bB.preFilter;
                while (e) {
                    if (!h || (bg = E.exec(e))) bg && (e = e.slice(bg[0].length) || e), cb.push(c = []);
                    h = !1;
                    if (bg = F.exec(e)) c.push(h = new ba(bg.shift())), e = e.slice(h.length), h.type = bg[0].replace(C, " ");
                    for (A in bB.filter)(bg = Q[A].exec(e)) && (!B[A] || (bg = B[A](bg))) && (c.push(h = new ba(bg.shift())), e = e.slice(h.length), h.type = A, h.matches = bg);
                    if (!h) break
                }
                return O ? e.length : e ? d.error(b) : r(b, cb).slice(0)
            }

            function cb(b, O, d) {
                var h = O.dir,
                    bg = d && O.dir === "parentNode",
                    c = i++;
                return O.first ? function(O, d, c) {
                    while (O = O[h])
                        if (bg || O.nodeType === 1) return b(O, d, c)
                } : function(O, d, A) {
                    if (!A) {
                        var e, cb = gR + " " + c + " ",
                            B = cb + cH;
                        while (O = O[h])
                            if (bg || O.nodeType === 1) {
                                if ((e = O[eD]) === B) return O.sizset;
                                if (typeof e == "string" && e.indexOf(cb) === 0) {
                                    if (O.sizset) return O
                                } else {
                                    O[eD] = B;
                                    if (b(O, d, A)) return O.sizset = !0, O;
                                    O.sizset = !1
                                }
                            }
                    } else
                        while (O = O[h])
                            if (bg || O.nodeType === 1)
                                if (b(O, d, A)) return O
                }
            }

            function B(b) {
                return b.length > 1 ? function(O, d, h) {
                    var bg = b.length;
                    while (bg--)
                        if (!b[bg](O, d, h)) return !1;
                    return !0
                } : b[0]
            }

            function dd(b, O, d, h, bg) {
                var c, A = [],
                    e = 0,
                    cb = b.length,
                    B = O != null;
                for (; e < cb; e++)
                    if (c = b[e])
                        if (!d || d(c, h, bg)) A.push(c), B && O.push(e);
                return A
            }

            function a(b, O, d, h, bg, c) {
                return h && !h[eD] && (h = a(h)), bg && !bg[eD] && (bg = a(bg, c)), o(function(c, A, e, cb) {
                    var B, a, j, bE = [],
                        dG = [],
                        ca = A.length,
                        cH = c || bf(O || "*", e.nodeType ? [e] : e, []),
                        dh = b && (c || !O) ? dd(cH, bE, b, e, cb) : cH,
                        bB = d ? bg || (c ? b : ca || h) ? [] : A : dh;
                    d && d(dh, bB, e, cb);
                    if (h) {
                        B = dd(bB, dG), h(B, [], e, cb), a = B.length;
                        while (a--)
                            if (j = B[a]) bB[dG[a]] = !(dh[dG[a]] = j)
                    }
                    if (c) {
                        if (bg || b) {
                            if (bg) {
                                B = [], a = bB.length;
                                while (a--)(j = bB[a]) && B.push(dh[a] = j);
                                bg(null, bB = [], B, cb)
                            }
                            a = bB.length;
                            while (a--)(j = bB[a]) && (B = bg ? n.call(c, j) : bE[a]) > -1 && (c[B] = !(A[B] = j))
                        }
                    } else bB = dd(bB === A ? bB.splice(ca, bB.length) : bB), bg ? bg(null, A, bB, cb) : l.apply(A, bB)
                })
            }

            function j(b) {
                var O, d, h, bg = b.length,
                    c = bB.relative[b[0].type],
                    A = c || bB.relative[" "],
                    e = c ? 1 : 0,
                    dd = cb(function(b) {
                        return b === O
                    }, A, !0),
                    bE = cb(function(b) {
                        return n.call(O, b) > -1
                    }, A, !0),
                    bf = [function(b, d, h) {
                        return !c && (h || d !== f) || ((O = d).nodeType ? dd(b, d, h) : bE(b, d, h))
                    }];
                for (; e < bg; e++)
                    if (d = bB.relative[b[e].type]) bf = [cb(B(bf), d)];
                    else {
                        d = bB.filter[b[e].type].apply(null, b[e].matches);
                        if (d[eD]) {
                            h = ++e;
                            for (; h < bg; h++)
                                if (bB.relative[b[h].type]) break;
                            return a(e > 1 && B(bf), e > 1 && b.slice(0, e - 1).join("").replace(C, "$1"), d, e < h && j(b.slice(e, h)), h < bg && j(b = b.slice(h)), h < bg && b.join(""))
                        }
                        bf.push(d)
                    } return B(bf)
            }

            function bE(b, O) {
                var h = O.length > 0,
                    bg = b.length > 0,
                    c = function(A, e, cb, B, a) {
                        var j, bE, bf, dG = [],
                            ca = 0,
                            dh = "0",
                            cd = A && [],
                            g = a != null,
                            I = f,
                            ea = A || bg && bB.find.TAG("*", a && e.parentNode || e),
                            gX = gR += I == null ? 1 : Math.E;
                        g && (f = e !== bG && e, cH = c.el);
                        for (;
                            (j = ea[dh]) != null; dh++) {
                            if (bg && j) {
                                for (bE = 0; bf = b[bE]; bE++)
                                    if (bf(j, e, cb)) {
                                        B.push(j);
                                        break
                                    } g && (gR = gX, cH = ++c.el)
                            }
                            h && ((j = !bf && j) && ca--, A && cd.push(j))
                        }
                        ca += dh;
                        if (h && dh !== ca) {
                            for (bE = 0; bf = O[bE]; bE++) bf(cd, dG, e, cb);
                            if (A) {
                                if (ca > 0)
                                    while (dh--) !cd[dh] && !dG[dh] && (dG[dh] = k.call(B));
                                dG = dd(dG)
                            }
                            l.apply(B, dG), g && !A && dG.length > 0 && ca + O.length > 1 && d.uniqueSort(B)
                        }
                        return g && (gR = gX, f = I), cd
                    };
                return c.el = 0, h ? o(c) : c
            }

            function bf(b, O, h) {
                var bg = 0,
                    c = O.length;
                for (; bg < c; bg++) d(b, O[bg], h);
                return h
            }

            function dG(b, O, d, h, bg) {
                var c, A, cb, B, dd, a = e(b),
                    j = a.length;
                if (!h && a.length === 1) {
                    A = a[0] = a[0].slice(0);
                    if (A.length > 2 && (cb = A[0]).type === "ID" && O.nodeType === 9 && !bg && bB.relative[A[1].type]) {
                        O = bB.find.ID(cb.matches[0].replace(P, ""), O, bg)[0];
                        if (!O) return d;
                        b = b.slice(A.shift().length)
                    }
                    for (c = Q.POS.test(b) ? -1 : A.length - 1; c >= 0; c--) {
                        cb = A[c];
                        if (bB.relative[B = cb.type]) break;
                        if (dd = bB.find[B])
                            if (h = dd(cb.matches[0].replace(P, ""), K.test(A[0].type) && O.parentNode || O, bg)) {
                                A.splice(c, 1), b = h.length && A.join("");
                                if (!b) return l.apply(d, m.call(h, 0)), d;
                                break
                            }
                    }
                }
                return ea(b, a)(h, O, bg, d, K.test(b)), d
            }

            function ca() {}
            var cH, dh, bB, cd, g, I, ea, gX, aZ, f, Ac = !0,
                cdM = "undefined",
                eD = ("sizcache" + Math.random()).replace(".", ""),
                ba = String,
                bG = b.document,
                bS = bG.documentElement,
                gR = 0,
                i = 0,
                k = [].pop,
                l = [].push,
                m = [].slice,
                n = [].indexOf || function(b) {
                    var O = 0,
                        d = this.length;
                    for (; O < d; O++)
                        if (this[O] === b) return O;
                    return -1
                },
                o = function(b, O) {
                    return b[eD] = O == null || O, b
                },
                p = function() {
                    var b = {},
                        O = [];
                    return o(function(d, h) {
                        return O.push(d) > bB.cacheLength && delete b[O.shift()], b[d + " "] = h
                    }, b)
                },
                q = p(),
                r = p(),
                s = p(),
                t = "[\\x20\\t\\r\\n\\f]",
                u = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                v = u.replace("w", "w#"),
                w = "([*^$|!~]?=)",
                x = "\\[" + t + "*(" + u + ")" + t + "*(?:" + w + t + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + v + ")|)|)" + t + "*\\]",
                y = ":(" + u + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + x + ")|[^:]|\\\\.)*|.*))\\)|)",
                z = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + t + "*((?:-\\d)?\\d*)" + t + "*\\)|)(?=[^-]|$)",
                C = new RegExp("^" + t + "+|((?:^|[^\\\\])(?:\\\\.)*)" + t + "+$", "g"),
                E = new RegExp("^" + t + "*," + t + "*"),
                F = new RegExp("^" + t + "*([\\x20\\t\\r\\n\\f>+~])" + t + "*"),
                G = new RegExp(y),
                H = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                J = /^:not/,
                K = /[\x20\t\r\n\f]*[+~]/,
                L = /:not\($/,
                M = /h\d/i,
                N = /input|select|textarea|button/i,
                P = /\\(?!\\)/g,
                Q = {
                    ID: new RegExp("^#(" + u + ")"),
                    CLASS: new RegExp("^\\.(" + u + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + u + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + u.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + x),
                    PSEUDO: new RegExp("^" + y),
                    POS: new RegExp(z, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + t + "*(even|odd|(([+-]|)(\\d*)n|)" + t + "*(?:([+-]|)" + t + "*(\\d+)|))" + t + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + t + "*[>+~]|" + z, "i")
                },
                R = function(b) {
                    var O = bG.createElement("div");
                    try {
                        return b(O)
                    } catch (b) {
                        return !1
                    } finally {
                        O = null
                    }
                },
                S = R(function(b) {
                    return b.appendChild(bG.createComment("")), !b.getElementsByTagName("*").length
                }),
                T = R(function(b) {
                    return b.innerHTML = "<a href='#'></a>", b.firstChild && typeof b.firstChild.getAttribute !== cdM && b.firstChild.getAttribute("href") === "#"
                }),
                U = R(function(b) {
                    b.innerHTML = "<select></select>";
                    var O = typeof b.lastChild.getAttribute("multiple");
                    return O !== "boolean" && O !== "string"
                }),
                V = R(function(b) {
                    return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", b.getElementsByClassName("e").length === 2)
                }),
                W = R(function(b) {
                    b.id = eD + 0, b.innerHTML = "<a name='" + eD + "'></a><div name='" + eD + "'></div>", bS.insertBefore(b, bS.firstChild);
                    var O = bG.getElementsByName && bG.getElementsByName(eD).length === 2 + bG.getElementsByName(eD + 0).length;
                    return dh = !bG.getElementById(eD), bS.removeChild(b), O
                });
            try {
                m.call(bS.childNodes, 0)[0].nodeType
            } catch (b) {
                m = function(b) {
                    var O, d = [];
                    for (; O = this[b]; b++) d.push(O);
                    return d
                }
            }
            d.matches = function(b, O) {
                return d(b, null, null, O)
            }, d.matchesSelector = function(b, O) {
                return d(O, null, null, [b]).length > 0
            }, cd = d.getText = function(b) {
                var O, d = "",
                    h = 0,
                    bg = b.nodeType;
                if (bg) {
                    if (bg === 1 || bg === 9 || bg === 11) {
                        if (typeof b.textContent == "string") return b.textContent;
                        for (b = b.firstChild; b; b = b.nextSibling) d += cd(b)
                    } else if (bg === 3 || bg === 4) return b.nodeValue
                } else
                    for (; O = b[h]; h++) d += cd(O);
                return d
            }, g = d.isXML = function(b) {
                var O = b && (b.ownerDocument || b).documentElement;
                return O ? O.nodeName !== "HTML" : !1
            }, I = d.contains = bS.contains ? function(b, O) {
                var d = b.nodeType === 9 ? b.documentElement : b,
                    h = O && O.parentNode;
                return b === h || !!(h && h.nodeType === 1 && d.contains && d.contains(h))
            } : bS.compareDocumentPosition ? function(b, O) {
                return O && !!(b.compareDocumentPosition(O) & 16)
            } : function(b, O) {
                while (O = O.parentNode)
                    if (O === b) return !0;
                return !1
            }, d.attr = function(b, O) {
                var d, h = g(b);
                return h || (O = O.toLowerCase()), (d = bB.attrHandle[O]) ? d(b) : h || U ? b.getAttribute(O) : (d = b.getAttributeNode(O), d ? typeof b[O] == "boolean" ? b[O] ? O : null : d.specified ? d.value : null : null)
            }, bB = d.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: Q,
                attrHandle: T ? {} : {
                    href: function(b) {
                        return b.getAttribute("href", 2)
                    },
                    type: function(b) {
                        return b.getAttribute("type")
                    }
                },
                find: {
                    ID: dh ? function(b, O, d) {
                        if (typeof O.getElementById !== cdM && !d) {
                            var h = O.getElementById(b);
                            return h && h.parentNode ? [h] : []
                        }
                    } : function(b, d, h) {
                        if (typeof d.getElementById !== cdM && !h) {
                            var bg = d.getElementById(b);
                            return bg ? bg.id === b || typeof bg.getAttributeNode !== cdM && bg.getAttributeNode("id").value === b ? [bg] : O : []
                        }
                    },
                    TAG: S ? function(b, O) {
                        if (typeof O.getElementsByTagName !== cdM) return O.getElementsByTagName(b)
                    } : function(b, O) {
                        var d = O.getElementsByTagName(b);
                        if (b === "*") {
                            var h, bg = [],
                                c = 0;
                            for (; h = d[c]; c++) h.nodeType === 1 && bg.push(h);
                            return bg
                        }
                        return d
                    },
                    NAME: W && function(b, O) {
                        if (typeof O.getElementsByName !== cdM) return O.getElementsByName(name)
                    },
                    CLASS: V && function(b, O, d) {
                        if (typeof O.getElementsByClassName !== cdM && !d) return O.getElementsByClassName(b)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(b) {
                        return b[1] = b[1].replace(P, ""), b[3] = (b[4] || b[5] || "").replace(P, ""), b[2] === "~=" && (b[3] = " " + b[3] + " "), b.slice(0, 4)
                    },
                    CHILD: function(b) {
                        return b[1] = b[1].toLowerCase(), b[1] === "nth" ? (b[2] || d.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * (b[2] === "even" || b[2] === "odd")), b[4] = +(b[6] + b[7] || b[2] === "odd")) : b[2] && d.error(b[0]), b
                    },
                    PSEUDO: function(b) {
                        var O, d;
                        if (Q.CHILD.test(b[0])) return null;
                        if (b[3]) b[2] = b[3];
                        else if (O = b[4]) G.test(O) && (d = e(O, !0)) && (d = O.indexOf(")", O.length - d) - O.length) && (O = O.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = O;
                        return b.slice(0, 3)
                    }
                },
                filter: {
                    ID: dh ? function(b) {
                        return b = b.replace(P, ""),
                            function(O) {
                                return O.getAttribute("id") === b
                            }
                    } : function(b) {
                        return b = b.replace(P, ""),
                            function(O) {
                                var d = typeof O.getAttributeNode !== cdM && O.getAttributeNode("id");
                                return d && d.value === b
                            }
                    },
                    TAG: function(b) {
                        return b === "*" ? function() {
                            return !0
                        } : (b = b.replace(P, "").toLowerCase(), function(O) {
                            return O.nodeName && O.nodeName.toLowerCase() === b
                        })
                    },
                    CLASS: function(b) {
                        var O = q[eD][b + " "];
                        return O || (O = new RegExp("(^|" + t + ")" + b + "(" + t + "|$)")) && q(b, function(b) {
                            return O.test(b.className || typeof b.getAttribute !== cdM && b.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(b, O, h) {
                        return function(bg, c) {
                            var A = d.attr(bg, b);
                            return A == null ? O === "!=" : O ? (A += "", O === "=" ? A === h : O === "!=" ? A !== h : O === "^=" ? h && A.indexOf(h) === 0 : O === "*=" ? h && A.indexOf(h) > -1 : O === "$=" ? h && A.substr(A.length - h.length) === h : O === "~=" ? (" " + A + " ").indexOf(h) > -1 : O === "|=" ? A === h || A.substr(0, h.length + 1) === h + "-" : !1) : !0
                        }
                    },
                    CHILD: function(b, O, d, h) {
                        return b === "nth" ? function(b) {
                            var O, bg, c = b.parentNode;
                            if (d === 1 && h === 0) return !0;
                            if (c) {
                                bg = 0;
                                for (O = c.firstChild; O; O = O.nextSibling)
                                    if (O.nodeType === 1) {
                                        bg++;
                                        if (b === O) break
                                    }
                            }
                            return bg -= h, bg === d || bg % d === 0 && bg / d >= 0
                        } : function(O) {
                            var d = O;
                            switch (b) {
                                case "only":
                                case "first":
                                    while (d = d.previousSibling)
                                        if (d.nodeType === 1) return !1;
                                    if (b === "first") return !0;
                                    d = O;
                                case "last":
                                    while (d = d.nextSibling)
                                        if (d.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(b, O) {
                        var h, bg = bB.pseudos[b] || bB.setFilters[b.toLowerCase()] || d.error("unsupported pseudo: " + b);
                        return bg[eD] ? bg(O) : bg.length > 1 ? (h = [b, b, "", O], bB.setFilters.hasOwnProperty(b.toLowerCase()) ? o(function(b, d) {
                            var h, c = bg(b, O),
                                A = c.length;
                            while (A--) h = n.call(b, c[A]), b[h] = !(d[h] = c[A])
                        }) : function(b) {
                            return bg(b, 0, h)
                        }) : bg
                    }
                },
                pseudos: {
                    not: o(function(b) {
                        var O = [],
                            d = [],
                            h = ea(b.replace(C, "$1"));
                        return h[eD] ? o(function(b, O, d, bg) {
                            var c, A = h(b, null, bg, []),
                                e = b.length;
                            while (e--)
                                if (c = A[e]) b[e] = !(O[e] = c)
                        }) : function(b, bg, c) {
                            return O[0] = b, h(O, null, c, d), !d.pop()
                        }
                    }),
                    has: o(function(b) {
                        return function(O) {
                            return d(b, O).length > 0
                        }
                    }),
                    contains: o(function(b) {
                        return function(O) {
                            return (O.textContent || O.innerText || cd(O)).indexOf(b) > -1
                        }
                    }),
                    enabled: function(b) {
                        return b.disabled === !1
                    },
                    disabled: function(b) {
                        return b.disabled === !0
                    },
                    checked: function(b) {
                        var O = b.nodeName.toLowerCase();
                        return O === "input" && !!b.checked || O === "option" && !!b.selected
                    },
                    selected: function(b) {
                        return b.parentNode && b.parentNode.selectedIndex, b.selected === !0
                    },
                    parent: function(b) {
                        return !bB.pseudos.empty(b)
                    },
                    empty: function(b) {
                        var O;
                        b = b.firstChild;
                        while (b) {
                            if (b.nodeName > "@" || (O = b.nodeType) === 3 || O === 4) return !1;
                            b = b.nextSibling
                        }
                        return !0
                    },
                    header: function(b) {
                        return M.test(b.nodeName)
                    },
                    text: function(b) {
                        var O, d;
                        return b.nodeName.toLowerCase() === "input" && (O = b.type) === "text" && ((d = b.getAttribute("type")) == null || d.toLowerCase() === O)
                    },
                    radio: h("radio"),
                    checkbox: h("checkbox"),
                    file: h("file"),
                    password: h("password"),
                    image: h("image"),
                    submit: bg("submit"),
                    reset: bg("reset"),
                    button: function(b) {
                        var O = b.nodeName.toLowerCase();
                        return O === "input" && b.type === "button" || O === "button"
                    },
                    input: function(b) {
                        return N.test(b.nodeName)
                    },
                    focus: function(b) {
                        var O = b.ownerDocument;
                        return b === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(b.type || b.href || ~b.tabIndex)
                    },
                    active: function(b) {
                        return b === b.ownerDocument.activeElement
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(b, O) {
                        return [O - 1]
                    }),
                    eq: c(function(b, O, d) {
                        return [d < 0 ? d + O : d]
                    }),
                    even: c(function(b, O) {
                        for (var d = 0; d < O; d += 2) b.push(d);
                        return b
                    }),
                    odd: c(function(b, O) {
                        for (var d = 1; d < O; d += 2) b.push(d);
                        return b
                    }),
                    lt: c(function(b, O, d) {
                        for (var h = d < 0 ? d + O : d; --h >= 0;) b.push(h);
                        return b
                    }),
                    gt: c(function(b, O, d) {
                        for (var h = d < 0 ? d + O : d; ++h < O;) b.push(h);
                        return b
                    })
                }
            }, gX = bS.compareDocumentPosition ? function(b, O) {
                return b === O ? (aZ = !0, 0) : (!b.compareDocumentPosition || !O.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(O) & 4) ? -1 : 1
            } : function(b, O) {
                if (b === O) return aZ = !0, 0;
                if (b.sourceIndex && O.sourceIndex) return b.sourceIndex - O.sourceIndex;
                var d, h, bg = [],
                    c = [],
                    e = b.parentNode,
                    cb = O.parentNode,
                    B = e;
                if (e === cb) return A(b, O);
                if (!e) return -1;
                if (!cb) return 1;
                while (B) bg.unshift(B), B = B.parentNode;
                B = cb;
                while (B) c.unshift(B), B = B.parentNode;
                d = bg.length, h = c.length;
                for (var dd = 0; dd < d && dd < h; dd++)
                    if (bg[dd] !== c[dd]) return A(bg[dd], c[dd]);
                return dd === d ? A(b, c[dd], -1) : A(bg[dd], O, 1)
            }, [0, 0].sort(gX), Ac = !aZ, d.uniqueSort = function(b) {
                var O, d = [],
                    h = 1,
                    bg = 0;
                aZ = Ac, b.sort(gX);
                if (aZ) {
                    for (; O = b[h]; h++) O === b[h - 1] && (bg = d.push(h));
                    while (bg--) b.splice(d[bg], 1)
                }
                return b
            }, d.error = function(b) {
                throw new Error("Syntax error, unrecognized expression: " + b)
            }, ea = d.compile = function(b, O) {
                var d, h = [],
                    bg = [],
                    c = s[eD][b + " "];
                if (!c) {
                    O || (O = e(b)), d = O.length;
                    while (d--) c = j(O[d]), c[eD] ? h.push(c) : bg.push(c);
                    c = s(b, bE(bg, h))
                }
                return c
            }, bG.querySelectorAll && function() {
                var b, O = dG,
                    h = /'|\\/g,
                    bg = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    c = [":focus"],
                    A = [":active"],
                    cb = bS.matchesSelector || bS.mozMatchesSelector || bS.webkitMatchesSelector || bS.oMatchesSelector || bS.msMatchesSelector;
                R(function(b) {
                    b.innerHTML = "<select><option selected=''></option></select>", b.querySelectorAll("[selected]").length || c.push("\\[" + t + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), b.querySelectorAll(":checked").length || c.push(":checked")
                }), R(function(b) {
                    b.innerHTML = "<p test=''></p>", b.querySelectorAll("[test^='']").length && c.push("[*^$]=" + t + "*(?:\"\"|'')"), b.innerHTML = "<input type='hidden'/>", b.querySelectorAll(":enabled").length || c.push(":enabled", ":disabled")
                }), c = new RegExp(c.join("|")), dG = function(b, d, bg, A, cb) {
                    if (!A && !cb && !c.test(b)) {
                        var B, dd, a = !0,
                            j = eD,
                            bE = d,
                            bf = d.nodeType === 9 && b;
                        if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                            B = e(b), (a = d.getAttribute("id")) ? j = a.replace(h, "\\$&") : d.setAttribute("id", j), j = "[id='" + j + "'] ", dd = B.length;
                            while (dd--) B[dd] = j + B[dd].join("");
                            bE = K.test(b) && d.parentNode || d, bf = B.join(",")
                        }
                        if (bf) try {
                            return l.apply(bg, m.call(bE.querySelectorAll(bf), 0)), bg
                        } catch (b) {} finally {
                            a || d.removeAttribute("id")
                        }
                    }
                    return O(b, d, bg, A, cb)
                }, cb && (R(function(O) {
                    b = cb.call(O, "div");
                    try {
                        cb.call(O, "[test!='']:sizzle"), A.push("!=", y)
                    } catch (b) {}
                }), A = new RegExp(A.join("|")), d.matchesSelector = function(O, h) {
                    h = h.replace(bg, "='$1']");
                    if (!g(O) && !A.test(h) && !c.test(h)) try {
                        var e = cb.call(O, h);
                        if (e || b || O.document && O.document.nodeType !== 11) return e
                    } catch (b) {}
                    return d(h, null, null, [O]).length > 0
                })
            }(), bB.pseudos.nth = bB.pseudos.eq, bB.filters = ca.prototype = bB.pseudos, bB.setFilters = new ca, d.attr = D.attr, D.find = d, D.expr = d.selectors, D.expr[":"] = D.expr.pseudos, D.unique = d.uniqueSort, D.text = d.getText, D.isXMLDoc = d.isXML, D.contains = d.contains
        }(b);
    var bfb = /Until$/,
        dGb = /^(?:parents|prev(?:Until|All))/,
        cab = /^.[^:#\[\.,]*$/,
        cHb = D.expr.match.needsContext,
        dhb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    D.fn.extend({
        find: function(b) {
            var O, d, h, bg, c, A, e = this;
            if (typeof b != "string") return D(b).filter(function() {
                for (O = 0, d = e.length; O < d; O++)
                    if (D.contains(e[O], this)) return !0
            });
            A = this.pushStack("", "find", b);
            for (O = 0, d = this.length; O < d; O++) {
                h = A.length, D.find(b, this[O], A);
                if (O > 0)
                    for (bg = h; bg < A.length; bg++)
                        for (c = 0; c < h; c++)
                            if (A[c] === A[bg]) {
                                A.splice(bg--, 1);
                                break
                            }
            }
            return A
        },
        has: function(b) {
            var O, d = D(b, this),
                h = d.length;
            return this.filter(function() {
                for (O = 0; O < h; O++)
                    if (D.contains(this, d[O])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(B(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(B(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && (typeof b == "string" ? cHb.test(b) ? D(b, this.context).index(this[0]) >= 0 : D.filter(b, this).length > 0 : this.filter(b).length > 0)
        },
        closest: function(b, O) {
            var d, h = 0,
                bg = this.length,
                c = [],
                A = cHb.test(b) || typeof b != "string" ? D(b, O || this.context) : 0;
            for (; h < bg; h++) {
                d = this[h];
                while (d && d.ownerDocument && d !== O && d.nodeType !== 11) {
                    if (A ? A.index(d) > -1 : D.find.matchesSelector(d, b)) {
                        c.push(d);
                        break
                    }
                    d = d.parentNode
                }
            }
            return c = c.length > 1 ? D.unique(c) : c, this.pushStack(c, "closest", b)
        },
        index: function(b) {
            return b ? typeof b == "string" ? D.inArray(this[0], D(b)) : D.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, O) {
            var d = typeof b == "string" ? D(b, O) : D.makeArray(b && b.nodeType ? [b] : b),
                h = D.merge(this.get(), d);
            return this.pushStack(e(d[0]) || e(h[0]) ? h : D.unique(h))
        },
        addBack: function(b) {
            return this.add(b == null ? this.prevObject : this.prevObject.filter(b))
        }
    }), D.fn.andSelf = D.fn.addBack, D.each({
        parent: function(b) {
            var O = b.parentNode;
            return O && O.nodeType !== 11 ? O : null
        },
        parents: function(b) {
            return D.dir(b, "parentNode")
        },
        parentsUntil: function(b, O, d) {
            return D.dir(b, "parentNode", d)
        },
        next: function(b) {
            return cb(b, "nextSibling")
        },
        prev: function(b) {
            return cb(b, "previousSibling")
        },
        nextAll: function(b) {
            return D.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return D.dir(b, "previousSibling")
        },
        nextUntil: function(b, O, d) {
            return D.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, O, d) {
            return D.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return D.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return D.sibling(b.firstChild)
        },
        contents: function(b) {
            return D.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : D.merge([], b.childNodes)
        }
    }, function(b, O) {
        D.fn[b] = function(d, h) {
            var bg = D.map(this, O, d);
            return bfb.test(b) || (h = d), h && typeof h == "string" && (bg = D.filter(h, bg)), bg = this.length > 1 && !dhb[b] ? D.unique(bg) : bg, this.length > 1 && dGb.test(b) && (bg = bg.reverse()), this.pushStack(bg, b, w.call(arguments).join(","))
        }
    }), D.extend({
        filter: function(b, O, d) {
            return d && (b = ":not(" + b + ")"), O.length === 1 ? D.find.matchesSelector(O[0], b) ? [O[0]] : [] : D.find.matches(b, O)
        },
        dir: function(b, d, h) {
            var bg = [],
                c = b[d];
            while (c && c.nodeType !== 9 && (h === O || c.nodeType !== 1 || !D(c).is(h))) c.nodeType === 1 && bg.push(c), c = c[d];
            return bg
        },
        sibling: function(b, O) {
            var d = [];
            for (; b; b = b.nextSibling) b.nodeType === 1 && b !== O && d.push(b);
            return d
        }
    });
    var bBb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        cdb = / jQuery\d+="(?:null|\d+)"/g,
        gb = /^\s+/,
        Ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        eab = /<([\w:]+)/,
        gXb = /<tbody/i,
        aZb = /<|&#?\w+;/,
        fb = /<(?:script|style|link)/i,
        Acb = /<(?:script|object|embed|option|style)/i,
        cdMb = new RegExp("<(?:" + bBb + ")[\\s/>]", "i"),
        eDb = /^(?:checkbox|radio)$/,
        bab = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bGb = /\/(java|ecma)script/i,
        bSb = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        gRb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        ib = dd(q),
        kb = ib.appendChild(q.createElement("div"));
    gRb.optgroup = gRb.option, gRb.tbody = gRb.tfoot = gRb.colgroup = gRb.caption = gRb.thead, gRb.th = gRb.td, D.support.htmlSerialize || (gRb._default = [1, "X<div>", "</div>"]), D.fn.extend({
            text: function(b) {
                return D.access(this, function(b) {
                    return b === O ? D.text(this) : this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(b))
                }, null, b, arguments.length)
            },
            wrapAll: function(b) {
                if (D.isFunction(b)) return this.each(function(O) {
                    D(this).wrapAll(b.call(this, O))
                });
                if (this[0]) {
                    var O = D(b, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && O.insertBefore(this[0]), O.map(function() {
                        var b = this;
                        while (b.firstChild && b.firstChild.nodeType === 1) b = b.firstChild;
                        return b
                    }).append(this)
                }
                return this
            },
            wrapInner: function(b) {
                return D.isFunction(b) ? this.each(function(O) {
                    D(this).wrapInner(b.call(this, O))
                }) : this.each(function() {
                    var O = D(this),
                        d = O.contents();
                    d.length ? d.wrapAll(b) : O.append(b)
                })
            },
            wrap: function(b) {
                var O = D.isFunction(b);
                return this.each(function(d) {
                    D(this).wrapAll(O ? b.call(this, d) : b)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    D.nodeName(this, "body") || D(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(b) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(b)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(b) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(b, this.firstChild)
                })
            },
            before: function() {
                if (!e(this[0])) return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this)
                });
                if (arguments.length) {
                    var b = D.clean(arguments);
                    return this.pushStack(D.merge(b, this), "before", this.selector)
                }
            },
            after: function() {
                if (!e(this[0])) return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this.nextSibling)
                });
                if (arguments.length) {
                    var b = D.clean(arguments);
                    return this.pushStack(D.merge(this, b), "after", this.selector)
                }
            },
            remove: function(b, O) {
                var d, h = 0;
                for (;
                    (d = this[h]) != null; h++)
                    if (!b || D.filter(b, [d]).length) !O && d.nodeType === 1 && (D.cleanData(d.getElementsByTagName("*")), D.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
                return this
            },
            empty: function() {
                var b, O = 0;
                for (;
                    (b = this[O]) != null; O++) {
                    b.nodeType === 1 && D.cleanData(b.getElementsByTagName("*"));
                    while (b.firstChild) b.removeChild(b.firstChild)
                }
                return this
            },
            clone: function(b, O) {
                return b = b == null ? !1 : b, O = O == null ? b : O, this.map(function() {
                    return D.clone(this, b, O)
                })
            },
            html: function(b) {
                return D.access(this, function(b) {
                    var d = this[0] || {},
                        h = 0,
                        bg = this.length;
                    if (b === O) return d.nodeType === 1 ? d.innerHTML.replace(cdb, "") : O;
                    if (typeof b == "string" && !fb.test(b) && (D.support.htmlSerialize || !cdMb.test(b)) && (D.support.leadingWhitespace || !gb.test(b)) && !gRb[(eab.exec(b) || ["", ""])[1].toLowerCase()]) {
                        b = b.replace(Ib, "<$1></$2>");
                        try {
                            for (; h < bg; h++) d = this[h] || {}, d.nodeType === 1 && (D.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                            d = 0
                        } catch (b) {}
                    }
                    d && this.empty().append(b)
                }, null, b, arguments.length)
            },
            replaceWith: function(b) {
                return e(this[0]) ? this.length ? this.pushStack(D(D.isFunction(b) ? b() : b), "replaceWith", b) : this : D.isFunction(b) ? this.each(function(O) {
                    var d = D(this),
                        h = d.html();
                    d.replaceWith(b.call(this, O, h))
                }) : (typeof b != "string" && (b = D(b).detach()), this.each(function() {
                    var O = this.nextSibling,
                        d = this.parentNode;
                    D(this).remove(), O ? D(O).before(b) : D(d).append(b)
                }))
            },
            detach: function(b) {
                return this.remove(b, !0)
            },
            domManip: function(b, d, h) {
                b = [].concat.apply([], b);
                var bg, c, A, e, cb = 0,
                    B = b[0],
                    dd = [],
                    j = this.length;
                if (!D.support.checkClone && j > 1 && typeof B == "string" && bab.test(B)) return this.each(function() {
                    D(this).domManip(b, d, h)
                });
                if (D.isFunction(B)) return this.each(function(bg) {
                    var c = D(this);
                    b[0] = B.call(this, bg, d ? c.html() : O), c.domManip(b, d, h)
                });
                if (this[0]) {
                    bg = D.buildFragment(b, this, dd), A = bg.fragment, c = A.firstChild, A.childNodes.length === 1 && (A = c);
                    if (c) {
                        d = d && D.nodeName(c, "tr");
                        for (e = bg.cacheable || j - 1; cb < j; cb++) h.call(d && D.nodeName(this[cb], "table") ? a(this[cb], "tbody") : this[cb], cb === e ? A : D.clone(A, !0, !0))
                    }
                    A = c = null, dd.length && D.each(dd, function(b, O) {
                        O.src ? D.ajax ? D.ajax({
                            url: O.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : D.error("no ajax") : D.globalEval((O.text || O.textContent || O.innerHTML || "").replace(bSb, "")), O.parentNode && O.parentNode.removeChild(O)
                    })
                }
                return this
            }
        }), D.buildFragment = function(b, d, h) {
            var bg, c, A, e = b[0];
            return d = d || q, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, b.length === 1 && typeof e == "string" && e.length < 512 && d === q && e.charAt(0) === "<" && !Acb.test(e) && (D.support.checkClone || !bab.test(e)) && (D.support.html5Clone || !cdMb.test(e)) && (c = !0, bg = D.fragments[e], A = bg !== O), bg || (bg = d.createDocumentFragment(), D.clean(b, d, bg, h), c && (D.fragments[e] = A && bg)), {
                fragment: bg,
                cacheable: c
            }
        }, D.fragments = {}, D.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(b, O) {
            D.fn[b] = function(d) {
                var h, bg = 0,
                    c = [],
                    A = D(d),
                    e = A.length,
                    cb = this.length === 1 && this[0].parentNode;
                if ((cb == null || cb && cb.nodeType === 11 && cb.childNodes.length === 1) && e === 1) return A[O](this[0]), this;
                for (; bg < e; bg++) h = (bg > 0 ? this.clone(!0) : this).get(), D(A[bg])[O](h), c = c.concat(h);
                return this.pushStack(c, b, A.selector)
            }
        }), D.extend({
            clone: function(b, O, d) {
                var h, bg, c, A;
                D.support.html5Clone || D.isXMLDoc(b) || !cdMb.test("<" + b.nodeName + ">") ? A = b.cloneNode(!0) : (kb.innerHTML = b.outerHTML, kb.removeChild(A = kb.firstChild));
                if ((!D.support.noCloneEvent || !D.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !D.isXMLDoc(b)) {
                    bE(b, A), h = bf(b), bg = bf(A);
                    for (c = 0; h[c]; ++c) bg[c] && bE(h[c], bg[c])
                }
                if (O) {
                    j(b, A);
                    if (d) {
                        h = bf(b), bg = bf(A);
                        for (c = 0; h[c]; ++c) j(h[c], bg[c])
                    }
                }
                return h = bg = null, A
            },
            clean: function(b, O, d, h) {
                var bg, c, A, e, cb, B, a, j, bE, bf, ca, cH, dh = O === q && ib,
                    bB = [];
                if (!O || typeof O.createDocumentFragment == "undefined") O = q;
                for (bg = 0;
                    (A = b[bg]) != null; bg++) {
                    typeof A == "number" && (A += "");
                    if (!A) continue;
                    if (typeof A == "string")
                        if (!aZb.test(A)) A = O.createTextNode(A);
                        else {
                            dh = dh || dd(O), a = O.createElement("div"), dh.appendChild(a), A = A.replace(Ib, "<$1></$2>"), e = (eab.exec(A) || ["", ""])[1].toLowerCase(), cb = gRb[e] || gRb._default, B = cb[0], a.innerHTML = cb[1] + A + cb[2];
                            while (B--) a = a.lastChild;
                            if (!D.support.tbody) {
                                j = gXb.test(A), bE = e === "table" && !j ? a.firstChild && a.firstChild.childNodes : cb[1] === "<table>" && !j ? a.childNodes : [];
                                for (c = bE.length - 1; c >= 0; --c) D.nodeName(bE[c], "tbody") && !bE[c].childNodes.length && bE[c].parentNode.removeChild(bE[c])
                            }!D.support.leadingWhitespace && gb.test(A) && a.insertBefore(O.createTextNode(gb.exec(A)[0]), a.firstChild), A = a.childNodes, a.parentNode.removeChild(a)
                        } A.nodeType ? bB.push(A) : D.merge(bB, A)
                }
                a && (A = a = dh = null);
                if (!D.support.appendChecked)
                    for (bg = 0;
                        (A = bB[bg]) != null; bg++) D.nodeName(A, "input") ? dG(A) : typeof A.getElementsByTagName != "undefined" && D.grep(A.getElementsByTagName("input"), dG);
                if (d) {
                    ca = function(b) {
                        if (!b.type || bGb.test(b.type)) return h ? h.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                    };
                    for (bg = 0;
                        (A = bB[bg]) != null; bg++)
                        if (!D.nodeName(A, "script") || !ca(A)) d.appendChild(A), typeof A.getElementsByTagName != "undefined" && (cH = D.grep(D.merge([], A.getElementsByTagName("script")), ca), bB.splice.apply(bB, [bg + 1, 0].concat(cH)), bg += cH.length)
                }
                return bB
            },
            cleanData: function(b, O) {
                var d, h, bg, c, A = 0,
                    e = D.expando,
                    cb = D.cache,
                    B = D.support.deleteExpando,
                    dd = D.event.special;
                for (;
                    (bg = b[A]) != null; A++)
                    if (O || D.acceptData(bg)) {
                        h = bg[e], d = h && cb[h];
                        if (d) {
                            if (d.events)
                                for (c in d.events) dd[c] ? D.event.remove(bg, c) : D.removeEvent(bg, c, d.handle);
                            cb[h] && (delete cb[h], B ? delete bg[e] : bg.removeAttribute ? bg.removeAttribute(e) : bg[e] = null, D.deletedIds.push(h))
                        }
                    }
            }
        }),
        function() {
            var b, O;
            D.uaMatch = function(b) {
                b = b.toLowerCase();
                var O = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
                return {
                    browser: O[1] || "",
                    version: O[2] || "0"
                }
            }, b = D.uaMatch(s.userAgent), O = {}, b.browser && (O[b.browser] = !0, O.version = b.version), O.chrome ? O.webkit = !0 : O.webkit && (O.safari = !0), D.browser = O, D.sub = function() {
                function b(O, d) {
                    return new b.fn.init(O, d)
                }
                D.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, h) {
                    return h && h instanceof D && !(h instanceof b) && (h = b(h)), D.fn.init.call(this, d, h, O)
                }, b.fn.init.prototype = b.fn;
                var O = b(q);
                return b
            }
        }();
    var lb, mb, nb, ob = /alpha\([^)]*\)/i,
        pb = /opacity=([^)]*)/,
        qb = /^(top|right|bottom|left)$/,
        rb = /^(none|table(?!-c[ea]).+)/,
        sb = /^margin/,
        tb = new RegExp("^(" + E + ")(.*)$", "i"),
        ub = new RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"),
        vb = new RegExp("^([-+])=(" + E + ")", "i"),
        wb = {
            BODY: "block"
        },
        xb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        yb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        zb = ["Top", "Right", "Bottom", "Left"],
        Cb = ["Webkit", "O", "Moz", "ms"],
        Db = D.fn.toggle;
    D.fn.extend({
        css: function(b, d) {
            return D.access(this, function(b, d, h) {
                return h !== O ? D.style(b, d, h) : D.css(b, d)
            }, b, d, arguments.length > 1)
        },
        show: function() {
            return dh(this, !0)
        },
        hide: function() {
            return dh(this)
        },
        toggle: function(b, O) {
            var d = typeof b == "boolean";
            return D.isFunction(b) && D.isFunction(O) ? Db.apply(this, arguments) : this.each(function() {
                (d ? b : cH(this)) ? D(this).show(): D(this).hide()
            })
        }
    }), D.extend({
        cssHooks: {
            opacity: {
                get: function(b, O) {
                    if (O) {
                        var d = lb(b, "opacity");
                        return d === "" ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: D.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, h, bg) {
            if (!b || b.nodeType === 3 || b.nodeType === 8 || !b.style) return;
            var c, A, e, cb = D.camelCase(d),
                B = b.style;
            d = D.cssProps[cb] || (D.cssProps[cb] = ca(B, cb)), e = D.cssHooks[d] || D.cssHooks[cb];
            if (h === O) return e && "get" in e && (c = e.get(b, !1, bg)) !== O ? c : B[d];
            A = typeof h, A === "string" && (c = vb.exec(h)) && (h = (c[1] + 1) * c[2] + parseFloat(D.css(b, d)), A = "number");
            if (h == null || A === "number" && isNaN(h)) return;
            A === "number" && !D.cssNumber[cb] && (h += "px");
            if (!e || !("set" in e) || (h = e.set(b, h, bg)) !== O) try {
                B[d] = h
            } catch (b) {}
        },
        css: function(b, d, h, bg) {
            var c, A, e, cb = D.camelCase(d);
            return d = D.cssProps[cb] || (D.cssProps[cb] = ca(b.style, cb)), e = D.cssHooks[d] || D.cssHooks[cb], e && "get" in e && (c = e.get(b, !0, bg)), c === O && (c = lb(b, d)), c === "normal" && d in yb && (c = yb[d]), h || bg !== O ? (A = parseFloat(c), h || D.isNumeric(A) ? A || 0 : c) : c
        },
        swap: function(b, O, d) {
            var h, bg, c = {};
            for (bg in O) c[bg] = b.style[bg], b.style[bg] = O[bg];
            h = d.call(b);
            for (bg in O) b.style[bg] = c[bg];
            return h
        }
    }), b.getComputedStyle ? lb = function(O, d) {
        var h, bg, c, A, e = b.getComputedStyle(O, null),
            cb = O.style;
        return e && (h = e.getPropertyValue(d) || e[d], h === "" && !D.contains(O.ownerDocument, O) && (h = D.style(O, d)), ub.test(h) && sb.test(d) && (bg = cb.width, c = cb.minWidth, A = cb.maxWidth, cb.minWidth = cb.maxWidth = cb.width = h, h = e.width, cb.width = bg, cb.minWidth = c, cb.maxWidth = A)), h
    } : q.documentElement.currentStyle && (lb = function(b, O) {
        var d, h, bg = b.currentStyle && b.currentStyle[O],
            c = b.style;
        return bg == null && c && c[O] && (bg = c[O]), ub.test(bg) && !qb.test(O) && (d = c.left, h = b.runtimeStyle && b.runtimeStyle.left, h && (b.runtimeStyle.left = b.currentStyle.left), c.left = O === "fontSize" ? "1em" : bg, bg = c.pixelLeft + "px", c.left = d, h && (b.runtimeStyle.left = h)), bg === "" ? "auto" : bg
    }), D.each(["height", "width"], function(b, O) {
        D.cssHooks[O] = {
            get: function(b, d, h) {
                if (d) return b.offsetWidth === 0 && rb.test(lb(b, "display")) ? D.swap(b, xb, function() {
                    return g(b, O, h)
                }) : g(b, O, h)
            },
            set: function(b, d, h) {
                return bB(b, d, h ? cd(b, O, h, D.support.boxSizing && D.css(b, "boxSizing") === "border-box") : 0)
            }
        }
    }), D.support.opacity || (D.cssHooks.opacity = {
        get: function(b, O) {
            return pb.test((O && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : O ? "1" : ""
        },
        set: function(b, O) {
            var d = b.style,
                h = b.currentStyle,
                bg = D.isNumeric(O) ? "alpha(opacity=" + O * 100 + ")" : "",
                c = h && h.filter || d.filter || "";
            d.zoom = 1;
            if (O >= 1 && D.trim(c.replace(ob, "")) === "" && d.removeAttribute) {
                d.removeAttribute("filter");
                if (h && !h.filter) return
            }
            d.filter = ob.test(c) ? c.replace(ob, bg) : c + " " + bg
        }
    }), D(function() {
        D.support.reliableMarginRight || (D.cssHooks.marginRight = {
            get: function(b, O) {
                return D.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (O) return lb(b, "marginRight")
                })
            }
        }), !D.support.pixelPosition && D.fn.position && D.each(["top", "left"], function(b, O) {
            D.cssHooks[O] = {
                get: function(b, d) {
                    if (d) {
                        var h = lb(b, O);
                        return ub.test(h) ? D(b).position()[O] + "px" : h
                    }
                }
            }
        })
    }), D.expr && D.expr.filters && (D.expr.filters.hidden = function(b) {
        return b.offsetWidth === 0 && b.offsetHeight === 0 || !D.support.reliableHiddenOffsets && (b.style && b.style.display || lb(b, "display")) === "none"
    }, D.expr.filters.visible = function(b) {
        return !D.expr.filters.hidden(b)
    }), D.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, O) {
        D.cssHooks[b + O] = {
            expand: function(d) {
                var h, bg = typeof d == "string" ? d.split(" ") : [d],
                    c = {};
                for (h = 0; h < 4; h++) c[b + zb[h] + O] = bg[h] || bg[h - 2] || bg[0];
                return c
            }
        }, sb.test(b) || (D.cssHooks[b + O].set = bB)
    });
    var Eb = /%20/g,
        Fb = /\[\]$/,
        Gb = /\r?\n/g,
        Hb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Jb = /^(?:select|textarea)/i;
    D.fn.extend({
        serialize: function() {
            return D.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? D.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Jb.test(this.nodeName) || Hb.test(this.type))
            }).map(function(b, O) {
                var d = D(this).val();
                return d == null ? null : D.isArray(d) ? D.map(d, function(b, d) {
                    return {
                        name: O.name,
                        value: b.replace(Gb, "\r\n")
                    }
                }) : {
                    name: O.name,
                    value: d.replace(Gb, "\r\n")
                }
            }).get()
        }
    }), D.param = function(b, d) {
        var h, bg = [],
            c = function(b, O) {
                O = D.isFunction(O) ? O() : O == null ? "" : O, bg[bg.length] = encodeURIComponent(b) + "=" + encodeURIComponent(O)
            };
        d === O && (d = D.ajaxSettings && D.ajaxSettings.traditional);
        if (D.isArray(b) || b.jquery && !D.isPlainObject(b)) D.each(b, function() {
            c(this.name, this.value)
        });
        else
            for (h in b) ea(h, b[h], d, c);
        return bg.join("&").replace(Eb, "+")
    };
    var Kb, Lb, Mb = /#.*$/,
        Nb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Pb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Qb = /^(?:GET|HEAD)$/,
        Rb = /^\/\//,
        Sb = /\?/,
        Tb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ub = /([?&])_=[^&]*/,
        Vb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Wb = D.fn.load,
        Xb = {},
        Yb = {},
        Zb = ["*/"] + ["*"];
    try {
        Lb = r.href
    } catch (b) {
        Lb = q.createElement("a"), Lb.href = "", Lb = Lb.href
    }
    Kb = Vb.exec(Lb.toLowerCase()) || [], D.fn.load = function(b, d, h) {
        if (typeof b != "string" && Wb) return Wb.apply(this, arguments);
        if (!this.length) return this;
        var bg, c, A, e = this,
            cb = b.indexOf(" ");
        return cb >= 0 && (bg = b.slice(cb, b.length), b = b.slice(0, cb)), D.isFunction(d) ? (h = d, d = O) : d && typeof d == "object" && (c = "POST"), D.ajax({
            url: b,
            type: c,
            dataType: "html",
            data: d,
            complete: function(b, O) {
                h && e.each(h, A || [b.responseText, O, b])
            }
        }).done(function(b) {
            A = arguments, e.html(bg ? D("<div>").append(b.replace(Tb, "")).find(bg) : b)
        }), this
    }, D.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, O) {
        D.fn[O] = function(b) {
            return this.on(O, b)
        }
    }), D.each(["get", "post"], function(b, d) {
        D[d] = function(b, h, bg, c) {
            return D.isFunction(h) && (c = c || bg, bg = h, h = O), D.ajax({
                type: d,
                url: b,
                data: h,
                success: bg,
                dataType: c
            })
        }
    }), D.extend({
        getScript: function(b, d) {
            return D.get(b, O, d, "script")
        },
        getJSON: function(b, O, d) {
            return D.get(b, O, d, "json")
        },
        ajaxSetup: function(b, O) {
            return O ? f(b, D.ajaxSettings) : (O = b, b = D.ajaxSettings), f(b, O), b
        },
        ajaxSettings: {
            url: Lb,
            isLocal: Pb.test(Kb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Zb
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": D.parseJSON,
                "text xml": D.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: gX(Xb),
        ajaxTransport: gX(Yb),
        ajax: function(b, d) {
            function h(b, d, h, A) {
                var B, a, dh, bB, g, ea = d;
                if (cd === 2) return;
                cd = 2, cb && clearTimeout(cb), e = O, c = A || "", I.readyState = b > 0 ? 4 : 0, h && (bB = Ac(j, I, h));
                if (b >= 200 && b < 300 || b === 304) j.ifModified && (g = I.getResponseHeader("Last-Modified"), g && (D.lastModified[bg] = g), g = I.getResponseHeader("Etag"), g && (D.etag[bg] = g)), b === 304 ? (ea = "notmodified", B = !0) : (B = cdM(j, bB), ea = B.state, a = B.data, dh = B.error, B = !dh);
                else {
                    dh = ea;
                    if (!ea || b) ea = "error", b < 0 && (b = 0)
                }
                I.status = b, I.statusText = (d || ea) + "", B ? dG.resolveWith(bE, [a, ea, I]) : dG.rejectWith(bE, [I, ea, dh]), I.statusCode(cH), cH = O, dd && bf.trigger("ajax" + (B ? "Success" : "Error"), [I, j, B ? a : dh]), ca.fireWith(bE, [I, ea]), dd && (bf.trigger("ajaxComplete", [I, j]), --D.active || D.event.trigger("ajaxStop"))
            }
            typeof b == "object" && (d = b, b = O), d = d || {};
            var bg, c, A, e, cb, B, dd, a, j = D.ajaxSetup({}, d),
                bE = j.context || j,
                bf = bE !== j && (bE.nodeType || bE instanceof D) ? D(bE) : D.event,
                dG = D.Deferred(),
                ca = D.Callbacks("once memory"),
                cH = j.statusCode || {},
                dh = {},
                bB = {},
                cd = 0,
                g = "canceled",
                I = {
                    readyState: 0,
                    setRequestHeader: function(b, O) {
                        if (!cd) {
                            var d = b.toLowerCase();
                            b = bB[d] = bB[d] || b, dh[b] = O
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return cd === 2 ? c : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (cd === 2) {
                            if (!A) {
                                A = {};
                                while (d = Nb.exec(c)) A[d[1].toLowerCase()] = d[2]
                            }
                            d = A[b.toLowerCase()]
                        }
                        return d === O ? null : d
                    },
                    overrideMimeType: function(b) {
                        return cd || (j.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || g, e && e.abort(b), h(0, b), this
                    }
                };
            dG.promise(I), I.success = I.done, I.error = I.fail, I.complete = ca.add, I.statusCode = function(b) {
                if (b) {
                    var O;
                    if (cd < 2)
                        for (O in b) cH[O] = [cH[O], b[O]];
                    else O = b[I.status], I.always(O)
                }
                return this
            }, j.url = ((b || j.url) + "").replace(Mb, "").replace(Rb, Kb[1] + "//"), j.dataTypes = D.trim(j.dataType || "*").toLowerCase().split(G), j.crossDomain == null && (B = Vb.exec(j.url.toLowerCase()), j.crossDomain = !(!B || B[1] === Kb[1] && B[2] === Kb[2] && (B[3] || (B[1] === "http:" ? 80 : 443)) == (Kb[3] || (Kb[1] === "http:" ? 80 : 443)))), j.data && j.processData && typeof j.data != "string" && (j.data = D.param(j.data, j.traditional)), aZ(Xb, j, d, I);
            if (cd === 2) return I;
            dd = j.global, j.type = j.type.toUpperCase(), j.hasContent = !Qb.test(j.type), dd && D.active++ === 0 && D.event.trigger("ajaxStart");
            if (!j.hasContent) {
                j.data && (j.url += (Sb.test(j.url) ? "&" : "?") + j.data, delete j.data), bg = j.url;
                if (j.cache === !1) {
                    var ea = D.now(),
                        gX = j.url.replace(Ub, "$1_=" + ea);
                    j.url = gX + (gX === j.url ? (Sb.test(j.url) ? "&" : "?") + "_=" + ea : "")
                }
            }(j.data && j.hasContent && j.contentType !== !1 || d.contentType) && I.setRequestHeader("Content-Type", j.contentType), j.ifModified && (bg = bg || j.url, D.lastModified[bg] && I.setRequestHeader("If-Modified-Since", D.lastModified[bg]), D.etag[bg] && I.setRequestHeader("If-None-Match", D.etag[bg])), I.setRequestHeader("Accept", j.dataTypes[0] && j.accepts[j.dataTypes[0]] ? j.accepts[j.dataTypes[0]] + (j.dataTypes[0] !== "*" ? ", " + Zb + "; q=0.01" : "") : j.accepts["*"]);
            for (a in j.headers) I.setRequestHeader(a, j.headers[a]);
            if (!j.beforeSend || j.beforeSend.call(bE, I, j) !== !1 && cd !== 2) {
                g = "abort";
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) I[a](j[a]);
                e = aZ(Yb, j, d, I);
                if (!e) h(-1, "No Transport");
                else {
                    I.readyState = 1, dd && bf.trigger("ajaxSend", [I, j]), j.async && j.timeout > 0 && (cb = setTimeout(function() {
                        I.abort("timeout")
                    }, j.timeout));
                    try {
                        cd = 1, e.send(dh, h)
                    } catch (b) {
                        if (!(cd < 2)) throw b;
                        h(-1, b)
                    }
                }
                return I
            }
            return I.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var $b = [],
        _b = /\?/,
        bO = /(=)\?(?=&|$)|\?\?/,
        OO = D.now();
    D.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = $b.pop() || D.expando + "_" + OO++;
            return this[b] = !0, b
        }
    }), D.ajaxPrefilter("json jsonp", function(d, h, bg) {
        var c, A, e, cb = d.data,
            B = d.url,
            dd = d.jsonp !== !1,
            a = dd && bO.test(B),
            j = dd && !a && typeof cb == "string" && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && bO.test(cb);
        if (d.dataTypes[0] === "jsonp" || a || j) return c = d.jsonpCallback = D.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, A = b[c], a ? d.url = B.replace(bO, "$1" + c) : j ? d.data = cb.replace(bO, "$1" + c) : dd && (d.url += (_b.test(B) ? "&" : "?") + d.jsonp + "=" + c), d.converters["script json"] = function() {
            return e || D.error(c + " was not called"), e[0]
        }, d.dataTypes[0] = "json", b[c] = function() {
            e = arguments
        }, bg.always(function() {
            b[c] = A, d[c] && (d.jsonpCallback = h.jsonpCallback, $b.push(c)), e && D.isFunction(A) && A(e[0]), e = A = O
        }), "script"
    }), D.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return D.globalEval(b), b
            }
        }
    }), D.ajaxPrefilter("script", function(b) {
        b.cache === O && (b.cache = !1), b.crossDomain && (b.type = "GET", b.global = !1)
    }), D.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, h = q.head || q.getElementsByTagName("head")[0] || q.documentElement;
            return {
                send: function(bg, c) {
                    d = q.createElement("script"), d.async = "async", b.scriptCharset && (d.charset = b.scriptCharset), d.src = b.url, d.onload = d.onreadystatechange = function(b, bg) {
                        if (bg || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, h && d.parentNode && h.removeChild(d), d = O, bg || c(200, "success")
                    }, h.insertBefore(d, h.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var dO, hO = b.ActiveXObject ? function() {
            for (var b in dO) dO[b](0, 1)
        } : !1,
        bgO = 0;
    D.ajaxSettings.xhr = b.ActiveXObject ? function() {
            return !this.isLocal && eD() || ba()
        } : eD,
        function(b) {
            D.extend(D.support, {
                ajax: !!b,
                cors: !!b && "withCredentials" in b
            })
        }(D.ajaxSettings.xhr()), D.support.ajax && D.ajaxTransport(function(d) {
            if (!d.crossDomain || D.support.cors) {
                var h;
                return {
                    send: function(bg, c) {
                        var A, e, cb = d.xhr();
                        d.username ? cb.open(d.type, d.url, d.async, d.username, d.password) : cb.open(d.type, d.url, d.async);
                        if (d.xhrFields)
                            for (e in d.xhrFields) cb[e] = d.xhrFields[e];
                        d.mimeType && cb.overrideMimeType && cb.overrideMimeType(d.mimeType), !d.crossDomain && !bg["X-Requested-With"] && (bg["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (e in bg) cb.setRequestHeader(e, bg[e])
                        } catch (b) {}
                        cb.send(d.hasContent && d.data || null), h = function(b, bg) {
                            var e, B, dd, a, j;
                            try {
                                if (h && (bg || cb.readyState === 4)) {
                                    h = O, A && (cb.onreadystatechange = D.noop, hO && delete dO[A]);
                                    if (bg) cb.readyState !== 4 && cb.abort();
                                    else {
                                        e = cb.status, dd = cb.getAllResponseHeaders(), a = {}, j = cb.responseXML, j && j.documentElement && (a.xml = j);
                                        try {
                                            a.text = cb.responseText
                                        } catch (b) {}
                                        try {
                                            B = cb.statusText
                                        } catch (b) {
                                            B = ""
                                        }!e && d.isLocal && !d.crossDomain ? e = a.text ? 200 : 404 : e === 1223 && (e = 204)
                                    }
                                }
                            } catch (b) {
                                bg || c(-1, b)
                            }
                            a && c(e, B, a, dd)
                        }, d.async ? cb.readyState === 4 ? setTimeout(h, 0) : (A = ++bgO, hO && (dO || (dO = {}, D(b).unload(hO)), dO[A] = h), cb.onreadystatechange = h) : h()
                    },
                    abort: function() {
                        h && h(0, 1)
                    }
                }
            }
        });
    var cO, AO, eO = /^(?:toggle|show|hide)$/,
        cbO = new RegExp("^(?:([-+])=|)(" + E + ")([a-z%]*)$", "i"),
        BO = /queueHooks$/,
        ddO = [k],
        aO = {
            "*": [function(b, O) {
                var d, h, bg = this.createTween(b, O),
                    c = cbO.exec(O),
                    A = bg.cur(),
                    e = +A || 0,
                    cb = 1,
                    B = 20;
                if (c) {
                    d = +c[2], h = c[3] || (D.cssNumber[b] ? "" : "px");
                    if (h !== "px" && e) {
                        e = D.css(bg.elem, b, !0) || d || 1;
                        do {
                            cb = cb || ".5", e /= cb, D.style(bg.elem, b, e + h)
                        } while (cb !== (cb = bg.cur() / A) && cb !== 1 && --B)
                    }
                    bg.unit = h, bg.start = e, bg.end = c[1] ? e + (c[1] + 1) * d : d
                }
                return bg
            }]
        };
    D.Animation = D.extend(gR, {
        tweener: function(b, O) {
            D.isFunction(b) ? (O = b, b = ["*"]) : b = b.split(" ");
            var d, h = 0,
                bg = b.length;
            for (; h < bg; h++) d = b[h], aO[d] = aO[d] || [], aO[d].unshift(O)
        },
        prefilter: function(b, O) {
            O ? ddO.unshift(b) : ddO.push(b)
        }
    }), D.Tween = l, l.prototype = {
        constructor: l,
        init: function(b, O, d, h, bg, c) {
            this.elem = b, this.prop = d, this.easing = bg || "swing", this.options = O, this.start = this.now = this.cur(), this.end = h, this.unit = c || (D.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = l.propHooks[this.prop];
            return b && b.get ? b.get(this) : l.propHooks._default.get(this)
        },
        run: function(b) {
            var O, d = l.propHooks[this.prop];
            return this.options.duration ? this.pos = O = D.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = O = b, this.now = (this.end - this.start) * O + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : l.propHooks._default.set(this), this
        }
    }, l.prototype.init.prototype = l.prototype, l.propHooks = {
        _default: {
            get: function(b) {
                var O;
                return b.elem[b.prop] == null || !!b.elem.style && b.elem.style[b.prop] != null ? (O = D.css(b.elem, b.prop, !1, ""), !O || O === "auto" ? 0 : O) : b.elem[b.prop]
            },
            set: function(b) {
                D.fx.step[b.prop] ? D.fx.step[b.prop](b) : b.elem.style && (b.elem.style[D.cssProps[b.prop]] != null || D.cssHooks[b.prop]) ? D.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    }, l.propHooks.scrollTop = l.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    }, D.each(["toggle", "show", "hide"], function(b, O) {
        var d = D.fn[O];
        D.fn[O] = function(h, bg, c) {
            return h == null || typeof h == "boolean" || !b && D.isFunction(h) && D.isFunction(bg) ? d.apply(this, arguments) : this.animate(m(O, !0), h, bg, c)
        }
    }), D.fn.extend({
        fadeTo: function(b, O, d, h) {
            return this.filter(cH).css("opacity", 0).show().end().animate({
                opacity: O
            }, b, d, h)
        },
        animate: function(b, O, d, h) {
            var bg = D.isEmptyObject(b),
                c = D.speed(O, d, h),
                A = function() {
                    var O = gR(this, D.extend({}, b), c);
                    bg && O.stop(!0)
                };
            return bg || c.queue === !1 ? this.each(A) : this.queue(c.queue, A)
        },
        stop: function(b, d, h) {
            var bg = function(b) {
                var O = b.stop;
                delete b.stop, O(h)
            };
            return typeof b != "string" && (h = d, d = b, b = O), d && b !== !1 && this.queue(b || "fx", []), this.each(function() {
                var O = !0,
                    d = b != null && b + "queueHooks",
                    c = D.timers,
                    A = D._data(this);
                if (d) A[d] && A[d].stop && bg(A[d]);
                else
                    for (d in A) A[d] && A[d].stop && BO.test(d) && bg(A[d]);
                for (d = c.length; d--;) c[d].elem === this && (b == null || c[d].queue === b) && (c[d].anim.stop(h), O = !1, c.splice(d, 1));
                (O || !h) && D.dequeue(this, b)
            })
        }
    }), D.each({
        slideDown: m("show"),
        slideUp: m("hide"),
        slideToggle: m("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, O) {
        D.fn[b] = function(b, d, h) {
            return this.animate(O, b, d, h)
        }
    }), D.speed = function(b, O, d) {
        var h = b && typeof b == "object" ? D.extend({}, b) : {
            complete: d || !d && O || D.isFunction(b) && b,
            duration: b,
            easing: d && O || O && !D.isFunction(O) && O
        };
        h.duration = D.fx.off ? 0 : typeof h.duration == "number" ? h.duration : h.duration in D.fx.speeds ? D.fx.speeds[h.duration] : D.fx.speeds._default;
        if (h.queue == null || h.queue === !0) h.queue = "fx";
        return h.old = h.complete, h.complete = function() {
            D.isFunction(h.old) && h.old.call(this), h.queue && D.dequeue(this, h.queue)
        }, h
    }, D.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return .5 - Math.cos(b * Math.PI) / 2
        }
    }, D.timers = [], D.fx = l.prototype.init, D.fx.tick = function() {
        var b, d = D.timers,
            h = 0;
        cO = D.now();
        for (; h < d.length; h++) b = d[h], !b() && d[h] === b && d.splice(h--, 1);
        d.length || D.fx.stop(), cO = O
    }, D.fx.timer = function(b) {
        b() && D.timers.push(b) && !AO && (AO = setInterval(D.fx.tick, D.fx.interval))
    }, D.fx.interval = 13, D.fx.stop = function() {
        clearInterval(AO), AO = null
    }, D.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, D.fx.step = {}, D.expr && D.expr.filters && (D.expr.filters.animated = function(b) {
        return D.grep(D.timers, function(O) {
            return b === O.elem
        }).length
    });
    var jO = /^(?:body|html)$/i;
    D.fn.offset = function(b) {
        if (arguments.length) return b === O ? this : this.each(function(O) {
            D.offset.setOffset(this, b, O)
        });
        var d, h, bg, c, A, e, cb, B = {
                top: 0,
                left: 0
            },
            dd = this[0],
            a = dd && dd.ownerDocument;
        if (!a) return;
        return (h = a.body) === dd ? D.offset.bodyOffset(dd) : (d = a.documentElement, D.contains(d, dd) ? (typeof dd.getBoundingClientRect != "undefined" && (B = dd.getBoundingClientRect()), bg = n(a), c = d.clientTop || h.clientTop || 0, A = d.clientLeft || h.clientLeft || 0, e = bg.pageYOffset || d.scrollTop, cb = bg.pageXOffset || d.scrollLeft, {
            top: B.top + e - c,
            left: B.left + cb - A
        }) : B)
    }, D.offset = {
        bodyOffset: function(b) {
            var O = b.offsetTop,
                d = b.offsetLeft;
            return D.support.doesNotIncludeMarginInBodyOffset && (O += parseFloat(D.css(b, "marginTop")) || 0, d += parseFloat(D.css(b, "marginLeft")) || 0), {
                top: O,
                left: d
            }
        },
        setOffset: function(b, O, d) {
            var h = D.css(b, "position");
            h === "static" && (b.style.position = "relative");
            var bg = D(b),
                c = bg.offset(),
                A = D.css(b, "top"),
                e = D.css(b, "left"),
                cb = (h === "absolute" || h === "fixed") && D.inArray("auto", [A, e]) > -1,
                B = {},
                dd = {},
                a, j;
            cb ? (dd = bg.position(), a = dd.top, j = dd.left) : (a = parseFloat(A) || 0, j = parseFloat(e) || 0), D.isFunction(O) && (O = O.call(b, d, c)), O.top != null && (B.top = O.top - c.top + a), O.left != null && (B.left = O.left - c.left + j), "using" in O ? O.using.call(b, B) : bg.css(B)
        }
    }, D.fn.extend({
        position: function() {
            if (!this[0]) return;
            var b = this[0],
                O = this.offsetParent(),
                d = this.offset(),
                h = jO.test(O[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : O.offset();
            return d.top -= parseFloat(D.css(b, "marginTop")) || 0, d.left -= parseFloat(D.css(b, "marginLeft")) || 0, h.top += parseFloat(D.css(O[0], "borderTopWidth")) || 0, h.left += parseFloat(D.css(O[0], "borderLeftWidth")) || 0, {
                top: d.top - h.top,
                left: d.left - h.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var b = this.offsetParent || q.body;
                while (b && !jO.test(b.nodeName) && D.css(b, "position") === "static") b = b.offsetParent;
                return b || q.body
            })
        }
    }), D.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var h = /Y/.test(d);
        D.fn[b] = function(bg) {
            return D.access(this, function(b, bg, c) {
                var A = n(b);
                if (c === O) return A ? d in A ? A[d] : A.document.documentElement[bg] : b[bg];
                A ? A.scrollTo(h ? D(A).scrollLeft() : c, h ? c : D(A).scrollTop()) : b[bg] = c
            }, b, bg, arguments.length, null)
        }
    }), D.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        D.each({
            padding: "inner" + b,
            content: d,
            "": "outer" + b
        }, function(h, bg) {
            D.fn[bg] = function(bg, c) {
                var A = arguments.length && (h || typeof bg != "boolean"),
                    e = h || (bg === !0 || c === !0 ? "margin" : "border");
                return D.access(this, function(d, h, bg) {
                    var c;
                    return D.isWindow(d) ? d.document.documentElement["client" + b] : d.nodeType === 9 ? (c = d.documentElement, Math.max(d.body["scroll" + b], c["scroll" + b], d.body["offset" + b], c["offset" + b], c["client" + b])) : bg === O ? D.css(d, h, bg, e) : D.style(d, h, bg, e)
                }, d, A ? bg : O, A, null)
            }
        })
    }), b.jQuery = b.$ = D, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return D
    })
})(window);