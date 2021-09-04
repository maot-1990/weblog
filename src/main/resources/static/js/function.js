function RevertComment(f) {
    $("#inpRevID").val(f);
    var g = $("#comment"),
        a = $("#cancel-reply"),
        A = $("#temp-frm");
    var gO = document.createElement("div");
    gO.id = "temp-frm";
    gO.style.display = "none";
    g.before(gO);
    $("#AjaxComment" + f).before(g);
    g.addClass("");
    a.show();
    a.click(function() {
        $("#inpRevID").val(0);
        var f = $("#temp-frm"),
            g = $("#comment");
        if (!f.length || !g.length) return;
        f.before(g);
        f.remove();
        $(this).hide();
        g.removeClass("");
        return false
    });
    try {
        $("#txaArticle").focus()
    } catch (f) {}
    return false
}

function GetComments(f, g) {
    $("span.commentspage").html("Waiting...");
    $.get(bloghost + "zb_system/cmd.php?act=getcmt&postid=" + f + "&page=" + g, function(f) {
        $("#AjaxCommentBegin").nextUntil("#AjaxCommentEnd").remove();
        $("#AjaxCommentEnd").before(f);
        $("#cancel-reply").click()
    })
}

function CommentComplete() {
    $("#cancel-reply").click()
}
/*!
 * SuperSlide v2.1.1 
 */
