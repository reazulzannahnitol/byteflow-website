import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Megaphone,
  MoveUpRight,
  Package,
  Palette,
  PenTool,
  Play,
  Scissors,
  Share2,
  Smartphone,
  Sparkles,
} from "lucide-react";

import Header from "../../components/header";
import Footer from "../../components/footer";

type Kind =
  | "logo"
  | "brand"
  | "social"
  | "ads"
  | "print"
  | "edit"
  | "reels"
  | "promo"
  | "motion";

const services: {
  number: string;
  kind: Kind;
  icon: typeof Palette;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    number: "01",
    kind: "logo",
    icon: PenTool,
    title: "Logo Design",
    description:
      "A simple, memorable logo that shows who you are and looks great on a website, a shop sign, or a phone screen.",
    tags: ["Unique concept", "All file formats"],
  },
  {
    number: "02",
    kind: "brand",
    icon: Palette,
    title: "Brand Identity Kit",
    description:
      "Your logo, colors, fonts, and style rules together, so everything you share looks like it comes from one brand.",
    tags: ["Colors & fonts", "Style guide"],
  },
  {
    number: "03",
    kind: "social",
    icon: Share2,
    title: "Social Media Design",
    description:
      "Eye-catching posts, covers, and stories for Facebook, Instagram, and LinkedIn that match your brand every time.",
    tags: ["Posts", "Stories", "Covers"],
  },
  {
    number: "04",
    kind: "ads",
    icon: Megaphone,
    title: "Banners & Ad Creatives",
    description:
      "Clear, bold designs for online ads, web banners, and offers, made to get attention and bring in clicks.",
    tags: ["Web banners", "Ad sizes"],
  },
  {
    number: "05",
    kind: "print",
    icon: Package,
    title: "Print & Packaging",
    description:
      "Business cards, flyers, menus, brochures, and product packaging, prepared and ready to send to the printer.",
    tags: ["Flyers", "Cards", "Packaging"],
  },
  {
    number: "06",
    kind: "edit",
    icon: Scissors,
    title: "Video Editing",
    description:
      "We cut, clean, and polish your raw footage with smooth transitions, sound, and color, so the story flows well.",
    tags: ["Cuts & colors", "Sound mixing"],
  },
  {
    number: "07",
    kind: "reels",
    icon: Smartphone,
    title: "Reels & Short Videos",
    description:
      "Fast, vertical videos with captions and music for Reels, TikTok, and Shorts, made to keep people watching.",
    tags: ["Vertical", "Captions"],
  },
  {
    number: "08",
    kind: "promo",
    icon: Clapperboard,
    title: "Promo & Ad Videos",
    description:
      "Short videos that explain your product or service and push viewers to take action. Great for brands and shops.",
    tags: ["Product videos", "Ads"],
  },
  {
    number: "09",
    kind: "motion",
    icon: Sparkles,
    title: "Motion Graphics & Intros",
    description:
      "Animated logos, intros, titles, and moving graphics that give your videos a clean, professional feel.",
    tags: ["Logo animation", "Intros"],
  },
];

