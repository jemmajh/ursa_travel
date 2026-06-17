import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import heroAurora from "@/assets/hero-aurora.jpg";
import helsinkiDusk from "@/assets/helsinki-dusk.jpg";
import tileLakeland from "@/assets/tile-lakeland.jpg";
import tileHelsinki from "@/assets/tile-helsinki.jpg";
import tileArchipelago from "@/assets/tile-archipelago.jpg";
import tileIgloo from "@/assets/tile-igloo.jpg";
import tileSauna from "@/assets/tile-sauna.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ursa — Luxury Finland Journeys for Discerning Travellers" },
      { name: "description", content: "Ursa crafts deeply personal journeys through Finland — shaped by your taste, paced for your freedom, confirmed by specialists who know Finland like their own backyard." },
      { property: "og:title", content: "Ursa — Luxury Finland Journeys for Discerning Travellers" },
      { property: "og:description", content: "Ursa crafts deeply personal journeys through Finland — shaped by your taste, paced for your freedom, confirmed by specialists who know Finland like their own backyard." },
      { property: "og:image", content: heroAurora },
      { name: "twitter:image", content: heroAurora },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Ursa Travel",
        description: "AI-personalised luxury Finland journeys",
        areaServed: "Finland",
      }),
    }],
  }),
  component: Landing,
});

/* ---------- NAV ---------- */
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur border-b border-arctic/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="inline-flex flex-col items-center leading-none text-navy">
          <span className="font-display font-normal uppercase tracking-widest text-3xl leading-none">URSA</span>
          <span className="font-display italic lowercase text-sm tracking-[0.25em] text-navy/70 leading-none">travel</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[15px] tracking-[0.24em] uppercase text-navy">
          <a href="#places" className="hover:text-navy">Places</a>
          <a href="#how" className="hover:text-navy">Method</a>
          <a href="#quiz" className="hover:text-navy">Your Profile</a>
        </div>
        <a href="#waitlist" className="text-[15px] tracking-[0.24em] uppercase text-navy border-b border-gold pb-0.5 hover:text-gold">
          Request Access
        </a>
      </div>
    </nav>
  );
}

/* ---------- HERO ---------- */
const HERO_IMAGES = [
  { src: heroAurora, alt: "Aurora over Finnish Lapland" },
  { src: tileLakeland, alt: "Finnish lakeland in summer" },
];

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {HERO_IMAGES.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          width={1920}
          height={1080}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/10 to-navy/70" />
      <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="text-[#A08C4A] text-base font-medium tracking-[0.22em] uppercase mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">Finland · Only Finland</div>
        <h1 className="font-display text-white-bright text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl">
          The north,<br/><em className="italic font-display">your way.</em>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href="#quiz" className="bg-white-bright text-navy px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-gold transition-colors">
            Find Your Journey
          </a>
          <a href="#places" className="text-white-bright/90 text-[11px] tracking-[0.22em] uppercase border-b border-white-bright/40 pb-0.5">
            See Finland ↓
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === active ? "bg-white-bright" : "bg-white-bright/40"}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------- PLACES (TILES) ---------- */
type Tile = { img: string; eyebrow: string; title: string; tall?: boolean };
const TILES: Tile[] = [
  { img: tileIgloo, eyebrow: "Lapland", title: "Sleep under aurora", tall: true },
  { img: tileHelsinki, eyebrow: "Helsinki", title: "Design city" },
  { img: tileArchipelago, eyebrow: "Archipelago", title: "Islands by ferry" },
  { img: tileLakeland, eyebrow: "Saimaa", title: "Lake & cabin" },
  { img: tileSauna, eyebrow: "Ritual", title: "The Finnish sauna" },
];

