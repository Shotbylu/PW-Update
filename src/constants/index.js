import {
  mobile,
  backend,
  creator,
  web,
  cinema,
  moteur,
  opencv1,
  medal,
  robot,

  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  linux,
  spring,
  pytorch,
  c,
  csharp,
  flutter,
  angular,
  python,
  java,
  docker,

  ipeit,
  tt,
  enit,
  g2foss,
  bac,

  ai,
  genai,
  dlintro,
  dlint,
  mlsup,
  mlintro,
  ccna,

  cp,
  golden,
  vmate,
  clo,
  ps,
  pr,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "exp",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },

  {
    id: "associative",
    title: "Certifications",
  },
  {
    id: "social",
    title: "Social",
  },
  {
    id: "others",
    title: "Other Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "AI",
    icon: backend,
  },
  {
    title: "Machine Learning / DeepLearning",
    icon: web,
  },
  {
    title: "Data Science ",
    icon:creator,
  },
];

const technologies = [
   {
    name: "python",
    icon: python,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "java",
    icon: java,
  }, 

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "typeScript",
    icon: typescript,
  },
  {
    name: "react JS",
    icon: reactjs,
  },
  {
    name: "linux",
    icon: linux,
  },

  {
    name: "node",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Coporate Communications Specialist",
    company_name: "SASOL ",
    icon: bac,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Present",
    points: ["Sandton, Gauteng ", "Hybrid", "Check my LinkedIn for more details"]
  },
  {
    title: "End-User Computing Specialsit",
    company_name: "SOUTH32-Hillside",
    icon: ipeit,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Jun 2024",
    points: ["Richardsbay, KZN ",
      "On Site",
      "Check my LinkedIn for more details"
    ],
  },
  {
    title: "Media & Marketing Officer",
    company_name: "Empangeni High School",
    icon: enit,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jul 2023",
    points: ["Empangeni, KZN",
      "On Site",     
      "Check my LinkedIn for more details"
    ],
  },
  {
    title: "Customer Service Advisor",
    company_name: "CCI Global",
    icon: g2foss,
    iconBg: "#E6DEDD",
    date: "April 2019 - October 2021",
    points: ["Durban, KZN.",
      "On Site",
      "Check my LinkedIn for more details"
    ],
  },
  {
    title: "Volunteer ",
    company_name: "Life Line",
    icon: tt,
    iconBg: "#E6DEDD",
    date: "July 2018",
    points: ["Arboretum, KZN.",
      "On Site",
      ,"Check my LinkedIn for more details",
    ],
  },
];

const testimonials = [
  ""
];

const projects = [
  {
    name: "Visual-Lab",
    description:
"Visual Lab is a user-friendly tool that allows data scientists to upload datasets, automatically visualize and profile them, and build, train, and download machine learning models for regression and classification tasks, all without needing to write code. ",    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Visualisation",
        color: "pink-text-gradient",
      },
    ],
    image: moteur,
    source_code_link: "https://www.linkedin.com/posts/lungelo-sibisi-6745aa21b_webappdevelopment-datavisualization-mlprojects-activity-7266689717465743360-ToQx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdwXTgBHE8qq_054W6KCh8JNRX-M8NBYKE",
  },

  {
    name: "Blog AP",
    description:
"My personal blog, built with Next.js and Tailwind CSS, simplifies sharing coding insights through Bits-of-Codes. It renders markdown content seamlessly, supports dark mode, and streamlines writing and publishing posts.",    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Techblog",
        color: "pink-text-gradient",
      },
    ],
    image: cinema ,
    source_code_link: "https://blog-app-theta-ebon.vercel.app/",
  },
  {
    name: "Computer Vision Motion-Controlled Ping Pong",
    description:"A motion-controlled Ping Pong game that uses real-time computer vision and motion detection—no controllers needed! its fun and interactive.",    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Opencv",
        color: "green-text-gradient",
      },
      {
        name: "supervised learning",
        color: "pink-text-gradient",
      },
    ],
    image: medal,
    source_code_link: "https://www.linkedin.com/posts/lungelo-sibisi-6745aa21b_my-latest-project-a-ping-pong-game-that-activity-7300142208844730369-9p9E?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdwXTgBHE8qq_054W6KCh8JNRX-M8NBYKE",
  },
  {
    name: "Hand Gesture-Based Zoom with OpenCV",
    description:
"This project shows a zoom effect via hand gestures with OpenCV and cvzone.HandTrackingModule. Users alter image size live using a webcam. Zoom triggers when both hands appear, with set finger combos.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "cvzone.HandTrackingModule",
        color: "pink-text-gradient",
      },
    ],
    image: opencv1,
    source_code_link: "https://github.com/Shotbylu/Computer-vision-motion-detection-zoom",
  },
  {
    name: "E-commerce Website (FullStack)",
    description:
"Sibisi & Co is a dynamic e-commerce platform leveraging Angular and Spring Boot. It offers seamless shopping with a sleek UI, secure transactions, and scalable architecture. Users enjoy real-time updates, smooth navigation, and personalized experiences.",    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: robot,
    source_code_link: "https://github.com/Shotbylu/E-commerce-website-FullStack-",
  },
  
];




