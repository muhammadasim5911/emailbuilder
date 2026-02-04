import * as g from "react";
import k, { useRef as ve, useMemo as we, useLayoutEffect as Pi, useEffect as de, useCallback as Te, useState as ie, createContext as On, memo as ed, useReducer as td, useContext as It, cloneElement as nd, forwardRef as zo, createElement as wo } from "react";
import * as Rr from "react-dom";
import Mi, { unstable_batchedUpdates as Wn, createPortal as Wo } from "react-dom";
function rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hn = { exports: {} }, bn = {};
var ws;
function od() {
  if (ws) return bn;
  ws = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, o, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      s = {};
      for (var l in o)
        l !== "key" && (s[l] = o[l]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return bn.Fragment = t, bn.jsx = n, bn.jsxs = n, bn;
}
var yn = {};
var Cs;
function sd() {
  return Cs || (Cs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === P ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case v:
          return "Fragment";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case E:
          return "Suspense";
        case C:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case f:
            return "Portal";
          case S:
            return R.displayName || "Context";
          case w:
            return (R._context.displayName || "Context") + ".Consumer";
          case N:
            var F = R.render;
            return R = R.displayName, R || (R = F.displayName || F.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case j:
            return F = R.displayName || null, F !== null ? F : e(R.type) || "Memo";
          case O:
            F = R._payload, R = R._init;
            try {
              return e(R(F));
            } catch {
            }
        }
      return null;
    }
    function t(R) {
      return "" + R;
    }
    function n(R) {
      try {
        t(R);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var _ = F.error, $ = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return _.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(R);
      }
    }
    function r(R) {
      if (R === v) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === O)
        return "<...>";
      try {
        var F = e(R);
        return F ? "<" + F + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var R = z.A;
      return R === null ? null : R.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(R) {
      if (V.call(R, "key")) {
        var F = Object.getOwnPropertyDescriptor(R, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, F) {
      function _() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: _,
        configurable: !0
      });
    }
    function d() {
      var R = e(this.type);
      return M[R] || (M[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function c(R, F, _, $, Z, ee) {
      var D = _.ref;
      return R = {
        $$typeof: x,
        type: R,
        key: F,
        props: _,
        _owner: $
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(R, "ref", { enumerable: !1, value: null }), R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(R, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(R, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function p(R, F, _, $, Z, ee) {
      var D = F.children;
      if (D !== void 0)
        if ($)
          if (B(D)) {
            for ($ = 0; $ < D.length; $++)
              u(D[$]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(D);
      if (V.call(F, "key")) {
        D = e(R);
        var H = Object.keys(F).filter(function(W) {
          return W !== "key";
        });
        $ = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", oe[D + $] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          D,
          H,
          D
        ), oe[D + $] = !0);
      }
      if (D = null, _ !== void 0 && (n(_), D = "" + _), a(F) && (n(F.key), D = "" + F.key), "key" in F) {
        _ = {};
        for (var te in F)
          te !== "key" && (_[te] = F[te]);
      } else _ = F;
      return D && l(
        _,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), c(
        R,
        D,
        _,
        o(),
        Z,
        ee
      );
    }
    function u(R) {
      m(R) ? R._store && (R._store.validated = 1) : typeof R == "object" && R !== null && R.$$typeof === O && (R._payload.status === "fulfilled" ? m(R._payload.value) && R._payload.value._store && (R._payload.value._store.validated = 1) : R._store && (R._store.validated = 1));
    }
    function m(R) {
      return typeof R == "object" && R !== null && R.$$typeof === x;
    }
    var h = k, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), w = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), C = /* @__PURE__ */ Symbol.for("react.suspense_list"), j = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), P = /* @__PURE__ */ Symbol.for("react.client.reference"), z = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, B = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var I, M = {}, T = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), K = q(r(s)), oe = {};
    yn.Fragment = v, yn.jsx = function(R, F, _) {
      var $ = 1e4 > z.recentlyCreatedOwnerStacks++;
      return p(
        R,
        F,
        _,
        !1,
        $ ? Error("react-stack-top-frame") : T,
        $ ? q(r(R)) : K
      );
    }, yn.jsxs = function(R, F, _) {
      var $ = 1e4 > z.recentlyCreatedOwnerStacks++;
      return p(
        R,
        F,
        _,
        !0,
        $ ? Error("react-stack-top-frame") : T,
        $ ? q(r(R)) : K
      );
    };
  })()), yn;
}
var Ss;
function id() {
  return Ss || (Ss = 1, process.env.NODE_ENV === "production" ? Hn.exports = od() : Hn.exports = sd()), Hn.exports;
}
var i = id();
const ad = {}, Ns = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (p, u) => {
    const m = typeof p == "function" ? p(t) : p;
    if (!Object.is(m, t)) {
      const h = t;
      t = u ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), n.forEach((x) => x(t, h));
    }
  }, o = () => t, d = { setState: r, getState: o, getInitialState: () => c, subscribe: (p) => (n.add(p), () => n.delete(p)), destroy: () => {
    (ad ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, c = t = e(r, o, d);
  return d;
}, ld = (e) => e ? Ns(e) : Ns;
var Vn = { exports: {} }, Zr = {}, Gn = { exports: {} }, Qr = {};
var js;
function cd() {
  if (js) return Qr;
  js = 1;
  var e = k;
  function t(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, s = e.useLayoutEffect, a = e.useDebugValue;
  function l(u, m) {
    var h = m(), x = r({ inst: { value: h, getSnapshot: m } }), f = x[0].inst, v = x[1];
    return s(
      function() {
        f.value = h, f.getSnapshot = m, d(f) && v({ inst: f });
      },
      [u, h, m]
    ), o(
      function() {
        return d(f) && v({ inst: f }), u(function() {
          d(f) && v({ inst: f });
        });
      },
      [u]
    ), a(h), h;
  }
  function d(u) {
    var m = u.getSnapshot;
    u = u.value;
    try {
      var h = m();
      return !n(u, h);
    } catch {
      return !0;
    }
  }
  function c(u, m) {
    return m();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : l;
  return Qr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Qr;
}
var eo = {};
var Es;
function dd() {
  return Es || (Es = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h, x) {
      return h === x && (h !== 0 || 1 / h === 1 / x) || h !== h && x !== x;
    }
    function t(h, x) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var f = x();
      if (!u) {
        var v = x();
        s(f, v) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), u = !0);
      }
      v = a({
        inst: { value: f, getSnapshot: x }
      });
      var y = v[0].inst, b = v[1];
      return d(
        function() {
          y.value = f, y.getSnapshot = x, n(y) && b({ inst: y });
        },
        [h, f, x]
      ), l(
        function() {
          return n(y) && b({ inst: y }), h(function() {
            n(y) && b({ inst: y });
          });
        },
        [h]
      ), c(f), f;
    }
    function n(h) {
      var x = h.getSnapshot;
      h = h.value;
      try {
        var f = x();
        return !s(h, f);
      } catch {
        return !0;
      }
    }
    function r(h, x) {
      return x();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = k, s = typeof Object.is == "function" ? Object.is : e, a = o.useState, l = o.useEffect, d = o.useLayoutEffect, c = o.useDebugValue, p = !1, u = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    eo.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), eo;
}
var Rs;
function Li() {
  return Rs || (Rs = 1, process.env.NODE_ENV === "production" ? Gn.exports = cd() : Gn.exports = dd()), Gn.exports;
}
var ks;
function ud() {
  if (ks) return Zr;
  ks = 1;
  var e = k, t = Li();
  function n(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, s = e.useRef, a = e.useEffect, l = e.useMemo, d = e.useDebugValue;
  return Zr.useSyncExternalStoreWithSelector = function(c, p, u, m, h) {
    var x = s(null);
    if (x.current === null) {
      var f = { hasValue: !1, value: null };
      x.current = f;
    } else f = x.current;
    x = l(
      function() {
        function y(E) {
          if (!b) {
            if (b = !0, w = E, E = m(E), h !== void 0 && f.hasValue) {
              var C = f.value;
              if (h(C, E))
                return S = C;
            }
            return S = E;
          }
          if (C = S, r(w, E)) return C;
          var j = m(E);
          return h !== void 0 && h(C, j) ? (w = E, C) : (w = E, S = j);
        }
        var b = !1, w, S, N = u === void 0 ? null : u;
        return [
          function() {
            return y(p());
          },
          N === null ? void 0 : function() {
            return y(N());
          }
        ];
      },
      [p, u, m, h]
    );
    var v = o(c, x[0], x[1]);
    return a(
      function() {
        f.hasValue = !0, f.value = v;
      },
      [v]
    ), d(v), v;
  }, Zr;
}
var to = {};
var Ts;
function fd() {
  return Ts || (Ts = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, p) {
      return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = k, n = Li(), r = typeof Object.is == "function" ? Object.is : e, o = n.useSyncExternalStore, s = t.useRef, a = t.useEffect, l = t.useMemo, d = t.useDebugValue;
    to.useSyncExternalStoreWithSelector = function(c, p, u, m, h) {
      var x = s(null);
      if (x.current === null) {
        var f = { hasValue: !1, value: null };
        x.current = f;
      } else f = x.current;
      x = l(
        function() {
          function y(E) {
            if (!b) {
              if (b = !0, w = E, E = m(E), h !== void 0 && f.hasValue) {
                var C = f.value;
                if (h(C, E))
                  return S = C;
              }
              return S = E;
            }
            if (C = S, r(w, E))
              return C;
            var j = m(E);
            return h !== void 0 && h(C, j) ? (w = E, C) : (w = E, S = j);
          }
          var b = !1, w, S, N = u === void 0 ? null : u;
          return [
            function() {
              return y(p());
            },
            N === null ? void 0 : function() {
              return y(N());
            }
          ];
        },
        [p, u, m, h]
      );
      var v = o(c, x[0], x[1]);
      return a(
        function() {
          f.hasValue = !0, f.value = v;
        },
        [v]
      ), d(v), v;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), to;
}
var As;
function pd() {
  return As || (As = 1, process.env.NODE_ENV === "production" ? Vn.exports = ud() : Vn.exports = fd()), Vn.exports;
}
var hd = pd();
const md = /* @__PURE__ */ rd(hd), $i = {}, { useDebugValue: gd } = k, { useSyncExternalStoreWithSelector: xd } = md;
let Ds = !1;
const vd = (e) => e;
function bd(e, t = vd, n) {
  ($i ? "production" : void 0) !== "production" && n && !Ds && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Ds = !0);
  const r = xd(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return gd(r), r;
}
const Os = (e) => {
  ($i ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? ld(e) : e, n = (r, o) => bd(t, r, o);
  return Object.assign(n, t), n;
}, kr = (e) => e ? Os(e) : Os;
let Yn;
const yd = new Uint8Array(16);
function wd() {
  if (!Yn && (Yn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Yn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Yn(yd);
}
const Me = [];
for (let e = 0; e < 256; ++e)
  Me.push((e + 256).toString(16).slice(1));
function Cd(e, t = 0) {
  return Me[e[t + 0]] + Me[e[t + 1]] + Me[e[t + 2]] + Me[e[t + 3]] + "-" + Me[e[t + 4]] + Me[e[t + 5]] + "-" + Me[e[t + 6]] + Me[e[t + 7]] + "-" + Me[e[t + 8]] + Me[e[t + 9]] + "-" + Me[e[t + 10]] + Me[e[t + 11]] + Me[e[t + 12]] + Me[e[t + 13]] + Me[e[t + 14]] + Me[e[t + 15]];
}
const Sd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Is = {
  randomUUID: Sd
};
function me(e, t, n) {
  if (Is.randomUUID && !e)
    return Is.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || wd)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Cd(r);
}
function Fi(e) {
  const n = new DOMParser().parseFromString(e, "text/html"), r = [], o = n.querySelectorAll("table.es-header, table.es-content, table.es-footer");
  return o.length === 0 ? _s(n.body) : (o.forEach((s) => {
    const a = Nd(s);
    r.push(...a);
  }), r.length > 0 ? r : _s(n.body));
}
function Nd(e) {
  const t = [];
  e.querySelectorAll("img").forEach((a) => {
    const l = tn(a);
    t.push(Bi(a, l));
  });
  const r = e.querySelectorAll("p, h1, h2, h3, h4, h5, h6"), o = [];
  return r.forEach((a) => {
    const l = a.textContent?.trim();
    if (l && l.length > 0 && !a.closest("a")) {
      const c = tn(a);
      o.push({
        text: l,
        styles: c,
        tag: a.tagName.toLowerCase()
      });
    }
  }), e.querySelectorAll('a.es-button, a[class*="button"], span.es-button-border a, a[style*="background"]').forEach((a) => {
    const l = a.textContent?.trim(), d = a.href || "#";
    if (l) {
      const c = tn(a);
      t.push(Wi(l, d, c));
    }
  }), o.length > 0 && t.push(zi(o)), t;
}
function tn(e) {
  const t = {}, n = e.getAttribute("style") || "";
  if (n && n.split(";").forEach((s) => {
    const [a, l] = s.split(":").map((d) => d.trim());
    a && l && (t[a] = l);
  }), e.getAttribute("align") && (t.textAlign = e.getAttribute("align")), !t.textAlign) {
    let o = e.parentElement;
    for (; o && o.tagName !== "BODY"; ) {
      if (o.tagName === "TD" || o.tagName === "TH") {
        const s = o.getAttribute("align");
        if (s) {
          t.textAlign = s;
          break;
        }
      }
      o = o.parentElement;
    }
  }
  const r = window.getComputedStyle(e);
  return t.color || (t.color = r.color), t["font-size"] || (t.fontSize = r.fontSize), t["font-family"] || (t.fontFamily = r.fontFamily), !t["text-align"] && !t.textAlign && (t.textAlign = r.textAlign), t["background-color"] || (t.backgroundColor = r.backgroundColor), t;
}
function _s(e) {
  const t = [];
  e.querySelectorAll("img").forEach((a) => {
    const l = tn(a);
    t.push(Bi(a, l));
  });
  const r = e.querySelectorAll("p, h1, h2, h3, div"), o = [];
  return r.forEach((a) => {
    const l = a.textContent?.trim();
    if (l && l.length > 10) {
      const d = tn(a);
      o.push({
        text: l,
        styles: d,
        tag: a.tagName.toLowerCase()
      });
    }
  }), o.length > 0 && t.push(zi(o)), e.querySelectorAll("a").forEach((a) => {
    const l = a.textContent?.trim(), d = a.href || "#";
    if (l && l.length > 0 && l.length < 50) {
      const c = tn(a);
      t.push(Wi(l, d, c));
    }
  }), t;
}
function Bi(e, t = {}) {
  let n = e.getAttribute("width") || t.width || "100%", r = e.getAttribute("height") || t.height || "auto", o = parseInt(String(n)), s = parseInt(String(r));
  !isNaN(o) && o > 200 ? (n = "100%", r = "auto") : (isNaN(o) || (n = `${o}px`), isNaN(s) || (r = `${s}px`));
  let l = "left", d = e.parentElement;
  for (; d && d.tagName !== "BODY"; ) {
    if (d.tagName === "TD" || d.tagName === "TH") {
      const c = d.getAttribute("align");
      if (c === "center" || c === "left" || c === "right") {
        l = c;
        break;
      }
    }
    d = d.parentElement;
  }
  return {
    id: me(),
    type: "row",
    label: "Image Row",
    children: [
      {
        id: me(),
        type: "column",
        label: "Image Column",
        children: [
          {
            id: me(),
            type: "image",
            src: e.src,
            alt: e.alt || "Image",
            width: n,
            height: r,
            padding: { top: 0, bottom: 0, left: 0, right: 0 },
            margin: { top: 0, bottom: 0, left: 0, right: 0 },
            visible: !0,
            locked: !1
          }
        ],
        width: "100%",
        horizontalAlign: l,
        // Apply extracted alignment
        padding: { top: 10, right: 10, bottom: 10, left: 10 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        visible: !0,
        locked: !1
      }
    ],
    width: "100%",
    gap: 10,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    visible: !0,
    locked: !1
  };
}
function zi(e) {
  const t = e.map(({ text: n, styles: r, tag: o }) => {
    const s = r.fontSize ? parseInt(r.fontSize) : 14, a = r.color || "#455A64", l = r.textAlign || r["text-align"] || "center", d = o === "h1" || o === "h2" || o === "h3" ? "bold" : "normal";
    return {
      id: me(),
      type: "text",
      content: n,
      fontSize: s,
      fontFamily: "Arial",
      fontWeight: d,
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: 0,
      color: a,
      textAlign: l,
      padding: { top: 10, bottom: 10, left: 20, right: 20 },
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      visible: !0,
      locked: !1
    };
  });
  return {
    id: me(),
    type: "row",
    label: "Text Row",
    children: [
      {
        id: me(),
        type: "column",
        label: "Text Column",
        children: t,
        width: "100%",
        padding: { top: 20, right: 20, bottom: 20, left: 20 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        visible: !0,
        locked: !1
      }
    ],
    width: "100%",
    gap: 10,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    visible: !0,
    locked: !1
  };
}
function Wi(e, t, n = {}) {
  return {
    id: me(),
    type: "row",
    label: "Button Row",
    children: [
      {
        id: me(),
        type: "column",
        label: "Button Column",
        children: [
          {
            id: me(),
            type: "button",
            label: "Button",
            text: e,
            link: t,
            style: "solid",
            fontSize: n.fontSize ? parseInt(n.fontSize) : 18,
            fontFamily: "Arial",
            fontWeight: "normal",
            color: n.color || "#FFFFFF",
            backgroundColor: n.background || n["background-color"] || "#BD242B",
            borderColor: n["border-color"] || "#BD242B",
            borderWidth: n["border-width"] ? parseInt(n["border-width"]) : 0,
            borderRadius: n["border-radius"] ? parseInt(n["border-radius"]) : 10,
            paddingX: 20,
            paddingY: 10,
            padding: { top: 10, bottom: 10, left: 20, right: 20 },
            margin: { top: 10, bottom: 10, left: 0, right: 0 },
            visible: !0,
            locked: !1
          }
        ],
        width: "100%",
        padding: { top: 20, right: 20, bottom: 20, left: 20 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        visible: !0,
        locked: !1
      }
    ],
    width: "100%",
    gap: 10,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    visible: !0,
    locked: !1
  };
}
const jd = "https://publiccircles-template-thumbnails.s3.ca-central-1.amazonaws.com/public-circle-assets/logo.png", Ed = (e, t) => {
  const n = [];
  let r = `
    <style>
      /* Hide dot separator on actual mobile devices viewing the email */
      @media only screen and (max-width: 480px) {
        .footer-dot-separator {
          display: none !important;
        }
        .footer-content-wrapper {
          flex-direction: column !important;
          gap: 4px !important;
        }
      }
      /* Hide dot separator in editor mobile preview mode */
      .email-canvas-content[data-device-mode="mobile"] .footer-dot-separator {
        display: none !important;
      }
      .email-canvas-content[data-device-mode="mobile"] .footer-content-wrapper {
        flex-direction: column !important;
        gap: 4px !important;
      }
    </style>
    <div class="footer-content-wrapper" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 6px; text-align: center; line-height: 1.5; font-size: 14px; padding: 10px; background-color: black; color: #ffffff; font-family: 'Cabin', sans-serif;">
  `;
  if (e && (r += `
      <span class="footer-poweredby" style="display: inline-flex; align-items: center; white-space: nowrap;">
        <span>Powered by</span>
        <a href="https://publiccircles.com" target="_blank" style="pointer-events: auto; display: inline-flex; align-items: center; text-decoration: none; margin-left: 4px;">
          <img src="${jd}" alt="Public Circles" style="height: 16px; vertical-align: middle;">
        </a>
      </span>
    `), e && t && (r += `
      <span class="footer-dot-separator" style="display: inline-flex; justify-content: center; align-items: center; background-color: transparent; color: #ffffff; width: 20px; height: 20px; white-space: nowrap;">•</span>
    `), t && (r += `
      <span style="white-space: nowrap; color: #ffffff;">
        <a href="{{unsubscribe}}" style="color: #ffffff; text-decoration: underline; pointer-events: auto;">Unsubscribe</a>
        <span> from Emails</span>
      </span>
    `), r += "</div>", e || t) {
    const o = {
      id: me(),
      type: "row",
      label: "Footer",
      cells: [1],
      children: [
        {
          id: me(),
          type: "column",
          label: "Footer Column",
          children: [
            {
              id: me(),
              type: "html",
              label: "Footer Content",
              content: r,
              visible: !0,
              locked: !0,
              // Completely disable all interactions
              selectable: !1,
              draggable: !1,
              duplicatable: !1,
              deletable: !1,
              hideable: !1,
              clickable: !1
            }
          ],
          width: "100%",
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
          visible: !0,
          locked: !0,
          selectable: !1,
          draggable: !1,
          duplicatable: !1,
          deletable: !1,
          hideable: !1,
          clickable: !1
        }
      ],
      width: "100%",
      gap: 0,
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      visible: !0,
      locked: !0,
      // Footer row is completely non-interactive
      selectable: !1,
      draggable: !1,
      duplicatable: !1,
      deletable: !1,
      hideable: !1,
      clickable: !1,
      _isFooter: !0
      // Internal marker to identify footer rows
    };
    n.push(o);
  }
  return n;
}, Rd = (e) => e.filter((t) => !t._isFooter), kd = (e, t, n) => {
  const r = Rd(e), o = Ed(t, n);
  return [...r, ...o];
}, Ps = () => me(), Co = (e, t) => {
  for (const n of e) {
    if (n.id === t) return n;
    if ("children" in n && n.children) {
      const r = Co(n.children, t);
      if (r) return r;
    }
  }
}, Hi = (e, t, n = null) => {
  for (const r of e)
    if ("children" in r && r.children) {
      if (r.children.some((a) => a.id === t))
        return r;
      const s = Hi(r.children, t, r);
      if (s) return s;
    }
  return null;
}, Vi = (e) => {
  const t = `
    <style>
      body {
        font-family: ${e.defaultFontFamily}, sans-serif;
        color: ${e.defaultTextColor};
        background-color: ${e.defaultBackgroundColor};
      }
      table {
        width: 100%;
        max-width: ${e.width}px;
        margin: 0 auto;
        border-collapse: collapse;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      a {
        color: #0ea5e9;
        text-decoration: none;
      }
      .email-container {
        width: 100%;
        max-width: ${e.width}px;
        margin: 0 auto;
      }
    </style>
  `, n = e.elements.map((r) => Ho(r)).join(`
`);
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${e.subject || e.name}</title>
      ${t}
    </head>
    <body>
      <div class="email-container">
        ${n}
      </div>
    </body>
    </html>
  `;
}, Ho = (e) => {
  const t = Td(e);
  switch (e.type) {
    case "text": {
      const n = e;
      return `<div style="${`
        ${t}
        font-size: ${n.fontSize}px;
        font-family: ${n.fontFamily}, sans-serif;
        color: ${n.color};
        text-align: ${n.textAlign};
        line-height: ${n.lineHeight};
      `}">${n.content}</div>`;
    }
    case "image": {
      const n = e, r = `
        ${t}
        max-width: 100%;
        height: auto;
      `;
      return `<img src="${n.src}" alt="${n.alt}" style="${r}" />`;
    }
    case "button": {
      const n = e, r = `
        display: inline-block;
        padding: ${n.paddingY}px ${n.paddingX}px;
        background-color: ${n.backgroundColor || "#0ea5e9"};
        color: ${n.color};
        text-decoration: none;
        border-radius: ${n.borderRadius}px;
        font-size: ${n.fontSize}px;
        border: ${n.borderWidth}px solid ${n.borderColor};
        ${t}
      `;
      return `<a href="${n.link}" style="${r}">${n.text}</a>`;
    }
    case "divider": {
      const n = e;
      return `<hr style="${`
        ${t}
        border: none;
        border-top: ${n.height}px ${n.style} ${n.color};
        margin: ${n.margin?.top || 10}px 0;
      `}" />`;
    }
    case "spacer":
      return `<div style="height: ${e.height}px; ${t}"></div>`;
    case "section":
    case "row": {
      const r = (e.children || []).map((o) => Ho(o)).join(`
`);
      return `<div style="${t}">${r}</div>`;
    }
    default:
      return "";
  }
}, Td = (e) => {
  let t = "";
  if (e.backgroundColor && (t += `background-color: ${e.backgroundColor};`), e.width && (t += `width: ${typeof e.width == "number" ? e.width + "px" : e.width};`), e.height && (t += `height: ${typeof e.height == "number" ? e.height + "px" : e.height};`), e.padding) {
    const { top: n, right: r, bottom: o, left: s } = e.padding;
    t += `padding: ${n}px ${r}px ${o}px ${s}px;`;
  }
  if (e.margin) {
    const { top: n, right: r, bottom: o, left: s } = e.margin;
    t += `margin: ${n}px ${r}px ${o}px ${s}px;`;
  }
  return e.borderColor && e.borderWidth && (t += `border: ${e.borderWidth}px solid ${e.borderColor};`), e.borderRadius && (t += `border-radius: ${e.borderRadius}px;`), e.opacity !== void 0 && (t += `opacity: ${e.opacity};`), t;
}, Ad = (e, t) => {
  const { format: n, minify: r = !1 } = t;
  switch (n) {
    case "html":
      return Id(Vi(e), r);
    case "json":
      return r ? JSON.stringify(e) : JSON.stringify(e, null, 2);
    case "mjml":
      return Gi(e);
    case "amp":
      return Od(e);
    default:
      return JSON.stringify(e);
  }
}, Gi = (e) => {
  const t = e.elements.map((n) => Dd(n)).join(`
`);
  return `<mjml>
    <mj-head>
      <mj-title>${e.name}</mj-title>
      <mj-preview>${e.previewText || ""}</mj-preview>
      <mj-attributes>
        <mj-all font-family="${e.defaultFontFamily}, sans-serif" />
      </mj-attributes>
    </mj-head>
    <mj-body background-color="${e.defaultBackgroundColor}">
      ${t}
    </mj-body>
  </mjml>`;
}, Dd = (e) => {
  switch (e.type) {
    case "text": {
      const t = e;
      return `<mj-section>
        <mj-column>
          <mj-text font-size="${t.fontSize}px" color="${t.color}">
            ${t.content}
          </mj-text>
        </mj-column>
      </mj-section>`;
    }
    case "image": {
      const t = e;
      return `<mj-section>
        <mj-column>
          <mj-image src="${t.src}" alt="${t.alt}" />
        </mj-column>
      </mj-section>`;
    }
    case "button": {
      const t = e;
      return `<mj-section>
        <mj-column>
          <mj-button href="${t.link}" background-color="${t.backgroundColor}">${t.text}</mj-button>
        </mj-column>
      </mj-section>`;
    }
    default:
      return "";
  }
}, Od = (e) => `<!DOCTYPE html>
  <html ⚡4email>
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"><\/script>
    <style amp4email-boilerplate>body{visibility:hidden}</style>
  </head>
  <body>
    ${e.elements.map((n) => Ho(n)).join(`
`)}
  </body>
  </html>`, Id = (e, t) => t ? e.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim() : e, Bt = (e) => {
  const t = {
    id: Ps(),
    label: e.charAt(0).toUpperCase() + e.slice(1),
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    visible: !0,
    locked: !1
  };
  switch (e) {
    case "heading":
      return {
        ...t,
        type: "text",
        label: "Heading",
        content: "Heading Text",
        fontSize: 32,
        fontFamily: "Arial",
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 1.2,
        letterSpacing: 0,
        color: "#000000",
        textAlign: "left"
      };
    case "text":
      return {
        ...t,
        type: "text",
        content: "Add text here",
        fontSize: 16,
        fontFamily: "Arial",
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 1.5,
        letterSpacing: 0,
        color: "#000000",
        textAlign: "left"
      };
    case "image":
      return {
        ...t,
        type: "image",
        src: "https://picsum.photos/600/400",
        alt: "Image",
        width: "100%",
        autoWidth: !0
        // Enable auto width by default for responsiveness
      };
    case "button":
      return {
        ...t,
        type: "button",
        text: "Click Here",
        link: "https://example.com",
        style: "solid",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: "normal",
        color: "#ffffff",
        backgroundColor: "#0ea5e9",
        padding: { top: 5, right: 10, bottom: 5, left: 10 },
        borderRadius: 6,
        fullWidth: !1,
        width: "auto"
      };
    case "spacer":
      return {
        ...t,
        type: "spacer",
        height: 20
      };
    case "divider":
      return {
        ...t,
        type: "divider",
        height: 1,
        color: "#e5e7eb",
        style: "solid"
      };
    case "section":
      return {
        ...t,
        type: "section",
        children: [],
        width: "100%"
      };
    case "row":
      return {
        ...t,
        type: "row",
        children: [
          // Create default column inside row
          {
            ...Bt("column"),
            id: Ps(),
            width: "100%"
            // Column takes full width of row valid for single column
          }
        ],
        width: "100%",
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
        gap: 0
      };
    case "column":
      return {
        ...t,
        type: "column",
        children: [],
        width: "50%",
        padding: { top: 20, right: 20, bottom: 20, left: 20 }
      };
    default:
      return t;
  }
}, no = {
  advancedElements: !1,
  advancedLayout: !1,
  advancedStyling: !1,
  proTemplates: !1,
  bulkExport: !1,
  integrations: !1,
  analytics: !1,
  teamManagement: !1
}, Ms = {
  advancedElements: !0,
  advancedLayout: !0,
  advancedStyling: !0,
  proTemplates: !0,
  bulkExport: !0,
  integrations: !0,
  analytics: !0,
  teamManagement: !1
}, Yi = kr((e, t) => {
  const n = () => ({
    id: me(),
    name: "New Email",
    elements: [],
    width: 600,
    defaultFontFamily: "Arial",
    defaultFontSize: 16,
    defaultLineHeight: 1.5,
    defaultTextColor: "#000000",
    defaultBackgroundColor: "#ffffff",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  }), r = () => {
    const o = t();
    if (o.currentTemplate) {
      const s = o.history.slice(0, o.historyIndex + 1);
      s.push(JSON.parse(JSON.stringify(o.currentTemplate))), e({
        history: s,
        historyIndex: s.length - 1
      });
    }
  };
  return {
    currentTemplate: null,
    selectedElementId: null,
    zoom: 100,
    isDirty: !1,
    history: [],
    historyIndex: -1,
    showGrid: !1,
    snapToGrid: !1,
    gridSize: 10,
    // Template Actions
    createTemplate: (o, s) => {
      const a = n();
      a.name = o, s && (a.description = s);
      const l = {
        id: me(),
        type: "row",
        label: "Row",
        children: [
          {
            id: me(),
            type: "column",
            label: "Column",
            children: [],
            width: "100%",
            padding: { top: 20, right: 20, bottom: 20, left: 20 },
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
            visible: !0,
            locked: !1
          }
        ],
        width: "100%",
        gap: 10,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        visible: !0,
        locked: !1
      };
      a.elements = [l], e({
        currentTemplate: a,
        selectedElementId: null,
        isDirty: !1,
        history: [a],
        historyIndex: 0
      });
    },
    loadTemplate: (o, s) => {
      let a;
      if (typeof s == "string")
        try {
          a = n(), a.name = "Imported Template";
          const l = Fi(s);
          l && l.length > 0 ? (a.elements = l, console.log("Successfully parsed HTML template with " + l.length + " elements")) : console.warn("HTML parsing yielded no elements. Loading empty.");
        } catch (l) {
          console.error("Failed to parse HTML string:", l), a = n();
        }
      else
        try {
          a = JSON.parse(JSON.stringify(s));
        } catch {
          a = n();
        }
      a.elements || (a.elements = []), e({
        currentTemplate: a,
        selectedElementId: null,
        isDirty: !1,
        history: [a],
        historyIndex: 0
      });
    },
    updateTemplate: (o) => {
      e((s) => ({
        currentTemplate: s.currentTemplate ? { ...s.currentTemplate, ...o, updatedAt: (/* @__PURE__ */ new Date()).toISOString() } : null,
        isDirty: !0
      })), r();
    },
    saveTemplate: () => {
      e({ isDirty: !1 });
    },
    // Element Actions
    addElement: (o) => {
      e((s) => ({
        currentTemplate: s.currentTemplate ? {
          ...s.currentTemplate,
          elements: [...s.currentTemplate.elements, o],
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        } : null,
        isDirty: !0
      })), r();
    },
    addElementAtIndex: (o, s) => {
      e((a) => {
        if (!a.currentTemplate) return a;
        const l = [...a.currentTemplate.elements];
        return l.splice(s, 0, o), {
          currentTemplate: {
            ...a.currentTemplate,
            elements: l,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          selectedElementId: o.id,
          isDirty: !0
        };
      }), r();
    },
    addChildElement: (o, s) => {
      e((a) => {
        if (!a.currentTemplate) return a;
        const l = (d) => d.map((c) => {
          if (c.id === o) {
            const p = "children" in c && c.children ? [...c.children] : [];
            return {
              ...c,
              children: [...p, s]
            };
          }
          return "children" in c && c.children ? {
            ...c,
            children: l(c.children)
          } : c;
        });
        return {
          currentTemplate: {
            ...a.currentTemplate,
            elements: l(a.currentTemplate.elements),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          selectedElementId: s.id,
          isDirty: !0
        };
      }), r();
    },
    updateElement: (o, s) => {
      e((a) => {
        if (!a.currentTemplate) return a;
        const l = (d) => d.map((c) => c.id === o ? { ...c, ...s } : "children" in c && c.children ? {
          ...c,
          children: l(c.children)
        } : c);
        return {
          currentTemplate: {
            ...a.currentTemplate,
            elements: l(a.currentTemplate.elements),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          isDirty: !0
        };
      }), r();
    },
    deleteElement: (o) => {
      e((s) => {
        if (!s.currentTemplate) return s;
        const a = (l) => l.filter((d) => d.id !== o).map((d) => "children" in d && d.children ? {
          ...d,
          children: a(d.children)
        } : d);
        return {
          currentTemplate: {
            ...s.currentTemplate,
            elements: a(s.currentTemplate.elements),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          selectedElementId: s.selectedElementId === o ? null : s.selectedElementId,
          isDirty: !0
        };
      }), r();
    },
    selectElement: (o) => {
      e({ selectedElementId: o });
    },
    duplicateElement: (o) => {
      const s = t();
      if (!s.currentTemplate) return;
      const a = (d) => {
        for (const c of d) {
          if (c.id === o) {
            const p = (u) => {
              const m = { ...u, id: me() };
              return "children" in m && m.children && (m.children = m.children.map(p)), m;
            };
            return p(c);
          }
          if ("children" in c && c.children) {
            const p = a(c.children);
            if (p) return p;
          }
        }
        return null;
      }, l = a(s.currentTemplate.elements);
      l && (e((d) => {
        if (!d.currentTemplate) return d;
        const c = (p) => {
          const u = p.findIndex((m) => m.id === o);
          if (u !== -1) {
            const m = [...p];
            return m.splice(u + 1, 0, l), m;
          }
          return p.map((m) => "children" in m && m.children ? {
            ...m,
            children: c(m.children)
          } : m);
        };
        return {
          currentTemplate: {
            ...d.currentTemplate,
            elements: c(d.currentTemplate.elements),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          isDirty: !0
        };
      }), r());
    },
    reorderElements: (o, s) => {
      e((a) => {
        if (!a.currentTemplate) return a;
        const l = [...a.currentTemplate.elements], [d] = l.splice(o, 1);
        return l.splice(s, 0, d), {
          currentTemplate: {
            ...a.currentTemplate,
            elements: l,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          isDirty: !0
        };
      }), r();
    },
    moveElement: (o, s) => {
      e((a) => {
        if (!a.currentTemplate) return a;
        const l = JSON.parse(JSON.stringify(a.currentTemplate.elements)), d = (b, w) => ({
          root: ["row", "section"],
          row: ["column"],
          column: ["text", "image", "button", "divider", "spacer", "heading", "video", "html"],
          section: ["row"]
        })[w]?.includes(b) ?? !1, c = (b, w) => {
          for (const S of b) {
            if (S.id === w) return S;
            if ("children" in S && S.children) {
              const N = c(S.children, w);
              if (N) return N;
            }
          }
          return null;
        }, p = (b, w, S = null) => {
          for (let N = 0; N < b.length; N++) {
            if (b[N].id === w)
              return { container: b, index: N, parentElement: S };
            if ("children" in b[N] && b[N].children) {
              const E = p(b[N].children, w, b[N]);
              if (E.container) return E;
            }
          }
          return { container: null, index: -1, parentElement: null };
        }, u = c(l, o), m = c(l, s);
        if (!u || !m) return a;
        const h = p(l, o);
        let x = p(l, s);
        if (!h.container) return a;
        if (u.type === "row") {
          let b = m, w = x.parentElement;
          for (; b && b.type !== "row" && w; )
            b = w, w = p(l, b.id).parentElement;
          if (b && b.type === "row" && b.id !== o)
            x = p(l, b.id);
          else if (m.type !== "row")
            return a;
        }
        if (!x.container) return a;
        const f = h.parentElement?.id ?? "root", v = x.parentElement?.id ?? "root";
        if (f === v) {
          const b = h.parentElement ? h.parentElement.type : "root", w = h.container[h.index].type;
          if (!d(w, b))
            return console.warn(`Cannot reorder ${w} in ${b}`), a;
          const S = h.index, N = x.index;
          if (S === N || Math.abs(S - N) === 1 && N < S && h.container[N].id === s)
            return a;
          const [E] = h.container.splice(S, 1);
          h.container.splice(N, 0, E);
        } else {
          const b = x.parentElement ? x.parentElement.type : "root", w = h.container[h.index].type;
          if (!d(w, b))
            return console.warn(`Cannot move ${w} into ${b}`), a;
          const [S] = h.container.splice(h.index, 1), N = p(l, s);
          N.container ? N.container.splice(N.index, 0, S) : h.container.splice(h.index, 0, S);
        }
        return {
          currentTemplate: {
            ...a.currentTemplate,
            elements: l,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          isDirty: !0
        };
      }), r();
    },
    updateRowLayout: (o, s) => {
      e((a) => {
        if (!a.currentTemplate) return a;
        const l = (d) => d.map((c) => {
          if (c.id === o && c.type === "row") {
            let p = "children" in c && c.children ? [...c.children] : [];
            if (p.length < s.length) {
              const u = s.length - p.length;
              for (let m = 0; m < u; m++)
                p.push({
                  id: me(),
                  type: "column",
                  label: "Column",
                  children: [],
                  width: s[p.length],
                  padding: { top: 20, right: 20, bottom: 20, left: 20 },
                  margin: { top: 0, right: 0, bottom: 0, left: 0 },
                  visible: !0,
                  locked: !1
                });
            } else p.length > s.length && (p = p.slice(0, s.length));
            return p = p.map((u, m) => {
              const h = u.padding && u.padding.top === 0 && u.padding.right === 0 && u.padding.bottom === 0 && u.padding.left === 0, x = !u.padding || h ? { top: 20, right: 20, bottom: 20, left: 20 } : u.padding;
              return {
                ...u,
                width: s[m],
                padding: x
              };
            }), {
              ...c,
              children: p
            };
          }
          return "children" in c && c.children ? {
            ...c,
            children: l(c.children)
          } : c;
        });
        return {
          currentTemplate: {
            ...a.currentTemplate,
            elements: l(a.currentTemplate.elements),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          isDirty: !0
        };
      }), r();
    },
    deleteColumn: (o, s) => {
      e((a) => {
        if (!a.currentTemplate) return a;
        const l = (d) => d.map((c) => {
          if (c.id === o && c.type === "row") {
            const u = ("children" in c && c.children ? [...c.children] : []).filter((x) => x.id !== s);
            if (u.length === 0)
              return null;
            const m = `${(100 / u.length).toFixed(2)}%`, h = u.map((x) => ({
              ...x,
              width: m
            }));
            return {
              ...c,
              children: h
            };
          }
          return "children" in c && c.children ? {
            ...c,
            children: l(c.children)
          } : c;
        }).filter((c) => c !== null);
        return {
          currentTemplate: {
            ...a.currentTemplate,
            elements: l(a.currentTemplate.elements),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          isDirty: !0,
          selectedElementId: a.selectedElementId === s ? null : a.selectedElementId
        };
      }), r();
    },
    // Editor State Actions
    setZoom: (o) => e({ zoom: o }),
    setShowGrid: (o) => e({ showGrid: o }),
    setSnapToGrid: (o) => e({ snapToGrid: o }),
    setGridSize: (o) => e({ gridSize: o }),
    // History Actions
    undo: () => {
      const o = t();
      if (o.historyIndex > 0) {
        const s = o.historyIndex - 1;
        e({
          currentTemplate: o.history[s],
          historyIndex: s,
          isDirty: !0
        });
      }
    },
    redo: () => {
      const o = t();
      if (o.historyIndex < o.history.length - 1) {
        const s = o.historyIndex + 1;
        e({
          currentTemplate: o.history[s],
          historyIndex: s,
          isDirty: !0
        });
      }
    },
    clearHistory: () => {
      e({ history: [], historyIndex: -1 });
    },
    reset: () => {
      e({
        currentTemplate: null,
        selectedElementId: null,
        zoom: 100,
        isDirty: !1,
        history: [],
        historyIndex: -1,
        showGrid: !1,
        snapToGrid: !1
      });
    }
  };
}), _d = kr((e) => ({
  currentUser: null,
  features: no,
  setUser: (t) => {
    const n = t.plan === "pro" ? Ms : no;
    e({ currentUser: t, features: n });
  },
  setFeatures: (t) => {
    e({ features: t });
  },
  upgradeToPro: () => {
    e((t) => ({
      currentUser: t.currentUser ? { ...t.currentUser, plan: "pro" } : null,
      features: Ms
    }));
  },
  logout: () => {
    e({ currentUser: null, features: no });
  }
})), Ui = kr((e, t) => ({
  templates: [],
  addTemplate: (n) => {
    e((r) => ({
      templates: [...r.templates, n]
    }));
  },
  removeTemplate: (n) => {
    e((r) => ({
      templates: r.templates.filter((o) => o.id !== n)
    }));
  },
  updateTemplate: (n, r) => {
    e((o) => ({
      templates: o.templates.map(
        (s) => s.id === n ? { ...s, ...r } : s
      )
    }));
  },
  getTemplate: (n) => t().templates.find((r) => r.id === n)
})), In = kr((e, t) => ({
  mergeTags: [],
  mergeTagTriggers: [],
  setMergeTags: (n) => {
    const r = t().mergeTags;
    JSON.stringify(r) !== JSON.stringify(n) && e({ mergeTags: n });
  },
  setMergeTagTriggers: (n) => {
    const r = t().mergeTagTriggers;
    JSON.stringify(r) !== JSON.stringify(n) && e({ mergeTagTriggers: n });
  },
  getMergeTagsByTrigger: (n) => t().mergeTags.filter((r) => r.trigger === n)
}));
function Ls(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function an(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Ls(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Ls(e[o], null);
        }
      };
  };
}
function Ee(...e) {
  return g.useCallback(an(...e), e);
}
var Pd = /* @__PURE__ */ Symbol.for("react.lazy"), dr = g[" use ".trim().toString()];
function Md(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Ki(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Pd && "_payload" in e && Md(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Vo(e) {
  const t = /* @__PURE__ */ $d(e), n = g.forwardRef((r, o) => {
    let { children: s, ...a } = r;
    Ki(s) && typeof dr == "function" && (s = dr(s._payload));
    const l = g.Children.toArray(s), d = l.find(Bd);
    if (d) {
      const c = d.props.children, p = l.map((u) => u === d ? g.Children.count(c) > 1 ? g.Children.only(null) : g.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: g.isValidElement(c) ? g.cloneElement(c, void 0, p) : null });
    }
    return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ld = /* @__PURE__ */ Vo("Slot");
// @__NO_SIDE_EFFECTS__
function $d(e) {
  const t = g.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (Ki(o) && typeof dr == "function" && (o = dr(o._payload)), g.isValidElement(o)) {
      const a = Wd(o), l = zd(s, o.props);
      return o.type !== g.Fragment && (l.ref = r ? an(r, a) : a), g.cloneElement(o, l);
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Fd = /* @__PURE__ */ Symbol("radix.slottable");
function Bd(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fd;
}
function zd(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
      const d = s(...l);
      return o(...l), d;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Wd(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Xi(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Xi(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function St() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Xi(e)) && (r && (r += " "), r += t);
  return r;
}
const $s = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Fs = St, qi = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Fs(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((c) => {
    const p = n?.[c], u = s?.[c];
    if (p === null) return null;
    const m = $s(p) || $s(u);
    return o[c][m];
  }), l = n && Object.entries(n).reduce((c, p) => {
    let [u, m] = p;
    return m === void 0 || (c[u] = m), c;
  }, {}), d = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, p) => {
    let { class: u, className: m, ...h } = p;
    return Object.entries(h).every((x) => {
      let [f, v] = x;
      return Array.isArray(v) ? v.includes({
        ...s,
        ...l
      }[f]) : {
        ...s,
        ...l
      }[f] === v;
    }) ? [
      ...c,
      u,
      m
    ] : c;
  }, []);
  return Fs(e, a, d, n?.class, n?.className);
}, Hd = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Vd = (e, t) => ({
  classGroupId: e,
  validator: t
}), Ji = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), ur = "-", Bs = [], Gd = "arbitrary..", Yd = (e) => {
  const t = Kd(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return Ud(a);
      const l = a.split(ur), d = l[0] === "" && l.length > 1 ? 1 : 0;
      return Zi(l, d, t);
    },
    getConflictingClassGroupIds: (a, l) => {
      if (l) {
        const d = r[a], c = n[a];
        return d ? c ? Hd(c, d) : d : c || Bs;
      }
      return n[a] || Bs;
    }
  };
}, Zi = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const c = Zi(e, t + 1, s);
    if (c) return c;
  }
  const a = n.validators;
  if (a === null)
    return;
  const l = t === 0 ? e.join(ur) : e.slice(t).join(ur), d = a.length;
  for (let c = 0; c < d; c++) {
    const p = a[c];
    if (p.validator(l))
      return p.classGroupId;
  }
}, Ud = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Gd + r : void 0;
})(), Kd = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Xd(n, t);
}, Xd = (e, t) => {
  const n = Ji();
  for (const r in e) {
    const o = e[r];
    Go(o, n, r, t);
  }
  return n;
}, Go = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const a = e[s];
    qd(a, t, n, r);
  }
}, qd = (e, t, n, r) => {
  if (typeof e == "string") {
    Jd(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Zd(e, t, n, r);
    return;
  }
  Qd(e, t, n, r);
}, Jd = (e, t, n) => {
  const r = e === "" ? t : Qi(t, e);
  r.classGroupId = n;
}, Zd = (e, t, n, r) => {
  if (eu(e)) {
    Go(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Vd(n, e));
}, Qd = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let a = 0; a < s; a++) {
    const [l, d] = o[a];
    Go(d, Qi(t, l), n, r);
  }
}, Qi = (e, t) => {
  let n = e;
  const r = t.split(ur), o = r.length;
  for (let s = 0; s < o; s++) {
    const a = r[s];
    let l = n.nextPart.get(a);
    l || (l = Ji(), n.nextPart.set(a, l)), n = l;
  }
  return n;
}, eu = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, tu = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (s, a) => {
    n[s] = a, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let a = n[s];
      if (a !== void 0)
        return a;
      if ((a = r[s]) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      s in n ? n[s] = a : o(s, a);
    }
  };
}, So = "!", zs = ":", nu = [], Ws = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), ru = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, l = 0, d = 0, c;
    const p = o.length;
    for (let f = 0; f < p; f++) {
      const v = o[f];
      if (a === 0 && l === 0) {
        if (v === zs) {
          s.push(o.slice(d, f)), d = f + 1;
          continue;
        }
        if (v === "/") {
          c = f;
          continue;
        }
      }
      v === "[" ? a++ : v === "]" ? a-- : v === "(" ? l++ : v === ")" && l--;
    }
    const u = s.length === 0 ? o : o.slice(d);
    let m = u, h = !1;
    u.endsWith(So) ? (m = u.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(So) && (m = u.slice(1), h = !0)
    );
    const x = c && c > d ? c - d : void 0;
    return Ws(s, h, m, x);
  };
  if (t) {
    const o = t + zs, s = r;
    r = (a) => a.startsWith(o) ? s(a.slice(o.length)) : Ws(nu, !1, a, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, ou = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let s = 0; s < n.length; s++) {
      const a = n[s], l = a[0] === "[", d = t.has(a);
      l || d ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, su = (e) => ({
  cache: tu(e.cacheSize),
  parseClassName: ru(e),
  sortModifiers: ou(e),
  ...Yd(e)
}), iu = /\s+/, au = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], l = e.trim().split(iu);
  let d = "";
  for (let c = l.length - 1; c >= 0; c -= 1) {
    const p = l[c], {
      isExternal: u,
      modifiers: m,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: f
    } = n(p);
    if (u) {
      d = p + (d.length > 0 ? " " + d : d);
      continue;
    }
    let v = !!f, y = r(v ? x.substring(0, f) : x);
    if (!y) {
      if (!v) {
        d = p + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (y = r(x), !y) {
        d = p + (d.length > 0 ? " " + d : d);
        continue;
      }
      v = !1;
    }
    const b = m.length === 0 ? "" : m.length === 1 ? m[0] : s(m).join(":"), w = h ? b + So : b, S = w + y;
    if (a.indexOf(S) > -1)
      continue;
    a.push(S);
    const N = o(y, v);
    for (let E = 0; E < N.length; ++E) {
      const C = N[E];
      a.push(w + C);
    }
    d = p + (d.length > 0 ? " " + d : d);
  }
  return d;
}, lu = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = ea(n)) && (o && (o += " "), o += r);
  return o;
}, ea = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ea(e[r])) && (n && (n += " "), n += t);
  return n;
}, cu = (e, ...t) => {
  let n, r, o, s;
  const a = (d) => {
    const c = t.reduce((p, u) => u(p), e());
    return n = su(c), r = n.cache.get, o = n.cache.set, s = l, l(d);
  }, l = (d) => {
    const c = r(d);
    if (c)
      return c;
    const p = au(d, n);
    return o(d, p), p;
  };
  return s = a, (...d) => s(lu(...d));
}, du = [], De = (e) => {
  const t = (n) => n[e] || du;
  return t.isThemeGetter = !0, t;
}, ta = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, na = /^\((?:(\w[\w-]*):)?(.+)\)$/i, uu = /^\d+\/\d+$/, fu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, pu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, mu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, gu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Jt = (e) => uu.test(e), se = (e) => !!e && !Number.isNaN(Number(e)), Tt = (e) => !!e && Number.isInteger(Number(e)), ro = (e) => e.endsWith("%") && se(e.slice(0, -1)), Ct = (e) => fu.test(e), xu = () => !0, vu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  pu.test(e) && !hu.test(e)
), ra = () => !1, bu = (e) => mu.test(e), yu = (e) => gu.test(e), wu = (e) => !G(e) && !Y(e), Cu = (e) => ln(e, ia, ra), G = (e) => ta.test(e), Ft = (e) => ln(e, aa, vu), oo = (e) => ln(e, Ru, se), Hs = (e) => ln(e, oa, ra), Su = (e) => ln(e, sa, yu), Un = (e) => ln(e, la, bu), Y = (e) => na.test(e), wn = (e) => cn(e, aa), Nu = (e) => cn(e, ku), Vs = (e) => cn(e, oa), ju = (e) => cn(e, ia), Eu = (e) => cn(e, sa), Kn = (e) => cn(e, la, !0), ln = (e, t, n) => {
  const r = ta.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, cn = (e, t, n = !1) => {
  const r = na.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, oa = (e) => e === "position" || e === "percentage", sa = (e) => e === "image" || e === "url", ia = (e) => e === "length" || e === "size" || e === "bg-size", aa = (e) => e === "length", Ru = (e) => e === "number", ku = (e) => e === "family-name", la = (e) => e === "shadow", Tu = () => {
  const e = De("color"), t = De("font"), n = De("text"), r = De("font-weight"), o = De("tracking"), s = De("leading"), a = De("breakpoint"), l = De("container"), d = De("spacing"), c = De("radius"), p = De("shadow"), u = De("inset-shadow"), m = De("text-shadow"), h = De("drop-shadow"), x = De("blur"), f = De("perspective"), v = De("aspect"), y = De("ease"), b = De("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], N = () => [...S(), Y, G], E = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", "contain", "none"], j = () => [Y, G, d], O = () => [Jt, "full", "auto", ...j()], A = () => [Tt, "none", "subgrid", Y, G], P = () => ["auto", {
    span: ["full", Tt, Y, G]
  }, Tt, Y, G], z = () => [Tt, "auto", Y, G], V = () => ["auto", "min", "max", "fr", Y, G], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...j()], M = () => [Jt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()], T = () => [e, Y, G], K = () => [...S(), Vs, Hs, {
    position: [Y, G]
  }], oe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", ju, Cu, {
    size: [Y, G]
  }], F = () => [ro, wn, Ft], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    Y,
    G
  ], $ = () => ["", se, wn, Ft], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [se, ro, Vs, Hs], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    Y,
    G
  ], te = () => ["none", se, Y, G], W = () => ["none", se, Y, G], ne = () => [se, Y, G], Q = () => [Jt, "full", ...j()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ct],
      breakpoint: [Ct],
      color: [xu],
      container: [Ct],
      "drop-shadow": [Ct],
      ease: ["in", "out", "in-out"],
      font: [wu],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ct],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ct],
      shadow: [Ct],
      spacing: ["px", se],
      text: [Ct],
      "text-shadow": [Ct],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Jt, G, Y, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [se, G, Y, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: N()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Tt, "auto", Y, G]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Jt, "full", "auto", l, ...j()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [se, Jt, "auto", "initial", "none", G]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", se, Y, G]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", se, Y, G]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Tt, "first", "last", "none", Y, G]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: P()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: P()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": V()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": V()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: j()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": j()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": j()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...B(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...B()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": B()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: j()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: j()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: j()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: j()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: j()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: j()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: j()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: j()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: j()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: I()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: I()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: I()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: I()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: I()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: I()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: I()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: I()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: I()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": j()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": j()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: M()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...M()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...M()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...M()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...M()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...M()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...M()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, wn, Ft]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, Y, oo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ro, G]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nu, G, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, Y, G]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [se, "none", Y, oo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...j()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y, G]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Y, G]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [se, "from-font", "auto", Y, Ft]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [se, "auto", Y, G]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y, G]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Y, G]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: K()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: oe()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: R()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Tt, Y, G],
          radial: ["", Y, G],
          conic: [Tt, Y, G]
        }, Eu, Su]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: F()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: F()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: F()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: _()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": _()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": _()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": _()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": _()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": _()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": _()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": _()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": _()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": _()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": _()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": _()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": _()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": _()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": _()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": $()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Z(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [se, Y, G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", se, wn, Ft]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Kn,
          Un
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Kn, Un]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [se, Ft]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Kn, Un]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [se, Y, G]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [se]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": D()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": D()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": D()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": D()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": D()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": D()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": D()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [Y, G]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [se]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": D()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: K()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: oe()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: R()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", Y, G]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Y,
          G
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [se, Y, G]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [se, Y, G]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          Kn,
          Un
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", se, Y, G]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [se, Y, G]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", se, Y, G]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [se, Y, G]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", se, Y, G]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Y,
          G
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [se, Y, G]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [se, Y, G]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", se, Y, G]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [se, Y, G]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", se, Y, G]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [se, Y, G]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [se, Y, G]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", se, Y, G]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": j()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": j()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": j()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Y, G]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [se, "initial", Y, G]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, Y, G]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [se, Y, G]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, Y, G]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [f, Y, G]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: te()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": te()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": te()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": te()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: W()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": W()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": W()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": W()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ne()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ne()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ne()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Y, G, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: N()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Q()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Q()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Q()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Q()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: T()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: T()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y, G]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Y, G]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [se, wn, Ft, oo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Au = /* @__PURE__ */ cu(Tu);
function ue(...e) {
  return Au(St(e));
}
const Du = qi(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), We = g.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
    const a = r ? Ld : "button";
    return /* @__PURE__ */ i.jsx(
      a,
      {
        className: ue(Du({ variant: t, size: n, className: e })),
        ref: s,
        ...o
      }
    );
  }
);
We.displayName = "Button";
function Ou(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Iu = (e) => {
  switch (e) {
    case "success":
      return Mu;
    case "info":
      return $u;
    case "warning":
      return Lu;
    case "error":
      return Fu;
    default:
      return null;
  }
}, _u = Array(12).fill(0), Pu = ({ visible: e, className: t }) => /* @__PURE__ */ k.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ k.createElement("div", {
  className: "sonner-spinner"
}, _u.map((n, r) => /* @__PURE__ */ k.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), Mu = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ k.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), Lu = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ k.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), $u = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ k.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), Fu = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ k.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), Bu = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ k.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ k.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), zu = () => {
  const [e, t] = k.useState(document.hidden);
  return k.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let No = 1;
class Wu {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      const n = this.subscribers.indexOf(t);
      this.subscribers.splice(n, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((n) => n(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [
        ...this.toasts,
        t
      ];
    }, this.create = (t) => {
      var n;
      const { message: r, ...o } = t, s = typeof t?.id == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : No++, a = this.toasts.find((d) => d.id === s), l = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), a ? this.toasts = this.toasts.map((d) => d.id === s ? (this.publish({
        ...d,
        ...t,
        id: s,
        title: r
      }), {
        ...d,
        ...t,
        id: s,
        dismissible: l,
        title: r
      }) : d) : this.addToast({
        title: r,
        ...o,
        dismissible: l,
        id: s
      }), s;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((n) => n({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({
        id: n.id,
        dismiss: !0
      }));
    }), t), this.message = (t, n) => this.create({
      ...n,
      message: t
    }), this.error = (t, n) => this.create({
      ...n,
      message: t,
      type: "error"
    }), this.success = (t, n) => this.create({
      ...n,
      type: "success",
      message: t
    }), this.info = (t, n) => this.create({
      ...n,
      type: "info",
      message: t
    }), this.warning = (t, n) => this.create({
      ...n,
      type: "warning",
      message: t
    }), this.loading = (t, n) => this.create({
      ...n,
      type: "loading",
      message: t
    }), this.promise = (t, n) => {
      if (!n)
        return;
      let r;
      n.loading !== void 0 && (r = this.create({
        ...n,
        promise: t,
        type: "loading",
        message: n.loading,
        description: typeof n.description != "function" ? n.description : void 0
      }));
      const o = Promise.resolve(t instanceof Function ? t() : t);
      let s = r !== void 0, a;
      const l = o.then(async (c) => {
        if (a = [
          "resolve",
          c
        ], k.isValidElement(c))
          s = !1, this.create({
            id: r,
            type: "default",
            message: c
          });
        else if (Vu(c) && !c.ok) {
          s = !1;
          const u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, m = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, x = typeof u == "object" && !k.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...x
          });
        } else if (c instanceof Error) {
          s = !1;
          const u = typeof n.error == "function" ? await n.error(c) : n.error, m = typeof n.description == "function" ? await n.description(c) : n.description, x = typeof u == "object" && !k.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...x
          });
        } else if (n.success !== void 0) {
          s = !1;
          const u = typeof n.success == "function" ? await n.success(c) : n.success, m = typeof n.description == "function" ? await n.description(c) : n.description, x = typeof u == "object" && !k.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "success",
            description: m,
            ...x
          });
        }
      }).catch(async (c) => {
        if (a = [
          "reject",
          c
        ], n.error !== void 0) {
          s = !1;
          const p = typeof n.error == "function" ? await n.error(c) : n.error, u = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof p == "object" && !k.isValidElement(p) ? p : {
            message: p
          };
          this.create({
            id: r,
            type: "error",
            description: u,
            ...h
          });
        }
      }).finally(() => {
        s && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), d = () => new Promise((c, p) => l.then(() => a[0] === "reject" ? p(a[1]) : c(a[1])).catch(p));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: d
      } : Object.assign(r, {
        unwrap: d
      });
    }, this.custom = (t, n) => {
      const r = n?.id || No++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Ve = new Wu(), Hu = (e, t) => {
  const n = t?.id || No++;
  return Ve.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, Vu = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Gu = Hu, Yu = () => Ve.toasts, Uu = () => Ve.getActiveToasts(), or = Object.assign(Gu, {
  success: Ve.success,
  info: Ve.info,
  warning: Ve.warning,
  error: Ve.error,
  custom: Ve.custom,
  message: Ve.message,
  promise: Ve.promise,
  dismiss: Ve.dismiss,
  loading: Ve.loading
}, {
  getHistory: Yu,
  getToasts: Uu
});
Ou("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Xn(e) {
  return e.label !== void 0;
}
const Ku = 3, Xu = "24px", qu = "16px", Gs = 4e3, Ju = 356, Zu = 14, Qu = 45, ef = 200;
function lt(...e) {
  return e.filter(Boolean).join(" ");
}
function tf(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const nf = (e) => {
  var t, n, r, o, s, a, l, d, c;
  const { invert: p, toast: u, unstyled: m, interacting: h, setHeights: x, visibleToasts: f, heights: v, index: y, toasts: b, expanded: w, removeToast: S, defaultRichColors: N, closeButton: E, style: C, cancelButtonStyle: j, actionButtonStyle: O, className: A = "", descriptionClassName: P = "", duration: z, position: V, gap: B, expandByDefault: q, classNames: I, icons: M, closeButtonAriaLabel: T = "Close toast" } = e, [K, oe] = k.useState(null), [R, F] = k.useState(null), [_, $] = k.useState(!1), [Z, ee] = k.useState(!1), [D, H] = k.useState(!1), [te, W] = k.useState(!1), [ne, Q] = k.useState(!1), [Se, Ne] = k.useState(0), [L, U] = k.useState(0), re = k.useRef(u.duration || z || Gs), Fe = k.useRef(null), Re = k.useRef(null), Be = y === 0, qe = y + 1 <= f, Ie = u.type, gt = u.dismissible !== !1, zn = u.className || "", Gr = u.descriptionClassName || "", Kt = k.useMemo(() => v.findIndex((X) => X.toastId === u.id) || 0, [
    v,
    u.id
  ]), Rt = k.useMemo(() => {
    var X;
    return (X = u.closeButton) != null ? X : E;
  }, [
    u.closeButton,
    E
  ]), xt = k.useMemo(() => u.duration || z || Gs, [
    u.duration,
    z
  ]), vt = k.useRef(0), bt = k.useRef(0), Ze = k.useRef(0), yt = k.useRef(null), [Yr, Ur] = V.split("-"), Xt = k.useMemo(() => v.reduce((X, be, xe) => xe >= Kt ? X : X + be.height, 0), [
    v,
    Kt
  ]), xn = zu(), Kr = u.invert || p, qt = Ie === "loading";
  bt.current = k.useMemo(() => Kt * B + Xt, [
    Kt,
    Xt
  ]), k.useEffect(() => {
    re.current = xt;
  }, [
    xt
  ]), k.useEffect(() => {
    $(!0);
  }, []), k.useEffect(() => {
    const X = Re.current;
    if (X) {
      const be = X.getBoundingClientRect().height;
      return U(be), x((xe) => [
        {
          toastId: u.id,
          height: be,
          position: u.position
        },
        ...xe
      ]), () => x((xe) => xe.filter((ye) => ye.toastId !== u.id));
    }
  }, [
    x,
    u.id
  ]), k.useLayoutEffect(() => {
    if (!_) return;
    const X = Re.current, be = X.style.height;
    X.style.height = "auto";
    const xe = X.getBoundingClientRect().height;
    X.style.height = be, U(xe), x((ye) => ye.find((Ce) => Ce.toastId === u.id) ? ye.map((Ce) => Ce.toastId === u.id ? {
      ...Ce,
      height: xe
    } : Ce) : [
      {
        toastId: u.id,
        height: xe,
        position: u.position
      },
      ...ye
    ]);
  }, [
    _,
    u.title,
    u.description,
    x,
    u.id,
    u.jsx,
    u.action,
    u.cancel
  ]);
  const at = k.useCallback(() => {
    ee(!0), Ne(bt.current), x((X) => X.filter((be) => be.toastId !== u.id)), setTimeout(() => {
      S(u);
    }, ef);
  }, [
    u,
    S,
    x,
    bt
  ]);
  k.useEffect(() => {
    if (u.promise && Ie === "loading" || u.duration === 1 / 0 || u.type === "loading") return;
    let X;
    return w || h || xn ? (() => {
      if (Ze.current < vt.current) {
        const ye = (/* @__PURE__ */ new Date()).getTime() - vt.current;
        re.current = re.current - ye;
      }
      Ze.current = (/* @__PURE__ */ new Date()).getTime();
    })() : re.current !== 1 / 0 && (vt.current = (/* @__PURE__ */ new Date()).getTime(), X = setTimeout(() => {
      u.onAutoClose == null || u.onAutoClose.call(u, u), at();
    }, re.current)), () => clearTimeout(X);
  }, [
    w,
    h,
    u,
    Ie,
    xn,
    at
  ]), k.useEffect(() => {
    u.delete && (at(), u.onDismiss == null || u.onDismiss.call(u, u));
  }, [
    at,
    u.delete
  ]);
  function Xr() {
    var X;
    if (M?.loading) {
      var be;
      return /* @__PURE__ */ k.createElement("div", {
        className: lt(I?.loader, u == null || (be = u.classNames) == null ? void 0 : be.loader, "sonner-loader"),
        "data-visible": Ie === "loading"
      }, M.loading);
    }
    return /* @__PURE__ */ k.createElement(Pu, {
      className: lt(I?.loader, u == null || (X = u.classNames) == null ? void 0 : X.loader),
      visible: Ie === "loading"
    });
  }
  const qr = u.icon || M?.[Ie] || Iu(Ie);
  var Ae, Le;
  return /* @__PURE__ */ k.createElement("li", {
    tabIndex: 0,
    ref: Re,
    className: lt(A, zn, I?.toast, u == null || (t = u.classNames) == null ? void 0 : t.toast, I?.default, I?.[Ie], u == null || (n = u.classNames) == null ? void 0 : n[Ie]),
    "data-sonner-toast": "",
    "data-rich-colors": (Ae = u.richColors) != null ? Ae : N,
    "data-styled": !(u.jsx || u.unstyled || m),
    "data-mounted": _,
    "data-promise": !!u.promise,
    "data-swiped": ne,
    "data-removed": Z,
    "data-visible": qe,
    "data-y-position": Yr,
    "data-x-position": Ur,
    "data-index": y,
    "data-front": Be,
    "data-swiping": D,
    "data-dismissible": gt,
    "data-type": Ie,
    "data-invert": Kr,
    "data-swipe-out": te,
    "data-swipe-direction": R,
    "data-expanded": !!(w || q && _),
    "data-testid": u.testId,
    style: {
      "--index": y,
      "--toasts-before": y,
      "--z-index": b.length - y,
      "--offset": `${Z ? Se : bt.current}px`,
      "--initial-height": q ? "auto" : `${L}px`,
      ...C,
      ...u.style
    },
    onDragEnd: () => {
      H(!1), oe(null), yt.current = null;
    },
    onPointerDown: (X) => {
      X.button !== 2 && (qt || !gt || (Fe.current = /* @__PURE__ */ new Date(), Ne(bt.current), X.target.setPointerCapture(X.pointerId), X.target.tagName !== "BUTTON" && (H(!0), yt.current = {
        x: X.clientX,
        y: X.clientY
      })));
    },
    onPointerUp: () => {
      var X, be, xe;
      if (te || !gt) return;
      yt.current = null;
      const ye = Number(((X = Re.current) == null ? void 0 : X.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), ze = Number(((be = Re.current) == null ? void 0 : be.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ce = (/* @__PURE__ */ new Date()).getTime() - ((xe = Fe.current) == null ? void 0 : xe.getTime()), ge = K === "x" ? ye : ze, Ge = Math.abs(ge) / Ce;
      if (Math.abs(ge) >= Qu || Ge > 0.11) {
        Ne(bt.current), u.onDismiss == null || u.onDismiss.call(u, u), F(K === "x" ? ye > 0 ? "right" : "left" : ze > 0 ? "down" : "up"), at(), W(!0);
        return;
      } else {
        var je, ke;
        (je = Re.current) == null || je.style.setProperty("--swipe-amount-x", "0px"), (ke = Re.current) == null || ke.style.setProperty("--swipe-amount-y", "0px");
      }
      Q(!1), H(!1), oe(null);
    },
    onPointerMove: (X) => {
      var be, xe, ye;
      if (!yt.current || !gt || ((be = window.getSelection()) == null ? void 0 : be.toString().length) > 0) return;
      const Ce = X.clientY - yt.current.y, ge = X.clientX - yt.current.x;
      var Ge;
      const je = (Ge = e.swipeDirections) != null ? Ge : tf(V);
      !K && (Math.abs(ge) > 1 || Math.abs(Ce) > 1) && oe(Math.abs(ge) > Math.abs(Ce) ? "x" : "y");
      let ke = {
        x: 0,
        y: 0
      };
      const kt = (Ye) => 1 / (1.5 + Math.abs(Ye) / 20);
      if (K === "y") {
        if (je.includes("top") || je.includes("bottom"))
          if (je.includes("top") && Ce < 0 || je.includes("bottom") && Ce > 0)
            ke.y = Ce;
          else {
            const Ye = Ce * kt(Ce);
            ke.y = Math.abs(Ye) < Math.abs(Ce) ? Ye : Ce;
          }
      } else if (K === "x" && (je.includes("left") || je.includes("right")))
        if (je.includes("left") && ge < 0 || je.includes("right") && ge > 0)
          ke.x = ge;
        else {
          const Ye = ge * kt(ge);
          ke.x = Math.abs(Ye) < Math.abs(ge) ? Ye : ge;
        }
      (Math.abs(ke.x) > 0 || Math.abs(ke.y) > 0) && Q(!0), (xe = Re.current) == null || xe.style.setProperty("--swipe-amount-x", `${ke.x}px`), (ye = Re.current) == null || ye.style.setProperty("--swipe-amount-y", `${ke.y}px`);
    }
  }, Rt && !u.jsx && Ie !== "loading" ? /* @__PURE__ */ k.createElement("button", {
    "aria-label": T,
    "data-disabled": qt,
    "data-close-button": !0,
    onClick: qt || !gt ? () => {
    } : () => {
      at(), u.onDismiss == null || u.onDismiss.call(u, u);
    },
    className: lt(I?.closeButton, u == null || (r = u.classNames) == null ? void 0 : r.closeButton)
  }, (Le = M?.close) != null ? Le : Bu) : null, (Ie || u.icon || u.promise) && u.icon !== null && (M?.[Ie] !== null || u.icon) ? /* @__PURE__ */ k.createElement("div", {
    "data-icon": "",
    className: lt(I?.icon, u == null || (o = u.classNames) == null ? void 0 : o.icon)
  }, u.promise || u.type === "loading" && !u.icon ? u.icon || Xr() : null, u.type !== "loading" ? qr : null) : null, /* @__PURE__ */ k.createElement("div", {
    "data-content": "",
    className: lt(I?.content, u == null || (s = u.classNames) == null ? void 0 : s.content)
  }, /* @__PURE__ */ k.createElement("div", {
    "data-title": "",
    className: lt(I?.title, u == null || (a = u.classNames) == null ? void 0 : a.title)
  }, u.jsx ? u.jsx : typeof u.title == "function" ? u.title() : u.title), u.description ? /* @__PURE__ */ k.createElement("div", {
    "data-description": "",
    className: lt(P, Gr, I?.description, u == null || (l = u.classNames) == null ? void 0 : l.description)
  }, typeof u.description == "function" ? u.description() : u.description) : null), /* @__PURE__ */ k.isValidElement(u.cancel) ? u.cancel : u.cancel && Xn(u.cancel) ? /* @__PURE__ */ k.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: u.cancelButtonStyle || j,
    onClick: (X) => {
      Xn(u.cancel) && gt && (u.cancel.onClick == null || u.cancel.onClick.call(u.cancel, X), at());
    },
    className: lt(I?.cancelButton, u == null || (d = u.classNames) == null ? void 0 : d.cancelButton)
  }, u.cancel.label) : null, /* @__PURE__ */ k.isValidElement(u.action) ? u.action : u.action && Xn(u.action) ? /* @__PURE__ */ k.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: u.actionButtonStyle || O,
    onClick: (X) => {
      Xn(u.action) && (u.action.onClick == null || u.action.onClick.call(u.action, X), !X.defaultPrevented && at());
    },
    className: lt(I?.actionButton, u == null || (c = u.classNames) == null ? void 0 : c.actionButton)
  }, u.action.label) : null);
};
function Ys() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function rf(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const s = o === 1, a = s ? "--mobile-offset" : "--offset", l = s ? qu : Xu;
    function d(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((p) => {
        n[`${a}-${p}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof r == "number" || typeof r == "string" ? d(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      r[c] === void 0 ? n[`${a}-${c}`] = l : n[`${a}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c];
    }) : d(l);
  }), n;
}
const of = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const { id: r, invert: o, position: s = "bottom-right", hotkey: a = [
    "altKey",
    "KeyT"
  ], expand: l, closeButton: d, className: c, offset: p, mobileOffset: u, theme: m = "light", richColors: h, duration: x, style: f, visibleToasts: v = Ku, toastOptions: y, dir: b = Ys(), gap: w = Zu, icons: S, containerAriaLabel: N = "Notifications" } = t, [E, C] = k.useState([]), j = k.useMemo(() => r ? E.filter((_) => _.toasterId === r) : E.filter((_) => !_.toasterId), [
    E,
    r
  ]), O = k.useMemo(() => Array.from(new Set([
    s
  ].concat(j.filter((_) => _.position).map((_) => _.position)))), [
    j,
    s
  ]), [A, P] = k.useState([]), [z, V] = k.useState(!1), [B, q] = k.useState(!1), [I, M] = k.useState(m !== "system" ? m : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), T = k.useRef(null), K = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), oe = k.useRef(null), R = k.useRef(!1), F = k.useCallback((_) => {
    C(($) => {
      var Z;
      return (Z = $.find((ee) => ee.id === _.id)) != null && Z.delete || Ve.dismiss(_.id), $.filter(({ id: ee }) => ee !== _.id);
    });
  }, []);
  return k.useEffect(() => Ve.subscribe((_) => {
    if (_.dismiss) {
      requestAnimationFrame(() => {
        C(($) => $.map((Z) => Z.id === _.id ? {
          ...Z,
          delete: !0
        } : Z));
      });
      return;
    }
    setTimeout(() => {
      Mi.flushSync(() => {
        C(($) => {
          const Z = $.findIndex((ee) => ee.id === _.id);
          return Z !== -1 ? [
            ...$.slice(0, Z),
            {
              ...$[Z],
              ..._
            },
            ...$.slice(Z + 1)
          ] : [
            _,
            ...$
          ];
        });
      });
    });
  }), [
    E
  ]), k.useEffect(() => {
    if (m !== "system") {
      M(m);
      return;
    }
    if (m === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? M("dark") : M("light")), typeof window > "u") return;
    const _ = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      _.addEventListener("change", ({ matches: $ }) => {
        M($ ? "dark" : "light");
      });
    } catch {
      _.addListener(({ matches: Z }) => {
        try {
          M(Z ? "dark" : "light");
        } catch (ee) {
          console.error(ee);
        }
      });
    }
  }, [
    m
  ]), k.useEffect(() => {
    E.length <= 1 && V(!1);
  }, [
    E
  ]), k.useEffect(() => {
    const _ = ($) => {
      var Z;
      if (a.every((H) => $[H] || $.code === H)) {
        var D;
        V(!0), (D = T.current) == null || D.focus();
      }
      $.code === "Escape" && (document.activeElement === T.current || (Z = T.current) != null && Z.contains(document.activeElement)) && V(!1);
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [
    a
  ]), k.useEffect(() => {
    if (T.current)
      return () => {
        oe.current && (oe.current.focus({
          preventScroll: !0
        }), oe.current = null, R.current = !1);
      };
  }, [
    T.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ k.createElement("section", {
    ref: n,
    "aria-label": `${N} ${K}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, O.map((_, $) => {
    var Z;
    const [ee, D] = _.split("-");
    return j.length ? /* @__PURE__ */ k.createElement("ol", {
      key: _,
      dir: b === "auto" ? Ys() : b,
      tabIndex: -1,
      ref: T,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": I,
      "data-y-position": ee,
      "data-x-position": D,
      style: {
        "--front-toast-height": `${((Z = A[0]) == null ? void 0 : Z.height) || 0}px`,
        "--width": `${Ju}px`,
        "--gap": `${w}px`,
        ...f,
        ...rf(p, u)
      },
      onBlur: (H) => {
        R.current && !H.currentTarget.contains(H.relatedTarget) && (R.current = !1, oe.current && (oe.current.focus({
          preventScroll: !0
        }), oe.current = null));
      },
      onFocus: (H) => {
        H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || R.current || (R.current = !0, oe.current = H.relatedTarget);
      },
      onMouseEnter: () => V(!0),
      onMouseMove: () => V(!0),
      onMouseLeave: () => {
        B || V(!1);
      },
      onDragEnd: () => V(!1),
      onPointerDown: (H) => {
        H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || q(!0);
      },
      onPointerUp: () => q(!1)
    }, j.filter((H) => !H.position && $ === 0 || H.position === _).map((H, te) => {
      var W, ne;
      return /* @__PURE__ */ k.createElement(nf, {
        key: H.id,
        icons: S,
        index: te,
        toast: H,
        defaultRichColors: h,
        duration: (W = y?.duration) != null ? W : x,
        className: y?.className,
        descriptionClassName: y?.descriptionClassName,
        invert: o,
        visibleToasts: v,
        closeButton: (ne = y?.closeButton) != null ? ne : d,
        interacting: B,
        position: _,
        style: y?.style,
        unstyled: y?.unstyled,
        classNames: y?.classNames,
        cancelButtonStyle: y?.cancelButtonStyle,
        actionButtonStyle: y?.actionButtonStyle,
        closeButtonAriaLabel: y?.closeButtonAriaLabel,
        removeToast: F,
        toasts: j.filter((Q) => Q.position == H.position),
        heights: A.filter((Q) => Q.position == H.position),
        setHeights: P,
        expandByDefault: l,
        gap: w,
        expanded: z,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
});
function sf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return we(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Tr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function dn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Yo(e) {
  return "nodeType" in e;
}
function He(e) {
  var t, n;
  return e ? dn(e) ? e : Yo(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Uo(e) {
  const {
    Document: t
  } = He(e);
  return e instanceof t;
}
function _n(e) {
  return dn(e) ? !1 : e instanceof He(e).HTMLElement;
}
function ca(e) {
  return e instanceof He(e).SVGElement;
}
function un(e) {
  return e ? dn(e) ? e.document : Yo(e) ? Uo(e) ? e : _n(e) || ca(e) ? e.ownerDocument : document : document : document;
}
const nt = Tr ? Pi : de;
function Ar(e) {
  const t = ve(e);
  return nt(() => {
    t.current = e;
  }), Te(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function af() {
  const e = ve(null), t = Te((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = Te(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function En(e, t) {
  t === void 0 && (t = [e]);
  const n = ve(e);
  return nt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Pn(e, t) {
  const n = ve();
  return we(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function fr(e) {
  const t = Ar(e), n = ve(null), r = Te(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function pr(e) {
  const t = ve();
  return de(() => {
    t.current = e;
  }, [e]), t.current;
}
let so = {};
function Mn(e, t) {
  return we(() => {
    if (t)
      return t;
    const n = so[e] == null ? 0 : so[e] + 1;
    return so[e] = n, e + "-" + n;
  }, [e, t]);
}
function da(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return r.reduce((s, a) => {
      const l = Object.entries(a);
      for (const [d, c] of l) {
        const p = s[d];
        p != null && (s[d] = p + e * c);
      }
      return s;
    }, {
      ...t
    });
  };
}
const nn = /* @__PURE__ */ da(1), Rn = /* @__PURE__ */ da(-1);
function lf(e) {
  return "clientX" in e && "clientY" in e;
}
function Dr(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = He(e.target);
  return t && e instanceof t;
}
function cf(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = He(e.target);
  return t && e instanceof t;
}
function hr(e) {
  if (cf(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return lf(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Nt = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [Nt.Translate.toString(e), Nt.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), Us = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function df(e) {
  return e.matches(Us) ? e : e.querySelector(Us);
}
const uf = {
  display: "none"
};
function ff(e) {
  let {
    id: t,
    value: n
  } = e;
  return k.createElement("div", {
    id: t,
    style: uf
  }, n);
}
function pf(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const o = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return k.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function hf() {
  const [e, t] = ie("");
  return {
    announce: Te((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const ua = /* @__PURE__ */ On(null);
function mf(e) {
  const t = It(ua);
  de(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function gf() {
  const [e] = ie(() => /* @__PURE__ */ new Set()), t = Te((r) => (e.add(r), () => e.delete(r)), [e]);
  return [Te((r) => {
    let {
      type: o,
      event: s
    } = r;
    e.forEach((a) => {
      var l;
      return (l = a[o]) == null ? void 0 : l.call(a, s);
    });
  }, [e]), t];
}
const xf = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, vf = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function bf(e) {
  let {
    announcements: t = vf,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = xf
  } = e;
  const {
    announce: s,
    announcement: a
  } = hf(), l = Mn("DndLiveRegion"), [d, c] = ie(!1);
  if (de(() => {
    c(!0);
  }, []), mf(we(() => ({
    onDragStart(u) {
      let {
        active: m
      } = u;
      s(t.onDragStart({
        active: m
      }));
    },
    onDragMove(u) {
      let {
        active: m,
        over: h
      } = u;
      t.onDragMove && s(t.onDragMove({
        active: m,
        over: h
      }));
    },
    onDragOver(u) {
      let {
        active: m,
        over: h
      } = u;
      s(t.onDragOver({
        active: m,
        over: h
      }));
    },
    onDragEnd(u) {
      let {
        active: m,
        over: h
      } = u;
      s(t.onDragEnd({
        active: m,
        over: h
      }));
    },
    onDragCancel(u) {
      let {
        active: m,
        over: h
      } = u;
      s(t.onDragCancel({
        active: m,
        over: h
      }));
    }
  }), [s, t])), !d)
    return null;
  const p = k.createElement(k.Fragment, null, k.createElement(ff, {
    id: r,
    value: o.draggable
  }), k.createElement(pf, {
    id: l,
    announcement: a
  }));
  return n ? Wo(p, n) : p;
}
var Oe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Oe || (Oe = {}));
function mr() {
}
function Ks(e, t) {
  return we(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function yf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return we(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const rt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function fa(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function wf(e, t) {
  const n = hr(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function pa(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function Cf(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function Xs(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: o
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + o,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + o,
    y: n + r
  }];
}
function ha(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function qs(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const Sf = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = qs(t, t.left, t.top), s = [];
  for (const a of r) {
    const {
      id: l
    } = a, d = n.get(l);
    if (d) {
      const c = fa(qs(d), o);
      s.push({
        id: l,
        data: {
          droppableContainer: a,
          value: c
        }
      });
    }
  }
  return s.sort(pa);
}, Nf = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = Xs(t), s = [];
  for (const a of r) {
    const {
      id: l
    } = a, d = n.get(l);
    if (d) {
      const c = Xs(d), p = o.reduce((m, h, x) => m + fa(c[x], h), 0), u = Number((p / 4).toFixed(4));
      s.push({
        id: l,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(pa);
};
function jf(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height), a = o - r, l = s - n;
  if (r < o && n < s) {
    const d = t.width * t.height, c = e.width * e.height, p = a * l, u = p / (d + c - p);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Ef = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = [];
  for (const s of r) {
    const {
      id: a
    } = s, l = n.get(a);
    if (l) {
      const d = jf(l, t);
      d > 0 && o.push({
        id: a,
        data: {
          droppableContainer: s,
          value: d
        }
      });
    }
  }
  return o.sort(Cf);
};
function Rf(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function ma(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : rt;
}
function kf(e) {
  return function(n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      o[s - 1] = arguments[s];
    return o.reduce((a, l) => ({
      ...a,
      top: a.top + e * l.y,
      bottom: a.bottom + e * l.y,
      left: a.left + e * l.x,
      right: a.right + e * l.x
    }), {
      ...n
    });
  };
}
const Tf = /* @__PURE__ */ kf(1);
function ga(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function Af(e, t, n) {
  const r = ga(t);
  if (!r)
    return e;
  const {
    scaleX: o,
    scaleY: s,
    x: a,
    y: l
  } = r, d = e.left - a - (1 - o) * parseFloat(n), c = e.top - l - (1 - s) * parseFloat(n.slice(n.indexOf(" ") + 1)), p = o ? e.width / o : e.width, u = s ? e.height / s : e.height;
  return {
    width: p,
    height: u,
    top: c,
    right: d + p,
    bottom: c + u,
    left: d
  };
}
const Df = {
  ignoreTransform: !1
};
function fn(e, t) {
  t === void 0 && (t = Df);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: p
    } = He(e).getComputedStyle(e);
    c && (n = Af(n, c, p));
  }
  const {
    top: r,
    left: o,
    width: s,
    height: a,
    bottom: l,
    right: d
  } = n;
  return {
    top: r,
    left: o,
    width: s,
    height: a,
    bottom: l,
    right: d
  };
}
function Js(e) {
  return fn(e, {
    ignoreTransform: !0
  });
}
function Of(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function If(e, t) {
  return t === void 0 && (t = He(e).getComputedStyle(e)), t.position === "fixed";
}
function _f(e, t) {
  t === void 0 && (t = He(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const s = t[o];
    return typeof s == "string" ? n.test(s) : !1;
  });
}
function Or(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (Uo(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!_n(o) || ca(o) || n.includes(o))
      return n;
    const s = He(e).getComputedStyle(o);
    return o !== e && _f(o, s) && n.push(o), If(o, s) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function xa(e) {
  const [t] = Or(e, 1);
  return t ?? null;
}
function io(e) {
  return !Tr || !e ? null : dn(e) ? e : Yo(e) ? Uo(e) || e === un(e).scrollingElement ? window : _n(e) ? e : null : null;
}
function va(e) {
  return dn(e) ? e.scrollX : e.scrollLeft;
}
function ba(e) {
  return dn(e) ? e.scrollY : e.scrollTop;
}
function jo(e) {
  return {
    x: va(e),
    y: ba(e)
  };
}
var Pe;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Pe || (Pe = {}));
function ya(e) {
  return !Tr || !e ? !1 : e === document.scrollingElement;
}
function wa(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ya(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, o = e.scrollTop <= t.y, s = e.scrollLeft <= t.x, a = e.scrollTop >= r.y, l = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: s,
    isBottom: a,
    isRight: l,
    maxScroll: r,
    minScroll: t
  };
}
const Pf = {
  x: 0.2,
  y: 0.2
};
function Mf(e, t, n, r, o) {
  let {
    top: s,
    left: a,
    right: l,
    bottom: d
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = Pf);
  const {
    isTop: c,
    isBottom: p,
    isLeft: u,
    isRight: m
  } = wa(e), h = {
    x: 0,
    y: 0
  }, x = {
    x: 0,
    y: 0
  }, f = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !c && s <= t.top + f.height ? (h.y = Pe.Backward, x.y = r * Math.abs((t.top + f.height - s) / f.height)) : !p && d >= t.bottom - f.height && (h.y = Pe.Forward, x.y = r * Math.abs((t.bottom - f.height - d) / f.height)), !m && l >= t.right - f.width ? (h.x = Pe.Forward, x.x = r * Math.abs((t.right - f.width - l) / f.width)) : !u && a <= t.left + f.width && (h.x = Pe.Backward, x.x = r * Math.abs((t.left + f.width - a) / f.width)), {
    direction: h,
    speed: x
  };
}
function Lf(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: s,
      innerHeight: a
    } = window;
    return {
      top: 0,
      left: 0,
      right: s,
      bottom: a,
      width: s,
      height: a
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: o
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: o,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Ca(e) {
  return e.reduce((t, n) => nn(t, jo(n)), rt);
}
function $f(e) {
  return e.reduce((t, n) => t + va(n), 0);
}
function Ff(e) {
  return e.reduce((t, n) => t + ba(n), 0);
}
function Sa(e, t) {
  if (t === void 0 && (t = fn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: s
  } = t(e);
  xa(e) && (o <= 0 || s <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Bf = [["x", ["left", "right"], $f], ["y", ["top", "bottom"], Ff]];
class Ko {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Or(n), o = Ca(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [s, a, l] of Bf)
      for (const d of a)
        Object.defineProperty(this, d, {
          get: () => {
            const c = l(r), p = o[s] - c;
            return this.rect[d] + p;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Sn {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var o;
    (o = this.target) == null || o.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function zf(e) {
  const {
    EventTarget: t
  } = He(e);
  return e instanceof t ? e : un(e);
}
function ao(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Je;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Je || (Je = {}));
function Zs(e) {
  e.preventDefault();
}
function Wf(e) {
  e.stopPropagation();
}
var ae;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(ae || (ae = {}));
const Na = {
  start: [ae.Space, ae.Enter],
  cancel: [ae.Esc],
  end: [ae.Space, ae.Enter, ae.Tab]
}, Hf = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ae.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ae.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ae.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ae.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Xo {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Sn(un(n)), this.windowListeners = new Sn(He(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Je.Resize, this.handleCancel), this.windowListeners.add(Je.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Je.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Sa(r), n(rt);
  }
  handleKeyDown(t) {
    if (Dr(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: s = Na,
        coordinateGetter: a = Hf,
        scrollBehavior: l = "smooth"
      } = o, {
        code: d
      } = t;
      if (s.end.includes(d)) {
        this.handleEnd(t);
        return;
      }
      if (s.cancel.includes(d)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = r.current, p = c ? {
        x: c.left,
        y: c.top
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = p);
      const u = a(t, {
        active: n,
        context: r.current,
        currentCoordinates: p
      });
      if (u) {
        const m = Rn(u, p), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: x
        } = r.current;
        for (const f of x) {
          const v = t.code, {
            isTop: y,
            isRight: b,
            isLeft: w,
            isBottom: S,
            maxScroll: N,
            minScroll: E
          } = wa(f), C = Lf(f), j = {
            x: Math.min(v === ae.Right ? C.right - C.width / 2 : C.right, Math.max(v === ae.Right ? C.left : C.left + C.width / 2, u.x)),
            y: Math.min(v === ae.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(v === ae.Down ? C.top : C.top + C.height / 2, u.y))
          }, O = v === ae.Right && !b || v === ae.Left && !w, A = v === ae.Down && !S || v === ae.Up && !y;
          if (O && j.x !== u.x) {
            const P = f.scrollLeft + m.x, z = v === ae.Right && P <= N.x || v === ae.Left && P >= E.x;
            if (z && !m.y) {
              f.scrollTo({
                left: P,
                behavior: l
              });
              return;
            }
            z ? h.x = f.scrollLeft - P : h.x = v === ae.Right ? f.scrollLeft - N.x : f.scrollLeft - E.x, h.x && f.scrollBy({
              left: -h.x,
              behavior: l
            });
            break;
          } else if (A && j.y !== u.y) {
            const P = f.scrollTop + m.y, z = v === ae.Down && P <= N.y || v === ae.Up && P >= E.y;
            if (z && !m.x) {
              f.scrollTo({
                top: P,
                behavior: l
              });
              return;
            }
            z ? h.y = f.scrollTop - P : h.y = v === ae.Down ? f.scrollTop - N.y : f.scrollTop - E.y, h.y && f.scrollBy({
              top: -h.y,
              behavior: l
            });
            break;
          }
        }
        this.handleMove(t, nn(Rn(u, this.referenceCoordinates), h));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Xo.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Na,
      onActivation: o
    } = t, {
      active: s
    } = n;
    const {
      code: a
    } = e.nativeEvent;
    if (r.start.includes(a)) {
      const l = s.activatorNode.current;
      return l && e.target !== l ? !1 : (e.preventDefault(), o?.({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Qs(e) {
  return !!(e && "distance" in e);
}
function ei(e) {
  return !!(e && "delay" in e);
}
class qo {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = zf(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: s
    } = t, {
      target: a
    } = s;
    this.props = t, this.events = n, this.document = un(a), this.documentListeners = new Sn(this.document), this.listeners = new Sn(r), this.windowListeners = new Sn(He(a)), this.initialCoordinates = (o = hr(s)) != null ? o : rt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Je.Resize, this.handleCancel), this.windowListeners.add(Je.DragStart, Zs), this.windowListeners.add(Je.VisibilityChange, this.handleCancel), this.windowListeners.add(Je.ContextMenu, Zs), this.documentListeners.add(Je.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (ei(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Qs(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(t, n) {
    const {
      active: r,
      onPending: o
    } = this.props;
    o(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(Je.Click, Wf, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Je.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: o,
      props: s
    } = this, {
      onMove: a,
      options: {
        activationConstraint: l
      }
    } = s;
    if (!o)
      return;
    const d = (n = hr(t)) != null ? n : rt, c = Rn(o, d);
    if (!r && l) {
      if (Qs(l)) {
        if (l.tolerance != null && ao(c, l.tolerance))
          return this.handleCancel();
        if (ao(c, l.distance))
          return this.handleStart();
      }
      if (ei(l) && ao(c, l.tolerance))
        return this.handleCancel();
      this.handlePending(l, c);
      return;
    }
    t.cancelable && t.preventDefault(), a(d);
  }
  handleEnd() {
    const {
      onAbort: t,
      onEnd: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const {
      onAbort: t,
      onCancel: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === ae.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Vf = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Jo extends qo {
  constructor(t) {
    const {
      event: n
    } = t, r = un(n.target);
    super(t, Vf, r);
  }
}
Jo.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const Gf = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Eo;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Eo || (Eo = {}));
class Yf extends qo {
  constructor(t) {
    super(t, Gf, un(t.event.target));
  }
}
Yf.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Eo.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const lo = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Uf extends qo {
  constructor(t) {
    super(t, lo);
  }
  static setup() {
    return window.addEventListener(lo.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(lo.move.name, t);
    };
    function t() {
    }
  }
}
Uf.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: o
    } = n;
    return o.length > 1 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
var Nn;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Nn || (Nn = {}));
var gr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(gr || (gr = {}));
function Kf(e) {
  let {
    acceleration: t,
    activator: n = Nn.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: s,
    interval: a = 5,
    order: l = gr.TreeOrder,
    pointerCoordinates: d,
    scrollableAncestors: c,
    scrollableAncestorRects: p,
    delta: u,
    threshold: m
  } = e;
  const h = qf({
    delta: u,
    disabled: !s
  }), [x, f] = af(), v = ve({
    x: 0,
    y: 0
  }), y = ve({
    x: 0,
    y: 0
  }), b = we(() => {
    switch (n) {
      case Nn.Pointer:
        return d ? {
          top: d.y,
          bottom: d.y,
          left: d.x,
          right: d.x
        } : null;
      case Nn.DraggableRect:
        return o;
    }
  }, [n, o, d]), w = ve(null), S = Te(() => {
    const E = w.current;
    if (!E)
      return;
    const C = v.current.x * y.current.x, j = v.current.y * y.current.y;
    E.scrollBy(C, j);
  }, []), N = we(() => l === gr.TreeOrder ? [...c].reverse() : c, [l, c]);
  de(
    () => {
      if (!s || !c.length || !b) {
        f();
        return;
      }
      for (const E of N) {
        if (r?.(E) === !1)
          continue;
        const C = c.indexOf(E), j = p[C];
        if (!j)
          continue;
        const {
          direction: O,
          speed: A
        } = Mf(E, j, b, t, m);
        for (const P of ["x", "y"])
          h[P][O[P]] || (A[P] = 0, O[P] = 0);
        if (A.x > 0 || A.y > 0) {
          f(), w.current = E, x(S, a), v.current = A, y.current = O;
          return;
        }
      }
      v.current = {
        x: 0,
        y: 0
      }, y.current = {
        x: 0,
        y: 0
      }, f();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      S,
      r,
      f,
      s,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(b),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      x,
      c,
      N,
      p,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m)
    ]
  );
}
const Xf = {
  x: {
    [Pe.Backward]: !1,
    [Pe.Forward]: !1
  },
  y: {
    [Pe.Backward]: !1,
    [Pe.Forward]: !1
  }
};
function qf(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = pr(t);
  return Pn((o) => {
    if (n || !r || !o)
      return Xf;
    const s = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Pe.Backward]: o.x[Pe.Backward] || s.x === -1,
        [Pe.Forward]: o.x[Pe.Forward] || s.x === 1
      },
      y: {
        [Pe.Backward]: o.y[Pe.Backward] || s.y === -1,
        [Pe.Forward]: o.y[Pe.Forward] || s.y === 1
      }
    };
  }, [n, t, r]);
}
function Jf(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Pn((o) => {
    var s;
    return t == null ? null : (s = r ?? o) != null ? s : null;
  }, [r, t]);
}
function Zf(e, t) {
  return we(() => e.reduce((n, r) => {
    const {
      sensor: o
    } = r, s = o.activators.map((a) => ({
      eventName: a.eventName,
      handler: t(a.handler, r)
    }));
    return [...n, ...s];
  }, []), [e, t]);
}
var kn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(kn || (kn = {}));
var Ro;
(function(e) {
  e.Optimized = "optimized";
})(Ro || (Ro = {}));
const ti = /* @__PURE__ */ new Map();
function Qf(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [s, a] = ie(null), {
    frequency: l,
    measure: d,
    strategy: c
  } = o, p = ve(e), u = v(), m = En(u), h = Te(function(y) {
    y === void 0 && (y = []), !m.current && a((b) => b === null ? y : b.concat(y.filter((w) => !b.includes(w))));
  }, [m]), x = ve(null), f = Pn((y) => {
    if (u && !n)
      return ti;
    if (!y || y === ti || p.current !== e || s != null) {
      const b = /* @__PURE__ */ new Map();
      for (let w of e) {
        if (!w)
          continue;
        if (s && s.length > 0 && !s.includes(w.id) && w.rect.current) {
          b.set(w.id, w.rect.current);
          continue;
        }
        const S = w.node.current, N = S ? new Ko(d(S), S) : null;
        w.rect.current = N, N && b.set(w.id, N);
      }
      return b;
    }
    return y;
  }, [e, s, n, u, d]);
  return de(() => {
    p.current = e;
  }, [e]), de(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), de(
    () => {
      s && s.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), de(
    () => {
      u || typeof l != "number" || x.current !== null || (x.current = setTimeout(() => {
        h(), x.current = null;
      }, l));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, u, h, ...r]
  ), {
    droppableRects: f,
    measureDroppableContainers: h,
    measuringScheduled: s != null
  };
  function v() {
    switch (c) {
      case kn.Always:
        return !1;
      case kn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Zo(e, t) {
  return Pn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function ep(e, t) {
  return Zo(e, t);
}
function tp(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Ar(t), o = we(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(r);
  }, [r, n]);
  return de(() => () => o?.disconnect(), [o]), o;
}
function Ir(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Ar(t), o = we(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: s
      } = window;
      return new s(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return de(() => () => o?.disconnect(), [o]), o;
}
function np(e) {
  return new Ko(fn(e), e);
}
function ni(e, t, n) {
  t === void 0 && (t = np);
  const [r, o] = ie(null);
  function s() {
    o((d) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = d ?? n) != null ? c : null;
      }
      const p = t(e);
      return JSON.stringify(d) === JSON.stringify(p) ? d : p;
    });
  }
  const a = tp({
    callback(d) {
      if (e)
        for (const c of d) {
          const {
            type: p,
            target: u
          } = c;
          if (p === "childList" && u instanceof HTMLElement && u.contains(e)) {
            s();
            break;
          }
        }
    }
  }), l = Ir({
    callback: s
  });
  return nt(() => {
    s(), e ? (l?.observe(e), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (l?.disconnect(), a?.disconnect());
  }, [e]), r;
}
function rp(e) {
  const t = Zo(e);
  return ma(e, t);
}
const ri = [];
function op(e) {
  const t = ve(e), n = Pn((r) => e ? r && r !== ri && e && t.current && e.parentNode === t.current.parentNode ? r : Or(e) : ri, [e]);
  return de(() => {
    t.current = e;
  }, [e]), n;
}
function sp(e) {
  const [t, n] = ie(null), r = ve(e), o = Te((s) => {
    const a = io(s.target);
    a && n((l) => l ? (l.set(a, jo(a)), new Map(l)) : null);
  }, []);
  return de(() => {
    const s = r.current;
    if (e !== s) {
      a(s);
      const l = e.map((d) => {
        const c = io(d);
        return c ? (c.addEventListener("scroll", o, {
          passive: !0
        }), [c, jo(c)]) : null;
      }).filter((d) => d != null);
      n(l.length ? new Map(l) : null), r.current = e;
    }
    return () => {
      a(e), a(s);
    };
    function a(l) {
      l.forEach((d) => {
        const c = io(d);
        c?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), we(() => e.length ? t ? Array.from(t.values()).reduce((s, a) => nn(s, a), rt) : Ca(e) : rt, [e, t]);
}
function oi(e, t) {
  t === void 0 && (t = []);
  const n = ve(null);
  return de(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), de(() => {
    const r = e !== rt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Rn(e, n.current) : rt;
}
function ip(e) {
  de(
    () => {
      if (!Tr)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function ap(e, t) {
  return we(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: s
    } = r;
    return n[o] = (a) => {
      s(a, t);
    }, n;
  }, {}), [e, t]);
}
function ja(e) {
  return we(() => e ? Of(e) : null, [e]);
}
const si = [];
function lp(e, t) {
  t === void 0 && (t = fn);
  const [n] = e, r = ja(n ? He(n) : null), [o, s] = ie(si);
  function a() {
    s(() => e.length ? e.map((d) => ya(d) ? r : new Ko(t(d), d)) : si);
  }
  const l = Ir({
    callback: a
  });
  return nt(() => {
    l?.disconnect(), a(), e.forEach((d) => l?.observe(d));
  }, [e]), o;
}
function Ea(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return _n(t) ? t : e;
}
function cp(e) {
  let {
    measure: t
  } = e;
  const [n, r] = ie(null), o = Te((c) => {
    for (const {
      target: p
    } of c)
      if (_n(p)) {
        r((u) => {
          const m = t(p);
          return u ? {
            ...u,
            width: m.width,
            height: m.height
          } : m;
        });
        break;
      }
  }, [t]), s = Ir({
    callback: o
  }), a = Te((c) => {
    const p = Ea(c);
    s?.disconnect(), p && s?.observe(p), r(p ? t(p) : null);
  }, [t, s]), [l, d] = fr(a);
  return we(() => ({
    nodeRef: l,
    rect: n,
    setRef: d
  }), [n, l, d]);
}
const dp = [{
  sensor: Jo,
  options: {}
}, {
  sensor: Xo,
  options: {}
}], up = {
  current: {}
}, sr = {
  draggable: {
    measure: Js
  },
  droppable: {
    measure: Js,
    strategy: kn.WhileDragging,
    frequency: Ro.Optimized
  },
  dragOverlay: {
    measure: fn
  }
};
class jn extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const fp = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new jn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: mr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: sr,
  measureDroppableContainers: mr,
  windowRect: null,
  measuringScheduled: !1
}, Ra = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: mr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: mr
}, Ln = /* @__PURE__ */ On(Ra), ka = /* @__PURE__ */ On(fp);
function pp() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new jn()
    }
  };
}
function hp(e, t) {
  switch (t.type) {
    case Oe.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Oe.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case Oe.DragEnd:
    case Oe.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Oe.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new jn(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case Oe.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, s = e.droppable.containers.get(n);
      if (!s || r !== s.key)
        return e;
      const a = new jn(e.droppable.containers);
      return a.set(n, {
        ...s,
        disabled: o
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case Oe.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const s = new jn(e.droppable.containers);
      return s.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    default:
      return e;
  }
}
function mp(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = It(Ln), s = pr(r), a = pr(n?.id);
  return de(() => {
    if (!t && !r && s && a != null) {
      if (!Dr(s) || document.activeElement === s.target)
        return;
      const l = o.get(a);
      if (!l)
        return;
      const {
        activatorNode: d,
        node: c
      } = l;
      if (!d.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const p of [d.current, c.current]) {
          if (!p)
            continue;
          const u = df(p);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, a, s]), null;
}
function Ta(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, s) => s({
    transform: o,
    ...r
  }), n) : n;
}
function gp(e) {
  return we(
    () => ({
      draggable: {
        ...sr.draggable,
        ...e?.draggable
      },
      droppable: {
        ...sr.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...sr.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function xp(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const s = ve(!1), {
    x: a,
    y: l
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  nt(() => {
    if (!a && !l || !t) {
      s.current = !1;
      return;
    }
    if (s.current || !r)
      return;
    const c = t?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const p = n(c), u = ma(p, r);
    if (a || (u.x = 0), l || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const m = xa(c);
      m && m.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, a, l, r, n]);
}
const _r = /* @__PURE__ */ On({
  ...rt,
  scaleX: 1,
  scaleY: 1
});
var Dt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Dt || (Dt = {}));
const vp = /* @__PURE__ */ ed(function(t) {
  var n, r, o, s;
  let {
    id: a,
    accessibility: l,
    autoScroll: d = !0,
    children: c,
    sensors: p = dp,
    collisionDetection: u = Ef,
    measuring: m,
    modifiers: h,
    ...x
  } = t;
  const f = td(hp, void 0, pp), [v, y] = f, [b, w] = gf(), [S, N] = ie(Dt.Uninitialized), E = S === Dt.Initialized, {
    draggable: {
      active: C,
      nodes: j,
      translate: O
    },
    droppable: {
      containers: A
    }
  } = v, P = C != null ? j.get(C) : null, z = ve({
    initial: null,
    translated: null
  }), V = we(() => {
    var Ae;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (Ae = P?.data) != null ? Ae : up,
      rect: z
    } : null;
  }, [C, P]), B = ve(null), [q, I] = ie(null), [M, T] = ie(null), K = En(x, Object.values(x)), oe = Mn("DndDescribedBy", a), R = we(() => A.getEnabled(), [A]), F = gp(m), {
    droppableRects: _,
    measureDroppableContainers: $,
    measuringScheduled: Z
  } = Qf(R, {
    dragging: E,
    dependencies: [O.x, O.y],
    config: F.droppable
  }), ee = Jf(j, C), D = we(() => M ? hr(M) : null, [M]), H = qr(), te = ep(ee, F.draggable.measure);
  xp({
    activeNode: C != null ? j.get(C) : null,
    config: H.layoutShiftCompensation,
    initialRect: te,
    measure: F.draggable.measure
  });
  const W = ni(ee, F.draggable.measure, te), ne = ni(ee ? ee.parentElement : null), Q = ve({
    activatorEvent: null,
    active: null,
    activeNode: ee,
    collisionRect: null,
    collisions: null,
    droppableRects: _,
    draggableNodes: j,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: A,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Se = A.getNodeFor((n = Q.current.over) == null ? void 0 : n.id), Ne = cp({
    measure: F.dragOverlay.measure
  }), L = (r = Ne.nodeRef.current) != null ? r : ee, U = E ? (o = Ne.rect) != null ? o : W : null, re = !!(Ne.nodeRef.current && Ne.rect), Fe = rp(re ? null : W), Re = ja(L ? He(L) : null), Be = op(E ? Se ?? ee : null), qe = lp(Be), Ie = Ta(h, {
    transform: {
      x: O.x - Fe.x,
      y: O.y - Fe.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: M,
    active: V,
    activeNodeRect: W,
    containerNodeRect: ne,
    draggingNodeRect: U,
    over: Q.current.over,
    overlayNodeRect: Ne.rect,
    scrollableAncestors: Be,
    scrollableAncestorRects: qe,
    windowRect: Re
  }), gt = D ? nn(D, O) : null, zn = sp(Be), Gr = oi(zn), Kt = oi(zn, [W]), Rt = nn(Ie, Gr), xt = U ? Tf(U, Ie) : null, vt = V && xt ? u({
    active: V,
    collisionRect: xt,
    droppableRects: _,
    droppableContainers: R,
    pointerCoordinates: gt
  }) : null, bt = ha(vt, "id"), [Ze, yt] = ie(null), Yr = re ? Ie : nn(Ie, Kt), Ur = Rf(Yr, (s = Ze?.rect) != null ? s : null, W), Xt = ve(null), xn = Te(
    (Ae, Le) => {
      let {
        sensor: X,
        options: be
      } = Le;
      if (B.current == null)
        return;
      const xe = j.get(B.current);
      if (!xe)
        return;
      const ye = Ae.nativeEvent, ze = new X({
        active: B.current,
        activeNode: xe,
        event: ye,
        options: be,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Q,
        onAbort(ge) {
          if (!j.get(ge))
            return;
          const {
            onDragAbort: je
          } = K.current, ke = {
            id: ge
          };
          je?.(ke), b({
            type: "onDragAbort",
            event: ke
          });
        },
        onPending(ge, Ge, je, ke) {
          if (!j.get(ge))
            return;
          const {
            onDragPending: Ye
          } = K.current, wt = {
            id: ge,
            constraint: Ge,
            initialCoordinates: je,
            offset: ke
          };
          Ye?.(wt), b({
            type: "onDragPending",
            event: wt
          });
        },
        onStart(ge) {
          const Ge = B.current;
          if (Ge == null)
            return;
          const je = j.get(Ge);
          if (!je)
            return;
          const {
            onDragStart: ke
          } = K.current, kt = {
            activatorEvent: ye,
            active: {
              id: Ge,
              data: je.data,
              rect: z
            }
          };
          Wn(() => {
            ke?.(kt), N(Dt.Initializing), y({
              type: Oe.DragStart,
              initialCoordinates: ge,
              active: Ge
            }), b({
              type: "onDragStart",
              event: kt
            }), I(Xt.current), T(ye);
          });
        },
        onMove(ge) {
          y({
            type: Oe.DragMove,
            coordinates: ge
          });
        },
        onEnd: Ce(Oe.DragEnd),
        onCancel: Ce(Oe.DragCancel)
      });
      Xt.current = ze;
      function Ce(ge) {
        return async function() {
          const {
            active: je,
            collisions: ke,
            over: kt,
            scrollAdjustedTranslate: Ye
          } = Q.current;
          let wt = null;
          if (je && Ye) {
            const {
              cancelDrop: vn
            } = K.current;
            wt = {
              activatorEvent: ye,
              active: je,
              collisions: ke,
              delta: Ye,
              over: kt
            }, ge === Oe.DragEnd && typeof vn == "function" && await Promise.resolve(vn(wt)) && (ge = Oe.DragCancel);
          }
          B.current = null, Wn(() => {
            y({
              type: ge
            }), N(Dt.Uninitialized), yt(null), I(null), T(null), Xt.current = null;
            const vn = ge === Oe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (wt) {
              const Jr = K.current[vn];
              Jr?.(wt), b({
                type: vn,
                event: wt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [j]
  ), Kr = Te((Ae, Le) => (X, be) => {
    const xe = X.nativeEvent, ye = j.get(be);
    if (
      // Another sensor is already instantiating
      B.current !== null || // No active draggable
      !ye || // Event has already been captured
      xe.dndKit || xe.defaultPrevented
    )
      return;
    const ze = {
      active: ye
    };
    Ae(X, Le.options, ze) === !0 && (xe.dndKit = {
      capturedBy: Le.sensor
    }, B.current = be, xn(X, Le));
  }, [j, xn]), qt = Zf(p, Kr);
  ip(p), nt(() => {
    W && S === Dt.Initializing && N(Dt.Initialized);
  }, [W, S]), de(
    () => {
      const {
        onDragMove: Ae
      } = K.current, {
        active: Le,
        activatorEvent: X,
        collisions: be,
        over: xe
      } = Q.current;
      if (!Le || !X)
        return;
      const ye = {
        active: Le,
        activatorEvent: X,
        collisions: be,
        delta: {
          x: Rt.x,
          y: Rt.y
        },
        over: xe
      };
      Wn(() => {
        Ae?.(ye), b({
          type: "onDragMove",
          event: ye
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Rt.x, Rt.y]
  ), de(
    () => {
      const {
        active: Ae,
        activatorEvent: Le,
        collisions: X,
        droppableContainers: be,
        scrollAdjustedTranslate: xe
      } = Q.current;
      if (!Ae || B.current == null || !Le || !xe)
        return;
      const {
        onDragOver: ye
      } = K.current, ze = be.get(bt), Ce = ze && ze.rect.current ? {
        id: ze.id,
        rect: ze.rect.current,
        data: ze.data,
        disabled: ze.disabled
      } : null, ge = {
        active: Ae,
        activatorEvent: Le,
        collisions: X,
        delta: {
          x: xe.x,
          y: xe.y
        },
        over: Ce
      };
      Wn(() => {
        yt(Ce), ye?.(ge), b({
          type: "onDragOver",
          event: ge
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [bt]
  ), nt(() => {
    Q.current = {
      activatorEvent: M,
      active: V,
      activeNode: ee,
      collisionRect: xt,
      collisions: vt,
      droppableRects: _,
      draggableNodes: j,
      draggingNode: L,
      draggingNodeRect: U,
      droppableContainers: A,
      over: Ze,
      scrollableAncestors: Be,
      scrollAdjustedTranslate: Rt
    }, z.current = {
      initial: U,
      translated: xt
    };
  }, [V, ee, vt, xt, j, L, U, _, A, Ze, Be, Rt]), Kf({
    ...H,
    delta: O,
    draggingRect: xt,
    pointerCoordinates: gt,
    scrollableAncestors: Be,
    scrollableAncestorRects: qe
  });
  const at = we(() => ({
    active: V,
    activeNode: ee,
    activeNodeRect: W,
    activatorEvent: M,
    collisions: vt,
    containerNodeRect: ne,
    dragOverlay: Ne,
    draggableNodes: j,
    droppableContainers: A,
    droppableRects: _,
    over: Ze,
    measureDroppableContainers: $,
    scrollableAncestors: Be,
    scrollableAncestorRects: qe,
    measuringConfiguration: F,
    measuringScheduled: Z,
    windowRect: Re
  }), [V, ee, W, M, vt, ne, Ne, j, A, _, Ze, $, Be, qe, F, Z, Re]), Xr = we(() => ({
    activatorEvent: M,
    activators: qt,
    active: V,
    activeNodeRect: W,
    ariaDescribedById: {
      draggable: oe
    },
    dispatch: y,
    draggableNodes: j,
    over: Ze,
    measureDroppableContainers: $
  }), [M, qt, V, W, y, oe, j, Ze, $]);
  return k.createElement(ua.Provider, {
    value: w
  }, k.createElement(Ln.Provider, {
    value: Xr
  }, k.createElement(ka.Provider, {
    value: at
  }, k.createElement(_r.Provider, {
    value: Ur
  }, c)), k.createElement(mp, {
    disabled: l?.restoreFocus === !1
  })), k.createElement(bf, {
    ...l,
    hiddenTextDescribedById: oe
  }));
  function qr() {
    const Ae = q?.autoScrollEnabled === !1, Le = typeof d == "object" ? d.enabled === !1 : d === !1, X = E && !Ae && !Le;
    return typeof d == "object" ? {
      ...d,
      enabled: X
    } : {
      enabled: X
    };
  }
}), bp = /* @__PURE__ */ On(null), ii = "button", yp = "Draggable";
function wp(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const s = Mn(yp), {
    activators: a,
    activatorEvent: l,
    active: d,
    activeNodeRect: c,
    ariaDescribedById: p,
    draggableNodes: u,
    over: m
  } = It(Ln), {
    role: h = ii,
    roleDescription: x = "draggable",
    tabIndex: f = 0
  } = o ?? {}, v = d?.id === t, y = It(v ? _r : bp), [b, w] = fr(), [S, N] = fr(), E = ap(a, t), C = En(n);
  nt(
    () => (u.set(t, {
      id: t,
      key: s,
      node: b,
      activatorNode: S,
      data: C
    }), () => {
      const O = u.get(t);
      O && O.key === s && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const j = we(() => ({
    role: h,
    tabIndex: f,
    "aria-disabled": r,
    "aria-pressed": v && h === ii ? !0 : void 0,
    "aria-roledescription": x,
    "aria-describedby": p.draggable
  }), [r, h, f, v, x, p.draggable]);
  return {
    active: d,
    activatorEvent: l,
    activeNodeRect: c,
    attributes: j,
    isDragging: v,
    listeners: r ? void 0 : E,
    node: b,
    over: m,
    setNodeRef: w,
    setActivatorNodeRef: N,
    transform: y
  };
}
function Qo() {
  return It(ka);
}
const Cp = "Droppable", Sp = {
  timeout: 25
};
function Aa(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const s = Mn(Cp), {
    active: a,
    dispatch: l,
    over: d,
    measureDroppableContainers: c
  } = It(Ln), p = ve({
    disabled: n
  }), u = ve(!1), m = ve(null), h = ve(null), {
    disabled: x,
    updateMeasurementsFor: f,
    timeout: v
  } = {
    ...Sp,
    ...o
  }, y = En(f ?? r), b = Te(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        c(Array.isArray(y.current) ? y.current : [y.current]), h.current = null;
      }, v);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  ), w = Ir({
    callback: b,
    disabled: x || !a
  }), S = Te((j, O) => {
    w && (O && (w.unobserve(O), u.current = !1), j && w.observe(j));
  }, [w]), [N, E] = fr(S), C = En(t);
  return de(() => {
    !w || !N.current || (w.disconnect(), u.current = !1, w.observe(N.current));
  }, [N, w]), de(
    () => (l({
      type: Oe.RegisterDroppable,
      element: {
        id: r,
        key: s,
        disabled: n,
        node: N,
        rect: m,
        data: C
      }
    }), () => l({
      type: Oe.UnregisterDroppable,
      key: s,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), de(() => {
    n !== p.current.disabled && (l({
      type: Oe.SetDroppableDisabled,
      id: r,
      key: s,
      disabled: n
    }), p.current.disabled = n);
  }, [r, s, n, l]), {
    active: a,
    rect: m,
    isOver: d?.id === r,
    node: N,
    over: d,
    setNodeRef: E
  };
}
function Np(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = ie(null), [s, a] = ie(null), l = pr(n);
  return !n && !r && l && o(l), nt(() => {
    if (!s)
      return;
    const d = r?.key, c = r?.props.id;
    if (d == null || c == null) {
      o(null);
      return;
    }
    Promise.resolve(t(c, s)).then(() => {
      o(null);
    });
  }, [t, r, s]), k.createElement(k.Fragment, null, n, r ? nd(r, {
    ref: a
  }) : null);
}
const jp = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Ep(e) {
  let {
    children: t
  } = e;
  return k.createElement(Ln.Provider, {
    value: Ra
  }, k.createElement(_r.Provider, {
    value: jp
  }, t));
}
const Rp = {
  position: "fixed",
  touchAction: "none"
}, kp = (e) => Dr(e) ? "transform 250ms ease" : void 0, Tp = /* @__PURE__ */ zo((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: s,
    className: a,
    rect: l,
    style: d,
    transform: c,
    transition: p = kp
  } = e;
  if (!l)
    return null;
  const u = o ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, m = {
    ...Rp,
    width: l.width,
    height: l.height,
    top: l.top,
    left: l.left,
    transform: Nt.Transform.toString(u),
    transformOrigin: o && r ? wf(r, l) : void 0,
    transition: typeof p == "function" ? p(r) : p,
    ...d
  };
  return k.createElement(n, {
    className: a,
    style: m,
    ref: t
  }, s);
}), Da = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const o = {}, {
    styles: s,
    className: a
  } = e;
  if (s != null && s.active)
    for (const [l, d] of Object.entries(s.active))
      d !== void 0 && (o[l] = n.node.style.getPropertyValue(l), n.node.style.setProperty(l, d));
  if (s != null && s.dragOverlay)
    for (const [l, d] of Object.entries(s.dragOverlay))
      d !== void 0 && r.node.style.setProperty(l, d);
  return a != null && a.active && n.node.classList.add(a.active), a != null && a.dragOverlay && r.node.classList.add(a.dragOverlay), function() {
    for (const [d, c] of Object.entries(o))
      n.node.style.setProperty(d, c);
    a != null && a.active && n.node.classList.remove(a.active);
  };
}, Ap = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Nt.Transform.toString(t)
  }, {
    transform: Nt.Transform.toString(n)
  }];
}, Dp = {
  duration: 250,
  easing: "ease",
  keyframes: Ap,
  sideEffects: /* @__PURE__ */ Da({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Op(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return Ar((s, a) => {
    if (t === null)
      return;
    const l = n.get(s);
    if (!l)
      return;
    const d = l.node.current;
    if (!d)
      return;
    const c = Ea(a);
    if (!c)
      return;
    const {
      transform: p
    } = He(a).getComputedStyle(a), u = ga(p);
    if (!u)
      return;
    const m = typeof t == "function" ? t : Ip(t);
    return Sa(d, o.draggable.measure), m({
      active: {
        id: s,
        data: l.data,
        node: d,
        rect: o.draggable.measure(d)
      },
      draggableNodes: n,
      dragOverlay: {
        node: a,
        rect: o.dragOverlay.measure(c)
      },
      droppableContainers: r,
      measuringConfiguration: o,
      transform: u
    });
  });
}
function Ip(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...Dp,
    ...e
  };
  return (s) => {
    let {
      active: a,
      dragOverlay: l,
      transform: d,
      ...c
    } = s;
    if (!t)
      return;
    const p = {
      x: l.rect.left - a.rect.left,
      y: l.rect.top - a.rect.top
    }, u = {
      scaleX: d.scaleX !== 1 ? a.rect.width * d.scaleX / l.rect.width : 1,
      scaleY: d.scaleY !== 1 ? a.rect.height * d.scaleY / l.rect.height : 1
    }, m = {
      x: d.x - p.x,
      y: d.y - p.y,
      ...u
    }, h = o({
      ...c,
      active: a,
      dragOverlay: l,
      transform: {
        initial: d,
        final: m
      }
    }), [x] = h, f = h[h.length - 1];
    if (JSON.stringify(x) === JSON.stringify(f))
      return;
    const v = r?.({
      active: a,
      dragOverlay: l,
      ...c
    }), y = l.node.animate(h, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((b) => {
      y.onfinish = () => {
        v?.(), b();
      };
    });
  };
}
let ai = 0;
function _p(e) {
  return we(() => {
    if (e != null)
      return ai++, ai;
  }, [e]);
}
const Pp = /* @__PURE__ */ k.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: o,
    transition: s,
    modifiers: a,
    wrapperElement: l = "div",
    className: d,
    zIndex: c = 999
  } = e;
  const {
    activatorEvent: p,
    active: u,
    activeNodeRect: m,
    containerNodeRect: h,
    draggableNodes: x,
    droppableContainers: f,
    dragOverlay: v,
    over: y,
    measuringConfiguration: b,
    scrollableAncestors: w,
    scrollableAncestorRects: S,
    windowRect: N
  } = Qo(), E = It(_r), C = _p(u?.id), j = Ta(a, {
    activatorEvent: p,
    active: u,
    activeNodeRect: m,
    containerNodeRect: h,
    draggingNodeRect: v.rect,
    over: y,
    overlayNodeRect: v.rect,
    scrollableAncestors: w,
    scrollableAncestorRects: S,
    transform: E,
    windowRect: N
  }), O = Zo(m), A = Op({
    config: r,
    draggableNodes: x,
    droppableContainers: f,
    measuringConfiguration: b
  }), P = O ? v.setRef : void 0;
  return k.createElement(Ep, null, k.createElement(Np, {
    animation: A
  }, u && C ? k.createElement(Tp, {
    key: C,
    id: u.id,
    ref: P,
    as: l,
    activatorEvent: p,
    adjustScale: t,
    className: d,
    transition: s,
    rect: O,
    style: {
      zIndex: c,
      ...o
    },
    transform: j
  }, n) : null));
});
function Oa(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function Mp(e, t) {
  return e.reduce((n, r, o) => {
    const s = t.get(r);
    return s && (n[o] = s), n;
  }, Array(e.length));
}
function qn(e) {
  return e !== null && e >= 0;
}
function Lp(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function $p(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Ia = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const s = Oa(t, r, n), a = t[o], l = s[o];
  return !l || !a ? null : {
    x: l.left - a.left,
    y: l.top - a.top,
    scaleX: l.width / a.width,
    scaleY: l.height / a.height
  };
}, Jn = {
  scaleX: 1,
  scaleY: 1
}, _a = (e) => {
  var t;
  let {
    activeIndex: n,
    activeNodeRect: r,
    index: o,
    rects: s,
    overIndex: a
  } = e;
  const l = (t = s[n]) != null ? t : r;
  if (!l)
    return null;
  if (o === n) {
    const c = s[a];
    return c ? {
      x: 0,
      y: n < a ? c.top + c.height - (l.top + l.height) : c.top - l.top,
      ...Jn
    } : null;
  }
  const d = Fp(s, o, n);
  return o > n && o <= a ? {
    x: 0,
    y: -l.height - d,
    ...Jn
  } : o < n && o >= a ? {
    x: 0,
    y: l.height + d,
    ...Jn
  } : {
    x: 0,
    y: 0,
    ...Jn
  };
};
function Fp(e, t, n) {
  const r = e[t], o = e[t - 1], s = e[t + 1];
  return r ? n < t ? o ? r.top - (o.top + o.height) : s ? s.top - (r.top + r.height) : 0 : s ? s.top - (r.top + r.height) : o ? r.top - (o.top + o.height) : 0 : 0;
}
const Pa = "Sortable", Ma = /* @__PURE__ */ k.createContext({
  activeIndex: -1,
  containerId: Pa,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Ia,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function La(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = Ia,
    disabled: s = !1
  } = e;
  const {
    active: a,
    dragOverlay: l,
    droppableRects: d,
    over: c,
    measureDroppableContainers: p
  } = Qo(), u = Mn(Pa, n), m = l.rect !== null, h = we(() => r.map((E) => typeof E == "object" && "id" in E ? E.id : E), [r]), x = a != null, f = a ? h.indexOf(a.id) : -1, v = c ? h.indexOf(c.id) : -1, y = ve(h), b = !Lp(h, y.current), w = v !== -1 && f === -1 || b, S = $p(s);
  nt(() => {
    b && x && p(h);
  }, [b, h, x, p]), de(() => {
    y.current = h;
  }, [h]);
  const N = we(
    () => ({
      activeIndex: f,
      containerId: u,
      disabled: S,
      disableTransforms: w,
      items: h,
      overIndex: v,
      useDragOverlay: m,
      sortedRects: Mp(h, d),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, u, S.draggable, S.droppable, w, h, v, d, m, o]
  );
  return k.createElement(Ma.Provider, {
    value: N
  }, t);
}
const Bp = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return Oa(n, r, o).indexOf(t);
}, zp = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: o,
    items: s,
    newIndex: a,
    previousItems: l,
    previousContainerId: d,
    transition: c
  } = e;
  return !c || !r || l !== s && o === a ? !1 : n ? !0 : a !== o && t === d;
}, Wp = {
  duration: 200,
  easing: "ease"
}, $a = "transform", Hp = /* @__PURE__ */ Nt.Transition.toString({
  property: $a,
  duration: 0,
  easing: "linear"
}), Vp = {
  roleDescription: "sortable"
};
function Gp(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [s, a] = ie(null), l = ve(n);
  return nt(() => {
    if (!t && n !== l.current && r.current) {
      const d = o.current;
      if (d) {
        const c = fn(r.current, {
          ignoreTransform: !0
        }), p = {
          x: d.left - c.left,
          y: d.top - c.top,
          scaleX: d.width / c.width,
          scaleY: d.height / c.height
        };
        (p.x || p.y) && a(p);
      }
    }
    n !== l.current && (l.current = n);
  }, [t, n, r, o]), de(() => {
    s && a(null);
  }, [s]), s;
}
function Yp(e) {
  let {
    animateLayoutChanges: t = zp,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: s = Bp,
    id: a,
    strategy: l,
    resizeObserverConfig: d,
    transition: c = Wp
  } = e;
  const {
    items: p,
    containerId: u,
    activeIndex: m,
    disabled: h,
    disableTransforms: x,
    sortedRects: f,
    overIndex: v,
    useDragOverlay: y,
    strategy: b
  } = It(Ma), w = Up(r, h), S = p.indexOf(a), N = we(() => ({
    sortable: {
      containerId: u,
      index: S,
      items: p
    },
    ...o
  }), [u, o, S, p]), E = we(() => p.slice(p.indexOf(a)), [p, a]), {
    rect: C,
    node: j,
    isOver: O,
    setNodeRef: A
  } = Aa({
    id: a,
    data: N,
    disabled: w.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: E,
      ...d
    }
  }), {
    active: P,
    activatorEvent: z,
    activeNodeRect: V,
    attributes: B,
    setNodeRef: q,
    listeners: I,
    isDragging: M,
    over: T,
    setActivatorNodeRef: K,
    transform: oe
  } = wp({
    id: a,
    data: N,
    attributes: {
      ...Vp,
      ...n
    },
    disabled: w.draggable
  }), R = sf(A, q), F = !!P, _ = F && !x && qn(m) && qn(v), $ = !y && M, Z = $ && _ ? oe : null, D = _ ? Z ?? (l ?? b)({
    rects: f,
    activeNodeRect: V,
    activeIndex: m,
    overIndex: v,
    index: S
  }) : null, H = qn(m) && qn(v) ? s({
    id: a,
    items: p,
    activeIndex: m,
    overIndex: v
  }) : S, te = P?.id, W = ve({
    activeId: te,
    items: p,
    newIndex: H,
    containerId: u
  }), ne = p !== W.current.items, Q = t({
    active: P,
    containerId: u,
    isDragging: M,
    isSorting: F,
    id: a,
    index: S,
    items: p,
    newIndex: W.current.newIndex,
    previousItems: W.current.items,
    previousContainerId: W.current.containerId,
    transition: c,
    wasDragging: W.current.activeId != null
  }), Se = Gp({
    disabled: !Q,
    index: S,
    node: j,
    rect: C
  });
  return de(() => {
    F && W.current.newIndex !== H && (W.current.newIndex = H), u !== W.current.containerId && (W.current.containerId = u), p !== W.current.items && (W.current.items = p);
  }, [F, H, u, p]), de(() => {
    if (te === W.current.activeId)
      return;
    if (te != null && W.current.activeId == null) {
      W.current.activeId = te;
      return;
    }
    const L = setTimeout(() => {
      W.current.activeId = te;
    }, 50);
    return () => clearTimeout(L);
  }, [te]), {
    active: P,
    activeIndex: m,
    attributes: B,
    data: N,
    rect: C,
    index: S,
    newIndex: H,
    items: p,
    isOver: O,
    isSorting: F,
    isDragging: M,
    listeners: I,
    node: j,
    overIndex: v,
    over: T,
    setNodeRef: R,
    setActivatorNodeRef: K,
    setDroppableNodeRef: A,
    setDraggableNodeRef: q,
    transform: Se ?? D,
    transition: Ne()
  };
  function Ne() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Se || // Or to prevent items jumping to back to their "new" position when items change
      ne && W.current.newIndex === S
    )
      return Hp;
    if (!($ && !Dr(z) || !c) && (F || Q))
      return Nt.Transition.toString({
        ...c,
        property: $a
      });
  }
}
function Up(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e?.draggable) != null ? n : t.draggable,
    droppable: (r = e?.droppable) != null ? r : t.droppable
  };
}
function xr(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const Kp = [ae.Down, ae.Right, ae.Up, ae.Left], Xp = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: o,
      droppableContainers: s,
      over: a,
      scrollableAncestors: l
    }
  } = t;
  if (Kp.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const d = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const m = o.get(u.id);
      if (m)
        switch (e.code) {
          case ae.Down:
            r.top < m.top && d.push(u);
            break;
          case ae.Up:
            r.top > m.top && d.push(u);
            break;
          case ae.Left:
            r.left > m.left && d.push(u);
            break;
          case ae.Right:
            r.left < m.left && d.push(u);
            break;
        }
    });
    const c = Nf({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: d
    });
    let p = ha(c, "id");
    if (p === a?.id && c.length > 1 && (p = c[1].id), p != null) {
      const u = s.get(n.id), m = s.get(p), h = m ? o.get(m.id) : null, x = m?.node.current;
      if (x && h && u && m) {
        const v = Or(x).some((E, C) => l[C] !== E), y = Fa(u, m), b = qp(u, m), w = v || !y ? {
          x: 0,
          y: 0
        } : {
          x: b ? r.width - h.width : 0,
          y: b ? r.height - h.height : 0
        }, S = {
          x: h.left,
          y: h.top
        };
        return w.x && w.y ? S : Rn(S, w);
      }
    }
  }
};
function Fa(e, t) {
  return !xr(e) || !xr(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function qp(e, t) {
  return !xr(e) || !xr(t) || !Fa(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const Jp = ({
  position: e,
  onSelect: t,
  onClose: n,
  searchQuery: r,
  tags: o
}) => {
  const { mergeTags: s } = In(), a = o || s, [l, d] = ie(0), c = ve(null), p = a.filter(
    (u) => u.label.toLowerCase().includes(r.toLowerCase()) || u.value.toLowerCase().includes(r.toLowerCase())
  );
  return de(() => {
    d(0);
  }, [r]), de(() => {
    const u = (h) => {
      c.current && !c.current.contains(h.target) && n();
    }, m = (h) => {
      h.key === "ArrowDown" ? (h.preventDefault(), d((x) => (x + 1) % p.length)) : h.key === "ArrowUp" ? (h.preventDefault(), d((x) => (x - 1 + p.length) % p.length)) : h.key === "Enter" ? (h.preventDefault(), p[l] && t(p[l])) : h.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", u), document.addEventListener("keydown", m), () => {
      document.removeEventListener("mousedown", u), document.removeEventListener("keydown", m);
    };
  }, [p, l, t, n]), p.length === 0 ? null : /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: c,
      className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden min-w-[200px] max-h-[300px] overflow-y-auto",
      onMouseDown: (u) => u.preventDefault(),
      style: {
        top: e.top,
        left: e.left
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "p-2 border-b border-gray-100 bg-gray-50 flex items-center justify-between", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider", children: "Merge Tags" }),
          /* @__PURE__ */ i.jsxs("span", { className: "text-[10px] text-gray-400", children: [
            p.length,
            " found"
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "py-1", children: p.map((u, m) => /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: ue(
              "w-full text-left px-3 py-2 text-sm flex flex-col gap-0.5 transition-colors",
              m === l ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50 text-gray-700"
            ),
            onMouseDown: (h) => {
              h.preventDefault(), t(u);
            },
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "font-medium", children: u.label }),
              /* @__PURE__ */ i.jsx("span", { className: "text-xs opacity-60 font-mono italic", children: u.value })
            ]
          },
          u.id
        )) })
      ]
    }
  );
}, Zp = ({ listeners: e, attributes: t, isVisible: n }) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ...e,
    ...t,
    className: St(
      "absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-10 bg-blue-500 rounded-sm cursor-move flex flex-col items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-opacity z-30",
      // Show on selection/isVisible OR via CSS group-hover on parent
      n ? "opacity-100" : "opacity-0 group-hover:opacity-100"
    ),
    style: { pointerEvents: "auto" },
    title: "Drag to reorder row",
    onClick: (r) => r.stopPropagation(),
    children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-2 gap-0.5 opacity-80", children: [...Array(6)].map((r, o) => /* @__PURE__ */ i.jsx("div", { className: "w-0.5 h-0.5 bg-white rounded-full" }, o)) })
  }
), co = ({
  elements: e,
  onSelect: t,
  onUpdate: n,
  onDelete: r,
  onAddChild: o,
  selectedElementId: s,
  deviceMode: a = "desktop"
}) => /* @__PURE__ */ i.jsx(
  La,
  {
    items: e.map((l) => l.id),
    strategy: _a,
    children: e.map((l) => /* @__PURE__ */ i.jsx(
      ir,
      {
        element: l,
        isSelected: s === l.id,
        onSelect: t,
        onUpdate: n,
        onDelete: r,
        onAddChild: o,
        selectedElementId: s,
        deviceMode: a
      },
      l.id
    ))
  }
), ir = ({
  element: e,
  isSelected: t,
  isHovered: n = !1,
  onSelect: r,
  onUpdate: o,
  onDelete: s,
  onAddChild: a,
  selectedElementId: l,
  deviceMode: d = "desktop"
}) => {
  const c = !!e._isFooter || e.locked, p = e.type !== "column" && !c, u = Yp({
    id: e.id,
    disabled: !p,
    data: {
      type: e.type,
      element: e
    }
  }), {
    attributes: m,
    listeners: h,
    setNodeRef: x,
    transform: f,
    transition: v,
    isDragging: y
  } = u, [b, w] = k.useState(!1), S = (A) => {
    A.stopPropagation(), !c && (console.log("CanvasElement clicked:", e.id, e.type, "isSelected:", t), r(e.id));
  };
  Nt.Transform.toString(f);
  const N = (A) => {
    if (A)
      return typeof A == "number" ? `${A}px` : `${A.top || 0}px ${A.right || 0}px ${A.bottom || 0}px ${A.left || 0}px`;
  }, E = (A) => {
    if (A)
      return typeof A == "number" ? `${A}px` : `${A.topLeft || 0}px ${A.topRight || 0}px ${A.bottomRight || 0}px ${A.bottomLeft || 0}px`;
  }, C = {
    backgroundColor: e.backgroundColor,
    width: e.type === "column" ? d !== "desktop" ? "100%" : void 0 : typeof e.width == "number" ? `${e.width}px` : e.width || "100%",
    flexBasis: e.type === "column" ? d !== "desktop" ? "100%" : e.width || "50%" : void 0,
    flexShrink: e.type === "column" ? 0 : void 0,
    flexGrow: e.type === "column" ? 0 : void 0,
    height: typeof e.height == "number" ? `${e.height}px` : e.height || "auto",
    padding: N(e.padding),
    margin: N(e.margin),
    borderColor: e.borderColor,
    borderWidth: e.borderWidth ? `${e.borderWidth}px` : void 0,
    borderStyle: e.borderStyle || (e.borderWidth ? "solid" : void 0),
    borderRadius: E(e.borderRadius),
    backgroundImage: e.imageUrl ? `url(${e.imageUrl})` : void 0,
    backgroundSize: e.imageUrl ? "cover" : void 0,
    backgroundPosition: e.imageUrl ? "center" : void 0,
    backgroundRepeat: e.imageUrl ? "no-repeat" : void 0,
    opacity: e.opacity,
    transform: Nt.Transform.toString(f),
    transition: v,
    zIndex: y ? 999 : 1,
    position: "relative",
    // Disable pointer events on the dragged element so collision detection hits elements underneath
    pointerEvents: y ? "none" : "auto"
  };
  if (!e.visible)
    return null;
  t && e.id;
  const j = e.type === "column" ? {} : m, O = e.type === "column" ? {} : e.type === "row" ? {} : h;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: x,
      style: C,
      ...j,
      ...O,
      onMouseEnter: () => !c && w(!0),
      onMouseLeave: () => !c && w(!1),
      onClick: S,
      className: St(
        "relative transition-all group",
        !c && "cursor-pointer",
        c && "pointer-events-auto cursor-default",
        !c && t && "ring-2 ring-blue-500 bg-blue-50/10",
        !c && !t && "hover:ring-1 hover:ring-blue-300",
        y && "opacity-50"
      ),
      "data-element-id": e.id,
      children: [
        e.type === "text" && /* @__PURE__ */ i.jsx(
          nh,
          {
            element: e,
            isSelected: t,
            onUpdate: o
          }
        ),
        e.type === "image" && /* @__PURE__ */ i.jsx(rh, { element: e }),
        e.type === "button" && /* @__PURE__ */ i.jsx(oh, { element: e }),
        e.type === "divider" && /* @__PURE__ */ i.jsx(sh, { element: e }),
        e.type === "spacer" && /* @__PURE__ */ i.jsx(ih, { element: e }),
        e.type === "video" && /* @__PURE__ */ i.jsx(ah, { element: e }),
        e.type === "html" && /* @__PURE__ */ i.jsx(lh, { element: e }),
        e.type === "column" && /* @__PURE__ */ i.jsx(
          Qp,
          {
            element: e,
            onAddChild: a,
            isFooter: c,
            renderChildren: (A) => /* @__PURE__ */ i.jsx(
              co,
              {
                elements: A,
                onSelect: r,
                onUpdate: o,
                onDelete: s,
                onAddChild: a,
                selectedElementId: l || null,
                deviceMode: d
              }
            )
          }
        ),
        e.type === "row" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            eh,
            {
              element: e,
              deviceMode: d,
              renderChildren: (A) => /* @__PURE__ */ i.jsx(
                co,
                {
                  elements: A,
                  onSelect: r,
                  onUpdate: o,
                  onDelete: s,
                  onAddChild: a,
                  selectedElementId: l || null,
                  deviceMode: d
                }
              )
            }
          ),
          !c && /* @__PURE__ */ i.jsx(Zp, { listeners: h, attributes: m, isVisible: t || b || n })
        ] }),
        e.type === "section" && /* @__PURE__ */ i.jsx(
          th,
          {
            element: e,
            renderChildren: (A) => /* @__PURE__ */ i.jsx(
              co,
              {
                elements: A,
                onSelect: r,
                onUpdate: o,
                onDelete: s,
                onAddChild: a,
                selectedElementId: l || null,
                deviceMode: d
              }
            )
          }
        ),
        !c && (t || b || n) && !y && /* @__PURE__ */ i.jsxs("div", { className: St(
          "absolute -top-6 right-0 flex gap-1 bg-primary text-primary-foreground px-2 py-0.5 rounded-t-md text-xs z-20 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity",
          (t || b) && "opacity-100"
          // Persistent when selected or hovered
        ), children: [
          /* @__PURE__ */ i.jsx("span", { className: "uppercase text-[10px] font-bold mr-2 opacity-80", children: e.type }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: (A) => {
                A.stopPropagation(), s(e.id);
              },
              className: "hover:text-red-300",
              title: "Delete",
              children: "✕"
            }
          )
        ] })
      ]
    }
  );
}, Qp = ({ element: e, onAddChild: t, renderChildren: n, isFooter: r = !1 }) => {
  const [o, s] = k.useState(!1), { setNodeRef: a, isOver: l } = Aa({
    id: e.id,
    disabled: r,
    // Disable dropping for footer columns
    data: {
      type: e.type,
      accepts: ["text", "image", "button", "divider", "spacer", "heading"]
    }
  }), { active: d } = Qo(), c = d !== null && !r, p = !r && (l || o), u = r ? {} : {
    onDragOver: (m) => {
      m.preventDefault(), m.dataTransfer.dropEffect = "copy", o || s(!0);
    },
    onDragEnter: (m) => {
      m.preventDefault(), s(!0);
    },
    onDragLeave: (m) => {
      m.preventDefault(), m.currentTarget.contains(m.relatedTarget) || s(!1);
    },
    onDrop: (m) => {
      m.preventDefault(), m.stopPropagation(), s(!1);
      const h = m.dataTransfer.getData("elementType");
      h && t && t(e.id, h);
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: a,
      ...u,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: e.horizontalAlign === "center" ? "center" : e.horizontalAlign === "right" ? "flex-end" : "flex-start",
        justifyContent: r ? "flex-end" : "flex-start",
        // Footer content at bottom
        verticalAlign: r ? "bottom" : "top",
        minHeight: r ? "auto" : "80px",
        width: "100%",
        height: "100%",
        outline: p ? "2px dashed #0ea5e9" : "none",
        backgroundColor: p ? "#f0f9ff" : e.backgroundColor || "transparent",
        transition: "all 0.2s",
        boxSizing: "border-box",
        position: "relative",
        pointerEvents: r ? "none" : "auto"
        // Disable pointer events on footer columns
      },
      children: [
        p && c && /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 z-50 pointer-events-none flex items-center justify-center", children: /* @__PURE__ */ i.jsx("div", { className: "bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-xl animate-pulse", children: "Drop it here" }) }),
        e.children && e.children.length > 0 ? n(e.children) : r ? null : /* @__PURE__ */ i.jsxs("div", { className: "w-full flex-1 flex flex-col items-center justify-center gap-3 text-sm border-2 border-dashed border-blue-200 rounded p-6 bg-blue-50/50", style: { color: "#3b82f6", borderColor: "#bfdbfe", backgroundColor: "rgba(239, 246, 255, 0.5)" }, children: [
          /* @__PURE__ */ i.jsx("p", { className: "text-center font-medium", children: "No content here. Drag content from right." }),
          /* @__PURE__ */ i.jsx(
            We,
            {
              variant: "default",
              size: "sm",
              className: "shadow-sm",
              style: { backgroundColor: "#3b82f6", color: "#ffffff" },
              onClick: (m) => {
                m.stopPropagation(), or.info("Drag elements from the right sidebar");
              },
              children: "Add Content"
            }
          )
        ] })
      ]
    }
  );
}, eh = ({ element: e, renderChildren: t, deviceMode: n = "desktop" }) => /* @__PURE__ */ i.jsx(
  "div",
  {
    style: {
      display: "flex",
      flexDirection: n !== "desktop" ? "column" : "row",
      gap: `${e.gap || 0}px`,
      minHeight: "80px",
      width: "100%",
      backgroundColor: e.backgroundColor || "transparent",
      backgroundImage: e.imageUrl ? `url(${e.imageUrl})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    children: e.children && e.children.length > 0 ? t(e.children) : /* @__PURE__ */ i.jsx("div", { className: "w-full text-center text-gray-300 py-4 border-2 border-dashed border-gray-100 bg-gray-50 rounded", children: "Empty Row" })
  }
), th = ({ element: e, renderChildren: t }) => /* @__PURE__ */ i.jsx(
  "div",
  {
    style: {
      minHeight: "100px"
    },
    children: e.children ? t(e.children) : null
  }
), nh = ({ element: e, isSelected: t, onUpdate: n }) => {
  const [r, o] = k.useState(null), s = k.useRef(null), a = k.useRef(null), { mergeTagTriggers: l, mergeTags: d, getMergeTagsByTrigger: c } = In(), p = d;
  k.useEffect(() => {
    s.current && s.current.innerHTML !== e.content && document.activeElement !== s.current && (s.current.innerHTML = e.content);
  }, [e.content]);
  const u = (f) => {
    setTimeout(() => {
      n && s.current && n(e.id, { content: s.current.innerHTML });
    }, 200);
  }, m = (f) => {
    t && (f.stopPropagation(), r?.show && ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(f.key));
  }, h = (f) => {
    if (!t) return;
    const v = window.getSelection();
    if (!v || v.rangeCount === 0) return;
    const y = v.getRangeAt(0), b = y.startContainer;
    if (b.nodeType === Node.TEXT_NODE) {
      const w = b.textContent || "", S = y.startOffset, N = w[S - 1];
      if (l.includes(N)) {
        if (c(N).length > 0) {
          const C = y.getBoundingClientRect();
          a.current = y.cloneRange(), o({
            show: !0,
            position: { top: C.bottom, left: C.left },
            query: ""
          });
        }
      } else if (r?.show) {
        a.current = y.cloneRange();
        const E = w.substring(0, S);
        let C = -1;
        if (l.forEach((j) => {
          const O = E.lastIndexOf(j);
          O > C && (C = O);
        }), C !== -1) {
          const j = E.substring(C + 1);
          o((O) => O ? { ...O, query: j } : null);
        } else
          o(null);
      }
    }
  }, x = (f) => {
    const v = window.getSelection();
    if (!v) return;
    let y = null;
    if (v.rangeCount > 0 && (y = v.getRangeAt(0)), (!y || !s.current?.contains(y.startContainer)) && a.current && (y = a.current), y && s.current?.contains(y.startContainer)) {
      const b = y.startContainer;
      if (b.nodeType === Node.TEXT_NODE) {
        const w = b.textContent || "", S = y.startOffset, N = w.substring(0, S);
        let E = -1;
        if (l.forEach((C) => {
          const j = N.lastIndexOf(C);
          j > E && (E = j);
        }), E !== -1) {
          y.setStart(b, E), y.setEnd(b, S), y.deleteContents();
          const C = document.createElement("span");
          C.className = "merge-tag", C.dataset.tag = f.id, C.contentEditable = "false", C.setAttribute("data-label", f.label), C.innerHTML = f.value, y.insertNode(C);
          const j = document.createTextNode(" ");
          y.setStartAfter(C), y.collapse(!0), y.insertNode(j), y.setStartAfter(j), y.collapse(!0), v.removeAllRanges(), v.addRange(y);
        }
      }
    } else if (s.current) {
      const b = document.createElement("span");
      b.className = "merge-tag", b.dataset.tag = f.id, b.contentEditable = "false", b.innerHTML = f.value, s.current.appendChild(b), s.current.appendChild(document.createTextNode(" "));
    }
    o(null), a.current = null, n && s.current && n(e.id, { content: s.current.innerHTML });
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: s,
        contentEditable: t,
        suppressContentEditableWarning: !0,
        onBlur: u,
        onInput: h,
        onKeyDown: m,
        style: {
          fontSize: `${e.fontSize}px`,
          fontFamily: e.fontFamily,
          color: e.color,
          textAlign: e.textAlign || "left",
          fontWeight: e.fontWeight,
          lineHeight: e.lineHeight,
          fontStyle: e.fontStyle,
          wordBreak: "break-word",
          outline: "none",
          cursor: t ? "text" : "default",
          minHeight: "1em"
        },
        onClick: (f) => {
          t && f.stopPropagation();
        }
      }
    ),
    r?.show && Wo(
      /* @__PURE__ */ i.jsx(
        Jp,
        {
          position: r.position,
          searchQuery: r.query,
          onSelect: x,
          onClose: () => o(null),
          tags: p
        }
      ),
      document.body
    )
  ] });
}, rh = ({ element: e }) => {
  let t = "100%";
  e.autoWidth !== !1 ? t = "100%" : e.width && (t = typeof e.width == "string" ? e.width : `${e.width}px`);
  const n = /* @__PURE__ */ i.jsx(
    "img",
    {
      src: e.src,
      alt: e.alt,
      title: e.title,
      style: {
        width: t,
        maxWidth: "100%",
        // Always respect container bounds
        height: e.height || "auto",
        display: "block",
        objectFit: e.objectFit || "cover"
      }
    }
  ), r = e.link ? /* @__PURE__ */ i.jsx("a", { href: e.link, target: e.target || "_blank", rel: "noopener noreferrer", style: { display: "block" }, children: n }) : n;
  return /* @__PURE__ */ i.jsx("div", { style: {
    textAlign: e.align || "left",
    borderWidth: e.borderWidth ? `${e.borderWidth}px` : void 0,
    borderStyle: e.borderStyle || (e.borderWidth ? "solid" : void 0),
    borderColor: e.borderColor,
    width: "100%",
    // Wrapper takes full width of parent
    display: "block",
    // Block element for proper alignment
    boxSizing: "border-box"
  }, children: r });
}, oh = ({ element: e }) => {
  const t = e;
  let n = "14px 28px";
  return t.padding ? typeof t.padding == "number" ? n = `${t.padding}px` : n = `${t.padding.top ?? 14}px ${t.padding.right ?? 28}px ${t.padding.bottom ?? 14}px ${t.padding.left ?? 28}px` : (t.paddingX !== void 0 || t.paddingY !== void 0) && (n = `${t.paddingY ?? 12}px ${t.paddingX ?? 24}px`), /* @__PURE__ */ i.jsx("div", { style: { textAlign: t.align || "center", width: "100%" }, children: /* @__PURE__ */ i.jsx(
    "a",
    {
      href: t.link,
      target: t.target || "_blank",
      onClick: (r) => r.preventDefault(),
      style: {
        display: t.fullWidth ? "block" : "inline-block",
        width: t.fullWidth ? "100%" : typeof t.width == "number" ? `${t.width}px` : t.width || "auto",
        padding: n,
        backgroundColor: t.backgroundColor || "#0ea5e9",
        color: t.color || "#ffffff",
        textDecoration: "none",
        borderRadius: typeof t.borderRadius == "number" ? `${t.borderRadius}px` : `${t.borderRadius?.topLeft || 0}px ${t.borderRadius?.topRight || 0}px ${t.borderRadius?.bottomRight || 0}px ${t.borderRadius?.bottomLeft || 0}px`,
        fontSize: `${t.fontSize || 14}px`,
        fontFamily: t.fontFamily,
        border: t.borderWidth ? `${t.borderWidth}px ${t.borderStyle || "solid"} ${t.borderColor || "transparent"}` : "none",
        fontWeight: t.fontWeight || "normal",
        lineHeight: t.lineHeight || 1.2,
        textAlign: "center",
        boxSizing: "border-box"
      },
      children: t.text
    }
  ) });
}, sh = ({ element: e }) => /* @__PURE__ */ i.jsx("div", { style: { padding: "10px 0" }, children: /* @__PURE__ */ i.jsx(
  "hr",
  {
    style: {
      borderColor: e.color,
      borderTopWidth: `${e.height}px`,
      borderStyle: e.style || "solid",
      width: "100%"
    }
  }
) }), ih = ({ element: e }) => /* @__PURE__ */ i.jsx("div", { style: { height: `${e.height}px` } }), ah = ({ element: e }) => /* @__PURE__ */ i.jsx("div", { className: "relative w-full aspect-video bg-black flex items-center justify-center text-white", children: e.thumbnail ? /* @__PURE__ */ i.jsx("img", { src: e.thumbnail, className: "w-full h-full object-cover opacity-60" }) : /* @__PURE__ */ i.jsx("span", { className: "text-4xl opacity-50", children: "▶" }) }), lh = ({ element: e }) => /* @__PURE__ */ i.jsx(
  "div",
  {
    dangerouslySetInnerHTML: { __html: e.content },
    style: { width: "100%", overflow: "auto" }
  }
), ch = ({
  template: e,
  selectedElementId: t,
  zoom: n,
  deviceMode: r = "desktop",
  showGrid: o,
  onElementSelect: s,
  onElementUpdate: a,
  onElementDelete: l,
  onCanvasClick: d,
  onReorderElements: c,
  onMoveElement: p,
  onAddElementAtIndex: u,
  onAddChild: m
}) => {
  const [h, x] = ie(null), f = yf(
    Ks(Jo, {
      activationConstraint: {
        distance: 5
      }
    }),
    Ks(Xo, {
      coordinateGetter: Xp
    })
  ), v = (C) => {
    x(C.active.id);
  }, y = (C, j) => {
    if (!e) return !1;
    const O = (A) => {
      for (const P of A) {
        if (P.id === C) {
          const z = (V) => {
            for (const B of V)
              if (B.id === j || "children" in B && B.children && z(B.children))
                return !0;
            return !1;
          };
          return "children" in P && P.children ? z(P.children) : !1;
        }
        if ("children" in P && P.children && O(P.children))
          return !0;
      }
      return !1;
    };
    return O(e.elements);
  }, b = (C) => {
    const { active: j, over: O } = C;
    if (!O || !p) return;
    const A = j.id, P = O.id;
    A !== P && (y(A, P) || p(A, P));
  }, w = (C) => {
    x(null);
  }, S = {
    sideEffects: Da({
      styles: {
        active: {
          opacity: "0.5"
        }
      }
    })
  };
  if (!e)
    return /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex items-center justify-center bg-gray-50/50 rounded-lg", children: /* @__PURE__ */ i.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ i.jsx("div", { className: "text-6xl mb-4 grayscale opacity-50", children: "📧" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-muted-foreground text-lg", children: "Create or load a template" })
    ] }) });
  const N = r === "mobile" ? 320 : r === "tablet" ? 480 : e.width, E = e.elements.find((C) => C.id === h);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: St(
        "flex-1 overflow-auto relative bg-slate-100/50",
        o && "bg-grid"
      ),
      onClick: (C) => {
        C.target === C.currentTarget && d();
      },
      children: /* @__PURE__ */ i.jsx("div", { className: "min-h-full p-8 flex justify-center perspective-1000", children: /* @__PURE__ */ i.jsx(
        "div",
        {
          className: "relative transition-all duration-300 ease-in-out shadow-2xl",
          style: {
            width: `${N}px`,
            transform: `scale(${n / 100})`,
            transformOrigin: "top center"
          },
          onDragOver: (C) => {
            C.preventDefault(), C.dataTransfer.dropEffect = "copy";
          },
          onDrop: (C) => {
            C.preventDefault();
            const j = C.dataTransfer.getData("elementType");
            if (j && u) {
              const O = C.currentTarget.getBoundingClientRect(), A = n / 100, P = (C.clientY - O.top) / A, z = e.elements.filter((B) => !B._isFooter);
              let V = z.length;
              for (let B = 0; B < z.length; B++) {
                const q = z[B].id, I = document.querySelector(`[data-element-id="${q}"]`);
                if (I) {
                  const M = I.getBoundingClientRect(), T = (M.top - O.top + M.height / 2) / A;
                  if (P < T) {
                    V = B;
                    break;
                  }
                }
              }
              u(j, V);
            }
          },
          children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: "bg-white min-h-[800px] relative flex flex-col email-canvas-content",
              "data-device-mode": r,
              style: {
                backgroundColor: e.defaultBackgroundColor,
                // Set CSS custom property for device mode detection by footer
                "--canvas-device-mode": r
              },
              children: [
                /* @__PURE__ */ i.jsx("div", { className: "flex-1", children: /* @__PURE__ */ i.jsxs(
                  vp,
                  {
                    sensors: f,
                    collisionDetection: Sf,
                    onDragStart: v,
                    onDragOver: b,
                    onDragEnd: w,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        La,
                        {
                          items: e.elements.filter((C) => !C._isFooter).map((C) => C.id),
                          strategy: _a,
                          children: e.elements.filter((C) => !C._isFooter).map((C) => /* @__PURE__ */ i.jsx(
                            ir,
                            {
                              element: C,
                              isSelected: t === C.id,
                              onSelect: s,
                              onUpdate: a,
                              onDelete: l,
                              onAddChild: m,
                              selectedElementId: t,
                              deviceMode: r
                            },
                            C.id
                          ))
                        }
                      ),
                      Wo(
                        /* @__PURE__ */ i.jsx(Pp, { dropAnimation: S, children: E ? /* @__PURE__ */ i.jsx("div", { className: "opacity-80", children: /* @__PURE__ */ i.jsx(
                          ir,
                          {
                            element: E,
                            isSelected: !1,
                            onSelect: () => {
                            },
                            onUpdate: () => {
                            },
                            onDelete: () => {
                            },
                            deviceMode: r
                          }
                        ) }) : null }),
                        document.body
                      )
                    ]
                  }
                ) }),
                e.elements.filter((C) => C._isFooter).map((C) => /* @__PURE__ */ i.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ i.jsx(
                  ir,
                  {
                    element: C,
                    isSelected: !1,
                    onSelect: () => {
                    },
                    onUpdate: () => {
                    },
                    onDelete: () => {
                    },
                    onAddChild: m,
                    selectedElementId: t,
                    deviceMode: r
                  }
                ) }, C.id))
              ]
            }
          )
        }
      ) })
    }
  );
};
const Ba = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const dh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const uh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const li = (e) => {
  const t = uh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var fh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const ph = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const hh = zo(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: a,
    ...l
  }, d) => wo(
    "svg",
    {
      ref: d,
      ...fh,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Ba("lucide", o),
      ...!s && !ph(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...a.map(([c, p]) => wo(c, p)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const fe = (e, t) => {
  const n = zo(
    ({ className: r, ...o }, s) => wo(hh, {
      ref: s,
      iconNode: t,
      className: Ba(
        `lucide-${dh(li(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = li(e), n;
};
const mh = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], gh = fe("arrow-down-to-line", mh);
const xh = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], vh = fe("check", xh);
const bh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], es = fe("chevron-down", bh);
const yh = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], wh = fe("chevron-left", yh);
const Ch = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Sh = fe("chevron-right", Ch);
const Nh = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], jh = fe("chevron-up", Nh);
const Eh = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Rh = fe("circle-check", Eh);
const kh = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
], Th = fe("columns-2", kh);
const Ah = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], Dh = fe("columns-3", Ah);
const Oh = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7.5 3v18", key: "w0wo6v" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M16.5 3v18", key: "10tjh1" }]
], Ih = fe("columns-4", Oh);
const _h = [
  [
    "path",
    {
      d: "M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8",
      key: "1kchwa"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M11.7 14.2 7 17l-4.7-2.8", key: "1yk8tc" }],
  [
    "path",
    {
      d: "M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z",
      key: "19flxy"
    }
  ],
  ["path", { d: "M7 17v5", key: "1yj1jh" }]
], Ph = fe("file-box", _h);
const Mh = [
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M6 20V4", key: "1w1bmo" }],
  ["path", { d: "M18 20V4", key: "o2hl4u" }]
], Lh = fe("heading", Mh);
const $h = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Fh = fe("image", $h);
const Bh = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], zh = fe("info", Bh);
const Wh = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], Hh = fe("layout-grid", Wh);
const Vh = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
], Gh = fe("layout-template", Vh);
const Yh = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Uh = fe("loader-circle", Yh);
const Kh = [["path", { d: "M5 12h14", key: "1ays0h" }]], za = fe("minus", Kh);
const Xh = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], qh = fe("monitor", Xh);
const Jh = [
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  [
    "path",
    {
      d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
      key: "s0h3yz"
    }
  ]
], Zh = fe("mouse-pointer-click", Jh);
const Qh = [
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], em = fe("octagon-x", Qh);
const tm = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], nm = fe("panel-left", tm);
const rm = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }]
], om = fe("panel-right-close", rm);
const sm = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }]
], im = fe("panel-right-open", sm);
const am = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], lm = fe("panel-right", am);
const cm = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], dm = fe("plus", cm);
const um = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
], fm = fe("rectangle-horizontal", um);
const pm = [
  [
    "path",
    {
      d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
      key: "1bo67w"
    }
  ],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]
], hm = fe("shapes", pm);
const mm = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
], gm = fe("smartphone", mm);
const xm = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
], vm = fe("tablet", xm);
const bm = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], ym = fe("triangle-alert", bm);
const wm = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], Cm = fe("type", wm);
const Sm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Nm = fe("x", Sm), jm = ({
  zoom: e,
  isDirty: t,
  deviceMode: n,
  onDeviceModeChange: r,
  onZoomChange: o,
  onUndo: s,
  onRedo: a,
  onSave: l,
  onExport: d,
  onShowPreview: c,
  onOpenTemplates: p,
  hideSaveButton: u = !1,
  hideTemplatesButton: m = !1
}) => /* @__PURE__ */ i.jsxs("div", { className: "h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 gap-2 shrink-0", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1 w-1/4 min-w-[120px]", children: [
    /* @__PURE__ */ i.jsx(
      We,
      {
        variant: "ghost",
        size: "sm",
        onClick: s,
        title: "Undo",
        className: "w-9 h-9 p-0 flex items-center justify-center text-gray-700",
        children: /* @__PURE__ */ i.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ i.jsx("path", { d: "M3 7v6h6" }),
          /* @__PURE__ */ i.jsx("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      We,
      {
        variant: "ghost",
        size: "sm",
        onClick: a,
        title: "Redo",
        className: "w-9 h-9 p-0 flex items-center justify-center text-gray-400",
        children: /* @__PURE__ */ i.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ i.jsx("path", { d: "M21 7v6h-6" }),
          /* @__PURE__ */ i.jsx("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "h-6 w-px bg-gray-200 mx-1" })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 justify-center flex-1 min-w-0", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1 bg-gray-100 rounded-lg p-1 shrink-0", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => r("desktop"),
          className: `px-3 py-1 rounded text-xs font-medium transition-colors ${n === "desktop" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"}`,
          title: "Desktop (600px)",
          children: /* @__PURE__ */ i.jsx(qh, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => r("tablet"),
          className: `px-3 py-1 rounded text-xs font-medium transition-colors ${n === "tablet" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"}`,
          title: "Tablet (480px)",
          children: /* @__PURE__ */ i.jsx(vm, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => r("mobile"),
          className: `px-3 py-1 rounded text-xs font-medium transition-colors ${n === "mobile" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"}`,
          title: "Mobile (320px)",
          children: /* @__PURE__ */ i.jsx(gm, { className: "w-4 h-4" })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "h-5 w-px bg-gray-200 hidden sm:block" }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1 hidden sm:flex", children: [
      /* @__PURE__ */ i.jsx(
        We,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => o(Math.max(25, e - 10)),
          className: "w-7 h-7 p-0 text-xs",
          children: "−"
        }
      ),
      /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-gray-600 min-w-[32px] text-center font-medium", children: [
        e,
        "%"
      ] }),
      /* @__PURE__ */ i.jsx(
        We,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => o(Math.min(200, e + 10)),
          className: "w-7 h-7 p-0 text-xs",
          children: "+"
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2 w-1/4 min-w-[80px] justify-end", children: /* @__PURE__ */ i.jsx(
    We,
    {
      variant: "default",
      size: "sm",
      onClick: l,
      className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 h-9 shadow-sm",
      children: "Save"
    }
  ) })
] }), _e = g.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ i.jsx(
    "input",
    {
      type: t,
      className: ue(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
_e.displayName = "Input";
const Em = () => {
  const { mergeTags: e, mergeTagTriggers: t } = In(), [n, r] = ie(!1), [o, s] = ie([]), [a, l] = ie(0), [d, c] = ie(null), p = Te((x, f) => {
    const v = x.substring(0, f);
    let y = null, b = -1;
    for (const w of t) {
      const S = v.lastIndexOf(w);
      S > b && (b = S, y = w);
    }
    if (y && b !== -1) {
      const w = v.substring(b + y.length);
      if (w.includes(" ")) {
        r(!1), c(null);
        return;
      }
      const S = e.filter((C) => C.trigger === y), N = w.toLowerCase(), E = N ? S.filter(
        (C) => C.label.toLowerCase().includes(N) || C.value.toLowerCase().includes(N)
      ) : S;
      s(E), c(y), r(E.length > 0), l(0);
    } else
      r(!1), c(null);
  }, [e, t]), u = Te((x, f) => {
    if (n)
      switch (x.key) {
        case "ArrowDown":
          x.preventDefault(), l((v) => (v + 1) % o.length);
          break;
        case "ArrowUp":
          x.preventDefault(), l((v) => (v - 1 + o.length) % o.length);
          break;
        case "Enter":
        case "Tab":
          x.preventDefault(), o[a] && m(o[a], f);
          break;
        case "Escape":
          x.preventDefault(), h();
          break;
      }
  }, [n, o, a]), m = Te((x, f) => {
    f(x), h();
  }, []), h = Te(() => {
    r(!1), s([]), l(0), c(null);
  }, []);
  return {
    showDropdown: n,
    filteredTags: o,
    selectedIndex: a,
    handleInputChange: p,
    handleKeyDown: u,
    selectTag: m,
    closeDropdown: h
  };
};
var Rm = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], km = Rm.reduce((e, t) => {
  const n = /* @__PURE__ */ Vo(`Primitive.${t}`), r = g.forwardRef((o, s) => {
    const { asChild: a, ...l } = o, d = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ i.jsx(d, { ...l, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Tm = "Label", Wa = g.forwardRef((e, t) => /* @__PURE__ */ i.jsx(
  km.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Wa.displayName = Tm;
var Ha = Wa;
const Am = qi(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), J = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Ha,
  {
    ref: n,
    className: ue(Am(), e),
    ...t
  }
));
J.displayName = Ha.displayName;
function ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Dm(e, t) {
  const n = g.createContext(t), r = (s) => {
    const { children: a, ...l } = s, d = g.useMemo(() => l, Object.values(l));
    return /* @__PURE__ */ i.jsx(n.Provider, { value: d, children: a });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const a = g.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function pn(e, t = []) {
  let n = [];
  function r(s, a) {
    const l = g.createContext(a), d = n.length;
    n = [...n, a];
    const c = (u) => {
      const { scope: m, children: h, ...x } = u, f = m?.[e]?.[d] || l, v = g.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ i.jsx(f.Provider, { value: v, children: h });
    };
    c.displayName = s + "Provider";
    function p(u, m) {
      const h = m?.[e]?.[d] || l, x = g.useContext(h);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${u}\` must be used within \`${s}\``);
    }
    return [c, p];
  }
  const o = () => {
    const s = n.map((a) => g.createContext(a));
    return function(l) {
      const d = l?.[e] || s;
      return g.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: d } }),
        [l, d]
      );
    };
  };
  return o.scopeName = e, [r, Om(o, ...t)];
}
function Om(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((l, { useScope: d, scopeName: c }) => {
        const u = d(s)[`__scope${c}`];
        return { ...l, ...u };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function ci(e) {
  const t = /* @__PURE__ */ Im(e), n = g.forwardRef((r, o) => {
    const { children: s, ...a } = r, l = g.Children.toArray(s), d = l.find(Pm);
    if (d) {
      const c = d.props.children, p = l.map((u) => u === d ? g.Children.count(c) > 1 ? g.Children.only(null) : g.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: g.isValidElement(c) ? g.cloneElement(c, void 0, p) : null });
    }
    return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Im(e) {
  const t = g.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (g.isValidElement(o)) {
      const a = Lm(o), l = Mm(s, o.props);
      return o.type !== g.Fragment && (l.ref = r ? an(r, a) : a), g.cloneElement(o, l);
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var _m = /* @__PURE__ */ Symbol("radix.slottable");
function Pm(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _m;
}
function Mm(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
      const d = s(...l);
      return o(...l), d;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Lm(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Va(e) {
  const t = e + "CollectionProvider", [n, r] = pn(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (f) => {
    const { scope: v, children: y } = f, b = k.useRef(null), w = k.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ i.jsx(o, { scope: v, itemMap: w, collectionRef: b, children: y });
  };
  a.displayName = t;
  const l = e + "CollectionSlot", d = /* @__PURE__ */ ci(l), c = k.forwardRef(
    (f, v) => {
      const { scope: y, children: b } = f, w = s(l, y), S = Ee(v, w.collectionRef);
      return /* @__PURE__ */ i.jsx(d, { ref: S, children: b });
    }
  );
  c.displayName = l;
  const p = e + "CollectionItemSlot", u = "data-radix-collection-item", m = /* @__PURE__ */ ci(p), h = k.forwardRef(
    (f, v) => {
      const { scope: y, children: b, ...w } = f, S = k.useRef(null), N = Ee(v, S), E = s(p, y);
      return k.useEffect(() => (E.itemMap.set(S, { ref: S, ...w }), () => {
        E.itemMap.delete(S);
      })), /* @__PURE__ */ i.jsx(m, { [u]: "", ref: N, children: b });
    }
  );
  h.displayName = p;
  function x(f) {
    const v = s(e + "CollectionConsumer", f);
    return k.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, C) => w.indexOf(E.ref.current) - w.indexOf(C.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: h },
    x,
    r
  ];
}
var $e = globalThis?.document ? g.useLayoutEffect : () => {
}, $m = g[" useId ".trim().toString()] || (() => {
}), Fm = 0;
function Ot(e) {
  const [t, n] = g.useState($m());
  return $e(() => {
    n((r) => r ?? String(Fm++));
  }, [e]), t ? `radix-${t}` : "";
}
// @__NO_SIDE_EFFECTS__
function Bm(e) {
  const t = /* @__PURE__ */ zm(e), n = g.forwardRef((r, o) => {
    const { children: s, ...a } = r, l = g.Children.toArray(s), d = l.find(Hm);
    if (d) {
      const c = d.props.children, p = l.map((u) => u === d ? g.Children.count(c) > 1 ? g.Children.only(null) : g.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: g.isValidElement(c) ? g.cloneElement(c, void 0, p) : null });
    }
    return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function zm(e) {
  const t = g.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (g.isValidElement(o)) {
      const a = Gm(o), l = Vm(s, o.props);
      return o.type !== g.Fragment && (l.ref = r ? an(r, a) : a), g.cloneElement(o, l);
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Wm = /* @__PURE__ */ Symbol("radix.slottable");
function Hm(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Wm;
}
function Vm(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
      const d = s(...l);
      return o(...l), d;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Gm(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ym = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], pe = Ym.reduce((e, t) => {
  const n = /* @__PURE__ */ Bm(`Primitive.${t}`), r = g.forwardRef((o, s) => {
    const { asChild: a, ...l } = o, d = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ i.jsx(d, { ...l, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Um(e, t) {
  e && Rr.flushSync(() => e.dispatchEvent(t));
}
function _t(e) {
  const t = g.useRef(e);
  return g.useEffect(() => {
    t.current = e;
  }), g.useMemo(() => (...n) => t.current?.(...n), []);
}
var Km = g[" useInsertionEffect ".trim().toString()] || $e;
function Tn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = Xm({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, d = l ? e : o;
  {
    const p = g.useRef(e !== void 0);
    g.useEffect(() => {
      const u = p.current;
      u !== l && console.warn(
        `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), p.current = l;
    }, [l, r]);
  }
  const c = g.useCallback(
    (p) => {
      if (l) {
        const u = qm(p) ? p(e) : p;
        u !== e && a.current?.(u);
      } else
        s(p);
    },
    [l, e, s, a]
  );
  return [d, c];
}
function Xm({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = g.useState(e), o = g.useRef(n), s = g.useRef(t);
  return Km(() => {
    s.current = t;
  }, [t]), g.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function qm(e) {
  return typeof e == "function";
}
var Jm = g.createContext(void 0);
function ts(e) {
  const t = g.useContext(Jm);
  return e || t || "ltr";
}
var uo = "rovingFocusGroup.onEntryFocus", Zm = { bubbles: !1, cancelable: !0 }, $n = "RovingFocusGroup", [ko, Ga, Qm] = Va($n), [eg, Ya] = pn(
  $n,
  [Qm]
), [tg, ng] = eg($n), Ua = g.forwardRef(
  (e, t) => /* @__PURE__ */ i.jsx(ko.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ i.jsx(ko.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ i.jsx(rg, { ...e, ref: t }) }) })
);
Ua.displayName = $n;
var rg = g.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: d,
    onEntryFocus: c,
    preventScrollOnEntryFocus: p = !1,
    ...u
  } = e, m = g.useRef(null), h = Ee(t, m), x = ts(s), [f, v] = Tn({
    prop: a,
    defaultProp: l ?? null,
    onChange: d,
    caller: $n
  }), [y, b] = g.useState(!1), w = _t(c), S = Ga(n), N = g.useRef(!1), [E, C] = g.useState(0);
  return g.useEffect(() => {
    const j = m.current;
    if (j)
      return j.addEventListener(uo, w), () => j.removeEventListener(uo, w);
  }, [w]), /* @__PURE__ */ i.jsx(
    tg,
    {
      scope: n,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: f,
      onItemFocus: g.useCallback(
        (j) => v(j),
        [v]
      ),
      onItemShiftTab: g.useCallback(() => b(!0), []),
      onFocusableItemAdd: g.useCallback(
        () => C((j) => j + 1),
        []
      ),
      onFocusableItemRemove: g.useCallback(
        () => C((j) => j - 1),
        []
      ),
      children: /* @__PURE__ */ i.jsx(
        pe.div,
        {
          tabIndex: y || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: ce(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: ce(e.onFocus, (j) => {
            const O = !N.current;
            if (j.target === j.currentTarget && O && !y) {
              const A = new CustomEvent(uo, Zm);
              if (j.currentTarget.dispatchEvent(A), !A.defaultPrevented) {
                const P = S().filter((I) => I.focusable), z = P.find((I) => I.active), V = P.find((I) => I.id === f), q = [z, V, ...P].filter(
                  Boolean
                ).map((I) => I.ref.current);
                qa(q, p);
              }
            }
            N.current = !1;
          }),
          onBlur: ce(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Ka = "RovingFocusGroupItem", Xa = g.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...l
    } = e, d = Ot(), c = s || d, p = ng(Ka, n), u = p.currentTabStopId === c, m = Ga(n), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: f } = p;
    return g.useEffect(() => {
      if (r)
        return h(), () => x();
    }, [r, h, x]), /* @__PURE__ */ i.jsx(
      ko.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ i.jsx(
          pe.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": p.orientation,
            ...l,
            ref: t,
            onMouseDown: ce(e.onMouseDown, (v) => {
              r ? p.onItemFocus(c) : v.preventDefault();
            }),
            onFocus: ce(e.onFocus, () => p.onItemFocus(c)),
            onKeyDown: ce(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const y = ig(v, p.orientation, p.dir);
              if (y !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let w = m().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") w.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && w.reverse();
                  const S = w.indexOf(v.currentTarget);
                  w = p.loop ? ag(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => qa(w));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: u, hasTabStop: f != null }) : a
          }
        )
      }
    );
  }
);
Xa.displayName = Ka;
var og = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function sg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ig(e, t, n) {
  const r = sg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return og[r];
}
function qa(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function ag(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var lg = Ua, cg = Xa;
function dg(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
var Fn = (e) => {
  const { present: t, children: n } = e, r = ug(t), o = typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n), s = Ee(r.ref, fg(o));
  return typeof n == "function" || r.isPresent ? g.cloneElement(o, { ref: s }) : null;
};
Fn.displayName = "Presence";
function ug(e) {
  const [t, n] = g.useState(), r = g.useRef(null), o = g.useRef(e), s = g.useRef("none"), a = e ? "mounted" : "unmounted", [l, d] = dg(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return g.useEffect(() => {
    const c = Zn(r.current);
    s.current = l === "mounted" ? c : "none";
  }, [l]), $e(() => {
    const c = r.current, p = o.current;
    if (p !== e) {
      const m = s.current, h = Zn(c);
      e ? d("MOUNT") : h === "none" || c?.display === "none" ? d("UNMOUNT") : d(p && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, d]), $e(() => {
    if (t) {
      let c;
      const p = t.ownerDocument.defaultView ?? window, u = (h) => {
        const f = Zn(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && f && (d("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, m = (h) => {
        h.target === t && (s.current = Zn(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        p.clearTimeout(c), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: g.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function Zn(e) {
  return e?.animationName || "none";
}
function fg(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Pr = "Tabs", [pg] = pn(Pr, [
  Ya
]), Ja = Ya(), [hg, ns] = pg(Pr), Za = g.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: l,
      activationMode: d = "automatic",
      ...c
    } = e, p = ts(l), [u, m] = Tn({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: Pr
    });
    return /* @__PURE__ */ i.jsx(
      hg,
      {
        scope: n,
        baseId: Ot(),
        value: u,
        onValueChange: m,
        orientation: a,
        dir: p,
        activationMode: d,
        children: /* @__PURE__ */ i.jsx(
          pe.div,
          {
            dir: p,
            "data-orientation": a,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
Za.displayName = Pr;
var Qa = "TabsList", el = g.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = ns(Qa, n), a = Ja(n);
    return /* @__PURE__ */ i.jsx(
      lg,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ i.jsx(
          pe.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
el.displayName = Qa;
var tl = "TabsTrigger", nl = g.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = ns(tl, n), l = Ja(n), d = sl(a.baseId, r), c = il(a.baseId, r), p = r === a.value;
    return /* @__PURE__ */ i.jsx(
      cg,
      {
        asChild: !0,
        ...l,
        focusable: !o,
        active: p,
        children: /* @__PURE__ */ i.jsx(
          pe.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": p,
            "aria-controls": c,
            "data-state": p ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: d,
            ...s,
            ref: t,
            onMouseDown: ce(e.onMouseDown, (u) => {
              !o && u.button === 0 && u.ctrlKey === !1 ? a.onValueChange(r) : u.preventDefault();
            }),
            onKeyDown: ce(e.onKeyDown, (u) => {
              [" ", "Enter"].includes(u.key) && a.onValueChange(r);
            }),
            onFocus: ce(e.onFocus, () => {
              const u = a.activationMode !== "manual";
              !p && !o && u && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
nl.displayName = tl;
var rl = "TabsContent", ol = g.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, l = ns(rl, n), d = sl(l.baseId, r), c = il(l.baseId, r), p = r === l.value, u = g.useRef(p);
    return g.useEffect(() => {
      const m = requestAnimationFrame(() => u.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ i.jsx(Fn, { present: o || p, children: ({ present: m }) => /* @__PURE__ */ i.jsx(
      pe.div,
      {
        "data-state": p ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": d,
        hidden: !m,
        id: c,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: u.current ? "0s" : void 0
        },
        children: m && s
      }
    ) });
  }
);
ol.displayName = rl;
function sl(e, t) {
  return `${e}-trigger-${t}`;
}
function il(e, t) {
  return `${e}-content-${t}`;
}
var mg = Za, al = el, ll = nl, cl = ol;
const dl = mg, rs = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  al,
  {
    ref: n,
    className: ue(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
rs.displayName = al.displayName;
const zt = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  ll,
  {
    ref: n,
    className: ue(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
zt.displayName = ll.displayName;
const Wt = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  cl,
  {
    ref: n,
    className: ue(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Wt.displayName = cl.displayName;
function di(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function gg(e, t = globalThis?.document) {
  const n = _t(e);
  g.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var xg = "DismissableLayer", To = "dismissableLayer.update", vg = "dismissableLayer.pointerDownOutside", bg = "dismissableLayer.focusOutside", ui, ul = g.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), os = g.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: l,
      ...d
    } = e, c = g.useContext(ul), [p, u] = g.useState(null), m = p?.ownerDocument ?? globalThis?.document, [, h] = g.useState({}), x = Ee(t, (C) => u(C)), f = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = f.indexOf(v), b = p ? f.indexOf(p) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= y, N = Cg((C) => {
      const j = C.target, O = [...c.branches].some((A) => A.contains(j));
      !S || O || (o?.(C), a?.(C), C.defaultPrevented || l?.());
    }, m), E = Sg((C) => {
      const j = C.target;
      [...c.branches].some((A) => A.contains(j)) || (s?.(C), a?.(C), C.defaultPrevented || l?.());
    }, m);
    return gg((C) => {
      b === c.layers.size - 1 && (r?.(C), !C.defaultPrevented && l && (C.preventDefault(), l()));
    }, m), g.useEffect(() => {
      if (p)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (ui = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(p)), c.layers.add(p), fi(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = ui);
        };
    }, [p, m, n, c]), g.useEffect(() => () => {
      p && (c.layers.delete(p), c.layersWithOutsidePointerEventsDisabled.delete(p), fi());
    }, [p, c]), g.useEffect(() => {
      const C = () => h({});
      return document.addEventListener(To, C), () => document.removeEventListener(To, C);
    }, []), /* @__PURE__ */ i.jsx(
      pe.div,
      {
        ...d,
        ref: x,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ce(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: ce(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: ce(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
os.displayName = xg;
var yg = "DismissableLayerBranch", wg = g.forwardRef((e, t) => {
  const n = g.useContext(ul), r = g.useRef(null), o = Ee(t, r);
  return g.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ i.jsx(pe.div, { ...e, ref: o });
});
wg.displayName = yg;
function Cg(e, t = globalThis?.document) {
  const n = _t(e), r = g.useRef(!1), o = g.useRef(() => {
  });
  return g.useEffect(() => {
    const s = (l) => {
      if (l.target && !r.current) {
        let d = function() {
          fl(
            vg,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Sg(e, t = globalThis?.document) {
  const n = _t(e), r = g.useRef(!1);
  return g.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && fl(bg, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function fi() {
  const e = new CustomEvent(To);
  document.dispatchEvent(e);
}
function fl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Um(o, s) : o.dispatchEvent(s);
}
var fo = 0;
function pl() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? pi()), document.body.insertAdjacentElement("beforeend", e[1] ?? pi()), fo++, () => {
      fo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), fo--;
    };
  }, []);
}
function pi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var po = "focusScope.autoFocusOnMount", ho = "focusScope.autoFocusOnUnmount", hi = { bubbles: !1, cancelable: !0 }, Ng = "FocusScope", ss = g.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [l, d] = g.useState(null), c = _t(o), p = _t(s), u = g.useRef(null), m = Ee(t, (f) => d(f)), h = g.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  g.useEffect(() => {
    if (r) {
      let f = function(w) {
        if (h.paused || !l) return;
        const S = w.target;
        l.contains(S) ? u.current = S : At(u.current, { select: !0 });
      }, v = function(w) {
        if (h.paused || !l) return;
        const S = w.relatedTarget;
        S !== null && (l.contains(S) || At(u.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const N of w)
            N.removedNodes.length > 0 && At(l);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const b = new MutationObserver(y);
      return l && b.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), b.disconnect();
      };
    }
  }, [r, l, h.paused]), g.useEffect(() => {
    if (l) {
      gi.add(h);
      const f = document.activeElement;
      if (!l.contains(f)) {
        const y = new CustomEvent(po, hi);
        l.addEventListener(po, c), l.dispatchEvent(y), y.defaultPrevented || (jg(Ag(hl(l)), { select: !0 }), document.activeElement === f && At(l));
      }
      return () => {
        l.removeEventListener(po, c), setTimeout(() => {
          const y = new CustomEvent(ho, hi);
          l.addEventListener(ho, p), l.dispatchEvent(y), y.defaultPrevented || At(f ?? document.body, { select: !0 }), l.removeEventListener(ho, p), gi.remove(h);
        }, 0);
      };
    }
  }, [l, c, p, h]);
  const x = g.useCallback(
    (f) => {
      if (!n && !r || h.paused) return;
      const v = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, y = document.activeElement;
      if (v && y) {
        const b = f.currentTarget, [w, S] = Eg(b);
        w && S ? !f.shiftKey && y === S ? (f.preventDefault(), n && At(w, { select: !0 })) : f.shiftKey && y === w && (f.preventDefault(), n && At(S, { select: !0 })) : y === b && f.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ i.jsx(pe.div, { tabIndex: -1, ...a, ref: m, onKeyDown: x });
});
ss.displayName = Ng;
function jg(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (At(r, { select: t }), document.activeElement !== n) return;
}
function Eg(e) {
  const t = hl(e), n = mi(t, e), r = mi(t.reverse(), e);
  return [n, r];
}
function hl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function mi(e, t) {
  for (const n of e)
    if (!Rg(n, { upTo: t })) return n;
}
function Rg(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function kg(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function At(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && kg(e) && t && e.select();
  }
}
var gi = Tg();
function Tg() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = xi(e, t), e.unshift(t);
    },
    remove(t) {
      e = xi(e, t), e[0]?.resume();
    }
  };
}
function xi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ag(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Dg = ["top", "right", "bottom", "left"], Pt = Math.min, Ke = Math.max, vr = Math.round, Qn = Math.floor, pt = (e) => ({
  x: e,
  y: e
}), Og = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ig = {
  start: "end",
  end: "start"
};
function Ao(e, t, n) {
  return Ke(e, Pt(t, n));
}
function jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Et(e) {
  return e.split("-")[0];
}
function hn(e) {
  return e.split("-")[1];
}
function is(e) {
  return e === "x" ? "y" : "x";
}
function as(e) {
  return e === "y" ? "height" : "width";
}
const _g = /* @__PURE__ */ new Set(["top", "bottom"]);
function ft(e) {
  return _g.has(Et(e)) ? "y" : "x";
}
function ls(e) {
  return is(ft(e));
}
function Pg(e, t, n) {
  n === void 0 && (n = !1);
  const r = hn(e), o = ls(e), s = as(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = br(a)), [a, br(a)];
}
function Mg(e) {
  const t = br(e);
  return [Do(e), t, Do(t)];
}
function Do(e) {
  return e.replace(/start|end/g, (t) => Ig[t]);
}
const vi = ["left", "right"], bi = ["right", "left"], Lg = ["top", "bottom"], $g = ["bottom", "top"];
function Fg(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? bi : vi : t ? vi : bi;
    case "left":
    case "right":
      return t ? Lg : $g;
    default:
      return [];
  }
}
function Bg(e, t, n, r) {
  const o = hn(e);
  let s = Fg(Et(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(Do)))), s;
}
function br(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Og[t]);
}
function zg(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ml(e) {
  return typeof e != "number" ? zg(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function yr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function yi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = ft(t), a = ls(t), l = as(a), d = Et(t), c = s === "y", p = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, m = r[l] / 2 - o[l] / 2;
  let h;
  switch (d) {
    case "top":
      h = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (hn(t)) {
    case "start":
      h[a] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      h[a] += m * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const Wg = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, l = s.filter(Boolean), d = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: u
  } = yi(c, r, d), m = r, h = {}, x = 0;
  for (let f = 0; f < l.length; f++) {
    const {
      name: v,
      fn: y
    } = l[f], {
      x: b,
      y: w,
      data: S,
      reset: N
    } = await y({
      x: p,
      y: u,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = b ?? p, u = w ?? u, h = {
      ...h,
      [v]: {
        ...h[v],
        ...S
      }
    }, N && x <= 50 && (x++, typeof N == "object" && (N.placement && (m = N.placement), N.rects && (c = N.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: p,
      y: u
    } = yi(c, m, d)), f = -1);
  }
  return {
    x: p,
    y: u,
    placement: m,
    strategy: o,
    middlewareData: h
  };
};
async function An(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: a,
    elements: l,
    strategy: d
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = jt(t, e), x = ml(h), v = l[m ? u === "floating" ? "reference" : "floating" : u], y = yr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: p,
    strategy: d
  })), b = u === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), S = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = yr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: b,
    offsetParent: w,
    strategy: d
  }) : b);
  return {
    top: (y.top - N.top + x.top) / S.y,
    bottom: (N.bottom - y.bottom + x.bottom) / S.y,
    left: (y.left - N.left + x.left) / S.x,
    right: (N.right - y.right + x.right) / S.x
  };
}
const Hg = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: a,
      elements: l,
      middlewareData: d
    } = t, {
      element: c,
      padding: p = 0
    } = jt(e, t) || {};
    if (c == null)
      return {};
    const u = ml(p), m = {
      x: n,
      y: r
    }, h = ls(o), x = as(h), f = await a.getDimensions(c), v = h === "y", y = v ? "top" : "left", b = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", S = s.reference[x] + s.reference[h] - m[h] - s.floating[x], N = m[h] - s.reference[h], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let C = E ? E[w] : 0;
    (!C || !await (a.isElement == null ? void 0 : a.isElement(E))) && (C = l.floating[w] || s.floating[x]);
    const j = S / 2 - N / 2, O = C / 2 - f[x] / 2 - 1, A = Pt(u[y], O), P = Pt(u[b], O), z = A, V = C - f[x] - P, B = C / 2 - f[x] / 2 + j, q = Ao(z, B, V), I = !d.arrow && hn(o) != null && B !== q && s.reference[x] / 2 - (B < z ? A : P) - f[x] / 2 < 0, M = I ? B < z ? B - z : B - V : 0;
    return {
      [h]: m[h] + M,
      data: {
        [h]: q,
        centerOffset: B - q - M,
        ...I && {
          alignmentOffset: M
        }
      },
      reset: I
    };
  }
}), Vg = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: l,
        platform: d,
        elements: c
      } = t, {
        mainAxis: p = !0,
        crossAxis: u = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: f = !0,
        ...v
      } = jt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = Et(o), b = ft(l), w = Et(l) === l, S = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), N = m || (w || !f ? [br(l)] : Mg(l)), E = x !== "none";
      !m && E && N.push(...Bg(l, f, x, S));
      const C = [l, ...N], j = await An(t, v), O = [];
      let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (p && O.push(j[y]), u) {
        const B = Pg(o, a, S);
        O.push(j[B[0]], j[B[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: O
      }], !O.every((B) => B <= 0)) {
        var P, z;
        const B = (((P = s.flip) == null ? void 0 : P.index) || 0) + 1, q = C[B];
        if (q && (!(u === "alignment" ? b !== ft(q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((T) => ft(T.placement) === b ? T.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: A
            },
            reset: {
              placement: q
            }
          };
        let I = (z = A.filter((M) => M.overflows[0] <= 0).sort((M, T) => M.overflows[1] - T.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!I)
          switch (h) {
            case "bestFit": {
              var V;
              const M = (V = A.filter((T) => {
                if (E) {
                  const K = ft(T.placement);
                  return K === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((K) => K > 0).reduce((K, oe) => K + oe, 0)]).sort((T, K) => T[1] - K[1])[0]) == null ? void 0 : V[0];
              M && (I = M);
              break;
            }
            case "initialPlacement":
              I = l;
              break;
          }
        if (o !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function wi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ci(e) {
  return Dg.some((t) => e[t] >= 0);
}
const Gg = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = jt(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await An(t, {
            ...o,
            elementContext: "reference"
          }), a = wi(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Ci(a)
            }
          };
        }
        case "escaped": {
          const s = await An(t, {
            ...o,
            altBoundary: !0
          }), a = wi(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Ci(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, gl = /* @__PURE__ */ new Set(["left", "top"]);
async function Yg(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Et(n), l = hn(n), d = ft(n) === "y", c = gl.has(a) ? -1 : 1, p = s && d ? -1 : 1, u = jt(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: x
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return l && typeof x == "number" && (h = l === "end" ? x * -1 : x), d ? {
    x: h * p,
    y: m * c
  } : {
    x: m * c,
    y: h * p
  };
}
const Ug = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: l
      } = t, d = await Yg(t, e);
      return a === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + d.x,
        y: s + d.y,
        data: {
          ...d,
          placement: a
        }
      };
    }
  };
}, Kg = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (v) => {
            let {
              x: y,
              y: b
            } = v;
            return {
              x: y,
              y: b
            };
          }
        },
        ...d
      } = jt(e, t), c = {
        x: n,
        y: r
      }, p = await An(t, d), u = ft(Et(o)), m = is(u);
      let h = c[m], x = c[u];
      if (s) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = h + p[v], w = h - p[y];
        h = Ao(b, h, w);
      }
      if (a) {
        const v = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", b = x + p[v], w = x - p[y];
        x = Ao(b, x, w);
      }
      const f = l.fn({
        ...t,
        [m]: h,
        [u]: x
      });
      return {
        ...f,
        data: {
          x: f.x - n,
          y: f.y - r,
          enabled: {
            [m]: s,
            [u]: a
          }
        }
      };
    }
  };
}, Xg = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: l = 0,
        mainAxis: d = !0,
        crossAxis: c = !0
      } = jt(e, t), p = {
        x: n,
        y: r
      }, u = ft(o), m = is(u);
      let h = p[m], x = p[u];
      const f = jt(l, t), v = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...f
      };
      if (d) {
        const w = m === "y" ? "height" : "width", S = s.reference[m] - s.floating[w] + v.mainAxis, N = s.reference[m] + s.reference[w] - v.mainAxis;
        h < S ? h = S : h > N && (h = N);
      }
      if (c) {
        var y, b;
        const w = m === "y" ? "width" : "height", S = gl.has(Et(o)), N = s.reference[u] - s.floating[w] + (S && ((y = a.offset) == null ? void 0 : y[u]) || 0) + (S ? 0 : v.crossAxis), E = s.reference[u] + s.reference[w] + (S ? 0 : ((b = a.offset) == null ? void 0 : b[u]) || 0) - (S ? v.crossAxis : 0);
        x < N ? x = N : x > E && (x = E);
      }
      return {
        [m]: h,
        [u]: x
      };
    }
  };
}, qg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: a,
        elements: l
      } = t, {
        apply: d = () => {
        },
        ...c
      } = jt(e, t), p = await An(t, c), u = Et(o), m = hn(o), h = ft(o) === "y", {
        width: x,
        height: f
      } = s.floating;
      let v, y;
      u === "top" || u === "bottom" ? (v = u, y = m === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = u, v = m === "end" ? "top" : "bottom");
      const b = f - p.top - p.bottom, w = x - p.left - p.right, S = Pt(f - p[v], b), N = Pt(x - p[y], w), E = !t.middlewareData.shift;
      let C = S, j = N;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = w), (r = t.middlewareData.shift) != null && r.enabled.y && (C = b), E && !m) {
        const A = Ke(p.left, 0), P = Ke(p.right, 0), z = Ke(p.top, 0), V = Ke(p.bottom, 0);
        h ? j = x - 2 * (A !== 0 || P !== 0 ? A + P : Ke(p.left, p.right)) : C = f - 2 * (z !== 0 || V !== 0 ? z + V : Ke(p.top, p.bottom));
      }
      await d({
        ...t,
        availableWidth: j,
        availableHeight: C
      });
      const O = await a.getDimensions(l.floating);
      return x !== O.width || f !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Mr() {
  return typeof window < "u";
}
function mn(e) {
  return xl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  var t;
  return (t = (xl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function xl(e) {
  return Mr() ? e instanceof Node || e instanceof Xe(e).Node : !1;
}
function ot(e) {
  return Mr() ? e instanceof Element || e instanceof Xe(e).Element : !1;
}
function ht(e) {
  return Mr() ? e instanceof HTMLElement || e instanceof Xe(e).HTMLElement : !1;
}
function Si(e) {
  return !Mr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xe(e).ShadowRoot;
}
const Jg = /* @__PURE__ */ new Set(["inline", "contents"]);
function Bn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = st(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Jg.has(o);
}
const Zg = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Qg(e) {
  return Zg.has(mn(e));
}
const ex = [":popover-open", ":modal"];
function Lr(e) {
  return ex.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const tx = ["transform", "translate", "scale", "rotate", "perspective"], nx = ["transform", "translate", "scale", "rotate", "perspective", "filter"], rx = ["paint", "layout", "strict", "content"];
function cs(e) {
  const t = ds(), n = ot(e) ? st(e) : e;
  return tx.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || nx.some((r) => (n.willChange || "").includes(r)) || rx.some((r) => (n.contain || "").includes(r));
}
function ox(e) {
  let t = Mt(e);
  for (; ht(t) && !sn(t); ) {
    if (cs(t))
      return t;
    if (Lr(t))
      return null;
    t = Mt(t);
  }
  return null;
}
function ds() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const sx = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function sn(e) {
  return sx.has(mn(e));
}
function st(e) {
  return Xe(e).getComputedStyle(e);
}
function $r(e) {
  return ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mt(e) {
  if (mn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Si(e) && e.host || // Fallback.
    mt(e)
  );
  return Si(t) ? t.host : t;
}
function vl(e) {
  const t = Mt(e);
  return sn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ht(t) && Bn(t) ? t : vl(t);
}
function Dn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = vl(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xe(o);
  if (s) {
    const l = Oo(a);
    return t.concat(a, a.visualViewport || [], Bn(o) ? o : [], l && n ? Dn(l) : []);
  }
  return t.concat(o, Dn(o, [], n));
}
function Oo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bl(e) {
  const t = st(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ht(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, l = vr(n) !== s || vr(r) !== a;
  return l && (n = s, r = a), {
    width: n,
    height: r,
    $: l
  };
}
function us(e) {
  return ot(e) ? e : e.contextElement;
}
function rn(e) {
  const t = us(e);
  if (!ht(t))
    return pt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = bl(t);
  let a = (s ? vr(n.width) : n.width) / r, l = (s ? vr(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
const ix = /* @__PURE__ */ pt(0);
function yl(e) {
  const t = Xe(e);
  return !ds() || !t.visualViewport ? ix : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ax(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Xe(e) ? !1 : t;
}
function Ht(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = us(e);
  let a = pt(1);
  t && (r ? ot(r) && (a = rn(r)) : a = rn(e));
  const l = ax(s, n, r) ? yl(s) : pt(0);
  let d = (o.left + l.x) / a.x, c = (o.top + l.y) / a.y, p = o.width / a.x, u = o.height / a.y;
  if (s) {
    const m = Xe(s), h = r && ot(r) ? Xe(r) : r;
    let x = m, f = Oo(x);
    for (; f && r && h !== x; ) {
      const v = rn(f), y = f.getBoundingClientRect(), b = st(f), w = y.left + (f.clientLeft + parseFloat(b.paddingLeft)) * v.x, S = y.top + (f.clientTop + parseFloat(b.paddingTop)) * v.y;
      d *= v.x, c *= v.y, p *= v.x, u *= v.y, d += w, c += S, x = Xe(f), f = Oo(x);
    }
  }
  return yr({
    width: p,
    height: u,
    x: d,
    y: c
  });
}
function Fr(e, t) {
  const n = $r(e).scrollLeft;
  return t ? t.left + n : Ht(mt(e)).left + n;
}
function wl(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Fr(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function lx(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = mt(r), l = t ? Lr(t.floating) : !1;
  if (r === a || l && s)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = pt(1);
  const p = pt(0), u = ht(r);
  if ((u || !u && !s) && ((mn(r) !== "body" || Bn(a)) && (d = $r(r)), ht(r))) {
    const h = Ht(r);
    c = rn(r), p.x = h.x + r.clientLeft, p.y = h.y + r.clientTop;
  }
  const m = a && !u && !s ? wl(a, d) : pt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - d.scrollLeft * c.x + p.x + m.x,
    y: n.y * c.y - d.scrollTop * c.y + p.y + m.y
  };
}
function cx(e) {
  return Array.from(e.getClientRects());
}
function dx(e) {
  const t = mt(e), n = $r(e), r = e.ownerDocument.body, o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Fr(e);
  const l = -n.scrollTop;
  return st(r).direction === "rtl" && (a += Ke(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
const Ni = 25;
function ux(e, t) {
  const n = Xe(e), r = mt(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, l = 0, d = 0;
  if (o) {
    s = o.width, a = o.height;
    const p = ds();
    (!p || p && t === "fixed") && (l = o.offsetLeft, d = o.offsetTop);
  }
  const c = Fr(r);
  if (c <= 0) {
    const p = r.ownerDocument, u = p.body, m = getComputedStyle(u), h = p.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, x = Math.abs(r.clientWidth - u.clientWidth - h);
    x <= Ni && (s -= x);
  } else c <= Ni && (s += c);
  return {
    width: s,
    height: a,
    x: l,
    y: d
  };
}
const fx = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function px(e, t) {
  const n = Ht(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = ht(e) ? rn(e) : pt(1), a = e.clientWidth * s.x, l = e.clientHeight * s.y, d = o * s.x, c = r * s.y;
  return {
    width: a,
    height: l,
    x: d,
    y: c
  };
}
function ji(e, t, n) {
  let r;
  if (t === "viewport")
    r = ux(e, n);
  else if (t === "document")
    r = dx(mt(e));
  else if (ot(t))
    r = px(t, n);
  else {
    const o = yl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return yr(r);
}
function Cl(e, t) {
  const n = Mt(e);
  return n === t || !ot(n) || sn(n) ? !1 : st(n).position === "fixed" || Cl(n, t);
}
function hx(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Dn(e, [], !1).filter((l) => ot(l) && mn(l) !== "body"), o = null;
  const s = st(e).position === "fixed";
  let a = s ? Mt(e) : e;
  for (; ot(a) && !sn(a); ) {
    const l = st(a), d = cs(a);
    !d && l.position === "fixed" && (o = null), (s ? !d && !o : !d && l.position === "static" && !!o && fx.has(o.position) || Bn(a) && !d && Cl(e, a)) ? r = r.filter((p) => p !== a) : o = l, a = Mt(a);
  }
  return t.set(e, r), r;
}
function mx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Lr(t) ? [] : hx(t, this._c) : [].concat(n), r], l = a[0], d = a.reduce((c, p) => {
    const u = ji(t, p, o);
    return c.top = Ke(u.top, c.top), c.right = Pt(u.right, c.right), c.bottom = Pt(u.bottom, c.bottom), c.left = Ke(u.left, c.left), c;
  }, ji(t, l, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function gx(e) {
  const {
    width: t,
    height: n
  } = bl(e);
  return {
    width: t,
    height: n
  };
}
function xx(e, t, n) {
  const r = ht(t), o = mt(t), s = n === "fixed", a = Ht(e, !0, s, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = pt(0);
  function c() {
    d.x = Fr(o);
  }
  if (r || !r && !s)
    if ((mn(t) !== "body" || Bn(o)) && (l = $r(t)), r) {
      const h = Ht(t, !0, s, t);
      d.x = h.x + t.clientLeft, d.y = h.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const p = o && !r && !s ? wl(o, l) : pt(0), u = a.left + l.scrollLeft - d.x - p.x, m = a.top + l.scrollTop - d.y - p.y;
  return {
    x: u,
    y: m,
    width: a.width,
    height: a.height
  };
}
function mo(e) {
  return st(e).position === "static";
}
function Ei(e, t) {
  if (!ht(e) || st(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mt(e) === n && (n = n.ownerDocument.body), n;
}
function Sl(e, t) {
  const n = Xe(e);
  if (Lr(e))
    return n;
  if (!ht(e)) {
    let o = Mt(e);
    for (; o && !sn(o); ) {
      if (ot(o) && !mo(o))
        return o;
      o = Mt(o);
    }
    return n;
  }
  let r = Ei(e, t);
  for (; r && Qg(r) && mo(r); )
    r = Ei(r, t);
  return r && sn(r) && mo(r) && !cs(r) ? n : r || ox(e) || n;
}
const vx = async function(e) {
  const t = this.getOffsetParent || Sl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: xx(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function bx(e) {
  return st(e).direction === "rtl";
}
const yx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: lx,
  getDocumentElement: mt,
  getClippingRect: mx,
  getOffsetParent: Sl,
  getElementRects: vx,
  getClientRects: cx,
  getDimensions: gx,
  getScale: rn,
  isElement: ot,
  isRTL: bx
};
function Nl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function wx(e, t) {
  let n = null, r;
  const o = mt(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function a(l, d) {
    l === void 0 && (l = !1), d === void 0 && (d = 1), s();
    const c = e.getBoundingClientRect(), {
      left: p,
      top: u,
      width: m,
      height: h
    } = c;
    if (l || t(), !m || !h)
      return;
    const x = Qn(u), f = Qn(o.clientWidth - (p + m)), v = Qn(o.clientHeight - (u + h)), y = Qn(p), w = {
      rootMargin: -x + "px " + -f + "px " + -v + "px " + -y + "px",
      threshold: Ke(0, Pt(1, d)) || 1
    };
    let S = !0;
    function N(E) {
      const C = E[0].intersectionRatio;
      if (C !== d) {
        if (!S)
          return a();
        C ? a(!1, C) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !Nl(c, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      n = new IntersectionObserver(N, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(N, w);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function Cx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = r, c = us(e), p = o || s ? [...c ? Dn(c) : [], ...Dn(t)] : [];
  p.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const u = c && l ? wx(c, n) : null;
  let m = -1, h = null;
  a && (h = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && h && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), c && !d && h.observe(c), h.observe(t));
  let x, f = d ? Ht(e) : null;
  d && v();
  function v() {
    const y = Ht(e);
    f && !Nl(f, y) && n(), f = y, x = requestAnimationFrame(v);
  }
  return n(), () => {
    var y;
    p.forEach((b) => {
      o && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), u?.(), (y = h) == null || y.disconnect(), h = null, d && cancelAnimationFrame(x);
  };
}
const Sx = Ug, Nx = Kg, jx = Vg, Ex = qg, Rx = Gg, Ri = Hg, kx = Xg, Tx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: yx,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Wg(e, t, {
    ...o,
    platform: s
  });
};
var Ax = typeof document < "u", Dx = function() {
}, ar = Ax ? Pi : Dx;
function wr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!wr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !wr(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function jl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ki(e, t) {
  const n = jl(e);
  return Math.round(t * n) / n;
}
function go(e) {
  const t = g.useRef(e);
  return ar(() => {
    t.current = e;
  }), t;
}
function Ox(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: l = !0,
    whileElementsMounted: d,
    open: c
  } = e, [p, u] = g.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = g.useState(r);
  wr(m, r) || h(r);
  const [x, f] = g.useState(null), [v, y] = g.useState(null), b = g.useCallback((T) => {
    T !== E.current && (E.current = T, f(T));
  }, []), w = g.useCallback((T) => {
    T !== C.current && (C.current = T, y(T));
  }, []), S = s || x, N = a || v, E = g.useRef(null), C = g.useRef(null), j = g.useRef(p), O = d != null, A = go(d), P = go(o), z = go(c), V = g.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: m
    };
    P.current && (T.platform = P.current), Tx(E.current, C.current, T).then((K) => {
      const oe = {
        ...K,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: z.current !== !1
      };
      B.current && !wr(j.current, oe) && (j.current = oe, Rr.flushSync(() => {
        u(oe);
      }));
    });
  }, [m, t, n, P, z]);
  ar(() => {
    c === !1 && j.current.isPositioned && (j.current.isPositioned = !1, u((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [c]);
  const B = g.useRef(!1);
  ar(() => (B.current = !0, () => {
    B.current = !1;
  }), []), ar(() => {
    if (S && (E.current = S), N && (C.current = N), S && N) {
      if (A.current)
        return A.current(S, N, V);
      V();
    }
  }, [S, N, V, A, O]);
  const q = g.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: b,
    setFloating: w
  }), [b, w]), I = g.useMemo(() => ({
    reference: S,
    floating: N
  }), [S, N]), M = g.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return T;
    const K = ki(I.floating, p.x), oe = ki(I.floating, p.y);
    return l ? {
      ...T,
      transform: "translate(" + K + "px, " + oe + "px)",
      ...jl(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: K,
      top: oe
    };
  }, [n, l, I.floating, p.x, p.y]);
  return g.useMemo(() => ({
    ...p,
    update: V,
    refs: q,
    elements: I,
    floatingStyles: M
  }), [p, V, q, I, M]);
}
const Ix = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Ri({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ri({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, _x = (e, t) => ({
  ...Sx(e),
  options: [e, t]
}), Px = (e, t) => ({
  ...Nx(e),
  options: [e, t]
}), Mx = (e, t) => ({
  ...kx(e),
  options: [e, t]
}), Lx = (e, t) => ({
  ...jx(e),
  options: [e, t]
}), $x = (e, t) => ({
  ...Ex(e),
  options: [e, t]
}), Fx = (e, t) => ({
  ...Rx(e),
  options: [e, t]
}), Bx = (e, t) => ({
  ...Ix(e),
  options: [e, t]
});
var zx = "Arrow", El = g.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ i.jsx(
    pe.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ i.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
El.displayName = zx;
var Wx = El;
function Hx(e) {
  const [t, n] = g.useState(void 0);
  return $e(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, l;
        if ("borderBoxSize" in s) {
          const d = s.borderBoxSize, c = Array.isArray(d) ? d[0] : d;
          a = c.inlineSize, l = c.blockSize;
        } else
          a = e.offsetWidth, l = e.offsetHeight;
        n({ width: a, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var fs = "Popper", [Rl, kl] = pn(fs), [Vx, Tl] = Rl(fs), Al = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = g.useState(null);
  return /* @__PURE__ */ i.jsx(Vx, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Al.displayName = fs;
var Dl = "PopperAnchor", Ol = g.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Tl(Dl, n), a = g.useRef(null), l = Ee(t, a), d = g.useRef(null);
    return g.useEffect(() => {
      const c = d.current;
      d.current = r?.current || a.current, c !== d.current && s.onAnchorChange(d.current);
    }), r ? null : /* @__PURE__ */ i.jsx(pe.div, { ...o, ref: l });
  }
);
Ol.displayName = Dl;
var ps = "PopperContent", [Gx, Yx] = Rl(ps), Il = g.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: l = 0,
      avoidCollisions: d = !0,
      collisionBoundary: c = [],
      collisionPadding: p = 0,
      sticky: u = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: x,
      ...f
    } = e, v = Tl(ps, n), [y, b] = g.useState(null), w = Ee(t, (D) => b(D)), [S, N] = g.useState(null), E = Hx(S), C = E?.width ?? 0, j = E?.height ?? 0, O = r + (s !== "center" ? "-" + s : ""), A = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, P = Array.isArray(c) ? c : [c], z = P.length > 0, V = {
      padding: A,
      boundary: P.filter(Kx),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: z
    }, { refs: B, floatingStyles: q, placement: I, isPositioned: M, middlewareData: T } = Ox({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...D) => Cx(...D, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        _x({ mainAxis: o + j, alignmentAxis: a }),
        d && Px({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Mx() : void 0,
          ...V
        }),
        d && Lx({ ...V }),
        $x({
          ...V,
          apply: ({ elements: D, rects: H, availableWidth: te, availableHeight: W }) => {
            const { width: ne, height: Q } = H.reference, Se = D.floating.style;
            Se.setProperty("--radix-popper-available-width", `${te}px`), Se.setProperty("--radix-popper-available-height", `${W}px`), Se.setProperty("--radix-popper-anchor-width", `${ne}px`), Se.setProperty("--radix-popper-anchor-height", `${Q}px`);
          }
        }),
        S && Bx({ element: S, padding: l }),
        Xx({ arrowWidth: C, arrowHeight: j }),
        m && Fx({ strategy: "referenceHidden", ...V })
      ]
    }), [K, oe] = Ml(I), R = _t(x);
    $e(() => {
      M && R?.();
    }, [M, R]);
    const F = T.arrow?.x, _ = T.arrow?.y, $ = T.arrow?.centerOffset !== 0, [Z, ee] = g.useState();
    return $e(() => {
      y && ee(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: M ? q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Z,
          "--radix-popper-transform-origin": [
            T.transformOrigin?.x,
            T.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...T.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ i.jsx(
          Gx,
          {
            scope: n,
            placedSide: K,
            onArrowChange: N,
            arrowX: F,
            arrowY: _,
            shouldHideArrow: $,
            children: /* @__PURE__ */ i.jsx(
              pe.div,
              {
                "data-side": K,
                "data-align": oe,
                ...f,
                ref: w,
                style: {
                  ...f.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: M ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Il.displayName = ps;
var _l = "PopperArrow", Ux = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Pl = g.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Yx(_l, r), a = Ux[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ i.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ i.jsx(
          Wx,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Pl.displayName = _l;
function Kx(e) {
  return e !== null;
}
var Xx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, l = a ? 0 : e.arrowWidth, d = a ? 0 : e.arrowHeight, [c, p] = Ml(n), u = { start: "0%", center: "50%", end: "100%" }[p], m = (o.arrow?.x ?? 0) + l / 2, h = (o.arrow?.y ?? 0) + d / 2;
    let x = "", f = "";
    return c === "bottom" ? (x = a ? u : `${m}px`, f = `${-d}px`) : c === "top" ? (x = a ? u : `${m}px`, f = `${r.floating.height + d}px`) : c === "right" ? (x = `${-d}px`, f = a ? u : `${h}px`) : c === "left" && (x = `${r.floating.width + d}px`, f = a ? u : `${h}px`), { data: { x, y: f } };
  }
});
function Ml(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var qx = Al, Jx = Ol, Zx = Il, Qx = Pl, ev = "Portal", hs = g.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = g.useState(!1);
  $e(() => s(!0), []);
  const a = n || o && globalThis?.document?.body;
  return a ? Mi.createPortal(/* @__PURE__ */ i.jsx(pe.div, { ...r, ref: t }), a) : null;
});
hs.displayName = ev;
// @__NO_SIDE_EFFECTS__
function tv(e) {
  const t = /* @__PURE__ */ nv(e), n = g.forwardRef((r, o) => {
    const { children: s, ...a } = r, l = g.Children.toArray(s), d = l.find(ov);
    if (d) {
      const c = d.props.children, p = l.map((u) => u === d ? g.Children.count(c) > 1 ? g.Children.only(null) : g.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: g.isValidElement(c) ? g.cloneElement(c, void 0, p) : null });
    }
    return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function nv(e) {
  const t = g.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (g.isValidElement(o)) {
      const a = iv(o), l = sv(s, o.props);
      return o.type !== g.Fragment && (l.ref = r ? an(r, a) : a), g.cloneElement(o, l);
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var rv = /* @__PURE__ */ Symbol("radix.slottable");
function ov(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rv;
}
function sv(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
      const d = s(...l);
      return o(...l), d;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function iv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function av(e) {
  const t = g.useRef({ value: e, previous: e });
  return g.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ll = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), lv = "VisuallyHidden", cv = g.forwardRef(
  (e, t) => /* @__PURE__ */ i.jsx(
    pe.span,
    {
      ...e,
      ref: t,
      style: { ...Ll, ...e.style }
    }
  )
);
cv.displayName = lv;
var dv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Zt = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), tr = {}, xo = 0, $l = function(e) {
  return e && (e.host || $l(e.parentNode));
}, uv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = $l(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, fv = function(e, t, n, r) {
  var o = uv(t, Array.isArray(e) ? e : [e]);
  tr[n] || (tr[n] = /* @__PURE__ */ new WeakMap());
  var s = tr[n], a = [], l = /* @__PURE__ */ new Set(), d = new Set(o), c = function(u) {
    !u || l.has(u) || (l.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var p = function(u) {
    !u || d.has(u) || Array.prototype.forEach.call(u.children, function(m) {
      if (l.has(m))
        p(m);
      else
        try {
          var h = m.getAttribute(r), x = h !== null && h !== "false", f = (Zt.get(m) || 0) + 1, v = (s.get(m) || 0) + 1;
          Zt.set(m, f), s.set(m, v), a.push(m), f === 1 && x && er.set(m, !0), v === 1 && m.setAttribute(n, "true"), x || m.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return p(t), l.clear(), xo++, function() {
    a.forEach(function(u) {
      var m = Zt.get(u) - 1, h = s.get(u) - 1;
      Zt.set(u, m), s.set(u, h), m || (er.has(u) || u.removeAttribute(r), er.delete(u)), h || u.removeAttribute(n);
    }), xo--, xo || (Zt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), tr = {});
  };
}, Fl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = dv(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), fv(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ut = function() {
  return ut = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ut.apply(this, arguments);
};
function Bl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function pv(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var lr = "right-scroll-bar-position", cr = "width-before-scroll-bar", hv = "with-scroll-bars-hidden", mv = "--removed-body-scroll-bar-size";
function vo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function gv(e, t) {
  var n = ie(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var xv = typeof window < "u" ? g.useLayoutEffect : g.useEffect, Ti = /* @__PURE__ */ new WeakMap();
function vv(e, t) {
  var n = gv(null, function(r) {
    return e.forEach(function(o) {
      return vo(o, r);
    });
  });
  return xv(function() {
    var r = Ti.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(l) {
        s.has(l) || vo(l, null);
      }), s.forEach(function(l) {
        o.has(l) || vo(l, a);
      });
    }
    Ti.set(n, e);
  }, [e]), n;
}
function bv(e) {
  return e;
}
function yv(e, t) {
  t === void 0 && (t = bv);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, r);
      return n.push(a), function() {
        n = n.filter(function(l) {
          return l !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(l) {
          return s(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var a = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(s), a = n;
      }
      var d = function() {
        var p = a;
        a = [], p.forEach(s);
      }, c = function() {
        return Promise.resolve().then(d);
      };
      c(), n = {
        push: function(p) {
          a.push(p), c();
        },
        filter: function(p) {
          return a = a.filter(p), n;
        }
      };
    }
  };
  return o;
}
function wv(e) {
  e === void 0 && (e = {});
  var t = yv(null);
  return t.options = ut({ async: !0, ssr: !1 }, e), t;
}
var zl = function(e) {
  var t = e.sideCar, n = Bl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return g.createElement(r, ut({}, n));
};
zl.isSideCarExport = !0;
function Cv(e, t) {
  return e.useMedium(t), zl;
}
var Wl = wv(), bo = function() {
}, Br = g.forwardRef(function(e, t) {
  var n = g.useRef(null), r = g.useState({
    onScrollCapture: bo,
    onWheelCapture: bo,
    onTouchMoveCapture: bo
  }), o = r[0], s = r[1], a = e.forwardProps, l = e.children, d = e.className, c = e.removeScrollBar, p = e.enabled, u = e.shards, m = e.sideCar, h = e.noRelative, x = e.noIsolation, f = e.inert, v = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, w = e.gapMode, S = Bl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = m, E = vv([n, t]), C = ut(ut({}, S), o);
  return g.createElement(
    g.Fragment,
    null,
    p && g.createElement(N, { sideCar: Wl, removeScrollBar: c, shards: u, noRelative: h, noIsolation: x, inert: f, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    a ? g.cloneElement(g.Children.only(l), ut(ut({}, C), { ref: E })) : g.createElement(b, ut({}, C, { className: d, ref: E }), l)
  );
});
Br.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Br.classNames = {
  fullWidth: cr,
  zeroRight: lr
};
var Sv = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Nv() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Sv();
  return t && e.setAttribute("nonce", t), e;
}
function jv(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ev(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Rv = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Nv()) && (jv(t, n), Ev(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, kv = function() {
  var e = Rv();
  return function(t, n) {
    g.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Hl = function() {
  var e = kv(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Tv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, yo = function(e) {
  return parseInt(e || "", 10) || 0;
}, Av = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [yo(n), yo(r), yo(o)];
}, Dv = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Tv;
  var t = Av(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ov = Hl(), on = "data-scroll-locked", Iv = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(hv, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(on, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(lr, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(cr, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(lr, " .").concat(lr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(cr, " .").concat(cr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(on, `] {
    `).concat(mv, ": ").concat(l, `px;
  }
`);
}, Ai = function() {
  var e = parseInt(document.body.getAttribute(on) || "0", 10);
  return isFinite(e) ? e : 0;
}, _v = function() {
  g.useEffect(function() {
    return document.body.setAttribute(on, (Ai() + 1).toString()), function() {
      var e = Ai() - 1;
      e <= 0 ? document.body.removeAttribute(on) : document.body.setAttribute(on, e.toString());
    };
  }, []);
}, Pv = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  _v();
  var s = g.useMemo(function() {
    return Dv(o);
  }, [o]);
  return g.createElement(Ov, { styles: Iv(s, !t, o, n ? "" : "!important") });
}, Io = !1;
if (typeof window < "u")
  try {
    var nr = Object.defineProperty({}, "passive", {
      get: function() {
        return Io = !0, !0;
      }
    });
    window.addEventListener("test", nr, nr), window.removeEventListener("test", nr, nr);
  } catch {
    Io = !1;
  }
var Qt = Io ? { passive: !1 } : !1, Mv = function(e) {
  return e.tagName === "TEXTAREA";
}, Vl = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Mv(e) && n[t] === "visible")
  );
}, Lv = function(e) {
  return Vl(e, "overflowY");
}, $v = function(e) {
  return Vl(e, "overflowX");
}, Di = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Gl(e, r);
    if (o) {
      var s = Yl(e, r), a = s[1], l = s[2];
      if (a > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Fv = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Bv = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Gl = function(e, t) {
  return e === "v" ? Lv(t) : $v(t);
}, Yl = function(e, t) {
  return e === "v" ? Fv(t) : Bv(t);
}, zv = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Wv = function(e, t, n, r, o) {
  var s = zv(e, window.getComputedStyle(t).direction), a = s * r, l = n.target, d = t.contains(l), c = !1, p = a > 0, u = 0, m = 0;
  do {
    if (!l)
      break;
    var h = Yl(e, l), x = h[0], f = h[1], v = h[2], y = f - v - s * x;
    (x || y) && Gl(e, l) && (u += y, m += x);
    var b = l.parentNode;
    l = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !d && l !== document.body || // self content
    d && (t.contains(l) || t === l)
  );
  return (p && Math.abs(u) < 1 || !p && Math.abs(m) < 1) && (c = !0), c;
}, rr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Oi = function(e) {
  return [e.deltaX, e.deltaY];
}, Ii = function(e) {
  return e && "current" in e ? e.current : e;
}, Hv = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Vv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Gv = 0, en = [];
function Yv(e) {
  var t = g.useRef([]), n = g.useRef([0, 0]), r = g.useRef(), o = g.useState(Gv++)[0], s = g.useState(Hl)[0], a = g.useRef(e);
  g.useEffect(function() {
    a.current = e;
  }, [e]), g.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = pv([e.lockRef.current], (e.shards || []).map(Ii), !0).filter(Boolean);
      return f.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = g.useCallback(function(f, v) {
    if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = rr(f), b = n.current, w = "deltaX" in f ? f.deltaX : b[0] - y[0], S = "deltaY" in f ? f.deltaY : b[1] - y[1], N, E = f.target, C = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in f && C === "h" && E.type === "range")
      return !1;
    var j = window.getSelection(), O = j && j.anchorNode, A = O ? O === E || O.contains(E) : !1;
    if (A)
      return !1;
    var P = Di(C, E);
    if (!P)
      return !0;
    if (P ? N = C : (N = C === "v" ? "h" : "v", P = Di(C, E)), !P)
      return !1;
    if (!r.current && "changedTouches" in f && (w || S) && (r.current = N), !N)
      return !0;
    var z = r.current || N;
    return Wv(z, v, f, z === "h" ? w : S);
  }, []), d = g.useCallback(function(f) {
    var v = f;
    if (!(!en.length || en[en.length - 1] !== s)) {
      var y = "deltaY" in v ? Oi(v) : rr(v), b = t.current.filter(function(N) {
        return N.name === v.type && (N.target === v.target || v.target === N.shadowParent) && Hv(N.delta, y);
      })[0];
      if (b && b.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!b) {
        var w = (a.current.shards || []).map(Ii).filter(Boolean).filter(function(N) {
          return N.contains(v.target);
        }), S = w.length > 0 ? l(v, w[0]) : !a.current.noIsolation;
        S && v.cancelable && v.preventDefault();
      }
    }
  }, []), c = g.useCallback(function(f, v, y, b) {
    var w = { name: f, delta: v, target: y, should: b, shadowParent: Uv(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), p = g.useCallback(function(f) {
    n.current = rr(f), r.current = void 0;
  }, []), u = g.useCallback(function(f) {
    c(f.type, Oi(f), f.target, l(f, e.lockRef.current));
  }, []), m = g.useCallback(function(f) {
    c(f.type, rr(f), f.target, l(f, e.lockRef.current));
  }, []);
  g.useEffect(function() {
    return en.push(s), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", d, Qt), document.addEventListener("touchmove", d, Qt), document.addEventListener("touchstart", p, Qt), function() {
      en = en.filter(function(f) {
        return f !== s;
      }), document.removeEventListener("wheel", d, Qt), document.removeEventListener("touchmove", d, Qt), document.removeEventListener("touchstart", p, Qt);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    x ? g.createElement(s, { styles: Vv(o) }) : null,
    h ? g.createElement(Pv, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Uv(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Kv = Cv(Wl, Yv);
var ms = g.forwardRef(function(e, t) {
  return g.createElement(Br, ut({}, e, { ref: t, sideCar: Kv }));
});
ms.classNames = Br.classNames;
var Xv = [" ", "Enter", "ArrowUp", "ArrowDown"], qv = [" ", "Enter"], Vt = "Select", [zr, Wr, Jv] = Va(Vt), [gn] = pn(Vt, [
  Jv,
  kl
]), Hr = kl(), [Zv, Lt] = gn(Vt), [Qv, eb] = gn(Vt), Ul = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: l,
    onValueChange: d,
    dir: c,
    name: p,
    autoComplete: u,
    disabled: m,
    required: h,
    form: x
  } = e, f = Hr(t), [v, y] = g.useState(null), [b, w] = g.useState(null), [S, N] = g.useState(!1), E = ts(c), [C, j] = Tn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Vt
  }), [O, A] = Tn({
    prop: a,
    defaultProp: l,
    onChange: d,
    caller: Vt
  }), P = g.useRef(null), z = v ? x || !!v.closest("form") : !0, [V, B] = g.useState(/* @__PURE__ */ new Set()), q = Array.from(V).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ i.jsx(qx, { ...f, children: /* @__PURE__ */ i.jsxs(
    Zv,
    {
      required: h,
      scope: t,
      trigger: v,
      onTriggerChange: y,
      valueNode: b,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: N,
      contentId: Ot(),
      value: O,
      onValueChange: A,
      open: C,
      onOpenChange: j,
      dir: E,
      triggerPointerDownPosRef: P,
      disabled: m,
      children: [
        /* @__PURE__ */ i.jsx(zr.Provider, { scope: t, children: /* @__PURE__ */ i.jsx(
          Qv,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: g.useCallback((I) => {
              B((M) => new Set(M).add(I));
            }, []),
            onNativeOptionRemove: g.useCallback((I) => {
              B((M) => {
                const T = new Set(M);
                return T.delete(I), T;
              });
            }, []),
            children: n
          }
        ) }),
        z ? /* @__PURE__ */ i.jsxs(
          xc,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: p,
            autoComplete: u,
            value: O,
            onChange: (I) => A(I.target.value),
            disabled: m,
            form: x,
            children: [
              O === void 0 ? /* @__PURE__ */ i.jsx("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          q
        ) : null
      ]
    }
  ) });
};
Ul.displayName = Vt;
var Kl = "SelectTrigger", Xl = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Hr(n), a = Lt(Kl, n), l = a.disabled || r, d = Ee(t, a.onTriggerChange), c = Wr(n), p = g.useRef("touch"), [u, m, h] = bc((f) => {
      const v = c().filter((w) => !w.disabled), y = v.find((w) => w.value === a.value), b = yc(v, f, y);
      b !== void 0 && a.onValueChange(b.value);
    }), x = (f) => {
      l || (a.onOpenChange(!0), h()), f && (a.triggerPointerDownPosRef.current = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      });
    };
    return /* @__PURE__ */ i.jsx(Jx, { asChild: !0, ...s, children: /* @__PURE__ */ i.jsx(
      pe.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": vc(a.value) ? "" : void 0,
        ...o,
        ref: d,
        onClick: ce(o.onClick, (f) => {
          f.currentTarget.focus(), p.current !== "mouse" && x(f);
        }),
        onPointerDown: ce(o.onPointerDown, (f) => {
          p.current = f.pointerType;
          const v = f.target;
          v.hasPointerCapture(f.pointerId) && v.releasePointerCapture(f.pointerId), f.button === 0 && f.ctrlKey === !1 && f.pointerType === "mouse" && (x(f), f.preventDefault());
        }),
        onKeyDown: ce(o.onKeyDown, (f) => {
          const v = u.current !== "";
          !(f.ctrlKey || f.altKey || f.metaKey) && f.key.length === 1 && m(f.key), !(v && f.key === " ") && Xv.includes(f.key) && (x(), f.preventDefault());
        })
      }
    ) });
  }
);
Xl.displayName = Kl;
var ql = "SelectValue", Jl = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...l } = e, d = Lt(ql, n), { onValueNodeHasChildrenChange: c } = d, p = s !== void 0, u = Ee(t, d.onValueNodeChange);
    return $e(() => {
      c(p);
    }, [c, p]), /* @__PURE__ */ i.jsx(
      pe.span,
      {
        ...l,
        ref: u,
        style: { pointerEvents: "none" },
        children: vc(d.value) ? /* @__PURE__ */ i.jsx(i.Fragment, { children: a }) : s
      }
    );
  }
);
Jl.displayName = ql;
var tb = "SelectIcon", Zl = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ i.jsx(pe.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Zl.displayName = tb;
var nb = "SelectPortal", Ql = (e) => /* @__PURE__ */ i.jsx(hs, { asChild: !0, ...e });
Ql.displayName = nb;
var Gt = "SelectContent", ec = g.forwardRef(
  (e, t) => {
    const n = Lt(Gt, e.__scopeSelect), [r, o] = g.useState();
    if ($e(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Rr.createPortal(
        /* @__PURE__ */ i.jsx(tc, { scope: e.__scopeSelect, children: /* @__PURE__ */ i.jsx(zr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ i.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ i.jsx(nc, { ...e, ref: t });
  }
);
ec.displayName = Gt;
var Qe = 10, [tc, $t] = gn(Gt), rb = "SelectContentImpl", ob = /* @__PURE__ */ tv("SelectContent.RemoveScroll"), nc = g.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: l,
      sideOffset: d,
      align: c,
      alignOffset: p,
      arrowPadding: u,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: f,
      avoidCollisions: v,
      //
      ...y
    } = e, b = Lt(Gt, n), [w, S] = g.useState(null), [N, E] = g.useState(null), C = Ee(t, (D) => S(D)), [j, O] = g.useState(null), [A, P] = g.useState(
      null
    ), z = Wr(n), [V, B] = g.useState(!1), q = g.useRef(!1);
    g.useEffect(() => {
      if (w) return Fl(w);
    }, [w]), pl();
    const I = g.useCallback(
      (D) => {
        const [H, ...te] = z().map((Q) => Q.ref.current), [W] = te.slice(-1), ne = document.activeElement;
        for (const Q of D)
          if (Q === ne || (Q?.scrollIntoView({ block: "nearest" }), Q === H && N && (N.scrollTop = 0), Q === W && N && (N.scrollTop = N.scrollHeight), Q?.focus(), document.activeElement !== ne)) return;
      },
      [z, N]
    ), M = g.useCallback(
      () => I([j, w]),
      [I, j, w]
    );
    g.useEffect(() => {
      V && M();
    }, [V, M]);
    const { onOpenChange: T, triggerPointerDownPosRef: K } = b;
    g.useEffect(() => {
      if (w) {
        let D = { x: 0, y: 0 };
        const H = (W) => {
          D = {
            x: Math.abs(Math.round(W.pageX) - (K.current?.x ?? 0)),
            y: Math.abs(Math.round(W.pageY) - (K.current?.y ?? 0))
          };
        }, te = (W) => {
          D.x <= 10 && D.y <= 10 ? W.preventDefault() : w.contains(W.target) || T(!1), document.removeEventListener("pointermove", H), K.current = null;
        };
        return K.current !== null && (document.addEventListener("pointermove", H), document.addEventListener("pointerup", te, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", H), document.removeEventListener("pointerup", te, { capture: !0 });
        };
      }
    }, [w, T, K]), g.useEffect(() => {
      const D = () => T(!1);
      return window.addEventListener("blur", D), window.addEventListener("resize", D), () => {
        window.removeEventListener("blur", D), window.removeEventListener("resize", D);
      };
    }, [T]);
    const [oe, R] = bc((D) => {
      const H = z().filter((ne) => !ne.disabled), te = H.find((ne) => ne.ref.current === document.activeElement), W = yc(H, D, te);
      W && setTimeout(() => W.ref.current.focus());
    }), F = g.useCallback(
      (D, H, te) => {
        const W = !q.current && !te;
        (b.value !== void 0 && b.value === H || W) && (O(D), W && (q.current = !0));
      },
      [b.value]
    ), _ = g.useCallback(() => w?.focus(), [w]), $ = g.useCallback(
      (D, H, te) => {
        const W = !q.current && !te;
        (b.value !== void 0 && b.value === H || W) && P(D);
      },
      [b.value]
    ), Z = r === "popper" ? _o : rc, ee = Z === _o ? {
      side: l,
      sideOffset: d,
      align: c,
      alignOffset: p,
      arrowPadding: u,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: f,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ i.jsx(
      tc,
      {
        scope: n,
        content: w,
        viewport: N,
        onViewportChange: E,
        itemRefCallback: F,
        selectedItem: j,
        onItemLeave: _,
        itemTextRefCallback: $,
        focusSelectedItem: M,
        selectedItemText: A,
        position: r,
        isPositioned: V,
        searchRef: oe,
        children: /* @__PURE__ */ i.jsx(ms, { as: ob, allowPinchZoom: !0, children: /* @__PURE__ */ i.jsx(
          ss,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (D) => {
              D.preventDefault();
            },
            onUnmountAutoFocus: ce(o, (D) => {
              b.trigger?.focus({ preventScroll: !0 }), D.preventDefault();
            }),
            children: /* @__PURE__ */ i.jsx(
              os,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (D) => D.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ i.jsx(
                  Z,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (D) => D.preventDefault(),
                    ...y,
                    ...ee,
                    onPlaced: () => B(!0),
                    ref: C,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: ce(y.onKeyDown, (D) => {
                      const H = D.ctrlKey || D.altKey || D.metaKey;
                      if (D.key === "Tab" && D.preventDefault(), !H && D.key.length === 1 && R(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
                        let W = z().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(D.key) && (W = W.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
                          const ne = D.target, Q = W.indexOf(ne);
                          W = W.slice(Q + 1);
                        }
                        setTimeout(() => I(W)), D.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
nc.displayName = rb;
var sb = "SelectItemAlignedPosition", rc = g.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Lt(Gt, n), a = $t(Gt, n), [l, d] = g.useState(null), [c, p] = g.useState(null), u = Ee(t, (C) => p(C)), m = Wr(n), h = g.useRef(!1), x = g.useRef(!0), { viewport: f, selectedItem: v, selectedItemText: y, focusSelectedItem: b } = a, w = g.useCallback(() => {
    if (s.trigger && s.valueNode && l && c && f && v && y) {
      const C = s.trigger.getBoundingClientRect(), j = c.getBoundingClientRect(), O = s.valueNode.getBoundingClientRect(), A = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ne = A.left - j.left, Q = O.left - ne, Se = C.left - Q, Ne = C.width + Se, L = Math.max(Ne, j.width), U = window.innerWidth - Qe, re = di(Q, [
          Qe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Qe, U - L)
        ]);
        l.style.minWidth = Ne + "px", l.style.left = re + "px";
      } else {
        const ne = j.right - A.right, Q = window.innerWidth - O.right - ne, Se = window.innerWidth - C.right - Q, Ne = C.width + Se, L = Math.max(Ne, j.width), U = window.innerWidth - Qe, re = di(Q, [
          Qe,
          Math.max(Qe, U - L)
        ]);
        l.style.minWidth = Ne + "px", l.style.right = re + "px";
      }
      const P = m(), z = window.innerHeight - Qe * 2, V = f.scrollHeight, B = window.getComputedStyle(c), q = parseInt(B.borderTopWidth, 10), I = parseInt(B.paddingTop, 10), M = parseInt(B.borderBottomWidth, 10), T = parseInt(B.paddingBottom, 10), K = q + I + V + T + M, oe = Math.min(v.offsetHeight * 5, K), R = window.getComputedStyle(f), F = parseInt(R.paddingTop, 10), _ = parseInt(R.paddingBottom, 10), $ = C.top + C.height / 2 - Qe, Z = z - $, ee = v.offsetHeight / 2, D = v.offsetTop + ee, H = q + I + D, te = K - H;
      if (H <= $) {
        const ne = P.length > 0 && v === P[P.length - 1].ref.current;
        l.style.bottom = "0px";
        const Q = c.clientHeight - f.offsetTop - f.offsetHeight, Se = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? _ : 0) + Q + M
        ), Ne = H + Se;
        l.style.height = Ne + "px";
      } else {
        const ne = P.length > 0 && v === P[0].ref.current;
        l.style.top = "0px";
        const Se = Math.max(
          $,
          q + f.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? F : 0) + ee
        ) + te;
        l.style.height = Se + "px", f.scrollTop = H - $ + f.offsetTop;
      }
      l.style.margin = `${Qe}px 0`, l.style.minHeight = oe + "px", l.style.maxHeight = z + "px", r?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    m,
    s.trigger,
    s.valueNode,
    l,
    c,
    f,
    v,
    y,
    s.dir,
    r
  ]);
  $e(() => w(), [w]);
  const [S, N] = g.useState();
  $e(() => {
    c && N(window.getComputedStyle(c).zIndex);
  }, [c]);
  const E = g.useCallback(
    (C) => {
      C && x.current === !0 && (w(), b?.(), x.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ i.jsx(
    ab,
    {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: d,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ i.jsx(
            pe.div,
            {
              ...o,
              ref: u,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
rc.displayName = sb;
var ib = "SelectPopperPosition", _o = g.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Qe,
    ...s
  } = e, a = Hr(n);
  return /* @__PURE__ */ i.jsx(
    Zx,
    {
      ...a,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
_o.displayName = ib;
var [ab, gs] = gn(Gt, {}), Po = "SelectViewport", oc = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = $t(Po, n), a = gs(Po, n), l = Ee(t, s.onViewportChange), d = g.useRef(0);
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ i.jsx(zr.Slot, { scope: n, children: /* @__PURE__ */ i.jsx(
        pe.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: l,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: ce(o.onScroll, (c) => {
            const p = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: m } = a;
            if (m?.current && u) {
              const h = Math.abs(d.current - p.scrollTop);
              if (h > 0) {
                const x = window.innerHeight - Qe * 2, f = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), y = Math.max(f, v);
                if (y < x) {
                  const b = y + h, w = Math.min(x, b), S = b - w;
                  u.style.height = w + "px", u.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, u.style.justifyContent = "flex-end");
                }
              }
            }
            d.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
oc.displayName = Po;
var sc = "SelectGroup", [lb, cb] = gn(sc), db = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ot();
    return /* @__PURE__ */ i.jsx(lb, { scope: n, id: o, children: /* @__PURE__ */ i.jsx(pe.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
db.displayName = sc;
var ic = "SelectLabel", ac = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = cb(ic, n);
    return /* @__PURE__ */ i.jsx(pe.div, { id: o.id, ...r, ref: t });
  }
);
ac.displayName = ic;
var Cr = "SelectItem", [ub, lc] = gn(Cr), cc = g.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, l = Lt(Cr, n), d = $t(Cr, n), c = l.value === r, [p, u] = g.useState(s ?? ""), [m, h] = g.useState(!1), x = Ee(
      t,
      (b) => d.itemRefCallback?.(b, r, o)
    ), f = Ot(), v = g.useRef("touch"), y = () => {
      o || (l.onValueChange(r), l.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ i.jsx(
      ub,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: f,
        isSelected: c,
        onItemTextChange: g.useCallback((b) => {
          u((w) => w || (b?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ i.jsx(
          zr.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ i.jsx(
              pe.div,
              {
                role: "option",
                "aria-labelledby": f,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": c && m,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: x,
                onFocus: ce(a.onFocus, () => h(!0)),
                onBlur: ce(a.onBlur, () => h(!1)),
                onClick: ce(a.onClick, () => {
                  v.current !== "mouse" && y();
                }),
                onPointerUp: ce(a.onPointerUp, () => {
                  v.current === "mouse" && y();
                }),
                onPointerDown: ce(a.onPointerDown, (b) => {
                  v.current = b.pointerType;
                }),
                onPointerMove: ce(a.onPointerMove, (b) => {
                  v.current = b.pointerType, o ? d.onItemLeave?.() : v.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ce(a.onPointerLeave, (b) => {
                  b.currentTarget === document.activeElement && d.onItemLeave?.();
                }),
                onKeyDown: ce(a.onKeyDown, (b) => {
                  d.searchRef?.current !== "" && b.key === " " || (qv.includes(b.key) && y(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
cc.displayName = Cr;
var Cn = "SelectItemText", dc = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = Lt(Cn, n), l = $t(Cn, n), d = lc(Cn, n), c = eb(Cn, n), [p, u] = g.useState(null), m = Ee(
      t,
      (y) => u(y),
      d.onItemTextChange,
      (y) => l.itemTextRefCallback?.(y, d.value, d.disabled)
    ), h = p?.textContent, x = g.useMemo(
      () => /* @__PURE__ */ i.jsx("option", { value: d.value, disabled: d.disabled, children: h }, d.value),
      [d.disabled, d.value, h]
    ), { onNativeOptionAdd: f, onNativeOptionRemove: v } = c;
    return $e(() => (f(x), () => v(x)), [f, v, x]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(pe.span, { id: d.textId, ...s, ref: m }),
      d.isSelected && a.valueNode && !a.valueNodeHasChildren ? Rr.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
dc.displayName = Cn;
var uc = "SelectItemIndicator", fc = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return lc(uc, n).isSelected ? /* @__PURE__ */ i.jsx(pe.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
fc.displayName = uc;
var Mo = "SelectScrollUpButton", pc = g.forwardRef((e, t) => {
  const n = $t(Mo, e.__scopeSelect), r = gs(Mo, e.__scopeSelect), [o, s] = g.useState(!1), a = Ee(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const c = d.scrollTop > 0;
        s(c);
      };
      const d = n.viewport;
      return l(), d.addEventListener("scroll", l), () => d.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ i.jsx(
    mc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: d } = n;
        l && d && (l.scrollTop = l.scrollTop - d.offsetHeight);
      }
    }
  ) : null;
});
pc.displayName = Mo;
var Lo = "SelectScrollDownButton", hc = g.forwardRef((e, t) => {
  const n = $t(Lo, e.__scopeSelect), r = gs(Lo, e.__scopeSelect), [o, s] = g.useState(!1), a = Ee(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const c = d.scrollHeight - d.clientHeight, p = Math.ceil(d.scrollTop) < c;
        s(p);
      };
      const d = n.viewport;
      return l(), d.addEventListener("scroll", l), () => d.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ i.jsx(
    mc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: d } = n;
        l && d && (l.scrollTop = l.scrollTop + d.offsetHeight);
      }
    }
  ) : null;
});
hc.displayName = Lo;
var mc = g.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = $t("SelectScrollButton", n), a = g.useRef(null), l = Wr(n), d = g.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return g.useEffect(() => () => d(), [d]), $e(() => {
    l().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ i.jsx(
    pe.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: ce(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: ce(o.onPointerMove, () => {
        s.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ce(o.onPointerLeave, () => {
        d();
      })
    }
  );
}), fb = "SelectSeparator", gc = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ i.jsx(pe.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
gc.displayName = fb;
var $o = "SelectArrow", pb = g.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Hr(n), s = Lt($o, n), a = $t($o, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ i.jsx(Qx, { ...o, ...r, ref: t }) : null;
  }
);
pb.displayName = $o;
var hb = "SelectBubbleInput", xc = g.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = g.useRef(null), s = Ee(r, o), a = av(t);
    return g.useEffect(() => {
      const l = o.current;
      if (!l) return;
      const d = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        d,
        "value"
      ).set;
      if (a !== t && p) {
        const u = new Event("change", { bubbles: !0 });
        p.call(l, t), l.dispatchEvent(u);
      }
    }, [a, t]), /* @__PURE__ */ i.jsx(
      pe.select,
      {
        ...n,
        style: { ...Ll, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
xc.displayName = hb;
function vc(e) {
  return e === "" || e === void 0;
}
function bc(e) {
  const t = _t(e), n = g.useRef(""), r = g.useRef(0), o = g.useCallback(
    (a) => {
      const l = n.current + a;
      t(l), (function d(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => d(""), 1e3));
      })(l);
    },
    [t]
  ), s = g.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return g.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function yc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = mb(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((c) => c !== n));
  const d = a.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return d !== n ? d : void 0;
}
function mb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var gb = Ul, wc = Xl, xb = Jl, vb = Zl, bb = Ql, Cc = ec, yb = oc, Sc = ac, Nc = cc, wb = dc, Cb = fc, jc = pc, Ec = hc, Rc = gc;
const ct = gb, dt = xb, et = g.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsxs(
  wc,
  {
    ref: r,
    className: ue(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ i.jsx(vb, { asChild: !0, children: /* @__PURE__ */ i.jsx(es, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
et.displayName = wc.displayName;
const kc = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  jc,
  {
    ref: n,
    className: ue(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ i.jsx(jh, { className: "h-4 w-4" })
  }
));
kc.displayName = jc.displayName;
const Tc = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Ec,
  {
    ref: n,
    className: ue(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ i.jsx(es, { className: "h-4 w-4" })
  }
));
Tc.displayName = Ec.displayName;
const tt = g.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ i.jsx(bb, { children: /* @__PURE__ */ i.jsxs(
  Cc,
  {
    ref: o,
    className: ue(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ i.jsx(kc, {}),
      /* @__PURE__ */ i.jsx(
        yb,
        {
          className: ue(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ i.jsx(Tc, {})
    ]
  }
) }));
tt.displayName = Cc.displayName;
const Sb = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Sc,
  {
    ref: n,
    className: ue("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Sb.displayName = Sc.displayName;
const le = g.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsxs(
  Nc,
  {
    ref: r,
    className: ue(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ i.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ i.jsx(Cb, { children: /* @__PURE__ */ i.jsx(vh, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ i.jsx(wb, { children: t })
    ]
  }
));
le.displayName = Nc.displayName;
const Nb = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Rc,
  {
    ref: n,
    className: ue("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Nb.displayName = Rc.displayName;
var jb = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Eb = jb.reduce((e, t) => {
  const n = /* @__PURE__ */ Vo(`Primitive.${t}`), r = g.forwardRef((o, s) => {
    const { asChild: a, ...l } = o, d = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ i.jsx(d, { ...l, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Rb = "Separator", _i = "horizontal", kb = ["horizontal", "vertical"], Ac = g.forwardRef((e, t) => {
  const { decorative: n, orientation: r = _i, ...o } = e, s = Tb(r) ? r : _i, l = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ i.jsx(
    Eb.div,
    {
      "data-orientation": s,
      ...l,
      ...o,
      ref: t
    }
  );
});
Ac.displayName = Rb;
function Tb(e) {
  return kb.includes(e);
}
var Dc = Ac;
const Yt = g.forwardRef(({ className: e, orientation: t = "horizontal", ...n }, r) => /* @__PURE__ */ i.jsx(
  Dc,
  {
    ref: r,
    decorative: !0,
    orientation: t,
    className: ue(
      "shrink-0 bg-border",
      t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      e
    ),
    ...n
  }
));
Yt.displayName = Dc.displayName;
const Oc = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: ue(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Oc.displayName = "Card";
const Ab = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: ue("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Ab.displayName = "CardHeader";
const Db = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "h3",
  {
    ref: n,
    className: ue(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Db.displayName = "CardTitle";
const Ob = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "p",
  {
    ref: n,
    className: ue("text-sm text-muted-foreground", e),
    ...t
  }
));
Ob.displayName = "CardDescription";
const Fo = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx("div", { ref: n, className: ue("p-6 pt-0", e), ...t }));
Fo.displayName = "CardContent";
const Ib = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: ue("flex items-center p-6 pt-0", e),
    ...t
  }
));
Ib.displayName = "CardFooter";
const _b = [
  {
    id: "1-col",
    label: "1 Column",
    widths: ["100%"],
    icon: /* @__PURE__ */ i.jsx("div", { className: "flex gap-0.5 h-5", children: /* @__PURE__ */ i.jsx("div", { className: "flex-1 bg-current rounded-sm" }) })
  },
  {
    id: "2-equal",
    label: "2 Equal",
    widths: ["50%", "50%"],
    icon: /* @__PURE__ */ i.jsxs("div", { className: "flex gap-0.5 h-5", children: [
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 bg-current rounded-sm" }),
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 bg-current rounded-sm" })
    ] })
  },
  {
    id: "3-equal",
    label: "3 Equal",
    widths: ["33.33%", "33.33%", "33.33%"],
    icon: /* @__PURE__ */ i.jsxs("div", { className: "flex gap-0.5 h-5", children: [
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 bg-current rounded-sm" }),
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 bg-current rounded-sm" }),
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 bg-current rounded-sm" })
    ] })
  },
  {
    id: "2-left",
    label: "2 Left Heavy",
    widths: ["66.66%", "33.33%"],
    icon: /* @__PURE__ */ i.jsxs("div", { className: "flex gap-0.5 h-5", children: [
      /* @__PURE__ */ i.jsx("div", { className: "flex-[2] bg-current rounded-sm" }),
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 bg-current rounded-sm" })
    ] })
  },
  {
    id: "2-right",
    label: "2 Right Heavy",
    widths: ["33.33%", "66.66%"],
    icon: /* @__PURE__ */ i.jsxs("div", { className: "flex gap-0.5 h-5", children: [
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 bg-current rounded-sm" }),
      /* @__PURE__ */ i.jsx("div", { className: "flex-[2] bg-current rounded-sm" })
    ] })
  }
], Pb = ({ element: e, onUpdate: t }) => {
  const [n, r] = ie(0), [o, s] = ie(!1), [a, l] = ie(!1), d = e.children || [], c = d[n], p = (x) => x.length !== d.length ? !1 : x.every((f, v) => f === d[v].width), u = (x) => {
    const f = x.widths.map((v, y) => {
      const b = d[y];
      return {
        id: b?.id || `col-${e.id}-${y}-${Date.now()}`,
        type: "column",
        label: `Column ${y + 1}`,
        width: v,
        children: b?.children || [],
        backgroundColor: b?.backgroundColor || "transparent",
        padding: b?.padding || { top: 20, right: 20, bottom: 20, left: 20 },
        visible: !0,
        locked: !1
      };
    });
    t({ children: f }), n >= f.length && r(0);
  }, m = (x, f) => {
    const v = [...d];
    v[x] = { ...v[x], width: f }, t({ children: v });
  }, h = (x) => {
    const f = [...d];
    f[n] = { ...f[n], ...x }, t({ children: f });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ i.jsx(J, { className: "text-sm font-medium", children: "Columns" }),
      /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-3 gap-2", children: _b.map((x) => /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          onClick: () => u(x),
          className: ue(
            "p-2 rounded border transition-all hover:border-primary/50",
            p(x.widths) ? "border-primary bg-accent" : "border-border"
          ),
          title: x.label,
          children: /* @__PURE__ */ i.jsx("div", { className: ue(
            "w-full",
            p(x.widths) ? "text-primary" : "text-muted-foreground"
          ), children: x.icon })
        },
        x.id
      )) }),
      /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-2 gap-2", children: d.map((x, f) => /* @__PURE__ */ i.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ i.jsxs(J, { className: "text-xs text-muted-foreground", children: [
          "Column ",
          f + 1
        ] }),
        /* @__PURE__ */ i.jsx(
          _e,
          {
            type: "text",
            value: x.width,
            onChange: (v) => m(f, v.target.value),
            placeholder: "50%",
            className: "h-8 text-xs"
          }
        )
      ] }, x.id)) })
    ] }),
    /* @__PURE__ */ i.jsx(Yt, {}),
    d.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ i.jsx(J, { className: "text-sm font-medium", children: "Column Properties" }),
      /* @__PURE__ */ i.jsx("div", { className: "flex gap-1 p-1 bg-muted rounded-md", children: d.map((x, f) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => r(f),
          className: ue(
            "flex-1 px-2 py-1 text-xs rounded transition-all",
            n === f ? "bg-background shadow-sm font-medium" : "hover:bg-background/50"
          ),
          children: [
            "Column ",
            f + 1
          ]
        },
        x.id
      )) }),
      c && /* @__PURE__ */ i.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Background Color" }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "w-10 h-10 rounded-md border overflow-hidden shrink-0 relative", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "color",
                  value: c.backgroundColor || "#ffffff",
                  onChange: (x) => h({ backgroundColor: x.target.value }),
                  className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                }
              ),
              /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: c.backgroundColor || "transparent" } })
            ] }),
            /* @__PURE__ */ i.jsx(
              _e,
              {
                value: c.backgroundColor || "transparent",
                onChange: (x) => h({ backgroundColor: x.target.value }),
                className: "h-10"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Padding" }),
            /* @__PURE__ */ i.jsxs(
              We,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => s(!o),
                className: "h-6 text-xs",
                children: [
                  o ? "Less" : "More",
                  " Options"
                ]
              }
            )
          ] }),
          o ? /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-2 gap-2", children: ["top", "right", "bottom", "left"].map((x) => /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground w-12 capitalize", children: x }),
            /* @__PURE__ */ i.jsx(
              _e,
              {
                type: "number",
                min: 0,
                value: c.padding?.[x] ?? 20,
                onChange: (f) => {
                  h({
                    padding: {
                      ...c.padding,
                      [x]: parseInt(f.target.value) || 0
                    }
                  });
                },
                className: "h-8"
              }
            )
          ] }, x)) }) : /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground w-20", children: "All Sides" }),
            /* @__PURE__ */ i.jsx(
              _e,
              {
                type: "number",
                min: 0,
                value: c.padding?.top ?? 20,
                onChange: (x) => {
                  const f = parseInt(x.target.value) || 0;
                  h({
                    padding: { top: f, right: f, bottom: f, left: f }
                  });
                },
                className: "h-8"
              }
            ),
            /* @__PURE__ */ i.jsx("span", { className: "text-xs text-muted-foreground", children: "px" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Border" }),
            /* @__PURE__ */ i.jsxs(
              We,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => l(!a),
                className: "h-6 text-xs",
                children: [
                  a ? "Less" : "More",
                  " Options"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground w-12", children: "Width" }),
              /* @__PURE__ */ i.jsx(
                _e,
                {
                  type: "number",
                  min: 0,
                  max: 20,
                  value: c.borderWidth || 0,
                  onChange: (x) => h({ borderWidth: parseInt(x.target.value) || 0 }),
                  className: "h-8"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "text-xs text-muted-foreground", children: "px" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "w-10 h-10 rounded-md border overflow-hidden shrink-0 relative", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    value: c.borderColor || "#000000",
                    onChange: (x) => h({ borderColor: x.target.value }),
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: c.borderColor || "#000000" } })
              ] }),
              /* @__PURE__ */ i.jsx(
                _e,
                {
                  value: c.borderColor || "#000000",
                  onChange: (x) => h({ borderColor: x.target.value }),
                  className: "h-10"
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(Yt, {}),
    /* @__PURE__ */ i.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ i.jsx(J, { className: "text-sm font-medium", children: "Row Properties" }),
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Background Color" }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "w-10 h-10 rounded-md border overflow-hidden shrink-0 relative", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                value: e.backgroundColor || "#ffffff",
                onChange: (x) => t({ backgroundColor: x.target.value }),
                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: e.backgroundColor || "transparent" } })
          ] }),
          /* @__PURE__ */ i.jsx(
            _e,
            {
              value: e.backgroundColor || "transparent",
              onChange: (x) => t({ backgroundColor: x.target.value }),
              className: "h-10"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Content Background Color" }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "w-10 h-10 rounded-md border overflow-hidden shrink-0 relative", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                value: e.contentBackgroundColor || "#ffffff",
                onChange: (x) => t({ contentBackgroundColor: x.target.value }),
                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: e.contentBackgroundColor || "transparent" } })
          ] }),
          /* @__PURE__ */ i.jsx(
            _e,
            {
              value: e.contentBackgroundColor || "transparent",
              onChange: (x) => t({ contentBackgroundColor: x.target.value }),
              className: "h-10"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Background Image" }),
        /* @__PURE__ */ i.jsx(
          _e,
          {
            type: "text",
            value: e.imageUrl || "",
            onChange: (x) => t({ imageUrl: x.target.value }),
            placeholder: "https://",
            className: "h-10"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Column Gap" }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ i.jsx(
            _e,
            {
              type: "number",
              min: 0,
              max: 100,
              value: e.gap || 0,
              onChange: (x) => t({ gap: parseInt(x.target.value) || 0 }),
              className: "h-10"
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "text-xs text-muted-foreground", children: "px" })
        ] })
      ] })
    ] })
  ] });
}, Ue = ({ title: e, children: t, defaultOpen: n = !0 }) => {
  const [r, o] = ie(n);
  return /* @__PURE__ */ i.jsxs("div", { className: "border-b last:border-b-0", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: () => o(!r),
        className: "flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-foreground hover:bg-accent/50 transition-colors",
        children: [
          /* @__PURE__ */ i.jsx("span", { children: e }),
          r ? /* @__PURE__ */ i.jsx(es, { className: "h-4 w-4" }) : /* @__PURE__ */ i.jsx(Sh, { className: "h-4 w-4" })
        ]
      }
    ),
    r && /* @__PURE__ */ i.jsx("div", { className: "p-4 pt-0 space-y-4", children: t })
  ] });
}, he = ({ label: e, value: t, min: n = 0, max: r = 200, step: o = 1, suffix: s = "px", onChange: a }) => /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
  e && /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: e }),
  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center border rounded-md overflow-hidden bg-background h-9", children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a(Math.max(n, t - o)),
        className: "px-2 h-full hover:bg-accent border-r transition-colors",
        children: /* @__PURE__ */ i.jsx(za, { className: "h-3 w-3" })
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex items-center justify-between px-3 text-sm min-w-[60px]", children: [
      /* @__PURE__ */ i.jsx("span", { children: t }),
      /* @__PURE__ */ i.jsx("span", { className: "text-muted-foreground ml-1", children: s })
    ] }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a(Math.min(r, t + o)),
        className: "px-2 h-full hover:bg-accent border-l transition-colors",
        children: /* @__PURE__ */ i.jsx(dm, { className: "h-3 w-3" })
      }
    )
  ] })
] }), Mb = ({ content: e, onUpdate: t }) => {
  const n = ve(null), {
    showDropdown: r,
    filteredTags: o,
    selectedIndex: s,
    handleInputChange: a,
    handleKeyDown: l,
    selectTag: d,
    closeDropdown: c
  } = Em(), p = (m) => {
    const h = m.target.value, x = m.target.selectionStart;
    t(h), a(h, x);
  }, u = (m) => {
    if (!n.current) return;
    const h = n.current, x = h.selectionStart, f = h.selectionEnd, v = h.value, y = v.substring(0, x);
    let b = -1;
    const w = ["@", "#", "{{"];
    for (const S of w) {
      const N = y.lastIndexOf(S);
      N > b && (b = N);
    }
    if (b !== -1) {
      const S = v.substring(0, b) + m.value + v.substring(f);
      t(S), setTimeout(() => {
        const N = b + m.value.length;
        h.setSelectionRange(N, N), h.focus();
      }, 0);
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "grid gap-2 relative", children: [
    /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Content" }),
    /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          ref: n,
          className: "flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          value: e,
          onChange: p,
          onKeyDown: (m) => l(m, u),
          onBlur: () => setTimeout(c, 200),
          placeholder: "Type @ or # to insert merge tags"
        }
      ),
      r && o.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "absolute z-50 w-full mt-1 bg-background border border-border rounded-md shadow-lg max-h-60 overflow-auto", children: o.map((m, h) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: `w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors ${h === s ? "bg-accent" : ""}`,
          onClick: () => d(m, u),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "font-medium", children: m.label }),
            /* @__PURE__ */ i.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: m.value })
          ]
        },
        m.id
      )) })
    ] })
  ] });
}, Lb = ({ element: e, onUpdate: t }) => {
  const [n, r] = k.useState("style"), [o, s] = ie(!1), [a, l] = ie(!1), [d, c] = ie(!1), [p, u] = ie(!1), [m, h] = ie(!1);
  if (!e)
    return /* @__PURE__ */ i.jsx(Oc, { className: "h-full border-0 shadow-none rounded-none bg-background/50", children: /* @__PURE__ */ i.jsx(Fo, { className: "h-full flex items-center justify-center text-muted-foreground p-6", children: /* @__PURE__ */ i.jsx("p", { className: "text-sm", children: "Select an element to edit" }) }) });
  const x = () => /* @__PURE__ */ i.jsx("div", { className: "p-4 border-b flex items-center justify-between bg-background z-10 sticky top-0", children: /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("h2", { className: "font-semibold tracking-tight", children: "Properties" }),
    /* @__PURE__ */ i.jsx("p", { className: "text-[10px] uppercase font-bold text-muted-foreground mt-0.5 tracking-wider", children: e.label || e.type })
  ] }) });
  if (e.type === "row")
    return /* @__PURE__ */ i.jsxs("div", { className: "h-full flex flex-col bg-background border-l", children: [
      /* @__PURE__ */ i.jsx(x, {}),
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 pt-0", children: /* @__PURE__ */ i.jsx(Pb, { element: e, onUpdate: t }) }) })
    ] });
  if (e.type === "column")
    return /* @__PURE__ */ i.jsxs("div", { className: "h-full flex flex-col bg-background border-l", children: [
      /* @__PURE__ */ i.jsx(x, {}),
      /* @__PURE__ */ i.jsx(Fo, { className: "flex-1 flex items-center justify-center text-muted-foreground p-6 text-center", children: /* @__PURE__ */ i.jsx("p", { className: "text-xs", children: "Select the parent row to edit column properties" }) })
    ] });
  if (e.type === "text") {
    const f = e;
    return /* @__PURE__ */ i.jsxs("div", { className: "h-full flex flex-col bg-background border-l w-72 lg:w-80", children: [
      /* @__PURE__ */ i.jsx(x, {}),
      /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: [
        /* @__PURE__ */ i.jsx(Ue, { title: "Typography", defaultOpen: !0, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Font Family" }),
            /* @__PURE__ */ i.jsxs(
              ct,
              {
                value: f.fontFamily || "Arial",
                onValueChange: (v) => t({ fontFamily: v }),
                children: [
                  /* @__PURE__ */ i.jsx(et, { className: "h-9", children: /* @__PURE__ */ i.jsx(dt, {}) }),
                  /* @__PURE__ */ i.jsxs(tt, { children: [
                    /* @__PURE__ */ i.jsx(le, { value: "Arial", children: "Arial" }),
                    /* @__PURE__ */ i.jsx(le, { value: "Helvetica", children: "Helvetica" }),
                    /* @__PURE__ */ i.jsx(le, { value: "Georgia", children: "Georgia" }),
                    /* @__PURE__ */ i.jsx(le, { value: "Courier New", children: "Courier New" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Font Weight" }),
              /* @__PURE__ */ i.jsxs(
                ct,
                {
                  value: f.fontWeight || "normal",
                  onValueChange: (v) => t({ fontWeight: v }),
                  children: [
                    /* @__PURE__ */ i.jsx(et, { className: "h-9", children: /* @__PURE__ */ i.jsx(dt, {}) }),
                    /* @__PURE__ */ i.jsxs(tt, { children: [
                      /* @__PURE__ */ i.jsx(le, { value: "normal", children: "Regular" }),
                      /* @__PURE__ */ i.jsx(le, { value: "bold", children: "Bold" }),
                      /* @__PURE__ */ i.jsx(le, { value: "500", children: "Medium" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(
              he,
              {
                label: "Font Size",
                value: f.fontSize || 16,
                min: 8,
                max: 120,
                onChange: (v) => t({ fontSize: v })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Color" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "w-9 h-9 rounded-md border overflow-hidden shrink-0 relative shadow-sm", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    value: f.color || "#000000",
                    onChange: (v) => t({ color: v.target.value }),
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: f.color || "#000000" } })
              ] }),
              /* @__PURE__ */ i.jsx(
                _e,
                {
                  className: "h-9",
                  value: f.color || "#000000",
                  onChange: (v) => t({ color: v.target.value })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Text Align" }),
              /* @__PURE__ */ i.jsx("div", { className: "flex bg-muted p-1 rounded-md h-9", children: ["left", "center", "right", "justify"].map((v) => /* @__PURE__ */ i.jsx(
                "button",
                {
                  onClick: () => t({ textAlign: v }),
                  className: `flex-1 flex items-center justify-center rounded text-[10px] transition-all capitalize ${f.textAlign === v ? "bg-background shadow-sm text-foreground font-bold" : "text-muted-foreground hover:text-foreground"}`,
                  children: v[0]
                },
                v
              )) })
            ] }),
            /* @__PURE__ */ i.jsx(
              he,
              {
                label: "Line Height",
                value: Math.round((f.lineHeight || 1.1) * 100),
                min: 50,
                max: 300,
                step: 5,
                suffix: "%",
                onChange: (v) => t({ lineHeight: v / 100 })
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "Content", defaultOpen: !0, children: /* @__PURE__ */ i.jsx(
          Mb,
          {
            content: f.content,
            onUpdate: (v) => t({ content: v })
          }
        ) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "Spacing", defaultOpen: !0, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs font-bold uppercase text-[10px] tracking-wider", children: "Container Padding" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "text-[10px] text-blue-500 hover:underline",
                onClick: () => s(!o),
                children: o ? "Simple Options" : "More Options"
              }
            )
          ] }),
          o ? /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ i.jsx(he, { label: "Top", value: typeof f.padding == "object" && f.padding !== null ? f.padding.top : f.padding || 0, onChange: (v) => t({ padding: { ...typeof f.padding == "object" ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, top: v } }) }),
            /* @__PURE__ */ i.jsx(he, { label: "Right", value: typeof f.padding == "object" && f.padding !== null ? f.padding.right : f.padding || 0, onChange: (v) => t({ padding: { ...typeof f.padding == "object" ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, right: v } }) }),
            /* @__PURE__ */ i.jsx(he, { label: "Bottom", value: typeof f.padding == "object" && f.padding !== null ? f.padding.bottom : f.padding || 0, onChange: (v) => t({ padding: { ...typeof f.padding == "object" ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, bottom: v } }) }),
            /* @__PURE__ */ i.jsx(he, { label: "Left", value: typeof f.padding == "object" && f.padding !== null ? f.padding.left : f.padding || 0, onChange: (v) => t({ padding: { ...typeof f.padding == "object" ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, left: v } }) })
          ] }) : /* @__PURE__ */ i.jsx(
            he,
            {
              label: "All Sides",
              value: typeof f.padding == "object" && f.padding !== null ? f.padding.top : f.padding || 0,
              onChange: (v) => t({ padding: { top: v, right: v, bottom: v, left: v } })
            }
          )
        ] }) })
      ] })
    ] });
  }
  if (e.type === "button") {
    const f = e, v = (b) => typeof f.padding == "object" && f.padding !== null ? f.padding[b] || 0 : f.padding || 0, y = (b) => typeof f.borderRadius == "object" && f.borderRadius !== null ? f.borderRadius[b] || 0 : f.borderRadius || 0;
    return /* @__PURE__ */ i.jsxs("div", { className: "h-full flex flex-col bg-background border-l w-72 lg:w-80", children: [
      /* @__PURE__ */ i.jsx(x, {}),
      /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: [
        /* @__PURE__ */ i.jsx(Ue, { title: "Action", defaultOpen: !0, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Button Text" }),
            /* @__PURE__ */ i.jsx("div", { className: "flex bg-muted rounded-md overflow-hidden h-9", children: /* @__PURE__ */ i.jsx(
              "input",
              {
                className: "flex-1 bg-transparent px-3 text-sm focus:outline-none",
                value: f.text || "",
                onChange: (b) => t({ text: b.target.value }),
                placeholder: "Click Here"
              }
            ) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Action Type" }),
            /* @__PURE__ */ i.jsxs(
              ct,
              {
                value: f.actionType || "Open Website",
                onValueChange: (b) => t({ actionType: b }),
                children: [
                  /* @__PURE__ */ i.jsx(et, { className: "h-9", children: /* @__PURE__ */ i.jsx(dt, {}) }),
                  /* @__PURE__ */ i.jsxs(tt, { children: [
                    /* @__PURE__ */ i.jsx(le, { value: "Open Website", children: "Open Website" }),
                    /* @__PURE__ */ i.jsx(le, { value: "Send Email", children: "Send Email" }),
                    /* @__PURE__ */ i.jsx(le, { value: "Call Phone", children: "Call Phone" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "grid gap-1.5", children: /* @__PURE__ */ i.jsxs("div", { className: "flex bg-muted rounded-md overflow-hidden h-9", children: [
            /* @__PURE__ */ i.jsx("div", { className: "bg-muted-foreground/10 px-3 flex items-center text-[10px] font-bold border-r", children: "URL" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                className: "flex-1 bg-transparent px-3 text-sm focus:outline-none",
                value: f.link || "",
                onChange: (b) => t({ link: b.target.value }),
                placeholder: "https://"
              }
            )
          ] }) }),
          /* @__PURE__ */ i.jsx("div", { className: "grid gap-1.5", children: /* @__PURE__ */ i.jsxs("div", { className: "flex bg-muted rounded-md overflow-hidden h-9", children: [
            /* @__PURE__ */ i.jsx("div", { className: "bg-muted-foreground/10 px-3 flex items-center text-[10px] font-bold border-r", children: "Target" }),
            /* @__PURE__ */ i.jsx("div", { className: "flex-1", children: /* @__PURE__ */ i.jsxs(
              ct,
              {
                value: f.target || "_blank",
                onValueChange: (b) => t({ target: b }),
                children: [
                  /* @__PURE__ */ i.jsx(et, { className: "h-full border-0 bg-transparent shadow-none focus:ring-0", children: /* @__PURE__ */ i.jsx(dt, {}) }),
                  /* @__PURE__ */ i.jsxs(tt, { children: [
                    /* @__PURE__ */ i.jsx(le, { value: "_blank", children: "New Tab" }),
                    /* @__PURE__ */ i.jsx(le, { value: "_self", children: "Same Tab" })
                  ] })
                ]
              }
            ) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "Button Options", defaultOpen: !0, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Background Color" }),
              /* @__PURE__ */ i.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ i.jsxs("div", { className: "w-6 h-6 rounded border overflow-hidden relative shadow-sm", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    value: f.backgroundColor || "#0ea5e9",
                    onChange: (b) => t({ backgroundColor: b.target.value }),
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: f.backgroundColor || "#0ea5e9" } })
              ] }) })
            ] }),
            /* @__PURE__ */ i.jsx(Yt, {}),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Text Color" }),
              /* @__PURE__ */ i.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ i.jsxs("div", { className: "w-6 h-6 rounded border overflow-hidden relative shadow-sm", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    value: f.color || "#ffffff",
                    onChange: (b) => t({ color: b.target.value }),
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: f.color || "#ffffff" } })
              ] }) })
            ] }),
            /* @__PURE__ */ i.jsx(Yt, {}),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Auto Width" }),
              /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i.jsx(
                "button",
                {
                  onClick: () => t({ fullWidth: !f.fullWidth }),
                  className: `w-10 h-5 rounded-full relative transition-colors ${f.fullWidth ? "bg-blue-600" : "bg-muted"}`,
                  children: /* @__PURE__ */ i.jsx("div", { className: `absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${f.fullWidth ? "translate-x-5" : ""}` })
                }
              ) })
            ] }),
            !f.fullWidth && /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Width" }),
              /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "range",
                    min: "10",
                    max: "100",
                    value: typeof f.width == "string" && f.width.includes("%") ? parseInt(f.width) : 100,
                    onChange: (b) => t({ width: `${b.target.value}%` }),
                    className: "flex-1 h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-blue-600"
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "text-xs min-w-[35px] font-medium", children: [
                  typeof f.width == "string" && f.width.includes("%") ? parseInt(f.width) : 100,
                  "%"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5 mt-2", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Font Family" }),
            /* @__PURE__ */ i.jsxs(
              ct,
              {
                value: f.fontFamily || "Arial",
                onValueChange: (b) => t({ fontFamily: b }),
                children: [
                  /* @__PURE__ */ i.jsx(et, { className: "h-9", children: /* @__PURE__ */ i.jsx(dt, {}) }),
                  /* @__PURE__ */ i.jsxs(tt, { children: [
                    /* @__PURE__ */ i.jsx(le, { value: "Arial", children: "Arial" }),
                    /* @__PURE__ */ i.jsx(le, { value: "Helvetica", children: "Helvetica" }),
                    /* @__PURE__ */ i.jsx(le, { value: "Georgia", children: "Georgia" }),
                    /* @__PURE__ */ i.jsx(le, { value: "Courier New", children: "Courier New" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Font Weight" }),
              /* @__PURE__ */ i.jsxs(
                ct,
                {
                  value: f.fontWeight || "normal",
                  onValueChange: (b) => t({ fontWeight: b }),
                  children: [
                    /* @__PURE__ */ i.jsx(et, { className: "h-9", children: /* @__PURE__ */ i.jsx(dt, {}) }),
                    /* @__PURE__ */ i.jsxs(tt, { children: [
                      /* @__PURE__ */ i.jsx(le, { value: "normal", children: "Regular" }),
                      /* @__PURE__ */ i.jsx(le, { value: "bold", children: "Bold" }),
                      /* @__PURE__ */ i.jsx(le, { value: "500", children: "Medium" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(
              he,
              {
                label: "Font Size",
                value: f.fontSize || 14,
                min: 8,
                max: 72,
                onChange: (b) => t({ fontSize: b })
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "Spacing", defaultOpen: !0, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Line Height",
              value: Math.round((f.lineHeight || 1.2) * 100),
              min: 50,
              max: 300,
              step: 5,
              suffix: "%",
              onChange: (b) => t({ lineHeight: b / 100 })
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Padding" }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "text-[10px] text-blue-500 hover:underline",
                  onClick: () => l(!a),
                  children: a ? "Simple Options" : "More Options"
                }
              )
            ] }),
            a ? /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ i.jsx(he, { label: "Top", value: v("top"), onChange: (b) => t({ padding: { ...typeof f.padding == "object" && f.padding !== null ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, top: b } }) }),
              /* @__PURE__ */ i.jsx(he, { label: "Right", value: v("right"), onChange: (b) => t({ padding: { ...typeof f.padding == "object" && f.padding !== null ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, right: b } }) }),
              /* @__PURE__ */ i.jsx(he, { label: "Bottom", value: v("bottom"), onChange: (b) => t({ padding: { ...typeof f.padding == "object" && f.padding !== null ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, bottom: b } }) }),
              /* @__PURE__ */ i.jsx(he, { label: "Left", value: v("left"), onChange: (b) => t({ padding: { ...typeof f.padding == "object" && f.padding !== null ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, left: b } }) })
            ] }) : /* @__PURE__ */ i.jsx(
              he,
              {
                label: "All Sides",
                value: v("top"),
                onChange: (b) => t({ padding: { top: b, right: b, bottom: b, left: b } })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4 pt-2", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Border" }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "text-[10px] text-blue-500 hover:underline",
                  onClick: () => c(!d),
                  children: d ? "Simple Options" : "More Options"
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ i.jsxs(
                ct,
                {
                  value: f.borderStyle || "solid",
                  onValueChange: (b) => t({ borderStyle: b }),
                  children: [
                    /* @__PURE__ */ i.jsx(et, { className: "h-9", children: /* @__PURE__ */ i.jsx(dt, {}) }),
                    /* @__PURE__ */ i.jsxs(tt, { children: [
                      /* @__PURE__ */ i.jsx(le, { value: "solid", children: "Solid" }),
                      /* @__PURE__ */ i.jsx(le, { value: "dashed", children: "Dashed" }),
                      /* @__PURE__ */ i.jsx(le, { value: "dotted", children: "Dotted" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                he,
                {
                  label: "All Sides",
                  value: f.borderWidth || 0,
                  onChange: (b) => t({ borderWidth: b })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4 pt-2", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Rounded Border" }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "text-[10px] text-blue-500 hover:underline",
                  onClick: () => u(!p),
                  children: p ? "Simple Options" : "More Options"
                }
              )
            ] }),
            p ? /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ i.jsx(he, { label: "T-Left", value: y("topLeft"), onChange: (b) => t({ borderRadius: { ...typeof f.borderRadius == "object" && f.borderRadius !== null ? f.borderRadius : { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }, topLeft: b } }) }),
              /* @__PURE__ */ i.jsx(he, { label: "T-Right", value: y("topRight"), onChange: (b) => t({ borderRadius: { ...typeof f.borderRadius == "object" && f.borderRadius !== null ? f.borderRadius : { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }, topRight: b } }) }),
              /* @__PURE__ */ i.jsx(he, { label: "B-Left", value: y("bottomLeft"), onChange: (b) => t({ borderRadius: { ...typeof f.borderRadius == "object" && f.borderRadius !== null ? f.borderRadius : { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }, bottomLeft: b } }) }),
              /* @__PURE__ */ i.jsx(he, { label: "B-Right", value: y("bottomRight"), onChange: (b) => t({ borderRadius: { ...typeof f.borderRadius == "object" && f.borderRadius !== null ? f.borderRadius : { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }, bottomRight: b } }) })
            ] }) : /* @__PURE__ */ i.jsx(
              he,
              {
                label: "All Sides",
                value: typeof f.borderRadius == "number" ? f.borderRadius : f.borderRadius?.topLeft || 0,
                onChange: (b) => t({ borderRadius: b })
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "General", defaultOpen: !0, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Container Padding" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "text-[10px] text-blue-500 hover:underline",
                onClick: () => s(!o),
                children: o ? "Simple Options" : "More Options"
              }
            )
          ] }),
          o ? /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ i.jsx(he, { label: "Top", value: typeof f.padding == "object" && f.padding !== null ? f.padding.top : f.padding || 0, onChange: (b) => t({ padding: { ...typeof f.padding == "object" ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, top: b } }) }),
            /* @__PURE__ */ i.jsx(he, { label: "Right", value: typeof f.padding == "object" && f.padding !== null ? f.padding.right : f.padding || 0, onChange: (b) => t({ padding: { ...typeof f.padding == "object" ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, right: b } }) }),
            /* @__PURE__ */ i.jsx(he, { label: "Bottom", value: typeof f.padding == "object" && f.padding !== null ? f.padding.bottom : f.padding || 0, onChange: (b) => t({ padding: { ...typeof f.padding == "object" ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, bottom: b } }) }),
            /* @__PURE__ */ i.jsx(he, { label: "Left", value: typeof f.padding == "object" && f.padding !== null ? f.padding.left : f.padding || 0, onChange: (b) => t({ padding: { ...typeof f.padding == "object" ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, left: b } }) })
          ] }) : /* @__PURE__ */ i.jsx(
            he,
            {
              label: "All Sides",
              value: typeof f.padding == "object" && f.padding !== null ? f.padding.top : f.padding || 0,
              onChange: (b) => t({ padding: { top: b, right: b, bottom: b, left: b } })
            }
          )
        ] }) })
      ] })
    ] });
  }
  if (e.type === "image") {
    const f = e, v = (y) => typeof f.padding == "object" && f.padding !== null ? f.padding[y] || 0 : f.padding || 0;
    return /* @__PURE__ */ i.jsxs("div", { className: "h-full flex flex-col bg-background border-l w-72 lg:w-80", children: [
      /* @__PURE__ */ i.jsx(x, {}),
      /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: [
        /* @__PURE__ */ i.jsx(Ue, { title: "Image", defaultOpen: !0, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Image URL" }),
            /* @__PURE__ */ i.jsx("div", { className: "flex bg-muted rounded-md overflow-hidden h-9", children: /* @__PURE__ */ i.jsx(
              "input",
              {
                className: "flex-1 bg-transparent px-3 text-sm focus:outline-none",
                value: f.src || "",
                onChange: (y) => t({ src: y.target.value }),
                placeholder: "https://example.com/image.jpg"
              }
            ) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Alternate Text" }),
            /* @__PURE__ */ i.jsx(
              _e,
              {
                className: "h-9",
                value: f.alt || "",
                onChange: (y) => t({ alt: y.target.value }),
                placeholder: "Image description"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "Width & Alignment", defaultOpen: !0, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Auto Width" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => t({ autoWidth: f.autoWidth === !1 }),
                className: `w-10 h-5 rounded-full relative transition-colors ${f.autoWidth !== !1 ? "bg-blue-600" : "bg-muted"}`,
                children: /* @__PURE__ */ i.jsx("div", { className: `absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${f.autoWidth !== !1 ? "translate-x-5" : ""}` })
              }
            )
          ] }),
          f.autoWidth === !1 && /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Width" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: typeof f.width == "string" && f.width.includes("%") ? parseInt(f.width) : 100,
                  onChange: (y) => t({ width: `${y.target.value}%` }),
                  className: "flex-1"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "text-sm min-w-[45px]", children: [
                typeof f.width == "string" && f.width.includes("%") ? parseInt(f.width) : 100,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Alignment" }),
            /* @__PURE__ */ i.jsx("div", { className: "flex bg-muted p-1 rounded-md h-9 gap-1", children: ["left", "center", "right", "justify"].map((y) => /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => t({ align: y }),
                className: `flex-1 flex items-center justify-center rounded text-[10px] transition-all capitalize ${f.align === y ? "bg-background shadow-sm text-foreground font-bold" : "text-muted-foreground hover:text-foreground"}`,
                children: y[0].toUpperCase()
              },
              y
            )) })
          ] })
        ] }) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "Action", defaultOpen: !1, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Link URL" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex bg-muted rounded-md overflow-hidden h-9", children: [
              /* @__PURE__ */ i.jsx("div", { className: "bg-muted-foreground/10 px-3 flex items-center text-[10px] font-bold border-r", children: "URL" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  className: "flex-1 bg-transparent px-3 text-sm focus:outline-none",
                  value: f.link || "",
                  onChange: (y) => t({ link: y.target.value }),
                  placeholder: "https://"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Target" }),
            /* @__PURE__ */ i.jsxs(
              ct,
              {
                value: f.target || "_blank",
                onValueChange: (y) => t({ target: y }),
                children: [
                  /* @__PURE__ */ i.jsx(et, { className: "h-9", children: /* @__PURE__ */ i.jsx(dt, {}) }),
                  /* @__PURE__ */ i.jsxs(tt, { children: [
                    /* @__PURE__ */ i.jsx(le, { value: "_blank", children: "New Tab" }),
                    /* @__PURE__ */ i.jsx(le, { value: "_self", children: "Same Tab" })
                  ] })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "General", defaultOpen: !0, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs font-bold uppercase text-[10px] tracking-wider", children: "Padding" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "text-[10px] text-blue-500 hover:underline",
                onClick: () => h(!m),
                children: m ? "Simple Options" : "More Options"
              }
            )
          ] }),
          m ? /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ i.jsx(he, { label: "Top", value: v("top"), onChange: (y) => t({ padding: { ...typeof f.padding == "object" && f.padding !== null ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, top: y } }) }),
            /* @__PURE__ */ i.jsx(he, { label: "Right", value: v("right"), onChange: (y) => t({ padding: { ...typeof f.padding == "object" && f.padding !== null ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, right: y } }) }),
            /* @__PURE__ */ i.jsx(he, { label: "Bottom", value: v("bottom"), onChange: (y) => t({ padding: { ...typeof f.padding == "object" && f.padding !== null ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, bottom: y } }) }),
            /* @__PURE__ */ i.jsx(he, { label: "Left", value: v("left"), onChange: (y) => t({ padding: { ...typeof f.padding == "object" && f.padding !== null ? f.padding : { top: 0, right: 0, bottom: 0, left: 0 }, left: y } }) })
          ] }) : /* @__PURE__ */ i.jsx(
            he,
            {
              label: "All Sides",
              value: v("top"),
              onChange: (y) => t({ padding: { top: y, right: y, bottom: y, left: y } })
            }
          )
        ] }) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "Border", defaultOpen: !1, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Width",
              value: f.borderWidth || 0,
              onChange: (y) => t({ borderWidth: y })
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Style" }),
            /* @__PURE__ */ i.jsxs(
              ct,
              {
                value: f.borderStyle || "solid",
                onValueChange: (y) => t({ borderStyle: y }),
                children: [
                  /* @__PURE__ */ i.jsx(et, { className: "h-9", children: /* @__PURE__ */ i.jsx(dt, {}) }),
                  /* @__PURE__ */ i.jsxs(tt, { children: [
                    /* @__PURE__ */ i.jsx(le, { value: "solid", children: "Solid" }),
                    /* @__PURE__ */ i.jsx(le, { value: "dashed", children: "Dashed" }),
                    /* @__PURE__ */ i.jsx(le, { value: "dotted", children: "Dotted" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Color" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "w-9 h-9 rounded-md border overflow-hidden shrink-0 relative shadow-sm", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    value: f.borderColor || "#000000",
                    onChange: (y) => t({ borderColor: y.target.value }),
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: f.borderColor || "#000000" } })
              ] }),
              /* @__PURE__ */ i.jsx(
                _e,
                {
                  className: "h-9",
                  value: f.borderColor || "#000000",
                  onChange: (y) => t({ borderColor: y.target.value })
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ i.jsx(Ue, { title: "Responsive Design", defaultOpen: !1, children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Hide on Desktop" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => t({ hideOnDesktop: !f.hideOnDesktop }),
                className: `w-10 h-5 rounded-full relative transition-colors ${f.hideOnDesktop ? "bg-blue-600" : "bg-muted"}`,
                children: /* @__PURE__ */ i.jsx("div", { className: `absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${f.hideOnDesktop ? "translate-x-5" : ""}` })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i.jsx(J, { className: "text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider", children: "Hide on Mobile" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => t({ hideOnMobile: !f.hideOnMobile }),
                className: `w-10 h-5 rounded-full relative transition-colors ${f.hideOnMobile ? "bg-blue-600" : "bg-muted"}`,
                children: /* @__PURE__ */ i.jsx("div", { className: `absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${f.hideOnMobile ? "translate-x-5" : ""}` })
              }
            )
          ] })
        ] }) })
      ] })
    ] });
  }
  return /* @__PURE__ */ i.jsxs("div", { className: "h-full flex flex-col bg-background border-l", children: [
    /* @__PURE__ */ i.jsx(x, {}),
    /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ i.jsx("div", { className: "p-4", children: /* @__PURE__ */ i.jsxs(dl, { value: n, onValueChange: r, className: "w-full", children: [
      /* @__PURE__ */ i.jsxs(rs, { className: "w-full grid grid-cols-3 mb-4", children: [
        /* @__PURE__ */ i.jsx(zt, { value: "style", children: "Style" }),
        /* @__PURE__ */ i.jsx(zt, { value: "layout", children: "Layout" }),
        /* @__PURE__ */ i.jsx(zt, { value: "content", children: "Content" })
      ] }),
      /* @__PURE__ */ i.jsx(Wt, { value: "style", className: "space-y-4", children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ i.jsx(J, { children: "Background" }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                value: e.backgroundColor || "#ffffff",
                onChange: (f) => t({ backgroundColor: f.target.value }),
                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: e.backgroundColor || "#ffffff" } })
          ] }),
          /* @__PURE__ */ i.jsx(
            _e,
            {
              value: e.backgroundColor || "#ffffff",
              onChange: (f) => t({ backgroundColor: f.target.value })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ i.jsx(Wt, { value: "layout", className: "space-y-4", children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ i.jsx(J, { children: "Width" }),
        /* @__PURE__ */ i.jsx(
          _e,
          {
            type: "text",
            value: e.width || "100%",
            onChange: (f) => t({ width: String(f.target.value) }),
            placeholder: "px or %"
          }
        )
      ] }) }),
      /* @__PURE__ */ i.jsx(Wt, { value: "content", className: "space-y-4", children: /* @__PURE__ */ i.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "Editing ",
        e.type,
        " properties."
      ] }) })
    ] }) }) })
  ] });
}, $b = k.forwardRef(
  ({
    variant: e = "primary",
    size: t = "md",
    loading: n = !1,
    fullWidth: r = !1,
    className: o,
    children: s,
    disabled: a,
    ...l
  }, d) => {
    const c = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100",
      danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100 disabled:text-gray-400"
    }, p = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };
    return /* @__PURE__ */ i.jsxs(
      "button",
      {
        ref: d,
        disabled: a || n,
        className: St(
          "font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2",
          c[e],
          p[t],
          r && "w-full",
          "disabled:cursor-not-allowed",
          o
        ),
        ...l,
        children: [
          n && /* @__PURE__ */ i.jsx("div", { className: "animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" }),
          s
        ]
      }
    );
  }
);
$b.displayName = "Button";
const Fb = k.forwardRef(
  ({ label: e, error: t, helperText: n, icon: r, className: o, ...s }, a) => /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
    e && /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-gray-700", children: e }),
    /* @__PURE__ */ i.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          ref: a,
          className: St(
            "w-full px-3 py-2 border rounded-lg transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            t ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500",
            r && "pl-10",
            o
          ),
          ...s
        }
      ),
      r && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 text-gray-400 pointer-events-none", children: r })
    ] }),
    t && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-600", children: t }),
    n && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-gray-500", children: n })
  ] })
);
Fb.displayName = "Input";
const Bb = k.forwardRef(
  ({ label: e, error: t, helperText: n, options: r, className: o, ...s }, a) => /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
    e && /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-gray-700", children: e }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        ref: a,
        className: St(
          "w-full px-3 py-2 border rounded-lg transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          t ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500",
          o
        ),
        ...s,
        children: r.map((l) => /* @__PURE__ */ i.jsx("option", { value: l.value, children: l.label }, l.value))
      }
    ),
    t && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-600", children: t }),
    n && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-gray-500", children: n })
  ] })
);
Bb.displayName = "Select";
// @__NO_SIDE_EFFECTS__
function zb(e) {
  const t = /* @__PURE__ */ Wb(e), n = g.forwardRef((r, o) => {
    const { children: s, ...a } = r, l = g.Children.toArray(s), d = l.find(Vb);
    if (d) {
      const c = d.props.children, p = l.map((u) => u === d ? g.Children.count(c) > 1 ? g.Children.only(null) : g.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: g.isValidElement(c) ? g.cloneElement(c, void 0, p) : null });
    }
    return /* @__PURE__ */ i.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Wb(e) {
  const t = g.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (g.isValidElement(o)) {
      const a = Yb(o), l = Gb(s, o.props);
      return o.type !== g.Fragment && (l.ref = r ? an(r, a) : a), g.cloneElement(o, l);
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Hb = /* @__PURE__ */ Symbol("radix.slottable");
function Vb(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Hb;
}
function Gb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
      const d = s(...l);
      return o(...l), d;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Yb(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Vr = "Dialog", [Ic] = pn(Vr), [Ub, it] = Ic(Vr), _c = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, l = g.useRef(null), d = g.useRef(null), [c, p] = Tn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Vr
  });
  return /* @__PURE__ */ i.jsx(
    Ub,
    {
      scope: t,
      triggerRef: l,
      contentRef: d,
      contentId: Ot(),
      titleId: Ot(),
      descriptionId: Ot(),
      open: c,
      onOpenChange: p,
      onOpenToggle: g.useCallback(() => p((u) => !u), [p]),
      modal: a,
      children: n
    }
  );
};
_c.displayName = Vr;
var Pc = "DialogTrigger", Kb = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(Pc, n), s = Ee(t, o.triggerRef);
    return /* @__PURE__ */ i.jsx(
      pe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": bs(o.open),
        ...r,
        ref: s,
        onClick: ce(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Kb.displayName = Pc;
var xs = "DialogPortal", [Xb, Mc] = Ic(xs, {
  forceMount: void 0
}), Lc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = it(xs, t);
  return /* @__PURE__ */ i.jsx(Xb, { scope: t, forceMount: n, children: g.Children.map(r, (a) => /* @__PURE__ */ i.jsx(Fn, { present: n || s.open, children: /* @__PURE__ */ i.jsx(hs, { asChild: !0, container: o, children: a }) })) });
};
Lc.displayName = xs;
var Sr = "DialogOverlay", $c = g.forwardRef(
  (e, t) => {
    const n = Mc(Sr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = it(Sr, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ i.jsx(Fn, { present: r || s.open, children: /* @__PURE__ */ i.jsx(Jb, { ...o, ref: t }) }) : null;
  }
);
$c.displayName = Sr;
var qb = /* @__PURE__ */ zb("DialogOverlay.RemoveScroll"), Jb = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(Sr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ i.jsx(ms, { as: qb, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ i.jsx(
        pe.div,
        {
          "data-state": bs(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ut = "DialogContent", Fc = g.forwardRef(
  (e, t) => {
    const n = Mc(Ut, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = it(Ut, e.__scopeDialog);
    return /* @__PURE__ */ i.jsx(Fn, { present: r || s.open, children: s.modal ? /* @__PURE__ */ i.jsx(Zb, { ...o, ref: t }) : /* @__PURE__ */ i.jsx(Qb, { ...o, ref: t }) });
  }
);
Fc.displayName = Ut;
var Zb = g.forwardRef(
  (e, t) => {
    const n = it(Ut, e.__scopeDialog), r = g.useRef(null), o = Ee(t, n.contentRef, r);
    return g.useEffect(() => {
      const s = r.current;
      if (s) return Fl(s);
    }, []), /* @__PURE__ */ i.jsx(
      Bc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ce(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: ce(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && s.preventDefault();
        }),
        onFocusOutside: ce(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Qb = g.forwardRef(
  (e, t) => {
    const n = it(Ut, e.__scopeDialog), r = g.useRef(!1), o = g.useRef(!1);
    return /* @__PURE__ */ i.jsx(
      Bc,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          n.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Bc = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, l = it(Ut, n), d = g.useRef(null), c = Ee(t, d);
    return pl(), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        ss,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ i.jsx(
            os,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": bs(l.open),
              ...a,
              ref: c,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(e0, { titleId: l.titleId }),
        /* @__PURE__ */ i.jsx(n0, { contentRef: d, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), vs = "DialogTitle", zc = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(vs, n);
    return /* @__PURE__ */ i.jsx(pe.h2, { id: o.titleId, ...r, ref: t });
  }
);
zc.displayName = vs;
var Wc = "DialogDescription", Hc = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(Wc, n);
    return /* @__PURE__ */ i.jsx(pe.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Hc.displayName = Wc;
var Vc = "DialogClose", Gc = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(Vc, n);
    return /* @__PURE__ */ i.jsx(
      pe.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ce(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Gc.displayName = Vc;
function bs(e) {
  return e ? "open" : "closed";
}
var Yc = "DialogTitleWarning", [C0, Uc] = Dm(Yc, {
  contentName: Ut,
  titleName: vs,
  docsSlug: "dialog"
}), e0 = ({ titleId: e }) => {
  const t = Uc(Yc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return g.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, t0 = "DialogDescriptionWarning", n0 = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Uc(t0).contentName}}.`;
  return g.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, r0 = _c, o0 = Lc, Kc = $c, Xc = Fc, qc = zc, Jc = Hc, s0 = Gc;
const Bo = r0, i0 = o0, Zc = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Kc,
  {
    ref: n,
    className: ue(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Zc.displayName = Kc.displayName;
const Nr = g.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsxs(i0, { children: [
  /* @__PURE__ */ i.jsx(Zc, {}),
  /* @__PURE__ */ i.jsxs(
    Xc,
    {
      ref: r,
      className: ue(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ i.jsxs(s0, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ i.jsx(Nm, { className: "h-4 w-4" }),
          /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Nr.displayName = Xc.displayName;
const jr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: ue(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
jr.displayName = "DialogHeader";
const Qc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: ue(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Qc.displayName = "DialogFooter";
const Er = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  qc,
  {
    ref: n,
    className: ue(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Er.displayName = qc.displayName;
const ys = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Jc,
  {
    ref: n,
    className: ue("text-sm text-muted-foreground", e),
    ...t
  }
));
ys.displayName = Jc.displayName;
const a0 = ({
  isOpen: e,
  onClose: t,
  onLoadTemplate: n
}) => {
  const { templates: r } = Ui(), o = (s) => {
    n(s), t();
  };
  return /* @__PURE__ */ i.jsx(Bo, { open: e, onOpenChange: (s) => !s && t(), children: /* @__PURE__ */ i.jsxs(Nr, { className: "max-w-4xl max-h-[85vh]", children: [
    /* @__PURE__ */ i.jsxs(jr, { children: [
      /* @__PURE__ */ i.jsx(Er, { children: "Template Library" }),
      /* @__PURE__ */ i.jsx(ys, { children: "Select a template to start editing." })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto p-4", children: r.length === 0 ? /* @__PURE__ */ i.jsxs("div", { className: "col-span-full text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ i.jsx("p", { className: "text-lg font-medium mb-2", children: "No templates found" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-sm", children: "Create a new template to get started" })
    ] }) : r.map((s) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "border border-border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all cursor-pointer bg-card group",
        onClick: () => o(s),
        children: [
          /* @__PURE__ */ i.jsx("div", { className: "bg-muted h-32 rounded mb-3 flex items-center justify-center text-4xl group-hover:bg-muted/80 transition-colors", children: "📧" }),
          /* @__PURE__ */ i.jsx("h3", { className: "font-medium text-foreground mb-1 truncate", children: s.name }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: s.description || "No description" }),
          /* @__PURE__ */ i.jsxs("div", { className: "mt-3 flex justify-between items-center text-xs text-muted-foreground", children: [
            /* @__PURE__ */ i.jsx("span", { children: new Date(s.updatedAt).toLocaleDateString() }),
            /* @__PURE__ */ i.jsx("span", { className: "group-hover:text-primary font-medium", children: "Load →" })
          ] })
        ]
      },
      s.id
    )) })
  ] }) });
}, l0 = [
  {
    name: "",
    elements: [
      { id: "row", label: "Columns", icon: Hh, isFree: !0 },
      { id: "heading", label: "Heading", icon: Lh, isFree: !0 },
      { id: "text", label: "Text", icon: Cm, isFree: !0 },
      { id: "image", label: "Image", icon: Fh, isFree: !0 },
      { id: "button", label: "Button", icon: Zh, isFree: !0 },
      { id: "divider", label: "Divider", icon: za, isFree: !0 },
      { id: "spacer", label: "Spacer", icon: gh, isFree: !0 }
    ]
  }
], c0 = () => {
  const [e, t] = ie(""), n = l0.map((r) => ({
    ...r,
    elements: r.elements.filter(
      (o) => o.label.toLowerCase().includes(e.toLowerCase()) || o.id.toLowerCase().includes(e.toLowerCase())
    )
  })).filter((r) => r.elements.length > 0);
  return /* @__PURE__ */ i.jsx("div", { className: "h-full flex flex-col bg-background", children: /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-6 p-4", children: n.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "text-center py-8 text-muted-foreground text-sm", children: "No elements found" }) : n.map((r) => /* @__PURE__ */ i.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ i.jsx("h3", { className: "text-sm font-medium text-muted-foreground", children: r.name }),
    /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-2 gap-2", children: r.elements.map((o) => /* @__PURE__ */ i.jsxs(
      We,
      {
        variant: "outline",
        draggable: !0,
        onDragStart: (s) => {
          s.dataTransfer.setData("elementType", o.id), s.dataTransfer.effectAllowed = "copy";
        },
        className: ue(
          "h-20 flex flex-col items-center justify-center gap-2 p-2 hover:border-primary hover:bg-primary/5 transition-all cursor-grab active:cursor-grabbing"
        ),
        children: [
          /* @__PURE__ */ i.jsx(o.icon, { className: "w-6 h-6 text-foreground/80" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-xs font-medium", children: o.label })
        ]
      },
      o.id
    )) })
  ] }, r.name)) }) }) });
}, d0 = [
  { id: "layout-1", label: "1 Column", icon: fm, columns: [100] },
  { id: "layout-2", label: "2 Columns", icon: Th, columns: [50, 50] },
  { id: "layout-3", label: "3 Columns", icon: Dh, columns: [33.33, 33.33, 33.33] },
  { id: "layout-4", label: "4 Columns", icon: Ih, columns: [25, 25, 25, 25] },
  { id: "layout-1-2", label: "1:2 Column", icon: lm, columns: [33.33, 66.66] },
  // Left sidebar style
  { id: "layout-2-1", label: "2:1 Column", icon: nm, columns: [66.66, 33.33] }
  // Right sidebar style
], u0 = () => /* @__PURE__ */ i.jsxs("div", { className: "h-full flex flex-col p-4", children: [
  /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-2 gap-3", children: d0.map((e) => /* @__PURE__ */ i.jsxs(
    We,
    {
      variant: "outline",
      draggable: !0,
      onDragStart: (t) => {
        t.dataTransfer.setData("elementType", e.id), t.dataTransfer.effectAllowed = "copy";
      },
      className: ue(
        "h-24 flex flex-col items-center justify-center gap-3 p-2 hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-grab active:cursor-grabbing border-2 border-dashed border-transparent hover:border-solid bg-card shadow-sm"
      ),
      children: [
        /* @__PURE__ */ i.jsx(e.icon, { className: "w-8 h-8 text-foreground/70", strokeWidth: 1.5 }),
        /* @__PURE__ */ i.jsx("span", { className: "text-xs font-medium", children: e.label })
      ]
    },
    e.id
  )) }),
  /* @__PURE__ */ i.jsx("div", { className: "mt-8 text-center text-xs text-muted-foreground p-4 border rounded bg-muted/20", children: /* @__PURE__ */ i.jsx("p", { children: "Drag a block to the canvas to add a new row structure." }) })
] }), f0 = ({ template: e, onUpdateTemplate: t }) => e ? /* @__PURE__ */ i.jsxs("div", { className: "h-full overflow-y-auto custom-scrollbar p-6 space-y-8", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ i.jsx("h3", { className: "font-semibold text-sm", children: "General" }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Text Color" }),
        /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i.jsxs("div", { className: "w-6 h-6 rounded border overflow-hidden relative shadow-sm", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "color",
              value: e.defaultTextColor || "#000000",
              onChange: (n) => t({ defaultTextColor: n.target.value }),
              className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: e.defaultTextColor || "#000000" } })
        ] }) })
      ] }),
      /* @__PURE__ */ i.jsx(Yt, {}),
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Background Color" }),
        /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i.jsxs("div", { className: "w-6 h-6 rounded border overflow-hidden relative shadow-sm", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "color",
              value: e.defaultBackgroundColor || "#ffffff",
              onChange: (n) => t({ defaultBackgroundColor: n.target.value }),
              className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: "w-full h-full", style: { backgroundColor: e.defaultBackgroundColor || "#ffffff" } })
        ] }) })
      ] }),
      /* @__PURE__ */ i.jsx(Yt, {}),
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Content Width" }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1 w-24", children: [
          /* @__PURE__ */ i.jsx(
            _e,
            {
              type: "number",
              className: "h-8 text-xs pr-1 text-right",
              value: e.width,
              onChange: (n) => t({ width: Number(n.target.value) })
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "text-xs text-muted-foreground", children: "px" })
        ] })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ i.jsx("h3", { className: "font-semibold text-sm", children: "Global Typography" }),
    /* @__PURE__ */ i.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Font Family" }),
      /* @__PURE__ */ i.jsxs(
        ct,
        {
          value: e.defaultFontFamily || "Arial",
          onValueChange: (n) => t({ defaultFontFamily: n }),
          children: [
            /* @__PURE__ */ i.jsx(et, { className: "h-8 text-xs", children: /* @__PURE__ */ i.jsx(dt, {}) }),
            /* @__PURE__ */ i.jsxs(tt, { children: [
              /* @__PURE__ */ i.jsx(le, { value: "Arial", children: "Arial" }),
              /* @__PURE__ */ i.jsx(le, { value: "Helvetica", children: "Helvetica" }),
              /* @__PURE__ */ i.jsx(le, { value: "Georgia", children: "Georgia" }),
              /* @__PURE__ */ i.jsx(le, { value: "Courier New", children: "Courier New" }),
              /* @__PURE__ */ i.jsx(le, { value: "Verdana", children: "Verdana" }),
              /* @__PURE__ */ i.jsx(le, { value: "Times New Roman", children: "Times New Roman" })
            ] })
          ]
        }
      )
    ] }) })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "space-y-4 pt-4 border-t", children: [
    /* @__PURE__ */ i.jsx("h3", { className: "font-semibold text-sm", children: "Email Settings" }),
    /* @__PURE__ */ i.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ i.jsx(J, { className: "text-xs", children: "Preheader Text" }),
      /* @__PURE__ */ i.jsx(
        _e,
        {
          type: "text",
          placeholder: "Brief summary...",
          className: "h-8 text-xs",
          value: e.description || "",
          onChange: (n) => t({ description: n.target.value })
        }
      )
    ] })
  ] })
] }) : /* @__PURE__ */ i.jsx("div", { className: "p-4 text-center text-muted-foreground", children: "No template selected" }), p0 = ({
  selectedElement: e,
  onUpdateElement: t,
  onDeselectElement: n,
  template: r,
  onUpdateTemplate: o
}) => {
  const [s, a] = ie("content");
  return e ? /* @__PURE__ */ i.jsxs("div", { className: "h-full flex flex-col bg-background", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "p-2 border-b flex items-center gap-2", children: [
      /* @__PURE__ */ i.jsx(We, { variant: "ghost", size: "sm", onClick: n, className: "h-8 w-8 p-0", children: /* @__PURE__ */ i.jsx(wh, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ i.jsx("span", { className: "text-sm font-semibold", children: "Back to Content" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ i.jsx(Lb, { element: e, onUpdate: t }, e.id) })
  ] }) : /* @__PURE__ */ i.jsx("div", { className: "h-full flex flex-col bg-background border-l", children: /* @__PURE__ */ i.jsxs(dl, { value: s, onValueChange: a, className: "h-full flex flex-col", children: [
    /* @__PURE__ */ i.jsx("div", { className: "p-2 border-b bg-muted/30", children: /* @__PURE__ */ i.jsxs(rs, { className: "w-full grid grid-cols-3 h-auto p-1 bg-muted/50", children: [
      /* @__PURE__ */ i.jsxs(zt, { value: "content", className: "flex flex-col items-center gap-1.5 py-2.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", children: [
        /* @__PURE__ */ i.jsx(hm, { className: "w-4 h-4" }),
        /* @__PURE__ */ i.jsx("span", { className: "text-[10px] font-medium", children: "Content" })
      ] }),
      /* @__PURE__ */ i.jsxs(zt, { value: "blocks", className: "flex flex-col items-center gap-1.5 py-2.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", children: [
        /* @__PURE__ */ i.jsx(Gh, { className: "w-4 h-4" }),
        /* @__PURE__ */ i.jsx("span", { className: "text-[10px] font-medium", children: "Blocks" })
      ] }),
      /* @__PURE__ */ i.jsxs(zt, { value: "body", className: "flex flex-col items-center gap-1.5 py-2.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", children: [
        /* @__PURE__ */ i.jsx(Ph, { className: "w-4 h-4" }),
        /* @__PURE__ */ i.jsx("span", { className: "text-[10px] font-medium", children: "Body" })
      ] })
    ] }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-hidden", children: [
      /* @__PURE__ */ i.jsx(Wt, { value: "content", className: "h-full m-0 data-[state=inactive]:hidden", children: /* @__PURE__ */ i.jsx(c0, {}) }),
      /* @__PURE__ */ i.jsx(Wt, { value: "blocks", className: "h-full m-0 data-[state=inactive]:hidden", children: /* @__PURE__ */ i.jsx(u0, {}) }),
      /* @__PURE__ */ i.jsx(Wt, { value: "body", className: "h-full m-0 data-[state=inactive]:hidden", children: /* @__PURE__ */ i.jsx(f0, { template: r, onUpdateTemplate: o }) })
    ] })
  ] }) });
};
var h0 = (e, t, n, r, o, s, a, l) => {
  let d = document.documentElement, c = ["light", "dark"];
  function p(h) {
    (Array.isArray(e) ? e : [e]).forEach((x) => {
      let f = x === "class", v = f && s ? o.map((y) => s[y] || y) : o;
      f ? (d.classList.remove(...v), d.classList.add(s && s[h] ? s[h] : h)) : d.setAttribute(x, h);
    }), u(h);
  }
  function u(h) {
    l && c.includes(h) && (d.style.colorScheme = h);
  }
  function m() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (r) p(r);
  else try {
    let h = localStorage.getItem(t) || n, x = a && h === "system" ? m() : h;
    p(x);
  } catch {
  }
}, m0 = g.createContext(void 0), g0 = { setTheme: (e) => {
}, themes: [] }, x0 = () => {
  var e;
  return (e = g.useContext(m0)) != null ? e : g0;
};
g.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: a, themes: l, nonce: d, scriptProps: c }) => {
  let p = JSON.stringify([n, t, s, e, l, a, r, o]).slice(1, -1);
  return g.createElement("script", { ...c, suppressHydrationWarning: !0, nonce: typeof window > "u" ? d : "", dangerouslySetInnerHTML: { __html: `(${h0.toString()})(${p})` } });
});
const v0 = ({ ...e }) => {
  const { theme: t = "system" } = x0();
  return /* @__PURE__ */ i.jsx(
    of,
    {
      theme: t,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ i.jsx(Rh, { className: "size-4" }),
        info: /* @__PURE__ */ i.jsx(zh, { className: "size-4" }),
        warning: /* @__PURE__ */ i.jsx(ym, { className: "size-4" }),
        error: /* @__PURE__ */ i.jsx(em, { className: "size-4" }),
        loading: /* @__PURE__ */ i.jsx(Uh, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "hsl(var(--popover))",
        "--normal-text": "hsl(var(--popover-foreground))",
        "--normal-border": "hsl(var(--border))",
        "--border-radius": "var(--radius)"
      },
      toastOptions: {
        classNames: {
          toast: "cn-toast"
        }
      },
      ...e
    }
  );
}, b0 = ({
  readOnly: e,
  hideToolbar: t,
  hideElementsPanel: n,
  hideSettingsPanel: r,
  hideSaveButton: o,
  onSave: s,
  showFooter: a = !1,
  showPoweredBy: l = !1,
  includeUnsubscribe: d = !1
}) => {
  const [c, p] = ie(!1), [u, m] = ie("html"), [h, x] = ie(!1), [f, v] = ie(!1), [y, b] = ie("desktop"), [w, S] = ie(!1), N = (L, U = "success") => {
    U === "success" ? or.success(L) : U === "error" ? or.error(L) : or.info(L);
  }, {
    currentTemplate: E,
    selectedElementId: C,
    zoom: j,
    isDirty: O,
    createTemplate: A,
    addElement: P,
    addElementAtIndex: z,
    addChildElement: V,
    updateElement: B,
    deleteElement: q,
    duplicateElement: I,
    reorderElements: M,
    moveElement: T,
    selectElement: K,
    setZoom: oe,
    saveTemplate: R,
    undo: F,
    redo: _,
    loadTemplate: $,
    updateTemplate: Z
  } = Yi(), { templates: ee, addTemplate: D } = Ui(), { mergeTags: H } = In();
  de(() => {
    ee.length === 0 && (D({
      id: "welcome-email",
      name: "Welcome Email",
      description: "A simple welcome email for new users",
      width: 600,
      elements: [
        {
          id: me(),
          type: "row",
          label: "Welcome Row",
          children: [
            {
              id: me(),
              type: "column",
              label: "Content Column",
              children: [
                { id: me(), type: "text", content: "Welcome to our platform!", fontSize: 24, textAlign: "center", padding: { top: 20, bottom: 20, left: 20, right: 20 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: !0, locked: !1 },
                { id: me(), type: "image", src: "https://picsum.photos/seed/welcome/600/200", alt: "Welcome Banner", width: "100%", height: "auto", padding: { top: 10, bottom: 10, left: 0, right: 0 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: !0, locked: !1 },
                { id: me(), type: "text", content: "We are excited to have you on board.", fontSize: 16, padding: { top: 10, bottom: 10, left: 20, right: 20 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: !0, locked: !1 }
              ],
              width: "100%",
              padding: { top: 20, right: 20, bottom: 20, left: 20 },
              margin: { top: 0, right: 0, bottom: 0, left: 0 },
              visible: !0,
              locked: !1
            }
          ],
          width: "100%",
          gap: 10,
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
          visible: !0,
          locked: !1
        }
      ],
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      defaultBackgroundColor: "#ffffff",
      defaultFontFamily: "Arial",
      defaultFontSize: 16,
      defaultLineHeight: 1.5,
      defaultTextColor: "#000000"
    }), D({
      id: "newsletter",
      name: "Monthly Newsletter",
      description: "Standard newsletter layout",
      width: 600,
      elements: [
        {
          id: me(),
          type: "row",
          label: "Newsletter Row",
          children: [
            {
              id: me(),
              type: "column",
              label: "Newsletter Column",
              children: [
                { id: me(), type: "text", content: "Monthly Newsletter", fontSize: 28, fontWeight: "bold", textAlign: "center", padding: { top: 30, bottom: 30, left: 20, right: 20 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: !0, locked: !1 },
                { id: me(), type: "divider", color: "#eeeeee", height: 1, padding: { top: 10, bottom: 10, left: 0, right: 0 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: !0, locked: !1 },
                { id: me(), type: "text", content: "Here are the latest updates...", fontSize: 16, padding: { top: 20, bottom: 20, left: 20, right: 20 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: !0, locked: !1 }
              ],
              width: "100%",
              padding: { top: 20, right: 20, bottom: 20, left: 20 },
              margin: { top: 0, right: 0, bottom: 0, left: 0 },
              visible: !0,
              locked: !1
            }
          ],
          width: "100%",
          gap: 10,
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
          visible: !0,
          locked: !1
        }
      ],
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      defaultBackgroundColor: "#ffffff",
      defaultFontFamily: "Helvetica",
      defaultFontSize: 16,
      defaultLineHeight: 1.6,
      defaultTextColor: "#333333"
    }), D({
      id: "tourism-day-html",
      name: "World Tourism Day",
      description: "HTML email template - Travel promotion",
      width: 600,
      elements: [
        {
          id: me(),
          type: "html",
          content: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>World Tourism Day</title></head>
<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
<div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#D4F3FE">
<table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-color:#D4F3FE">
<tr><td valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" align="center" class="es-header" role="none" style="border-collapse:collapse;border-spacing:0px;width:100%;background-color:transparent">
<tr><td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-header-body" role="none" style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
<tr><td align="left" style="padding:20px;Margin:0">
<table cellpadding="0" cellspacing="0" width="100%" role="none" style="border-collapse:collapse;border-spacing:0px">
<tr><td valign="top" align="center" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email"><img src="https://epxkylf.stripocdn.email/content/guids/CABINET_0ee1c5a7ffbcbc022a316635d5ce8f13/images/group_116.png" alt="Logo" height="60" title="Logo" style="display:block;font-size:14px;border:0"></a></td></tr>
</table></td></tr></table></td></tr></table></td></tr></table>
<table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none" style="border-collapse:collapse;border-spacing:0px;width:100%">
<tr><td align="center" style="padding:0;Margin:0">
<table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" role="none">
<tr><td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" role="none" style="border-collapse:collapse;border-spacing:0px">
<tr><td valign="top" align="center" style="padding:0;Margin:0;width:600px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email"><img src="https://epxkylf.stripocdn.email/content/guids/bannerImgGuid/images/image16620443057282756.png" alt="World tourism day" title="World tourism day" width="600" height="400" style="display:block;font-size:14px;border:0"></a></td></tr>
</table></td></tr></table></td></tr></table></td></tr></table>
<table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="border-collapse:collapse;border-spacing:0px;width:100%">
<tr><td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-content-body" role="none" style="border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr><td align="left" style="Margin:0;padding:20px 20px 30px 20px">
<table cellpadding="0" cellspacing="0" width="100%" role="none" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" style="padding:0;Margin:0;padding-right:40px;padding-left:40px"><p style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#455A64;font-size:14px">On the occasion of <strong>World Tourism Day</strong>, I wish that you are blessed with more and more holidays to see many more new places and create beautiful memories to cherish.</p></td></tr>
<tr><td align="center" style="padding:0;Margin:0;padding-top:20px;padding-right:40px;padding-left:40px"><p style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#455A64;font-size:14px">Shop now and save up to 25% with our autumn deals</p></td></tr>
<tr><td align="center" style="padding:0;Margin:0;padding-top:20px"><span style="border-style:solid;border-color:#2CB543;background:#BD242B;border-width:0px;display:inline-block;border-radius:10px;width:auto"><a href="https://viewstripo.email" target="_blank" style="text-decoration:none;color:#FFFFFF;font-size:18px;padding:10px 20px;display:inline-block;background:#BD242B;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;line-height:21.6px;width:auto;text-align:center">Shopping for Travel</a></span></td></tr>
</table></td></tr></table></td></tr></table></td></tr></table>
<table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none" style="border-collapse:collapse;border-spacing:0px;width:100%;background-color:transparent">
<tr><td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-footer-body" role="none" style="border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr><td align="left" style="Margin:0;padding:40px 20px 20px 20px">
<table cellpadding="0" cellspacing="0" width="100%" role="none" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:Orbitron, sans-serif;font-size:24px;font-weight:bold;line-height:28.8px;color:#455A64">Any questions? <a href="https://viewstripo.email" target="_blank" style="text-decoration:underline;color:#068FC1;font-size:24px">We're here to help!</a></h2></td></tr>
<tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#455A64;font-size:14px">Copyright © 2022 Delivery, All rights reserved.</p></td></tr>
</table></td></tr></table></td></tr></table></td></tr></table>
</td></tr></table></div></body></html>`,
          visible: !0,
          locked: !1
        }
      ],
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      defaultBackgroundColor: "#D4F3FE",
      defaultFontFamily: "Arial",
      defaultFontSize: 14,
      defaultLineHeight: 1.5,
      defaultTextColor: "#455A64"
    }));
  }, [ee.length, D]);
  const te = (L) => {
    let U = L;
    if (L.elements.length > 0 && L.elements[0]?.type === "html")
      try {
        const Re = L.elements[0].content, Be = Fi(Re);
        Be.length > 0 && (U = {
          ...L,
          elements: Be
        }, N("HTML template parsed into editable elements", "success"));
      } catch (Re) {
        console.error("Error parsing HTML template:", Re), N("Error parsing HTML template", "error");
      }
    const re = (Re) => Re.map((Be) => {
      const qe = { ...Be, id: me() };
      return "children" in qe && qe.children && (qe.children = re(qe.children)), qe;
    }), Fe = {
      ...U,
      elements: re(U.elements)
    };
    $(L.id, Fe), v(!1), N(`"${L.name}" loaded`, "success");
  }, W = C && Co(E?.elements || [], C) || null, ne = (L) => {
    if (!L || !E) {
      K(L);
      return;
    }
    if (Co(E.elements, L)?.type === "column") {
      const re = Hi(E.elements, L);
      if (re && re.type === "row") {
        K(re.id);
        return;
      }
    }
    K(L);
  }, { features: Q } = _d();
  k.useEffect(() => {
    E || A("Email Template 1", "Start building your email");
  }, [E, A]), de(() => {
    if (!E || !a) return;
    if (!E.elements.some((U) => U._isFooter) && (l || d)) {
      const U = kd(
        E.elements,
        l,
        d
      );
      Z({ elements: U });
    }
  }, [E?.id, a, l, d]), de(() => {
    const L = (U) => {
      U.key === "Delete" && C && (q(C), N("Element deleted", "success")), (U.ctrlKey || U.metaKey) && U.key === "z" && !U.shiftKey && (U.preventDefault(), F(), N("Undo", "info")), ((U.ctrlKey || U.metaKey) && U.shiftKey && U.key === "z" || (U.ctrlKey || U.metaKey) && U.key === "y") && (U.preventDefault(), _(), N("Redo", "info")), (U.ctrlKey || U.metaKey) && U.key === "d" && C && (U.preventDefault(), I(C), N("Element duplicated", "success")), (U.ctrlKey || U.metaKey) && U.key === "s" && (U.preventDefault(), R(), N("Template saved", "success")), U.key === "Escape" && C && K(null);
    };
    return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
  }, [C, q, F, _, I, R, K]);
  const Se = (L) => {
    m(L), x(!0);
  }, Ne = () => {
    if (!E) return;
    const U = Ad(E, {
      format: u,
      minify: !0
    }), re = document.createElement("a");
    re.setAttribute(
      "href",
      `data:text/plain;charset=utf-8,${encodeURIComponent(U)}`
    ), re.setAttribute("download", `email.${u}`), re.style.display = "none", document.body.appendChild(re), re.click(), document.body.removeChild(re), x(!1);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "email-builder-theme h-full min-h-[600px] bg-background flex flex-col font-sans text-foreground overflow-hidden", children: [
    /* @__PURE__ */ i.jsx(
      jm,
      {
        zoom: j,
        isDirty: O,
        deviceMode: y,
        onDeviceModeChange: b,
        onZoomChange: oe,
        onUndo: F,
        onRedo: _,
        onSave: () => {
          R(), N("Template saved successfully", "success"), s && s();
        },
        onExport: Se,
        onShowPreview: () => p(!0),
        onOpenTemplates: () => v(!0)
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-1 overflow-hidden gap-2 md:gap-4 bg-muted/20 relative", children: [
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col min-w-0 h-full p-2 md:p-4", children: /* @__PURE__ */ i.jsx(
        ch,
        {
          template: E,
          selectedElementId: C,
          zoom: j,
          deviceMode: y,
          showGrid: !1,
          onElementSelect: ne,
          onElementUpdate: B,
          onElementDelete: q,
          onCanvasClick: () => K(null),
          onReorderElements: (L, U) => {
            M(L, U), N("Element reordered", "success");
          },
          onMoveElement: (L, U) => {
            T(L, U);
          },
          onAddElementAtIndex: (L, U) => {
            if (L.startsWith("layout-")) {
              let re = [];
              L === "layout-1" && (re = [{ width: "100%" }]), L === "layout-2" && (re = [{ width: "50%" }, { width: "50%" }]), L === "layout-3" && (re = [{ width: "33.33%" }, { width: "33.33%" }, { width: "33.33%" }]), L === "layout-4" && (re = [{ width: "25%" }, { width: "25%" }, { width: "25%" }, { width: "25%" }]), L === "layout-1-2" && (re = [{ width: "33.33%" }, { width: "66.66%" }]), L === "layout-2-1" && (re = [{ width: "66.66%" }, { width: "33.33%" }]);
              const Fe = Bt("row");
              Fe.children = re.map((Re) => ({
                ...Bt("column"),
                id: me(),
                width: Re.width,
                visible: !0,
                locked: !1
              })), z(Fe, U), N(`Row with ${re.length} columns added`, "success");
              return;
            }
            if (L === "row") {
              const re = Bt(L);
              z(re, U), N(`${L} added`, "success");
            } else {
              const re = Bt(L), Fe = Bt("row");
              Fe.children && Fe.children.length > 0 && Fe.children[0].children.push(re), z(Fe, U), N(`${L} added in new row`, "success");
            }
          },
          onAddChild: (L, U) => {
            const re = Bt(U);
            V(L, re), N(`${U} added to column`, "success");
          }
        }
      ) }),
      /* @__PURE__ */ i.jsx(
        We,
        {
          variant: "secondary",
          size: "icon",
          className: "md:hidden fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full shadow-lg",
          onClick: () => S(!w),
          children: w ? /* @__PURE__ */ i.jsx(om, { className: "h-5 w-5" }) : /* @__PURE__ */ i.jsx(im, { className: "h-5 w-5" })
        }
      ),
      w && /* @__PURE__ */ i.jsx(
        "div",
        {
          className: "md:hidden fixed inset-0 bg-black/50 z-30",
          onClick: () => S(!1)
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: `
          absolute md:relative inset-y-0 right-0 
          w-[280px] md:w-80 
          bg-background flex flex-col z-40 shadow-lg border-l
          transform transition-transform duration-300 ease-in-out
          ${w ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          h-full
        `, children: /* @__PURE__ */ i.jsx(
        p0,
        {
          selectedElement: W,
          onUpdateElement: (L) => C && B(C, L),
          onDeselectElement: () => K(null),
          template: E,
          onUpdateTemplate: Z
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(Bo, { open: c, onOpenChange: p, children: /* @__PURE__ */ i.jsxs(Nr, { className: "max-w-4xl max-h-[85vh]", children: [
      /* @__PURE__ */ i.jsx(jr, { children: /* @__PURE__ */ i.jsx(Er, { children: "Email Preview" }) }),
      /* @__PURE__ */ i.jsx("div", { className: "bg-muted p-8 rounded-lg overflow-auto max-h-[60vh] flex justify-center", children: E && /* @__PURE__ */ i.jsx(
        "div",
        {
          className: "bg-white shadow-sm",
          style: {
            width: `${E.width}px`,
            backgroundColor: E.defaultBackgroundColor,
            minHeight: "400px"
          },
          children: E.elements?.map((L) => /* @__PURE__ */ i.jsxs("div", { className: "p-4 border border-transparent hover:border-blue-200", children: [
            L.type === "text" && /* @__PURE__ */ i.jsx("div", { style: { fontSize: L.fontSize, color: L.color, textAlign: L.align }, dangerouslySetInnerHTML: { __html: L.content } }),
            L.type === "image" && /* @__PURE__ */ i.jsx("img", { src: L.src, alt: L.alt, style: { maxWidth: "100%" } }),
            L.type === "button" && /* @__PURE__ */ i.jsx("div", { style: { textAlign: L.align }, children: /* @__PURE__ */ i.jsx("a", { href: L.link, style: { display: "inline-block", background: L.backgroundColor, color: L.color, padding: "10px 20px", borderRadius: "4px", textDecoration: "none" }, children: L.text }) })
          ] }, L.id))
        }
      ) })
    ] }) }),
    /* @__PURE__ */ i.jsx(Bo, { open: h, onOpenChange: x, children: /* @__PURE__ */ i.jsxs(Nr, { children: [
      /* @__PURE__ */ i.jsxs(jr, { children: [
        /* @__PURE__ */ i.jsx(Er, { children: "Export Template" }),
        /* @__PURE__ */ i.jsx(ys, { children: "Choose export format and download your email template." })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "space-y-4 py-4", children: /* @__PURE__ */ i.jsxs("div", { className: "p-4 bg-muted rounded-md", children: [
        /* @__PURE__ */ i.jsxs("p", { className: "font-medium text-foreground mb-2", children: [
          "Format: ",
          u.toUpperCase()
        ] }),
        /* @__PURE__ */ i.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          u === "html" && "Export as standard HTML email",
          u === "json" && "Export as JSON data structure",
          u === "mjml" && "Export as MJML markup language",
          u === "amp" && "Export as Google AMP for Email"
        ] })
      ] }) }),
      /* @__PURE__ */ i.jsxs(Qc, { children: [
        /* @__PURE__ */ i.jsx(We, { variant: "outline", onClick: () => x(!1), children: "Cancel" }),
        /* @__PURE__ */ i.jsx(We, { onClick: Ne, children: "Export" })
      ] })
    ] }) }),
    /* @__PURE__ */ i.jsx(v0, { position: "bottom-right" }),
    /* @__PURE__ */ i.jsx(
      a0,
      {
        isOpen: f,
        onClose: () => v(!1),
        onLoadTemplate: te
      }
    )
  ] });
}, S0 = ({
  initialTemplate: e,
  mergeTags: t = [],
  mergeTagTriggers: n = ["@", "#"],
  onChange: r,
  onSave: o,
  readOnly: s = !1,
  hideToolbar: a = !1,
  hideElementsPanel: l = !1,
  hideSettingsPanel: d = !1,
  hideSaveButton: c = !1,
  hideTemplatesButton: p = !1,
  // Footer configuration
  showFooter: u = !1,
  showPoweredBy: m,
  includeUnsubscribe: h
}) => {
  const { currentTemplate: x, loadTemplate: f, createTemplate: v } = Yi(), { setMergeTags: y, setMergeTagTriggers: b } = In();
  de(() => {
    y(t), b(n);
  }, [t, n, y, b]), de(() => {
    e ? typeof e == "string" ? f("imported-html", e) : (!x || x.id !== e.id) && f(e.id, e) : x && v("New Email", "Start with a fresh template");
  }, [e]), de(() => {
    x && r && r(x);
  }, [x]);
  const w = () => {
    if (!x || !o) return;
    const S = {
      template: x,
      html: Vi(x),
      json: JSON.stringify(x, null, 2),
      mjml: Gi(x)
    };
    o(S);
  };
  return /* @__PURE__ */ i.jsx(
    b0,
    {
      readOnly: s,
      hideToolbar: a,
      hideElementsPanel: l,
      hideSettingsPanel: d,
      hideSaveButton: c,
      onSave: w,
      showFooter: u,
      showPoweredBy: m ?? u,
      includeUnsubscribe: h ?? u
    }
  );
};
export {
  S0 as EmailTemplateBuilder,
  S0 as default
};
