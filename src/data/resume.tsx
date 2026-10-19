import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";

export const DATA = {
  name: "Vivian",
  initials: "V",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm a junior frontend developer who loves turning ideas into clean, responsive websites.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [earned certificates in responsive web design and AI](/#certificates). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/web-app-manifest-512x512.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "TanStack Query", icon: Icons.tanstackquery },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "shadcn/ui", icon: Icons.shadcn },
    { name: "Supabase", icon: Icons.supabase },
    { name: "Figma", icon: Icons.figma },
    { name: "Codex", icon: Icons.openai },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
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

        navbar: true,
      },
      TikTok: {
        name: "TikTok",
        url: "https://www.tiktok.com/@nakedvivii",
        icon: Icons.tiktok,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
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
      logoUrl: "/botnoi.svg",
      start: "January 2026",
      end: "April 2026",
      description:
        "Designed conversation flows and developed chatbots and voicebots to meet customer needs and create engaging user experiences. Focused on clear dialogue, smooth interactions, and helpful responses to make conversations intuitive and effective.",
    },
  ],
  education: [
    {
      school: "Mae Fah Luang University",
      href: "https://www.mfu.ac.th",
      degree: "Bachelor's Degree in Software Engineering",
      logoUrl: "/mfu.svg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  certificates: [
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
        "Used generative AI and effective prompts to create content, generate ideas, and simplify daily tasks. Applied responsible AI practices to recognize bias and reduce potential harm.",
    },
  ],
} as const;
