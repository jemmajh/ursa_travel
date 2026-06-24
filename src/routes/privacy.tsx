import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-chrome";
import { PrivacyPolicyBody } from "./privacy-policy-body";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ursa Travel" },
      { name: "description", content: "Privacy Policy for Ursa Travel LLC." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-paper pt-20">
        <div className="max-w-[860px] mx-auto px-6 py-20">
          <div className="eyebrow">Legal</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy mt-4">Privacy Policy</h1>
          <hr className="border-arctic mt-6" />
          <PrivacyPolicyBody />
        </div>
      </main>
      <Footer />
    </>
  );
}
