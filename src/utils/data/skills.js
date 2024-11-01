// react icons
import {
  SiApollographql,
  SiKotlin,
  SiJest,
  SiAdobeaftereffects,
} from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoGithub,
} from "react-icons/io5";
import { FaDocker, FaJava, FaFigma } from "react-icons/fa6";
import { BsFiletypeJson } from "react-icons/bs";

const skills = [
  {
    name: "Java",
    type: "Kotlin",
    icon: SiKotlin,
    color: "#00BFFF",
    information:
      "With Java, I build robust and scalable applications, ensuring maintainability through clean object-oriented design and efficient memory management",
  },
  {
    name: "Python",
    type: "language",
    color: "#FFD43B",
    icon: IoLogoPython,
    information:
      "Using Python, I develop versatile applications, prioritizing readability and efficiency while leveraging its extensive libraries for everything from web development to data analysis",
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    type: "Vanilla, JQuery, Handlebars.js",
    color: "#F7DF1E",
    information:
      "I craft dynamic web experiences using JavaScript, enhancing user engagement through interactive features and ensuring seamless performance with optimized, clean code",
  },
  {
    name: "HTML5",
    icon: IoLogoHtml5,
    color: "#E34F26",
    type: "Semantic Markup",
    information:
      "HTML goes beyond simple markup—it's the backbone for an inclusive web. I structure content thoughtfully to ensure universal accessibility for all users.",
  },
  {
    name: "JSON",
    icon: BsFiletypeJson,
    color: "#5E9B37",
    type: "language",
    information:
      "Working with JSON, I effectively manage data interchange between systems, ensuring a lightweight and human-readable format for seamless integration and efficient API communication.",
  },
  {
    name: "JavaScript Framework",
    icon: IoLogoReact,
    type: "React.js, Vue.js ",
    color: "#61DAFB",
    information:
      "Leveraging modern frameworks like React and Vue, I build scalable user interfaces by harnessing components, managing state effectively, and utilizing virtual DOM for smooth, seamless web applications.",
  },
  {
    name: "Node.js",
    icon: IoLogoNodejs,
    color: "#8CC84B",
    type: "Express",
    information:
      "Utilizing Node.js, I build high-performance server-side applications, taking advantage of its non-blocking architecture to handle multiple connections efficiently and create real-time experiences.",
  },
  {
    name: "CSS3",
    icon: IoLogoCss3,
    color: "#1572B6",
    type: "Animation, Sass, Bootstrap",
    information:
      "I use pixels to create visually encapturing details polished for aligned, captivating designs for excellent user flow and experience.",
  },
  {
    name: "Apollo GraphQL",
    icon: SiApollographql,
    color: "#E4315D",
    type: "framework",
    information:
      "I utilize Apollo GraphQL to efficiently manage data fetching and state management in modern applications, providing a seamless experience between the client and server.",
  },
  {
    name: "Git",
    icon: IoLogoGithub,
    color: "#181717",
    type: "Gitlab, Github",
    information:
      "While not a DevOps specialist, I’m proficient with Git, using it to manage code efficiently, collaborate seamlessly, and maintain a clean project history.",
  },
  {
    name: "DevOps Tools",
    icon: FaDocker,
    color: "#2496ED",
    type: "Docker, Nginx, AWS",
    information:
      "I leverage Docker for containerization, Nginx for efficient web server management, and AWS for scalable cloud solutions, ensuring robust and flexible infrastructure for applications.",
  },
  {
    name: "Jest",
    icon: SiJest,
    type: "Testing",
    color: "#C21325",
    information:
      "I use Jest to ensure the reliability of my applications through comprehensive testing, enabling me to identify issues early and maintain high-quality code.",
  },
  {
    name: "Design Tools",
    icon: FaFigma,
    color: "#F24E1E",
    type: "Figma, PhotoShop, Spline.Design, Canva, Notion",
    information:
      "Though not a full-time UI designer, I have a strong eye for aesthetics and design. I create visually appealing, intuitive interfaces that enhance user experience using these design tools.",
  },
  {
    name: "Animation",
    icon: SiAdobeaftereffects,
    color: "#7A7BFF",
    type: "GSAP, Three.js, Adobe AfterEffects",
    information:
      "I utilize GSAP to create smooth, high-performance animations that enhance user engagement and improve the overall visual experience of web applications.",
  },
];

export default skills;
