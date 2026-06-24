import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { h as heroAurora } from "./router-Bv5O4zz0.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const helsinkiDusk = "/assets/helsinki-dusk-nJzxVnae.jpg";
const tileLakeland = "/assets/tile-lakeland-DmR-rMhk.jpg";
const tileHelsinki = "/assets/tile-helsinki-iGpuYINW.jpg";
const tileArchipelago = "/assets/tile-archipelago-XcJydWmI.jpg";
const tileIgloo = "/assets/tile-igloo-BH9jwvel.jpg";
const tileSauna = "/assets/tile-sauna-BaMbubfV.jpg";
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
const HERO_IMAGES = [{
  src: heroAurora,
  alt: "Aurora over Finnish Lapland"
}, {
  src: tileLakeland,
  alt: "Finnish lakeland in summer"
}];
function Hero() {
  const [active, setActive] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_IMAGES.length);
    }, 5e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative h-screen min-h-[640px] w-full overflow-hidden", children: [
    HERO_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, width: 1920, height: 1080, className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${i === active ? "opacity-100" : "opacity-0"}` }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/10 to-navy/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#A08C4A] text-base font-medium tracking-[0.22em] uppercase mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]", children: "Finland · Only Finland" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-white-bright text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl", children: [
        "The north,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-display", children: "your way." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quiz", className: "bg-white-bright text-navy px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-gold transition-colors", children: "Find Your Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#places", className: "text-white-bright/90 text-[11px] tracking-[0.22em] uppercase border-b border-white-bright/40 pb-0.5", children: "See Finland ↓" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2", children: HERO_IMAGES.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 rounded-full ${i === active ? "bg-white-bright" : "bg-white-bright/40"}` }, i)) })
  ] });
}
const TILES = [{
  img: tileIgloo,
  eyebrow: "Lapland",
  title: "Sleep under aurora",
  tall: true
}, {
  img: tileHelsinki,
  eyebrow: "Helsinki",
  title: "Design city"
}, {
  img: tileArchipelago,
  eyebrow: "Archipelago",
  title: "Islands by ferry"
}, {
  img: tileLakeland,
  eyebrow: "Saimaa",
  title: "Lake & cabin"
}, {
  img: tileSauna,
  eyebrow: "Ritual",
  title: "The Finnish sauna"
}];
function Places() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "places", className: "bg-paper py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10 md:mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "A small country, deeply" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl text-navy", children: [
          "Your Finland, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "personally." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quiz", className: "hidden md:inline text-[11px] tracking-[0.22em] uppercase text-navy/60 hover:text-navy", children: "Build mine →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5", children: TILES.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#quiz", className: `group relative block overflow-hidden ${t.tall ? "row-span-2 h-full" : "aspect-square"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: `${t.eyebrow} — ${t.title}`, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 right-4 bottom-4 md:left-6 md:bottom-6 text-white-bright", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white-bright text-[13px] tracking-[0.25em] uppercase mb-1.5", children: t.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl leading-tight", children: t.title })
      ] })
    ] }, i)) })
  ] }) });
}
function Method() {
  const steps = [{
    n: "01",
    title: "Tell us your taste",
    body: "Five questions. No login."
  }, {
    n: "02",
    title: "AI drafts your route",
    body: "Real-time Finland, edited to you."
  }, {
    n: "03",
    title: "Specialist confirms",
    body: "A Finland expert finishes by hand."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how", className: "bg-navy text-white-bright py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "The Ursa Method" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl max-w-2xl", children: [
      "One country.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Personal as a letter." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-px bg-white-bright/10", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-navy p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold font-display italic text-5xl mb-6", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl mb-3", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-arctic/90 text-lg leading-relaxed", children: s.body })
    ] }, s.n)) })
  ] }) });
}
const QUIZ = [{
  q: "Pick a morning.",
  options: [{
    emoji: "❄️",
    title: "Aurora at dawn"
  }, {
    emoji: "🌲",
    title: "Forest & sauna"
  }, {
    emoji: "☕",
    title: "Helsinki café"
  }, {
    emoji: "⛴",
    title: "Slow ferry"
  }]
}, {
  q: "Travel for…",
  options: [{
    emoji: "🪵",
    title: "Depth"
  }, {
    emoji: "📖",
    title: "Culture"
  }, {
    emoji: "🛎",
    title: "Comfort"
  }, {
    emoji: "✨",
    title: "Quiet discovery"
  }]
}, {
  q: "With whom?",
  options: [{
    emoji: "💞",
    title: "Partner"
  }, {
    emoji: "👨‍👩‍👧",
    title: "Family"
  }, {
    emoji: "🚶",
    title: "Solo"
  }, {
    emoji: "👥",
    title: "Small group"
  }]
}, {
  q: "Which season?",
  options: [{
    emoji: "🌌",
    title: "Winter"
  }, {
    emoji: "🌱",
    title: "Spring"
  }, {
    emoji: "🌞",
    title: "Summer"
  }, {
    emoji: "🍂",
    title: "Autumn"
  }]
}];
const getProfile = (answers) => {
  const [morning, motivation, companions, season] = answers;
  if (season === 0 && morning === 0) return {
    name: "The Aurora Seeker",
    tagline: "You came for the lights. You'll stay for the silence.",
    description: "A Lapland winter journey built around the northern lights, with glass igloo nights, Sámi culture, and long still mornings in the wilderness. This is the Finland most people only dream about.",
    tags: ["Glass Igloo", "Northern Lights", "Lapland", "Winter", "Private Guide"]
  };
  if (companions === 1 && motivation === 1) return {
    name: "The Heritage Pilgrim",
    tagline: "For some travellers, Finland is not just a destination. It is a homecoming.",
    description: "A journey shaped around Finnish roots, the regions your family came from, the traditions that survived the journey to America, and the people who kept them alive. We'll help you find the places that matter.",
    tags: ["Heritage", "Family", "Culture", "Roots Journey", "Helsinki"]
  };
  if (season === 2 && (morning === 3 || motivation === 3)) return {
    name: "The Island Drifter",
    tagline: "No fixed agenda. Just water, islands, and time.",
    description: "A summer archipelago journey with overnight ferries, private island stays, harbour cafés, and the kind of afternoon where nobody asks what time it is. The Turku archipelago and Åland await.",
    tags: ["Archipelago", "Summer", "Midnight Sun", "Slow Travel", "Island Ferry"]
  };
  if (motivation === 1 && (season === 1 || season === 3)) return {
    name: "The Culture Wanderer",
    tagline: "You travel to understand, not just to see.",
    description: "Helsinki's design and architecture, the Savonlinna Opera Festival, ruska autumn walks. Finland has cultural depth that most visitors never find. We'll build you a journey with local guides who actually know it.",
    tags: ["Culture", "Helsinki", "Opera Festival", "Autumn", "Local Guides"]
  };
  if (motivation === 2) return {
    name: "The Considered Traveller",
    tagline: "Every detail handled. Every moment yours.",
    description: "You know what good travel feels like, and you know the difference between a hotel that is merely expensive and one that is genuinely right. We handle everything so you arrive relaxed and stay that way.",
    tags: ["Luxury", "Pre-arranged", "Boutique Hotels", "Private Transfers", "No Surprises"]
  };
  if (companions === 2) return {
    name: "The Independent North",
    tagline: "Your pace. Your Finland. Nobody else's itinerary.",
    description: "Solo travel in Finland is remarkable. The country is safe, English is universal, and Finns respect your space. We'll build you a journey with enough structure to feel secure and enough freedom to feel alive.",
    tags: ["Solo", "Freedom", "Safe", "Flexible", "Self-guided"]
  };
  if (season === 2 && morning === 1) return {
    name: "The Summer Dreamer",
    tagline: "Midnight sun. Birch and water. Nowhere to be.",
    description: "A Finnish Lakeland summer with a private cottage on Saimaa, wood-fired sauna, foraging walks, and evenings that never quite turn to night. This is slow travel at its most complete.",
    tags: ["Lakeland", "Saimaa", "Midnight Sun", "Sauna", "Cottage"]
  };
  return {
    name: "The Quiet North Traveller",
    tagline: "Fewer places. Longer stays. Finland at the pace it deserves.",
    description: "You are not here to tick boxes. You want to actually feel a place, to know a city's rhythms, to sit with a landscape long enough for it to give something back. We build journeys for exactly this kind of traveller.",
    tags: ["Slow Travel", "Depth", "Unhurried", "Boutique", "Personal"]
  };
};
function Quiz() {
  const [step, setStep] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState([]);
  const [done, setDone] = reactExports.useState(false);
  const selected = answers[step];
  const choose = (i) => {
    const a = [...answers];
    a[step] = i;
    setAnswers(a);
    setTimeout(() => {
      if (step < QUIZ.length - 1) setStep(step + 1);
      else setDone(true);
    }, 220);
  };
  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };
  const profile = getProfile(answers);
  const handleBookCall = async () => {
    await fetch("https://formspree.io/f/xwvjjlpd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        profile_name: profile.name,
        profile_tagline: profile.tagline,
        answer_morning: QUIZ[0].options[answers[0]]?.title ?? "",
        answer_motivation: QUIZ[1].options[answers[1]]?.title ?? "",
        answer_companions: QUIZ[2].options[answers[2]]?.title ?? "",
        answer_season: QUIZ[3].options[answers[3]]?.title ?? "",
        source: "quiz"
      })
    });
    const notes = `Profile: ${profile.name} | Morning: ${QUIZ[0].options[answers[0]]?.title} | Travel for: ${QUIZ[1].options[answers[1]]?.title} | With: ${QUIZ[2].options[answers[2]]?.title} | Season: ${QUIZ[3].options[answers[3]]?.title}`;
    const calendlyUrl = `https://calendly.com/jemma-ursa?a1=${encodeURIComponent(notes)}`;
    window.location.href = calendlyUrl;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "quiz", className: "bg-paper py-20 md:py-28 border-t border-arctic/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "Your Finland Profile" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl text-navy", children: [
      "Four taps. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "One Finland." })
    ] }),
    !done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] tracking-[0.22em] uppercase text-navy/40 mb-6", children: [
        step + 1,
        " / ",
        QUIZ.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl text-navy", children: QUIZ[step].q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-4", children: QUIZ[step].options.map((o, i) => {
        const active = selected === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => choose(i), className: `h-48 flex flex-col items-center justify-center border bg-white-bright transition-all text-center ${active ? "border-navy border-2" : "border-arctic/60 hover:border-navy/60"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: o.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-navy", children: o.title })
        ] }, i);
      }) }),
      step > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep(step - 1), className: "mt-8 text-[11px] tracking-[0.22em] uppercase text-navy/50 hover:text-navy", children: "← Back" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 border border-arctic/60 p-10 md:p-14 bg-white-bright", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "Your Profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl text-navy", children: profile.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gold italic font-display text-lg", children: profile.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-navy/70 leading-relaxed", children: profile.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: profile.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border border-arctic/60 text-navy/60 px-3 py-1 text-[11px] tracking-[0.15em] uppercase", children: tag }, tag)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleBookCall, className: "bg-navy text-white-bright px-7 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-gold hover:text-navy transition-colors", children: "Book Your Finland Call" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "px-7 py-3 text-[11px] tracking-[0.22em] uppercase text-navy/60 hover:text-navy", children: "Start over" })
      ] })
    ] })
  ] }) });
}
function Feature() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] min-h-[480px] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: helsinkiDusk, alt: "Finnish lakeland at twilight", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-start justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", style: {
      paddingTop: "12%"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#A08C4A] text-[13px] tracking-[0.3em] uppercase mb-5", children: "A single promise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-white-bright text-3xl md:text-5xl leading-[1.15]", children: '"Nobody else gets this trip."' })
    ] }) })
  ] });
}
function Waitlist() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "waitlist", className: "bg-paper py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-5", children: "Early Access" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl text-navy", children: [
      "Your ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Finland" }),
      " is waiting"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-navy/75 text-lg leading-relaxed max-w-md mx-auto", children: [
      "We are opening our first journeys to a select group of travellers.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "A Finland specialist will be in touch within 48 hours."
    ] }),
    !sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center", onSubmit: async (e) => {
      e.preventDefault();
      const form = e.target;
      const response = await fetch("https://formspree.io/f/mrevvpgn", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });
      if (response.ok) {
        setSent(true);
      }
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", name: "email", required: true, placeholder: "you@email.com", className: "w-full max-w-sm flex-[2] min-w-0 bg-white-bright border border-arctic/60 px-4 py-3.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-navy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-navy text-white-bright px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-gold hover:text-navy transition-colors", children: "Request Access" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-navy font-display italic text-xl", children: "Thank you. We'll be in touch within 48 hours. ✦" })
  ] }) }) });
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
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Places, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Method, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Quiz, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Waitlist, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Footer,
  Nav,
  Landing as component
};