const extras = [
  "Unlimited ideas until you love the result",
  "Files ready for web, print, and social media",
  "Matches your brand colors and style",
  "Fast delivery with clear communication",
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

// A tiny drawing of a design or video, different for each kind.
function Preview({ kind }: { kind: Kind }) {
  let body: React.ReactNode = null;

  if (kind === "logo") {
    body = (
      <div className="flex h-full items-center justify-center gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-electric to-cyan font-heading text-4xl font-semibold text-white">
          B
        </div>
        <div className="flex flex-col gap-2.5">
          <Bar w="90px" tall bright />
          <Bar w="60px" />
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-electric" />
            <span className="h-3 w-3 rounded-full bg-cyan" />
            <span className="h-3 w-3 rounded-full bg-violet" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "brand") {
    body = (
      <div className="flex h-full gap-3">
        <div className="flex w-[34%] items-center justify-center rounded-lg bg-white/[0.05]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan font-heading text-xl font-semibold text-white">
            B
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3">
          <div className="flex gap-2">
            <span className="h-7 w-7 rounded-lg bg-electric" />
            <span className="h-7 w-7 rounded-lg bg-cyan" />
            <span className="h-7 w-7 rounded-lg bg-violet" />
            <span className="h-7 w-7 rounded-lg bg-softwhite" />
          </div>
          <div className="flex items-end gap-2 text-white">
            <span className="font-heading text-2xl font-semibold leading-none">
              Aa
            </span>
            <span className="text-xs text-muted">Brand font</span>
          </div>
          <Bar w="75%" />
          <Bar w="50%" />
        </div>
      </div>
    );
  }

  if (kind === "social") {
    body = (
      <div className="flex h-full items-center justify-center gap-3">
        <div className="flex h-full aspect-square flex-col justify-end gap-2 rounded-lg bg-gradient-to-br from-electric/50 to-violet/40 p-3">
          <Bar w="70%" tall bright />
          <Bar w="45%" />
        </div>
        <div className="flex h-full aspect-[9/14] flex-col justify-between rounded-lg bg-gradient-to-b from-cyan/40 to-electric/30 p-2">
          <span className="h-4 w-4 rounded-full bg-white/40" />
          <Bar w="80%" bright />
        </div>
        <div className="flex h-full aspect-square flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-violet/50 to-cyan/30">
          <span className="font-heading text-xl font-semibold text-white">
            50%
          </span>
          <Pill w="40px" />
        </div>
      </div>
    );
  }

  if (kind === "ads") {
    body = (
      <div className="flex h-full flex-col gap-3">
        <div className="flex flex-1 items-center gap-4 rounded-lg bg-gradient-to-r from-electric/40 to-violet/40 px-4">
          <div className="flex flex-1 flex-col gap-2">
            <Bar w="80%" tall bright />
            <Bar w="55%" />
            <Pill w="52px" />
          </div>
          <div className="h-14 w-14 rounded-full bg-white/20" />
        </div>
        <div className="flex gap-2">
          <div className="flex h-10 flex-1 items-center justify-center rounded-md bg-white/[0.06]">
            <Bar w="60%" bright />
          </div>
          <div className="flex h-10 w-12 items-center justify-center rounded-md bg-cyan/20">
            <span className="text-[10px] font-semibold text-cyan">SALE</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "print") {
    body = (
      <div className="flex h-full items-center justify-center gap-4">
        <div className="flex h-full w-[34%] flex-col gap-2 rounded-md bg-white/[0.07] p-3">
          <div className="h-8 rounded bg-gradient-to-br from-electric/60 to-cyan/40" />
          <Bar w="90%" bright />
          <Bar w="70%" />
          <Bar w="80%" />
        </div>
        <div className="flex w-[40%] flex-col gap-2">
          <div className="flex h-12 items-center gap-2 rounded-md bg-gradient-to-br from-violet/50 to-electric/30 px-3">
            <span className="h-5 w-5 rounded bg-white/40" />
            <Bar w="50%" bright />
          </div>
          <div className="flex flex-1 items-center justify-center rounded-md bg-gradient-to-br from-cyan/40 to-violet/30">
            <Package size={26} className="text-white/70" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "edit") {
    body = (
      <div className="flex h-full flex-col gap-2.5">
        <div className="flex flex-1 items-center justify-center rounded-lg bg-gradient-to-br from-violet/40 to-electric/30">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25 text-white">
            <Play size={16} />
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="flex gap-1">
            <div className="h-3 w-[30%] rounded-sm bg-cyan/60" />
            <div className="h-3 w-[22%] rounded-sm bg-electric/60" />
            <div className="h-3 w-[34%] rounded-sm bg-violet/60" />
          </div>
          <div className="flex gap-1">
            <div className="h-3 w-[12%] rounded-sm bg-white/10" />
            <div className="h-3 w-[50%] rounded-sm bg-white/15" />
            <div className="h-3 w-[20%] rounded-sm bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "reels") {
    body = (
      <div className="flex h-full items-center justify-center gap-6">
        <div className="relative flex h-full aspect-[9/16] flex-col items-center justify-end rounded-xl bg-gradient-to-b from-violet/50 to-cyan/30 p-2">
          <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white">
            <Play size={12} />
          </span>
          <div className="w-full rounded bg-black/30 px-1.5 py-1">
            <Bar w="100%" bright />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5">
            <span className="h-6 w-6 rounded-full bg-electric/70" />
            <span className="h-6 w-6 rounded-full bg-cyan/70" />
            <span className="h-6 w-6 rounded-full bg-violet/70" />
          </div>
          <Bar w="80px" bright />
          <Bar w="56px" />
          <Pill w="60px" />
        </div>
      </div>
    );
  }

  if (kind === "promo") {
    body = (
      <div className="flex h-full flex-col gap-2.5">
        <div className="relative flex flex-1 items-center justify-center rounded-lg bg-gradient-to-br from-electric/40 via-violet/30 to-cyan/30">
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            <Bar w="70px" tall bright />
            <Bar w="46px" />
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white">
            <Play size={18} />
          </span>
          <div className="absolute bottom-3 right-3">
            <Pill w="56px" />
          </div>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/10">
          <div className="h-full w-[55%] rounded-full bg-cyan" />
        </div>
      </div>
    );
  }

  if (kind === "motion") {
    body = (
      <div className="flex h-full items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric/30 to-cyan/20 font-heading text-lg font-semibold text-white/40">
          B
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric/60 to-cyan/40 font-heading text-2xl font-semibold text-white/70">
          B
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-electric to-cyan font-heading text-4xl font-semibold text-white">
          B
        </div>
        <Sparkles size={20} className="text-cyan" />
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

export default function GraphicsVideo() {
  return (
    <main className="overflow-hidden">
      <Header />

      {/* Top of the page */}
      <section className="relative isolate">
        <div className="site-grid absolute inset-0 -z-10" />
        <div className="orb -right-24 top-10 -z-10 h-72 w-72 bg-violet/20" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
            Graphics design &amp; video editing
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Designs and videos that{" "}
            <span className="text-gradient">get noticed.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            From a simple logo to a full promo video, we create clean, creative
            work that makes your brand look sharp everywhere people see it.
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
              See what we create
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
            What we can create for you
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Pick a service,{" "}
            <span className="text-gradient">we bring it to life.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.number}
                className="glass-card group rounded-2xl p-5 sm:p-6"
              >
                <Preview kind={item.kind} />
                <div className="mt-6 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.08] text-cyan">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-muted/60">
                    /{item.number}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 min-h-[112px] text-sm leading-7 text-muted">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
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

      {/* What every project includes */}
      <section className="border-y border-white/[0.07] bg-[#081127]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Every project <span className="text-gradient">includes</span>
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
              Have an idea in mind?{" "}
              <span className="text-gradient">Let&apos;s create it.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Tell us about your brand or your video and we will help you choose
              the right design and style.
            </p>
            <a
              href="https://wa.me/8801670872403?text=Hello%20ByteFlow%20Global%20IT,%20I%20would%20like%20to%20discuss%20a%20graphics%20or%20video%20project."
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
