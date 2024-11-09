import { Icons } from "@/components/icons";
import {BookAIcon, HomeIcon, NotebookIcon, Play} from "lucide-react";
import {GLOBAL_VARIABLES} from "@/data/Enum/global_variable";

const work_email  = "kuangsoonquea@outlook.com";
const about_me    = "I’m an IT professional from Malaysia with a background in tech support, quality assurance, and backend development. My goal is to transition fully into backend development, and I’m currently preparing for roles like Apps Automation Testing Developer. I bring strong freelancing experience and a focus on continuous learning, especially in programming, automation, and data analysis for cryptocurrency trading. Driven by a passion for technology and the pursuit of financial freedom, I’m eager to make a meaningful impact and contribute my skills to a forward-thinking IT team.";
const resume_link = "/resume/Quea Kuang Soon Resume - Sept 2024.pdf"

export const DATA = {
  name          : "Quea Kuang Soon",
  firstName     : "Kuang Soon",
  lastName      : "Quea",
  initials      : "KS",
  resume_link   : resume_link,
  role          : [
    "Software Developer",
    "Quality Assurance",
    "Investor",
    "Trader"
  ],
  url           : "https://www.chiragaggarwal.tech/",
  location      : "Johor, Malaysia",
  locationLink  : "https://maps.app.goo.gl/Zbzok1mCik445h1C6",
  about_me: about_me,
  avatarUrl: "/lime.svg",
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
        url: "www.linkedin.com/in/quea-kuang-soon-959153243",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ks_quea",
        icon: Icons.x,

        navbar: true,
      },
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
      image: "/suraksha-ai.png",
    },
  ],
  positions: [
    {
      title: "Content Writer",
      dates: "July 2024 - Present",
      location: "GeeksForGeeks",
      description:
        "I like to write technical articles for GeeksForGeeks in my past time. Let's me be updated with various kinds of technologies.",
      image: "/gfg.png",
      links: [
        {
          title: "Contributions",
          href: "https://www.geeksforgeeks.org/user/chiragaggarwal5k/contributions/",
        },
      ],
    },
    {
      title: "Summer Immersion Participant",
      dates: "July 2024",
      location: "FPT University, Da Nang, Vietnam",
      description:
        "Participated in a 10-day fully funded Summer Immersion Programme in Vietnam hosted by FPT University, providing rich insights into Vietnamese culture from a entrepreneurship and technological point of view.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_fpt_university.jpg",
      links: [
        {
          title: "Website",
          href: "https://international.fpt.edu.vn/",
        },
        {
          title: "Photos",
          href: "https://www.linkedin.com/posts/bennett-university_bennettuniversity-globalexposure-entrepreneurshipjourney-ugcPost-7232006796473683968-tKMa?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Technical Co-Head",
      dates: "August 2023 - May 2024",
      location: "Computer Society of India, Bennett University",
      description:
        "As the technical co-head of the CSI chapter of my university, I was responsible for organizing various events, workshops, and hackathons. I also mentored and guided students in their technical journey.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s",
      links: [
        { title: "Website", href: "https://csiindia.org/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/csi-india/",
        },
        {
          title: "Welcome Letter",
          href: "https://www.linkedin.com/posts/chiragagg5k_newrole-bennettuniversity-technology-activity-7097467074863636480-M1q6",
        },
      ],
    },
    {
      title: "Rearch Content Management",
      dates: "September 2022 - May 2023",
      location: "Bennett Undergraduate Research Society (BURS)",
      description:
        "The research society peaked my interest in the field of research, allowing me to be guided by seniors to work on various research related projects as well as organizing events like Rescon.",
      image: "/burs.png",
      links: [
        { title: "Website", href: "https://www.burs.bennett.edu.in/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/buresearchsociety/posts/?feedView=all/",
        },
      ],
    },
  ],
} as const;
