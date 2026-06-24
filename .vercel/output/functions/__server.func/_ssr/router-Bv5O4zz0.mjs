import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-DAW0C2JB.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ursa — Luxury Finland Journeys for Discerning Travellers" },
      { name: "description", content: "Ursa crafts deeply personal journeys through Finland — shaped by your taste, paced for your freedom, confirmed by specialists who know Finland like their own backyard." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ursa Travel" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Lato:wght@300;400;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./privacy-zcK6k5nT.mjs");
const Route$1 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — Ursa Travel"
    }, {
      name: "description",
      content: "Privacy Policy for Ursa Travel LLC."
    }],
    links: [{
      rel: "canonical",
      href: "/privacy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const heroAurora = "/assets/hero-aurora-BEbEUNpr.jpg";
const $$splitComponentImporter = () => import("./index-B_TNcE3H.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Ursa — Luxury Finland Journeys for Discerning Travellers"
    }, {
      name: "description",
      content: "Ursa crafts deeply personal journeys through Finland — shaped by your taste, paced for your freedom, confirmed by specialists who know Finland like their own backyard."
    }, {
      property: "og:title",
      content: "Ursa — Luxury Finland Journeys for Discerning Travellers"
    }, {
      property: "og:description",
      content: "Ursa crafts deeply personal journeys through Finland — shaped by your taste, paced for your freedom, confirmed by specialists who know Finland like their own backyard."
    }, {
      property: "og:image",
      content: heroAurora
    }, {
      name: "twitter:image",
      content: heroAurora
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Ursa Travel",
        description: "AI-personalised luxury Finland journeys",
        areaServed: "Finland"
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur border-b border-arctic/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "inline-flex flex-col items-center leading-none text-navy", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-normal uppercase tracking-widest text-3xl leading-none", children: "URSA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic lowercase text-sm tracking-[0.25em] text-navy/70 leading-none", children: "travel" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-10 text-[15px] tracking-[0.24em] uppercase text-navy", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#places", className: "hover:text-navy", children: "Places" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "hover:text-navy", children: "Method" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quiz", className: "hover:text-navy", children: "Your Profile" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#waitlist", className: "text-[15px] tracking-[0.24em] uppercase text-navy border-b border-gold pb-0.5 hover:text-gold", children: "Request Access" })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-navy text-arctic/70 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-col items-center leading-none text-2xl text-white-bright", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-normal uppercase tracking-widest leading-none", children: "URSA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic lowercase text-[0.48em] tracking-[0.25em] text-white-bright/70 leading-none", children: "travel" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Ursa Travel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Espoo, Finland · Serving travellers from across the United States." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/privacy", className: "hover:text-gold", children: "Privacy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Contact" })
    ] })
  ] }) });
}
const PrivacyRoute = Route$1.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  PrivacyRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Footer as F,
  Nav as N,
  heroAurora as h,
  router as r
};
