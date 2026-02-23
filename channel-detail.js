import {
  j as s,
  m as U,
  b as v,
  f as z,
  r as m,
  T as K,
} from "./react-vendor-BYNZdcZL.js";
import {
  u as p,
  a as j,
  W as I,
  b as O,
  c as X,
  d as Y,
  e as Z,
} from "./widget.js";
import { A as x } from "./vendor-YinDUPqL.js";
import { u as T, H as S, F as N, S as J } from "./useScrollbar-5ZtkeaEp.js";
import { u as ss, b as M, C as D } from "./react-hook-form-DMF_HXqP.js";
import { u as es, L as ts } from "./useCountryCode-BaFXhitB.js";
import { a as rs, o as os, s as L } from "./zod-DkD4_1Ae.js";
import { i as ns } from "./libphonenumber-Kugw9uAs.js";
import "./i18n-JfmkiC5i.js";
import "./sentry-BiRZxolK.js";
import "./mdast-util-from-markdown-C54fcu-n.js";
(function () {
  var e =
    typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : {};
  e.SENTRY_RELEASE = { id: "fb4299fa544401e75e047a7d3c1f4008fc7138d1" };
})();
try {
  (function () {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "05b7b99e-123c-4c8a-b27c-58531ec8bade"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-05b7b99e-123c-4c8a-b27c-58531ec8bade"));
  })();
} catch {}
const as = ({
    imageUrl: e,
    value: t,
    size: o = 178,
    bgColor: r = "#FFFFFF",
    fgColor: a = "#000000",
    className: n = "",
  }) =>
    !t && !e
      ? null
      : s.jsx("div", {
          className: `sf:p-2 sf:bg-white sf:border sf:border-gray-200 sf:rounded-2xl sf:shadow-lg sf:backdrop-blur-sm ${n}`,
          role: "img",
          "aria-label": `QR code for ${t}`,
          children: s.jsx("div", {
            className: "sf:flex sf:justify-center",
            children: s.jsx("div", {
              className: "sf:bg-gray-50 sf:rounded-xl",
              style: { width: o, height: o },
              children: e
                ? s.jsx("img", { src: e, alt: "QR Code" })
                : s.jsx(U, {
                    value: t,
                    size: o,
                    bgColor: r,
                    fgColor: a,
                    level: "M",
                  }),
            }),
          }),
        }),
  ls = ({ onMinimize: e, onContinue: t, onBack: o, className: r = "" }) => {
    const { t: a } = v(),
      n = T(),
      { currentChannelDetailType: u, actions: b } = p(),
      { channelUrl: c, copywriting: l, qrCodeImage: w } = j({ channelType: u }),
      f = () => {
        o
          ? o()
          : (b.setCurrentView(I.LANDING_PAGE), b.setChannelDetailType(null));
      },
      y = () => {
        c && window.open(c, "_blank", "noopener,noreferrer"), t?.();
      };
    return s.jsxs("div", {
      className: x(
        "sf:flex sf:flex-col sf:background-gradient-diagonal sf:overflow-y-auto",
        "sf:widget-window",
        "sf:sm:rounded-2xl",
        r
      ),
      style: n.scrollbarStyle,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      children: [
        s.jsx(S, { onBack: f, title: l.title, onMinimize: e }),
        s.jsxs("div", {
          className:
            "sf:flex-1 sf:flex sf:flex-col sf:items-center sf:justify-center sf:p-6 sf:text-center",
          children: [
            s.jsx("h1", {
              className:
                "sf:text-2xl sf:font-bold sf:text-gray-900 sf:mb-2 sf:max-w-sm sf:leading-tight",
              children: l.title,
            }),
            s.jsx("p", {
              className:
                "sf:text-gray-600 sf:mb-3 sf:max-w-sm sf:leading-relaxed",
              children: l.description,
            }),
            s.jsx("div", {
              className: "sf:mb-8",
              children: s.jsx(as, {
                imageUrl: w,
                value: c,
                className: "sf:rounded-lg sf:border sf:border-gray-200",
                errorMessage: a(
                  "channelDetail.common.qrCodeError",
                  "Unable to generate QR code"
                ),
              }),
            }),
            c &&
              s.jsxs(s.Fragment, {
                children: [
                  s.jsxs("div", {
                    className:
                      "sf:w-full sf:flex sf:items-center sf:justify-center sf:gap-2 sf:mb-4",
                    children: [
                      s.jsx("div", {
                        className: "sf:w-full sf:h-0.5 sf:bg-gray-30",
                      }),
                      s.jsx("p", {
                        className: "sf:text-gray-500 sf:text-sm",
                        children: a("channelDetail.common.or", "or"),
                      }),
                      s.jsx("div", {
                        className: "sf:w-full sf:h-0.5 sf:bg-gray-30",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className:
                      "sf:w-full sf:flex sf:items-center sf:justify-center sf:gap-2 sf:mb-4",
                    children: l.continueButtonDescription,
                  }),
                  s.jsx("button", {
                    onClick: y,
                    className:
                      "sf:border-widget-button-color sf:border-2 sf:text-widget-button-color sf:py-3 sf:px-6 sf:rounded-full sf:font-semibold sf:transition-all sf:duration-200 sf:transform sf:hover:scale-105 sf:active:scale-95 sf:focus:outline-none sf:focus:ring-4 sf:focus:ring-blue-300 sf:focus:ring-opacity-50",
                    type: "button",
                    children: l.continueButtonText,
                  }),
                ],
              }),
          ],
        }),
        s.jsx(N, {}),
      ],
    });
  };
var R = ((e) => ((e[(e.RateLimitExceeded = 1001)] = "RateLimitExceeded"), e))(
  R || {}
);
class k extends Error {
  constructor(t, o) {
    super(t), (this.errorCode = o);
  }
}
const is = () => {
    const { senderId: e } = O(),
      t = X().config?.channelIdentityId;
    return z({
      mutationFn: async ({
        phoneNumber: o,
        message: r,
        isMarketingConsent: a,
      }) => {
        const n = await Y.post(
          `/LiveChatV2/Public/Senders/${e}/Channels/${t}/SmsContactForm`,
          { phoneNumber: o, message: r, isMarketingConsent: a }
        );
        if (n.data.isSuccess) return n.data;
        throw n.data.errorCode
          ? new k(n.data.message, n.data.errorCode)
          : new Error(n.data.message);
      },
    });
  },
  fs = ({ title: e, titleId: t, ...o }) =>
    m.createElement(
      "svg",
      {
        width: 44,
        height: 44,
        viewBox: "0 0 44 44",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": t,
        ...o,
      },
      e ? m.createElement("title", { id: t }, e) : null,
      m.createElement("circle", { cx: 22, cy: 22, r: 22, fill: "#DBFFE1" }),
      m.createElement("path", {
        d: "M30 16L19 27L14 22",
        stroke: "#53A55D",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    ),
  cs = ({ onBack: e }) => {
    const { t } = v("common"),
      { actions: o } = p(),
      r = () => {
        o.setCurrentView(I.MINIMIZED);
      };
    return s.jsxs("div", {
      className: x(
        "sf:mx-auto sf:overflow-y-auto sf:background-gradient-diagonal sf:flex sf:flex-col",
        "sf:widget-window",
        "sf:sm:rounded-2xl"
      ),
      "data-testid": "sms-success-page",
      children: [
        s.jsx(S, {
          onMinimize: r,
          onBack: e,
          title: t("channels.twilioSms", "SMS"),
        }),
        s.jsxs("div", {
          className:
            "sf:flex-1 sf:flex sf:flex-col sf:items-center sf:justify-center sf:px-[50px] sf:text-center sf:overflow-auto",
          children: [
            s.jsx("div", {
              className:
                "sf:mb-5 sf:bg-green-100 sf:rounded-full sf:flex sf:items-center sf:justify-center",
              children: s.jsx(fs, { width: "44", height: "44" }),
            }),
            s.jsx("h1", {
              className:
                "sf:text-headline2 sf:font-semibold sf:mb-1 sf:max-w-sm sf:leading-tight sf:text-gray-900",
              children: t("twilioSms.success.title", "Contact info received"),
            }),
            s.jsx("p", {
              className:
                "sf:text-body1 sf:text-[#3C3F44] sf:mb-5 sf:max-w-sm sf:leading-relaxed",
              children: t(
                "twilioSms.success.message",
                "We will be reaching out via SMS shortly"
              ),
            }),
            s.jsx("button", {
              onClick: r,
              className:
                "sf:bg-transparent sf:cursor-pointer sf:text-blue-500 sf:py-3 sf:leading-none sf:px-8 sf:border sf:border-blue-500 sf:rounded-full sf:font-semibold sf:transition-all sf:duration-200 sf:transform sf:hover:bg-blue-50 sf:hover:scale-105 sf:active:scale-95 sf:focus:outline-none sf:focus:ring-4 sf:focus:ring-blue-300 sf:focus:ring-opacity-50",
              children: t("buttons.close", "Close"),
            }),
          ],
        }),
        s.jsx(N, {}),
      ],
    });
  },
  P = 1028,
  ds = os({
    phoneNumber: L()
      .min(1, "twilioSms.validation.phoneRequired")
      .transform((e) => (e.startsWith("+") ? e : `+${e}`))
      .refine((e) => ns(e), { error: "twilioSms.validation.phoneInvalid" })
      .transform((e) => e.replace("+", "")),
    message: L()
      .min(1, "twilioSms.validation.messageRequired")
      .max(P, "twilioSms.validation.messageMaxLength"),
  }),
  ms = ({ onBack: e, onMinimize: t }) => {
    const o = T(),
      { t: r } = v("common"),
      { currentChannelDetailType: a } = p(),
      [n, u] = m.useState(!1),
      { formData: b, actions: c } = Z(),
      {
        control: l,
        handleSubmit: w,
        formState: { errors: f },
        reset: y,
        watch: C,
        setError: A,
      } = ss({ resolver: rs(ds), defaultValues: b, mode: "onSubmit" }),
      [E, W] = m.useState(""),
      _ = es(),
      q = M({ control: l, name: "phoneNumber" })?.trim() !== "",
      V = M({ control: l, name: "message" })?.trim() !== "",
      B = q && V;
    m.useEffect(() => {
      const i = C((d, { name: g }) => {
        g && d[g] !== void 0 && c.updateField(g, d[g]);
      });
      return () => i.unsubscribe();
    }, [C, c]);
    const { channelData: $ } = j({ channelType: a }),
      { mutate: G, isPending: F } = is(),
      h = String($?.phoneNumber || ""),
      Q = (i) => {
        G(
          {
            phoneNumber: i.phoneNumber,
            message: i.message,
            isMarketingConsent: !0,
          },
          {
            onSuccess: () => {
              y(), c.clearForm(), u(!0);
            },
            onError: (d) => {
              u(!1),
                d instanceof k && d.errorCode === R.RateLimitExceeded
                  ? A("phoneNumber", {
                      message: "errors.twilioSms.rateLimitExceeded",
                    })
                  : W("errors.twilioSms.submissionError");
            },
          }
        );
      },
      H = () => {
        u(!1), e?.();
      };
    return n
      ? s.jsx(cs, { onBack: e, onClose: H })
      : s.jsxs("div", {
          className: x(
            "sf:mx-auto sf:overflow-hidden sf:background-gradient-diagonal sf:flex sf:flex-col",
            "sf:widget-window",
            "sf:sm:rounded-2xl"
          ),
          style: o.scrollbarStyle,
          onMouseEnter: o.onMouseEnter,
          onMouseLeave: o.onMouseLeave,
          children: [
            s.jsx(S, {
              onBack: e,
              title: r("channels.twilioSms", "SMS"),
              onMinimize: t,
            }),
            s.jsxs("div", {
              className: x(
                "sf:flex-1 sf:flex sf:flex-col sf:items-center sf:justify-start sf:py-[56px] sf:px-[32px] sf:text-center sf:overflow-auto sf:overscroll-contain",
                "sf:sm:pt-[56px] sf:sm:pb-6 sf:sm:px-[50px]"
              ),
              children: [
                s.jsx("div", {
                  className: "sf:mb-6",
                  children: s.jsx(J, {
                    width: "32",
                    height: "32",
                    className: "sf:mx-auto",
                  }),
                }),
                s.jsx("h1", {
                  className:
                    "sf:text-headline2 sf:font-semibold sf:mb-2 sf:max-w-sm sf:leading-tight",
                  children: r("twilioSms.title", "Chat with us via SMS"),
                }),
                s.jsx("p", {
                  className:
                    "sf:text-body1 sf:text-[#3C3F44] sf:mb-4 sf:max-w-sm sf:leading-relaxed",
                  children: r(
                    "twilioSms.description",
                    "Enter your phone number and we will contact your via SMS shortly"
                  ),
                }),
                s.jsxs("form", {
                  onSubmit: w(Q),
                  className: "sf:w-full sf:max-w-sm sf:space-y-2",
                  children: [
                    s.jsxs("div", {
                      className: "sf:w-full",
                      children: [
                        s.jsx(D, {
                          name: "phoneNumber",
                          control: l,
                          render: ({ field: i }) =>
                            s.jsx(ts, {
                              country: _,
                              enableClickOutside: !1,
                              value: i.value,
                              placeholder: r(
                                "contactFormMessage.phonePlaceholder"
                              ),
                              specialLabel: "",
                              onChange: (d) => i.onChange(d),
                              onBlur: i.onBlur,
                              inputProps: { required: !0, autoComplete: "tel" },
                              inputClass: "sf:placeholder-gray-300",
                              inputStyle: {
                                width: "100%",
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderColor: f.phoneNumber
                                  ? "var(--sf-color-red-500)"
                                  : "var(--sf-color-gray-300)",
                                borderRadius: "var(--sf-radius-sm)",
                                paddingTop: "6px",
                                paddingRight: "calc(var(--sf-spacing) * 3)",
                                paddingBottom: "6px",
                                paddingLeft: "calc(var(--sf-spacing) * 14)",
                                fontSize: "var(--sf-text-base)",
                                lineHeight: "var(--sf-text-base--line-height)",
                                height: "48px",
                                color: "var(--sf-color-gray-900)",
                                backgroundColor: f.phoneNumber
                                  ? "var(--sf-color-bg-error)"
                                  : "var(--sf-color-white)",
                              },
                              buttonClass: "sf:hover:bg-none",
                              buttonStyle: {
                                border: "none",
                                borderRadius:
                                  "var(--sf-radius-md) 0 0 var(--sf-radius-md)",
                              },
                            }),
                        }),
                        f.phoneNumber &&
                          s.jsx("p", {
                            className:
                              "sf:text-red-500 sf:text-sm sf:mt-1 sf:text-left",
                            children: r(f.phoneNumber.message || ""),
                          }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "sf:w-full",
                      children: [
                        s.jsx(D, {
                          name: "message",
                          control: l,
                          render: ({ field: i }) =>
                            s.jsx("textarea", {
                              ...i,
                              "data-testid": "message-input",
                              placeholder: r(
                                "contactFormMessage.messagePlaceholder"
                              ),
                              className: x({
                                "sf:w-full sf:min-h-[120px] sf:bg-white sf:p-3 sf:border sf:rounded-sm sf:text-base sf:text-gray-900 sf:placeholder-gray-300 sf:border-gray-300 sf:resize-none sf:focus:outline-none sf:focus:ring-2 sf:focus:ring-blue-500 sf:focus:border-transparent":
                                  !0,
                                "sf:border-red-500 sf:bg-bg-error": f.message,
                              }),
                              maxLength: P,
                              rows: 4,
                            }),
                        }),
                        s.jsxs("div", {
                          className:
                            "sf:flex sf:justify-between sf:items-center sf:mt-1",
                          children: [
                            f.message &&
                              s.jsx("p", {
                                className: "sf:text-red-500 sf:text-sm",
                                children: r(
                                  f.message.message ||
                                    "twilioSms.validation.messageRequired",
                                  "Message is required"
                                ),
                              }),
                            E &&
                              s.jsx("p", {
                                className: "sf:text-red-500 sf:text-sm",
                                children: r(E),
                              }),
                          ],
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className:
                        "sf:flex sf:items-start sf:text-left sf:space-x-3",
                      children: s.jsx("p", {
                        className:
                          "sf:text-body2 sf:text-[#3C3F44] sf:leading-relaxed sf:select-none",
                        children: r("twilioSms.marketingConsentNew", {
                          defaultValue:
                            "By submitting, you authorize us to text/call the number above, possibly using automated means and/or AI-generated calls/content. Message frequency varies. Consent is not a condition of purchase.",
                        }),
                      }),
                    }),
                    s.jsx("button", {
                      type: "submit",
                      disabled: F || !B,
                      className:
                        "sf:bg-blue-500 sf:text-white sf:w-[100px] sf:h-10 sf:px-6 sf:rounded-full sf:font-semibold sf:focus:outline-none sf:focus:ring-4 sf:focus:ring-blue-300 sf:focus:ring-opacity-50 sf:disabled:opacity-50 sf:disabled:cursor-not-allowed sf:disabled:transform-none sf:mt-5",
                      children: F
                        ? s.jsx("div", {
                            className:
                              "sf:w-4 sf:h-4 sf:border-2 sf:border-gray-300 sf:border-t-widget-button-color sf:rounded-full sf:animate-spin sf:mx-auto",
                          })
                        : r("buttons.submit", "Submit"),
                    }),
                  ],
                }),
                h &&
                  s.jsxs(s.Fragment, {
                    children: [
                      s.jsxs("div", {
                        className:
                          "sf:w-full sf:flex sf:items-center sf:justify-center sf:gap-2 sf:my-6",
                        children: [
                          s.jsx("div", {
                            className: "sf:w-full sf:h-0.5 sf:bg-gray-200",
                          }),
                          s.jsx("p", {
                            className:
                              "sf:text-gray-500 sf:text-sm sf:whitespace-nowrap",
                            children: r("channelDetail.common.or", "or"),
                          }),
                          s.jsx("div", {
                            className: "sf:w-full sf:h-0.5 sf:bg-gray-200",
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "sf:text-center",
                        children: s.jsx("p", {
                          className: "sf:text-body1 sf:mb-2",
                          children: s.jsx(K, {
                            i18nKey: "twilioSms.directSmsDescription",
                            components: {
                              phoneNumber: s.jsx("a", {
                                href: `sms:${h}`,
                                className: "sf:text-blue-90 sf:no-underline",
                                children: h,
                              }),
                            },
                            values: { phoneNumber: h },
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            s.jsx(N, {}),
          ],
        });
  },
  Ns = ({ onMinimize: e, onContinue: t, onBack: o, className: r = "" }) => {
    const { currentChannelDetailType: a } = p(),
      { channelInfo: n } = j({ channelType: a });
    return n?.type === "twilioSms"
      ? s.jsx(ms, { onBack: o, onMinimize: e })
      : s.jsx(ls, { onContinue: t, onMinimize: e, onBack: o, className: r });
  };
export {
  as as QRCodeDisplay,
  cs as SmsSuccessPage,
  ms as TwilioSmsChannelDetail,
  Ns as default,
};
