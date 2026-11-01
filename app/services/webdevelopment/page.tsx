import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  Camera,
  Check,
  MoveUpRight,
  Palette,
  Rocket,
  ShoppingBag,
  User,
} from "lucide-react";

import Header from "../../components/header";
import Footer from "../../components/footer";

type Kind =
  | "landing"
  | "business"
  | "identity"
  | "cv"
  | "portfolio"
  | "photo"
  | "store"
  | "blog"
  | "event";

const websites: {
  number: string;
  kind: Kind;
  icon: typeof Rocket;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    number: "01",
    kind: "landing",
    icon: Rocket,
    title: "Landing Page",
    description:
      "One focused page built to turn visitors into customers. Perfect for a product, an offer, or a campaign.",
    tags: ["Single page", "Call to action"],
  },
  {
    number: "02",
    kind: "business",
    icon: Building2,
    title: "Business Website",
    description:
      "A complete, professional website with your services, team, and contact details, so people can trust you.",
    tags: ["Multi-page", "Contact forms"],
  },
  {
    number: "03",
    kind: "identity",
    icon: Palette,
    title: "Brand Identity Page",
    description:
      "One page that shows your logo, colors, fonts, and story, so your brand looks the same everywhere.",
    tags: ["Logo & colors", "Brand story"],
  },
  {
    number: "04",
    kind: "cv",
    icon: User,
    title: "CV / Resume Website",
    description:
      "Your skills, experience, and projects on a clean personal website that is easy to share in one link.",
    tags: ["Personal site", "Shareable link"],
  },
  {
    number: "05",
    kind: "portfolio",
    icon: Briefcase,
    title: "Portfolio Website",
    description:
      "Show your best work for design, development, writing, or any creative job. Great for freelancers.",
    tags: ["Designers", "Developers", "Freelancers"],
  },
  {
    number: "06",
    kind: "photo",
    icon: Camera,
    title: "Photography & Gallery",
    description:
      "A beautiful image-first website for photographers, artists, and studios, made to show off every photo.",
    tags: ["Galleries", "Fast images"],
  },
  {
    number: "07",
    kind: "store",
    icon: ShoppingBag,
    title: "Online Store",
    description:
      "Show your products, prices, and an order button, so customers can browse and buy from any phone.",
    tags: ["Product pages", "Shop"],
  },
  {
    number: "08",
    kind: "blog",
    icon: BookOpen,
    title: "Blog & Magazine",
    description:
      "A tidy home for your articles, news, and ideas, built so readers enjoy reading and come back again.",
    tags: ["Articles", "Easy to read"],
  },
  {
    number: "09",
    kind: "event",
    icon: CalendarDays,
    title: "Event & Invitation Page",
    description:
      "A page for a wedding, launch, workshop, or party, with the date, place, and a simple way to reply.",
    tags: ["Weddings", "Events"],
  },
];

const extras = [
  "Works on phones, tablets, and computers",
  "Fast loading and clean design",
  "Matches your brand colors and logo",
  "Contact button or form included",
];

function Bar({
  w,
  tall = false,
  bright = false,
}: {
  w: string;
  tall?: boolean;
  bright?: boolean;
}) {
  return (
    <div
      className={`rounded-full ${tall ? "h-3" : "h-1.5"} ${
        bright ? "bg-white/35" : "bg-white/15"
      }`}
      style={{ width: w }}
    />
  );
}

function Pill({ w = "64px" }: { w?: string }) {
  return (
    <div
      className="h-5 rounded-full bg-gradient-to-r from-electric to-cyan"
      style={{ width: w }}
    />
  );
}

