import { Link, useRouterState } from "@tanstack/react-router";

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur border-b border-arctic/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex flex-col items-center leading-none text-navy"
          onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="font-display font-normal uppercase tracking-widest text-3xl leading-none">URSA</span>
          <span className="font-display italic lowercase text-sm tracking-[0.25em] text-navy/70 leading-none">travel</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[15px] tracking-[0.24em] uppercase text-navy">
          <a href="/#places" className="hover:text-navy">Places</a>
          <a href="/#how" className="hover:text-navy">Method</a>
          <a href="/#quiz" className="hover:text-navy">Your Profile</a>
        </div>
        <a
          href="/#waitlist"
          className="text-[15px] tracking-[0.24em] uppercase text-navy border-b border-gold pb-0.5 hover:text-gold"
        >
          Request Access
        </a>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-arctic/70 py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase">
        <Link to="/" className="inline-flex flex-col items-center leading-none text-2xl text-white-bright">
          <span className="font-display font-normal uppercase tracking-widest leading-none">URSA</span>
          <span className="font-display italic lowercase text-[0.48em] tracking-[0.25em] text-white-bright/70 leading-none">travel</span>
        </Link>
        <div className="flex flex-col items-center text-center">
          <span>© 2026 Ursa Travel</span>
          <span>Espoo, Finland · Serving travellers from across the United States.</span>
        </div>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-gold">Privacy</Link>
          <a href="#" className="hover:text-gold">Contact</a>
        </div>
      </div>
    </footer>
  );
}
