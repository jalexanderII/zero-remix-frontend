var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_dotenv = __toESM(require("dotenv"));

// app/styles/createEmotionCache.tsx
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
var import_react3 = require("@emotion/react"), import_CssBaseline = __toESM(require("@mui/material/CssBaseline")), import_styles2 = require("@mui/material/styles");

// app/styles/theme.tsx
var import_styles = require("@mui/material/styles"), import_colors = require("@mui/material/colors"), theme = (0, import_styles.createTheme)({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: import_colors.red.A400
    }
  }
}), theme_default = theme;

// app/styles/stylesContext.tsx
var import_react = require("react"), stylesContext_default = (0, import_react.createContext)(null);

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
import_dotenv.default.config();
var ABORT_DELAY = 5e3, cache = createEmotionCache(), MuiRemixServer = (children) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_styles2.ThemeProvider, { theme: theme_default, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CssBaseline.default, {}, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this),
  children
] }, void 0, !0, {
  fileName: "app/entry.server.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/entry.server.tsx",
  lineNumber: 22,
  columnNumber: 3
}, this);
function handleRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request2.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, remixServerWithStyles = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(stylesContext_default.Provider, { value: null, children: MuiRemixServer(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, { context: remixContext, url: request2.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this), { pipe, abort } = (0, import_server.renderToPipeableStream)(remixServerWithStyles, {
      [callbackName]: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (err) => {
        reject(err);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react10 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix2 = require("@clerk/remix");

// app/styles/shared.css
var shared_default = "/build/_assets/shared-DNV4CNRF.css";

// app/styles/app.css
var app_default = "/build/_assets/app-2AL3KCGE.css";

// app/components/header.tsx
var import_remix = require("@clerk/remix"), import_react4 = require("@remix-run/react"), import_outline = require("@heroicons/react/24/outline"), import_react5 = require("@headlessui/react"), import_react6 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), navigation = [
  { name: "Home", href: "/", protected: !1 },
  { name: "Dashboard", href: "/dashboard", protected: !0 },
  { name: "Accounts", href: "/accounts", protected: !0 },
  { name: "Payment Plans", href: "/paymentplans", protected: !0 }
], Header = () => {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react6.useState)(!1), handleDialogCloseOnLinkClick = () => {
    setMobileMenuOpen(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "isolate bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "svg",
      {
        className: "relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]",
        viewBox: "0 0 1155 678",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              fill: "url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)",
              fillOpacity: ".3",
              d: "M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 36,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "linearGradient",
            {
              id: "45de2b6b-92d5-4d68-a6a0-9b9b2abad533",
              x1: "1155.49",
              x2: "-78.208",
              y1: ".177",
              y2: "474.645",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("stop", { stopColor: "#9089FC" }, void 0, !1, {
                  fileName: "app/components/header.tsx",
                  lineNumber: 50,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("stop", { offset: 1, stopColor: "#FF80B5" }, void 0, !1, {
                  fileName: "app/components/header.tsx",
                  lineNumber: 51,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 42,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/header.tsx",
        lineNumber: 31,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "left justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { to: "/", className: "-m-1.5 p-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          className: "h-8",
          src: "/logo.svg",
          width: "32",
          height: "32",
          alt: "Logo"
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.tsx",
          lineNumber: 59,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Ot.Zero" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        type: "button",
        className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
        onClick: () => setMobileMenuOpen(!0),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/header.tsx",
        lineNumber: 71,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:flex lg:gap-x-12", children: navigation.map((item) => item.protected ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react4.Link,
      {
        prefetch: "intent",
        to: item.href,
        className: "text-sm font-semibold leading-6 text-gray-900",
        children: item.name
      },
      item.name,
      !1,
      {
        fileName: "app/components/header.tsx",
        lineNumber: 86,
        columnNumber: 19
      },
      this
    ) }, item.name, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react4.Link,
      {
        to: item.href,
        className: "text-sm font-semibold leading-6 text-gray-900",
        children: item.name
      },
      item.name,
      !1,
      {
        fileName: "app/components/header.tsx",
        lineNumber: 97,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:flex right", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react4.Link,
        {
          to: "/sign-in",
          className: "text-sm font-semibold leading-6 text-gray-900",
          children: "Sign in"
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.tsx",
          lineNumber: 109,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.UserButton, { userProfileUrl: "/user", afterSignOutUrl: "/" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Dialog, { as: "div", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Dialog.Panel, { className: "fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { to: "/", className: "-m-1.5 p-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              className: "h-8",
              src: "/logo.svg",
              width: "32",
              height: "32",
              alt: "Logo"
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 125,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Ot.Zero" }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            type: "button",
            className: "-m-2.5 rounded-md p-2.5 text-gray-700",
            onClick: () => setMobileMenuOpen(!1),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 139,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 140,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/header.tsx",
            lineNumber: 134,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/header.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2 py-6", children: navigation.map((item) => item.protected ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_react4.Link,
          {
            onClick: handleDialogCloseOnLinkClick,
            to: item.href,
            className: "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10",
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/components/header.tsx",
            lineNumber: 150,
            columnNumber: 27
          },
          this
        ) }, item.name, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 149,
          columnNumber: 25
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_react4.Link,
          {
            onClick: handleDialogCloseOnLinkClick,
            to: item.href,
            className: "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10",
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/components/header.tsx",
            lineNumber: 161,
            columnNumber: 23
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 145,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react4.Link,
            {
              to: "/sign-in",
              onClick: handleDialogCloseOnLinkClick,
              className: "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10",
              children: "Sign in"
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 174,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 173,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.UserButton, { userProfileUrl: "/user", afterSignOutUrl: "/" }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 183,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 182,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 172,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.tsx",
        lineNumber: 144,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}, header_default = Header;

// app/root.tsx
var import_react11 = require("react");

// app/components/layout.tsx
var import_Container = __toESM(require("@mui/material/Container"));

// app/components/LoadingSpinner.tsx
var import_react7 = require("@remix-run/react"), import_react8 = require("react"), import_react9 = require("@tremor/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), LoadingSpinner = () => {
  let [showSpinner, setShowSpinner] = (0, import_react8.useState)(!1), [showMessage, setShowMessage] = (0, import_react8.useState)(!1), transition = (0, import_react7.useNavigation)();
  return (0, import_react8.useEffect)(() => {
    let spinnerTimeoutId, messageTimeoutId;
    return transition.state === "loading" ? (spinnerTimeoutId = setTimeout(() => setShowSpinner(!0), 300), messageTimeoutId = setTimeout(() => setShowMessage(!0), 600)) : (setShowSpinner(!1), setShowMessage(!1)), () => {
      clearTimeout(spinnerTimeoutId), clearTimeout(messageTimeoutId);
    };
  }, [transition.state]), showSpinner ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col justify-center items-center min-h-screen space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: "animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-purple-600 rounded-full",
        role: "status",
        "aria-label": "loading",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, !1, {
          fileName: "app/components/LoadingSpinner.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/LoadingSpinner.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    ),
    showMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.Text, { className: "text-center text-gray-700", children: "Just a little longer, crunching numbers and getting your data..." }, void 0, !1, {
      fileName: "app/components/LoadingSpinner.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/LoadingSpinner.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this) : null;
}, LoadingSpinner_default = LoadingSpinner;

// app/components/layout.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Container.default, { maxWidth: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LoadingSpinner_default, {}, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/layout.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Re.Zero",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "preload", href: shared_default, as: "style" },
  { rel: "preload", href: app_default, as: "style" },
  { rel: "stylesheet", href: shared_default },
  { rel: "stylesheet", href: app_default }
], loader = (args) => (0, import_ssr.rootAuthLoader)(
  args,
  ({ request: request2 }) => {
    let { userId, sessionId, getToken } = request2.auth;
    return console.log("Root loader auth:", {
      userId,
      sessionId,
      getToken
    }), {
      message: "Hello from the root loader"
    };
  },
  { loadUser: !0 }
);
function Document({
  children,
  title
}) {
  let styleData = (0, import_react11.useContext)(stylesContext_default);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("title", { children: title || null }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      styleData == null ? void 0 : styleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "style",
        {
          "data-emotion": `${key} ${ids.join(" ")}`,
          dangerouslySetInnerHTML: { __html: css }
        },
        key,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 11
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
var ErrorBoundary = ({ error }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Error" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 109,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: error.message }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 110,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The stack trace is:" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 111,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("pre", { children: error.stack }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 112,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 108,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 107,
  columnNumber: 5
}, this);
function DefaultCatchBoundary() {
  let caught = (0, import_react10.useCatch)();
  switch (caught.status) {
    case 401:
    case 404:
    case 406:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-screen min-h-screen flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("article", { className: "prose prose-lg prose-blue w-full max-w-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "font-mono text-blue-500 pr-5", children: caught.status }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this),
          " ",
          caught.data
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("pre", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("code", { children: JSON.stringify(caught.data, null, 2) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Link, { to: "/", children: "Start fresh" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 138,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this);
    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
}
var root_default = (0, import_remix2.ClerkApp)(App), CatchBoundary = (0, import_remix2.ClerkCatchBoundary)(DefaultCatchBoundary);

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => _index
});
var import_react13 = require("@remix-run/react"), import_remix3 = require("@clerk/remix");

// app/components/footer.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "svg",
  {
    className: "relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]",
    viewBox: "0 0 1155 678",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "path",
        {
          fill: "url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)",
          fillOpacity: ".3",
          d: "M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.tsx",
          lineNumber: 9,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "linearGradient",
        {
          id: "ecb5b0c9-546c-4772-8c71-4d3f06d544bc",
          x1: "1155.49",
          x2: "-78.208",
          y1: ".177",
          y2: "474.645",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("stop", { stopColor: "#9089FC" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 23,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("stop", { offset: 1, stopColor: "#FF80B5" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/footer.tsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/footer.tsx",
    lineNumber: 4,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/footer.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/footer.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this), footer_default = Footer;

// app/routes/_index.tsx
var import_react14 = require("react");

// app/components/how_to_get_started.tsx
var import_solid = require("@heroicons/react/20/solid"), import_react12 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Step = (0, import_react12.memo)(({ icon, title, description }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-start mb-6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-12 h-12 bg-purple-400 rounded-full p-2", children: icon }, void 0, !1, {
    fileName: "app/components/how_to_get_started.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ml-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-2xl font-semibold tracking-tight text-gray-900", children: title }, void 0, !1, {
      fileName: "app/components/how_to_get_started.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md leading-8 text-gray-600", children: description }, void 0, !1, {
      fileName: "app/components/how_to_get_started.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/how_to_get_started.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/how_to_get_started.tsx",
  lineNumber: 17,
  columnNumber: 5
}, this));
Step.displayName = "Step";
var HowToGetStarted = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "py-12 flex flex-col justify-center sm:py-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative py-3 sm:max-w-xl sm:mx-auto", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" }, void 0, !1, {
    fileName: "app/components/how_to_get_started.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-center text-4xl font-bold tracking-tight text-gray-900 mb-10", children: "How to Get Started" }, void 0, !1, {
      fileName: "app/components/how_to_get_started.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        Step,
        {
          description: "Connect a credit account securely using Plaid.",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid.CreditCardIcon, { className: "h-8 w-8 text-white" }, void 0, !1, {
            fileName: "app/components/how_to_get_started.tsx",
            lineNumber: 42,
            columnNumber: 21
          }, this),
          title: "1. Connect a credit card."
        },
        void 0,
        !1,
        {
          fileName: "app/components/how_to_get_started.tsx",
          lineNumber: 40,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        Step,
        {
          description: "Select a plan creation option that suits your financial goals and needs.",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid.ClipboardDocumentIcon, { className: "h-8 w-8 text-white" }, void 0, !1, {
            fileName: "app/components/how_to_get_started.tsx",
            lineNumber: 47,
            columnNumber: 21
          }, this),
          title: "2. Create a payment plan."
        },
        void 0,
        !1,
        {
          fileName: "app/components/how_to_get_started.tsx",
          lineNumber: 45,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        Step,
        {
          description: "Relax and focus on what matters most while we help you stay on top of your finances.",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid.CalendarIcon, { className: "h-8 w-8 text-white" }, void 0, !1, {
            fileName: "app/components/how_to_get_started.tsx",
            lineNumber: 52,
            columnNumber: 21
          }, this),
          title: "3. Sit back and we'll let you know when your payment is due!"
        },
        void 0,
        !1,
        {
          fileName: "app/components/how_to_get_started.tsx",
          lineNumber: 50,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/how_to_get_started.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/how_to_get_started.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/how_to_get_started.tsx",
  lineNumber: 33,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/how_to_get_started.tsx",
  lineNumber: 32,
  columnNumber: 5
}, this), how_to_get_started_default = HowToGetStarted;

// app/routes/_index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Main = () => ((0, import_react14.useEffect)(() => {
  if (document.getElementById("launchlist"))
    return;
  let script = document.createElement("script");
  script.id = "launchlist", script.src = "https://getlaunchlist.com/js/widget.js", script.type = "text/javascript", document.body.appendChild(script);
}, []), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative px-4 lg:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-2xl py-4 sm:py-6 lg:py-12", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-2 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-10 mb-6 flex items-center justify-center gap-x-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_remix3.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_react13.Link,
      {
        to: "/sign-up",
        className: "rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        children: "Sign up today"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 32,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 31,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl", children: "Tired of managing all of your credit payments on your own?" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Zero is the easiest way to manage your debt. Zero will help you achieve your credit reduction goals, save on fees, and improve your credit score!" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "div",
      {
        className: "launchlist-widget",
        "data-key-id": "KDgsgp",
        "data-height": "125px",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-6 text-sm text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("em", { children: "With premium we'll automatically handle the deduction and payments needed for your payment plans" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 29,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(how_to_get_started_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 28,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 27,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 26,
  columnNumber: 5
}, this));
function _index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Main, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  getDashboardLoaderData: () => getDashboardLoaderData,
  getUserEmail: () => getUserEmail,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_ssr2 = require("@clerk/remix/ssr.server");

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype, { getPrototypeOf } = Object, kindOf = ((cache2) => (thing) => {
  let str = toString.call(thing);
  return cache2[str] || (cache2[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kindOfTest = (type) => (type = type.toLowerCase(), (thing) => kindOf(thing) === type), typeOfTest = (type) => (thing) => typeof thing === type, { isArray } = Array, isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? result = ArrayBuffer.isView(val) : result = val && val.buffer && isArrayBuffer(val.buffer), result;
}
var isString = typeOfTest("string"), isFunction = typeOfTest("function"), isNumber = typeOfTest("number"), isObject = (thing) => thing !== null && typeof thing == "object", isBoolean = (thing) => thing === !0 || thing === !1, isPlainObject = (val) => {
  if (kindOf(val) !== "object")
    return !1;
  let prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}, isDate = kindOfTest("Date"), isFile = kindOfTest("File"), isBlob = kindOfTest("Blob"), isFileList = kindOfTest("FileList"), isStream = (val) => isObject(val) && isFunction(val.pipe), isFormData = (thing) => {
  let pattern = "[object FormData]";
  return thing && (typeof FormData == "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
}, isURLSearchParams = kindOfTest("URLSearchParams"), trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = !1 } = {}) {
  if (obj === null || typeof obj > "u")
    return;
  let i, l2;
  if (typeof obj != "object" && (obj = [obj]), isArray(obj))
    for (i = 0, l2 = obj.length; i < l2; i++)
      fn.call(null, obj[i], i, obj);
  else {
    let keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj), len = keys.length, key;
    for (i = 0; i < len; i++)
      key = keys[i], fn.call(null, obj[key], key, obj);
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  let keys = Object.keys(obj), i = keys.length, _key;
  for (; i-- > 0; )
    if (_key = keys[i], key === _key.toLowerCase())
      return _key;
  return null;
}
var _global = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  let { caseless } = isContextDefined(this) && this || {}, result = {}, assignValue = (val, key) => {
    let targetKey = caseless && findKey(result, key) || key;
    isPlainObject(result[targetKey]) && isPlainObject(val) ? result[targetKey] = merge(result[targetKey], val) : isPlainObject(val) ? result[targetKey] = merge({}, val) : isArray(val) ? result[targetKey] = val.slice() : result[targetKey] = val;
  };
  for (let i = 0, l2 = arguments.length; i < l2; i++)
    arguments[i] && forEach(arguments[i], assignValue);
  return result;
}
var extend = (a2, b, thisArg, { allOwnKeys } = {}) => (forEach(b, (val, key) => {
  thisArg && isFunction(val) ? a2[key] = bind(val, thisArg) : a2[key] = val;
}, { allOwnKeys }), a2), stripBOM = (content) => (content.charCodeAt(0) === 65279 && (content = content.slice(1)), content), inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2), constructor.prototype.constructor = constructor, Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  }), props && Object.assign(constructor.prototype, props);
}, toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props, i, prop, merged = {};
  if (destObj = destObj || {}, sourceObj == null)
    return destObj;
  do {
    for (props = Object.getOwnPropertyNames(sourceObj), i = props.length; i-- > 0; )
      prop = props[i], (!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop] && (destObj[prop] = sourceObj[prop], merged[prop] = !0);
    sourceObj = filter2 !== !1 && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}, endsWith = (str, searchString, position) => {
  str = String(str), (position === void 0 || position > str.length) && (position = str.length), position -= searchString.length;
  let lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}, toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  let arr = new Array(i);
  for (; i-- > 0; )
    arr[i] = thing[i];
  return arr;
}, isTypedArray = ((TypedArray) => (thing) => TypedArray && thing instanceof TypedArray)(typeof Uint8Array < "u" && getPrototypeOf(Uint8Array)), forEachEntry = (obj, fn) => {
  let iterator = (obj && obj[Symbol.iterator]).call(obj), result;
  for (; (result = iterator.next()) && !result.done; ) {
    let pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}, matchAll = (regExp, str) => {
  let matches, arr = [];
  for (; (matches = regExp.exec(str)) !== null; )
    arr.push(matches);
  return arr;
}, isHTMLForm = kindOfTest("HTMLFormElement"), toCamelCase = (str) => str.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(m, p1, p2) {
    return p1.toUpperCase() + p2;
  }
), hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype), isRegExp = kindOfTest("RegExp"), reduceDescriptors = (obj, reducer) => {
  let descriptors2 = Object.getOwnPropertyDescriptors(obj), reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    reducer(descriptor, name, obj) !== !1 && (reducedDescriptors[name] = descriptor);
  }), Object.defineProperties(obj, reducedDescriptors);
}, freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1)
      return !1;
    let value = obj[name];
    if (!!isFunction(value)) {
      if (descriptor.enumerable = !1, "writable" in descriptor) {
        descriptor.writable = !1;
        return;
      }
      descriptor.set || (descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      });
    }
  });
}, toObjectSet = (arrayOrString, delimiter) => {
  let obj = {}, define = (arr) => {
    arr.forEach((value) => {
      obj[value] = !0;
    });
  };
  return isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter)), obj;
}, noop = () => {
}, toFiniteNumber = (value, defaultValue) => (value = +value, Number.isFinite(value) ? value : defaultValue), ALPHA = "abcdefghijklmnopqrstuvwxyz", DIGIT = "0123456789", ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}, generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "", { length } = alphabet;
  for (; size--; )
    str += alphabet[Math.random() * length | 0];
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  let stack = new Array(10), visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0)
        return;
      if (!("toJSON" in source)) {
        stack[i] = source;
        let target = isArray(source) ? [] : {};
        return forEach(source, (value, key) => {
          let reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        }), stack[i] = void 0, target;
      }
    }
    return source;
  };
  return visit(obj, 0);
}, utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request2, response) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = message, this.name = "AxiosError", code && (this.code = code), config && (this.config = config), request2 && (this.request = request2), response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype, descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: !0 });
AxiosError.from = (error, code, config, request2, response, customProps) => {
  let axiosError = Object.create(prototype);
  return utils_default.toFlatObject(error, axiosError, function(obj) {
    return obj !== Error.prototype;
  }, (prop) => prop !== "isAxiosError"), AxiosError.call(axiosError, error.message, code, config, request2, response), axiosError.cause = error, axiosError.name = error.name, customProps && Object.assign(axiosError, customProps), axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/platform/node/classes/FormData.js
var import_form_data = __toESM(require("form-data"), 1), FormData_default = import_form_data.default;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  return path ? path.concat(key).map(function(token2, i) {
    return token2 = removeBrackets(token2), !dots && i ? "[" + token2 + "]" : token2;
  }).join(dots ? "." : "") : key;
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj))
    throw new TypeError("target must be an object");
  formData = formData || new (FormData_default || FormData)(), options = utils_default.toFlatObject(options, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  let metaTokens = options.metaTokens, visitor = options.visitor || defaultVisitor, dots = options.dots, indexes = options.indexes, useBlob = (options.Blob || typeof Blob < "u" && Blob) && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor))
    throw new TypeError("visitor must be a function");
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value))
      return value.toISOString();
    if (!useBlob && utils_default.isBlob(value))
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    return utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value) ? useBlob && typeof Blob == "function" ? new Blob([value]) : Buffer.from(value) : value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value == "object") {
      if (utils_default.endsWith(key, "{}"))
        key = metaTokens ? key : key.slice(0, -2), value = JSON.stringify(value);
      else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value)))
        return key = removeBrackets(key), arr.forEach(function(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            indexes === !0 ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        }), !1;
    }
    return isVisitable(value) ? !0 : (formData.append(renderKey(path, key, dots), convertValue(value)), !1);
  }
  let stack = [], exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (!utils_default.isUndefined(value)) {
      if (stack.indexOf(value) !== -1)
        throw Error("Circular reference detected in " + path.join("."));
      stack.push(value), utils_default.forEach(value, function(el, key) {
        (!(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        )) === !0 && build(el, path ? path.concat(key) : [key]);
      }), stack.pop();
    }
  }
  if (!utils_default.isObject(obj))
    throw new TypeError("data must be an object");
  return build(obj), formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  let charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [], params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function(encoder) {
  let _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url2, params, options) {
  if (!params)
    return url2;
  let _encode = options && options.encode || encode2, serializeFn = options && options.serialize, serializedParams;
  if (serializeFn ? serializedParams = serializeFn(params, options) : serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode), serializedParams) {
    let hashmarkIndex = url2.indexOf("#");
    hashmarkIndex !== -1 && (url2 = url2.slice(0, hashmarkIndex)), url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  use(fulfilled, rejected, options) {
    return this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : !1,
      runWhen: options ? options.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(id) {
    this.handlers[id] && (this.handlers[id] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(fn) {
    utils_default.forEach(this.handlers, function(h) {
      h !== null && fn(h);
    });
  }
}, InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
};

// node_modules/axios/lib/platform/node/classes/URLSearchParams.js
var import_url = __toESM(require("url"), 1), URLSearchParams_default = import_url.default.URLSearchParams;

// node_modules/axios/lib/platform/node/index.js
var node_default = {
  isNode: !0,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: typeof Blob < "u" && Blob || null
  },
  protocols: ["http", "https", "file", "data"]
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new node_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      return node_default.isNode && utils_default.isBuffer(value) ? (this.append(key, value.toString("base64")), !1) : helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => match[0] === "[]" ? "" : match[1] || match[0]);
}
function arrayToObject(arr) {
  let obj = {}, keys = Object.keys(arr), i, len = keys.length, key;
  for (i = 0; i < len; i++)
    key = keys[i], obj[key] = arr[key];
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++], isNumericKey = Number.isFinite(+name), isLast = index >= path.length;
    return name = !name && utils_default.isArray(target) ? target.length : name, isLast ? (utils_default.hasOwnProp(target, name) ? target[name] = [target[name], value] : target[name] = value, !isNumericKey) : ((!target[name] || !utils_default.isObject(target[name])) && (target[name] = []), buildPath(path, value, target[name], index) && utils_default.isArray(target[name]) && (target[name] = arrayToObject(target[name])), !isNumericKey);
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    let obj = {};
    return utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    }), obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": void 0
};
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue))
    try {
      return (parser || JSON.parse)(rawValue), utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError")
        throw e;
    }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function(data, headers) {
    let contentType = headers.getContentType() || "", hasJSONContentType = contentType.indexOf("application/json") > -1, isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data) && (data = new FormData(data)), utils_default.isFormData(data))
      return hasJSONContentType && hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data))
      return data;
    if (utils_default.isArrayBufferView(data))
      return data.buffer;
    if (utils_default.isURLSearchParams(data))
      return headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), data.toString();
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1)
        return toURLEncodedForm(data, this.formSerializer).toString();
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        let _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    return isObjectPayload || hasJSONContentType ? (headers.setContentType("application/json", !1), stringifySafely(data)) : data;
  }],
  transformResponse: [function(data) {
    let transitional2 = this.transitional || defaults.transitional, forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing, JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      let strictJSONParsing = !(transitional2 && transitional2.silentJSONParsing) && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing)
          throw e.name === "SyntaxError" ? AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response) : e;
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: node_default.classes.FormData,
    Blob: node_default.classes.Blob
  },
  validateStatus: function(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
utils_default.forEach(["delete", "get", "head"], function(method) {
  defaults.headers[method] = {};
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), parseHeaders_default = (rawHeaders) => {
  let parsed = {}, key, val, i;
  return rawHeaders && rawHeaders.split(`
`).forEach(function(line) {
    i = line.indexOf(":"), key = line.substring(0, i).trim().toLowerCase(), val = line.substring(i + 1).trim(), !(!key || parsed[key] && ignoreDuplicateOf[key]) && (key === "set-cookie" ? parsed[key] ? parsed[key].push(val) : parsed[key] = [val] : parsed[key] = parsed[key] ? parsed[key] + ", " + val : val);
  }), parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  return value === !1 || value == null ? value : utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  let tokens = /* @__PURE__ */ Object.create(null), tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, match;
  for (; match = tokensRE.exec(str); )
    tokens[match[1]] = match[2];
  return tokens;
}
function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2))
    return filter2.call(this, value, header);
  if (isHeaderNameFilter && (value = header), !!utils_default.isString(value)) {
    if (utils_default.isString(filter2))
      return value.indexOf(filter2) !== -1;
    if (utils_default.isRegExp(filter2))
      return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => char.toUpperCase() + str);
}
function buildAccessors(obj, header) {
  let accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: !0
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    let self2 = this;
    function setHeader(_value, _header, _rewrite) {
      let lHeader = normalizeHeader(_header);
      if (!lHeader)
        throw new Error("header name must be a non-empty string");
      let key = utils_default.findKey(self2, lHeader);
      (!key || self2[key] === void 0 || _rewrite === !0 || _rewrite === void 0 && self2[key] !== !1) && (self2[key || _header] = normalizeValue(_value));
    }
    let setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    return utils_default.isPlainObject(header) || header instanceof this.constructor ? setHeaders(header, valueOrRewrite) : utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header) ? setHeaders(parseHeaders_default(header), valueOrRewrite) : header != null && setHeader(valueOrRewrite, header, rewrite), this;
  }
  get(header, parser) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      if (key) {
        let value = this[key];
        if (!parser)
          return value;
        if (parser === !0)
          return parseTokens(value);
        if (utils_default.isFunction(parser))
          return parser.call(this, value, key);
        if (utils_default.isRegExp(parser))
          return parser.exec(value);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return !1;
  }
  delete(header, matcher) {
    let self2 = this, deleted = !1;
    function deleteHeader(_header) {
      if (_header = normalizeHeader(_header), _header) {
        let key = utils_default.findKey(self2, _header);
        key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher)) && (delete self2[key], deleted = !0);
      }
    }
    return utils_default.isArray(header) ? header.forEach(deleteHeader) : deleteHeader(header), deleted;
  }
  clear(matcher) {
    let keys = Object.keys(this), i = keys.length, deleted = !1;
    for (; i--; ) {
      let key = keys[i];
      (!matcher || matchHeaderValue(this, this[key], key, matcher, !0)) && (delete this[key], deleted = !0);
    }
    return deleted;
  }
  normalize(format) {
    let self2 = this, headers = {};
    return utils_default.forEach(this, (value, header) => {
      let key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value), delete self2[header];
        return;
      }
      let normalized = format ? formatHeader(header) : String(header).trim();
      normalized !== header && delete self2[header], self2[normalized] = normalizeValue(value), headers[normalized] = !0;
    }), this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    let obj = /* @__PURE__ */ Object.create(null);
    return utils_default.forEach(this, (value, header) => {
      value != null && value !== !1 && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    }), obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    let computed = new this(first);
    return targets.forEach((target) => computed.set(target)), computed;
  }
  static accessor(header) {
    let accessors = (this[$internals] = this[$internals] = {
      accessors: {}
    }).accessors, prototype3 = this.prototype;
    function defineAccessor(_header) {
      let lHeader = normalizeHeader(_header);
      accessors[lHeader] || (buildAccessors(prototype3, _header), accessors[lHeader] = !0);
    }
    return utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header), this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.freezeMethods(AxiosHeaders.prototype);
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  let config = this || defaults_default, context = response || config, headers = AxiosHeaders_default.from(context.headers), data = context.data;
  return utils_default.forEach(fns, function(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  }), headers.normalize(), data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request2) {
  AxiosError_default.call(this, message ?? "canceled", AxiosError_default.ERR_CANCELED, config, request2), this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: !0
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  let validateStatus2 = response.config.validateStatus;
  !response.status || !validateStatus2 || validateStatus2(response.status) ? resolve(response) : reject(new AxiosError_default(
    "Request failed with status code " + response.status,
    [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
    response.config,
    response.request,
    response
  ));
}

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  return baseURL && !isAbsoluteURL(requestedURL) ? combineURLs(baseURL, requestedURL) : requestedURL;
}

