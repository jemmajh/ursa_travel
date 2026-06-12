import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAurora from "@/assets/hero-aurora.jpg";
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
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center leading-none">
          <span className="font-display text-2xl tracking-wider text-navy leading-none">URSA</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase text-navy/70">
          <a href="#places" className="hover:text-navy">Places</a>
          <a href="#how" className="hover:text-navy">Method</a>
          <a href="#quiz" className="hover:text-navy">Your Profile</a>
        </div>
        <a href="#waitlist" className="text-[11px] tracking-[0.2em] uppercase text-navy border-b border-gold pb-0.5 hover:text-gold">
          Request Access
        </a>
      </div>
    </nav>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={heroAurora}
        alt="Aurora over Finnish Lapland"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/10 to-navy/70" />
      <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="text-gold text-[11px] tracking-[0.3em] uppercase mb-6">Finland · Only Finland</div>
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
                <div className="text-gold text-[10px] tracking-[0.25em] uppercase mb-1.5">{t.eyebrow}</div>
                <div className="font-display text-xl md:text-2xl leading-tight">{t.title}</div>
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
              <div className="text-gold font-display italic text-3xl mb-6">{s.n}</div>
              <div className="font-display text-2xl mb-3">{s.title}</div>
              <div className="text-arctic/90 text-sm leading-relaxed">{s.body}</div>
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
            <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4">
              {QUIZ[step].options.map((o, i) => {
                const active = selected === i;
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    className={`p-6 md:p-8 border bg-white-bright transition-all text-center ${active ? "border-navy border-2" : "border-arctic/60 hover:border-navy/60"}`}
                  >
                    <div className="text-3xl mb-3">{o.emoji}</div>
                    <div className="font-display text-lg text-navy">{o.title}</div>
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
              The <em className="italic">Quiet North</em> traveller
            </h3>
            <p className="mt-5 text-navy/70 leading-relaxed">
              Fewer places. Longer stays. We'll send your draft route within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#waitlist" className="bg-navy text-white-bright px-7 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-gold hover:text-navy transition-colors">
                Send Me My Draft
              </a>
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
      <img src={tileLakeland} alt="Finnish lakeland at twilight" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy/40" />
      <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center">
        <div className="max-w-xl">
          <div className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5">A single promise</div>
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
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="eyebrow mb-4">By invitation</div>
        <h2 className="font-display text-4xl md:text-5xl text-navy">
          Join the <em className="italic">first 100.</em>
        </h2>
        <p className="mt-5 text-navy/70 max-w-md mx-auto">
          Early travellers receive priority access for the 2027 aurora season.
        </p>
        {!sent ? (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 bg-white-bright border border-arctic/60 px-4 py-3.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-navy"
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
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-navy text-arctic/70 py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase">
        <div className="flex flex-col items-center gap-1">
          <span className="font-display text-lg tracking-wider text-white-bright">URSA</span>
          <span className="text-gold text-xs tracking-wider">Finland Journeys</span>
        </div>
        <div>© 2026 Ursa Travel · Finland, only Finland</div>
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
