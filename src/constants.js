// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import w3schoolsLogo from "./assets/company_logo/w3schools.png";
import mdnLogo from "./assets/company_logo/mdn.jpg";

// Education Section Logo's
import vbuLogo from "./assets/education_logo/vbu.jpg";
import collegeLogo from "./assets/education_logo/markham-college.jpg";
import schoolLogo from "./assets/education_logo/school.jpg";
import adcaLogo from "./assets/education_logo/adcaLogo.webp";

// Project Section Logo's
import countriesImage from "./assets/work_logo/countries.png";
import weatherImage from "./assets/work_logo/Weather.png";
import bbcNewsImage from "./assets/work_logo/bbc-news.png";
import todoList from "./assets/work_logo/TodoList.jpg";
import employeeImage from "./assets/work_logo/employee.png";
import expenseImage from "./assets/work_logo/Expense.jpg";
import plantImage from "./assets/work_logo/plant-project.jpg";
import ShoppingLogo from "./assets/work_logo/react-cart.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "React JS", logo: reactjsLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: w3schoolsLogo,
    role: "Frontend Developer",
    company: "Personal Projects",
    date: "2025 - Present",
    desc: "Built responsive and modern web applications using HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and REST APIs. Developed projects with a focus on clean UI, responsive design, reusable components, and performance optimization.",
    skills: [
      "HTML",
      "CSS3",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "REST API",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 1,
    img: mdnLogo,
    role: "Frontend Developer",
    company: "Self Learning",
    date: "July 2024 - March 2025",
    desc: "Created multiple frontend projects including a Portfolio Website, Country Explorer, Weather App, and News Website. Gained hands-on experience in API integration, responsive web design, and modern React development.",
    skills: [
      "ReactJS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "Vite",
      "Postman",
      "Figma",
      "VS Code",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: vbuLogo,
    school: "Vinoba Bhave University, Hazaribagh (JH)",
    date: "2021 - 2024",
    grade: "Completed",
    degree: "Bachelor of Arts (B.A.)",
    desc: "Completed my Bachelor of Arts from Vinoba Bhave University, Hazaribagh. During my graduation, I developed strong analytical, communication, and problem-solving skills while also focusing on web development and modern frontend technologies through self-learning and hands-on projects.",
  },
  {
    id: 1,
    img: collegeLogo,
    school: "Markham College of Commerce, Hazaribagh",
    date: "2019 - 2021",
    grade: "74.4%",
    desc: "Completed Higher Secondary education with Commerce stream. Built a strong foundation in business studies, economics, and computer applications while developing an interest in programming and web technologies.",
    degree: "Higher Secondary (12th)",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Amoli Apurva High School Mangarh Chouparan",
    date: "Apr 2018 - March 2019",
    grade: "60%",
    desc: "Completed Secondary School education with a solid academic foundation. Developed discipline, teamwork, and problem-solving skills that motivated me to pursue a career in technology and software development.",
    degree: "Secondary School (10th)",
  },
  {
    id: 3,
    img: adcaLogo,
    school: "Computer Zone Institute",
    date: "2020",
    grade: "Completed",
    degree: "Advanced Diploma in Computer Applications (ADCA+)",
    desc: "Successfully completed ADCA+ certification, gaining practical knowledge of MS Office, computer fundamentals, internet applications, and basic programming concepts. This course sparked my interest in web development and software engineering.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Country Explorer",
    description:
      "A React-based web application that allows users to explore countries around the world. Users can search countries, view capitals, populations, regions, currencies, flags, and other useful information through REST API integration.",
    image: countriesImage,
    tags: [
      "React JS",
      "REST API",
      "JavaScript",
      "Tailwind Css",
      "HTML5",
      "CSS3",
    ],
    github: "https://github.com/Vicky-Gupta-Dev/countries.git",
    webapp: "https://countries-explorer-vicky.netlify.app/",
  },
  {
    id: 1,
    title: "Weather App",
    description:
      "A responsive weather application that provides real-time weather information using a weather API. Users can search any city and view temperature, humidity, wind speed, and weather conditions.",
    image: weatherImage,
    tags: ["React JS", "Weather API", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 2,
    title: "BBC News Clone",
    description:
      "A responsive BBC News homepage clone built using React.js and Tailwind CSS. The project recreates the modern layout of the BBC website, featuring a responsive navigation bar, hero news section, category-based news cards, and a clean user interface. This project was developed to practice responsive web design, component-based architecture, and frontend development skills.",
    image: bbcNewsImage,
    tags: [
      "React JS",
      "Tailwind CSS",
      "News API",
      "REST API",
      "JavaScript",
      "Responsive Design",
    ],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "A clean and responsive task management application that allows users to add, edit, complete, and delete daily tasks. Built with React.js using reusable components and state management.",
    image: todoList,
    tags: ["JavaScript", "React.js", "Tailwind CSS", "HTML5", "CSS3"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 4,
    title: "Employee Management System",
    description:
      "A modern employee management system built with React.js that allows administrators to manage employee records efficiently. The application includes features such as adding, updating, deleting, searching, and filtering employees with a clean and responsive user interface.",
    image: employeeImage,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "CRUD",
      "Local Storage",
    ],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A personal finance application that helps users track income and expenses. It provides transaction history, balance calculation, and an intuitive dashboard for better financial management.",
    image: expenseImage,
    tags: [
      "React JS",
      "Tailwind CSS",
      "Chart.js",
      "JavaScript",
      "Local Storage",
    ],
    github: "https://github.com/Vicky-Gupta-Dev/react-web-app.git",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 6,
    title: "Plant Website",
    description:
      "A modern and responsive plant e-commerce website built using React.js and Tailwind CSS. The website showcases a variety of indoor and outdoor plants with attractive product cards, category filters, search functionality, and a clean user interface. Designed to provide a smooth and engaging shopping experience across all devices.",
    image: plantImage,
    tags: [
      "React JS",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Javascript",
      "Responsive Design",
      "UI/UX",
    ],
    github: "https://github.com/Vicky-Gupta-Dev/plant-website-tailwind.git",
    webapp: "https://plant-website-tailwind-store.vercel.app/",
  },
  {
    id: 7,
    title: "Shopping Website",
    description:
      "A modern and fully responsive e-commerce shopping website built with React.js, Redux Toolkit, and Tailwind CSS. The application allows users to browse products, search items, filter by categories, add products to the shopping cart, update quantities, and remove items from the cart. It provides a clean, user-friendly interface with efficient state management and a seamless shopping experience across all devices.",
    image: ShoppingLogo,
    tags: [
      "React JS",
      "Redux Toolkit",
      "Javascript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "REST API",
      "Responsive Design",
    ],
    github: "https://github.com/Vicky-Gupta-Dev/Redux-Toolkit-Practice.git",
    webapp: "https://react-cart-by-vicky.netlify.app/",
  },
];