// node_modules/axios/lib/adapters/http.js
var import_proxy_from_env = require("proxy-from-env"), import_http = __toESM(require("http"), 1), import_https = __toESM(require("https"), 1), import_util2 = __toESM(require("util"), 1), import_follow_redirects = __toESM(require("follow-redirects"), 1), import_zlib = __toESM(require("zlib"), 1);

// node_modules/axios/lib/env/data.js
var VERSION = "1.3.4";

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url2) {
  let match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/fromDataURI.js
var DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function fromDataURI(uri, asBlob, options) {
  let _Blob = options && options.Blob || node_default.classes.Blob, protocol = parseProtocol(uri);
  if (asBlob === void 0 && _Blob && (asBlob = !0), protocol === "data") {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    let match = DATA_URL_PATTERN.exec(uri);
    if (!match)
      throw new AxiosError_default("Invalid URL", AxiosError_default.ERR_INVALID_URL);
    let mime = match[1], isBase64 = match[2], body = match[3], buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
    if (asBlob) {
      if (!_Blob)
        throw new AxiosError_default("Blob is not supported", AxiosError_default.ERR_NOT_SUPPORT);
      return new _Blob([buffer], { type: mime });
    }
    return buffer;
  }
  throw new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_NOT_SUPPORT);
}

// node_modules/axios/lib/adapters/http.js
var import_stream5 = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var import_stream2 = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0, threshold = 1e3 / freq, timer = null;
  return function(force, args) {
    let now = Date.now();
    if (force || now - timestamp > threshold)
      return timer && (clearTimeout(timer), timer = null), timestamp = now, fn.apply(null, args);
    timer || (timer = setTimeout(() => (timer = null, timestamp = Date.now(), fn.apply(null, args)), threshold - (now - timestamp)));
  };
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  let bytes = new Array(samplesCount), timestamps = new Array(samplesCount), head = 0, tail = 0, firstSampleTS;
  return min = min !== void 0 ? min : 1e3, function(chunkLength) {
    let now = Date.now(), startedAt = timestamps[tail];
    firstSampleTS || (firstSampleTS = now), bytes[head] = chunkLength, timestamps[head] = now;
    let i = tail, bytesCount = 0;
    for (; i !== head; )
      bytesCount += bytes[i++], i = i % samplesCount;
    if (head = (head + 1) % samplesCount, head === tail && (tail = (tail + 1) % samplesCount), now - firstSampleTS < min)
      return;
    let passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var kInternals = Symbol("internals"), AxiosTransformStream = class extends import_stream2.default.Transform {
  constructor(options) {
    options = utils_default.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => !utils_default.isUndefined(source[prop])), super({
      readableHighWaterMark: options.chunkSize
    });
    let self2 = this, internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    }, _speedometer = speedometer_default(internals.ticksRate * options.samplesCount, internals.timeWindow);
    this.on("newListener", (event) => {
      event === "progress" && (internals.isCaptured || (internals.isCaptured = !0));
    });
    let bytesNotified = 0;
    internals.updateProgress = throttle_default(function() {
      let totalBytes = internals.length, bytesTransferred = internals.bytesSeen, progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self2.destroyed)
        return;
      let rate = _speedometer(progressBytes);
      bytesNotified = bytesTransferred, process.nextTick(() => {
        self2.emit("progress", {
          loaded: bytesTransferred,
          total: totalBytes,
          progress: totalBytes ? bytesTransferred / totalBytes : void 0,
          bytes: progressBytes,
          rate: rate || void 0,
          estimated: rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : void 0
        });
      });
    }, internals.ticksRate);
    let onFinish = () => {
      internals.updateProgress(!0);
    };
    this.once("end", onFinish), this.once("error", onFinish);
  }
  _read(size) {
    let internals = this[kInternals];
    return internals.onReadCallback && internals.onReadCallback(), super._read(size);
  }
  _transform(chunk, encoding, callback) {
    let self2 = this, internals = this[kInternals], maxRate = internals.maxRate, readableHighWaterMark = this.readableHighWaterMark, timeWindow = internals.timeWindow, divider = 1e3 / timeWindow, bytesThreshold = maxRate / divider, minChunkSize = internals.minChunkSize !== !1 ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    function pushChunk(_chunk, _callback) {
      let bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes, internals.bytes += bytes, internals.isCaptured && internals.updateProgress(), self2.push(_chunk) ? process.nextTick(_callback) : internals.onReadCallback = () => {
        internals.onReadCallback = null, process.nextTick(_callback);
      };
    }
    let transformChunk = (_chunk, _callback) => {
      let chunkSize = Buffer.byteLength(_chunk), chunkRemainder = null, maxChunkSize = readableHighWaterMark, bytesLeft, passed = 0;
      if (maxRate) {
        let now = Date.now();
        (!internals.ts || (passed = now - internals.ts) >= timeWindow) && (internals.ts = now, bytesLeft = bytesThreshold - internals.bytes, internals.bytes = bytesLeft < 0 ? -bytesLeft : 0, passed = 0), bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0)
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        bytesLeft < maxChunkSize && (maxChunkSize = bytesLeft);
      }
      maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize && (chunkRemainder = _chunk.subarray(maxChunkSize), _chunk = _chunk.subarray(0, maxChunkSize)), pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err)
        return callback(err);
      _chunk ? transformChunk(_chunk, transformNextChunk) : callback(null);
    });
  }
  setLength(length) {
    return this[kInternals].length = +length, this;
  }
}, AxiosTransformStream_default = AxiosTransformStream;

