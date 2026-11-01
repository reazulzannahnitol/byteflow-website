import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe,
  HardDrive,
  Lightbulb,
  Mail,
  MoveUpRight,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Header from "../../components/header";
import Footer from "../../components/footer";

type Kind =
  | "security"
  | "hosting"
  | "domain"
  | "email"
  | "maintenance"
  | "backup"
  | "consulting";

const solutions: {
  number: string;
  kind: Kind;
  icon: typeof Server;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    number: "01",
    kind: "security",
    icon: ShieldCheck,
    title: "Website Security",
    description:
      "We protect your website with SSL, firewalls, and safe settings, so your visitors and your data stay protected.",
    tags: ["SSL certificate", "Protection"],
  },
  {
    number: "02",
    kind: "hosting",
    icon: Server,
    title: "Web Hosting",
    description:
      "Fast and reliable hosting for your website, set up for you, so your site stays online and loads quickly.",
    tags: ["Fast servers", "Easy setup"],
  },
  {
    number: "03",
    kind: "domain",
    icon: Globe,
    title: "Domain Registration",
    description:
      "We help you find, buy, and connect the perfect domain name, so people can reach you at your own address.",
    tags: ["Name search", "DNS setup"],
  },
  {
    number: "04",
    kind: "email",
    icon: Mail,
    title: "Business Email Setup",
    description:
      "Professional email addresses with your own domain, like name@yourbrand.com, set up and ready to use.",
    tags: ["Your own domain", "Looks professional"],
  },
  {
    number: "05",
    kind: "maintenance",
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "We keep your website updated, fixed, and running smoothly, so you can focus on your business.",
    tags: ["Updates", "Bug fixes"],
  },
  {
    number: "06",
    kind: "backup",
    icon: HardDrive,
    title: "Backup & Recovery",
    description:
      "Regular backups of your website and files, so if something goes wrong, we can bring everything back.",
    tags: ["Safe copies", "Quick restore"],
  },
  {
    number: "07",
    kind: "consulting",
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Simple, honest advice on the right tools and setup for your business, with no confusing technical talk.",
    tags: ["Clear advice", "Right tools"],
  },
];

