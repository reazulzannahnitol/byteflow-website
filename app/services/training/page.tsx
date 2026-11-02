import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  Clock,
  Film,
  Globe,
  GraduationCap,
  Code,
  Megaphone,
  Monitor,
  MoveUpRight,
  PenTool,
  Search,
  Share2,
  Smartphone,
  Users,
} from "lucide-react";

import Header from "../../components/header";
import Footer from "../../components/footer";

const courses: {
  number: string;
  icon: typeof PenTool;
  title: string;
  description: string;
  duration: string;
  level: string;
  learn: string[];
  tools: string[];
}[] = [
  {
    number: "01",
    icon: PenTool,
    title: "Graphics Designing Training",
    description:
      "Learn to create logos, social media posts, banners, and brand designs that look professional and get noticed.",
    duration: "3 months",
    level: "Beginner friendly",
    learn: [
      "Design basics & color",
      "Logo & brand design",
      "Social media graphics",
    ],
    tools: ["Photoshop", "Illustrator", "Canva"],
  },
  {
    number: "02",
    icon: Film,
    title: "Video Editing Training",
    description:
      "Turn raw clips into smooth, engaging videos for YouTube, Facebook, Reels, ads, and client projects.",
    duration: "3 months",
    level: "Beginner friendly",
    learn: [
      "Cutting & transitions",
      "Color and sound",
      "Motion text & effects",
    ],
    tools: ["Premiere Pro", "After Effects", "CapCut"],
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Digital Marketing Training",
    description:
      "Learn how to find customers online, run ads, and grow a business using the right marketing plan.",
    duration: "3 months",
    level: "Beginner friendly",
    learn: ["Marketing strategy", "Facebook & Google ads", "Reports & results"],
    tools: ["Meta Ads", "Google Ads", "Analytics"],
  },
  {
    number: "04",
    icon: Code,
    title: "Website Development Training",
    description:
      "Build real, modern websites from scratch, from your first page to a finished project you can show clients.",
    duration: "4 months",
    level: "Beginner to advanced",
    learn: ["HTML, CSS, JavaScript", "React & Next.js", "Publishing a website"],
    tools: ["VS Code", "React", "Next.js"],
  },
  {
    number: "05",
    icon: Smartphone,
    title: "UI/UX Design Training",
    description:
      "Design easy-to-use apps and websites. Learn how to plan screens, layouts, and smooth user journeys.",
    duration: "2 months",
    level: "Beginner friendly",
    learn: [
      "User research basics",
      "Wireframes & layouts",
      "Clickable prototypes",
    ],
    tools: ["Figma", "FigJam"],
  },
  {
    number: "06",
    icon: Search,
    title: "SEO Training",
    description:
      "Help websites show up on Google. Learn keywords, content, and the steps that bring in free visitors.",
    duration: "2 months",
    level: "Beginner friendly",
    learn: [
      "Keyword research",
      "On-page & technical SEO",
      "Link building basics",
    ],
    tools: ["Search Console", "Semrush", "Ahrefs"],
  },
  {
    number: "07",
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Plan, post, and grow business pages on Facebook, Instagram, and TikTok with content people enjoy.",
    duration: "2 months",
    level: "Beginner friendly",
    learn: [
      "Content planning",
      "Page growth & posting",
      "Community and replies",
    ],
    tools: ["Meta Suite", "Canva", "Scheduler tools"],
  },
  {
    number: "08",
    icon: Globe,
    title: "Freelancing & Outsourcing",
    description:
      "Start earning from your skills. Learn how to build a profile, find clients, and deliver work with confidence.",
    duration: "1 month",
    level: "All levels",
    learn: [
      "Profile & portfolio setup",
      "Winning proposals",
      "Client communication",
    ],
    tools: ["Upwork", "Fiverr", "Freelancer"],
  },
  {
    number: "09",
    icon: Monitor,
    title: "Basic Computer & Office",
    description:
      "Start with the basics. Learn to use a computer, the internet, and everyday office tools with ease.",
    duration: "1 month",
    level: "Absolute beginner",
    learn: [
      "Typing & file handling",
      "Word, Excel, PowerPoint",
      "Safe internet use",
    ],
    tools: ["MS Office", "Google Workspace"],
  },
];

const benefits = [
  { icon: Users, text: "Small batches so every student gets attention" },
  {
    icon: GraduationCap,
    text: "Learn by doing real projects, not just theory",
  },
  { icon: Clock, text: "Flexible class times for students and workers" },
  { icon: Award, text: "Certificate after you complete the course" },
];

const steps = [
  {
    title: "Choose a course",
    text: "Pick the skill that fits your goal. Not sure? Talk to us and we will help.",
  },
  {
    title: "Join a batch",
    text: "Contact us, confirm your seat, and get your class schedule.",
  },
  {
    title: "Learn with projects",
    text: "Practice in every class and build real work for your portfolio.",
  },
  {
    title: "Start your career",
    text: "Use your new skill for a job, freelancing, or your own business.",
  },
];

export default function Training() {
  return (
    <main className="overflow-hidden">
      <Header />

      {/* Top of the page */}
      <section className="relative isolate">
        <div className="site-grid absolute inset-0 -z-10" />
        <div className="orb -right-24 top-10 -z-10 h-72 w-72 bg-electric/20" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
            Training
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Learn a skill.{" "}
            <span className="text-gradient">Build your future.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Practical, hands-on courses in design, video, marketing, and web
            development, taught by people who do this work every day.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="button-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
            >
              Join a course <MoveUpRight size={17} />
            </Link>
            <a
              href="#courses"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-softwhite transition hover:border-cyan/40 hover:bg-white/[0.04]"
            >
              See all courses
            </a>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section
        id="courses"
        className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10 lg:pb-28"
      >
        <div className="mb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
            Our courses
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Choose a skill, <span className="text-gradient">we train you.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <article
                key={course.number}
                className="glass-card group flex flex-col rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.08] text-cyan">
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-xs text-muted/60">
                    /{course.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {course.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/20 bg-cyan/[0.08] px-3 py-1.5 text-xs text-cyan">
                    <Clock size={12} /> {course.duration}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted">
                    {course.level}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {course.learn.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-softwhite"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                        <Check size={12} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <Link
                  href="/#contact"
                  className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-5 text-sm text-softwhite"
                >
                  <span className="mt-6">Enroll now</span>
                  <ArrowRight
                    size={17}
                    className="mt-6 text-cyan transition group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why learn with us */}
      <section className="border-y border-white/[0.07] bg-[#081127]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Why learn <span className="text-gradient">with us</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                    <Icon size={18} />
                  </span>
                  <p className="text-sm leading-6 text-softwhite">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyan">
          How it works
        </p>
        <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          From first class to{" "}
          <span className="text-gradient">first client.</span>
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="glass-card rounded-2xl p-6">
              <span className="font-mono text-xs text-cyan">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom call to action */}
      <section className="px-5 pb-24 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan/20 bg-[#0A1733] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="orb -left-20 -top-24 h-64 w-64 bg-electric/25" />
          <div className="orb -bottom-32 -right-12 h-72 w-72 bg-violet/20" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              Ready to start learning?{" "}
              <span className="text-gradient">Let&apos;s talk.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Tell us which skill you want to learn and we will share the next
              batch, schedule, and fees.
            </p>
            <a
              href="https://wa.me/8801670872403?text=Hello%20ByteFlow%20Global%20IT,%20I%20would%20like%20to%20know%20about%20your%20training%20courses."
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