function Places() {
  return (
    <section id="places" className="bg-paper py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <div className="eyebrow mb-3">A small country, deeply</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Your Finland, <em className="italic">personally.</em></h2>
          </div>
          <a href="#quiz" className="hidden md:inline text-[11px] tracking-[0.22em] uppercase text-navy/60 hover:text-navy">
            Build mine →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {TILES.map((t, i) => (
            <a
              key={i}
              href="#quiz"
              className={`group relative block overflow-hidden ${t.tall ? "row-span-2 h-full" : "aspect-square"}`}
            >
              <img
                src={t.img}
                alt={`${t.eyebrow} — ${t.title}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0" />
              <div className="absolute left-4 right-4 bottom-4 md:left-6 md:bottom-6 text-white-bright">
                <div className="text-white-bright text-[13px] tracking-[0.25em] uppercase mb-1.5">{t.eyebrow}</div>
                <div className="font-display text-2xl leading-tight">{t.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- METHOD ---------- */
function Method() {
  const steps = [
    { n: "01", title: "Tell us your taste", body: "Five questions. No login." },
    { n: "02", title: "AI drafts your route", body: "Real-time Finland, edited to you." },
    { n: "03", title: "Specialist confirms", body: "A Finland expert finishes by hand." },
  ];
  return (
    <section id="how" className="bg-navy text-white-bright py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="eyebrow mb-4">The Ursa Method</div>
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl">
          One country.<br/><em className="italic">Personal as a letter.</em>
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-white-bright/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-navy p-8 md:p-10">
              <div className="text-gold font-display italic text-5xl mb-6">{s.n}</div>
              <div className="font-display text-4xl mb-3">{s.title}</div>
              <div className="text-arctic/90 text-lg leading-relaxed">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- QUIZ ---------- */
type QOption = { emoji: string; title: string };
const QUIZ: { q: string; options: QOption[] }[] = [
  { q: "Pick a morning.", options: [
    { emoji: "❄️", title: "Aurora at dawn" },
    { emoji: "🌲", title: "Forest & sauna" },
    { emoji: "☕", title: "Helsinki café" },
    { emoji: "⛴", title: "Slow ferry" },
  ]},
  { q: "Travel for…", options: [
    { emoji: "🪵", title: "Depth" },
    { emoji: "📖", title: "Culture" },
    { emoji: "🛎", title: "Comfort" },
    { emoji: "✨", title: "Quiet discovery" },
  ]},
  { q: "With whom?", options: [
    { emoji: "💞", title: "Partner" },
    { emoji: "👨‍👩‍👧", title: "Family" },
    { emoji: "🚶", title: "Solo" },
    { emoji: "👥", title: "Small group" },
  ]},
  { q: "Which season?", options: [
    { emoji: "🌌", title: "Winter" },
    { emoji: "🌱", title: "Spring" },
    { emoji: "🌞", title: "Summer" },
    { emoji: "🍂", title: "Autumn" },
  ]},
];

const getProfile = (answers: number[]) => {
  const [morning, motivation, companions, season] = answers;

  if (season === 0 && morning === 0) return {
    name: "The Aurora Seeker",
    tagline: "You came for the lights. You'll stay for the silence.",
    description: "A Lapland winter journey built around the northern lights, with glass igloo nights, Sámi culture, and long still mornings in the wilderness. This is the Finland most people only dream about.",
    tags: ["Glass Igloo", "Northern Lights", "Lapland", "Winter", "Private Guide"],
  };

  if (companions === 1 && motivation === 1) return {
    name: "The Heritage Pilgrim",
    tagline: "For some travellers, Finland is not just a destination. It is a homecoming.",
    description: "A journey shaped around Finnish roots, the regions your family came from, the traditions that survived the journey to America, and the people who kept them alive. We'll help you find the places that matter.",
    tags: ["Heritage", "Family", "Culture", "Roots Journey", "Helsinki"],
  };

  if (season === 2 && (morning === 3 || motivation === 3)) return {
    name: "The Island Drifter",
    tagline: "No fixed agenda. Just water, islands, and time.",
    description: "A summer archipelago journey with overnight ferries, private island stays, harbour cafés, and the kind of afternoon where nobody asks what time it is. The Turku archipelago and Åland await.",
    tags: ["Archipelago", "Summer", "Midnight Sun", "Slow Travel", "Island Ferry"],
  };

  if (motivation === 1 && (season === 1 || season === 3)) return {
    name: "The Culture Wanderer",
    tagline: "You travel to understand, not just to see.",
    description: "Helsinki's design and architecture, the Savonlinna Opera Festival, ruska autumn walks. Finland has cultural depth that most visitors never find. We'll build you a journey with local guides who actually know it.",
    tags: ["Culture", "Helsinki", "Opera Festival", "Autumn", "Local Guides"],
  };

  if (motivation === 2) return {
    name: "The Considered Traveller",
    tagline: "Every detail handled. Every moment yours.",
    description: "You know what good travel feels like, and you know the difference between a hotel that is merely expensive and one that is genuinely right. We handle everything so you arrive relaxed and stay that way.",
    tags: ["Luxury", "Pre-arranged", "Boutique Hotels", "Private Transfers", "No Surprises"],
  };

  if (companions === 2) return {
    name: "The Independent North",
    tagline: "Your pace. Your Finland. Nobody else's itinerary.",
    description: "Solo travel in Finland is remarkable. The country is safe, English is universal, and Finns respect your space. We'll build you a journey with enough structure to feel secure and enough freedom to feel alive.",
    tags: ["Solo", "Freedom", "Safe", "Flexible", "Self-guided"],
  };

  if (season === 2 && morning === 1) return {
    name: "The Summer Dreamer",
    tagline: "Midnight sun. Birch and water. Nowhere to be.",
    description: "A Finnish Lakeland summer with a private cottage on Saimaa, wood-fired sauna, foraging walks, and evenings that never quite turn to night. This is slow travel at its most complete.",
    tags: ["Lakeland", "Saimaa", "Midnight Sun", "Sauna", "Cottage"],
  };

  return {
    name: "The Quiet North Traveller",
    tagline: "Fewer places. Longer stays. Finland at the pace it deserves.",
    description: "You are not here to tick boxes. You want to actually feel a place, to know a city's rhythms, to sit with a landscape long enough for it to give something back. We build journeys for exactly this kind of traveller.",
    tags: ["Slow Travel", "Depth", "Unhurried", "Boutique", "Personal"],
  };
};

function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const selected = answers[step];

  const choose = (i: number) => {
    const a = [...answers]; a[step] = i; setAnswers(a);
    setTimeout(() => {
      if (step < QUIZ.length - 1) setStep(step + 1);
      else setDone(true);
    }, 220);
  };
  const reset = () => { setStep(0); setAnswers([]); setDone(false); };
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
    })

    const notes = `Profile: ${profile.name} | Morning: ${QUIZ[0].options[answers[0]]?.title} | Travel for: ${QUIZ[1].options[answers[1]]?.title} | With: ${QUIZ[2].options[answers[2]]?.title} | Season: ${QUIZ[3].options[answers[3]]?.title}`

    const calendlyUrl = `https://calendly.com/jemma-ursa?a1=${encodeURIComponent(notes)}`

    window.open(calendlyUrl, "_blank")
  }

  return (
    <section id="quiz" className="bg-paper py-20 md:py-28 border-t border-arctic/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="eyebrow mb-4">Your Finland Profile</div>
        <h2 className="font-display text-4xl md:text-5xl text-navy">
          Four taps. <em className="italic">One Finland.</em>
        </h2>

        {!done ? (
          <div className="mt-14">
            <div className="text-[10px] tracking-[0.22em] uppercase text-navy/40 mb-6">
              {step + 1} / {QUIZ.length}
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-navy">{QUIZ[step].q}</h3>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {QUIZ[step].options.map((o, i) => {
                const active = selected === i;
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    className={`h-48 flex flex-col items-center justify-center border bg-white-bright transition-all text-center ${active ? "border-navy border-2" : "border-arctic/60 hover:border-navy/60"}`}
                  >
                    <div className="text-5xl mb-4">{o.emoji}</div>
                    <div className="font-display text-2xl text-navy">{o.title}</div>
                  </button>
                );
              })}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="mt-8 text-[11px] tracking-[0.22em] uppercase text-navy/50 hover:text-navy">
                ← Back
              </button>
            )}
          </div>
        ) : (
          <div className="mt-14 border border-arctic/60 p-10 md:p-14 bg-white-bright">
            <div className="eyebrow mb-4">Your Profile</div>
            <h3 className="font-display text-3xl md:text-4xl text-navy">
              {profile.name}
            </h3>
            <p className="mt-3 text-gold italic font-display text-lg">
              {profile.tagline}
            </p>
            <p className="mt-4 text-navy/70 leading-relaxed">
              {profile.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {profile.tags.map((tag) => (
                <span key={tag} className="border border-arctic/60 text-navy/60 px-3 py-1 text-[11px] tracking-[0.15em] uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={handleBookCall}
                className="bg-navy text-white-bright px-7 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-gold hover:text-navy transition-colors"
              >
                Book Your Finland Call
              </button>
              <button onClick={reset} className="px-7 py-3 text-[11px] tracking-[0.22em] uppercase text-navy/60 hover:text-navy">
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- FEATURE STRIP ---------- */
function Feature() {
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <img src={helsinkiDusk} alt="Finnish lakeland at twilight" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy/40" />
      <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-start justify-start">
        <div className="max-w-xl" style={{ paddingTop: '12%' }}>
          <div className="text-[#A08C4A] text-[13px] tracking-[0.3em] uppercase mb-5">A single promise</div>
          <p className="font-display italic text-white-bright text-3xl md:text-5xl leading-[1.15]">
            "Nobody else gets this trip."
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- WAITLIST ---------- */
function Waitlist() {
  const [sent, setSent] = useState(false);
  return (
    <section id="waitlist" className="bg-paper py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <div>
          <div className="eyebrow mb-5">Early Access</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy">
            Your <em className="italic">Finland</em> is waiting
          </h2>
          <p className="mt-6 text-navy/75 text-lg leading-relaxed max-w-md mx-auto">
            We are opening our first journeys to a select group of travellers.
            <br />
            A Finland specialist will be in touch within 48 hours.
          </p>

          {!sent ? (
            <form
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center"
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.target as HTMLFormElement
                const response = await fetch("https://formspree.io/f/mrevvpgn", {
                  method: "POST",
                  body: new FormData(form),
                  headers: { Accept: "application/json" }
                })
                if (response.ok) {
                  setSent(true)
                }
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="w-full max-w-sm flex-[2] min-w-0 bg-white-bright border border-arctic/60 px-4 py-3.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-navy"
              />
              <button className="bg-navy text-white-bright px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-gold hover:text-navy transition-colors">
                Request Access
              </button>
            </form>
          ) : (
            <div className="mt-10 text-navy font-display italic text-xl">
              Thank you. We'll be in touch within 48 hours. ✦
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-navy text-arctic/70 py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase">
        <div className="inline-flex flex-col items-center leading-none text-2xl text-white-bright">
          <span className="font-display font-normal uppercase tracking-widest leading-none">URSA</span>
          <span className="font-display italic lowercase text-[0.48em] tracking-[0.25em] text-white-bright/70 leading-none">travel</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span>© 2026 Ursa Travel</span>
          <span>Espoo, Finland · Serving travellers from across the United States.</span>
        </div>
        <div className="flex gap-6"><a href="#" className="hover:text-gold">Privacy</a><a href="#" className="hover:text-gold">Contact</a></div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main>
      <Nav />
      <Hero />
      <Places />
      <Method />
      <Quiz />
      <Feature />
      <Waitlist />
      <Footer />
    </main>
  );
}
