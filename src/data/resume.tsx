import { Icons } from "@/components/icons";
import { FileText, HomeIcon } from "lucide-react";
import { Zod } from "@/components/ui/svgs/zod";
import { Git } from "@/components/ui/svgs/git";
import { TanstackQuery } from "@/components/ui/svgs/tanstackQuery";
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
    { name: "TanStack Query", icon: TanstackQuery },
    { name: "Zod", icon: Zod },
    { name: "shadcn/ui", icon: Icons.shadcn },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Supabase", icon: Icons.supabase },
    { name: "Git", icon: Git },
    { name: "Codex", icon: Icons.openai },
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
      title: "TWO Web",
      href: "https://github.com/naked-vivi/the-wild-oasis-website",
      dates: "",
      description:
        "A cabin booking website with Google sign-in, availability filters, and detailed stay pages. Combines Next.js rendering strategies with Supabase for fast browsing and a smooth booking experience.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "NextAuth", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://github.com/naked-vivi/the-wild-oasis-website",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naked-vivi/the-wild-oasis-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/placeholder.svg",
      video: "",
    },
    {
      title: "TWO Dashboard",
      href: "https://github.com/naked-vivi/the-wild-oasis",
      dates: "",
      description:
        "A hotel management dashboard for bookings, check-ins, cabins, and guest records. Features role-based access, filtering, pagination, and charts for revenue and occupancy, with React Query caching to keep data fresh.",
      technologies: ["React", "Supabase", "React Query", "shadcn/ui", "Tailwind CSS", "Recharts"],
      links: [
        {
          type: "Website",
          href: "https://github.com/naked-vivi/the-wild-oasis",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naked-vivi/the-wild-oasis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/placeholder.svg",
      video: "",
    },
    {
      title: "Fast React Pizza",
      href: "https://github.com/naked-vivi/fast-pizza",
      dates: "",
      description:
        "A pizza ordering app with menu browsing, order customization, and quantity controls. Integrates an ordering API for live pricing and delivery tracking, with Redux managing application state.",
      technologies: ["React", "React Router", "Redux", "Tailwind CSS", "TypeScript", "API Integration"],
      links: [
        {
          type: "Website",
          href: "https://github.com/naked-vivi/fast-pizza",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naked-vivi/fast-pizza",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/placeholder.svg",
      video: "",
    },
    {
      title: "React Quiz",
      href: "https://github.com/naked-vivi/react-quiz",
      dates: "",
      description:
        "A timed quiz with 15 random React questions, a 30 second limit per question, and a final score when the session ends. Uses Context API and useReducer to manage quiz state, with local storage for persistence.",
      technologies: ["React", "TypeScript", "Context API", "useReducer", "Local Storage"],
      links: [
        {
          type: "Website",
          href: "https://github.com/naked-vivi/react-quiz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naked-vivi/react-quiz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/placeholder.svg",
      video: "",
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
