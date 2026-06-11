import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/ursa-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ursa — Luxury Finland Journeys for Discerning Travellers" },
      { name: "description", content: "Ursa crafts deeply personal journeys through Finland — shaped by your taste, paced for your freedom, confirmed by specialists who know Finland like their own backyard." },
      { property: "og:title", content: "Ursa — Luxury Finland Journeys for Discerning Travellers" },
      { property: "og:description", content: "Ursa crafts deeply personal journeys through Finland — shaped by your taste, paced for your freedom, confirmed by specialists who know Finland like their own backyard." },
      { property: "og:url", content: "/" },
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

/* ---------- shared bits ---------- */

function GoldStar({ className = "" }: { className?: string }) {
  return <span className={`text-gold ${className}`}>✦</span>;
}

function Divider() {
  return <span className="inline-block w-px h-3 bg-arctic/60 mx-3 align-middle" />;
}

/* ---------- 1. NAV ---------- */
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-navy text-white-bright">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-xl tracking-wider">URSA</span>
          <span className="w-px h-4 bg-white-bright/30" />
          <span className="text-gold text-[10px] tracking-[0.22em] uppercase">Finland Journeys</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.18em] uppercase text-white-bright/80">
          <a href="#how" className="hover:text-gold transition-colors">How It Works</a>
          <a href="#destinations" className="hover:text-gold transition-colors">Destinations</a>
          <a href="#quiz" className="hover:text-gold transition-colors">Find Your Journey</a>
          <a href="#journey" className="hover:text-gold transition-colors">Itineraries</a>
        </div>
        <a href="#waitlist" className="bg-gold text-navy px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-[400] hover:bg-gold/90 transition-colors">
          Request Access
        </a>
      </div>
    </nav>
  );
}

/* ---------- 2. HERO ---------- */
function Hero() {
  return (
    <section id="top" className="pt-16 min-h-screen grid md:grid-cols-2">
      {/* LEFT */}
      <div className="bg-paper flex flex-col">
        <div className="border-b border-arctic/50 px-8 md:px-14 py-3 flex justify-between text-[10px] tracking-[0.22em] uppercase text-gold">
          <span>Ursa Travel — Est. 2026</span>
          <span>Finland · Only Finland</span>
        </div>
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-navy">
            The north,<br />exactly as you{" "}
            <em className="font-display italic text-gold">imagined it.</em>
          </h1>
          <p className="mt-8 max-w-xl text-navy/75 font-[300] text-lg leading-relaxed">
            Ursa builds deeply personal journeys through Finland — shaped by your taste, paced for your freedom, confirmed by specialists who know Finland like their own backyard.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <a href="#quiz" className="bg-navy text-white-bright px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-navy/90 transition-colors">
              Find Your Journey
            </a>
            <a href="#how" className="text-navy/60 text-[12px] tracking-[0.18em] uppercase hover:text-heritage transition-colors">
              How It Works →
            </a>
          </div>
        </div>
        <div className="border-t border-arctic/50 px-8 md:px-14 py-5 flex flex-wrap items-center text-[10px] tracking-[0.22em] uppercase text-navy/70">
          <span><span className="text-gold">AI</span> · Powered curation</span>
          <Divider />
          <span><span className="text-gold">Finland</span> · Only destination</span>
          <Divider />
          <span><span className="text-gold">0</span> · Hidden fees</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="grid grid-rows-2 min-h-[60vh] md:min-h-full">
        <div className="relative" style={{ background: "linear-gradient(135deg, #1E2235 0%, #2a3a55 50%, #5B8FB5 100%)" }}>
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: "radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 60% 70%, #fff, transparent), radial-gradient(1.5px 1.5px at 80% 20%, #fff, transparent), radial-gradient(1px 1px at 40% 80%, #fff, transparent), radial-gradient(1px 1px at 90% 50%, #fff, transparent)",
          }} />
          <div className="absolute bottom-5 left-6 text-white-bright/90 text-[10px] tracking-[0.22em] uppercase">
            Finnish Lapland — Winter
          </div>
        </div>
        <div className="relative" style={{ background: "linear-gradient(135deg, #1E2235 0%, #4a6680 60%, #B8C4CE 100%)" }}>
          <div className="absolute bottom-5 left-6 text-white-bright/90 text-[10px] tracking-[0.22em] uppercase">
            Helsinki — Summer
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. TICKER ---------- */
function Ticker() {
  const items = [
    "Finnish Lapland", "Glass Igloos", "Northern Lights", "Helsinki",
    "Lakeland Saimaa", "Turku Archipelago", "Slow Travel", "Sámi Culture",
    "Midnight Sun", "Finnish Sauna", "Ruska Autumn", "Aurora Season",
  ];
  const row = (
    <div className="flex shrink-0 items-center gap-8 px-4 text-arctic text-[11px] tracking-[0.25em] uppercase">
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-8">
          <span>{t}</span>
          <GoldStar />
        </span>
      ))}
    </div>
  );
  return (
    <div className="bg-navy border-y border-white-bright/5 py-4 overflow-hidden">
      <div className="flex w-max animate-ticker">
        {row}{row}
      </div>
    </div>
  );
}