! function(f) {
    f.fn.slide = function(g) {
        return f.fn.slide.defaults = {
            type: "slide",
            effect: "fade",
            autoPlay: !1,
            delayTime: 500,
            interTime: 2500,
            triggerTime: 150,
            defaultIndex: 0,
            titCell: ".hd li",
            mainCell: ".bd",
            targetCell: null,
            trigger: "mouseover",
            scroll: 1,
            vis: 1,
            titOnClassName: "on",
            autoPage: !1,
            prevCell: ".prev",
            nextCell: ".next",
            pageStateCell: ".pageState",
            opp: !1,
            pnLoop: !0,
            easing: "swing",
            startFun: null,
            endFun: null,
            switchLoad: null,
            playStateCell: ".playState",
            mouseOverStop: !0,
            defaultPlay: !0,
            returnDefault: !1
        }, this.each(function() {
            var a = f.extend({}, f.fn.slide.defaults, g),
                A = f(this),
                gO = a.effect,
                d = f(a.prevCell, A),
                W = f(a.nextCell, A),
                e = f(a.pageStateCell, A),
                J = f(a.playStateCell, A),
                gg = f(a.titCell, A),
                fU = gg.size(),
                gZ = f(a.mainCell, A),
                fd = gZ.children().size(),
                dU = a.switchLoad,
                c = f(a.targetCell, A),
                N = parseInt(a.defaultIndex),
                gM = parseInt(a.delayTime),
                dC = parseInt(a.interTime);
            parseInt(a.triggerTime);
            var fC, eG = parseInt(a.scroll),
                dUh = parseInt(a.vis),
                ad = "false" == a.autoPlay || 0 == a.autoPlay ? !1 : !0,
                F = "false" == a.opp || 0 == a.opp ? !1 : !0,
                aX = "false" == a.autoPage || 0 == a.autoPage ? !1 : !0,
                ec = "false" == a.pnLoop || 0 == a.pnLoop ? !1 : !0,
                fR = "false" == a.mouseOverStop || 0 == a.mouseOverStop ? !1 : !0,
                dW = "false" == a.defaultPlay || 0 == a.defaultPlay ? !1 : !0,
                aI = "false" == a.returnDefault || 0 == a.returnDefault ? !1 : !0,
                aK = 0,
                dR = 0,
                gJ = 0,
                gge = 0,
                A_ = a.easing,
                b = null,
                h = null,
                i = null,
                j = a.titOnClassName,
                k = gg.index(A.find("." + j)),
                l = N = -1 == k ? N : k,
                m = N,
                n = N,
                o = fd >= dUh ? 0 != fd % eG ? fd % eG : eG : 0,
                p = "leftMarquee" == gO || "topMarquee" == gO ? !0 : !1,
                q = function() {
                    f.isFunction(a.startFun) && a.startFun(N, fU, A, f(a.titCell, A), gZ, c, d, W)
                },
                r = function() {
                    f.isFunction(a.endFun) && a.endFun(N, fU, A, f(a.titCell, A), gZ, c, d, W)
                },
                s = function() {
                    gg.removeClass(j), dW && gg.eq(m).addClass(j)
                };
            if ("menu" == a.type) return dW && gg.removeClass(j).eq(N).addClass(j), gg.hover(function() {
                fC = f(this).find(a.targetCell);
                var g = gg.index(f(this));
                h = setTimeout(function() {
                    switch (N = g, gg.removeClass(j).eq(N).addClass(j), q(), gO) {
                        case "fade":
                            fC.stop(!0, !0).animate({
                                opacity: "show"
                            }, gM, A_, r);
                            break;
                        case "slideDown":
                            fC.stop(!0, !0).animate({
                                height: "show"
                            }, gM, A_, r)
                    }
                }, a.triggerTime)
            }, function() {
                switch (clearTimeout(h), gO) {
                    case "fade":
                        fC.animate({
                            opacity: "hide"
                        }, gM, A_);
                        break;
                    case "slideDown":
                        fC.animate({
                            height: "hide"
                        }, gM, A_)
                }
            }), aI && A.hover(function() {
                clearTimeout(i)
            }, function() {
                i = setTimeout(s, gM)
            }), void 0;
            if (0 == fU && (fU = fd), p && (fU = 2), aX) {
                if (fd >= dUh)
                    if ("leftLoop" == gO || "topLoop" == gO) fU = 0 != fd % eG ? (0 ^ fd / eG) + 1 : fd / eG;
                    else {
                        var t = fd - dUh;
                        fU = 1 + parseInt(0 != t % eG ? t / eG + 1 : t / eG), 0 >= fU && (fU = 1)
                    }
                else fU = 1;
                gg.html("");
                var u = "";
                if (1 == a.autoPage || "true" == a.autoPage)
                    for (var v = 0; fU > v; v++) u += "<li>" + (v + 1) + "</li>";
                else
                    for (var v = 0; fU > v; v++) u += a.autoPage.replace("$", v + 1);
                gg.html(u);
                var gg = gg.children()
            }
            if (fd >= dUh) {
                gZ.children().each(function() {
                    f(this).width() > gJ && (gJ = f(this).width(), dR = f(this).outerWidth(!0)), f(this).height() > gge && (gge = f(this).height(), aK = f(this).outerHeight(!0))
                });
                var w = gZ.children(),
                    x = function() {
                        for (var f = 0; dUh > f; f++) w.eq(f).clone().addClass("clone").appendTo(gZ);
                        for (var f = 0; o > f; f++) w.eq(fd - f - 1).clone().addClass("clone").prependTo(gZ)
                    };
                switch (gO) {
                    case "fold":
                        gZ.css({
                            position: "relative",
                            width: dR,
                            height: aK
                        }).children().css({
                            position: "absolute",
                            width: gJ,
                            left: 0,
                            top: 0,
                            display: "none"
                        });
                        break;
                    case "top":
                        gZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + dUh * aK + 'px"></div>').css({
                            top: -(N * eG) * aK,
                            position: "relative",
                            padding: "0",
                            margin: "0"
                        }).children().css({
                            height: gge
                        });
                        break;
                    case "left":
                        gZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + dUh * dR + 'px"></div>').css({
                            width: fd * dR,
                            left: -(N * eG) * dR,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0"
                        }).children().css({
                            float: "left",
                            width: gJ
                        });
                        break;
                    case "leftLoop":
                    case "leftMarquee":
                        x(), gZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + dUh * dR + 'px"></div>').css({
                            width: (fd + dUh + o) * dR,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0",
                            left: -(o + N * eG) * dR
                        }).children().css({
                            float: "left",
                            width: gJ
                        });
                        break;
                    case "topLoop":
                    case "topMarquee":
                        x(), gZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + dUh * aK + 'px"></div>').css({
                            height: (fd + dUh + o) * aK,
                            position: "relative",
                            padding: "0",
                            margin: "0",
                            top: -(o + N * eG) * aK
                        }).children().css({
                            height: gge
                        })
                }
            }
            var y = function(f) {
                    var g = f * eG;
                    return f == fU ? g = fd : -1 == f && 0 != fd % eG && (g = -fd % eG), g
                },
                z = function(g) {
                    var a = function(a) {
                        for (var A = a; dUh + a > A; A++) g.eq(A).find("img[" + dU + "]").each(function() {
                            var g = f(this);
                            if (g.attr("src", g.attr(dU)).removeAttr(dU), gZ.find(".clone")[0])
                                for (var a = gZ.children(), A = 0; A < a.size(); A++) a.eq(A).find("img[" + dU + "]").each(function() {
                                    f(this).attr(dU) == g.attr("src") && f(this).attr("src", f(this).attr(dU)).removeAttr(dU)
                                })
                        })
                    };
                    switch (gO) {
                        case "fade":
                        case "fold":
                        case "top":
                        case "left":
                        case "slideDown":
                            a(N * eG);
                            break;
                        case "leftLoop":
                        case "topLoop":
                            a(o + y(n));
                            break;
                        case "leftMarquee":
                        case "topMarquee":
                            var A = "leftMarquee" == gO ? gZ.css("left").replace("px", "") : gZ.css("top").replace("px", ""),
                                d = "leftMarquee" == gO ? dR : aK,
                                W = o;
                            if (0 != A % d) {
                                var e = Math.abs(0 ^ A / d);
                                W = 1 == N ? o + e : o + e - 1
                            }
                            a(W)
                    }
                },
                B = function(f) {
                    if (!dW || l != N || f || p) {
                        if (p ? N >= 1 ? N = 1 : 0 >= N && (N = 0) : (n = N, N >= fU ? N = 0 : 0 > N && (N = fU - 1)), q(), null != dU && z(gZ.children()), c[0] && (fC = c.eq(N), null != dU && z(c), "slideDown" == gO ? (c.not(fC).stop(!0, !0).slideUp(gM), fC.slideDown(gM, A_, function() {
                                gZ[0] || r()
                            })) : (c.not(fC).stop(!0, !0).hide(), fC.animate({
                                opacity: "show"
                            }, gM, function() {
                                gZ[0] || r()
                            }))), fd >= dUh) switch (gO) {
                            case "fade":
                                gZ.children().stop(!0, !0).eq(N).animate({
                                    opacity: "show"
                                }, gM, A_, function() {
                                    r()
                                }).siblings().hide();
                                break;
                            case "fold":
                                gZ.children().stop(!0, !0).eq(N).animate({
                                    opacity: "show"
                                }, gM, A_, function() {
                                    r()
                                }).siblings().animate({
                                    opacity: "hide"
                                }, gM, A_);
                                break;
                            case "top":
                                gZ.stop(!0, !1).animate({
                                    top: -N * eG * aK
                                }, gM, A_, function() {
                                    r()
                                });
                                break;
                            case "left":
                                gZ.stop(!0, !1).animate({
                                    left: -N * eG * dR
                                }, gM, A_, function() {
                                    r()
                                });
                                break;
                            case "leftLoop":
                                var g = n;
                                gZ.stop(!0, !0).animate({
                                    left: -(y(n) + o) * dR
                                }, gM, A_, function() {
                                    -1 >= g ? gZ.css("left", -(o + (fU - 1) * eG) * dR) : g >= fU && gZ.css("left", -o * dR), r()
                                });
                                break;
                            case "topLoop":
                                var g = n;
                                gZ.stop(!0, !0).animate({
                                    top: -(y(n) + o) * aK
                                }, gM, A_, function() {
                                    -1 >= g ? gZ.css("top", -(o + (fU - 1) * eG) * aK) : g >= fU && gZ.css("top", -o * aK), r()
                                });
                                break;
                            case "leftMarquee":
                                var a = gZ.css("left").replace("px", "");
                                0 == N ? gZ.animate({
                                    left: ++a
                                }, 0, function() {
                                    gZ.css("left").replace("px", "") >= 0 && gZ.css("left", -fd * dR)
                                }) : gZ.animate({
                                    left: --a
                                }, 0, function() {
                                    gZ.css("left").replace("px", "") <= -(fd + o) * dR && gZ.css("left", -o * dR)
                                });
                                break;
                            case "topMarquee":
                                var A = gZ.css("top").replace("px", "");
                                0 == N ? gZ.animate({
                                    top: ++A
                                }, 0, function() {
                                    gZ.css("top").replace("px", "") >= 0 && gZ.css("top", -fd * aK)
                                }) : gZ.animate({
                                    top: --A
                                }, 0, function() {
                                    gZ.css("top").replace("px", "") <= -(fd + o) * aK && gZ.css("top", -o * aK)
                                })
                        }
                        gg.removeClass(j).eq(N).addClass(j), l = N, ec || (W.removeClass("nextStop"), d.removeClass("prevStop"), 0 == N && d.addClass("prevStop"), N == fU - 1 && W.addClass("nextStop")), e.html("<span>" + (N + 1) + "</span>/" + fU)
                    }
                };
            dW && B(!0), aI && A.hover(function() {
                clearTimeout(i)
            }, function() {
                i = setTimeout(function() {
                    N = m, dW ? B() : "slideDown" == gO ? fC.slideUp(gM, s) : fC.animate({
                        opacity: "hide"
                    }, gM, s), l = N
                }, 300)
            });
            var C = function(f) {
                    b = setInterval(function() {
                        F ? N-- : N++, B()
                    }, f ? f : dC)
                },
                D = function(f) {
                    b = setInterval(B, f ? f : dC)
                },
                E = function() {
                    fR || (clearInterval(b), C())
                },
                G = function() {
                    (ec || N != fU - 1) && (N++, B(), p || E())
                },
                H = function() {
                    (ec || 0 != N) && (N--, B(), p || E())
                },
                I = function() {
                    clearInterval(b), p ? D() : C(), J.removeClass("pauseState")
                },
                K = function() {
                    clearInterval(b), J.addClass("pauseState")
                };
            if (ad ? p ? (F ? N-- : N++, D(), fR && gZ.hover(K, I)) : (C(), fR && A.hover(K, I)) : (p && (F ? N-- : N++), J.addClass("pauseState")), J.click(function() {
                    J.hasClass("pauseState") ? I() : K()
                }), "mouseover" == a.trigger ? gg.hover(function() {
                    var f = gg.index(this);
                    h = setTimeout(function() {
                        N = f, B(), E()
                    }, a.triggerTime)
                }, function() {
                    clearTimeout(h)
                }) : gg.click(function() {
                    N = gg.index(this), B(), E()
                }), p) {
                if (W.mousedown(G), d.mousedown(H), ec) {
                    var L, M = function() {
                            L = setTimeout(function() {
                                clearInterval(b), D(0 ^ dC / 10)
                            }, 150)
                        },
                        O = function() {
                            clearTimeout(L), clearInterval(b), D()
                        };
                    W.mousedown(M), W.mouseup(O), d.mousedown(M), d.mouseup(O)
                }
                "mouseover" == a.trigger && (W.hover(G, function() {}), d.hover(H, function() {}))
            } else W.click(G), d.click(H)
        })
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(f, g, a, A, gO) {
        return jQuery.easing[jQuery.easing.def](f, g, a, A, gO)
    },
    easeInQuad: function(f, g, a, A, gO) {
        return A * (g /= gO) * g + a
    },
    easeOutQuad: function(f, g, a, A, gO) {
        return -A * (g /= gO) * (g - 2) + a
    },
    easeInOutQuad: function(f, g, a, A, gO) {
        return (g /= gO / 2) < 1 ? A / 2 * g * g + a : -A / 2 * (--g * (g - 2) - 1) + a
    },
    easeInCubic: function(f, g, a, A, gO) {
        return A * (g /= gO) * g * g + a
    },
    easeOutCubic: function(f, g, a, A, gO) {
        return A * ((g = g / gO - 1) * g * g + 1) + a
    },
    easeInOutCubic: function(f, g, a, A, gO) {
        return (g /= gO / 2) < 1 ? A / 2 * g * g * g + a : A / 2 * ((g -= 2) * g * g + 2) + a
    },
    easeInQuart: function(f, g, a, A, gO) {
        return A * (g /= gO) * g * g * g + a
    },
    easeOutQuart: function(f, g, a, A, gO) {
        return -A * ((g = g / gO - 1) * g * g * g - 1) + a
    },
    easeInOutQuart: function(f, g, a, A, gO) {
        return (g /= gO / 2) < 1 ? A / 2 * g * g * g * g + a : -A / 2 * ((g -= 2) * g * g * g - 2) + a
    },
    easeInQuint: function(f, g, a, A, gO) {
        return A * (g /= gO) * g * g * g * g + a
    },
    easeOutQuint: function(f, g, a, A, gO) {
        return A * ((g = g / gO - 1) * g * g * g * g + 1) + a
    },
    easeInOutQuint: function(f, g, a, A, gO) {
        return (g /= gO / 2) < 1 ? A / 2 * g * g * g * g * g + a : A / 2 * ((g -= 2) * g * g * g * g + 2) + a
    },
    easeInSine: function(f, g, a, A, gO) {
        return -A * Math.cos(g / gO * (Math.PI / 2)) + A + a
    },
    easeOutSine: function(f, g, a, A, gO) {
        return A * Math.sin(g / gO * (Math.PI / 2)) + a
    },
    easeInOutSine: function(f, g, a, A, gO) {
        return -A / 2 * (Math.cos(Math.PI * g / gO) - 1) + a
    },
    easeInExpo: function(f, g, a, A, gO) {
        return 0 == g ? a : A * Math.pow(2, 10 * (g / gO - 1)) + a
    },
    easeOutExpo: function(f, g, a, A, gO) {
        return g == gO ? a + A : A * (-Math.pow(2, -10 * g / gO) + 1) + a
    },
    easeInOutExpo: function(f, g, a, A, gO) {
        return 0 == g ? a : g == gO ? a + A : (g /= gO / 2) < 1 ? A / 2 * Math.pow(2, 10 * (g - 1)) + a : A / 2 * (-Math.pow(2, -10 * --g) + 2) + a
    },
    easeInCirc: function(f, g, a, A, gO) {
        return -A * (Math.sqrt(1 - (g /= gO) * g) - 1) + a
    },
    easeOutCirc: function(f, g, a, A, gO) {
        return A * Math.sqrt(1 - (g = g / gO - 1) * g) + a
    },
    easeInOutCirc: function(f, g, a, A, gO) {
        return (g /= gO / 2) < 1 ? -A / 2 * (Math.sqrt(1 - g * g) - 1) + a : A / 2 * (Math.sqrt(1 - (g -= 2) * g) + 1) + a
    },
    easeInElastic: function(f, g, a, A, gO) {
        var d = 1.70158,
            W = 0,
            e = A;
        if (0 == g) return a;
        if (1 == (g /= gO)) return a + A;
        if (W || (W = .3 * gO), e < Math.abs(A)) {
            e = A;
            var d = W / 4
        } else var d = W / (2 * Math.PI) * Math.asin(A / e);
        return -(e * Math.pow(2, 10 * (g -= 1)) * Math.sin((g * gO - d) * 2 * Math.PI / W)) + a
    },
    easeOutElastic: function(f, g, a, A, gO) {
        var d = 1.70158,
            W = 0,
            e = A;
        if (0 == g) return a;
        if (1 == (g /= gO)) return a + A;
        if (W || (W = .3 * gO), e < Math.abs(A)) {
            e = A;
            var d = W / 4
        } else var d = W / (2 * Math.PI) * Math.asin(A / e);
        return e * Math.pow(2, -10 * g) * Math.sin((g * gO - d) * 2 * Math.PI / W) + A + a
    },
    easeInOutElastic: function(f, g, a, A, gO) {
        var d = 1.70158,
            W = 0,
            e = A;
        if (0 == g) return a;
        if (2 == (g /= gO / 2)) return a + A;
        if (W || (W = gO * .3 * 1.5), e < Math.abs(A)) {
            e = A;
            var d = W / 4
        } else var d = W / (2 * Math.PI) * Math.asin(A / e);
        return 1 > g ? -.5 * e * Math.pow(2, 10 * (g -= 1)) * Math.sin((g * gO - d) * 2 * Math.PI / W) + a : .5 * e * Math.pow(2, -10 * (g -= 1)) * Math.sin((g * gO - d) * 2 * Math.PI / W) + A + a
    },
    easeInBack: function(f, g, a, A, gO, d) {
        return void 0 == d && (d = 1.70158), A * (g /= gO) * g * ((d + 1) * g - d) + a
    },
    easeOutBack: function(f, g, a, A, gO, d) {
        return void 0 == d && (d = 1.70158), A * ((g = g / gO - 1) * g * ((d + 1) * g + d) + 1) + a
    },
    easeInOutBack: function(f, g, a, A, gO, d) {
        return void 0 == d && (d = 1.70158), (g /= gO / 2) < 1 ? A / 2 * g * g * (((d *= 1.525) + 1) * g - d) + a : A / 2 * ((g -= 2) * g * (((d *= 1.525) + 1) * g + d) + 2) + a
    },
    easeInBounce: function(f, g, a, A, gO) {
        return A - jQuery.easing.easeOutBounce(f, gO - g, 0, A, gO) + a
    },
    easeOutBounce: function(f, g, a, A, gO) {
        return (g /= gO) < 1 / 2.75 ? A * 7.5625 * g * g + a : 2 / 2.75 > g ? A * (7.5625 * (g -= 1.5 / 2.75) * g + .75) + a : 2.5 / 2.75 > g ? A * (7.5625 * (g -= 2.25 / 2.75) * g + .9375) + a : A * (7.5625 * (g -= 2.625 / 2.75) * g + .984375) + a
    },
    easeInOutBounce: function(f, g, a, A, gO) {
        return gO / 2 > g ? .5 * jQuery.easing.easeInBounce(f, 2 * g, 0, A, gO) + a : .5 * jQuery.easing.easeOutBounce(f, 2 * g - gO, 0, A, gO) + .5 * A + a
    }
});
jQuery(function() {
    function f() {
        var f = $(".slider").width();
        var g = 625 / 205;
        $(".slider .slideBox .bd").css("height", f / g);
        $(".slider .slideBox .bd img").css("width", f);
        $(".slider .slideBox .bd img").css("height", f / g)
    }
    setInterval(f, 1)
});
/*$(document).ready(function(){$("#btn-bars").click(function(){$(".header .navbar").slideToggle(500)})});$(function(){$("#monavber li").hover(function(){$(this).addClass("on")},function(){$(this).removeClass("on")})});*/
/*jQuery(document).ready(function(f){var g=f("#monavber").attr("data-type");f("#nav > li ").each(function(){try{var a=f(this).attr("id");if("index"==g){if(a=="nvabar-item-index"){f("#nvabar-item-index").addClass("active")}}else if("category"==g){var A=f("#monavber").attr("data-infoid");if(A!=null){var gO=A.split(" ");for(var d=0;d<gO.length;d++){if(a=="navbar-category-"+gO[d]){f("#navbar-category-"+gO[d]+"").addClass("active")}}}}else if("article"==g){var A=f("#monavber").attr("data-infoid");if(A!=null){var gO=A.split(" ");for(var d=0;d<gO.length;d++){if(a=="navbar-category-"+gO[d]){f("#navbar-category-"+gO[d]+"").addClass("active")}}}}else if("page"==g){var A=f("#monavber").attr("data-infoid");if(A!=null){if(a=="navbar-page-"+A){f("#navbar-page-"+A+"").addClass("active")}}}else if("tag"==g){var A=f("#monavber").attr("data-infoid");if(A!=null){if(a=="navbar-tag-"+A){f("#navbar-tag-"+A+"").addClass("active")}}}}catch(f){}});f("#monavber").delegate("a","click",function(){f(".navbar>li").each(function(){f(this).removeClass("active")});if(f(this).closest("ul")!=null&&f(this).closest("ul").length!=0){if(f(this).closest("ul").attr("id")=="munavber"){f(this).addClass("active")}else{f(this).closest("ul").closest("li").addClass("active")}}})});*/
jQuery(".slideBox").slide({
    mainCell: ".bd ul",
    effect: "top",
    autoPlay: true,
    delayTime: 600
});
(function(f) {
    function g(g, A, gO) {
        var d = this,
            W = g.add(this),
            e = g.find(gO.tabs),
            J = A.jquery ? A : g.children(A),
            gg;
        e.length || (e = g.children());
        J.length || (J = g.parent().find(A));
        J.length || (J = f(A));
        f.extend(this, {
            click: function(g, A) {
                var J = e.eq(g);
                if (typeof g == "string" && g.replace("#", "")) {
                    J = e.filter("[href*=" + g.replace("#", "") + "]");
                    g = Math.max(e.index(J), 0)
                }
                if (gO.rotate) {
                    var fU = e.length - 1;
                    if (g < 0) return d.click(fU, A);
                    if (g > fU) return d.click(0, A)
                }
                if (!J.length) {
                    if (gg >= 0) return d;
                    g = gO.initialIndex;
                    J = e.eq(g)
                }
                if (g === gg) return d;
                A = A || f.Event();
                A.type = "onBeforeClick";
                W.trigger(A, [g]);
                if (!A.isDefaultPrevented()) {
                    a[gO.effect].call(d, g, function() {
                        A.type = "onClick";
                        W.trigger(A, [g])
                    });
                    gg = g;
                    e.removeClass(gO.current);
                    J.addClass(gO.current);
                    return d
                }
            },
            getConf: function() {
                return gO
            },
            getTabs: function() {
                return e
            },
            getPanes: function() {
                return J
            },
            getCurrentPane: function() {
                return J.eq(gg)
            },
            getCurrentTab: function() {
                return e.eq(gg)
            },
            getIndex: function() {
                return gg
            },
            next: function() {
                return d.click(gg + 1)
            },
            prev: function() {
                return d.click(gg - 1)
            },
            destroy: function() {
                e.unbind(gO.event).removeClass(gO.current);
                J.find("a[href^=#]").unbind("click.T");
                return d
            }
        });
        f.each("onBeforeClick,onClick".split(","), function(g, a) {
            f.isFunction(gO[a]) && f(d).bind(a, gO[a]);
            d[a] = function(g) {
                f(d).bind(a, g);
                return d
            }
        });
        if (gO.history && f.fn.history) {
            f.tools.history.init(e);
            gO.event = "history"
        }
        e.each(function(g) {
            f(this).bind(gO.event, function(f) {
                d.click(g, f);
                return f.preventDefault()
            })
        });
        J.find("a[href^=#]").bind("click.T", function(g) {
            d.click(f(this).attr("href"), g)
        });
        if (location.hash) d.click(location.hash);
        else if (gO.initialIndex === 0 || gO.initialIndex > 0) d.click(gO.initialIndex)
    }
    f.tools = f.tools || {
        version: "1.2.3"
    };
    f.tools.tabs = {
        conf: {
            tabs: "a",
            current: "current",
            onBeforeClick: null,
            onClick: null,
            effect: "default",
            initialIndex: 0,
            event: "click",
            rotate: false,
            history: false
        },
        addEffect: function(f, g) {
            a[f] = g
        }
    };
    var a = {
            default: function(f, g) {
                this.getPanes().hide().eq(f).show();
                g.call()
            },
            fade: function(f, g) {
                var a = this.getConf(),
                    A = a.fadeOutSpeed,
                    gO = this.getPanes();
                A ? gO.fadeOut(A) : gO.hide();
                gO.eq(f).fadeIn(a.fadeInSpeed, g)
            },
            slide: function(f, g) {
                this.getPanes().slideUp(200);
                this.getPanes().eq(f).slideDown(400, g)
            },
            ajax: function(f, g) {
                this.getPanes().eq(0).load(this.getTabs().eq(f).attr("href"), g)
            }
        },
        A;
    f.tools.tabs.addEffect("horizontal", function(g, a) {
        A || (A = this.getPanes().eq(0).width());
        this.getCurrentPane().animate({
            width: 0
        }, function() {
            f(this).hide()
        });
        this.getPanes().eq(g).animate({
            width: A
        }, function() {
            f(this).show();
            a.call()
        })
    });
    f.fn.tabs = function(a, A) {
        var gO = this.data("tabs");
        if (gO) {
            gO.destroy();
            this.removeData("tabs")
        }
        if (f.isFunction(A)) A = {
            onBeforeClick: A
        };
        A = f.extend({}, f.tools.tabs.conf, A);
        this.each(function() {
            gO = new g(f(this), a, A);
            f(this).data("tabs", gO)
        });
        return A.api ? gO : this
    }
})(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(f, g, a, A, gO) {
        return jQuery.easing[jQuery.easing.def](f, g, a, A, gO)
    },
    easeInQuad: function(f, g, a, A, gO) {
        return A * (g /= gO) * g + a
    },
    easeOutQuad: function(f, g, a, A, gO) {
        return -A * (g /= gO) * (g - 2) + a
    },
    easeInOutQuad: function(f, g, a, A, gO) {
        if ((g /= gO / 2) < 1) return A / 2 * g * g + a;
        return -A / 2 * (--g * (g - 2) - 1) + a
    },
    easeInCubic: function(f, g, a, A, gO) {
        return A * (g /= gO) * g * g + a
    },
    easeOutCubic: function(f, g, a, A, gO) {
        return A * ((g = g / gO - 1) * g * g + 1) + a
    },
    easeInOutCubic: function(f, g, a, A, gO) {
        if ((g /= gO / 2) < 1) return A / 2 * g * g * g + a;
        return A / 2 * ((g -= 2) * g * g + 2) + a
    },
    easeInQuart: function(f, g, a, A, gO) {
        return A * (g /= gO) * g * g * g + a
    },
    easeOutQuart: function(f, g, a, A, gO) {
        return -A * ((g = g / gO - 1) * g * g * g - 1) + a
    },
    easeInOutQuart: function(f, g, a, A, gO) {
        if ((g /= gO / 2) < 1) return A / 2 * g * g * g * g + a;
        return -A / 2 * ((g -= 2) * g * g * g - 2) + a
    },
    easeInQuint: function(f, g, a, A, gO) {
        return A * (g /= gO) * g * g * g * g + a
    },
    easeOutQuint: function(f, g, a, A, gO) {
        return A * ((g = g / gO - 1) * g * g * g * g + 1) + a
    },
    easeInOutQuint: function(f, g, a, A, gO) {
        if ((g /= gO / 2) < 1) return A / 2 * g * g * g * g * g + a;
        return A / 2 * ((g -= 2) * g * g * g * g + 2) + a
    },
    easeInSine: function(f, g, a, A, gO) {
        return -A * Math.cos(g / gO * (Math.PI / 2)) + A + a
    },
    easeOutSine: function(f, g, a, A, gO) {
        return A * Math.sin(g / gO * (Math.PI / 2)) + a
    },
    easeInOutSine: function(f, g, a, A, gO) {
        return -A / 2 * (Math.cos(Math.PI * g / gO) - 1) + a
    },
    easeInExpo: function(f, g, a, A, gO) {
        return g == 0 ? a : A * Math.pow(2, 10 * (g / gO - 1)) + a
    },
    easeOutExpo: function(f, g, a, A, gO) {
        return g == gO ? a + A : A * (-Math.pow(2, -10 * g / gO) + 1) + a
    },
    easeInOutExpo: function(f, g, a, A, gO) {
        if (g == 0) return a;
        if (g == gO) return a + A;
        if ((g /= gO / 2) < 1) return A / 2 * Math.pow(2, 10 * (g - 1)) + a;
        return A / 2 * (-Math.pow(2, -10 * --g) + 2) + a
    },
    easeInCirc: function(f, g, a, A, gO) {
        return -A * (Math.sqrt(1 - (g /= gO) * g) - 1) + a
    },
    easeOutCirc: function(f, g, a, A, gO) {
        return A * Math.sqrt(1 - (g = g / gO - 1) * g) + a
    },
    easeInOutCirc: function(f, g, a, A, gO) {
        if ((g /= gO / 2) < 1) return -A / 2 * (Math.sqrt(1 - g * g) - 1) + a;
        return A / 2 * (Math.sqrt(1 - (g -= 2) * g) + 1) + a
    },
    easeInElastic: function(f, g, a, A, gO) {
        var d = 1.70158;
        var W = 0;
        var e = A;
        if (g == 0) return a;
        if ((g /= gO) == 1) return a + A;
        if (!W) W = gO * .3;
        if (e < Math.abs(A)) {
            e = A;
            var d = W / 4
        } else var d = W / (2 * Math.PI) * Math.asin(A / e);
        return -(e * Math.pow(2, 10 * (g -= 1)) * Math.sin((g * gO - d) * (2 * Math.PI) / W)) + a
    },
    easeOutElastic: function(f, g, a, A, gO) {
        var d = 1.70158;
        var W = 0;
        var e = A;
        if (g == 0) return a;
        if ((g /= gO) == 1) return a + A;
        if (!W) W = gO * .3;
        if (e < Math.abs(A)) {
            e = A;
            var d = W / 4
        } else var d = W / (2 * Math.PI) * Math.asin(A / e);
        return e * Math.pow(2, -10 * g) * Math.sin((g * gO - d) * (2 * Math.PI) / W) + A + a
    },
    easeInOutElastic: function(f, g, a, A, gO) {
        var d = 1.70158;
        var W = 0;
        var e = A;
        if (g == 0) return a;
        if ((g /= gO / 2) == 2) return a + A;
        if (!W) W = gO * (.3 * 1.5);
        if (e < Math.abs(A)) {
            e = A;
            var d = W / 4
        } else var d = W / (2 * Math.PI) * Math.asin(A / e);
        if (g < 1) return -.5 * (e * Math.pow(2, 10 * (g -= 1)) * Math.sin((g * gO - d) * (2 * Math.PI) / W)) + a;
        return e * Math.pow(2, -10 * (g -= 1)) * Math.sin((g * gO - d) * (2 * Math.PI) / W) * .5 + A + a
    },
    easeInBack: function(f, g, a, A, gO, d) {
        if (d == undefined) d = 1.70158;
        return A * (g /= gO) * g * ((d + 1) * g - d) + a
    },
    easeOutBack: function(f, g, a, A, gO, d) {
        if (d == undefined) d = 1.70158;
        return A * ((g = g / gO - 1) * g * ((d + 1) * g + d) + 1) + a
    },
    easeInOutBack: function(f, g, a, A, gO, d) {
        if (d == undefined) d = 1.70158;
        if ((g /= gO / 2) < 1) return A / 2 * (g * g * (((d *= 1.525) + 1) * g - d)) + a;
        return A / 2 * ((g -= 2) * g * (((d *= 1.525) + 1) * g + d) + 2) + a
    },
    easeInBounce: function(f, g, a, A, gO) {
        return A - jQuery.easing.easeOutBounce(f, gO - g, 0, A, gO) + a
    },
    easeOutBounce: function(f, g, a, A, gO) {
        if ((g /= gO) < 1 / 2.75) {
            return A * (7.5625 * g * g) + a
        } else if (g < 2 / 2.75) {
            return A * (7.5625 * (g -= 1.5 / 2.75) * g + .75) + a
        } else if (g < 2.5 / 2.75) {
            return A * (7.5625 * (g -= 2.25 / 2.75) * g + .9375) + a
        } else {
            return A * (7.5625 * (g -= 2.625 / 2.75) * g + .984375) + a
        }
    },
    easeInOutBounce: function(f, g, a, A, gO) {
        if (g < gO / 2) return jQuery.easing.easeInBounce(f, g * 2, 0, A, gO) * .5 + a;
        return jQuery.easing.easeOutBounce(f, g * 2 - gO, 0, A, gO) * .5 + A * .5 + a
    }
});
$(function() {
    var f = $("#indicator"),
        g = f.width() / 2,
        a = $("#tabs").children("li");
    $("#tabs").tabs("#content section", {
        effect: "fade",
        fadeOutSpeed: 0,
        fadeInSpeed: 400,
        onBeforeClick: function(A, gO) {
            var d = a.eq(gO),
                W = d.position().left + d.width() / 2 - g;
            f.stop(true).animate({
                left: W
            }, 600, "easeInOutExpo")
        }
    })
});
var scrolltotop = {
    setting: {
        startline: 100,
        scrollto: 0,
        scrollduration: 400,
        fadeduration: [500, 100]
    },
    controlHTML: '<i class="fa fa-angle-up"></i>',
    controlattrs: {
        offsetx: 30,
        offsety: 160
    },
    anchorkeyword: "#top",
    state: {
        isvisible: false,
        shouldvisible: false
    },
    scrollup: function() {
        if (!this.cssfixedsupport) {
            this.$control.css({
                opacity: 0
            })
        }
        var f = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
        if (typeof f == "string" && jQuery("#" + f).length == 1) {
            f = jQuery("#" + f).offset().top
        } else {
            f = 0
        }
        this.$body.animate({
            scrollTop: f
        }, this.setting.scrollduration)
    },
    keepfixed: function() {
        var f = jQuery(window);
        var g = f.scrollLeft() + f.width() - this.$control.width() - this.controlattrs.offsetx;
        var a = f.scrollTop() + f.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({
            left: g + "px",
            top: a + "px"
        })
    },
    togglecontrol: function() {
        var f = jQuery(window).scrollTop();
        if (!this.cssfixedsupport) {
            this.keepfixed()
        }
        this.state.shouldvisible = f >= this.setting.startline ? true : false;
        if (this.state.shouldvisible && !this.state.isvisible) {
            this.$control.stop().animate({
                opacity: 1
            }, this.setting.fadeduration[0]);
            this.state.isvisible = true
        } else {
            if (this.state.shouldvisible == false && this.state.isvisible) {
                this.$control.stop().animate({
                    opacity: 0
                }, this.setting.fadeduration[1]);
                this.state.isvisible = false
            }
        }
    },
    init: function() {
        jQuery(document).ready(function(f) {
            var g = scrolltotop;
            var a = document.all;
            g.cssfixedsupport = !a || a && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
            g.$body = window.opera ? document.compatMode == "CSS1Compat" ? f("html") : f("body") : f("html,body");
            g.$control = f('<div id="topcontrol" >' + g.controlHTML + "</div>").css({
                position: g.cssfixedsupport ? "fixed" : "absolute",
                bottom: g.controlattrs.offsety,
                right: g.controlattrs.offsetx,
                opacity: 0,
                cursor: "pointer"
            }).attr({
                title: "返回顶部"
            }).click(function() {
                g.scrollup();
                return false
            }).appendTo("body");
            if (document.all && !window.XMLHttpRequest && g.$control.text() != "") {
                g.$control.css({
                    width: g.$control.width()
                })
            }
            g.togglecontrol();
            f('a[href="' + g.anchorkeyword + '"]').click(function() {
                g.scrollup();
                return false
            });
            f(window).bind("scroll resize", function(f) {
                g.togglecontrol()
            })
        })
    }
};
scrolltotop.init();
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 */
! function(f) {
    f.fn.theiaStickySidebar = function(g) {
        function a(g, a) {
            var gO = A(g, a);
            gO || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), f(document).on("scroll." + g.namespace, function(g, a) {
                return function(gO) {
                    var d = A(g, a);
                    d && f(this).unbind(gO)
                }
            }(g, a)), f(window).on("resize." + g.namespace, function(g, a) {
                return function(gO) {
                    var d = A(g, a);
                    d && f(this).unbind(gO)
                }
            }(g, a)))
        }

        function A(g, a) {
            return g.initialized === !0 || !(f("body").width() < g.minWidth) && (gO(g, a), !0)
        }

        function gO(g, a) {
            g.initialized = !0;
            var A = f("#theia-sticky-sidebar-stylesheet-" + g.namespace);
            0 === A.length && f("head").append(f('<style id="theia-sticky-sidebar-stylesheet-' + g.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), a.each(function() {
                function a() {
                    gO.fixedScrollTop = 0, gO.sidebar.css({
                        "min-height": "1px"
                    }), gO.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function A(g) {
                    var a = g.height();
                    return g.children().each(function() {
                        a = Math.max(a, f(this).height())
                    }), a
                }
                var gO = {};
                if (gO.sidebar = f(this), gO.options = g || {}, gO.container = f(gO.options.containerSelector), 0 == gO.container.length && (gO.container = gO.sidebar.parent()), gO.sidebar.parents().css("-webkit-transform", "none"), gO.sidebar.css({
                        position: gO.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), gO.stickySidebar = gO.sidebar.find(".theiaStickySidebar"), 0 == gO.stickySidebar.length) {
                    var W = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    gO.sidebar.find("script").filter(function(f, g) {
                        return 0 === g.type.length || g.type.match(W)
                    }).remove(), gO.stickySidebar = f("<div>").addClass("theiaStickySidebar").append(gO.sidebar.children()), gO.sidebar.append(gO.stickySidebar)
                }
                gO.marginBottom = parseInt(gO.sidebar.css("margin-bottom")), gO.paddingTop = parseInt(gO.sidebar.css("padding-top")), gO.paddingBottom = parseInt(gO.sidebar.css("padding-bottom"));
                var e = gO.stickySidebar.offset().top,
                    J = gO.stickySidebar.outerHeight();
                gO.stickySidebar.css("padding-top", 1), gO.stickySidebar.css("padding-bottom", 1), e -= gO.stickySidebar.offset().top, J = gO.stickySidebar.outerHeight() - J - e, 0 == e ? (gO.stickySidebar.css("padding-top", 0), gO.stickySidebarPaddingTop = 0) : gO.stickySidebarPaddingTop = 1, 0 == J ? (gO.stickySidebar.css("padding-bottom", 0), gO.stickySidebarPaddingBottom = 0) : gO.stickySidebarPaddingBottom = 1, gO.previousScrollTop = null, gO.fixedScrollTop = 0, a(), gO.onScroll = function(gO) {
                    if (gO.stickySidebar.is(":visible")) {
                        if (f("body").width() < gO.options.minWidth) return void a();
                        if (gO.options.disableOnResponsiveLayouts) {
                            var W = gO.sidebar.outerWidth("none" == gO.sidebar.css("float"));
                            if (W + 50 > gO.container.width()) return void a()
                        }
                        var e = f(document).scrollTop(),
                            J = "static";
                        if (e >= gO.sidebar.offset().top + (gO.paddingTop - gO.options.additionalMarginTop)) {
                            var gg, fU = gO.paddingTop + g.additionalMarginTop,
                                gZ = gO.paddingBottom + gO.marginBottom + g.additionalMarginBottom,
                                fd = gO.sidebar.offset().top,
                                dU = gO.sidebar.offset().top + A(gO.container),
                                c = 0 + g.additionalMarginTop,
                                N = gO.stickySidebar.outerHeight() + fU + gZ < f(window).height();
                            gg = N ? c + gO.stickySidebar.outerHeight() : f(window).height() - gO.marginBottom - gO.paddingBottom - g.additionalMarginBottom;
                            var gM = fd - e + gO.paddingTop,
                                dC = dU - e - gO.paddingBottom - gO.marginBottom,
                                fC = gO.stickySidebar.offset().top - e,
                                eG = gO.previousScrollTop - e;
                            "fixed" == gO.stickySidebar.css("position") && "modern" == gO.options.sidebarBehavior && (fC += eG), "stick-to-top" == gO.options.sidebarBehavior && (fC = g.additionalMarginTop), "stick-to-bottom" == gO.options.sidebarBehavior && (fC = gg - gO.stickySidebar.outerHeight()), fC = eG > 0 ? Math.min(fC, c) : Math.max(fC, gg - gO.stickySidebar.outerHeight()), fC = Math.max(fC, gM), fC = Math.min(fC, dC - gO.stickySidebar.outerHeight());
                            var dUh = gO.container.height() == gO.stickySidebar.outerHeight();
                            J = (dUh || fC != c) && (dUh || fC != gg - gO.stickySidebar.outerHeight()) ? e + fC - gO.sidebar.offset().top - gO.paddingTop <= g.additionalMarginTop ? "static" : "absolute" : "fixed"
                        }
                        if ("fixed" == J) {
                            var ad = f(document).scrollLeft();
                            gO.stickySidebar.css({
                                position: "fixed",
                                width: d(gO.stickySidebar) + "px",
                                transform: "translateY(" + fC + "px)",
                                left: gO.sidebar.offset().left + parseInt(gO.sidebar.css("padding-left")) - ad + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == J) {
                            var F = {};
                            "absolute" != gO.stickySidebar.css("position") && (F.position = "absolute", F.transform = "translateY(" + (e + fC - gO.sidebar.offset().top - gO.stickySidebarPaddingTop - gO.stickySidebarPaddingBottom) + "px)", F.top = "0px"), F.width = d(gO.stickySidebar) + "px", F.left = "", gO.stickySidebar.css(F)
                        } else "static" == J && a();
                        "static" != J && 1 == gO.options.updateSidebarHeight && gO.sidebar.css({
                            "min-height": gO.stickySidebar.outerHeight() + gO.stickySidebar.offset().top - gO.sidebar.offset().top + gO.paddingBottom
                        }), gO.previousScrollTop = e
                    }
                }, gO.onScroll(gO), f(document).on("scroll." + gO.options.namespace, function(f) {
                    return function() {
                        f.onScroll(f)
                    }
                }(gO)), f(window).on("resize." + gO.options.namespace, function(f) {
                    return function() {
                        f.stickySidebar.css({
                            position: "static"
                        }), f.onScroll(f)
                    }
                }(gO)), "undefined" != typeof ResizeSensor && new ResizeSensor(gO.stickySidebar[0], function(f) {
                    return function() {
                        f.onScroll(f)
                    }
                }(gO))
            })
        }

        function d(f) {
            var g;
            try {
                g = f[0].getBoundingClientRect().width
            } catch (f) {}
            return "undefined" == typeof g && (g = f.width()), g
        }
        var W = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return g = f.extend(W, g), g.additionalMarginTop = parseInt(g.additionalMarginTop) || 0, g.additionalMarginBottom = parseInt(g.additionalMarginBottom) || 0, a(g, this), this
    }
}(jQuery);
$(document).ready(function() {
    $("#sidebar").theiaStickySidebar({
        additionalMarginTop: 100
    })
});