// node_modules/axios/lib/adapters/http.js
var import_events = __toESM(require("events"), 1);

// node_modules/axios/lib/helpers/formDataToStream.js
var import_util = require("util"), import_stream3 = require("stream");

// node_modules/axios/lib/helpers/readBlob.js
var { asyncIterator } = Symbol, readBlob = async function* (blob) {
  blob.stream ? yield* blob.stream() : blob.arrayBuffer ? yield await blob.arrayBuffer() : blob[asyncIterator] ? yield* blob[asyncIterator]() : yield blob;
}, readBlob_default = readBlob;

// node_modules/axios/lib/helpers/formDataToStream.js
var BOUNDARY_ALPHABET = utils_default.ALPHABET.ALPHA_DIGIT + "-_", textEncoder = new import_util.TextEncoder(), CRLF = `\r
`, CRLF_BYTES = textEncoder.encode(CRLF), CRLF_BYTES_COUNT = 2, FormDataPart = class {
  constructor(name, value) {
    let { escapeName } = this.constructor, isStringValue = utils_default.isString(value), headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
    isStringValue ? value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF)) : headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`, this.headers = textEncoder.encode(headers + CRLF), this.contentLength = isStringValue ? value.byteLength : value.size, this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT, this.name = name, this.value = value;
  }
  async *encode() {
    yield this.headers;
    let { value } = this;
    utils_default.isTypedArray(value) ? yield value : yield* readBlob_default(value), yield CRLF_BYTES;
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, (match) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[match]);
  }
}, formDataToStream = (form, headersHandler, options) => {
  let {
    tag = "form-data-boundary",
    size = 25,
    boundary = tag + "-" + utils_default.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils_default.isFormData(form))
    throw TypeError("FormData instance required");
  if (boundary.length < 1 || boundary.length > 70)
    throw Error("boundary must be 10-70 characters long");
  let boundaryBytes = textEncoder.encode("--" + boundary + CRLF), footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF + CRLF), contentLength = footerBytes.byteLength, parts = Array.from(form.entries()).map(([name, value]) => {
    let part = new FormDataPart(name, value);
    return contentLength += part.size, part;
  });
  contentLength += boundaryBytes.byteLength * parts.length, contentLength = utils_default.toFiniteNumber(contentLength);
  let computedHeaders = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`
  };
  return Number.isFinite(contentLength) && (computedHeaders["Content-Length"] = contentLength), headersHandler && headersHandler(computedHeaders), import_stream3.Readable.from(async function* () {
    for (let part of parts)
      yield boundaryBytes, yield* part.encode();
    yield footerBytes;
  }());
}, formDataToStream_default = formDataToStream;

// node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js
var import_stream4 = __toESM(require("stream"), 1), ZlibHeaderTransformStream = class extends import_stream4.default.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk), callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0 && (this._transform = this.__transform, chunk[0] !== 120)) {
      let header = Buffer.alloc(2);
      header[0] = 120, header[1] = 156, this.push(header, encoding);
    }
    this.__transform(chunk, encoding, callback);
  }
}, ZlibHeaderTransformStream_default = ZlibHeaderTransformStream;

