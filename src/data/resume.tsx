import { Icons } from "@/components/icons";
import {BookAIcon, HomeIcon, NotebookIcon, Play} from "lucide-react";
import {GLOBAL_VARIABLES} from "@/data/Enum/global_variable";
import {directoryToArray} from "@/utils/directory-to-array";

const work_email      = "kuangsoonquea@outlook.com";
const about_me        =
    "Hi ! I’m a Code Farmer from Malaysia with a background in Software Developer, Software Quality Assurance, and IT Support. " +
    "I strive to craft reliable, user-focused solutions that blend creativity with precision.";
const resume_link     = "/resume/Quea Kuang Soon Resume - Sept 2024.pdf";
const avatar          = "/avatar/ksoon_avatar_mini.jpg";

// about_me = `<!--<div>Hi ! I’m an IT professional from Malaysia with a background in Software Developer, Software Quality Assurance, and IT Support. <br/>My goal is to transition fully into backend development, and I’m currently preparing for roles like Apps Automation Testing Developer.</div>-->`;

export const DATA = {
  name          : "Quea Kuang Soon",
  firstName     : "Kuang Soon",
  lastName      : "Quea",
  initials      : "KS",
  resume_link   : resume_link,
  role          : [
    "Software Developer",
    "Software Quality Assurance",
    // "Investor",
    // "Trader"
  ],
  url           : "https://ksoon-quea.vercel.app/",
  location      : "Johor, Malaysia",
  locationLink  : "https://maps.app.goo.gl/Zbzok1mCik445h1C6",
  about_me: about_me,
  avatarUrl: avatar,
  skills: [
      "Laravel Framework",
      "JavaScript",
      "Python",
      "Kotlin",
      "MySQL",
      "Docker",
      "Next.js",
      "System Architecture Design",
      "Notion",
      "Jira",
      "Task Management"
  ],
  talking_language: [
      {
        "name"  : "English",
        "level" : "Limited working proficiency",
      },
      {
        "name"  : "Mandarin",
        "level" : "Native or bilingual proficiency",
      },
      {
        "name"  : "Malay",
        "level" : "Elementary proficiency",
      },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/portfolio", icon: BookAIcon, label: "Portfolio" },
  ],
  contact: {
    email: work_email,
    tel: "+60 108099587",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KsoonQuea",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/quea-kuang-soon-959153243/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/ks_quea",
      //   icon: Icons.x,
      //
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: `mailto: ${work_email}`,
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Singcomm",
      badges: [],
      href: "https://www.clearmind.plus/",
      work_type: GLOBAL_VARIABLES.work_type[2],
      work_mode: GLOBAL_VARIABLES.work_mode[1],
      title: "Software QA Specialist, IT Support",
      logoUrl: "/company_logo/singcomm_logo.png",
      start: "September 2023",
      end: "August 2024",
      description:
        `● System Testing: Conduct systematic routine testing to ensure system integrity at each stage
        ● Project Coordination: Utilize project management tools (Notion, Jira, Spreadsheets) for cross-departmental
        communication and tracking.
        ● Data Management: Develop python scripts for data organization, manipulation, and Excel export
        ● Quality Control: Maintain high standards of task completion and system quality
        `,
      links: [
        {
          type: "Website",
          href: "https://www.clearmind.plus/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Letter of Recommendation",
          href: "https://drive.google.com/file/d/1cgXwtu__St6bJzZNiq7SId0kWw5UVdPc/view?usp=sharing",
          icon: <Icons.email className="size-3" />,
        },
      ],
    },
    {
      company: "Techweiser",
      badges: [],
      href: "https://marslab.com.my/",
      work_type: GLOBAL_VARIABLES.work_type[0],
      work_mode: GLOBAL_VARIABLES.work_mode[0],
      title: "Backend Developer",
      logoUrl: "/company_logo/techweiser_logo.png",
      start: "October 2022",
      end: "June 2023",
      description:
        `● API Development: Constructure API for POS System using Laravel framework and Postman for testing
          ● Backend Management: Built Admin Portal for inventory management and product oversight.
          ● System Architecture: Developed the long-term E-commerce system with the POS system.
        `,
      links: [
        {
          type: "Website",
          href: "https://www.clearmind.plus/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Letter of Recommendation",
          href: "https://drive.google.com/file/d/1cgXwtu__St6bJzZNiq7SId0kWw5UVdPc/view?usp=sharing",
          icon: <Icons.email className="size-3" />,
        },
      ],
    },
    {
      company: "Asia Ocean Tech",
      href: "https://oceanlabs.asia/",
      badges: [],
      work_type: GLOBAL_VARIABLES.work_type[0],
      work_mode: GLOBAL_VARIABLES.work_mode[0],
      title: "Web App Developer",
      logoUrl: "/company_logo/aot_logo.png",
      start: "March 2021",
      end: "September 2022",
      description:
        `● Internal Management Systems: Customized and designed client-specific systems using Laravel, including:
            ○ HR & Accounting System of Lawyer Firm
            ○ Loan Case Submission System of Financial Company
            ○ Content Management System (CMS)
        ● Mobile Development: Developed Mobile Tracking System using Kotlin
        ● Team Leadership: Led and collaborated with interns in some system development projects
        `,
      links: [
        {
          type: "Website",
          href: "https://skillarena.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Letter of Recommendation",
          href: "https://drive.google.com/file/d/1ONCudngptfuLZuR7hjSinbvVSr7fEnbd/view?usp=sharing",
          icon: <Icons.email className="size-3" />,
        },
      ],
    },
  ],
  education: [
    {
      school  : "Multimedia University (MMU) Malacca",
      href    : "https://www.mmu.edu.my/",
      major   : "Diploma in Information Technology",
      cgpa    : "3.84",
      logoUrl : "/edu_logo/mmu_logo.png",
      start   : "July 2019",
      end     : "June 2021",
    }
  ],

  portfolios: [
    {
      title: "Financial Case Submission System",
      description: ``,
      technologies: ["Laravel", "Alpine.js", "Tailwind CSS", "Bootstrap CSS", "JQuery", "JavaScript"],
      main_image: "/portfolio/nexus-portfolio/nexus-dashboard.png",
      content_images: directoryToArray("public/portfolio/nexus-portfolio")
    },
    {
      title: "Watch POS System (Admin Portal & API)",
      description: "",
      technologies: ["Laravel", "Livewire", "Tailwind CSS", "Bootstrap CSS", "Restful API", "Postman", "JQuery", "JavaScript"],
      main_image: "/portfolio/westime-portfolio/wt-dashboard.png",
      content_images: directoryToArray("public/portfolio/westime-portfolio")
    },
    {
      title: "Mobile Case Tracking System",
      description: "",
      technologies: ["Laravel", "Restful API", "Kotlin", "Postman", "Swagger UI"],
      main_image: "/portfolio/propest-portfolio/pp-pending.jpg",
      content_images: directoryToArray("public/portfolio/propest-portfolio"),
    },
    {
      title: "Lawyer Case Submission & Internal Management System ",
      description: "",
      technologies: ["PHP", "Bootstrap CSS", "JavaScript"],
      main_image: "/portfolio/lawyer-portfolio/lwy-case-list-2.png",
      content_images: directoryToArray("public/portfolio/lawyer-portfolio"),
    },
  ],

  projects: [
    {
      title: "Quea Garden Management",
      href: "https://github.com/KsoonQuea/queagarden",
      dates: "",
      active: true,
      description:
        "Internal Management System of Open Billing",
      technologies: ["Laravel", "Filament PHP", "Livewire", "Tailwind js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/KsoonQuea/queagarden",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio/queagarden-preview.png",
    },
  ],
} as const;
