import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  Code2,
  Globe2,
  Layers3,
  MonitorSmartphone,
  MoveUpRight,
  Sparkles,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive websites built to make your business look credible and work beautifully on every screen.",
    tags: ["Business websites", "Web apps"],
    href: "/services/webdevelopment",
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Graphics & Video Editing",
    description:
      "Logos, brand visuals, social media designs, and polished videos that make your business look professional and stand out.",
    tags: ["Graphics design", "Video editing"],
    href: "/services/graphics",
  },
  {
    number: "03",
    icon: Workflow,
    title: "IT Solutions",
    description:
      "Practical technology guidance and streamlined digital workflows designed around real business needs.",
    tags: ["Consulting", "Domain", "Hosting", "VPN"],
    href: "/services/itsolutions",
  },
];

const steps = [
  {
    n: "01",
    title: "Discover",
    text: "We learn about your goals, audience, and the problem you need to solve.",
  },
  {
    n: "02",
    title: "Design",
    text: "We map the experience and shape a clear, considered visual direction.",
  },
  {
    n: "03",
    title: "Build",
    text: "We turn the plan into a responsive, reliable digital experience.",
  },
  {
    n: "04",
    title: "Improve",
    text: "We test, refine, and help you plan the next step as your needs evolve.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      <section id="home" className="relative isolate">
        <div className="site-grid absolute inset-0 -z-10" />
        <div className="orb -right-24 top-20 -z-10 h-80 w-80 bg-electric/20" />
        <div className="orb right-1/3 top-64 -z-10 h-64 w-64 bg-violet/15" />
        <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:py-24">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.07] px-3.5 py-2 text-xs font-medium tracking-wide text-cyan sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_#00D9F5]" />
              DIGITAL THINKING. REAL-WORLD IMPACT.
            </div>
            <h1 className="max-w-3xl font-heading text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Ideas into code.
              <span className="mt-2 block text-gradient">
                Code into impact.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              We create thoughtful digital experiences and practical technology
              solutions that help ambitious businesses move forward.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="button-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
              >
                Start a conversation <MoveUpRight size={17} />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-softwhite transition hover:border-cyan/40 hover:bg-white/[0.04]"
              >
                Explore our services <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs text-muted sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <Sparkles size={15} className="text-cyan" /> Design with purpose
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe2 size={15} className="text-cyan" /> Built for a connected
                world
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-8 rounded-full bg-electric/20 blur-[80px]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#08132B]/80 p-4 shadow-glow backdrop-blur sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B83]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#06D6A0]" />
                </div>
                <span className="font-mono text-[10px] tracking-[.22em] text-muted">
                  BYTEFLOW / STUDIO
                </span>
                <Braces size={17} className="text-cyan" />
              </div>
              <div className="grid grid-cols-[42px_1fr] gap-4 pt-5">
                <div className="flex flex-col items-center gap-5 border-r border-white/[0.07] pt-1 text-muted/60">
                  <Code2 size={17} />
                  <Layers3 size={17} />
                  <Workflow size={17} />
                  <Globe2 size={17} />
                </div>
                <div className="min-w-0 space-y-4">
                  <div className="rounded-xl border border-cyan/15 bg-cyan/[0.045] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[.2em] text-cyan">
                        Our mindset
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    </div>
                    <p className="font-heading text-2xl font-medium tracking-tight text-white sm:text-3xl">
                      Make complex feel simple.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Clear thinking. Clean execution. Useful outcomes.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-electric/15 text-cyan">
                        <Code2 size={18} />
                      </div>
                      <p className="text-sm font-semibold">Build</p>
                      <p className="mt-1 text-xs text-muted">Made for people</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-violet/20 text-[#B9A0FF]">
                        <Globe2 size={18} />
                      </div>
                      <p className="text-sm font-semibold">Connect</p>
                      <p className="mt-1 text-xs text-muted">
                        Ready for growth
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3">
                    <div className="flex -space-x-1">
                      <span className="h-2 w-2 rounded-full bg-cyan" />
                      <span className="h-2 w-2 rounded-full bg-electric" />
                      <span className="h-2 w-2 rounded-full bg-violet" />
                    </div>
                    <span className="text-xs text-muted">
                      Ideas <span className="mx-1 text-cyan">→</span> Code{" "}
                      <span className="mx-1 text-cyan">→</span> Global impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#101B37] px-4 py-3 shadow-xl sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan">
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold">Thoughtful by design</p>
                <p className="mt-1 text-[11px] text-muted">
                  Every detail has a purpose
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
              What we do
            </p>
            <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Technology should move you{" "}
              <span className="text-gradient">forward.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
            From the first idea to the final interface, we focus on making
            technology useful, approachable, and ready for what comes next.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.number}
                className="glass-card group rounded-2xl p-6 sm:p-7"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.08] text-cyan">
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-xs text-muted/60">
                    /{service.number}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-[84px] text-sm leading-7 text-muted">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5 text-sm text-softwhite"
                >
                  <span>Explore service</span>
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

      <section
        id="approach"
        className="border-y border-white/[0.07] bg-[#081127]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
              How we work
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              A clear path from{" "}
              <span className="text-gradient">idea to launch.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Good work starts with good questions. Our process keeps goals
              visible and decisions purposeful at every stage.
            </p>
          </div>
          <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.n}
                className="relative border-t border-white/10 py-6 sm:px-5 lg:first:pl-0 lg:last:pr-0"
              >
                {index < steps.length - 1 && (
                  <div className="absolute right-5 top-[-5px] hidden h-2 w-2 rounded-full bg-cyan lg:block" />
                )}
                <span className="font-mono text-xs tracking-widest text-cyan">
                  STEP {step.n}
                </span>
                <h3 className="mt-5 font-heading text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-muted">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10 lg:py-28"
      >
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
            The ByteFlow point of view
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Global thinking.
            <br />
            <span className="text-gradient">Human-first technology.</span>
          </h2>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.055] to-transparent p-6 sm:p-9">
          <p className="text-lg leading-8 text-softwhite sm:text-xl">
            We believe technology works best when it starts with people: their
            needs, their ambitions, and the things they want to make possible.
          </p>
          <p className="mt-5 text-sm leading-7 text-muted">
            ByteFlow Global IT brings design-minded thinking and practical
            development together to create digital experiences with a clear
            purpose.
          </p>
          <div className="mt-7 flex items-center gap-3 text-sm font-medium text-cyan">
            <span className="h-px w-8 bg-cyan" />
            Ideas → Code → Global impact
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan/20 bg-[#0A1733] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="orb -left-20 -top-24 h-64 w-64 bg-electric/25" />
          <div className="orb -bottom-32 -right-12 h-72 w-72 bg-violet/20" />
          <div className="relative">
            <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
              Have a project in mind?
            </p>
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s turn your next idea into{" "}
              <span className="text-gradient">something real.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Tell us what you are trying to build. We can start with a
              conversation and take it from there.
            </p>
            <a
              href="https://wa.me/8801670872403?text=Hello%20ByteFlow%20Global%20IT,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white"
            >
              Discuss a project <MoveUpRight size={17} />
            </a>

            <p className="mt-4 text-xs text-muted/70">
              Prefer email? Contact us at{" "}
              <a
                href="mailto:byteflowglobalit@gmail.com"
                className="text-cyan hover:underline"
              >
                byteflowglobalit@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