// node_modules/axios/lib/adapters/http.js
var zlibOptions = {
  flush: import_zlib.default.constants.Z_SYNC_FLUSH,
  finishFlush: import_zlib.default.constants.Z_SYNC_FLUSH
}, brotliOptions = {
  flush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH
}, isBrotliSupported = utils_default.isFunction(import_zlib.default.createBrotliDecompress), { http: httpFollow, https: httpsFollow } = import_follow_redirects.default, isHttps = /https:?/, supportedProtocols = node_default.protocols.map((protocol) => protocol + ":");
function dispatchBeforeRedirect(options) {
  options.beforeRedirects.proxy && options.beforeRedirects.proxy(options), options.beforeRedirects.config && options.beforeRedirects.config(options);
}
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== !1) {
    let proxyUrl = (0, import_proxy_from_env.getProxyForUrl)(location);
    proxyUrl && (proxy = new URL(proxyUrl));
  }
  if (proxy) {
    if (proxy.username && (proxy.auth = (proxy.username || "") + ":" + (proxy.password || "")), proxy.auth) {
      (proxy.auth.username || proxy.auth.password) && (proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || ""));
      let base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
      options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
    let proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost, options.host = proxyHost, options.port = proxy.port, options.path = location, proxy.protocol && (options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`);
  }
  options.beforeRedirects.proxy = function(redirectOptions) {
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}
var isHttpAdapterSupported = typeof process < "u" && utils_default.kindOf(process) === "process", wrapAsync = (asyncExecutor) => new Promise((resolve, reject) => {
  let onDone, isDone, done = (value, isRejected) => {
    isDone || (isDone = !0, onDone && onDone(value, isRejected));
  }, _resolve = (value) => {
    done(value), resolve(value);
  }, _reject = (reason) => {
    done(reason, !0), reject(reason);
  };
  asyncExecutor(_resolve, _reject, (onDoneHandler) => onDone = onDoneHandler).catch(_reject);
}), http_default = isHttpAdapterSupported && function(config) {
  return wrapAsync(async function(resolve, reject, onDone) {
    let { data } = config, { responseType, responseEncoding } = config, method = config.method.toUpperCase(), isDone, rejected = !1, req, emitter = new import_events.default(), onFinished = () => {
      config.cancelToken && config.cancelToken.unsubscribe(abort), config.signal && config.signal.removeEventListener("abort", abort), emitter.removeAllListeners();
    };
    onDone((value, isRejected) => {
      isDone = !0, isRejected && (rejected = !0, onFinished());
    });
    function abort(reason) {
      emitter.emit("abort", !reason || reason.type ? new CanceledError_default(null, config, req) : reason);
    }
    emitter.once("abort", reject), (config.cancelToken || config.signal) && (config.cancelToken && config.cancelToken.subscribe(abort), config.signal && (config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort)));
    let fullPath = buildFullPath(config.baseURL, config.url), parsed = new URL(fullPath, "http://localhost"), protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === "data:") {
      let convertedData;
      if (method !== "GET")
        return settle(resolve, reject, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config
        });
      try {
        convertedData = fromDataURI(config.url, responseType === "blob", {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config);
      }
      return responseType === "text" ? (convertedData = convertedData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (convertedData = utils_default.stripBOM(convertedData))) : responseType === "stream" && (convertedData = import_stream5.default.Readable.from(convertedData)), settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: "OK",
        headers: new AxiosHeaders_default(),
        config
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1)
      return reject(new AxiosError_default(
        "Unsupported protocol " + protocol,
        AxiosError_default.ERR_BAD_REQUEST,
        config
      ));
    let headers = AxiosHeaders_default.from(config.headers).normalize();
    headers.set("User-Agent", "axios/" + VERSION, !1);
    let onDownloadProgress = config.onDownloadProgress, onUploadProgress = config.onUploadProgress, maxRate = config.maxRate, maxUploadRate, maxDownloadRate;
    if (utils_default.isSpecCompliantForm(data)) {
      let userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
      data = formDataToStream_default(data, (formHeaders) => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || void 0
      });
    } else if (utils_default.isFormData(data) && utils_default.isFunction(data.getHeaders)) {
      if (headers.set(data.getHeaders()), !headers.hasContentLength())
        try {
          let knownLength = await import_util2.default.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
        } catch {
        }
    } else if (utils_default.isBlob(data))
      data.size && headers.setContentType(data.type || "application/octet-stream"), headers.setContentLength(data.size || 0), data = import_stream5.default.Readable.from(readBlob_default(data));
    else if (data && !utils_default.isStream(data)) {
      if (!Buffer.isBuffer(data))
        if (utils_default.isArrayBuffer(data))
          data = Buffer.from(new Uint8Array(data));
        else if (utils_default.isString(data))
          data = Buffer.from(data, "utf-8");
        else
          return reject(new AxiosError_default(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            AxiosError_default.ERR_BAD_REQUEST,
            config
          ));
      if (headers.setContentLength(data.length, !1), config.maxBodyLength > -1 && data.length > config.maxBodyLength)
        return reject(new AxiosError_default(
          "Request body larger than maxBodyLength limit",
          AxiosError_default.ERR_BAD_REQUEST,
          config
        ));
    }
    let contentLength = utils_default.toFiniteNumber(headers.getContentLength());
    utils_default.isArray(maxRate) ? (maxUploadRate = maxRate[0], maxDownloadRate = maxRate[1]) : maxUploadRate = maxDownloadRate = maxRate, data && (onUploadProgress || maxUploadRate) && (utils_default.isStream(data) || (data = import_stream5.default.Readable.from(data, { objectMode: !1 })), data = import_stream5.default.pipeline([data, new AxiosTransformStream_default({
      length: contentLength,
      maxRate: utils_default.toFiniteNumber(maxUploadRate)
    })], utils_default.noop), onUploadProgress && data.on("progress", (progress) => {
      onUploadProgress(Object.assign(progress, {
        upload: !0
      }));
    }));
    let auth;
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password || "";
      auth = username + ":" + password;
    }
    if (!auth && parsed.username) {
      let urlUsername = parsed.username, urlPassword = parsed.password;
      auth = urlUsername + ":" + urlPassword;
    }
    auth && headers.delete("authorization");
    let path;
    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config.params,
        config.paramsSerializer
      ).replace(/^\?/, "");
    } catch (err) {
      let customErr = new Error(err.message);
      return customErr.config = config, customErr.url = config.url, customErr.exists = !0, reject(customErr);
    }
    headers.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""),
      !1
    );
    let options = {
      path,
      method,
      headers: headers.toJSON(),
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth,
      protocol,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };
    config.socketPath ? options.socketPath = config.socketPath : (options.hostname = parsed.hostname, options.port = parsed.port, setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path));
    let transport, isHttpsRequest = isHttps.test(options.protocol);
    if (options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent, config.transport ? transport = config.transport : config.maxRedirects === 0 ? transport = isHttpsRequest ? import_https.default : import_http.default : (config.maxRedirects && (options.maxRedirects = config.maxRedirects), config.beforeRedirect && (options.beforeRedirects.config = config.beforeRedirect), transport = isHttpsRequest ? httpsFollow : httpFollow), config.maxBodyLength > -1 ? options.maxBodyLength = config.maxBodyLength : options.maxBodyLength = 1 / 0, config.insecureHTTPParser && (options.insecureHTTPParser = config.insecureHTTPParser), req = transport.request(options, function(res) {
      if (req.destroyed)
        return;
      let streams = [res], responseLength = +res.headers["content-length"];
      if (onDownloadProgress) {
        let transformStream = new AxiosTransformStream_default({
          length: utils_default.toFiniteNumber(responseLength),
          maxRate: utils_default.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on("progress", (progress) => {
          onDownloadProgress(Object.assign(progress, {
            download: !0
          }));
        }), streams.push(transformStream);
      }
      let responseStream = res, lastRequest = res.req || req;
      if (config.decompress !== !1 && res.headers["content-encoding"])
        switch ((method === "HEAD" || res.statusCode === 204) && delete res.headers["content-encoding"], res.headers["content-encoding"]) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "deflate":
            streams.push(new ZlibHeaderTransformStream_default()), streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "br":
            isBrotliSupported && (streams.push(import_zlib.default.createBrotliDecompress(brotliOptions)), delete res.headers["content-encoding"]);
        }
      responseStream = streams.length > 1 ? import_stream5.default.pipeline(streams, utils_default.noop) : streams[0];
      let offListeners = import_stream5.default.finished(responseStream, () => {
        offListeners(), onFinished();
      }), response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders_default(res.headers),
        config,
        request: lastRequest
      };
      if (responseType === "stream")
        response.data = responseStream, settle(resolve, reject, response);
      else {
        let responseBuffer = [], totalResponseBytes = 0;
        responseStream.on("data", function(chunk) {
          responseBuffer.push(chunk), totalResponseBytes += chunk.length, config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength && (rejected = !0, responseStream.destroy(), reject(new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          )));
        }), responseStream.on("aborted", function() {
          if (rejected)
            return;
          let err = new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          );
          responseStream.destroy(err), reject(err);
        }), responseStream.on("error", function(err) {
          req.destroyed || reject(AxiosError_default.from(err, null, config, lastRequest));
        }), responseStream.on("end", function() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            responseType !== "arraybuffer" && (responseData = responseData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (responseData = utils_default.stripBOM(responseData))), response.data = responseData;
          } catch (err) {
            reject(AxiosError_default.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      emitter.once("abort", (err) => {
        responseStream.destroyed || (responseStream.emit("error", err), responseStream.destroy());
      });
    }), emitter.once("abort", (err) => {
      reject(err), req.destroy(err);
    }), req.on("error", function(err) {
      reject(AxiosError_default.from(err, null, config, req));
    }), req.on("socket", function(socket) {
      socket.setKeepAlive(!0, 1e3 * 60);
    }), config.timeout) {
      let timeout = parseInt(config.timeout, 10);
      if (isNaN(timeout)) {
        reject(new AxiosError_default(
          "error trying to parse `config.timeout` to int",
          AxiosError_default.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));
        return;
      }
      req.setTimeout(timeout, function() {
        if (isDone)
          return;
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
        config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          req
        )), abort();
      });
    }
    if (utils_default.isStream(data)) {
      let ended = !1, errored = !1;
      data.on("end", () => {
        ended = !0;
      }), data.once("error", (err) => {
        errored = !0, req.destroy(err);
      }), data.on("close", () => {
        !ended && !errored && abort(new CanceledError_default("Request stream has been aborted", config, req));
      }), data.pipe(req);
    } else
      req.end(data);
  });
};

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = node_default.isStandardBrowserEnv ? function() {
  return {
    write: function(name, value, expires, path, domain, secure) {
      let cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value)), utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString()), utils_default.isString(path) && cookie.push("path=" + path), utils_default.isString(domain) && cookie.push("domain=" + domain), secure === !0 && cookie.push("secure"), document.cookie = cookie.join("; ");
    },
    read: function(name) {
      let match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}();

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = node_default.isStandardBrowserEnv ? function() {
  let msie = /(msie|trident)/i.test(navigator.userAgent), urlParsingNode = document.createElement("a"), originURL;
  function resolveURL(url2) {
    let href = url2;
    return msie && (urlParsingNode.setAttribute("href", href), href = urlParsingNode.href), urlParsingNode.setAttribute("href", href), {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  return originURL = resolveURL(window.location.href), function(requestURL) {
    let parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();

// node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0, _speedometer = speedometer_default(50, 250);
  return (e) => {
    let loaded = e.loaded, total = e.lengthComputable ? e.total : void 0, progressBytes = loaded - bytesNotified, rate = _speedometer(progressBytes), inRange = loaded <= total;
    bytesNotified = loaded;
    let data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate || void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = !0, listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest < "u", xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function(resolve, reject) {
    let requestData = config.data, requestHeaders = AxiosHeaders_default.from(config.headers).normalize(), responseType = config.responseType, onCanceled;
    function done() {
      config.cancelToken && config.cancelToken.unsubscribe(onCanceled), config.signal && config.signal.removeEventListener("abort", onCanceled);
    }
    utils_default.isFormData(requestData) && (node_default.isStandardBrowserEnv || node_default.isStandardBrowserWebWorkerEnv) && requestHeaders.setContentType(!1);
    let request2 = new XMLHttpRequest();
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    let fullPath = buildFullPath(config.baseURL, config.url);
    request2.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), !0), request2.timeout = config.timeout;
    function onloadend() {
      if (!request2)
        return;
      let responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request2 && request2.getAllResponseHeaders()
      ), response = {
        data: !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config,
        request: request2
      };
      settle(function(value) {
        resolve(value), done();
      }, function(err) {
        reject(err), done();
      }, response), request2 = null;
    }
    if ("onloadend" in request2 ? request2.onloadend = onloadend : request2.onreadystatechange = function() {
      !request2 || request2.readyState !== 4 || request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0) || setTimeout(onloadend);
    }, request2.onabort = function() {
      !request2 || (reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request2)), request2 = null);
    }, request2.onerror = function() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request2)), request2 = null;
    }, request2.ontimeout = function() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
      config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request2
      )), request2 = null;
    }, node_default.isStandardBrowserEnv) {
      let xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
      xsrfValue && requestHeaders.set(config.xsrfHeaderName, xsrfValue);
    }
    requestData === void 0 && requestHeaders.setContentType(null), "setRequestHeader" in request2 && utils_default.forEach(requestHeaders.toJSON(), function(val, key) {
      request2.setRequestHeader(key, val);
    }), utils_default.isUndefined(config.withCredentials) || (request2.withCredentials = !!config.withCredentials), responseType && responseType !== "json" && (request2.responseType = config.responseType), typeof config.onDownloadProgress == "function" && request2.addEventListener("progress", progressEventReducer(config.onDownloadProgress, !0)), typeof config.onUploadProgress == "function" && request2.upload && request2.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress)), (config.cancelToken || config.signal) && (onCanceled = (cancel) => {
      !request2 || (reject(!cancel || cancel.type ? new CanceledError_default(null, config, request2) : cancel), request2.abort(), request2 = null);
    }, config.cancelToken && config.cancelToken.subscribe(onCanceled), config.signal && (config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled)));
    let protocol = parseProtocol(fullPath);
    if (protocol && node_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request2.send(requestData || null);
  });
};

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: http_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    let { length } = adapters, nameOrAdapter, adapter;
    for (let i = 0; i < length && (nameOrAdapter = adapters[i], !(adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)); i++)
      ;
    if (!adapter)
      throw adapter === !1 ? new AxiosError_default(
        `Adapter ${nameOrAdapter} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
      );
    if (!utils_default.isFunction(adapter))
      throw new TypeError("adapter is not a function");
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken && config.cancelToken.throwIfRequested(), config.signal && config.signal.aborted)
    throw new CanceledError_default(null, config);
}
function dispatchRequest(config) {
  return throwIfCancellationRequested(config), config.headers = AxiosHeaders_default.from(config.headers), config.data = transformData.call(
    config,
    config.transformRequest
  ), ["post", "put", "patch"].indexOf(config.method) !== -1 && config.headers.setContentType("application/x-www-form-urlencoded", !1), adapters_default.getAdapter(config.adapter || defaults_default.adapter)(config).then(function(response) {
    return throwIfCancellationRequested(config), response.data = transformData.call(
      config,
      config.transformResponse,
      response
    ), response.headers = AxiosHeaders_default.from(response.headers), response;
  }, function(reason) {
    return isCancel(reason) || (throwIfCancellationRequested(config), reason && reason.response && (reason.response.data = transformData.call(
      config,
      config.transformResponse,
      reason.response
    ), reason.response.headers = AxiosHeaders_default.from(reason.response.headers))), Promise.reject(reason);
  });
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  let config = {};
  function getMergedValue(target, source, caseless) {
    return utils_default.isPlainObject(target) && utils_default.isPlainObject(source) ? utils_default.merge.call({ caseless }, target, source) : utils_default.isPlainObject(source) ? utils_default.merge({}, source) : utils_default.isArray(source) ? source.slice() : source;
  }
  function mergeDeepProperties(a2, b, caseless) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a2))
        return getMergedValue(void 0, a2, caseless);
    } else
      return getMergedValue(a2, b, caseless);
  }
  function valueFromConfig2(a2, b) {
    if (!utils_default.isUndefined(b))
      return getMergedValue(void 0, b);
  }
  function defaultToConfig2(a2, b) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a2))
        return getMergedValue(void 0, a2);
    } else
      return getMergedValue(void 0, b);
  }
  function mergeDirectKeys(a2, b, prop) {
    if (prop in config2)
      return getMergedValue(a2, b);
    if (prop in config1)
      return getMergedValue(void 0, a2);
  }
  let mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a2, b) => mergeDeepProperties(headersToObject(a2), headersToObject(b), !0)
  };
  return utils_default.forEach(Object.keys(config1).concat(Object.keys(config2)), function(prop) {
    let merge2 = mergeMap[prop] || mergeDeepProperties, configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  }), config;
}

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === !1)
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    return version && !deprecatedWarnings[opt] && (deprecatedWarnings[opt] = !0, console.warn(
      formatMessage(
        opt,
        " has been deprecated since v" + version + " and will be removed in the near future"
      )
    )), validator ? validator(value, opt, opts) : !0;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options != "object")
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  let keys = Object.keys(options), i = keys.length;
  for (; i-- > 0; ) {
    let opt = keys[i], validator = schema[opt];
    if (validator) {
      let value = options[opt], result = value === void 0 || validator(value, opt, options);
      if (result !== !0)
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (allowUnknown !== !0)
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators, Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig, this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  request(configOrUrl, config) {
    typeof configOrUrl == "string" ? (config = config || {}, config.url = configOrUrl) : config = configOrUrl || {}, config = mergeConfig(this.defaults, config);
    let { transitional: transitional2, paramsSerializer, headers } = config;
    transitional2 !== void 0 && validator_default.assertOptions(transitional2, {
      silentJSONParsing: validators2.transitional(validators2.boolean),
      forcedJSONParsing: validators2.transitional(validators2.boolean),
      clarifyTimeoutError: validators2.transitional(validators2.boolean)
    }, !1), paramsSerializer !== void 0 && validator_default.assertOptions(paramsSerializer, {
      encode: validators2.function,
      serialize: validators2.function
    }, !0), config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders;
    contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    ), contextHeaders && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    ), config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    let requestInterceptorChain = [], synchronousRequestInterceptors = !0;
    this.interceptors.request.forEach(function(interceptor) {
      typeof interceptor.runWhen == "function" && interceptor.runWhen(config) === !1 || (synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous, requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected));
    });
    let responseInterceptorChain = [];
    this.interceptors.response.forEach(function(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise, i = 0, len;
    if (!synchronousRequestInterceptors) {
      let chain = [dispatchRequest.bind(this), void 0];
      for (chain.unshift.apply(chain, requestInterceptorChain), chain.push.apply(chain, responseInterceptorChain), len = chain.length, promise = Promise.resolve(config); i < len; )
        promise = promise.then(chain[i++], chain[i++]);
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    for (i = 0; i < len; ) {
      let onFulfilled = requestInterceptorChain[i++], onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    for (i = 0, len = responseInterceptorChain.length; i < len; )
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    let fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function(method) {
  Axios.prototype[method] = function(url2, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  function generateHTTPMethod(isForm) {
    return function(url2, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod(), Axios.prototype[method + "Form"] = generateHTTPMethod(!0);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class {
  constructor(executor) {
    if (typeof executor != "function")
      throw new TypeError("executor must be a function.");
    let resolvePromise;
    this.promise = new Promise(function(resolve) {
      resolvePromise = resolve;
    });
    let token2 = this;
    this.promise.then((cancel) => {
      if (!token2._listeners)
        return;
      let i = token2._listeners.length;
      for (; i-- > 0; )
        token2._listeners[i](cancel);
      token2._listeners = null;
    }), this.promise.then = (onfulfilled) => {
      let _resolve, promise = new Promise((resolve) => {
        token2.subscribe(resolve), _resolve = resolve;
      }).then(onfulfilled);
      return promise.cancel = function() {
        token2.unsubscribe(_resolve);
      }, promise;
    }, executor(function(message, config, request2) {
      token2.reason || (token2.reason = new CanceledError_default(message, config, request2), resolvePromise(token2.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(listener) : this._listeners = [listener];
  }
  unsubscribe(listener) {
    if (!this._listeners)
      return;
    let index = this._listeners.indexOf(listener);
    index !== -1 && this._listeners.splice(index, 1);
  }
  static source() {
    let cancel;
    return {
      token: new CancelToken(function(c) {
        cancel = c;
      }),
      cancel
    };
  }
}, CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === !0;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  let context = new Axios_default(defaultConfig), instance = bind(Axios_default.prototype.request, context);
  return utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: !0 }), utils_default.extend(instance, context, null, { allOwnKeys: !0 }), instance.create = function(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  }, instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  mergeConfig: mergeConfig2
} = axios_default;

// app/services/external-api.service.server.ts
var import_dotenv2 = __toESM(require("dotenv"));
import_dotenv2.default.config();
var token = null;
axios_default.defaults.baseURL = process.env.BACKEND_SERVER_URL || "http://127.0.0.1:8080";
axios_default.interceptors.request.use((config) => (token && (config.headers.Authorization = `Bearer ${token}`), config));
axios_default.interceptors.response.use(
  (res) => res,
  (error) => {
    let { data, status } = error.response;
    switch (status) {
      case 400:
        console.error(data);
        break;
      case 401:
        console.error("unauthorised");
        break;
      case 404:
        console.error("/not-found");
        break;
      case 500:
        console.error("/server-error");
        break;
    }
    return Promise.reject(error);
  }
);
var responseBody = (response) => response.data, request = {
  get: (url2, token2) => axios_default.get(url2, { headers: token2 ? { Clerk: `${token2}` } : {} }).then(responseBody),
  post: (url2, body, token2) => axios_default.post(url2, body, { headers: token2 ? { Clerk: `${token2}` } : {} }).then(responseBody),
  delete: (url2, token2) => axios_default.delete(url2, {
    headers: token2 ? { Clerk: `${token2}` } : {}
  }).then(responseBody)
}, backend = {
  home: () => request.get("/", null)
};

// app/services/accounts.server.ts
var accounts = {
  get_user_accounts: async (userId) => request.get("/api/core/accounts", userId)
}, makeAccountFromJson = async (data) => {
  let accounts2 = [];
  return data.forEach((item) => {
    item.type === "credit" && accounts2.push({
      accountId: item.plaid_account_id,
      userId: item.user_id,
      name: item.official_name,
      balance: item.current_balance
    });
  }), accounts2;
};

// app/services/kpi.server.ts
var kpis = {
  get_user_kpis: async (userId) => request.get("/api/core/kpi", userId)
};

// app/utils/helpers.ts
var toUSD = (value, digits = 2) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: digits
}).format(value), month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], getMonth = (val) => month[val];
var valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;
function formatAsPercentage(num) {
  return new Intl.NumberFormat("us", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num / 100);
}
function cleanDate(date) {
  if (!date)
    return "";
  let clean_date;
  typeof date == "string" ? clean_date = new Date(Date.parse(date)) : clean_date = date, typeof date == "string" && (clean_date = new Date(Date.parse(date)));
  let month2 = getMonth(clean_date.getUTCMonth()), day = clean_date.getUTCDate(), year = clean_date.getUTCFullYear();
  return `${month2} ${day}, ${year}`;
}
var AccountIDToName = (data) => {
  let accIDToName = /* @__PURE__ */ new Map();
  return !data || data.length === 0 || data.forEach((item) => {
    accIDToName.set(item.id, item.official_name);
  }), accIDToName;
};

// app/services/waterfall.ts
var waterfall = {
  get_user_waterfall: async (userId) => request.get("/api/planning/waterfall", userId)
}, toSlimWaterfall = (data) => {
  let nameParts = data.name.split(" "), newName = data.name;
  return nameParts.length > 1 && (newName = nameParts.slice(0, 2).join(" ")), {
    planName: newName,
    planId: data.acc_id,
    data: data.data
  };
}, fill_data = (waterfallPlans) => {
  let data = [...Array(12).keys()].map((mon) => ({
    Month: getMonth(mon)
  }));
  for (let sw of waterfallPlans)
    sw.data.forEach((num, i) => {
      let newData = { [sw.planName]: num };
      data[i] = { ...data[i], ...newData };
    });
  return data;
}, getNames = (waterfallPlans) => {
  let names = [];
  for (let sw of waterfallPlans)
    names.push(sw.planName);
  return names;
}, makeWaterfallFromJson = (input) => {
  if (!input.data || input.data.length === 0)
    return { waterfallData: [], names: [] };
  let waterfallPlans = [];
  input.data.map((item) => waterfallPlans.push(toSlimWaterfall(item)));
  let wp = waterfallPlans.sort(
    (a2, b) => sumOfAmount(b) - sumOfAmount(a2)
  );
  return { waterfallData: fill_data(wp), names: getNames(wp) };
};
function sumOfAmount(obj) {
  return obj.data.reduce((a2, b) => a2 + b, 0);
}

// app/services/transactions.server.ts
var transactions = {
  get_user_transactions: async (userId) => request.get("/api/core/transactions", userId)
}, pruneTransactions = async (trxns) => {
  let data = [];
  return trxns && trxns.forEach((item) => {
    item.amount > 0 && data.push({
      transactionId: item.plaid_transaction_id,
      name: item.name,
      amount: toUSD(item.amount),
      value: item.amount,
      date: new Date(item.date),
      id: item.plaid_transaction_id,
      accountId: item.plaid_account_id,
      userId: item.user_id
    });
  }), data;
};

// app/utils/types.server.ts
var DefaultDict = class {
  constructor(defaultInit) {
    return new Proxy(
      {},
      {
        get: (target, name) => name in target ? target[name] : target[name] = typeof defaultInit == "function" ? new defaultInit().valueOf() : defaultInit
      }
    );
  }
};

// app/utils/json_converter_helpers.ts
function invalidValue(typ, val, key, parent = "") {
  let prettyTyp = prettyTypeName(typ), parentText = parent ? ` on ${parent}` : "", keyText = key ? ` for key "${key}"` : "";
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
      val
    )}`
  );
}
function prettyTypeName(typ) {
  return Array.isArray(typ) ? typ.length === 2 && typ[0] === void 0 ? `an optional ${prettyTypeName(typ[1])}` : `one of [${typ.map((a2) => prettyTypeName(a2)).join(", ")}]` : typeof typ == "object" && typ.literal !== void 0 ? typ.literal : typeof typ;
}
function jsonToJSProps(typ) {
  if (typ.jsonToJS === void 0) {
    let map = {};
    typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ }), typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}
function jsToJSONProps(typ) {
  if (typ.jsToJSON === void 0) {
    let map = {};
    typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ }), typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}
function transform(val, typ, getProps, typeMap3, key = "", parent = "") {
  function transformPrimitive(typ2, val2) {
    return typeof typ2 == typeof val2 ? val2 : invalidValue(typ2, val2, key, parent);
  }
  function transformUnion(typs, val2) {
    let l2 = typs.length;
    for (let i = 0; i < l2; i++) {
      let typ2 = typs[i];
      try {
        return transform(val2, typ2, getProps, typeMap3);
      } catch {
      }
    }
    return invalidValue(typs, val2, key, parent);
  }
  function transformEnum(cases, val2) {
    return cases.indexOf(val2) !== -1 ? val2 : invalidValue(
      cases.map((a2) => l(a2)),
      val2,
      key,
      parent
    );
  }
  function transformArray(typ2, val2) {
    return Array.isArray(val2) ? val2.map((el) => transform(el, typ2, getProps, typeMap3)) : invalidValue(l("array"), val2, key, parent);
  }
  function transformDate(val2) {
    if (val2 === null)
      return null;
    let d = new Date(val2);
    return isNaN(d.valueOf()) ? invalidValue(l("Date"), val2, key, parent) : d;
  }
  function transformObject(props, additional, val2) {
    if (val2 === null || typeof val2 != "object" || Array.isArray(val2))
      return invalidValue(l(ref || "object"), val2, key, parent);
    let result = {};
    return Object.getOwnPropertyNames(props).forEach((key2) => {
      let prop = props[key2], v = Object.prototype.hasOwnProperty.call(val2, key2) ? val2[key2] : void 0;
      result[prop.key] = transform(v, prop.typ, getProps, typeMap3, key2, ref);
    }), Object.getOwnPropertyNames(val2).forEach((key2) => {
      Object.prototype.hasOwnProperty.call(props, key2) || (result[key2] = transform(
        val2[key2],
        additional,
        getProps,
        typeMap3,
        key2,
        ref
      ));
    }), result;
  }
  if (typ === "any")
    return val;
  if (typ === null)
    return val === null ? val : invalidValue(typ, val, key, parent);
  if (typ === !1)
    return invalidValue(typ, val, key, parent);
  let ref;
  for (; typeof typ == "object" && typ.ref !== void 0; )
    ref = typ.ref, typ = typeMap3[typ.ref];
  return Array.isArray(typ) ? transformEnum(typ, val) : typeof typ == "object" ? typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val) : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val) : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val) : invalidValue(typ, val, key, parent) : typ === Date && typeof val != "number" ? transformDate(val) : transformPrimitive(typ, val);
}
function cast(val, typ, typeMap3) {
  return transform(val, typ, jsonToJSProps, typeMap3);
}
function uncast(val, typ, typeMap3) {
  return transform(val, typ, jsToJSONProps, typeMap3);
}
function l(typ) {
  return { literal: typ };
}
function a(typ) {
  return { arrayItems: typ };
}
function u(...typs) {
  return { unionMembers: typs };
}
function o(props, additional) {
  return { props, additional };
}
function r(name) {
  return { ref: name };
}

// app/utils/paymentplan_request_converter.server.ts
var PaymentPlanConvert = class {
  static toPaymentPlanRequest(json3) {
    return cast(JSON.parse(json3), r("PaymentPlanRequest"), typeMap);
  }
  static paymentPlanRequestToJson(value) {
    return JSON.stringify(
      uncast(value, r("PaymentPlanRequest"), typeMap),
      null,
      2
    );
  }
}, typeMap = {
  PaymentPlanRequest: o(
    [
      { json: "account_info", js: "account_info", typ: a(r("AccountInfo")) },
      { json: "meta_data", js: "meta_data", typ: r("MetaData") },
      { json: "save_plan", js: "save_plan", typ: !0 }
    ],
    !1
  ),
  AccountInfo: o(
    [
      { json: "transaction_ids", js: "transaction_ids", typ: a("") },
      { json: "account_id", js: "account_id", typ: "" },
      { json: "amount", js: "amount", typ: 3.14 }
    ],
    !1
  ),
  MetaData: o(
    [
      { json: "preferred_plan_type", js: "preferred_plan_type", typ: 0 },
      {
        json: "preferred_timeline_in_months",
        js: "preferred_timeline_in_months",
        typ: 0
      },
      { json: "preferred_payment_freq", js: "preferred_payment_freq", typ: 0 }
    ],
    !1
  )
};

// app/utils/accept_paymentplan_request_converter.server.ts
var AcceptPaymentPlanConvert = class {
  static toAcceptPaymentPlanRequest(json3) {
    return cast(JSON.parse(json3), r("AcceptPaymentPlanRequest"), typeMap2);
  }
  static acceptPaymentPlanRequestToJson(value) {
    return JSON.stringify(
      uncast(value, r("AcceptPaymentPlanRequest"), typeMap2),
      null,
      2
    );
  }
}, typeMap2 = {
  AcceptPaymentPlanRequest: o(
    [
      { json: "payment_plan", js: "payment_plan", typ: r("PaymentPlan") },
      { json: "save_plan", js: "save_plan", typ: !0 }
    ],
    !1
  ),
  PaymentAction: o(
    [
      { json: "id", js: "id", typ: "" },
      { json: "account_id", js: "account_id", typ: "" },
      { json: "amount", js: "amount", typ: 3.14 },
      { json: "transaction_date", js: "transaction_date", typ: "" },
      { json: "status", js: "status", typ: 0 }
    ],
    !1
  ),
  PaymentPlan: o(
    [
      { json: "id", js: "id", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "payment_plan_id", js: "payment_plan_id", typ: u("", void 0) },
      { json: "user_id", js: "user_id", typ: "" },
      {
        json: "payment_task_id",
        js: "payment_task_id",
        typ: a("")
      },
      {
        json: "amount",
        js: "amount",
        typ: 3.14
      },
      {
        json: "timeline",
        js: "timeline",
        typ: 0
      },
      {
        json: "payment_freq",
        js: "payment_freq",
        typ: 0
      },
      {
        json: "amount_per_payment",
        js: "amount_per_payment",
        typ: 3.14
      },
      {
        json: "plan_type",
        js: "plan_type",
        typ: 0
      },
      {
        json: "end_date",
        js: "end_date",
        typ: ""
      },
      {
        json: "active",
        js: "active",
        typ: !0
      },
      {
        json: "status",
        js: "status",
        typ: 0
      },
      {
        json: "payment_action",
        js: "payment_action",
        typ: a(r("PaymentAction"))
      },
      {
        json: "transactions",
        js: "transactions",
        typ: u(a(""), void 0)
      }
    ],
    !1
  )
};

// app/services/paymentplan.server.ts
var paymentplan = {
  get_transactions_by_account: async (userId) => {
    let accounts2 = await request.get(
      "/api/core/accounts",
      userId
    ), transactions2 = await request.get("/api/core/transactions", userId), slimAccounts = await makeAccountFromJson(
      accounts2.data
    ), transactionDict = await makeTransactionsFromJson(
      transactions2.data
    );
    return { slimAccounts, transactionDict };
  },
  submit_payment_plan: async (json3, userId) => {
    let paymentPlanRequest = PaymentPlanConvert.toPaymentPlanRequest(json3);
    return paymentPlanRequest.save_plan = !1, paymentPlanRequest.account_info = paymentPlanRequest.account_info.filter(
      (account) => account.amount > 0
    ), await request.post(
      "/api/core/paymentplan",
      paymentPlanRequest,
      userId
    );
  },
  accept_payment_plan: async (json3, userId) => {
    let acceptPaymentPlanRequest = AcceptPaymentPlanConvert.toAcceptPaymentPlanRequest(json3);
    return acceptPaymentPlanRequest.save_plan = !1, await request.post(
      "/api/planning/accept",
      acceptPaymentPlanRequest,
      userId
    );
  },
  delete_payment_plan: async (paymentPlanId, transactionIds, userId) => {
    let b = { transaction_ids: transactionIds ? transactionIds.split(",") : [] };
    return await request.post(
      `/api/core/paymentplan/delete/${paymentPlanId}`,
      b,
      userId
    );
  },
  get_user_payment_plans: async (userId) => await request.get(
    "/api/core/paymentplan",
    userId
  )
}, makeTransactionsFromJson = async (trxns) => {
  let transactionsDict = new DefaultDict(Array);
  return trxns.forEach((item) => {
    if (item.amount > 0 && !item.in_plan) {
      let trxn = {
        id: item.plaid_transaction_id,
        accountId: item.plaid_account_id,
        userId: item.user_id,
        name: item.name,
        amount: toUSD(item.amount),
        value: item.amount,
        date: new Date(item.date),
        transactionId: item.plaid_transaction_id
      };
      transactionsDict[item.plaid_account_id].push(trxn);
    }
  }), transactionsDict;
};

// app/services/plaid.server.ts
var import_dotenv3 = __toESM(require("dotenv"));
import_dotenv3.default.config();
var plaid = {
  is_plaid_linked: async (userId) => await request.get(
    "/api/plaid/linked",
    userId
  ),
  fetchAndCache: async (userId) => await request.get(
    "/api/plaid/accounts",
    userId
  )
}, get_plaid_url = () => process.env.PLAID_FRONTEND_URL;

// app/services/api.server.ts
var api = {
  backend,
  accounts,
  kpis,
  waterfall,
  transactions,
  paymentplan,
  plaid
}, api_server_default = api;

// app/components/waterfall.tsx
var import_react16 = require("@tremor/react"), import_react17 = require("@remix-run/react");

// app/components/missing_data.tsx
var import_react15 = require("@tremor/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), MissingData = ({ text }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react15.Card, { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react15.Text, { className: "text-center", children: text }, void 0, !1, {
  fileName: "app/components/missing_data.tsx",
  lineNumber: 10,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/missing_data.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this);

// app/components/waterfall.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Waterfall = ({ waterfall: waterfall2, ready }) => {
  let navigate = (0, import_react17.useNavigate)(), current_year = new Date().getUTCFullYear(), handleModal = () => {
    console.log("handleModal .. navigate"), navigate("paymentplan/create");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react16.Card, { className: "mt-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react16.Grid, { numCols: 2, className: "gap-x-6 gap-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react16.Col, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react16.Title, { children: "Payment Plan Waterfall" }, void 0, !1, {
          fileName: "app/components/waterfall.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react16.Text, { children: `Monthly payments due for each plan this year (${current_year})` }, void 0, !1, {
          fileName: "app/components/waterfall.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/waterfall.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react16.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col items-right md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
          fileName: "app/components/waterfall.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react16.Button, { onClick: handleModal, disabled: !ready, children: "PaymentPlan Creation" }, void 0, !1, {
          fileName: "app/components/waterfall.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/waterfall.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/waterfall.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/waterfall.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    waterfall2.waterfallData && waterfall2.waterfallData.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_react16.BarChart,
      {
        className: "mt-4 h-80",
        data: waterfall2.waterfallData,
        index: "Month",
        categories: waterfall2.names,
        colors: ["indigo", "fuchsia", "amber"],
        stack: !0,
        valueFormatter
      },
      void 0,
      !1,
      {
        fileName: "app/components/waterfall.tsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ),
    (!waterfall2.waterfallData || waterfall2.waterfallData.length === 0) && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      MissingData,
      {
        text: "You have no Payment Plans. " + (ready ? "Create " : "Link a credit card account and then create ") + "a Payment Plan to see more data here."
      },
      void 0,
      !1,
      {
        fileName: "app/components/waterfall.tsx",
        lineNumber: 50,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/waterfall.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// app/components/kpi_panel.tsx
var import_react18 = require("@tremor/react"), import_solid2 = require("@heroicons/react/24/solid");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), toCategories = (props) => {
  let d = {
    title: "Debit",
    metric: toUSD(props.debit, 0),
    icon: import_solid2.CurrencyDollarIcon
  }, c = {
    title: "Credit",
    metric: toUSD(props.credit, 0),
    icon: import_solid2.CreditCardIcon
  }, p = {
    title: "PaymentPlans",
    metric: toUSD(props.payment_plans, 0),
    icon: import_solid2.ChartBarIcon
  };
  return { credit: c, debit: d, plans: p };
}, KpiPanel = ({ kpis: kpis2 }) => {
  let categories = Object.values(toCategories(kpis2.data));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react18.Grid, { numColsSm: 2, numColsLg: 3, className: "gap-x-6 gap-y-6", children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react18.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react18.Icon, { icon: item.icon, variant: "light", size: "sm" }, void 0, !1, {
      fileName: "app/components/kpi_panel.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react18.Metric, { className: "text-center mt-2", children: item.metric }, void 0, !1, {
      fileName: "app/components/kpi_panel.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react18.Text, { className: "text-center", children: item.title }, void 0, !1, {
      fileName: "app/components/kpi_panel.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/kpi_panel.tsx",
    lineNumber: 52,
    columnNumber: 11
  }, this) }, item.title, !1, {
    fileName: "app/components/kpi_panel.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/kpi_panel.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
};

// app/routes/dashboard.tsx
var import_react24 = require("@tremor/react");

// app/components/transactions_table_with_pagination.tsx
var import_react19 = require("@tremor/react"), import_react20 = require("react"), import_Pagination = __toESM(require("@mui/material/Pagination")), import_Stack = __toESM(require("@mui/material/Stack"));
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), ITEMS_PER_PAGE = 10, Items = ({ transactions: transactions2, accIdToName }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableBody, { children: transactions2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableRow, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableCell, { children: accIdToName.get(item.accountId) }, void 0, !1, {
    fileName: "app/components/transactions_table_with_pagination.tsx",
    lineNumber: 36,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableCell, { className: "text-left", children: item.name }, void 0, !1, {
    fileName: "app/components/transactions_table_with_pagination.tsx",
    lineNumber: 37,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableCell, { className: "text-right", children: cleanDate(item.date) }, void 0, !1, {
    fileName: "app/components/transactions_table_with_pagination.tsx",
    lineNumber: 38,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableCell, { className: "text-right", children: item.amount }, void 0, !1, {
    fileName: "app/components/transactions_table_with_pagination.tsx",
    lineNumber: 39,
    columnNumber: 11
  }, this)
] }, item.transactionId, !0, {
  fileName: "app/components/transactions_table_with_pagination.tsx",
  lineNumber: 35,
  columnNumber: 9
}, this)) }, void 0, !1, {
  fileName: "app/components/transactions_table_with_pagination.tsx",
  lineNumber: 33,
  columnNumber: 5
}, this), TransactionsTableWithPagination = ({
  transactions: transactions2,
  accounts: accounts2
}) => {
  transactions2.sort((a2, b) => new Date(b.date).getTime() - new Date(a2.date).getTime());
  let [currentItems, setCurrentItems] = (0, import_react20.useState)([]), [pageCount, setPageCount] = (0, import_react20.useState)(0), [itemOffset, setItemOffset] = (0, import_react20.useState)(0), accIdToName = (0, import_react20.useMemo)(
    () => AccountIDToName(accounts2),
    [accounts2]
  );
  (0, import_react20.useEffect)(() => {
    let endOffset = itemOffset + ITEMS_PER_PAGE, currSelection = transactions2.slice(
      itemOffset,
      endOffset
    );
    setCurrentItems(currSelection), setPageCount(Math.ceil(transactions2.length / ITEMS_PER_PAGE));
  }, [itemOffset]);
  let handlePageClick = (event, page) => {
    let newOffset = (page - 1) * ITEMS_PER_PAGE;
    setItemOffset(newOffset);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Card, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Title, { children: "Recent Transactions" }, void 0, !1, {
      fileName: "app/components/transactions_table_with_pagination.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    (!transactions2 || transactions2.length === 0) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(MissingData, { text: "Link a Credit Card to see a list of your recent transactions here." }, void 0, !1, {
      fileName: "app/components/transactions_table_with_pagination.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    transactions2 && transactions2.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Table, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableHead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableRow, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableHeaderCell, { children: " Account " }, void 0, !1, {
          fileName: "app/components/transactions_table_with_pagination.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableHeaderCell, { children: " Name " }, void 0, !1, {
          fileName: "app/components/transactions_table_with_pagination.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableHeaderCell, { className: "text-right", children: " Date " }, void 0, !1, {
          fileName: "app/components/transactions_table_with_pagination.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.TableHeaderCell, { className: "text-right", children: " Amount " }, void 0, !1, {
          fileName: "app/components/transactions_table_with_pagination.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/transactions_table_with_pagination.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/transactions_table_with_pagination.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Items, { transactions: currentItems, accIdToName }, void 0, !1, {
        fileName: "app/components/transactions_table_with_pagination.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/transactions_table_with_pagination.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Divider, {}, void 0, !1, {
      fileName: "app/components/transactions_table_with_pagination.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_Stack.default, { spacing: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_Pagination.default,
      {
        count: pageCount,
        onChange: handlePageClick,
        variant: "outlined",
        shape: "rounded",
        color: "primary",
        style: {
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
          width: "100%",
          height: "100%"
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/transactions_table_with_pagination.tsx",
        lineNumber: 100,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/transactions_table_with_pagination.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/transactions_table_with_pagination.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
};

// app/routes/dashboard.tsx
var import_api2 = require("@clerk/remix/api.server"), import_react25 = __toESM(require("react"));

// app/components/onboarding.tsx
var import_react21 = require("react"), import_react22 = require("@tremor/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), Onboarding = ({ action: action3 }) => {
  let [steps, setStep] = (0, import_react21.useState)({
    stepsItems: ["Link A Credit Card", "Create A Payment Plan"],
    currentStep: 1
  });
  return (0, import_react21.useEffect)(() => {
    action3.includes("linked-credit") && setStep((prev) => ({ ...prev, currentStep: 2 })), action3.includes("payment-plan-created") && setStep((prev) => ({ ...prev, currentStep: 3 }));
  }, [action3]), action3.includes("complete") ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, {}, void 0, !1, {
    fileName: "app/components/onboarding.tsx",
    lineNumber: 28,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react22.Card, { className: "mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react22.Title, { className: "text-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react22.Bold, { children: "Follow the steps below to get started!" }, void 0, !1, {
      fileName: "app/components/onboarding.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/onboarding.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4 md:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "ul",
      {
        "aria-label": "Steps",
        className: "items-center text-gray-600 font-medium md:flex",
        children: steps.stepsItems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "li",
          {
            "aria-current": steps.currentStep == idx + 1 ? "step" : !1,
            className: "flex-1 last:flex-none flex gap-x-2 md:items-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center flex-col gap-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                  "div",
                  {
                    className: `w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${steps.currentStep > idx + 1 ? "bg-indigo-600 border-indigo-600" : steps.currentStep == idx + 1 ? "border-indigo-600" : ""}`,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                        "span",
                        {
                          className: ` ${steps.currentStep > idx + 1 ? "hidden" : steps.currentStep == idx + 1 ? "text-indigo-600" : ""}`,
                          children: idx + 1
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/onboarding.tsx",
                          lineNumber: 57,
                          columnNumber: 19
                        },
                        this
                      ),
                      steps.currentStep > idx + 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 1.5,
                          stroke: "currentColor",
                          className: "w-5 h-5 text-white",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M4.5 12.75l6 6 9-13.5"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/onboarding.tsx",
                              lineNumber: 77,
                              columnNumber: 23
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/onboarding.tsx",
                          lineNumber: 69,
                          columnNumber: 21
                        },
                        this
                      ) : ""
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/onboarding.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                  "hr",
                  {
                    className: `h-12 border md:hidden ${idx + 1 == steps.stepsItems.length ? "hidden" : steps.currentStep > idx + 1 ? "border-indigo-600" : ""}`
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/onboarding.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/onboarding.tsx",
                lineNumber: 47,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "h-8 flex items-center md:h-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                "h3",
                {
                  className: `text-sm ${steps.currentStep == idx + 1 ? "text-indigo-600" : ""}`,
                  children: item
                },
                void 0,
                !1,
                {
                  fileName: "app/components/onboarding.tsx",
                  lineNumber: 98,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/onboarding.tsx",
                lineNumber: 97,
                columnNumber: 15
              }, this),
              idx + 1 < steps.stepsItems.length && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                "hr",
                {
                  className: `hidden mr-2 w-full border md:block ${idx + 1 == steps.stepsItems.length ? "hidden" : steps.currentStep > idx + 1 ? "border-indigo-600" : ""}`
                },
                void 0,
                !1,
                {
                  fileName: "app/components/onboarding.tsx",
                  lineNumber: 107,
                  columnNumber: 17
                },
                this
              )
            ]
          },
          idx,
          !0,
          {
            fileName: "app/components/onboarding.tsx",
            lineNumber: 42,
            columnNumber: 13
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/onboarding.tsx",
        lineNumber: 37,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/onboarding.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/onboarding.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};

// app/routes/dashboard.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), getUserEmail = async (userId) => {
  let { emailAddresses } = await (0, import_api2.createClerkClient)({
    apiKey: process.env.CLERK_SECRET_KEY
  }).users.getUser(userId);
  if (!emailAddresses || emailAddresses.length === 0)
    throw new Error("No email address found for user");
  return emailAddresses[0].emailAddress;
}, getDashboardLoaderData = async (userId) => {
  let trxnResp = await api_server_default.transactions.get_user_transactions(userId);
  (!trxnResp.data || trxnResp.data.length === 0) && console.log(`User ${userId}, has no transactions`);
  let accounts2 = await api_server_default.accounts.get_user_accounts(userId), transactions2 = await pruneTransactions(trxnResp.data), kpis2 = await api_server_default.kpis.get_user_kpis(userId), resp = await api_server_default.waterfall.get_user_waterfall(
    userId
  ), waterfall2 = makeWaterfallFromJson(resp);
  return { kpis: kpis2, waterfall: waterfall2, transactions: transactions2, accounts: accounts2 };
}, loader2 = async (args) => {
  let { userId } = await (0, import_ssr2.getAuth)(args);
  if (!userId)
    return (0, import_node3.redirect)("/sign-in");
  let { kpis: kpis2, waterfall: waterfall2, transactions: transactions2, accounts: accounts2 } = await getDashboardLoaderData(userId), plaidLinked = await api_server_default.plaid.is_plaid_linked(userId), PLAID_FRONTEND_URL = get_plaid_url();
  return {
    kpis: kpis2,
    waterfall: waterfall2,
    transactions: transactions2,
    accounts: accounts2,
    plaidLinked,
    userId,
    PLAID_FRONTEND_URL
  };
}, Dashboard = () => {
  let {
    kpis: kpis2,
    waterfall: waterfall2,
    transactions: transactions2,
    accounts: accounts2,
    plaidLinked,
    userId,
    PLAID_FRONTEND_URL
  } = (0, import_react23.useLoaderData)(), [action3, setAction] = import_react25.default.useState([]);
  return (0, import_react25.useEffect)(() => {
    var _a;
    ((_a = kpis2 == null ? void 0 : kpis2.data) == null ? void 0 : _a.payment_plans) > 0 && setAction((prev) => [...prev, "payment-plan-created"]);
  }, [kpis2]), action3.includes("linked-credit") && action3.includes("payment-plan-created") && !action3.includes("complete") && setAction((prev) => [...prev, "complete"]), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Onboarding, { action: action3 }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    PlaidButtonsComponent(
      plaidLinked,
      userId,
      PLAID_FRONTEND_URL,
      setAction
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Waterfall, { waterfall: waterfall2, ready: transactions2.length > 0 }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(KpiPanel, { kpis: kpis2 }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      TransactionsTableWithPagination,
      {
        transactions: transactions2,
        accounts: accounts2.data
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 130,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "preContainer" }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react23.Outlet, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}, PlaidButtonsComponent = (plaidLinked, userId, PLAID_FRONTEND_URL, setAction) => {
  var _a, _b;
  (0, import_react25.useEffect)(() => {
    var _a2;
    (_a2 = plaidLinked == null ? void 0 : plaidLinked.data) != null && _a2.credit && setAction((prev) => [...prev, "linked-credit"]);
  }, [plaidLinked]);
  let handleOnClickDebit = () => {
    setAction((prev) => [...prev, "linked-debit"]), window.location.href = encodeURI(
      `${PLAID_FRONTEND_URL}/debit?uu=${userId}`
    );
  }, handleOnClickCredit = () => {
    setAction((prev) => [...prev, "linked-credit"]), window.location.href = encodeURI(
      `${PLAID_FRONTEND_URL}/credit?uu=${userId}`
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col md:flex-row pr-4 mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Flex, { className: "justify-center items-center space-x-6 truncate mt-0", children: [
      (_a = plaidLinked == null ? void 0 : plaidLinked.data) != null && _a.debit ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Card, { className: "p-0 max-w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Button, { size: "xs", onClick: handleOnClickDebit, children: "Link Debit account" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 171,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, this),
      (_b = plaidLinked == null ? void 0 : plaidLinked.data) != null && _b.credit ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Card, { className: "p-0 max-w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Button, { size: "xs", variant: "secondary", onClick: handleOnClickCredit, children: "Link Another Credit account" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 183,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Card, { className: "p-0 max-w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Button, { size: "xs", onClick: handleOnClickCredit, children: "Link Credit account" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 166,
    columnNumber: 5
  }, this);
}, dashboard_default = Dashboard;

// app/routes/dashboard.paymentplan.create.tsx
var dashboard_paymentplan_create_exports = {};
__export(dashboard_paymentplan_create_exports, {
  action: () => action,
  default: () => PaymentPlanCreation,
  loader: () => loader3
});

// app/components/portal.tsx
var import_react_dom = require("react-dom"), import_react26 = require("react"), createWrapper = (wrapperId) => {
  let wrapper = document.createElement("div");
  return wrapper.setAttribute("id", wrapperId), document.body.appendChild(wrapper), wrapper;
}, Portal = ({ children, wrapperId }) => {
  let [wrapper, setWrapper] = (0, import_react26.useState)(null);
  return (0, import_react26.useEffect)(() => {
    let element = document.getElementById(wrapperId), created = !1;
    return element || (created = !0, element = createWrapper(wrapperId)), setWrapper(element), () => {
      created && (element == null ? void 0 : element.parentNode) && element.parentNode.removeChild(element);
    };
  }, [wrapperId]), wrapper === null ? null : (0, import_react_dom.createPortal)(children, wrapper);
};

// app/components/modal.tsx
var import_react27 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), Modal = ({
  children,
  isOpen,
  ariaLabel,
  className,
  navigate_path
}) => {
  let navigate = (0, import_react27.useNavigate)();
  return isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Portal, { wrapperId: "modal", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "div",
      {
        className: "fixed inset-0 overflow-y-auto bg-gray-600 bg-opacity-80",
        "aria-labelledby": ariaLabel ?? "modal-title",
        role: "dialog",
        "aria-modal": "true",
        onClick: () => navigate(navigate_path)
      },
      void 0,
      !1,
      {
        fileName: "app/components/modal.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LoadingSpinner_default, {}, void 0, !1, {
      fileName: "app/components/modal.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    ";",
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "fixed inset-0 pointer-events-none flex justify-center items-center max-h-screen overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "div",
      {
        className: `${className} p-4 bg-gray-200 pointer-events-auto h-5/6 md:rounded-xl`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CloseButton, { navigate, navigate_path }, void 0, !1, {
            fileName: "app/components/modal.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this),
          children
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/modal.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/modal.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modal.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this) : null;
}, CloseButton = ({ navigate, navigate_path }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col items-right md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
    fileName: "app/components/modal.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "button",
    {
      type: "button",
      className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",
      "data-modal-hide": "popup-modal",
      onClick: () => navigate(navigate_path),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "svg",
          {
            "aria-hidden": "true",
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/modal.tsx",
                lineNumber: 70,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/modal.tsx",
            lineNumber: 63,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "sr-only", children: "Close modal" }, void 0, !1, {
          fileName: "app/components/modal.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/modal.tsx",
      lineNumber: 57,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/modal.tsx",
  lineNumber: 55,
  columnNumber: 5
}, this);

// app/routes/dashboard.paymentplan.create.tsx
var import_react34 = require("@tremor/react"), import_react35 = require("react"), import_react36 = require("@remix-run/react"), import_node4 = require("@remix-run/node"), import_ssr3 = require("@clerk/remix/ssr.server");

// app/components/paymentplan_preferences.tsx
var import_react29 = require("@tremor/react"), import_outline3 = require("@heroicons/react/24/outline"), import_react30 = require("react");

// app/utils/constants.ts
var import_outline2 = require("@heroicons/react/24/outline"), PlanType = /* @__PURE__ */ new Map([
  [1, "Optimize Credit Score"],
  [2, "Minimize Fees"]
]), PaymentFrequency = /* @__PURE__ */ new Map([
  [1, "Weekly"],
  [2, "Bi-Weekly"],
  [3, "Monthly"],
  [4, "Quarterly"]
]), TimelineMonths = /* @__PURE__ */ new Map([
  [3, "3 Months"],
  [6, "6 Months"],
  [12, "12 Months"],
  [24, "24 Months"]
]), ActionStatus = /* @__PURE__ */ new Map([
  [1, "Pending"],
  [2, "Completed"],
  [3, "Missed"]
]), PaymentPlanOptions = [
  {
    value: 0,
    text: "Select an Option",
    icon: null
  },
  {
    value: 1,
    text: "Select from most recent transactions",
    icon: import_outline2.CreditCardIcon
  },
  {
    value: 2,
    text: "Tell us the total amount for any account",
    icon: import_outline2.CurrencyDollarIcon
  }
];

// app/components/select-box.tsx
var import_react28 = require("@tremor/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function PreferenceDropdownItem({
  options = [],
  onChange = () => {
  },
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react28.Text, { children: label }, void 0, !1, {
      fileName: "app/components/select-box.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      import_react28.Dropdown,
      {
        onValueChange: onChange,
        className: "mt-1",
        placeholder: "Select an Option",
        value: value || 0,
        children: options.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          import_react28.DropdownItem,
          {
            value: `${item.value}`,
            text: item.text,
            icon: item.icon
          },
          i,
          !1,
          {
            fileName: "app/components/select-box.tsx",
            lineNumber: 27,
            columnNumber: 11
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/select-box.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/select-box.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/utils/store.ts
var import_zustand = require("zustand"), initialState = {
  timeline: 0,
  frequency: 0,
  planType: 0,
  amount: [],
  totalAmount: 0,
  accountInfo: []
}, usePaymentPlanCreationForm = (0, import_zustand.create)()(
  (set, get) => ({
    ...initialState,
    updateTimeline: (value) => set({ timeline: value }),
    updateFrequency: (value) => set({ frequency: value }),
    updatePlanType: (value) => set({ planType: value }),
    updateAmount: (amount, index) => {
      set((state) => {
        let newAmount = [...state.amount];
        return newAmount[index] = amount, { amount: newAmount };
      });
    },
    setTotalAmount: () => set((state) => ({
      totalAmount: state.amount.reduce((pv, cv) => pv + cv, 0)
    })),
    updateAccountInfo: (data, index) => {
      set((state) => {
        let newAccountInfo = [...state.accountInfo];
        return newAccountInfo[index] = data, { accountInfo: newAccountInfo };
      });
    },
    reset: () => {
      set(initialState);
    }
  })
);

// app/components/paymentplan_preferences.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function PaymentPlanPreferences() {
  let {
    timeline,
    frequency,
    planType,
    updateTimeline,
    updateFrequency,
    updatePlanType
  } = usePaymentPlanCreationForm((state) => state), firstLoad = (0, import_react30.useRef)(!0);
  (0, import_react30.useEffect)(() => {
    firstLoad.current = !1;
  }, []);
  let handleInputChange = (value, field) => {
    switch (field) {
      case "timeline":
        updateTimeline(value);
        break;
      case "frequency":
        updateFrequency(value);
        break;
      case "planType":
        updatePlanType(value);
        break;
    }
  }, toDropdownOption = (selection, icon) => {
    let data = [];
    for (let [key, value] of selection)
      data.push({
        value: key,
        text: value,
        icon
      });
    return data;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react29.Card, { className: "md:max-w-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      PreferenceDropdownItem,
      {
        label: "Payment Timeline (Months)",
        options: toDropdownOption(TimelineMonths, import_outline3.CalendarIcon),
        onChange: (e) => handleInputChange(e, "timeline"),
        value: timeline
      },
      void 0,
      !1,
      {
        fileName: "app/components/paymentplan_preferences.tsx",
        lineNumber: 58,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/paymentplan_preferences.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react29.Card, { className: "md:max-w-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      PreferenceDropdownItem,
      {
        label: "Payment Frequency",
        options: toDropdownOption(PaymentFrequency, import_outline3.CalendarDaysIcon),
        onChange: (e) => handleInputChange(e, "frequency"),
        value: frequency
      },
      void 0,
      !1,
      {
        fileName: "app/components/paymentplan_preferences.tsx",
        lineNumber: 66,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/paymentplan_preferences.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react29.Card, { className: "md:max-w-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      PreferenceDropdownItem,
      {
        label: "Payment Plan Type",
        options: toDropdownOption(PlanType, import_outline3.BanknotesIcon),
        onChange: (e) => handleInputChange(e, "planType"),
        value: planType
      },
      void 0,
      !1,
      {
        fileName: "app/components/paymentplan_preferences.tsx",
        lineNumber: 74,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/paymentplan_preferences.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/paymentplan_preferences.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/components/TrxnTableWithCheckbox/transactions_table_with_checkbox.tsx
var import_Paper = __toESM(require("@mui/material/Paper")), import_react31 = require("react"), import_material_react_table = __toESM(require("material-react-table"));
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), transactionIDToAmount = (trxns) => {
  let transactionsDict = /* @__PURE__ */ new Map();
  return trxns.forEach((item) => {
    transactionsDict.set(item.id, item.value);
  }), transactionsDict;
}, PaymentPlanTransactions = ({
  transactions: transactions2,
  idx,
  accountId
}) => {
  let [rowSelection, setRowSelection] = (0, import_react31.useState)({}), { updateAmount, setTotalAmount, updateAccountInfo } = usePaymentPlanCreationForm((state) => state), columns = (0, import_react31.useMemo)(
    () => [
      {
        header: "Name",
        accessorKey: "name"
      },
      {
        header: "Date",
        accessorKey: "date"
      },
      {
        header: "Amount",
        accessorKey: "amount"
      }
    ],
    []
  ), data = (0, import_react31.useMemo)(
    () => toCleanTransaction(transactions2),
    [transactions2]
  ), trxnIdToAmount = (0, import_react31.useMemo)(
    () => transactionIDToAmount(transactions2),
    [transactions2]
  );
  return (0, import_react31.useEffect)(() => {
    let selectedRows = Object.keys(rowSelection), total = 0;
    selectedRows.forEach((id) => {
      total += trxnIdToAmount.get(id) || 0;
    });
    let accountInfo = {
      transaction_ids: selectedRows,
      account_id: accountId,
      amount: total
    };
    updateAmount(total, idx), setTotalAmount(), updateAccountInfo(accountInfo, idx);
  }, [rowSelection]), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_Paper.default, { sx: { width: "100%", overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_material_react_table.default,
    {
      columns,
      data,
      enableRowSelection: !0,
      getRowId: (row) => row.id,
      onRowSelectionChange: setRowSelection,
      state: { rowSelection },
      enableStickyHeader: !0,
      enablePagination: !1,
      enableDensityToggle: !1,
      enableTopToolbar: !1
    },
    void 0,
    !1,
    {
      fileName: "app/components/TrxnTableWithCheckbox/transactions_table_with_checkbox.tsx",
      lineNumber: 90,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/TrxnTableWithCheckbox/transactions_table_with_checkbox.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}, toCleanTransaction = (trxns) => {
  let data = [];
  return trxns && trxns.forEach((item) => {
    data.push({
      name: item.name,
      amount: item.amount,
      date: cleanDate(item.date),
      id: item.id
    });
  }), data;
};

// app/components/account_list_amounts.tsx
var import_react32 = require("@tremor/react"), import_solid3 = require("@heroicons/react/24/solid"), import_react33 = require("react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), ErrorTypeToMsg = /* @__PURE__ */ new Map([
  ["not_number", "Value must be a number"],
  ["too_large", "Amount must be less than or equal to account balance"],
  ["", void 0]
]), AccountListAmount = ({
  idx,
  accountId,
  balance,
  name
}) => {
  let [total, setTotal] = (0, import_react33.useState)(0), [error, setError] = (0, import_react33.useState)(""), { updateAmount, setTotalAmount, updateAccountInfo } = usePaymentPlanCreationForm((state) => state), handleOnChange = (e) => {
    isNaN(e.target.value) ? setError("not_number") : e.target.value > balance ? setError("too_large") : (setError(""), setTotal(Number(e.target.value)));
  };
  return (0, import_react33.useEffect)(() => {
    let accountInfo = {
      transaction_ids: [],
      account_id: accountId,
      amount: total
    };
    updateAmount(total, idx), setTotalAmount(), updateAccountInfo(accountInfo, idx);
  }, [total]), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_react32.ListItem,
    {
      className: "flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0 md:space-x-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react32.Text, { className: "mt-2", children: [
          "Total Balance (",
          toUSD(balance),
          ") "
        ] }, void 0, !0, {
          fileName: "app/components/account_list_amounts.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          import_react32.TextInput,
          {
            id: accountId,
            error: error !== "",
            errorMessage: ErrorTypeToMsg.get(error),
            icon: import_solid3.CurrencyDollarIcon,
            className: "max-w-xs w-full md:w-md",
            placeholder: "Enter Dollar Amount ($)",
            onChange: (e) => handleOnChange(e)
          },
          void 0,
          !1,
          {
            fileName: "app/components/account_list_amounts.tsx",
            lineNumber: 60,
            columnNumber: 7
          },
          this
        )
      ]
    },
    accountId,
    !0,
    {
      fileName: "app/components/account_list_amounts.tsx",
      lineNumber: 55,
      columnNumber: 5
    },
    this
  );
};

// app/components/account_accordion_body.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), AccountAccordionBody = ({
  idx,
  transactions: transactions2,
  accountId,
  purpose,
  name,
  balance
}) => (transactions2.sort((a2, b) => new Date(b.date).getTime() - new Date(a2.date).getTime()), purpose === "transactions" ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
  PaymentPlanTransactions,
  {
    idx,
    transactions: transactions2,
    accountId
  },
  void 0,
  !1,
  {
    fileName: "app/components/account_accordion_body.tsx",
    lineNumber: 27,
    columnNumber: 5
  },
  this
) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
  AccountListAmount,
  {
    idx,
    accountId,
    balance,
    name
  },
  void 0,
  !1,
  {
    fileName: "app/components/account_accordion_body.tsx",
    lineNumber: 33,
    columnNumber: 5
  },
  this
));

// app/routes/dashboard.paymentplan.create.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
async function action({ request: request2 }) {
  let form = await request2.formData(), timeline = form.get("timeline"), frequency = form.get("frequency"), planType = form.get("planType"), accountInfo = form.get("account_info"), userId = form.get("userId");
  switch (form.get("_action")) {
    case "submit_preference":
      if (typeof timeline != "string" || typeof frequency != "string" || typeof planType != "string" || typeof accountInfo != "string" || typeof userId != "string")
        return (0, import_node4.json)(
          {
            error: "Invalid Form Data Wrong Type",
            fields: {
              timeline,
              frequency,
              planType,
              accountInfo,
              userId
            }
          },
          { status: 400 }
        );
      let req = {
        account_info: JSON.parse(accountInfo),
        meta_data: {
          preferred_plan_type: Number(planType),
          preferred_timeline_in_months: Number(timeline),
          preferred_payment_freq: Number(frequency)
        },
        save_plan: !1
      }, resp = await api_server_default.paymentplan.submit_payment_plan(
        JSON.stringify(req),
        userId
      );
      return (0, import_node4.redirect)(`/summary?resp=${encodeURI(JSON.stringify(resp))}`);
    default:
      return (0, import_node4.json)({ error: "Invalid Form Data" }, { status: 400 });
  }
}
var loader3 = async (args) => {
  let { userId } = await (0, import_ssr3.getAuth)(args);
  return userId ? { accountAndTransactions: await api_server_default.paymentplan.get_transactions_by_account(userId), userId } : (0, import_node4.redirect)("/sign-in");
}, ErrorTypeToMsg2 = /* @__PURE__ */ new Map([
  [
    "error",
    "Select either a transaction or enter an amount for at least one account to create a plan"
  ],
  ["", void 0]
]);
function PaymentPlanCreation() {
  let [error, setError] = (0, import_react35.useState)(""), [planOption, setPlanOption] = (0, import_react35.useState)("0"), { accountAndTransactions, userId } = (0, import_react36.useLoaderData)(), { totalAmount, frequency, timeline, planType, accountInfo, reset } = usePaymentPlanCreationForm((state) => state), navigate = (0, import_react36.useNavigate)(), handleOnSubmit = () => (reset(), !0), handleOnSubmitValidate = (e) => {
    !accountInfo || accountInfo.length === 0 || totalAmount === 0 ? (e.preventDefault(), setError("error"), navigate("/dashboard/paymentplan/create")) : handleOnSubmit();
  };
  (0, import_react35.useEffect)(() => {
    accountInfo && accountInfo.length > 0 && totalAmount > 0 && setError("");
  }, [accountInfo, totalAmount]);
  let handleInputChange = (value) => {
    setPlanOption(value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    Modal,
    {
      isOpen: !0,
      className: "overflow-scroll p-10",
      navigate_path: "/dashboard",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react36.Form, { method: "post", onSubmit: handleOnSubmitValidate, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", value: userId, name: "userId" }, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 139,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", value: frequency, name: "frequency" }, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 140,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", value: timeline, name: "timeline" }, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 141,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", value: planType, name: "planType" }, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 142,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            type: "hidden",
            value: JSON.stringify(accountInfo),
            name: "account_info"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.paymentplan.create.tsx",
            lineNumber: 143,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Title, { children: "Create A Payment Plan" }, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 148,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Text, { children: "Choose one of our 2 payment plan creation options and select your plan preferences when you are done." }, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 149,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Title, { className: "mt-6", children: "Payment Plan creation options" }, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 153,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            PreferenceDropdownItem,
            {
              options: PaymentPlanOptions,
              onChange: handleInputChange,
              value: planOption
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.paymentplan.create.tsx",
              lineNumber: 155,
              columnNumber: 11
            },
            this
          ),
          GetPaymentPlanCreationBody(planOption, accountAndTransactions)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 154,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Title, { className: "mt-4", children: "Payment Preferences" }, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 162,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Grid, { numColsMd: 2, numColsLg: 4, className: "gap-x-4 gap-y-4 mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(PaymentPlanPreferences, {}, void 0, !1, {
            fileName: "app/routes/dashboard.paymentplan.create.tsx",
            lineNumber: 164,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Card, { className: "md:max-w-xs", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Text, { className: "text-center", children: "Total Amount" }, void 0, !1, {
              fileName: "app/routes/dashboard.paymentplan.create.tsx",
              lineNumber: 166,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Metric, { children: toUSD(totalAmount) }, void 0, !1, {
              fileName: "app/routes/dashboard.paymentplan.create.tsx",
              lineNumber: 168,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.paymentplan.create.tsx",
              lineNumber: 167,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.paymentplan.create.tsx",
            lineNumber: 165,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 163,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 172,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col items-center md:flex-row pt-14", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
            fileName: "app/routes/dashboard.paymentplan.create.tsx",
            lineNumber: 174,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "button",
            {
              className: "rounded-xl bg-blue-300 font-semibold text-blue-600 w-56 h-12 transition duration-300 ease-in-out hover:bg-blue-400 hover:-translate-y-1",
              name: "_action",
              value: "submit_preference",
              disabled: error !== "",
              children: "Send"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.paymentplan.create.tsx",
              lineNumber: 175,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 173,
          columnNumber: 9
        }, this),
        error !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Text, { className: "text-center", color: "red", children: ErrorTypeToMsg2.get(error) }, void 0, !1, {
          fileName: "app/routes/dashboard.paymentplan.create.tsx",
          lineNumber: 185,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.paymentplan.create.tsx",
        lineNumber: 138,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.paymentplan.create.tsx",
      lineNumber: 133,
      columnNumber: 5
    },
    this
  );
}
var GetPaymentPlanCreationBody = (po, data) => {
  let validOptions = /* @__PURE__ */ new Set([1, 2, 3]), planOption = Number(po);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-3", children: [
    planOption === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Text, { className: "text-center", color: "stone", children: "Select your payment preferences below and we'll handle the rest of the hard work!" }, void 0, !1, {
      fileName: "app/routes/dashboard.paymentplan.create.tsx",
      lineNumber: 203,
      columnNumber: 9
    }, this),
    validOptions.has(planOption) && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.AccordionList, { children: data.slimAccounts.map((i, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Accordion, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.AccordionHeader, { children: i.name }, void 0, !1, {
        fileName: "app/routes/dashboard.paymentplan.create.tsx",
        lineNumber: 212,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.AccordionBody, { children: [
        planOption === 3 && "Select your payment preferences below and we'll handle the rest of the hard work!",
        planOption !== 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          AccountAccordionBody,
          {
            accountId: i.accountId,
            balance: i.balance,
            idx,
            purpose: planOption === 1 ? "transactions" : "amounts",
            transactions: data.transactionDict[i.accountId],
            name: i.name
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.paymentplan.create.tsx",
            lineNumber: 217,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.paymentplan.create.tsx",
        lineNumber: 213,
        columnNumber: 15
      }, this)
    ] }, i.accountId, !0, {
      fileName: "app/routes/dashboard.paymentplan.create.tsx",
      lineNumber: 211,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/dashboard.paymentplan.create.tsx",
      lineNumber: 209,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.paymentplan.create.tsx",
    lineNumber: 201,
    columnNumber: 5
  }, this);
};

// app/routes/sign-in.$.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  default: () => SignInPage
});
var import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_remix4.SignIn, { path: "/sign-in", routing: "path", signUpUrl: "/sign-up" }, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up.$.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  default: () => SignUpPage
});
var import_remix5 = require("@clerk/remix"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function SignUpPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_remix5.SignUp, { path: "/sign-up", routing: "path", signInUrl: "/sign-in" }, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/user.$.tsx
var user_exports = {};
__export(user_exports, {
  default: () => UserProfilePage
});
var import_remix6 = require("@clerk/remix"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function UserProfilePage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_remix6.UserProfile, { path: "/user", routing: "path" }, void 0, !1, {
    fileName: "app/routes/user.$.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/about/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => route_default
});
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), Route = () => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { children: "About Page" }, void 0, !1, {
  fileName: "app/routes/about/route.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/about/route.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this), route_default = Route;

// app/routes/accounts/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => AccountSummary,
  loader: () => loader4
});
var import_react39 = require("@tremor/react"), import_node5 = require("@remix-run/node"), import_ssr4 = require("@clerk/remix/ssr.server");
var import_react40 = require("@remix-run/react");

// app/components/acccount_card.tsx
var import_react37 = require("react"), import_react38 = require("@tremor/react");
var import_solid4 = require("@heroicons/react/20/solid");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), APRTypeToName = {
  purchase_apr: "Purchase Apr",
  cash_apr: "Cash Apr",
  special: "Special"
}, AccountCard = ({ accounts: accounts2 }) => (0, import_react37.useMemo)(
  () => !!accounts2 && accounts2.length > 0,
  [accounts2]
) ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Grid, { numColsMd: 1, className: "gap-x-6 gap-y-8 mt-6", children: accounts2.map((account) => {
  let highUtilization = account.current_balance / account.credit_limit * 100 > 0.4 && account.credit_limit > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Grid, { numCols: 2, className: "gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Col, { numColSpan: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Flex, { className: "items-start justify-between mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Title, { children: account.official_name }, void 0, !1, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      highUtilization && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Badge, { color: "red", size: "sm", className: "ml-2", children: "High Utilization (>40%)" }, void 0, !1, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 69,
        columnNumber: 23
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 66,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 65,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Col, { numColSpan: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Text, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Bold, { children: "Account Name:" }, void 0, !1, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this),
      " ",
      account.name
    ] }, void 0, !0, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 76,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 75,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Col, { numColSpan: 1, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Text, { className: "text-right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Bold, { children: "Next Payment Due Date:" }, void 0, !1, {
          fileName: "app/components/acccount_card.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this),
        " ",
        cleanDate(account.next_payment_due_date)
      ] }, void 0, !0, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 81,
        columnNumber: 19
      }, this),
      account.is_overdue && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Badge, { color: "red", size: "sm", className: "ml-2", children: "Overdue" }, void 0, !1, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 80,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Col, { numColSpan: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Divider, { className: "mt-0 mb-1" }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 92,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 91,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Col, { numColSpan: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      import_react38.Grid,
      {
        numCols: account.credit_limit > 0 ? 3 : account.available_balance > 0 ? 2 : 1,
        className: "items-center gap-x-2 gap-y-2",
        children: [
          account.available_balance > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            CalloutRow,
            {
              title: `Available Balance: ${toUSD(
                account.available_balance
              )}`,
              icon: import_solid4.CheckCircleIcon,
              color: "teal"
            },
            void 0,
            !1,
            {
              fileName: "app/components/acccount_card.tsx",
              lineNumber: 106,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            CalloutRow,
            {
              title: `Current Balance: ${toUSD(
                account.current_balance
              )}`,
              icon: import_solid4.ExclamationTriangleIcon,
              color: "rose"
            },
            void 0,
            !1,
            {
              fileName: "app/components/acccount_card.tsx",
              lineNumber: 114,
              columnNumber: 21
            },
            this
          ),
          account.credit_limit > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            CalloutRow,
            {
              title: `Credit Limit: ${toUSD(account.credit_limit)}`,
              icon: import_solid4.BanknotesIcon,
              color: "purple"
            },
            void 0,
            !1,
            {
              fileName: "app/components/acccount_card.tsx",
              lineNumber: 122,
              columnNumber: 23
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 95,
        columnNumber: 19
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 94,
      columnNumber: 17
    }, this),
    account.credit_limit > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ProgressBarSection, { account }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 131,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Col, { numColSpan: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Divider, { className: "mt-4" }, void 0, !1, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 134,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Bold, { children: "APR Information" }, void 0, !1, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 136,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 135,
        columnNumber: 19
      }, this),
      account.annual_percentage_rate && account.annual_percentage_rate.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(APRTable, { account }, void 0, !1, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 140,
        columnNumber: 21
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Text, { className: "mt-2", children: "No APR information available for this account." }, void 0, !1, {
        fileName: "app/components/acccount_card.tsx",
        lineNumber: 142,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 133,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 64,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 63,
    columnNumber: 13
  }, this) }, account.plaid_account_id, !1, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this);
}) }, void 0, !1, {
  fileName: "app/components/acccount_card.tsx",
  lineNumber: 55,
  columnNumber: 5
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
  MissingData,
  {
    text: `You have no linked accounts. Connect a credit card account to see more
        data here.`
  },
  void 0,
  !1,
  {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 47,
    columnNumber: 7
  },
  this
), CalloutRow = ({ title, icon, color }) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Col, { numColSpan: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Callout, { title, icon, color, className: "items-center" }, void 0, !1, {
  fileName: "app/components/acccount_card.tsx",
  lineNumber: 164,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/acccount_card.tsx",
  lineNumber: 163,
  columnNumber: 3
}, this), ProgressBarSection = ({ account }) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Col, { numColSpan: 2, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Text, { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Bold, { children: [
    "Credit Utilization:",
    " (",
    formatAsPercentage(
      account.current_balance / account.credit_limit * 100
    ),
    ") "
  ] }, void 0, !0, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 175,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    import_react38.ProgressBar,
    {
      percentageValue: account.current_balance / account.credit_limit * 100,
      color: "indigo",
      className: "mt-2"
    },
    void 0,
    !1,
    {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 183,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/acccount_card.tsx",
  lineNumber: 173,
  columnNumber: 3
}, this), APRTable = ({ account }) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Table, { className: "mt-2", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableHead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableRow, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableHeaderCell, { children: "Type" }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 195,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableHeaderCell, { children: "APR %" }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 196,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableHeaderCell, { children: "Balance Subject to APR" }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 197,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableHeaderCell, { children: "Interest Charge Amount" }, void 0, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 198,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 194,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 193,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableBody, { children: account.annual_percentage_rate.map(
    (apr, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(APRTableBody, { apr, index }, `apr-${index}`, !1, {
      fileName: "app/components/acccount_card.tsx",
      lineNumber: 204,
      columnNumber: 11
    }, this)
  ) }, void 0, !1, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 201,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/acccount_card.tsx",
  lineNumber: 192,
  columnNumber: 3
}, this), APRTableBody = ({ apr, index }) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableRow, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableCell, { children: APRTypeToName[apr.apr_type] }, void 0, !1, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 217,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableCell, { children: formatAsPercentage(apr.apr_percentage) }, void 0, !1, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 218,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableCell, { children: toUSD(apr.balance_subject_to_apr) }, void 0, !1, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 219,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.TableCell, { children: toUSD(apr.interest_charge_amount) }, void 0, !1, {
    fileName: "app/components/acccount_card.tsx",
    lineNumber: 220,
    columnNumber: 5
  }, this)
] }, `apr-${index}`, !0, {
  fileName: "app/components/acccount_card.tsx",
  lineNumber: 216,
  columnNumber: 3
}, this);

// app/routes/accounts/route.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), loader4 = async (args) => {
  let { userId } = await (0, import_ssr4.getAuth)(args);
  if (!userId)
    return (0, import_node5.redirect)("/sign-in");
  let accountsResponse = await api_server_default.accounts.get_user_accounts(userId), accounts2 = [];
  if (accountsResponse.data && accountsResponse.data.length > 0)
    for (let account of accountsResponse.data)
      account.type === "credit" && accounts2.push(account);
  return { accounts: accounts2 };
};
function AccountSummary() {
  let { accounts: accounts2 } = (0, import_react40.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Card, { className: "mt-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Title, { children: "Linked Credit Accounts" }, void 0, !1, {
      fileName: "app/routes/accounts/route.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Text, { children: "These are all of your linked credit card accounts." }, void 0, !1, {
      fileName: "app/routes/accounts/route.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(AccountCard, { accounts: accounts2 }, void 0, !1, {
      fileName: "app/routes/accounts/route.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/accounts/route.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/paymentplans/route.tsx
var route_exports3 = {};
__export(route_exports3, {
  action: () => action2,
  default: () => PaymentPlans,
  loader: () => loader5
});
var import_react42 = require("@tremor/react");

// app/components/paymentplan_card.tsx
var import_react41 = require("@tremor/react"), import_outline4 = require("@heroicons/react/24/outline");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), Items2 = ({
  payment_actions,
  accIdToName,
  planId
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableBody, { children: payment_actions.map((action3, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableRow, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableCell, { children: [
    accIdToName.get(action3.account_id),
    action3.status === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Icon, { color: "green", size: "xs", icon: import_outline4.CheckCircleIcon }, void 0, !1, {
      fileName: "app/components/paymentplan_card.tsx",
      lineNumber: 64,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/paymentplan_card.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableCell, { className: "text-right", children: toUSD(action3.amount) }, void 0, !1, {
    fileName: "app/components/paymentplan_card.tsx",
    lineNumber: 67,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableCell, { className: "text-right", children: cleanDate(action3.transaction_date) }, void 0, !1, {
    fileName: "app/components/paymentplan_card.tsx",
    lineNumber: 68,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableCell, { className: "text-right", children: ActionStatus.get(action3.status) }, void 0, !1, {
    fileName: "app/components/paymentplan_card.tsx",
    lineNumber: 71,
    columnNumber: 11
  }, this)
] }, `${action3.account_id}_${planId}_${idx}`, !0, {
  fileName: "app/components/paymentplan_card.tsx",
  lineNumber: 60,
  columnNumber: 9
}, this)) }, void 0, !1, {
  fileName: "app/components/paymentplan_card.tsx",
  lineNumber: 58,
  columnNumber: 5
}, this), PaymentPlanCard = ({
  plans,
  accIdToName,
  footer,
  accept
}) => {
  if (!plans || plans.length === 0)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(MissingData, { text: "You have no Payment Plans. Create a Payment Plan to see more data here." }, void 0, !1, {
      fileName: "app/components/paymentplan_card.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this);
  let numcols = plans.length >= 2 ? 2 : 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Grid, { numColsMd: numcols, className: "gap-x-6 gap-y-6 mt-6", children: plans.map((plan, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Card, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Grid, { numCols: 2, className: "gap-x-2 gap-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Col, { numColSpan: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Flex, { className: "items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Title, { children: plan.name }, void 0, !1, {
          fileName: "app/components/paymentplan_card.tsx",
          lineNumber: 101,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          import_react41.Badge,
          {
            color: "green",
            size: "sm",
            icon: plan.plan_type === 1 ? import_outline4.ArrowUpCircleIcon : import_outline4.ArrowDownCircleIcon,
            children: PlanType.get(plan.plan_type) || ""
          },
          void 0,
          !1,
          {
            fileName: "app/components/paymentplan_card.tsx",
            lineNumber: 102,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 100,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Col, { numColSpan: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Flex, { className: "justify-start items-baseline space-x-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Metric, { className: "mt-2", children: toUSD(plan.amount) }, void 0, !1, {
          fileName: "app/components/paymentplan_card.tsx",
          lineNumber: 117,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Text, { children: [
          "/",
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Bold, { children: toUSD(plan.amount_per_payment) }, void 0, !1, {
            fileName: "app/components/paymentplan_card.tsx",
            lineNumber: 119,
            columnNumber: 22
          }, this),
          " per payment avg"
        ] }, void 0, !0, {
          fileName: "app/components/paymentplan_card.tsx",
          lineNumber: 118,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 116,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 115,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Col, { numColSpan: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Text, { children: [
        "Last Payment: ",
        cleanDate(plan.end_date)
      ] }, void 0, !0, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 125,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Col, { numColSpan: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Text, { children: [
          "Progress toward completion: ",
          getPlanProgress(plan),
          "%"
        ] }, void 0, !0, {
          fileName: "app/components/paymentplan_card.tsx",
          lineNumber: 128,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          import_react41.ProgressBar,
          {
            percentageValue: getPlanProgress(plan),
            color: "teal",
            className: "mt-1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/paymentplan_card.tsx",
            lineNumber: 131,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 127,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Text, { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Bold, { children: PaymentFrequency.get(plan.payment_freq) }, void 0, !1, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 139,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 137,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Text, { className: "text-right mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Bold, { children: [
        TimelineMonths.get(plan.timeline),
        " (",
        plan.payment_action.length,
        " payments)"
      ] }, void 0, !0, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 144,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 143,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 142,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Col, { numColSpan: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Accordion, { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.AccordionHeader, { children: "Payments Schedule" }, void 0, !1, {
          fileName: "app/components/paymentplan_card.tsx",
          lineNumber: 152,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.AccordionBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Table, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableHead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableHeaderCell, { children: " Account " }, void 0, !1, {
              fileName: "app/components/paymentplan_card.tsx",
              lineNumber: 157,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableHeaderCell, { className: "text-right", children: [
              " ",
              "Amount ($)",
              " "
            ] }, void 0, !0, {
              fileName: "app/components/paymentplan_card.tsx",
              lineNumber: 158,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableHeaderCell, { className: "text-right", children: [
              " ",
              "Date",
              " "
            ] }, void 0, !0, {
              fileName: "app/components/paymentplan_card.tsx",
              lineNumber: 162,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.TableHeaderCell, { className: "text-right", children: [
              " ",
              "Status",
              " "
            ] }, void 0, !0, {
              fileName: "app/components/paymentplan_card.tsx",
              lineNumber: 166,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/paymentplan_card.tsx",
            lineNumber: 156,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/paymentplan_card.tsx",
            lineNumber: 155,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            Items2,
            {
              payment_actions: plan.payment_action,
              accIdToName,
              planId: plan.payment_plan_id.slice(
                plan.payment_plan_id.length - 4,
                plan.payment_plan_id.length
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/paymentplan_card.tsx",
              lineNumber: 173,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/paymentplan_card.tsx",
          lineNumber: 154,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/paymentplan_card.tsx",
          lineNumber: 153,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 151,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/paymentplan_card.tsx",
        lineNumber: 150,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/paymentplan_card.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: footer && footer(plan.payment_plan_id, plan.transactions || []) }, void 0, !1, {
      fileName: "app/components/paymentplan_card.tsx",
      lineNumber: 186,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: accept && accept(plan) }, void 0, !1, {
      fileName: "app/components/paymentplan_card.tsx",
      lineNumber: 189,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/paymentplan_card.tsx",
    lineNumber: 97,
    columnNumber: 11
  }, this) }, `${plan.name}_${idx}`, !1, {
    fileName: "app/components/paymentplan_card.tsx",
    lineNumber: 96,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/paymentplan_card.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}, getPlanProgress = (plan) => {
  let numPaid = 0;
  for (let action3 of plan.payment_action)
    action3.status === 2 && numPaid++;
  return Math.round(numPaid / plan.payment_action.length * 100);
};

// app/routes/paymentplans/route.tsx
var import_solid5 = require("@heroicons/react/20/solid"), import_react43 = require("react"), import_react44 = require("@remix-run/react"), import_node6 = require("@remix-run/node");
var import_ssr5 = require("@clerk/remix/ssr.server");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
async function action2({ request: request2 }) {
  let form = await request2.formData(), paymentPlanId = form.get("payment_plan_id"), transactionIds = form.get("transaction_ids"), paymentPlan = form.get("payment_plan");
  switch (form.get("_action")) {
    case "delete_payment_plan":
      if (typeof paymentPlanId != "string" || typeof transactionIds != "string")
        return (0, import_node6.json)(
          {
            error: "Invalid Form Data Wrong Type",
            fields: { paymentPlanId, transactionIds }
          },
          { status: 400 }
        );
      let dresp = await api_server_default.paymentplan.delete_payment_plan(
        paymentPlanId,
        transactionIds,
        null
      );
      return console.log(dresp), (0, import_node6.redirect)("/paymentplans");
    case "accept_payment_plan":
      if (typeof paymentPlan != "string")
        return (0, import_node6.json)(
          {
            error: "Invalid Form Data Wrong Type",
            fields: { paymentPlan }
          },
          { status: 400 }
        );
      let req = {
        payment_plan: JSON.parse(paymentPlan),
        save_plan: !0
      }, aresp = await api_server_default.paymentplan.accept_payment_plan(
        JSON.stringify(req),
        null
      );
      return console.log(aresp), (0, import_node6.redirect)("/paymentplans");
    default:
      return (0, import_node6.json)({ error: "Invalid Form Data" }, { status: 400 });
  }
}
var loader5 = async (args) => {
  let { userId } = await (0, import_ssr5.getAuth)(args);
  if (!userId)
    return (0, import_node6.redirect)("/sign-in");
  let paymentPlans = await api_server_default.paymentplan.get_user_payment_plans(userId), accounts2 = await api_server_default.accounts.get_user_accounts(userId);
  return { paymentPlans, accounts: accounts2 };
};
function PaymentPlans() {
  let { paymentPlans, accounts: accounts2 } = (0, import_react44.useLoaderData)(), accIdToName = (0, import_react43.useMemo)(
    () => AccountIDToName(accounts2.data),
    [accounts2]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react42.Card, { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react42.Title, { children: "Payment Plans" }, void 0, !1, {
      fileName: "app/routes/paymentplans/route.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react42.Text, { children: "These are all of your payment plans. Your plans tell you how much you need to pay and when." }, void 0, !1, {
      fileName: "app/routes/paymentplans/route.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react42.Text, { children: "If you have a premium account these payments will be managed automatically!" }, void 0, !1, {
      fileName: "app/routes/paymentplans/route.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      PaymentPlanCard,
      {
        plans: paymentPlans.data,
        accIdToName,
        footer: PlanFooter
      },
      void 0,
      !1,
      {
        fileName: "app/routes/paymentplans/route.tsx",
        lineNumber: 103,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/paymentplans/route.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/paymentplans/route.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
var PlanFooter = (paymentPlanId, transactionIds) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react44.Form, { method: "delete", onSubmit: (e) => confirm("Are you sure?") ? !0 : e.preventDefault(), children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { type: "hidden", value: paymentPlanId, name: "payment_plan_id" }, void 0, !1, {
    fileName: "app/routes/paymentplans/route.tsx",
    lineNumber: 120,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { type: "hidden", value: transactionIds, name: "transaction_ids" }, void 0, !1, {
    fileName: "app/routes/paymentplans/route.tsx",
    lineNumber: 121,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "border-t border-slate-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    import_react42.Button,
    {
      type: "submit",
      name: "_action",
      value: "delete_payment_plan",
      className: "mt-3",
      size: "sm",
      icon: import_solid5.XMarkIcon,
      iconPosition: "left",
      color: "red",
      children: "Delete"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/paymentplans/route.tsx",
      lineNumber: 123,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/paymentplans/route.tsx",
    lineNumber: 122,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/paymentplans/route.tsx",
  lineNumber: 119,
  columnNumber: 5
}, this);

// app/routes/summary/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  default: () => Route2,
  getUserEmail: () => getUserEmail2,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node"), import_react45 = require("@remix-run/react");
var import_react46 = require("@tremor/react"), import_react47 = require("react");
var import_api7 = require("@clerk/remix/api.server"), import_ssr6 = require("@clerk/remix/ssr.server");
var import_solid6 = require("@heroicons/react/20/solid"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), getUserEmail2 = async (userId) => {
  let { emailAddresses } = await (0, import_api7.createClerkClient)({
    apiKey: process.env.CLERK_SECRET_KEY
  }).users.getUser(userId);
  if (!emailAddresses || emailAddresses.length === 0)
    throw new Error("No email address found for user");
  return emailAddresses[0].emailAddress;
}, loader6 = async (args) => {
  let { userId } = await (0, import_ssr6.getAuth)(args);
  if (!userId)
    return (0, import_node7.redirect)("/sign-in");
  let encrypted = new URL(args.request.url).searchParams.get("resp"), decrypted = JSON.parse(decodeURI(encrypted)), accounts2 = await api_server_default.accounts.get_user_accounts(userId);
  return { decrypted, accounts: accounts2 };
};
function Route2() {
  let { decrypted, accounts: accounts2 } = (0, import_react45.useLoaderData)(), accIdToName = (0, import_react47.useMemo)(
    () => AccountIDToName(accounts2.data),
    [accounts2]
  ), paymentPlans = decrypted.data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    Modal,
    {
      isOpen: !0,
      className: "overflow-scroll p-10",
      navigate_path: "/dashboard",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react46.Title, { className: "text-center mt-2", children: paymentPlans.length > 1 ? "New Payment Plan Options Available" : "New Payment Plan Created" }, void 0, !1, {
          fileName: "app/routes/summary/route.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react46.Text, { className: "text-center mt-2", children: paymentPlans.length > 1 ? "Here are a few new payment plan options. Accept the one that best meets your needs. You can always view all of your plans on the Payment Plans tab." : "Here is a summary of your new payment plan. You can always view all of your plans on the Payment Plans tab." }, void 0, !1, {
          fileName: "app/routes/summary/route.tsx",
          lineNumber: 65,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react46.Text, { className: "text-center", children: "We'll text you a reminder with all of the necessary details when you have an upcoming payment." }, void 0, !1, {
          fileName: "app/routes/summary/route.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          PaymentPlanCard,
          {
            plans: paymentPlans,
            accIdToName,
            accept: paymentPlans.length > 1 ? AcceptFooter : void 0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/summary/route.tsx",
            lineNumber: 74,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/summary/route.tsx",
      lineNumber: 55,
      columnNumber: 5
    },
    this
  );
}
var AcceptFooter = (paymentPlan) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react45.Form, { method: "post", onSubmit: (e) => confirm("Are you sure?") ? !0 : e.preventDefault(), action: "/paymentplans", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    "input",
    {
      type: "hidden",
      value: JSON.stringify(paymentPlan),
      name: "payment_plan"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/summary/route.tsx",
      lineNumber: 90,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "border-t border-slate-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    import_react46.Button,
    {
      type: "submit",
      name: "_action",
      value: "accept_payment_plan",
      className: "mt-3",
      size: "sm",
      icon: import_solid6.CheckIcon,
      iconPosition: "left",
      color: "blue",
      children: "Accept"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/summary/route.tsx",
      lineNumber: 96,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/summary/route.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/summary/route.tsx",
  lineNumber: 89,
  columnNumber: 5
}, this);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "48b4401c", entry: { module: "/build/entry.client-2KEW6SYT.js", imports: ["/build/_shared/chunk-RBQMJDUM.js", "/build/_shared/chunk-SW2WQF5F.js", "/build/_shared/chunk-D7HTRAAY.js", "/build/_shared/chunk-AZPU6RDF.js", "/build/_shared/chunk-FPN3U2J5.js", "/build/_shared/chunk-56THQXCK.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KE5NTD27.js", imports: ["/build/_shared/chunk-CFYMYYEX.js", "/build/_shared/chunk-IYK47WIZ.js", "/build/_shared/chunk-6DZVIU6P.js", "/build/_shared/chunk-Z44B4KW6.js", "/build/_shared/chunk-3UHZGT5Y.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-B3GPOSGC.js", imports: ["/build/_shared/chunk-2XLGW4DA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-LEHF6LFP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/accounts": { id: "routes/accounts", parentId: "root", path: "accounts", index: void 0, caseSensitive: void 0, module: "/build/routes/accounts-YFETIXK2.js", imports: ["/build/_shared/chunk-2XLGW4DA.js", "/build/_shared/chunk-7B2GWGYO.js", "/build/_shared/chunk-TZZDSKDH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-FDAMZUNX.js", imports: ["/build/_shared/chunk-IZ23VKYQ.js", "/build/_shared/chunk-7B2GWGYO.js", "/build/_shared/chunk-N5OEDOKQ.js", "/build/_shared/chunk-TZZDSKDH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard.paymentplan.create": { id: "routes/dashboard.paymentplan.create", parentId: "routes/dashboard", path: "paymentplan/create", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.paymentplan.create-Y6YR5LIR.js", imports: ["/build/_shared/chunk-T6MEAD2Q.js", "/build/_shared/chunk-BP4F755U.js", "/build/_shared/chunk-CFYMYYEX.js", "/build/_shared/chunk-IYK47WIZ.js", "/build/_shared/chunk-6DZVIU6P.js", "/build/_shared/chunk-Z44B4KW6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/paymentplans": { id: "routes/paymentplans", parentId: "root", path: "paymentplans", index: void 0, caseSensitive: void 0, module: "/build/routes/paymentplans-WUPUALXP.js", imports: ["/build/_shared/chunk-7OQ2AV4C.js", "/build/_shared/chunk-2XLGW4DA.js", "/build/_shared/chunk-7B2GWGYO.js", "/build/_shared/chunk-BP4F755U.js", "/build/_shared/chunk-TZZDSKDH.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in.$": { id: "routes/sign-in.$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in.$-JBIFBDH2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up.$": { id: "routes/sign-up.$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.$-GPNDMKEO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/summary": { id: "routes/summary", parentId: "root", path: "summary", index: void 0, caseSensitive: void 0, module: "/build/routes/summary-UFOXGMT6.js", imports: ["/build/_shared/chunk-7OQ2AV4C.js", "/build/_shared/chunk-2XLGW4DA.js", "/build/_shared/chunk-IZ23VKYQ.js", "/build/_shared/chunk-7B2GWGYO.js", "/build/_shared/chunk-T6MEAD2Q.js", "/build/_shared/chunk-BP4F755U.js", "/build/_shared/chunk-TZZDSKDH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user.$": { id: "routes/user.$", parentId: "root", path: "user/*", index: void 0, caseSensitive: void 0, module: "/build/routes/user.$-B3W4DKWD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-48B4401C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard.paymentplan.create": {
    id: "routes/dashboard.paymentplan.create",
    parentId: "routes/dashboard",
    path: "paymentplan/create",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_paymentplan_create_exports
  },
  "routes/sign-in.$": {
    id: "routes/sign-in.$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/sign-up.$": {
    id: "routes/sign-up.$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/user.$": {
    id: "routes/user.$",
    parentId: "root",
    path: "user/*",
    index: void 0,
    caseSensitive: void 0,
    module: user_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/accounts": {
    id: "routes/accounts",
    parentId: "root",
    path: "accounts",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/paymentplans": {
    id: "routes/paymentplans",
    parentId: "root",
    path: "paymentplans",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/summary": {
    id: "routes/summary",
    parentId: "root",
    path: "summary",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports4
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
