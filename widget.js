const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["channel-detail.js", "react-vendor-BYNZdcZL.js", "vendor-YinDUPqL.js", "mdast-util-from-markdown-C54fcu-n.js", "useScrollbar-5ZtkeaEp.js", "react-hook-form-DMF_HXqP.js", "useCountryCode-BaFXhitB.js", "i18n-JfmkiC5i.js", "zod-DkD4_1Ae.js", "libphonenumber-Kugw9uAs.js", "sentry-BiRZxolK.js", "landing-page.js", "Markdown-CB7jbRBW.js", "chat-window.js"]))) => i.map(i => d[i]);
var we = Object.defineProperty;
var Ce = (e, t, s) => t in e ? we(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : e[t] = s;
var v = (e, t, s) => Ce(e, typeof t != "symbol" ? t + "" : t, s);
import {
    r,
    a as D,
    u as be,
    j as l,
    b as U,
    p as z,
    d as G,
    i as Ie,
    e as $,
    f as K,
    R,
    k as Se,
    Q as Ee,
    l as ye
} from "./react-vendor-BYNZdcZL.js";
import {
    A as O,
    B as j,
    C as Me,
    D as X,
    F as Ne
} from "./vendor-YinDUPqL.js";
import {
    i as P,
    B as ve,
    _ as H
} from "./i18n-JfmkiC5i.js";
import {
    i as xe,
    c as Ae,
    h as De,
    b as Le,
    s as q,
    a as ue,
    E as fe,
    d as ke
} from "./sentry-BiRZxolK.js";
import "./mdast-util-from-markdown-C54fcu-n.js";
(function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
        id: "fb4299fa544401e75e047a7d3c1f4008fc7138d1"
    }
})();
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ced411e9-9ab7-4f8b-9807-1c0bdbedfebb", e._sentryDebugIdIdentifier = "sentry-dbid-ced411e9-9ab7-4f8b-9807-1c0bdbedfebb")
    })()
} catch {}
var W = (e => (e.WIDGET = "widget", e.SENDER = "sender", e))(W || {});
let J = !1;
const Te = () => {
        J || (J = !0, xe({
            dsn: "https://78ac4b79c084e96ae78121e6ba400671@o983280.ingest.us.sentry.io/4509822826577921",
            sendDefaultPii: !0,
            environment: "production",
            integrations: [Ae({
                levels: ["error"]
            }), De(), Le({
                instrumentNavigation: !1,
                instrumentPageLoad: !0
            })],
            tracesSampleRate: "0.1",
            beforeSendTransaction(e) {
                return e.contexts = {
                    ...e.contexts,
                    widget: {
                        environment: "production"
                    }
                }, e
            },
            beforeSend(e) {
                return e.tags = {
                    ...e.tags,
                    component: "widget"
                }, e
            }
        }))
    },
    Re = Object.freeze(Object.defineProperty({
        __proto__: null,
        ErrorBoundary: fe,
        SENTRY_CONTEXT_KEYS: W,
        initSentry: Te,
        sentryCaptureException: ue,
        sentryStartSpan: ke,
        setSentryContext: q
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Oe = ({
        title: e,
        titleId: t,
        ...s
    }) => r.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "aria-labelledby": t,
        ...s
    }, e ? r.createElement("title", {
        id: t
    }, e) : null, r.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 19l-7-7 7-7"
    })),
    _e = ({
        title: e,
        titleId: t,
        ...s
    }) => r.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "aria-labelledby": t,
        ...s
    }, e ? r.createElement("title", {
        id: t
    }, e) : null, r.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 5l7 7-7 7"
    })),
    je = ({
        title: e,
        titleId: t,
        ...s
    }) => r.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "aria-labelledby": t,
        ...s
    }, e ? r.createElement("title", {
        id: t
    }, e) : null, r.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M6 18L18 6M6 6l12 12"
    })),
    Pe = ({
        title: e,
        titleId: t,
        ...s
    }) => r.createElement("svg", {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": t,
        ...s
    }, e ? r.createElement("title", {
        id: t
    }, e) : null, r.createElement("path", {
        d: "M16 12V12.8C16 13.9201 16 14.4802 15.782 14.908C15.5903 15.2843 15.2843 15.5903 14.908 15.782C14.4802 16 13.9201 16 12.8 16H7.2C6.07989 16 5.51984 16 5.09202 15.782C4.71569 15.5903 4.40973 15.2843 4.21799 14.908C4 14.4802 4 13.9201 4 12.8V12M13.3333 8.66667L10 12M10 12L6.66667 8.66667M10 12V4",
        stroke: "currentColor",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    Ue = ({
        title: e,
        titleId: t,
        ...s
    }) => r.createElement("svg", {
        width: 14,
        height: 16,
        viewBox: "0 0 14 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": t,
        ...s
    }, e ? r.createElement("title", {
        id: t
    }, e) : null, r.createElement("path", {
        d: "M0.546875 13.7789C0.576549 15.1896 1.91372 16.0439 3.0852 15.3724L12.5059 9.59539C13.0189 9.28036 13.3671 8.70296 13.3671 8.02656C13.3671 7.34995 13.0189 6.77272 12.5059 6.45772L3.0852 0.688549C1.91367 0.017039 0.576533 0.862935 0.546875 2.27387V13.7789Z",
        fill: "currentColor"
    })),
    He = D((e, t) => ({
        isOpen: !1,
        files: [],
        currentIndex: 0,
        actions: {
            openCarousel: (s, n = 0) => e({
                isOpen: !0,
                files: s,
                currentIndex: n
            }),
            closeCarousel: () => e({
                isOpen: !1,
                files: [],
                currentIndex: 0
            }),
            setCurrentIndex: s => e({
                currentIndex: Math.max(0, Math.min(s, t().files.length - 1))
            }),
            nextSlide: () => {
                const {
                    currentIndex: s,
                    files: n
                } = t(), a = s < n.length - 1 ? s + 1 : 0;
                e({
                    currentIndex: a
                })
            },
            prevSlide: () => {
                const {
                    currentIndex: s,
                    files: n
                } = t(), a = s > 0 ? s - 1 : n.length - 1;
                e({
                    currentIndex: a
                })
            }
        }
    })),
    We = ({
        currentIndex: e,
        totalFiles: t,
        onDownload: s,
        onClose: n
    }) => {
        const {
            t: a
        } = U("common");
        return l.jsxs(l.Fragment, {
            children: [l.jsxs("div", {
                className: "sf:absolute sf:top-4 sf:left-4 sf:z-9999 sf:bg-white/20 sf:backdrop-blur-sm sf:rounded-full sf:px-3 sf:py-1 sf:text-white sf:text-sm",
                children: [e + 1, " / ", t]
            }), l.jsxs("div", {
                className: "sf:absolute sf:top-4 sf:right-4 sf:z-9999 sf:flex sf:gap-2",
                children: [l.jsx("button", {
                    onClick: s,
                    className: "sf:w-10 sf:h-10 sf:bg-white/20 sf:backdrop-blur-sm sf:rounded-full sf:flex sf:items-center sf:justify-center sf:text-white sf:hover:bg-white/30 sf:transition-colors sf:cursor-pointer",
                    "aria-label": a("mediaMessageCarousel.download"),
                    children: l.jsx(Pe, {
                        className: "sf:w-5 sf:h-5 sf:text-white"
                    })
                }), l.jsx("button", {
                    onClick: n,
                    className: "sf:w-10 sf:h-10 sf:bg-white/20 sf:backdrop-blur-sm sf:rounded-full sf:flex sf:items-center sf:justify-center sf:text-white sf:hover:bg-white/30 sf:transition-colors sf:cursor-pointer",
                    "aria-label": a("mediaMessageCarousel.closeCarousel"),
                    children: l.jsx(je, {
                        className: "sf:w-6 sf:h-6 sf:text-white"
                    })
                })]
            })]
        })
    },
    Y = ({
        direction: e,
        onClick: t
    }) => {
        const {
            t: s
        } = U("common"), n = e === "next", a = n ? "sf:right-4" : "sf:left-4", o = n ? _e : Oe, i = s(n ? "mediaMessageCarousel.nextMedia" : "mediaMessageCarousel.previousMedia");
        return l.jsx("button", {
            onClick: t,
            className: `sf:absolute ${a} sf:top-1/2 sf:-translate-y-1/2 sf:w-12 sf:h-12 sf:bg-white/20 sf:backdrop-blur-sm sf:rounded-full sf:flex sf:items-center sf:justify-center sf:text-white sf:hover:bg-white/30 sf:transition-colors sf:cursor-pointer`,
            "aria-label": i,
            children: l.jsx(o, {
                className: "sf:w-6 sf:h-6 sf:text-white"
            })
        })
    },
    Fe = ({
        file: e
    }) => {
        const {
            t
        } = U("common"), s = e.mimeType?.startsWith("image/"), n = e.mimeType?.startsWith("video/"), a = "sf:flex sf:items-center sf:justify-center sf:h-full sf:w-full sf:opacity-100 sf:transition-opacity sf:duration-300", o = "sf:max-w-[80%] sf:max-h-[70%] sf:object-contain sf:rounded-lg sf:transition-all sf:duration-300 sf:shadow-2xl";
        return s ? l.jsx("div", {
            className: a,
            children: l.jsx("img", {
                src: e.url,
                alt: e.filename || "Media",
                className: o,
                draggable: !1
            })
        }) : n ? l.jsx("div", {
            className: a,
            children: l.jsx("video", {
                src: e.url,
                controls: !0,
                className: o,
                autoPlay: !0,
                children: t("mediaMessageCarousel.unsupportedMediaType")
            })
        }) : l.jsx("div", {
            className: "sf:flex sf:items-center sf:justify-center sf:h-full sf:w-full sf:text-white",
            children: l.jsx("span", {
                children: t("mediaMessageCarousel.unsupportedMediaType")
            })
        })
    },
    Ve = ({
        files: e,
        currentIndex: t,
        onThumbnailClick: s
    }) => l.jsx("div", {
        className: "sf:absolute sf:bottom-4 sf:left-1/2 sf:-translate-x-1/2 sf:flex sf:space-x-2 sf:bg-white/20 sf:backdrop-blur-sm sf:rounded-full sf:px-4 sf:py-2 sf:max-w-xs sf:overflow-x-auto",
        children: e.map((n, a) => {
            const o = a === t;
            return l.jsx("button", {
                onClick: () => s(a),
                className: O({
                    "sf:w-8 sf:h-8 sf:rounded-full sf:flex-shrink-0 sf:overflow-hidden sf:border-2 sf:transition-colors sf:cursor-pointer": !0,
                    "sf:border-white": o,
                    "sf:border-white/50 sf:hover:border-white/80": !o
                }),
                children: n.mimeType?.startsWith("image/") ? l.jsx("img", {
                    src: n.url,
                    alt: "",
                    className: "sf:w-full sf:h-full sf:object-cover"
                }) : l.jsx("div", {
                    className: "sf:w-full sf:h-full sf:bg-gray-800 sf:flex sf:items-center sf:justify-center",
                    children: l.jsx(Ue, {
                        className: "sf:w-3 sf:h-3 sf:text-white"
                    })
                })
            }, n.fileId || a)
        })
    }),
    Be = () => {
        const {
            isOpen: e,
            files: t,
            currentIndex: s,
            actions: n
        } = He(), [a, o] = be({
            startIndex: s,
            align: "center",
            containScroll: "trimSnaps",
            dragFree: !1,
            duration: 20
        });
        r.useEffect(() => {
            e && o && o.scrollTo(s, !1)
        }, [o, s, e]), r.useEffect(() => {
            if (e && o) {
                const m = () => {
                    n.setCurrentIndex(o.selectedScrollSnap())
                };
                return o.on("select", m), () => {
                    o.off("select", m)
                }
            }
        }, [o, n, e]), r.useEffect(() => {
            if (!e) return;
            const m = c => {
                const f = {
                    Escape: n.closeCarousel,
                    ArrowLeft: n.prevSlide,
                    ArrowRight: n.nextSlide
                } [c.key];
                f?.()
            };
            return document.body.style.overflow = "hidden", document.addEventListener("keydown", m), () => {
                document.body.style.overflow = "", document.removeEventListener("keydown", m)
            }
        }, [e, n]);
        const i = r.useCallback(async m => {
            const c = document.createElement("a"),
                u = m.filename?.split("/").pop() || `media-${Date.now()}`,
                h = await (await fetch(m.url)).blob(),
                I = window.URL.createObjectURL(h);
            c.href = I, c.download = u, document.body.appendChild(c), c.click(), document.body.removeChild(c), window.URL.revokeObjectURL(I)
        }, []);
        if (!e || t.length === 0) return null;
        const d = t[s],
            g = t.length > 1;
        return l.jsxs("div", {
            className: "sf:fixed sf:inset-0 sf:bg-black/90 sf:z-[9999] sf:flex sf:items-center sf:justify-center",
            children: [l.jsx(We, {
                currentIndex: s,
                totalFiles: t.length,
                onDownload: () => i(d),
                onClose: n.closeCarousel
            }), l.jsx("div", {
                className: "sf:w-full sf:h-full sf:max-w-6xl sf:max-h-full sf:mx-auto sf:px-4 sf:py-8",
                children: l.jsx("div", {
                    className: "embla sf:h-full",
                    ref: a,
                    children: l.jsx("div", {
                        className: "embla__container sf:flex sf:h-full sf:transition-transform sf:duration-300 sf:ease-out",
                        children: t.map((m, c) => l.jsx("div", {
                            className: "embla__slide sf:flex sf:items-center sf:justify-center sf:flex-[0_0_100%] sf:min-w-0 sf:h-full sf:transition-transform sf:duration-300 sf:ease-in-out",
                            children: l.jsx(Fe, {
                                file: m
                            })
                        }, m.fileId || c))
                    })
                })
            }), g && l.jsxs(l.Fragment, {
                children: [l.jsx(Y, {
                    direction: "prev",
                    onClick: n.prevSlide
                }), l.jsx(Y, {
                    direction: "next",
                    onClick: n.nextSlide
                })]
            }), g && l.jsx(Ve, {
                files: t,
                currentIndex: s,
                onThumbnailClick: n.setCurrentIndex
            })]
        })
    },
    ze = () => {
        const [e, t] = r.useState(() => typeof window < "u" ? window.location.href : "");
        return r.useEffect(() => {
            if (typeof window > "u") return;
            const s = () => {
                t(window.location.href)
            };
            window.addEventListener("popstate", s);
            const n = window.history.pushState,
                a = window.history.replaceState;
            return window.history.pushState = function(...o) {
                n.apply(window.history, o), s()
            }, window.history.replaceState = function(...o) {
                a.apply(window.history, o), s()
            }, () => {
                window.removeEventListener("popstate", s), window.history.pushState = n, window.history.replaceState = a
            }
        }, []), e
    };

function ee({
    backgroundVariant: e = "diagonal"
}) {
    return l.jsx("div", {
        className: O({
            "sf:overflow-hidden sf:flex sf:flex-col sf:items-center sf:justify-center sf:sm:rounded-2xl": !0,
            "sf:widget-window": !0,
            "sf:background-gradient-diagonal": e === "diagonal",
            "sf:background-gradient-top": e === "top"
        }),
        children: l.jsx("div", {
            className: "sf:loading-indicator"
        })
    })
}
const b = D()(z(e => ({
        senderId: null,
        signature: null,
        hasContactFormSubmitted: !1,
        actions: {
            setSenderId: t => {
                e({
                    senderId: t
                })
            },
            setSignature: t => {
                e({
                    signature: t
                })
            },
            setHasContactFormSubmitted: t => {
                e({
                    hasContactFormSubmitted: t
                })
            },
            clearSender: () => {
                e({
                    senderId: null,
                    signature: null,
                    hasContactFormSubmitted: !1
                })
            },
            getStorageKey: (t, s) => `sf-live-chat-sender-${t}-${s}`
        }
    }), {
        name: "sf-live-chat-sender",
        storage: G(() => localStorage),
        partialize: e => ({
            senderId: e.senderId,
            signature: e.signature
        })
    })),
    Ge = () => {
        const [e, t] = r.useState(!1);
        return r.useEffect(() => {
            const s = b.persist.onHydrate(() => {
                    t(!1)
                }),
                n = b.persist.onFinishHydration(() => {
                    t(!0)
                });
            return t(b.persist.hasHydrated()), () => {
                s(), n()
            }
        }, []), e
    },
    $e = ["de-DE", "en", "id-ID", "it", "pt-BR", "zh-HK", "zh-CN"];
P.use(ve).use(Ie).init({
    fallbackLng: {
        id: ["id-ID"],
        zh: ["zh-HK"],
        pt: ["pt-BR"],
        default: ["en"]
    },
    supportedLngs: $e,
    backend: {
        loadPath: "https://slceasprodbe932739.z7.web.core.windows.net/locales/{{lng}}/{{ns}}.json"
    },
    defaultNS: "common",
    ns: ["common"]
});
const _ = () => {
        const {
            senderId: e
        } = b();
        return {
            senderId: e
        }
    },
    ge = e => {
        const {
            senderId: t,
            actions: {
                setHasContactFormSubmitted: s
            }
        } = b();
        return $({
            queryKey: ["sender", t],
            queryFn: async () => {
                const n = await N.get(`/LiveChatV2/Public/Senders/${t}`);
                return n.data && s(!!n.data.sender?.metadata?.contact_form), n.data
            },
            enabled: !!t,
            ...e
        })
    },
    L = () => {
        const e = document.querySelector("script[data-companyid]"),
            t = r.useMemo(() => ({
                companyId: e.getAttribute("data-companyid"),
                location: e.getAttribute("data-location"),
                widgetId: e.getAttribute("data-widgetid"),
                env: e.getAttribute("data-env") || "production"
            }), [e]);
        return r.useEffect(() => {
            t && q(W.WIDGET, t)
        }, [t]), t
    },
    Ke = 24 * 60 * 60 * 1e3,
    qe = "PAGE_VISITED",
    T = D()(z((e, t) => ({
        session: null,
        actions: {
            validateAndSetSession: () => {
                const s = t().session,
                    n = Date.now();
                if (!s || s.endedAt && n - s.endedAt > Ke) {
                    const a = {
                        id: j(),
                        startedAt: n,
                        endedAt: null,
                        landingPage: {
                            url: window.location.href,
                            title: document.title
                        },
                        dropoffPage: null
                    };
                    e({
                        session: a
                    })
                }
            },
            setSessionDropoff: () => {
                const s = t().session;
                if (!s) return;
                const n = {
                    ...s,
                    endedAt: Date.now(),
                    dropoffPage: {
                        url: window.location.href,
                        title: document.title
                    }
                };
                e({
                    session: n
                })
            },
            getStorageKey: (s, n) => `sf-live-chat-session-${s}-${n}`
        }
    }), {
        name: "sf-live-chat-session",
        storage: G(() => localStorage),
        partialize: e => ({
            session: e.session
        })
    })),
    Qe = () => {
        const {
            companyId: e
        } = L(), {
            config: t
        } = y(), {
            actions: {
                validateAndSetSession: s,
                getStorageKey: n
            }
        } = T(), a = r.useCallback(async () => {
            const o = n(t?.channelIdentityId || "", e || "");
            !t?.channelIdentityId || !e || (T.persist.getOptions().name !== o && (T.persist.setOptions({
                name: o
            }), await T.persist.rehydrate()), s())
        }, [n, t, e, s]);
        r.useEffect(() => {
            a()
        }, [a])
    };
let B = null,
    se = null;
const me = () => {
        const {
            config: e
        } = y(), {
            location: t
        } = L(), {
            senderId: s
        } = _(), {
            session: n
        } = T(), a = e?.channelIdentityId, o = K({
            mutationFn: async () => {
                if (!s || !a || !n) return;
                const d = b.getState().signature,
                    g = ds(t),
                    c = `${g||Q}/LiveChatV2/Public/Senders/${s}/Tracking`,
                    u = JSON.stringify({
                        name: qe,
                        senderId: s,
                        channelIdentityId: a,
                        startedAt: B ? new Date(B).toISOString() : null,
                        endedAt: new Date().toISOString(),
                        metadata: {
                            visitedPage: {
                                url: window.location.href,
                                title: document.title
                            },
                            referralPage: se,
                            session: {
                                id: n.id,
                                startedAt: n.startedAt ? new Date(n.startedAt).toISOString() : null,
                                endedAt: n.endedAt ? new Date(n.endedAt).toISOString() : null,
                                landingPage: n.landingPage,
                                dropoffPage: n.dropoffPage
                            },
                            lang: P.language
                        },
                        senderSignature: d
                    });
                let f = !1;
                if (typeof navigator.sendBeacon == "function" && g) {
                    const h = new Blob([u], {
                        type: "text/plain"
                    });
                    f = navigator.sendBeacon(c, h)
                }
                if (!f) {
                    const h = {
                        "Content-Type": "text/plain"
                    };
                    t && (h["X-Sleekflow-Location"] = t), fetch(c, {
                        method: "POST",
                        headers: h,
                        body: u,
                        keepalive: !0
                    }).catch(() => {})
                }
            }
        }), i = r.useCallback(() => {
            se = {
                url: window.location.href,
                title: document.title
            }
        }, []);
        return {
            firePageVisitedEventMutation: o,
            setReferralPage: i
        }
    },
    Ze = () => {
        Qe();
        const {
            actions: {
                setSessionDropoff: e
            }
        } = T(), {
            firePageVisitedEventMutation: t
        } = me(), s = r.useCallback(() => {
            e(), t.mutate()
        }, [t, e]);
        r.useEffect(() => {
            B = Date.now()
        }, []), r.useEffect(() => (window.addEventListener("pagehide", s), () => {
            window.removeEventListener("pagehide", s)
        }), [s])
    };
var p = (e => (e.LANDING_PAGE = "LANDING_PAGE", e.CHAT_WINDOW = "CHAT_WINDOW", e.CHANNEL_DETAIL = "CHANNEL_DETAIL", e.MINIMIZED = "MINIMIZED", e))(p || {});
const F = D((e, t) => ({
        isLoading: !1,
        error: null,
        pendingMessage: null,
        autoSendOnOpen: !1,
        currentView: p.MINIMIZED,
        currentChannelDetailType: null,
        isWidgetVisible: () => t().currentView !== p.MINIMIZED,
        isWidgetMinimized: () => t().currentView === p.MINIMIZED,
        actions: {
            toggleWidget: () => e(s => ({
                currentView: s.currentView === p.MINIMIZED ? p.LANDING_PAGE : p.MINIMIZED
            })),
            setIsLoading: s => e({
                isLoading: s
            }),
            setError: s => e({
                error: s
            }),
            clearError: () => e({
                error: null
            }),
            openWidgetWithMessage: s => e({
                currentView: p.CHAT_WINDOW,
                pendingMessage: s,
                autoSendOnOpen: !0
            }),
            clearPendingMessage: () => e({
                pendingMessage: null,
                autoSendOnOpen: !1
            }),
            setCurrentView: s => e({
                currentView: s
            }),
            setChannelDetailType: s => e({
                currentChannelDetailType: s
            })
        }
    })),
    Xe = R.lazy(() => H(() => import("./channel-detail.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))),
    Je = R.lazy(() => H(() => import("./landing-page.js"), __vite__mapDeps([11, 1, 2, 3, 4, 12, 7, 10]))),
    Ye = R.lazy(() => H(() => import("./chat-window.js"), __vite__mapDeps([13, 1, 2, 3, 4, 6, 7, 12, 10]))),
    es = ({
        widgetConfig: e
    }) => {
        const {
            currentView: t,
            actions: s
        } = F(), {
            selectChannel: n
        } = as(), {
            setReferralPage: a
        } = me(), o = r.useMemo(() => ({
            goToLandingPage: () => {
                s.setCurrentView(p.LANDING_PAGE)
            },
            goToChatWindow: () => {
                s.setCurrentView(p.CHAT_WINDOW)
            },
            goToChannelDetail: u => {
                n(u)
            },
            minimize: () => {
                s.setCurrentView(p.MINIMIZED)
            }
        }), [s, n]), i = r.useCallback(u => {
            o.goToChannelDetail(u)
        }, [o]), d = r.useCallback(() => {
            a(), o.goToChatWindow()
        }, [o, a]), g = r.useCallback(() => {
            o.goToLandingPage()
        }, [o]), m = r.useCallback(u => {
            i(u)
        }, [i]), c = () => {
            switch (t) {
                case p.LANDING_PAGE:
                    return l.jsx(Je, {
                        onStartChat: d,
                        onChannelSelect: i,
                        onMinimize: o.minimize
                    });
                case p.CHAT_WINDOW:
                    return l.jsx(R.Suspense, {
                        fallback: l.jsx(ee, {
                            backgroundVariant: "top"
                        }),
                        children: l.jsx(Ye, {
                            widgetConfig: e,
                            onBack: g,
                            onMinimize: o.minimize,
                            onContactOtherChannels: m
                        })
                    });
                case p.CHANNEL_DETAIL:
                    return l.jsx(R.Suspense, {
                        fallback: l.jsx(ee, {
                            backgroundVariant: "diagonal"
                        }),
                        children: l.jsx(Xe, {
                            onBack: o.goToLandingPage,
                            onMinimize: o.minimize,
                            onContinue: () => {
                                o.minimize()
                            }
                        })
                    });
                case p.MINIMIZED:
                    return null;
                default:
                    return null
            }
        };
        return l.jsx("div", {
            className: O("sf:w-dvw sf:h-dvh sf:rounded-none sf:shadow-none sf:widget-chatbox-spacing", "sf:sm:w-[420px] sf:sm:h-[680px] sf:sm:rounded-2xl sf:sm:shadow-widget"),
            children: c()
        })
    },
    ss = new Set(["line"]);

function ts(e, t, s) {
    const n = e.charAt(0).toUpperCase() + e.slice(1),
        a = (() => {
            switch (e) {
                case "whatsapp":
                    return {
                        name: s("channels.whatsapp", "WhatsApp")
                    };
                case "facebook":
                    return {
                        name: s("channels.facebook", "Facebook")
                    };
                case "instagram":
                    return {
                        name: s("channels.instagram", "Instagram")
                    };
                case "wechat":
                    return {
                        name: s("channels.wechat", "WeChat")
                    };
                case "line":
                    return {
                        name: s("channels.line", "LINE")
                    };
                case "telegram":
                    return {
                        name: s("channels.telegram", "Telegram")
                    };
                case "viber":
                    return {
                        name: s("channels.viber", "Viber")
                    };
                case "twilioSms":
                    return {
                        name: s("channels.twilioSms", "SMS")
                    };
                default:
                    return {
                        name: n
                    }
            }
        })();
    return {
        name: a.name,
        type: e,
        displayName: String(t?.channelDisplayName || t?.name || a.name)
    }
}

function te(e, t) {
    if (!t) return "";
    switch (e) {
        case "whatsapp": {
            const s = t?.whatsappPhoneNumber || t?.facebookDisplayPhoneNumber;
            return s ? `https://wa.me/${String(s).replace(/[^0-9]/g,"")}` : ""
        }
        case "facebook": {
            const s = t?.pageId;
            return s ? `https://m.me/${s}` : ""
        }
        case "instagram": {
            const s = t?.name;
            return s ? `https://ig.me/m/${s}` : ""
        }
        case "line": {
            const s = t?.basicId;
            return s ? `https://line.me/R/ti/p/${s}` : ""
        }
        case "telegram": {
            const s = t?.telegramDeeplink;
            return String(s)
        }
        case "viber": {
            const s = t?.viberDeeplink;
            return String(s)
        }
        case "twilioSms": {
            const s = t?.phoneNumber || t?.twilioPhoneNumber;
            return s ? `sms:${String(s).replace(/[^0-9+]/g,"")}` : ""
        }
        default:
            return ""
    }
}

function ne(e, t) {
    return e === "wechat" ? t?.qrCodeURL : ""
}

function ns(e, t, s) {
    const n = t.name;
    return {
        title: s("channelDetail.common.title", {
            defaultValue: "Chat with us on {{channelName}}",
            channelName: n
        }),
        description: s("channelDetail.common.description", {
            defaultValue: "Scan the QR code to start chatting with us on {{channelName}}",
            channelName: n
        }),
        continueButtonText: s("channelDetail.common.continueButtonText", {
            defaultValue: "Continue on {{channelName}}",
            channelName: n
        }),
        continueButtonDescription: s("channelDetail.common.continueButtonDescription", {
            defaultValue: "Click the button below to open {{channelName}} directly",
            channelName: n
        })
    }
}
const as = ({
        channelType: e
    } = {}) => {
        const {
            t
        } = U(), {
            channelConfig: s
        } = y(), {
            actions: n
        } = F(), a = r.useMemo(() => e ? s.options?.[e] : null, [e, s.options]), o = r.useMemo(() => e ? ts(e, a || null, t) : null, [e, a, t]), i = r.useMemo(() => e ? te(e, a || null) : "", [e, a]), d = r.useMemo(() => e ? ne(e, a || null) : "", [e, a]), g = r.useMemo(() => !e || !o ? {
            title: "",
            description: "",
            continueButtonText: "",
            continueButtonDescription: ""
        } : ns(e, o, t), [e, o, t]), m = r.useCallback(f => {
            const h = te(f, s.options?.[f] ?? null),
                I = ne(f, s.options?.[f] ?? null);
            !h && !I || (ss.has(f) ? window.open(h, "_blank", "noopener,noreferrer") : (n.setCurrentView(p.CHANNEL_DETAIL), n.setChannelDetailType(f)))
        }, [n, s.options]), c = r.useMemo(() => s.availableChannels.livechat, [s.availableChannels]), u = r.useMemo(() => Object.entries(s.availableChannels).some(([f, h]) => h && f !== "livechat"), [s.availableChannels]);
        return {
            channelData: a,
            channelInfo: o,
            channelUrl: i,
            qrCodeImage: d,
            copywriting: g,
            selectChannel: m,
            isLiveChatAvailable: c,
            isOtherChannelsAvailable: u
        }
    },
    ae = {
        phoneNumber: "",
        message: "",
        isMarketingConsent: !1
    },
    Ws = D((e, t) => ({
        formData: ae,
        actions: {
            updateField: (s, n) => e(a => ({
                formData: {
                    ...a.formData,
                    [s]: n
                }
            })),
            updateFormData: s => e(n => ({
                formData: {
                    ...n.formData,
                    ...s
                }
            })),
            clearForm: () => e({
                formData: ae
            }),
            getFormData: () => t().formData
        }
    })),
    C = {
        CONNECT: "CONNECT",
        SUBSCRIBE: "SUBSCRIBE",
        UNSUBSCRIBE: "UNSUBSCRIBE",
        INVOKE: "INVOKE",
        DISCONNECT: "DISCONNECT",
        READY: "READY",
        CONNECTED: "CONNECTED",
        DISCONNECTED: "DISCONNECTED",
        RECONNECTING: "RECONNECTING",
        MESSAGE: "MESSAGE",
        INVOKE_RESULT: "INVOKE_RESULT",
        INVOKE_ERROR: "INVOKE_ERROR",
        ERROR: "ERROR"
    };
var E = (e => (e.DISCONNECTED = "Disconnected", e.CONNECTING = "Connecting", e.CONNECTED = "Connected", e.DISCONNECTING = "Disconnecting", e.RECONNECTING = "Reconnecting", e))(E || {});
class os {
    constructor() {
        v(this, "iframe");
        v(this, "eventHandlers", new Map);
        v(this, "pendingInvokes", new Map);
        v(this, "onStateChange");
        v(this, "isReady", !1);
        v(this, "messageQueue", []);
        v(this, "handleMessage", t => {
            if (!t.data || typeof t.data != "object") return;
            const s = t.data,
                {
                    type: n,
                    method: a,
                    args: o,
                    error: i,
                    id: d,
                    result: g
                } = s;
            switch (n) {
                case C.READY:
                    this.isReady = !0, this.processMessageQueue();
                    break;
                case C.CONNECTED:
                case C.DISCONNECTED:
                case C.RECONNECTING:
                    this.onStateChange?.(n);
                    break;
                case C.MESSAGE:
                    a && o && this.eventHandlers.get(a)?.(...o);
                    break;
                case C.INVOKE_RESULT:
                    d && (this.pendingInvokes.get(d)?.resolve(g), this.pendingInvokes.delete(d));
                    break;
                case C.INVOKE_ERROR:
                    d && (this.pendingInvokes.get(d)?.reject(new Error(i || "Invoke failed")), this.pendingInvokes.delete(d));
                    break;
                case C.ERROR:
                    console.error("SignalR Bridge Error:", i);
                    break
            }
        });
        this.iframe = document.createElement("iframe"), this.iframe.src = "https://slceasprodbe932739.z7.web.core.windows.net/signalr-bridge.html", this.iframe.style.display = "none", this.iframe.style.width = "0", this.iframe.style.height = "0", this.iframe.style.border = "none", document.body.appendChild(this.iframe), window.addEventListener("message", this.handleMessage.bind(this))
    }
    processMessageQueue() {
        for (; this.messageQueue.length > 0;) {
            const t = this.messageQueue.shift();
            this.postMessage(t)
        }
    }
    postMessage(t) {
        this.isReady && this.iframe.contentWindow ? this.iframe.contentWindow.postMessage(t, "*") : this.messageQueue.push(t)
    }
    connect(t, s, n) {
        this.postMessage({
            type: C.CONNECT,
            data: {
                url: t,
                location: s,
                groupName: n
            }
        })
    }
    on(t, s) {
        this.eventHandlers.set(t, s), this.postMessage({
            type: C.SUBSCRIBE,
            data: {
                method: t
            }
        })
    }
    off(t) {
        this.eventHandlers.delete(t), this.postMessage({
            type: C.UNSUBSCRIBE,
            data: {
                method: t
            }
        })
    }
    async invoke(t, ...s) {
        const n = Math.random().toString(36).substr(2, 9);
        return new Promise((a, o) => {
            this.pendingInvokes.set(n, {
                resolve: a,
                reject: o
            }), this.postMessage({
                type: C.INVOKE,
                data: {
                    method: t,
                    args: s,
                    id: n
                }
            })
        })
    }
    onConnectionStateChanged(t) {
        this.onStateChange = t
    }
    destroy() {
        this.iframe.parentNode && this.iframe.parentNode.removeChild(this.iframe), window.removeEventListener("message", this.handleMessage), this.eventHandlers.clear(), this.pendingInvokes.clear()
    }
}
const rs = D((e, t) => {
        let s = null;
        return {
            bridge: null,
            connectionState: E.DISCONNECTED,
            isConnecting: !1,
            isConnected: !1,
            error: null,
            url: null,
            reconnectAttempts: 0,
            maxReconnectAttempts: 5,
            groupName: null,
            isConnectionActive: () => {
                const n = t();
                return n.isConnected && n.connectionState === E.CONNECTED
            },
            canReconnect: () => {
                const n = t();
                return n.reconnectAttempts < n.maxReconnectAttempts
            },
            actions: {
                connect: async (n, a, o) => {
                    const i = t();
                    if (!(i.isConnecting || i.isConnected)) try {
                        e({
                            isConnecting: !0,
                            connectionState: E.CONNECTING,
                            error: null,
                            url: n,
                            groupName: o
                        }), s = new os, s.onConnectionStateChanged(d => {
                            e(g => {
                                let m = E.DISCONNECTED,
                                    c = !1,
                                    u = g.reconnectAttempts;
                                return d === C.CONNECTED ? (m = E.CONNECTED, u = 0) : d === C.RECONNECTING && (m = E.RECONNECTING, c = !0, u += 1), {
                                    connectionState: m,
                                    isConnected: m === E.CONNECTED,
                                    isConnecting: c,
                                    reconnectAttempts: u
                                }
                            })
                        }), s.connect(n, a, o), e({
                            bridge: s,
                            reconnectAttempts: 0
                        })
                    } catch (d) {
                        console.error("SignalR connection failed:", d);
                        const g = d instanceof Error ? d.message : "Connection failed";
                        throw e({
                            bridge: null,
                            connectionState: E.DISCONNECTED,
                            isConnected: !1,
                            isConnecting: !1,
                            error: g
                        }), d
                    }
                },
                disconnect: async () => {
                    try {
                        e({
                            connectionState: E.DISCONNECTING,
                            isConnecting: !1
                        }), s && (s.destroy(), s = null), e({
                            bridge: null,
                            connectionState: E.DISCONNECTED,
                            isConnected: !1,
                            isConnecting: !1,
                            error: null,
                            url: null,
                            groupName: null
                        })
                    } catch (n) {
                        console.error("SignalR disconnect failed:", n);
                        const a = n instanceof Error ? n.message : "Disconnect failed";
                        throw e({
                            error: a
                        }), n
                    }
                },
                invokeMethod: async (n, ...a) => {
                    if (!s) throw new Error("SignalR connection is not active");
                    try {
                        await s.invoke(n, ...a)
                    } catch (o) {
                        throw console.error(`SignalR invoke method failed for method ${n}:`, o), o
                    }
                },
                subscribe: (n, a) => {
                    if (!s) {
                        console.warn("Cannot register handler: SignalR connection is not available");
                        return
                    }
                    try {
                        s.on(n, a), console.log(`Subscribed to SignalR method: ${n}`)
                    } catch (o) {
                        console.error(`Failed to subscribe to SignalR method ${n}:`, o)
                    }
                },
                unsubscribe: n => {
                    if (s) try {
                        s.off(n), console.log(`Unsubscribed from SignalR method: ${n}`)
                    } catch (a) {
                        console.error(`Failed to unsubscribe from SignalR method ${n}:`, a)
                    }
                },
                setError: n => {
                    e({
                        error: n
                    })
                },
                clearError: () => {
                    e({
                        error: null
                    })
                },
                resetReconnectAttempts: () => {
                    e({
                        reconnectAttempts: 0
                    })
                }
            }
        }
    }),
    oe = "https://sleekflow-core-production-hac3h0azhvcub0aq.z01.azurefd.net/chat",
    he = () => {
        const {
            companyId: e,
            widgetId: t,
            location: s
        } = L(), {
            senderId: n
        } = _(), {
            isConnected: a,
            actions: {
                connect: o,
                subscribe: i,
                unsubscribe: d,
                disconnect: g
            }
        } = rs();
        r.useEffect(() => {
            (async () => {
                if (!(!oe || !s || !e || !t || !n)) try {
                    await g();
                    const f = `${e}_livechat_${n}_${t}`;
                    await o(oe, s, f)
                } catch (f) {
                    console.error("Failed to connect and join group:", f)
                }
            })()
        }, [s, o, e, t, n, g]);
        const m = r.useCallback((u, f) => {
                i(u, f)
            }, [i]),
            c = r.useCallback((u, f) => {
                d(u, f)
            }, [d]);
        return {
            isConnected: a,
            subscribe: m,
            unsubscribe: c
        }
    },
    is = e => K({
        mutationFn: async t => (await N.post("/LiveChatV2/Public/Senders", t)).data,
        ...e
    }),
    cs = () => {
        const {
            companyId: e
        } = L(), {
            config: t
        } = y(), {
            senderId: s,
            actions: {
                setSenderId: n,
                setSignature: a,
                getStorageKey: o
            }
        } = b(), i = Ge(), d = is({
            onSuccess: c => {
                n(c.id), a(c.sessionSignature)
            }
        }), g = ge({
            retry: 0
        }), m = r.useCallback(async () => {
            const c = o(t?.channelIdentityId || "", e || "");
            if (!(!t?.channelIdentityId || !e)) {
                if (b.persist.getOptions().name !== c) {
                    b.persist.setOptions({
                        name: c
                    }), b.persist.rehydrate();
                    return
                }
                if (i) {
                    if (!s && !d.isPending && !d.isError) try {
                        await d.mutateAsync({
                            liveChatId: t.channelIdentityId,
                            companyId: e
                        })
                    } catch (u) {
                        console.error("Failed to auto-create sender:", u)
                    }
                    if (g.isError && !d.isPending) try {
                        await d.mutateAsync({
                            liveChatId: t.channelIdentityId,
                            companyId: e
                        });
                        return
                    } catch (u) {
                        console.error("Failed to re-create sender:", u)
                    }
                }
            }
        }, [o, t, e, i, s, d, g]);
        r.useEffect(() => {
            s && q(W.SENDER, {
                senderId: s
            })
        }, [s]), r.useEffect(() => {
            m()
        }, [m])
    };
var k = (e => (e.EAST_ASIA = "eastasia", e.EAST_US = "eastus", e.SOUTHEAST_ASIA = "southeastasia", e.UAE_NORTH = "uaenorth", e.WEST_EUROPE = "westeurope", e))(k || {});
const Q = "https://sleekflow-core-production-hac3h0azhvcub0aq.z01.azurefd.net",
    ls = {
        [k.EAST_ASIA]: "https://sleekflow-core-app-eas-production.azurewebsites.net",
        [k.EAST_US]: "https://sleekflow-core-app-eus-production.azurewebsites.net",
        [k.SOUTHEAST_ASIA]: "https://sleekflow-core-app-seas-production.azurewebsites.net",
        [k.UAE_NORTH]: "https://sleekflow-core-app-uaen-production.azurewebsites.net",
        [k.WEST_EUROPE]: "https://sleekflow-core-app-weu-production.azurewebsites.net"
    },
    ds = e => e ? ls[e] : Q,
    N = Me.create({
        baseURL: Q,
        timeout: 1e4,
        headers: {
            "Content-Type": "application/json"
        }
    });
N.interceptors.request.use(e => {
    const t = b.getState().signature;
    return t && (e.headers["X-Sleekflow-LiveChat-Signature"] = t), e
}, e => Promise.reject(e));
N.interceptors.response.use(e => e, e => (ue(e), Promise.reject(e)));
const us = () => {
        const {
            location: e
        } = L();
        r.useEffect(() => {
            N.defaults.headers.common["X-Sleekflow-Location"] = e
        }, [e])
    },
    y = () => {
        const {
            widgetId: e,
            companyId: t,
            location: s
        } = L(), n = $({
            queryKey: ["widgetConfig", e],
            queryFn: async () => {
                await new Promise(h => setTimeout(h, 500));
                const {
                    data: f
                } = await N.get(`/LiveChatV2/Public/Configs?channelIdentityId=${e}`);
                return f
            },
            enabled: !!e && !!t && !!s,
            staleTime: 5 * 60 * 1e3,
            gcTime: 10 * 60 * 1e3,
            retry: 3,
            retryDelay: f => Math.min(1e3 * 2 ** f, 3e4)
        }), a = r.useMemo(() => n.data?.settings.additionalSettings.welcomeMessage || "Welcome to our support! How can we help you today?", [n.data]), o = r.useMemo(() => n.data?.settings.popupMessages || [], [n.data]), i = r.useMemo(() => ({
            buttonColor: n.data?.settings.displayLogic.buttonColor || "#0066ff",
            messageBackgroundColor: n.data?.settings.displayLogic.messageBackgroundColor || "#0D122C",
            widgetPosition: n.data?.settings.displayLogic.widgetPosition || "bottom-right"
        }), [n.data]), d = r.useMemo(() => ({
            companyLogoUrl: n.data?.settings.branding.companyLogoUrl || "",
            widgetDisplayName: n.data?.settings.branding.widgetDisplayName || "Support",
            senderDisplayName: n.data?.settings.branding.senderDisplayName || "Support Agent"
        }), [n.data]), g = r.useMemo(() => ({
            availableLanguages: n.data?.settings.languages.availableLanguage || {
                en: !0
            },
            defaultLanguage: n.data?.settings.languages.defaultLanguage || "en"
        }), [n.data]), m = r.useMemo(() => ({
            availableChannels: n.data?.settings.channels.availableChannels,
            options: n.data?.settings.channels.options
        }), [n.data]), c = r.useMemo(() => ({
            enabled: n.data?.settings.preChatForm.enabled || !1,
            isEmailRequired: n.data?.settings.preChatForm.isEmailRequired || !1,
            isPhoneNumberRequired: n.data?.settings.preChatForm.isPhoneNumberRequired || !1
        }), [n.data]), u = r.useMemo(() => ({
            welcomeMessage: n.data?.settings.additionalSettings.welcomeMessage || "Welcome to our support! How can we help you today?"
        }), [n.data]);
        return {
            config: n.data,
            isLoading: n.isLoading,
            isError: n.isError,
            error: n.error,
            refetch: n.refetch,
            welcomeMessage: a,
            branding: d,
            displayLogic: i,
            languageConfig: g,
            channelConfig: m,
            preChatFormConfig: c,
            additionalSettings: u,
            popupMessages: o
        }
    },
    fs = () => {
        const {
            welcomeMessage: e,
            popupMessages: t
        } = y(), s = ze(), n = r.useCallback(o => {
            if (!o.published || !o.conditions.length) return !1;
            const i = o.conditions.filter(c => c.rule === "SHOW_WHEN_URL_CONTAINS" || c.rule === "SHOW_WHEN_URL_IS"),
                d = o.conditions.filter(c => c.rule === "HIDE_WHEN_URL_CONTAINS" || c.rule === "HIDE_WHEN_URL_IS");
            let g = !0;
            i.length > 0 && (g = i.some(c => {
                const {
                    rule: u,
                    criteria: f
                } = c;
                switch (u) {
                    case "SHOW_WHEN_URL_CONTAINS":
                        return s.includes(f);
                    case "SHOW_WHEN_URL_IS":
                        return s === f;
                    default:
                        return !1
                }
            }));
            const m = d.some(c => {
                const {
                    rule: u,
                    criteria: f
                } = c;
                switch (u) {
                    case "HIDE_WHEN_URL_CONTAINS":
                        return s.includes(f);
                    case "HIDE_WHEN_URL_IS":
                        return s === f;
                    default:
                        return !1
                }
            });
            return g && !m
        }, [s]), a = r.useMemo(() => {
            if (t && t.length > 0) {
                const o = t.find(n);
                if (o) return o.message
            }
            return e || null
        }, [t, e, n]);
        return a ? l.jsx("div", {
            className: O("sf:absolute sf:widget-welcome-spacing sf:w-[260px] sf:transform sf:transition-all sf:duration-300 sf:ease-in-out sf:opacity-100 sf:translate-y-0 sf:scale-100"),
            children: l.jsx("div", {
                className: "sf:bg-white sf:rounded-lg sf:px-3 sf:py-2 sf:shadow-md sf:relative sf:border sf:border-gray-30",
                children: l.jsx("div", {
                    className: "sf:text-dark-blue-90 sf:text-sm sf:leading-relaxed",
                    children: a
                })
            })
        }) : null
    };
var M = (e => (e.TEXT = "text", e.FILE = "file", e.LINK = "link", e.LOCATION = "location", e.INTERACTIVE = "interactive", e))(M || {}),
    x = (e => (e.SENDING = "Sending", e.SENT = "Sent", e.READ = "Read", e.FAILED = "Failed", e))(x || {}),
    gs = (e => (e.TEXT = "text", e.PHONE = "phone", e.EMAIL = "email", e.CHECKBOX = "checkbox", e))(gs || {});
const Z = () => ({
        analyticTags: [],
        channel: "livechat_v2",
        channelIdentityId: "",
        channelName: "livechat_v2",
        companyId: "",
        conversationId: "",
        createdAt: new Date().toISOString(),
        deliveryType: "Normal",
        id: "",
        isFromImport: !1,
        isSandbox: !1,
        isSentFromSleekflow: !1,
        messageChecksum: "",
        messageContent: "",
        messageType: M.TEXT,
        metadata: {},
        status: x.FAILED,
        timestamp: Date.now() / 1e3,
        updatedAt: new Date().toISOString(),
        uploadedFiles: [],
        webClientSender: null
    }),
    Fs = e => ({
        ...Z(),
        id: j(),
        createdAt: "",
        updatedAt: "",
        timestamp: 0,
        isSentFromSleekflow: !0,
        messageContent: e,
        messageType: M.TEXT,
        status: x.SENT
    }),
    Vs = e => ({
        ...Z(),
        id: j(),
        createdAt: "",
        updatedAt: "",
        timestamp: 0,
        isSentFromSleekflow: !0,
        messageType: M.INTERACTIVE,
        status: x.SENT,
        extendedMessagePayload: {
            extendedMessageType: 501
        },
        preChatForm: e
    }),
    re = e => new Date(e * 1e3).toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric"
    }),
    Bs = (e, t) => {
        const s = new Date(e * 1e3),
            n = new Date;
        return s.toDateString() === n.toDateString() ? t("date.today") : s.toLocaleDateString([], {
            year: "numeric",
            month: "short",
            day: "numeric"
        })
    },
    ms = e => e.extendedMessagePayload?.extendedMessageType !== 501 || e.isSentFromSleekflow,
    hs = e => e.filter(ms).reduce((n, a) => {
        const o = n[n.length - 1],
            i = o?.[o.length - 1],
            d = a.isSentFromSleekflow === i?.isSentFromSleekflow,
            g = re(a.timestamp) === re(i?.timestamp);
        return d && g ? (o.push(a), n) : [...n, [a]]
    }, []),
    ps = e => {
        const t = new Set,
            s = new Set;
        return e.forEach(n => {
            const a = n[0];
            if (a && a.timestamp) {
                const o = new Date(a.timestamp * 1e3).toDateString();
                s.has(o) || (s.add(o), t.add(a.id))
            }
        }), t
    },
    w = D()(z(e => ({
        messages: [],
        messagesMap: new Map,
        lastAgentMessageId: null,
        lastReadAgentMessageId: null,
        hasUnreadAgentMessages: !1,
        visibleMessageGroups: [],
        dateDividerIndexes: new Set,
        actions: {
            setMessages: t => {
                const s = [...t].reverse(),
                    n = new Map;
                s.forEach(a => {
                    n.set(a.id, a)
                }), e({
                    messages: s,
                    messagesMap: n
                })
            },
            prependMessages: t => {
                e(s => {
                    const n = t.filter(d => !s.messagesMap.has(d.id) && !s.messagesMap.has(d.messageChecksum)),
                        o = [...[...n].reverse(), ...s.messages],
                        i = new Map(s.messagesMap);
                    return n.forEach(d => {
                        i.set(d.id, d)
                    }), {
                        messages: o,
                        messagesMap: i
                    }
                })
            },
            appendMessage: t => e(s => {
                if (s.messagesMap.has(t.id) || s.messagesMap.has(t.messageChecksum)) return s;
                const n = [...s.messages, t],
                    a = new Map(s.messagesMap);
                return a.set(t.id, t), {
                    messages: n,
                    messagesMap: a
                }
            }),
            updateMessage: (t, s) => e(n => {
                const a = n.messagesMap.get(t);
                if (!a) return console.warn(`Message with id ${t} not found`), n;
                if (!Object.keys(s).some(c => a[c] !== s[c])) return n;
                const i = {
                        ...a,
                        ...s
                    },
                    d = n.messages.findIndex(c => c.id === t),
                    g = [...n.messages];
                g[d] = i;
                const m = new Map(n.messagesMap);
                return m.set(t, i), {
                    messages: g,
                    messagesMap: m
                }
            }),
            updateMessageStatus: (t, s) => e(n => {
                const a = n.messagesMap.get(t);
                if (!a) return console.warn(`Message with id ${t} not found`), n;
                if (!(a.status !== s)) return n;
                const i = {
                        ...a,
                        status: s
                    },
                    d = n.messages.findIndex(c => c.id === t),
                    g = [...n.messages];
                g[d] = i;
                const m = new Map(n.messagesMap);
                return m.set(t, i), {
                    messages: g,
                    messagesMap: m
                }
            }),
            moveMessageToEnd: t => e(s => {
                const n = s.messagesMap.get(t);
                return n ? {
                    messages: [...s.messages.filter(o => o.id !== t), n]
                } : (console.warn(`Message with id ${t} not found`), s)
            }),
            deleteMessage: t => e(s => {
                const n = s.messages.filter(o => o.id !== t),
                    a = new Map(s.messagesMap);
                return a.delete(t), {
                    messages: n,
                    messagesMap: a
                }
            }),
            clearMessages: () => e({
                messages: [],
                messagesMap: new Map,
                lastAgentMessageId: null,
                lastReadAgentMessageId: null,
                hasUnreadAgentMessages: !1,
                visibleMessageGroups: [],
                dateDividerIndexes: new Set
            }),
            setLastReadAgentMessageId: t => e({
                lastReadAgentMessageId: t
            }),
            getStorageKey: (t, s) => `sf-live-chat-messages-${t}-${s}`
        }
    }), {
        name: "sf-live-chat-messages",
        storage: G(() => localStorage),
        partialize: e => ({
            lastReadAgentMessageId: e.lastReadAgentMessageId
        })
    }));
w.subscribe((e, t) => {
    if (e.lastReadAgentMessageId !== t.lastReadAgentMessageId || e.lastAgentMessageId !== t.lastAgentMessageId) {
        if (!e.lastReadAgentMessageId || !e.lastAgentMessageId) return !1;
        w.setState({
            hasUnreadAgentMessages: e.lastAgentMessageId !== e.lastReadAgentMessageId
        })
    }
    if (e.messages !== t.messages) {
        const s = hs(e.messages),
            n = ps(s);
        w.setState({
            visibleMessageGroups: s,
            dateDividerIndexes: n
        })
    }
    e.messages.length !== t.messages.length && w.setState({
        lastAgentMessageId: e.messages.findLast(s => s.isSentFromSleekflow)?.id || null
    })
});
const ws = () => {
        const [e, t] = r.useState(!1);
        return r.useEffect(() => {
            const s = w.persist.onHydrate(() => {
                    t(!1)
                }),
                n = w.persist.onFinishHydration(() => {
                    t(!0)
                });
            return t(w.persist.hasHydrated()), () => {
                s(), n()
            }
        }, []), e
    },
    Cs = ({
        title: e,
        titleId: t,
        ...s
    }) => r.createElement("svg", {
        width: 29,
        height: 29,
        viewBox: "0 0 29 29",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": t,
        ...s
    }, e ? r.createElement("title", {
        id: t
    }, e) : null, r.createElement("path", {
        d: "M21.2999 0.899902C25.1999 0.899902 28.2999 3.9999 28.2999 7.8999V16.8999C28.2999 20.7999 25.1999 23.8999 21.2999 23.8999H15C14.9 23.8999 14.7 24.0999 14.4 24.2999L13.9 24.6999L10.5 27.3999C10.2 27.5999 9.89995 27.7999 9.69995 27.9999C9.49995 28.0999 9.09995 28.3999 8.69995 28.3999H8.49995C7.89995 28.3999 7.39995 28.1999 6.89995 27.7999L6.69995 27.5999C6.29995 27.0999 6.29995 26.5999 6.19995 26.2999C6.19995 25.9999 6.19995 25.5999 6.19995 25.2999V23.7999C2.79995 23.2999 0.199951 20.3999 0.199951 16.8999V7.8999C0.199951 3.9999 3.29995 0.899902 7.19995 0.899902H21.2H21.2999ZM18.7999 4.8999C18.5999 4.8999 18.5 4.8999 18.4 4.9999C18.3 4.9999 18.2 5.1999 18.1 5.3999L17.5 7.2999C17.4 7.6999 17.0999 8.0999 16.7999 8.3999C16.5 8.6999 16.1 8.8999 15.7 9.0999L13.8 9.6999C13.7 9.6999 13.5 9.7999 13.4 9.9999C13.4 10.0999 13.3 10.2999 13.3 10.3999C13.3 10.5999 13.3 10.6999 13.4 10.7999C13.4 10.8999 13.6 10.9999 13.8 11.0999L15.7 11.6999C16.1 11.7999 16.5 12.0999 16.7999 12.3999C17.0999 12.6999 17.2999 13.0999 17.5 13.4999L18.1 15.3999C18.1 15.4999 18.2 15.6999 18.4 15.7999C18.5 15.7999 18.6999 15.8999 18.7999 15.8999C19 15.8999 19.1 15.8999 19.2 15.7999C19.3 15.7999 19.4 15.5999 19.5 15.3999L20.1 13.4999C20.2 13.0999 20.5 12.6999 20.7999 12.3999C21.0999 12.0999 21.5 11.8999 21.9 11.6999L23.7999 11.0999C23.9 11.0999 24.1 10.9999 24.2 10.7999C24.2 10.6999 24.2999 10.4999 24.2999 10.3999C24.2999 10.1999 24.3 10.0999 24.2 9.9999C24.2 9.8999 24 9.7999 23.7999 9.6999L21.9 9.0999C21.5 8.9999 21.0999 8.6999 20.7999 8.3999C20.5 8.0999 20.3 7.6999 20.1 7.2999L19.5 5.3999C19.5 5.2999 19.4 5.0999 19.2 4.9999C19.1 4.9999 18.9 4.8999 18.7999 4.8999Z",
        fill: "currentColor"
    })),
    bs = {
        sm: {
            width: 20,
            height: 20
        },
        md: {
            width: 24,
            height: 24
        },
        lg: {
            width: 28,
            height: 28
        }
    },
    Is = ({
        isOpen: e,
        className: t = "",
        size: s = "md"
    }) => {
        const {
            width: n,
            height: a
        } = bs[s], o = () => e ? "Close chat widget" : "Open chat widget";
        return l.jsx("div", {
            className: X("sf:relative sf:flex sf:items-center sf:justify-center", t),
            "aria-label": o(),
            title: o(),
            children: l.jsx("div", {
                className: X("sf:inset-0 sf:transition-all sf:duration-300 sf:ease-in-out", e ? "sf:opacity-0 sf:rotate-45 sf:scale-75 sf:pointer-events-none" : "sf:opacity-100 sf:rotate-0 sf:scale-100"),
                style: {
                    width: n,
                    height: a
                },
                children: l.jsx(Cs, {})
            })
        })
    },
    Ss = () => {
        const {
            isWidgetVisible: e,
            actions: t
        } = F(), {
            config: s
        } = y(), {
            hasUnreadAgentMessages: n
        } = w(), a = () => {
            e() ? t.setCurrentView(p.MINIMIZED) : t.setCurrentView(p.LANDING_PAGE)
        };
        if (!s) return null;
        const o = e();
        return l.jsx("button", {
            onClick: a,
            className: O("sf:absolute sf:widget-button-spacing sf:group sf:bg-widget-button-color sf:rounded-full sf:shadow-lg sf:flex sf:items-center sf:justify-center sf:transition-all sf:duration-300 sf:ease-in-out sf:hover:shadow-xl sf:hover:scale-110 sf:focus:outline-none sf:focus:ring-4 sf:focus:ring-blue-20 sf:focus:ring-opacity-50 sf:cursor-pointer"),
            "aria-label": o ? "Close chat widget" : "Open chat widget",
            "aria-expanded": o,
            children: l.jsxs("div", {
                className: "sf:relative sf:w-14 sf:h-14 sf:flex sf:items-center sf:justify-center",
                children: [n && l.jsx("div", {
                    className: "sf:absolute sf:top-[2px] sf:right-[-2px] sf:w-4 sf:h-4 sf:bg-red-90 sf:rounded-full sf:border-2 sf:border-white sf:z-10"
                }), l.jsx(Is, {
                    isOpen: o,
                    size: "lg",
                    className: "sf:text-widget-button-text-color"
                })]
            })
        })
    };

function Es(e) {
    return typeof e != "object" || e === null ? !1 : "id" in e && "messageChecksum" in e
}
const ys = () => {
        const {
            actions: e,
            messagesMap: t
        } = w(), {
            subscribe: s,
            unsubscribe: n,
            isConnected: a
        } = he(), {
            senderId: o
        } = _(), i = r.useRef(t), d = r.useRef(e);
        i.current = t, d.current = e;
        const g = r.useCallback(m => {
            if (Es(m)) {
                const c = i.current,
                    u = d.current;
                if (c.has(m.id)) u.updateMessage(m.id, m);
                else if (c.has(m.messageChecksum)) {
                    const {
                        id: f,
                        ...h
                    } = m;
                    u.updateMessage(m.messageChecksum, h)
                } else u.appendMessage(m)
            }
        }, []);
        r.useEffect(() => {
            if (o) {
                if (!a) {
                    n("onMessageReceived", g);
                    return
                }
                return s("onMessageReceived", g), () => {
                    o && n("onMessageReceived", g)
                }
            }
        }, [s, n, a, g, o])
    },
    pe = () => {
        const {
            companyId: e
        } = L(), {
            config: t
        } = y(), {
            actions: {
                getStorageKey: s
            }
        } = w(), n = ws(), a = r.useCallback(async () => {
            const o = s(t?.channelIdentityId || "", e || "");
            if (!(!t?.channelIdentityId || !e) && w.persist.getOptions().name !== o) {
                w.persist.setOptions({
                    name: o
                }), w.persist.rehydrate();
                return
            }
        }, [s, t, e]);
        return r.useEffect(() => {
            a()
        }, [a]), n
    },
    ie = 50,
    Ms = () => {
        const {
            senderId: e
        } = _(), {
            config: t
        } = y(), {
            messages: s,
            actions: n
        } = w(), a = pe(), o = t?.channelIdentityId;
        return Se({
            queryKey: ["messages", e, o],
            queryFn: async ({
                pageParam: i
            }) => {
                const d = new URLSearchParams({
                        offset: i.toString(),
                        limit: ie.toString(),
                        order: "desc"
                    }),
                    g = await N.get(`/LiveChatV2/Public/Senders/${e}/Channels/${o}/Messages?${d}`);
                return g.data?.length && n.prependMessages(g.data), g.data
            },
            getNextPageParam: i => {
                if (!(i.length < ie)) return s.length
            },
            initialPageParam: 0,
            enabled: !!e && !!o && a,
            refetchOnMount: !1,
            refetchOnWindowFocus: !1,
            refetchInterval: !1,
            staleTime: 1 / 0,
            gcTime: 1 / 0
        })
    },
    zs = () => {
        const {
            senderId: e
        } = _(), {
            config: t
        } = y(), {
            messagesMap: s,
            actions: n
        } = w(), {
            actions: a
        } = b(), o = t?.channelIdentityId, i = K({
            mutationFn: async ({
                content: c,
                files: u,
                messageChecksum: f,
                messageType: h,
                extendedMessagePayload: I
            }) => {
                const S = new FormData;
                return S.append("channel", "livechat_v2"), S.append("channelIdentityId", o || ""), S.append("messageChecksum", f), S.append("messageType", h), c && S.append("messageContent", c), u?.length && u.forEach(A => {
                    S.append("files", A)
                }), I && S.append("extendedMessagePayload", JSON.stringify(I)), (await N.post(`/LiveChatV2/Public/Senders/${e}/Channels/${o}/Messages`, S, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })).data
            },
            onMutate: async ({
                content: c,
                files: u,
                messageChecksum: f,
                messageType: h,
                retryMessageId: I,
                contactFormMessageId: S
            }) => {
                if (S) return {
                    contactFormMessageId: S
                };
                if (I) return n.updateMessageStatus(I, x.SENDING), {
                    retryMessageId: I
                };
                {
                    const V = {
                        ...Z(),
                        channelIdentityId: o || "",
                        id: f,
                        isSentFromSleekflow: !1,
                        messageChecksum: f,
                        messageContent: c,
                        messageType: h,
                        originalUploadedFiles: u,
                        status: x.SENDING,
                        uploadedFiles: u?.map(A => ({
                            fileId: A.name,
                            filename: A.name,
                            mimeType: A.type,
                            fileSize: A.size,
                            url: URL.createObjectURL(A)
                        })) || []
                    };
                    return n.appendMessage(V), {
                        newOptimisticMessage: V
                    }
                }
            },
            onSuccess: (c, u, f) => {
                f?.contactFormMessageId ? a.setHasContactFormSubmitted(!0) : f?.retryMessageId && n.moveMessageToEnd(f?.retryMessageId)
            },
            onError: (c, u, f) => {
                f?.retryMessageId ? n.updateMessageStatus(f?.retryMessageId, x.FAILED) : f?.newOptimisticMessage && n.updateMessageStatus(f?.newOptimisticMessage?.id, x.FAILED)
            }
        }), d = r.useCallback((c, u) => {
            if (!c?.trim() && !u?.length) {
                console.warn("Cannot send empty message");
                return
            }
            i.mutate({
                content: c?.trim(),
                files: u,
                messageChecksum: j(),
                messageType: u?.length ? M.FILE : M.TEXT
            })
        }, [i]), g = r.useCallback(c => {
            const u = s.get(c);
            u && i.mutate({
                content: u.messageContent,
                files: u.originalUploadedFiles || void 0,
                messageChecksum: u.messageChecksum,
                messageType: u.originalUploadedFiles?.length ? M.FILE : M.TEXT,
                retryMessageId: u.id
            })
        }, [s, i]), m = r.useCallback((c, u) => {
            i.mutate({
                messageChecksum: j(),
                messageType: M.INTERACTIVE,
                extendedMessagePayload: u,
                contactFormMessageId: c
            })
        }, [i]);
        return {
            isSending: i.isPending,
            handleSendMessage: d,
            handleRetryMessage: g,
            handleSendContactForm: m
        }
    },
    Ns = (e, t) => {
        if (e[t]) return t;
        if (t.split("-")[0] === "zh") return e["zh-HK"] ? "zh-HK" : !1;
        const a = Object.fromEntries(Object.entries(e).map(([o, i]) => [o.split("-")[0], i ? o : !1]))[t.split("-")[0]];
        if (a) return a
    },
    vs = () => {
        const {
            languageConfig: e,
            config: t
        } = y();
        r.useEffect(() => {
            if (!t) return;
            const s = navigator.language,
                n = Ns(e.availableLanguages, s);
            if (n) {
                P.changeLanguage(n);
                return
            }
            P.changeLanguage(e.defaultLanguage)
        }, [e, t])
    };

function xs() {
    const {
        senderId: e
    } = _();
    return $({
        queryKey: ["ipGeolocation", e],
        queryFn: async () => {
            const s = (await N.get(`/LiveChatV2/Public/Senders/${e}/LocationInfo`))?.data?.countryCode2;
            return typeof s == "string" ? s.toLocaleLowerCase() : null
        },
        retry: 3,
        staleTime: 1 / 0,
        gcTime: 1 / 0,
        enabled: !!e
    })
}

function As() {
    r.useEffect(() => {
        setTimeout(() => {
            H(async () => {
                const {
                    initSentry: e
                } = await Promise.resolve().then(() => Re);
                return {
                    initSentry: e
                }
            }, void 0).then(({
                initSentry: e
            }) => {
                e()
            })
        }, 3e3)
    }, [])
}
const Ds = () => {
        vs(), he(), cs(), us(), ge(), Ms(), pe(), ys(), Ze(), xs(), As()
    },
    Ls = new Ne({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1e3,
                gcTime: 10 * 60 * 1e3,
                retry: 3,
                refetchOnWindowFocus: !1
            }
        }
    }),
    ce = e => {
        let t, s, n;
        if (e.startsWith("rgba")) {
            const i = /rgba\((?<r>\d+),\s*(?<g>\d+),\s*(?<b>\d+),\s*(?<a>[0-9.]+)\)/.exec(e).groups;
            t = Number(i.r), s = Number(i.g), n = Number(i.b)
        } else {
            const o = e.replace(/^#/, ""),
                i = o.length === 3 ? 1 : 2,
                d = g => parseInt(o.substr(g * i, i).repeat(i === 1 ? 2 : 1), 16);
            t = d(0), s = d(1), n = d(2)
        }
        return Math.sqrt(.299 * t ** 2 + .587 * s ** 2 + .114 * n ** 2) > 127.5 ? "#3c4257" : "white"
    },
    ks = () => {
        const {
            isWidgetVisible: e
        } = F(), {
            config: t,
            isLoading: s,
            displayLogic: n
        } = y();
        Ds();
        const a = e(),
            o = r.useMemo(() => {
                const styles = {};
                if (n.buttonColor) {
                    styles["--sf-color-widget-background-color"] = `${n.buttonColor}40`;
                    styles["--sf-color-widget-button-color"] = n.buttonColor;
                    styles["--sf-color-widget-button-color-dimmed"] = `${n.buttonColor}10`;
                    styles["--sf-color-widget-message-background-color"] = n.messageBackgroundColor;
                    styles["--sf-color-widget-message-text-color"] = ce(n.messageBackgroundColor);
                    styles["--sf-color-widget-button-text-color"] = ce(n.buttonColor);
                }
                const spacingConfig = typeof window !== "undefined" && window.SleekFlowWidgetSpacingConfig;
                if (spacingConfig) {
                    if (spacingConfig.container?.mobile?.bottom) styles["--sf-widget-container-bottom-mobile"] = spacingConfig.container.mobile.bottom;
                    if (spacingConfig.container?.mobile?.right) styles["--sf-widget-container-right-mobile"] = spacingConfig.container.mobile.right;
                    if (spacingConfig.container?.desktop?.bottom) styles["--sf-widget-container-bottom-desktop"] = spacingConfig.container.desktop.bottom;
                    if (spacingConfig.container?.desktop?.right) styles["--sf-widget-container-right-desktop"] = spacingConfig.container.desktop.right;
                    if (spacingConfig.button?.mobile?.bottom) styles["--sf-widget-button-bottom-mobile"] = spacingConfig.button.mobile.bottom;
                    if (spacingConfig.button?.mobile?.right) styles["--sf-widget-button-right-mobile"] = spacingConfig.button.mobile.right;
                    if (spacingConfig.button?.desktop?.bottom) styles["--sf-widget-button-bottom-desktop"] = spacingConfig.button.desktop.bottom;
                    if (spacingConfig.button?.desktop?.right) styles["--sf-widget-button-right-desktop"] = spacingConfig.button.desktop.right;
                    if (spacingConfig.welcome?.mobile?.bottom) styles["--sf-widget-welcome-bottom-mobile"] = spacingConfig.welcome.mobile.bottom;
                    if (spacingConfig.welcome?.mobile?.right) styles["--sf-widget-welcome-right-mobile"] = spacingConfig.welcome.mobile.right;
                    if (spacingConfig.welcome?.desktop?.bottom) styles["--sf-widget-welcome-bottom-desktop"] = spacingConfig.welcome.desktop.bottom;
                    if (spacingConfig.welcome?.desktop?.right) styles["--sf-widget-welcome-right-desktop"] = spacingConfig.welcome.desktop.right;
                    if (spacingConfig.chatbox?.marginVertical) styles["--sf-widget-chatbox-margin-vertical"] = spacingConfig.chatbox.marginVertical;
                    if (spacingConfig.chatbox?.marginOffset) styles["--sf-widget-chatbox-margin-offset"] = spacingConfig.chatbox.marginOffset;
                }
                return Object.keys(styles).length > 0 ? styles : undefined;
            }, [n]);
        return r.useEffect(() => (a ? document.body.classList.add("sf:prevent-scroll") : document.body.classList.remove("sf:prevent-scroll"), () => {
            document.body.classList.remove("sf:prevent-scroll")
        }), [a]), l.jsxs("div", {
            id: "sleekflow-widget-app",
            className: O("sf:fixed sf:z-9000 sf:widget-container-spacing"),
            style: o,
            children: [a && t && !s && l.jsx(es, {
                widgetConfig: t
            }), !a && l.jsx(Ss, {}), !a && t && !s && l.jsx(fs, {}), l.jsx(Be, {})]
        })
    },
    Ts = () => l.jsx(fe, {
        fallback: l.jsx("div", {
            children: "Error In Live Chat Widget"
        }),
        children: l.jsx(Ee, {
            client: Ls,
            children: l.jsx(ks, {})
        })
    }),
    Rs = () => {
        const e = document.querySelectorAll('script[src*="widget.js"]'),
            t = e[e.length - 1];
        return t && t.src ? t.src.replace(/\/[^/]*$/, "/") : ""
    },
    le = async () => {
        try {
            const e = Rs(),
                t = document.createElement("div");
            t.id = "sleekflow-widget-container";
            const s = t.attachShadow({
                mode: "open"
            });
            s.innerHTML = `
        <style>
          @import url('${`${e}widget.css?v=${Date.now()}`}');
        </style>
      `, document.body.appendChild(t), ye.createRoot(s, {
                onUncaughtError: (a, o) => {
                    console.warn("Uncaught error", a, o.componentStack)
                },
                onCaughtError: (a, o) => {
                    console.warn("Caught error", a, o.componentStack)
                },
                onRecoverableError: (a, o) => {
                    console.warn("Recoverable error", a, o.componentStack)
                }
            }).render(R.createElement(Ts))
        } catch (e) {
            console.error("SleekFlow Widget: Initialization failed", e)
        }
    }, de = () => {
        window.requestIdleCallback ? window.requestIdleCallback(le) : le()
    };
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
    de()
}) : de();
export {
    gs as C, x as M, je as S, p as W, as as a, _ as b, y as c, N as d, Ws as e, w as f, re as g, he as h, zs as i, Pe as j, He as k, Ue as l, M as m, pe as n, Ms as o, b as p, Vs as q, Fs as r, Bs as s, xs as t, F as u, L as v
};