// A tiny drawing of a website, different for each kind.
function Preview({ kind }: { kind: Kind }) {
  let body: React.ReactNode = null;

  if (kind === "landing") {
    body = (
      <div className="flex h-full flex-col items-center justify-center gap-2.5">
        <Bar w="60%" tall bright />
        <Bar w="40%" />
        <Pill />
        <div className="mt-2 flex w-full gap-2">
          <div className="h-8 flex-1 rounded-md bg-white/[0.06]" />
          <div className="h-8 flex-1 rounded-md bg-white/[0.06]" />
          <div className="h-8 flex-1 rounded-md bg-white/[0.06]" />
        </div>
      </div>
    );
  }

  if (kind === "business") {
    body = (
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-10 rounded bg-cyan/60" />
          <div className="flex gap-2">
            <Bar w="18px" />
            <Bar w="18px" />
            <Bar w="18px" />
          </div>
        </div>
        <div className="flex flex-1 gap-3">
          <div className="flex flex-1 flex-col justify-center gap-2">
            <Bar w="85%" tall bright />
            <Bar w="65%" />
            <Bar w="75%" />
            <Pill w="48px" />
          </div>
          <div className="w-[42%] rounded-lg bg-gradient-to-br from-electric/40 to-violet/40" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 flex-1 rounded bg-white/[0.06]" />
          <div className="h-6 flex-1 rounded bg-white/[0.06]" />
          <div className="h-6 flex-1 rounded bg-white/[0.06]" />
        </div>
      </div>
    );
  }

  if (kind === "identity") {
    body = (
      <div className="flex h-full items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan font-heading text-2xl font-semibold text-white">
          B
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex gap-2">
            <span className="h-6 w-6 rounded-full bg-electric" />
            <span className="h-6 w-6 rounded-full bg-cyan" />
            <span className="h-6 w-6 rounded-full bg-violet" />
            <span className="h-6 w-6 rounded-full bg-softwhite" />
          </div>
          <div className="flex items-end gap-2 text-white">
            <span className="font-heading text-2xl font-semibold leading-none">
              Aa
            </span>
            <span className="text-xs text-muted">Brand font</span>
          </div>
          <Bar w="70%" />
        </div>
      </div>
    );
  }

  if (kind === "cv") {
    body = (
      <div className="flex h-full gap-3">
        <div className="flex w-[38%] flex-col items-center gap-2 rounded-lg bg-white/[0.05] p-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet to-cyan" />
          <Bar w="70%" bright />
          <Bar w="50%" />
          <div className="mt-1 w-full space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full w-[80%] rounded-full bg-cyan" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full w-[60%] rounded-full bg-electric" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full w-[90%] rounded-full bg-violet" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3">
          <Bar w="40%" tall bright />
          <Bar w="95%" />
          <Bar w="80%" />
          <Bar w="40%" tall bright />
          <Bar w="90%" />
          <Bar w="70%" />
        </div>
      </div>
    );
  }

  if (kind === "portfolio") {
    body = (
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-2">
        <div className="rounded-md bg-gradient-to-br from-electric/50 to-cyan/30" />
        <div className="rounded-md bg-gradient-to-br from-violet/50 to-electric/30" />
        <div className="rounded-md bg-gradient-to-br from-cyan/40 to-violet/30" />
        <div className="rounded-md bg-gradient-to-br from-violet/40 to-cyan/30" />
        <div className="rounded-md bg-gradient-to-br from-cyan/50 to-electric/30" />
        <div className="rounded-md bg-gradient-to-br from-electric/40 to-violet/40" />
      </div>
    );
  }

  if (kind === "photo") {
    body = (
      <div className="flex h-full gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex-[3] rounded-md bg-gradient-to-b from-cyan/40 to-electric/30" />
          <div className="flex-[2] rounded-md bg-gradient-to-b from-violet/40 to-electric/30" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex-[2] rounded-md bg-gradient-to-b from-electric/40 to-violet/30" />
          <div className="flex-[3] rounded-md bg-gradient-to-b from-cyan/30 to-violet/40" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex-[3] rounded-md bg-gradient-to-b from-violet/40 to-cyan/30" />
          <div className="flex-[2] rounded-md bg-gradient-to-b from-electric/40 to-cyan/30" />
        </div>
      </div>
    );
  }

  if (kind === "store") {
    body = (
      <div className="grid h-full grid-cols-3 gap-2">
        {["from-cyan/40", "from-violet/40", "from-electric/40"].map((c) => (
          <div
            key={c}
            className="flex flex-col gap-1.5 rounded-md bg-white/[0.05] p-1.5"
          >
            <div
              className={`flex-1 rounded bg-gradient-to-br ${c} to-transparent`}
            />
            <Bar w="80%" />
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-cyan">$29</span>
              <span className="h-3 w-6 rounded-full bg-electric/70" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "blog") {
    body = (
      <div className="flex h-full gap-3">
        <div className="flex flex-[1.3] flex-col gap-2">
          <div className="flex-1 rounded-md bg-gradient-to-br from-violet/40 to-cyan/30" />
          <Bar w="85%" tall bright />
          <Bar w="60%" />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-8 w-8 shrink-0 rounded bg-white/10" />
              <div className="flex flex-1 flex-col gap-1.5">
                <Bar w="90%" bright />
                <Bar w="60%" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "event") {
    body = (
      <div className="flex h-full items-center gap-4">
        <div className="flex h-20 w-16 shrink-0 flex-col overflow-hidden rounded-xl border border-white/15 text-center">
          <div className="bg-gradient-to-r from-electric to-cyan py-1 text-[9px] font-semibold uppercase tracking-widest text-white">
            Save
          </div>
          <div className="flex flex-1 items-center justify-center font-heading text-2xl font-semibold text-white">
            24
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          <Bar w="80%" tall bright />
          <Bar w="55%" />
          <Bar w="65%" />
          <Pill w="56px" />
        </div>
      </div>
    );
  }

  return (
    <div className="h-44 overflow-hidden rounded-xl border border-white/10 bg-[#08132B]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#FF6B83]" />
        <span className="h-2 w-2 rounded-full bg-[#FFD166]" />
        <span className="h-2 w-2 rounded-full bg-[#06D6A0]" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-white/[0.06]" />
      </div>
      <div className="h-[calc(100%-33px)] p-3">{body}</div>
    </div>
  );
}

export default function WebDevelopment() {
  return (
    <main className="overflow-hidden">
      <Header />

      {/* Top of the page */}
      <section className="relative isolate">
        <div className="site-grid absolute inset-0 -z-10" />
        <div className="orb -right-24 top-10 -z-10 h-72 w-72 bg-electric/20" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
            Web development
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Websites built for{" "}
            <span className="text-gradient">whatever you do.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Whether you need one simple page or a full business website, we
            design and build it to look sharp and work on every screen.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="button-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
            >
              Start a project <MoveUpRight size={17} />
            </Link>
            <a
              href="#types"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-softwhite transition hover:border-cyan/40 hover:bg-white/[0.04]"
            >
              See what we build
            </a>
          </div>
        </div>
      </section>

      {/* The cards */}
      <section
        id="types"
        className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10 lg:pb-28"
      >
        <div className="mb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
            What we can build for you
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Pick a type, <span className="text-gradient">we shape it.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {websites.map((site) => {
            const Icon = site.icon;
            return (
              <article
                key={site.number}
                className="glass-card group rounded-2xl p-5 sm:p-6"
              >
                <Preview kind={site.kind} />
                <div className="mt-6 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.08] text-cyan">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-muted/60">
                    /{site.number}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  {site.title}
                </h3>
                <p className="mt-3 min-h-[112px] text-sm leading-7 text-muted">
                  {site.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/#contact"
                  className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5 text-sm text-softwhite"
                >
                  <span>I want this</span>
                  <ArrowRight
                    size={17}
                    className="text-cyan transition group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* What every website includes */}
      <section className="border-y border-white/[0.07] bg-[#081127]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Every website <span className="text-gradient">includes</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                  <Check size={14} />
                </span>
                <p className="text-sm leading-6 text-softwhite">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom call to action */}
      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan/20 bg-[#0A1733] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="orb -left-20 -top-24 h-64 w-64 bg-electric/25" />
          <div className="orb -bottom-32 -right-12 h-72 w-72 bg-violet/20" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              Not sure which one you need?{" "}
              <span className="text-gradient">Let&apos;s talk.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Tell us about your idea and we will help you choose the right kind
              of website.
            </p>
            <a
              href="https://wa.me/8801670872403?text=Hello%20ByteFlow%20Global%20IT,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white"
            >
              Contact us <MoveUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