/* ---------- 4. HOW IT WORKS ---------- */
function HowItWorks() {
  const [open, setOpen] = useState(0);
  const steps = [
    { num: "i.", title: "Tell us your taste", body: "Your answers to five simple questions — about pace, companions, mood and season — are mapped by our AI to a Finland journey built around you." },
    { num: "ii.", title: "AI builds your blueprint", body: "Our model draws on real-time Finland travel data to surface what is genuinely special right now — not last season's tourist circuit." },
    { num: "iii.", title: "A specialist refines it", body: "A Finland travel expert reviews your journey personally, adding local knowledge, seasonal nuance, and the kind of detail no algorithm finds." },
    { num: "iv.", title: "You travel, we handle everything", body: "Every hotel, transfer and experience is pre-arranged. Inclusive pricing. No surprises. All you bring is your curiosity." },
  ];
  return (
    <section id="how" className="bg-paper py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid md:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <div className="eyebrow mb-6">The Ursa Method</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-navy">
            Four steps to your<br />
            <em className="italic">perfect north</em>
          </h2>

          <div className="mt-12 border-t border-arctic/60">
            {steps.map((s, i) => {
              const active = open === i;
              return (
                <div key={i} className="border-b border-arctic/60">
                  <button
                    onClick={() => setOpen(active ? -1 : i)}
                    className="w-full flex items-baseline gap-6 py-6 text-left"
                  >
                    <span className={`font-display italic text-2xl w-10 transition-colors ${active ? "text-gold" : "text-navy/40"}`}>
                      {s.num}
                    </span>
                    <span className="font-display text-xl md:text-2xl text-navy flex-1">{s.title}</span>
                    <span className={`text-gold text-xl transition-transform ${active ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-all ${active ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="pl-16 pr-8 text-navy/70 leading-relaxed max-w-xl">{s.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-navy text-white-bright p-8 md:p-10 self-start">
          <div className="text-gold text-[10px] tracking-[0.22em] uppercase mb-8">Live preview</div>
          <div className="space-y-6">
            <div className="border-t border-white-bright/15 pt-5">
              <div className="text-[10px] tracking-[0.22em] uppercase text-arctic mb-2">Your profile</div>
              <div className="font-display text-xl">Unhurried · Wellness · Cultural depth</div>
            </div>
            <div className="border-t border-white-bright/15 pt-5">
              <div className="text-[10px] tracking-[0.22em] uppercase text-arctic mb-2">Trending Finland 2026</div>
              <div className="font-display text-xl">Kelo-glass igloos · Forest spas · Island archipelago</div>
            </div>
            <div className="border-t border-white-bright/15 pt-5">
              <div className="flex flex-wrap gap-2">
                {["Slow travel", "Boutique hotels", "Private guide", "Aurora season"].map(t => (
                  <span key={t} className="border border-gold/60 text-gold text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-[2px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-white-bright/15 pt-5">
              <div className="text-[10px] tracking-[0.22em] uppercase text-arctic mb-2">Your journey · 10 days</div>
              <div className="font-display text-lg leading-snug">
                Helsinki <span className="text-gold">→</span> Archipelago <span className="text-gold">→</span> Lakeland <span className="text-gold">→</span> Lapland
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. QUIZ ---------- */
type QOption = { emoji: string; title: string; desc: string };
const QUIZ: { q: string; options: QOption[] }[] = [
  {
    q: "What does your ideal morning in Finland look like?",
    options: [
      { emoji: "❄️", title: "Aurora at dawn", desc: "Fading aurora from a glass igloo." },
      { emoji: "🌲", title: "Forest silence", desc: "Birch quiet and a long lakeside sauna." },
      { emoji: "☕", title: "Café morning", desc: "A perfect slow morning in Helsinki." },
      { emoji: "⛴", title: "Slow ferry", desc: "Winding through archipelago islands." },
    ],
  },
  {
    q: "What matters most when you travel?",
    options: [
      { emoji: "🪵", title: "Depth, not breadth", desc: "Going deep in one place, not wide across many." },
      { emoji: "📖", title: "Culture & cuisine", desc: "History and food that teaches you something." },
      { emoji: "🛎", title: "Exceptional comfort", desc: "Thoughtful service and refined ease." },
      { emoji: "✨", title: "Quiet discovery", desc: "Moments you could not have planned." },
    ],
  },
  {
    q: "How do you like to move through a place?",
    options: [
      { emoji: "🕰", title: "Unhurried", desc: "Three days in one place. Linger." },
      { emoji: "🗝", title: "Seamless", desc: "Pre-arranged. No decisions required." },
      { emoji: "🗺", title: "Structured & free", desc: "A plan with room to wander." },
      { emoji: "🧭", title: "Guided locally", desc: "A trusted local expert throughout." },
    ],
  },
  {
    q: "Who is joining you?",
    options: [
      { emoji: "💞", title: "My partner", desc: "A trip we will talk about for years." },
      { emoji: "👨‍👩‍👧", title: "Family or friends", desc: "A shared, gentle adventure." },
      { emoji: "🚶", title: "Travelling solo", desc: "My own pace, my own curiosity." },
      { emoji: "👥", title: "Small group", desc: "Like-minded travellers, quietly." },
    ],
  },
  {
    q: "When should Finland receive you?",
    options: [
      { emoji: "🌌", title: "Winter", desc: "Dec–Feb. Aurora, glass igloos, silence." },
      { emoji: "🌱", title: "Spring", desc: "Mar–May. Thaw, returning light, wildflowers." },
      { emoji: "🌞", title: "Summer", desc: "Jun–Aug. Midnight sun and lake islands." },
      { emoji: "🍂", title: "Autumn", desc: "Sep–Nov. Ruska colours, first aurora." },
    ],
  },
];

function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const selected = answers[step];

  const next = () => {
    if (step < QUIZ.length - 1) setStep(step + 1);
    else setDone(true);
  };
  const back = () => {
    if (done) { setDone(false); return; }
    if (step > 0) setStep(step - 1);
  };
  const choose = (i: number) => {
    const a = [...answers]; a[step] = i; setAnswers(a);
  };
  const reset = () => { setStep(0); setAnswers([]); setDone(false); };

  const progress = done ? 100 : ((step) / QUIZ.length) * 100;

  return (
    <section id="quiz" className="bg-paper py-28 md:py-36 border-t border-arctic/40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <div className="eyebrow mb-5">Your Finland Profile</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy">
            What kind of <em className="italic">Finland</em> calls to you?
          </h2>
          <p className="mt-5 text-navy/70 max-w-xl mx-auto">
            Five questions. No login. A Finland specialist refines your result personally.
          </p>
        </div>

        <div className="mt-14">
          <div className="h-px bg-arctic/60 relative">
            <div className="absolute left-0 top-0 h-px bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-3 flex justify-between text-[10px] tracking-[0.22em] uppercase text-navy/50">
            <span>Question {done ? QUIZ.length : step + 1} of {QUIZ.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {!done ? (
          <div className="mt-12">
            <h3 className="font-display text-2xl md:text-3xl text-navy text-center">
              {QUIZ[step].q}
            </h3>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {QUIZ[step].options.map((o, i) => {
                const active = selected === i;
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    className={`text-left p-6 border bg-paper transition-colors ${active ? "border-heritage border-2" : "border-arctic/70 hover:border-heritage/60"}`}
                  >
                    <div className="text-2xl mb-3">{o.emoji}</div>
                    <div className="font-display text-lg text-navy">{o.title}</div>
                    <div className="text-navy/65 text-sm mt-1 leading-relaxed">{o.desc}</div>
                  </button>
                );
              })}
            </div>
            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={back}
                disabled={step === 0}
                className="text-[11px] tracking-[0.22em] uppercase text-navy/60 hover:text-navy disabled:opacity-30"
              >
                ← Back
              </button>
              <button
                onClick={next}
                disabled={selected === undefined}
                className="bg-navy text-white-bright px-7 py-3 text-[11px] tracking-[0.22em] uppercase disabled:opacity-30 hover:bg-navy/90 transition-colors"
              >
                {step === QUIZ.length - 1 ? "See My Profile" : "Continue"}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-12 border border-arctic/60 p-10 md:p-14 text-center bg-white-bright">
            <div className="eyebrow mb-4">Your Profile</div>
            <h3 className="font-display text-3xl md:text-4xl text-navy">
              The <em className="italic">Quiet North</em> traveller
            </h3>
            <p className="mt-5 text-navy/70 max-w-xl mx-auto leading-relaxed">
              You travel for depth, not distance. A Finland journey for you means fewer places, longer stays, and the kind of stillness that returns you home rested. Our specialist will design a 10–14 day route built around your taste.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {["Slow travel", "Cultural depth", "Boutique stays", "Aurora season", "Private guide"].map(t => (
                <span key={t} className="border border-arctic text-navy/70 text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-[2px]">{t}</span>
              ))}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#waitlist" className="bg-gold text-navy px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-gold/90 transition-colors">
                Get My Personalised Itinerary
              </a>
              <button onClick={reset} className="text-[11px] tracking-[0.22em] uppercase text-navy/60 hover:text-navy">
                Retake the quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- 6. DESTINATIONS ---------- */
function Destinations() {
  const card = (label: string, name: string, grad: string, extra = "") => (
    <div className={`relative overflow-hidden ${extra}`} style={{ background: grad, minHeight: 280 }}>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(1px 1px at 30% 40%, #fff, transparent), radial-gradient(1px 1px at 70% 20%, #fff, transparent), radial-gradient(1.5px 1.5px at 50% 70%, #fff, transparent)",
      }} />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="text-gold text-[10px] tracking-[0.22em] uppercase mb-2">{label}</div>
        <div className="font-display text-2xl md:text-3xl text-white-bright">{name}</div>
      </div>
    </div>
  );
  return (
    <section id="destinations" className="bg-white-bright py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-2 gap-10 mb-14 items-end">
          <div>
            <div className="eyebrow mb-5">Finland, in every season</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy">
              Four destinations.<br />
              <em className="italic text-gold">One country.</em>
            </h2>
          </div>
          <p className="text-navy/70 leading-relaxed max-w-md md:justify-self-end">
            From Helsinki's design-forward streets to Lapland's absolute silence — every corner of Finland holds a different story. Ursa knows them all intimately.
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-rows-2 gap-3" style={{ minHeight: 600 }}>
          <div className="md:row-span-2">
            {card("Far North", "Finnish Lapland",
              "linear-gradient(160deg, #1E2235 0%, #2a3a55 50%, #5B8FB5 100%)",
              "h-full")}
          </div>
          {card("Capital", "Helsinki", "linear-gradient(140deg, #1E2235 0%, #3d556e 100%)")}
          {card("Coast", "Turku Archipelago", "linear-gradient(140deg, #1E2235 0%, #4a7090 100%)")}
          {card("Lakes", "Finnish Lakeland", "linear-gradient(140deg, #1E2235 0%, #2d4a60 70%, #5B8FB5 100%)")}
          {card("Across Finland", "The Full Journey", "linear-gradient(140deg, #1E2235 0%, #5B8FB5 100%)")}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. SAMPLE JOURNEY ---------- */
type JourneyCard = { days: string; name: string; items: string[] };
const SEASONS: Record<string, { totalDays: string; cards: [JourneyCard, JourneyCard]; note: string }> = {
  Spring: {
    totalDays: "10 days",
    cards: [
      { days: "Days 1–4", name: "Helsinki", items: [
        "Private Design District morning walk",
        "Löyly waterfront sauna at sunset",
        "Day trip to medieval Porvoo",
        "Food market and harbour mornings",
      ]},
      { days: "Days 5–10", name: "Turku & Archipelago", items: [
        "Turku castle and cathedral at your own pace",
        "Overnight ferry into the archipelago",
        "Private island stay, Naantali and Åland",
        "Cycling through coastal island villages",
      ]},
    ],
    note: "The city exhales into the sea.",
  },
  Summer: {
    totalDays: "14 days",
    cards: [
      { days: "Days 1–6", name: "Turku Archipelago", items: [
        "Island hopping by ferry",
        "Naantali old town and harbour",
        "Local fish lunch at a coastal village",
        "Quiet cycling, no agenda",
      ]},
      { days: "Days 7–14", name: "Finnish Lakeland", items: [
        "Private cottage on Lake Saimaa",
        "Wood-fired sauna and star watching",
        "Foraging walk with a local chef",
        "Savonlinna Opera Festival evening in July",
        "Sunset kayaking through birch islands",
      ]},
    ],
    note: "Midnight sun. Birch and water. Nowhere to be.",
  },
  Autumn: {
    totalDays: "12 days",
    cards: [
      { days: "Days 1–4", name: "Helsinki", items: [
        "Ruska walks in Central Park",
        "Design museums and warm café mornings",
        "Temppeliaukio rock church",
        "Long dinner at a neighbourhood restaurant",
      ]},
      { days: "Days 5–12", name: "Lapland", items: [
        "First aurora of the season",
        "Reindeer farm and Sámi cultural experience",
        "Forest hikes in peak ruska colour",
        "Glass igloo under the northern lights",
        "Unhurried mornings in the wilderness",
      ]},
    ],
    note: "Finland at its most honest. The light is extraordinary.",
  },
  Winter: {
    totalDays: "10 days",
    cards: [
      { days: "Days 1–3", name: "Helsinki", items: [
        "Dark city beauty and Christmas market",
        "Finnish sauna culture, Allas Sea Pool",
        "Design and architecture at a slow pace",
      ]},
      { days: "Days 4–10", name: "Lapland", items: [
        "Glass igloo, northern lights every night",
        "Sámi cultural experience with a local family",
        "Snowshoe hike through old-growth forest",
        "Husky safari at dusk",
        "Total silence and total darkness",
      ]},
    ],
    note: "The world you always imagined.",
  },
};

function SampleJourney() {
  const [season, setSeason] = useState<keyof typeof SEASONS>("Winter");
  const data = SEASONS[season];
  return (
    <section id="journey" className="bg-paper py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div>
            <div className="eyebrow mb-5">A Sample Journey</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy">
              Finland, at <em className="italic">your pace</em>
            </h2>
          </div>
          <p className="text-navy/70 leading-relaxed max-w-md md:justify-self-end">
            Every Ursa journey is built around one person — you. Here are four ways Finland might welcome you, depending on when you arrive.
          </p>
        </div>

        <div className="mt-14 border-b border-arctic/60 flex gap-2 md:gap-10">
          {(Object.keys(SEASONS) as (keyof typeof SEASONS)[]).map(s => {
            const active = s === season;
            return (
              <button
                key={s}
                onClick={() => setSeason(s)}
                className={`pb-4 px-2 text-[11px] tracking-[0.22em] uppercase border-b-2 -mb-px transition-colors ${active ? "border-gold text-navy" : "border-transparent text-arctic hover:text-navy/60"}`}
              >
                {s}
              </button>
            );
          })}
          <span className="ml-auto pb-4 text-[10px] tracking-[0.22em] uppercase text-navy/50 self-end">{data.totalDays}</span>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {data.cards.map((c, i) => (
            <div key={i} className="bg-white-bright border border-arctic/50">
              <div className="p-6" style={{ background: "linear-gradient(135deg, #1E2235 0%, #5B8FB5 140%)" }}>
                <div className="flex items-center justify-between">
                  <span className="text-gold text-[10px] tracking-[0.22em] uppercase border border-gold/60 px-3 py-1 rounded-[2px]">{c.days}</span>
                </div>
                <div className="font-display text-2xl md:text-3xl text-white-bright mt-4">{c.name}</div>
              </div>
              <div className="p-7">
                <div className="h-px bg-arctic/60 mb-5" />
                <ul className="space-y-3 text-navy/80">
                  {c.items.map((it, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed">
                      <span className="text-gold mt-1.5">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 italic text-navy/50 text-sm">{data.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. WHO FOR ---------- */
function WhoFor() {
  const cards = [
    { title: "The journey you have earned", body: "For couples who have done Western Europe and want something that feels more personal, more meaningful, and more unhurried. Finland rewards those who take their time." },
    { title: "The gift of a lifetime", body: "Planning a milestone for someone you love — a 70th birthday, a 50th anniversary, a trip before life gets complicated again. We handle everything. You give them Finland." },
    { title: "Coming home to Finland", body: "For Finnish-Americans whose family roots go back to these forests and lakes. This is not just a holiday. Ursa will help you find the places your family came from." },
  ];
  return (
    <section className="bg-white-bright py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow mb-5">Made for You</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy">
            Travel that knows the difference.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-paper border border-arctic/60 p-10">
              <div className="text-gold text-[10px] tracking-[0.22em] uppercase mb-5">0{i + 1}</div>
              <h3 className="font-display italic text-2xl text-navy leading-snug">{c.title}</h3>
              <p className="mt-5 text-navy/70 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. WHY URSA ---------- */
function WhyUrsa() {
  const features = [
    { t: "AI that reads taste, not just data", d: "Our model maps your preferences to Finland experiences with the nuance of a specialist, not the bluntness of a search engine." },
    { t: "Human experts, always", d: "Every itinerary is reviewed by a Finland travel specialist before it reaches you. AI plans. Humans confirm." },
    { t: "Paced for depth, not distance", d: "Rest days built in. Fewer places, longer stays. A trip that returns you home feeling rested, not recovered." },
    { t: "Total transparency", d: "Full itinerary before you book. Inclusive pricing. Accessibility considered from the first question." },
  ];
  const icons = ["✦", "⊹", "◐", "◇"];
  return (
    <section className="bg-navy text-white-bright py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid md:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <div className="eyebrow mb-5">Why Ursa</div>
          <h2 className="font-display text-4xl md:text-5xl">
            Not an app.<br />
            <em className="italic text-arctic">A navigator.</em>
          </h2>
          <div className="h-px bg-gold w-24 my-8" />
          <p className="text-arctic leading-relaxed max-w-md">
            Built for travellers who measure a trip not by how much they saw, but by how completely they were present for it.
          </p>

          <div className="mt-12 space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-12 h-12 border border-gold/60 flex items-center justify-center text-gold shrink-0">
                  {icons[i]}
                </div>
                <div>
                  <div className="font-display text-lg text-white-bright">{f.t}</div>
                  <p className="text-arctic/80 mt-2 leading-relaxed">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:pl-10 flex flex-col justify-center">
          <div className="text-gold text-5xl font-display leading-none mb-6">"</div>
          <blockquote className="font-display italic text-3xl md:text-4xl leading-snug text-white-bright">
            The north doesn't reveal itself to those who hurry. It opens — slowly, completely — to those who came ready to listen.
          </blockquote>
          <div className="mt-8 text-arctic text-[11px] tracking-[0.22em] uppercase">— The Ursa Philosophy</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. WAITLIST ---------- */
function Waitlist() {
  const [sent, setSent] = useState(false);
  return (
    <section id="waitlist" className="bg-paper py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="eyebrow mb-5">Early Access</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy">
            Your <em className="italic" style={{ color: "var(--heritage)" }}>Finland</em> is waiting
          </h2>
          <p className="mt-6 text-navy/75 leading-relaxed max-w-md">
            We are opening our first journeys to a select group of travellers. Leave your details — a Finland specialist will be in touch within 48 hours.
          </p>

          <form className="mt-10 space-y-4 max-w-md" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input
              required
              placeholder="Your name"
              className="w-full bg-transparent border-b border-arctic focus:border-navy outline-none py-3 text-navy placeholder:text-navy/40"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border-b border-arctic focus:border-navy outline-none py-3 text-navy placeholder:text-navy/40"
            />
            <button className="mt-4 bg-navy text-white-bright px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-navy/90 transition-colors">
              {sent ? "Thank you — we'll be in touch" : "Join the Waitlist"}
            </button>
          </form>
          <p className="mt-5 text-navy/55 text-sm">No spam. No pressure. A personal note from our team.</p>
          <div className="mt-10 flex items-center gap-4">
            <span className="w-12 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-navy/60">Presenting at Slush 2026 · Helsinki</span>
          </div>
        </div>

        <div className="bg-navy text-white-bright p-10 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
            backgroundImage: "radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1.5px 1.5px at 80% 60%, #fff, transparent), radial-gradient(1px 1px at 50% 80%, #fff, transparent), radial-gradient(1px 1px at 70% 20%, #fff, transparent)",
          }} />
          <div className="relative">
            <div className="flex items-center justify-between text-gold text-[10px] tracking-[0.22em] uppercase">
              <span>Ursa · Finland Journey 2026</span>
              <GoldStar />
            </div>
            <div className="h-px bg-white-bright/15 my-6" />
            <h3 className="font-display italic text-3xl md:text-4xl leading-tight">
              Ten days through Finland
            </h3>
            <p className="mt-4 text-arctic">Helsinki — Archipelago — Lakeland — Lapland</p>

            <div className="my-10 flex items-baseline gap-5">
              <div className="font-display text-7xl md:text-8xl text-white-bright leading-none">10</div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-arctic">Days curated</div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-arctic">for you</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Glass Igloo", "Aurora", "Private Guide", "Slow Travel", "Sauna", "Archipelago"].map(t => (
                <span key={t} className="border border-gold/60 text-gold text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-[2px]">{t}</span>
              ))}
            </div>

            <div className="h-px bg-white-bright/15 my-8" />
            <img src={logoAsset.url} alt="Ursa polar bear logo" className="w-20 h-20 mx-auto opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 11. FOOTER ---------- */
function Footer() {
  const cols = [
    { h: "Destinations", links: ["Finnish Lapland", "Helsinki", "Turku Archipelago", "Finnish Lakeland", "Lapland in Autumn"] },
    { h: "Ursa", links: ["How It Works", "Find Your Journey", "Sample Itineraries", "Nordic Journal"] },
    { h: "Company", links: ["Our Story", "For Investors", "Press", "Contact"] },
    { h: "Legal", links: ["Privacy Policy", "Booking Terms", "Accessibility"] },
  ];
  return (
    <footer className="bg-navy text-white-bright border-t" style={{ borderColor: "rgba(184,196,206,0.1)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-20 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-wider">URSA</div>
          <div className="text-gold text-[10px] tracking-[0.22em] uppercase mt-1">Finland Journeys</div>
          <p className="mt-5 text-arctic/80 max-w-xs leading-relaxed text-sm">
            Personalised luxury travel through Finland. AI-matched. Human-confirmed.
          </p>
          <img src={logoAsset.url} alt="" className="mt-6 w-16 h-16 opacity-70" />
        </div>
        {cols.map((c, i) => (
          <div key={i}>
            <div className="text-gold text-[10px] tracking-[0.22em] uppercase mb-5">{c.h}</div>
            <ul className="space-y-3">
              {c.links.map(l => (
                <li key={l}>
                  <a href="#" className="text-arctic/80 hover:text-white-bright transition-colors text-sm">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t" style={{ borderColor: "rgba(184,196,206,0.1)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-6 flex flex-col md:flex-row justify-between gap-3 text-[10px] tracking-[0.22em] uppercase text-arctic/60">
          <span>© 2026 Ursa Travel — All rights reserved</span>
          <span>Helsinki · San Francisco</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- PAGE ---------- */
function Landing() {
  return (
    <main className="bg-paper text-navy">
      <Nav />
      <Hero />
      <Ticker />
      <HowItWorks />
      <Quiz />
      <Destinations />
      <SampleJourney />
      <WhoFor />
      <WhyUrsa />
      <Waitlist />
      <Footer />
    </main>
  );
}
