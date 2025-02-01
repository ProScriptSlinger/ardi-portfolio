import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import EmailIcon from "./../public/assets/icons/email.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "C#",
      icon: "/assets/tech/c-32.png",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Rust",
      icon: "/assets/tech/rust-programming-language-48.png",
      link: "https://doc.rust-lang.org/book/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    // {
    //   name: "Java",
    //   icon: "/assets/tech/java.svg",
    //   link: "https://www.java.com/en/",
    // },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    // {
    //   name: "PHP",
    //   icon: "/assets/tech/php.png",
    //   link: "https://www.php.net/",
    // },
  ],
  frameworks: [
    {
      name: "AngularJS",
      icon: "/assets/tech/angular-50.png",
      link: "https://docs.angularjs.org/guide",
    },
    {
      name: ".NET Core",
      icon: "/assets/tech/net-framework-50.png",
      link: "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-9.0",
    },
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Yarn",
      icon: "/assets/tech/yarn.svg",
      link: "https://yarnpkg.com/",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org/docs/",
    },
  ],
};

const experiences = [
  {
    title: "Lead Full Stack Developer",
    company_name: "Solar Enterprises",
    icon: "/assets/company/solar.png",
    iconBg: "#E6DEDD",
    date: "June 2021 - November 2024",
    points: [
      "Web Development: Developed scalable web applications and RESTful APIs using Angular, Nest.js, and ASP.NET.",
      "Front-end Technologies: Proficient in HTML5, Tailwind CSS, and Bootstrap for building engaging user interfaces.",
      "Back-end Expertise: Experienced in C#, implementing security measures, authentication, and authorization.",
      "Architectural Patterns: Utilized CQRS design patterns to enhance system responsiveness and performance.",
      "DevOps Practices: Integrated CI/CD with Jenkins and Git for automated deployments on AWS and Google App Engine.",
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "BORN",
    icon: "/assets/company/born.png",
    iconBg: "#E6DEDD",
    date: "April 2019 - May 2021",
    points: [
      "Client Engagement: Collaborated with stakeholders to gather requirements and estimate user stories for functional specifications.",
      "Full-Stack Development: Developed sub-applications using Nest.js (backend) and Angular (frontend), employing TypeScript, HTML5, CSS, and Bootstrap.",
      "Database Management: Crafted complex SQL queries and implemented stored procedures, triggers, and views robustly within the application stack.",
      "API Integration: Integrated SOAP/REST services, adapting bindings for diverse client needs, and optimized applications for RESTful API functionality.",
      "Testing and Support: Conducted thorough testing, including unit tests, and provided support for production issues during deployments.",
    ],
  },

  {
    title: "Backend Developer",
    company_name: "Civis Analytics",
    icon: "/assets/company/civis.png",
    iconBg: "#E6DEDD",
    date: "May 2019 - March 2019",
    points: [
      "Requirements Gathering: Collaborated with the team to understand software application requirements and contributed to design and architecture.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
      "Played a crucial role in promoting TATA Motors events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
      "Actively engaged with the TATA Motors community, assisted in workshops, and contributed to planning and managing TATA Motors events, ensuring their success and growth.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Creador Design",
    description:
      "Creadoor is a two-sided online marketplace where you can find content producers and bloggers to promote your brand or business. At the same time, content producers can create their accounts on the platform and meet their clients there.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "white-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "ASP.NET Core",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/creador.png",
    source_code_link: "#",
    deployed_link: "https://creadoor.pl/en/",
  },
  {
    name: "Amazon Website",
    description:
      "Creating an Amazon Clone using HTML, CSS, and JavaScript involves several steps to replicate the look and functionality of the Amazon website. Here is a brief overview of the process:",
    tags: [
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/amazon.jpg",
    source_code_link: "#",
    deployed_link: "https://ProScriptSlinger.github.io/Amazon/",
  },
  {
    name: "OllaBot",
    description:
      "In this project we will create a virtual girlfriend chatbot, but feel free to use what you'll learn to build your own support assistant, language teacher, or any ideas you have in mind!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "orange-text-gradient",
      },
      {
        name: "ASP.NET Core",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/olla-bot.jpg",
    source_code_link: "#",
    deployed_link: "https://www.ollabot.com/",
  },
  {
    name: "Solana Trading ",
    description:
      "Guess2Gain is a play-to-earn game on the Solana blockchain where players earn cryptocurrency by accurately predicting Bitcoin price movements. Combining fun gameplay with strategic forecasting, it offers an engaging way to interact with the crypto market.",
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "Solana",
        color: "green-text-gradient",
      },
      {
        name: "gRPC",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "TelegramApi",
        color: "white-text-gradient",
      },
    ],
    image: "/assets/projects/solana-trading.jpg",
    source_code_link: "#",
    deployed_link: "https://guess2gain.com/",
  },
  {
    name: "nopCommerce",
    description:
      "nopCommerce is a leading eCommerce platform and the most popular ASP.NET Core shopping cart. It has been actively developed since 2008, boasting over 3 million downloads and a vibrant community of more than 250,000 developers. With support for multiple databases, cross-platform functionality, and features like multi-factor authentication, nopCommerce provides a robust solution for building and customizing online stores.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET Core",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/nopcommerce.png",
    source_code_link: "#",
    deployed_link: "https://demo.nopcommerce.com/",
  },
  {
    name: "Responsive Construction Website",
    description:
      "Responsive Construction Website Design Using HTML CSS And JavaScript - Contains animations when scrolling. - Smooth scrolling in each section. - Developed first with the Mobile First methodology, then for desktop. - Compatible with all mobile devices and with a beautiful and pleasant user interface.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/construction.png",
    source_code_link: "#",
    deployed_link:
      "https://satyamshorrf.github.io/Responsive-Construction-Website/",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/ProScriptSlinger",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/ardy-usanto-335835348/",
  },
  {
    id: "email",
    icon: <EmailIcon />,
    link: "mailto:ardyusanto@gmail.com",
  },
];

const heroTexts = [
  "Full-Stack .NET Developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "DevOps Engineer",
  500,
  "Quality Engineer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
