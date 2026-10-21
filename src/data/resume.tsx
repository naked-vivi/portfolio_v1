import { Icons } from "@/components/icons";
import { FileText, HomeIcon } from "lucide-react";
import { Zod } from "@/components/ui/svgs/zod";
import { Git } from "@/components/ui/svgs/git";
import { TanstackQuery } from "@/components/ui/svgs/tanstackQuery";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { ClaudeCode, Cloudflare, Redux, Vercel } from "@/components/ui/svgs/brand-icons";

export const DATA = {
  name: "Vivian ~ Frontend Developer",
  initials: "V",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm a junior frontend developer who loves turning ideas into clean, responsive websites.",
  summary:
    "I build web interfaces where performance, typography, and micro-interactions meet. Most of my work goes into refining components with React, Next.js, and shadcn/ui, using agentic coding workflows to turn concepts into clean, production-ready code fast. I'm actively looking for a **Junior Frontend Developer** role, so if you're building cool web products, I'd love to chat over an iced matcha. 🍵✨",
  avatarUrl: "/favicons/default/web-app-manifest-512x512.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "TanStack Query", icon: TanstackQuery },
    { name: "Zod", icon: Zod },
    { name: "shadcn/ui", icon: Icons.shadcn },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Redux", icon: Redux },
    { name: "Supabase", icon: Icons.supabase },
    { name: "Git", icon: Git },
    { name: "Codex", icon: Icons.openai },
    { name: "Claude Code", icon: ClaudeCode },
    { name: "Cloudflare", icon: Cloudflare },
    { name: "Vercel", icon: Vercel },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "pyaephyoeaein@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/naked-vivi",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nang-pyae-pyae-phyoe-aein/?isSelfProfile=false",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/nakedvivii/",
        icon: Icons.instagram,

        navbar: false,
      },
      TikTok: {
        name: "TikTok",
        url: "https://www.tiktok.com/@nakedvivii",
        icon: Icons.tiktok,
        navbar: false,
      },
      LINE: {
        name: "LINE",
        url: "https://line.me/ti/p/~niea_ofethan",
        icon: Icons.line,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pyaephyoeaein@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Botnoi Group",
      badges: [],
      location: "Thailand",
      title: "Solution Engineer Intern",
      logoUrl: "/logos/botnoi.svg",
      start: "January 2026",
      end: "April 2026",
      description:
        "Developed conversational AI and voicebot solutions for healthcare and education using prompt engineering and Google Apps Script APIs. Designed clinical triage flows, built an interactive virtual patient prototype featured in company showcases, and conducted extensive manual testing across all user conversation journeys.",
    },
  ],
  education: [
    {
      school: "Mae Fah Luang University",
      href: "https://www.mfu.ac.th",
      degree: "B.Eng. Software Engineering",
      gpa: "3.8",
      logoUrl: "/logos/mfu.svg",
      start: "August 2022",
      end: "May 2026",
    },
  ],
  projects: [
    // {
    //   title: "TWO Web",
    //   href: "https://github.com/naked-vivi/the-wild-oasis-website",
    //   dates: "",
    //   description:
    //     "A cabin booking website with Google sign-in, availability filters, and detailed stay pages. Combines Next.js rendering strategies with Supabase for fast browsing and a smooth booking experience.",
    //   technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "NextAuth", "Framer Motion"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://github.com/naked-vivi/the-wild-oasis-website",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/naked-vivi/the-wild-oasis-website",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/images/placeholder.svg",
    //   video: "",
    // },
    // {
    //   title: "TWO Dashboard",
    //   href: "https://github.com/naked-vivi/the-wild-oasis",
    //   dates: "",
    //   description:
    //     "A hotel management dashboard for bookings, check-ins, cabins, and guest records. Features role-based access, filtering, pagination, and charts for revenue and occupancy, with React Query caching to keep data fresh.",
    //   technologies: ["React", "Supabase", "React Query", "shadcn/ui", "Tailwind CSS", "Recharts"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://github.com/naked-vivi/the-wild-oasis",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/naked-vivi/the-wild-oasis",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/images/placeholder.svg",
    //   video: "",
    // },
    {
      title: "Verona",
      href: "https://verona.vivianaein.dev",
      dates: "",
      description:
        "An Italian pizza ordering application inspired by Verona, featuring real-time order tracking, custom topping pricing, and shareable URL filters. Built with React, TypeScript, and Redux Toolkit with persistent cart sessions.",
      technologies: ["React", "React Router", "Redux", "TypeScript", "API Integration"],
      links: [
        {
          type: "Website",
          href: "https://verona.vivianaein.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naked-vivi/verona",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/verona.png",
      video: "/videos/verona.mp4",
    },
    {
      title: "Quizzone",
      href: "https://quizzone.vivianaein.dev",
      dates: "",
      description:
        "An AI-powered learning and assessment app that turns study notes into quizzes using Groq. Features custom JSON imports with schema validation, interactive test sessions, and client-side score tracking.",
      technologies: ["React", "TypeScript", "Context API", "AI/SDK", "Zod", "Local Storage"],
      links: [
        {
          type: "Website",
          href: "https://quizzone.vivianaein.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naked-vivi/quizzone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/placeholder.svg",
      video: "/videos/quizzone.mp4",
    },
  ],
  certificates: [
    {
      title: "Botnoi Trainee Program",
      image: "/certificates/botnoi_certs.png",
      issuer: "Botnoi Group",
      date: "April 2026",
      dateTime: "2026-04",
      href: "/certificates/botnoi_certs.png",
      description:
        "Completed the Chatbot Solutions Engineer training program, designing conversational logic and voicebot prototypes with prompt engineering, symptom-assessment flows, and API integrations.",
    },
    {
      title: "Responsive Web Design",
      image: "/certificates/freecodecamp.svg",
      issuer: "freeCodeCamp",
      date: "February 2026",
      dateTime: "2026-02",
      href: "https://www.freecodecamp.org/certification/fcc96c2f847-ac10-42ed-aad8-7a8e43888008/responsive-web-design",
      description:
        "Built responsive web pages with HTML, CSS, Flexbox, and CSS Grid. Used media queries and accessible layouts to improve usability across devices.",
    },
    {
      title: "Google AI Essentials",
      image: "/certificates/google-ai-essentials.png",
      issuer: "Google via Coursera",
      date: "July 2025",
      dateTime: "2025-07",
      href: "https://www.coursera.org/account/accomplishments/badge/S0Am7b44Tc-AJu2-OC3Pcg",
      description:
        "Used AI and clear prompts to create content and simplify tasks. Applied responsible practices to recognize bias and reduce harm.",
    },
  ],
} as const;