const extras = [
  "Simple setup with clear explanations",
  "Friendly support when you need help",
  "Fair prices with no hidden costs",
  "Built around what your business really needs",
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

// A tiny drawing for each kind of IT solution.
function Preview({ kind }: { kind: Kind }) {
  let body: React.ReactNode = null;

  if (kind === "security") {
    body = (
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center gap-2 rounded-md bg-white/[0.06] px-3 py-1.5">
          <ShieldCheck size={14} className="text-[#06D6A0]" />
          <span className="font-mono text-[10px] text-softwhite">
            https://yourbrand.com
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan text-white">
            <ShieldCheck size={30} />
          </div>
          <div className="flex flex-col gap-2">
            <Bar w="80px" tall bright />
            <Bar w="56px" />
            <span className="w-fit rounded-full bg-[#06D6A0]/20 px-2 py-0.5 text-[10px] font-semibold text-[#06D6A0]">
              Protected
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "hosting") {
    body = (
      <div className="flex h-full items-center gap-4">
        <div className="flex flex-1 flex-col gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-md bg-white/[0.06] px-3 py-2"
            >
              <Bar w="40%" bright />
              <span className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-[#06D6A0]" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </span>
            </div>
          ))}
        </div>
        <div className="flex w-[30%] flex-col items-center gap-2">
          <Server size={34} className="text-cyan" />
          <Bar w="70%" />
          <span className="text-[10px] font-semibold text-[#06D6A0]">
            99.9% online
          </span>
        </div>
      </div>
    );
  }

  if (kind === "domain") {
    body = (
      <div className="flex h-full flex-col justify-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] py-2 pl-4 pr-2">
          <Globe size={15} className="text-cyan" />
          <span className="flex-1 font-mono text-xs text-softwhite">
            yourbrand.com
          </span>
          <span className="rounded-full bg-gradient-to-r from-electric to-cyan px-3 py-1 text-[10px] font-semibold text-white">
            Search
          </span>
        </div>
        <div className="flex items-center justify-between rounded-md bg-white/[0.06] px-3 py-2">
          <span className="font-mono text-[11px] text-softwhite">
            yourbrand.com
          </span>
          <span className="text-[10px] font-semibold text-[#06D6A0]">
            Available
          </span>
        </div>
        <div className="flex items-center justify-between rounded-md bg-white/[0.03] px-3 py-2">
          <span className="font-mono text-[11px] text-muted">
            yourbrand.net
          </span>
          <span className="text-[10px] text-muted">Available</span>
        </div>
      </div>
    );
  }

  if (kind === "email") {
    body = (
      <div className="flex h-full flex-col gap-2.5">
        <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.06] p-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan text-white">
            <Mail size={15} />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] text-softwhite">
              hello@yourbrand.com
            </span>
            <Bar w="90px" />
          </div>
        </div>
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-2.5 px-2.5">
            <span className="h-6 w-6 rounded-full bg-white/10" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Bar w="70%" bright />
              <Bar w="45%" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "maintenance") {
    body = (
      <div className="flex h-full items-center gap-4">
        <div className="flex flex-1 flex-col gap-2.5">
          {["Updates", "Bug fixes", "Speed check"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan/20 text-cyan">
                <Check size={10} />
              </span>
              <span className="text-[11px] text-softwhite">{item}</span>
              <div className="ml-auto h-1.5 w-12 rounded-full bg-white/10">
                <div className="h-full w-full rounded-full bg-cyan" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet/60 to-electric/40 text-white">
          <Wrench size={28} />
        </div>
      </div>
    );
  }

  if (kind === "backup") {
    body = (
      <div className="flex h-full items-center justify-center gap-3">
        <div className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-xl bg-white/[0.06]">
          <HardDrive size={24} className="text-cyan" />
          <Bar w="60%" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <ArrowRight size={18} className="text-cyan" />
          <ArrowRight size={18} className="rotate-180 text-violet" />
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-br from-electric/40 to-cyan/30">
          <HardDrive size={24} className="text-white" />
          <span className="text-[9px] font-semibold text-white">Backup</span>
        </div>
      </div>
    );
  }

  if (kind === "consulting") {
    body = (
      <div className="flex h-full items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan text-white">
          <Lightbulb size={28} />
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          <div className="rounded-lg rounded-bl-none bg-white/[0.07] p-2.5">
            <Bar w="85%" bright />
          </div>
          <div className="ml-6 rounded-lg rounded-br-none bg-gradient-to-r from-electric/40 to-cyan/30 p-2.5">
            <Bar w="70%" bright />
          </div>
          <Pill w="52px" />
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

export default function ITSolutions() {
  return (
    <main className="overflow-hidden">
      <Header />

      {/* Top of the page */}
      <section className="relative isolate">
        <div className="site-grid absolute inset-0 -z-10" />
        <div className="orb -right-24 top-10 -z-10 h-72 w-72 bg-cyan/15" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
            IT solutions
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Technology that keeps your{" "}
            <span className="text-gradient">business running.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Security, hosting, domains, and everyday IT help, set up simply and
            explained clearly, so you can stay online and stay protected.
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
              See what we offer
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
            What we can do for you
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Pick a service, <span className="text-gradient">we handle it.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => {
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

      {/* What every service includes */}
      <section className="border-y border-white/[0.07] bg-[#081127]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Every service <span className="text-gradient">includes</span>
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
              Not sure what you need?{" "}
              <span className="text-gradient">Let&apos;s talk.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Tell us about your business and we will help you choose the right
              hosting, security, and IT setup.
            </p>
            <a
              href="https://wa.me/8801670872403?text=Hello%20ByteFlow%20Global%20IT,%20I%20would%20like%20to%20discuss%20an%20IT%20solution."
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