const works = [
  {
    name: "Statistics 101",
    description:
"IBM",
    tags: [
      {
        name: "Descriptive Statistics",
        color: "blue-text-gradient",
      },
    ],
    image: mlintro,
    source_code_link: "https://www.credly.com/users/lungelo-sibisi",
  },

  {
    name: "Deep Learning using TensorFlow",
    description:"IBM"   ,
     tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },


    ],
    image: mlsup ,
    source_code_link: "https://www.credly.com/users/lungelo-sibisi",
  },
  {
    name: " Cloud Computing Fundamentals",
    description:"IBM"   ,
     tags: [
      {
        name: "Cloud Computing",
        color: "blue-text-gradient",
      },
      {
        name: "Cloud Kubernetes Service ",
        color: "green-text-gradient",
      },


    ],
    image: dlintro ,
    source_code_link: "https://www.credly.com/users/lungelo-sibisi",
  },
  {
    name: "Machine Learning Foundations: Statists",
    description:"LinkedIn Learning "   ,
     tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },


    ],
    image: dlint ,
    source_code_link: "https://www.credly.com/users/lungelo-sibisi",
  },
  {
    name: "Marketing Insider",
    description:"LinkedIn Marketing Labs"   ,
     tags: [
      {
        name: "Marketing",
        color: "blue-text-gradient",
      },
    ],
    image: ai ,
    source_code_link: "https://www.credly.com/users/lungelo-sibisi",
  },
  {
    name: "Learning Data Analytics: 1 Foundations",
    description:"LinkedIn Learning."   ,
     tags: [
      {
        name: "Data analytics",
        color: "blue-text-gradient",
      },
      {
        name: "Fundementals",
        color: "green-text-gradient",
      },


    ],
    image: ccna ,
    source_code_link: "https://www.credly.com/users/lungelo-sibisi",
  },
  {
    name: "Advance Kubernetes Operators ",
    description:"IBM"   ,
     tags: [
      {
        name: "Genai",
        color: "blue-text-gradient",
      },
      {
        name: "GANs",
        color: "green-text-gradient",
      },


    ],
    image: genai ,
    source_code_link: "https://www.credly.com/users/lungelo-sibisi",
  },

  ];
  

  const social = [
    {
      name: "SASOL Siyakha Solar Energy Initiative Campaign. ",
      description:
  "Spearheaded communications efforts for the Sasol Siyakha Solar Energy Campaign, promoting renewable energy adoption among SMEs. Developed compelling messaging and marketing materials to highlight the campaign’s impact on small business sustainability. Engaged stakeholders through targeted outreach, ensuring alignment with Sasol’s Enterprise & Supplier Development (ESD) objectives.",
      tags: [
        {
          name: "Communications",
          color: "blue-text-gradient",
        },
      ],
      image: cp,
      source_code_link: "https://github.com/",
    },
  
    {
      name: " Enterprise & Supplier Development (ESD) Awareness Campaign. ",
      description:"Collaborated with design teams to refresh branding elements, including digital assets, presentations, and marketing materials. Created compelling content for internal and external stakeholders, effectively communicating the value of ESD initiatives. Developed and executed a strategic communication plan to reposition ESD, ensuring alignment with Sasol’s broader business objectives. "   ,
       tags: [
        {
          name: "Marketing",
          color: "blue-text-gradient",
        },
        {
          name: "PR",
          color: "green-text-gradient",
        },
  
  
      ],
      image:  golden ,
      source_code_link: "https://github.com/",
    },
    {
      name: "Women in Engineering Programme. ",
      description:"Crafted messaging that highlighted the importance of women in engineering, sharing inspiring stories and industry insights. played a crucial role in organizing the event, ensuring a well-structured agenda that included keynote speeches, panel discussions, and networking sessions. ensured seamless event logistics, coordinated with speakers, and managed audience engagement on the day."   ,
       tags: [
        {
          name: "Women in Engineering",
          color: "blue-text-gradient",
        },
        {
          name: "Champaign",
          color: "green-text-gradient",
        },
  
      ],
      image:  vmate ,
      source_code_link: "https://github.com/",
    }

  
    ];


  const skills = [
      {
        name: "Photoshop",
        icon: ps,
      },
      {
        name: "PremierePro",
        icon: pr,
      },
      {
        name: "CLO3D",
        icon: clo,
      },
]

export { services, technologies, experiences, testimonials, projects , social  , works , skills};
