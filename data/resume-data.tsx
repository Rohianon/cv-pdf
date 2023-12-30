import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Rohi Anon Ogula",
  initials: "RAO",
  location: "Nairobi, Kenya",
  locationLink: "https://www.google.com/maps/place/Nairobi,+Kenya/",
  about:
    "An apt, optimistic, and enthusiastic Technologist aiming at positive development with Artificial Intelligence (AI) and Machine Learning (ML) (Natural Language Processing Enthusiast) without an accidental downfall of society",
  summary:
    "Rohi is a Junior Data Scientist at Dalberg Data Insights with his most recent project revolving around building web dashboards that deliver insights to health professionals in Guinea, Madagascar, and Comoros. His interests revolve around building data and machine learning products with a lean toward public health, agriculture, and climate sectors.",
  avatarUrl: "https://avatars.githubusercontent.com/u/41194018?v=4",
  personalWebsite: "https://rohi.xyz",
  contact: {
    email: "rohianon48@gmail.com",
    tel: "+254799031228",
    social: [
      {
        name: "Github",
        url: "https://www.github.com/Rohianon",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohi-anon/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/anon_rohi",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Jkuat University of Agriculture and Technology",
      degree: "Bachelor's Degree in Statistics",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Dalberg Data Insights",
      link: "https://www.dalberg.com/what-we-do/dalberg-data-insights/",
      badges: ["Remote"],
      logo: null,
      title: "Junior Data Scientist",
      start: "Jan, 2023",
      end: "Present",
      description:
        "As a Junior Data Scientist, Rohi is responsible for: Contributing to hypothesis building and validation by building EDAs that can be presented and protected in front of the team. Shape dashboards that communicate insights efficiently.  Communicate blockers efficiently and be active during stand-up meetings. Self-organized learning process aligned with my direct manager.",
    },
    {
      company: "Artive Tech",
      link: "https://artivetech.com/",
      badges: ["Remote"],
      title: "Intern AI Developer",
      logo: null,
      start: "Mar, 2022",
      end: "Jul, 2022",
      description:
        "As an AI developer, I took initiative to lead in developing a prototype chatbot trained on IBM Watson customer care data. He gained experience in natural language understanding and natural language generation using state-of-the-art (SOTA) models using Python.",
    },
    {
      company: "Zindua School",
      link: "https://www.zinduaschool.com/",
      badges: [],
      title: "Data Science Technical Mentor",
      logo: null,
      start: "Feb, 2021",
      end: "Feb, 2022",
      description:
        "As a mentor, I proved an invaluable member of the team delivering groundbreaking research article related to Sentiment Analysis and NLP during the COVID-19 pandemic enhancing my research experience.",
    },
  ],
  skills: [
    "Python",
    "Flask",
    "PostgresSQL",
    "Javascript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
  ],
  projects: [
    {
      name: "Covid-19 Dashboard",
      techStack: [
        "Side Project",
        "Python",
        "Streamlit",
      ],
      description:
        "A dashboard that provides insights on the Covid-19 pandemic in Kenya",
      link: {
        label: "github.com",
        href: "https://covid19.ke",
      },
      source: null
    },
  ]
} as const