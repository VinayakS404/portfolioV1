import html from "../assets/html-logo.svg";
import css from "../assets/css-logo.svg";
import js from "../assets/js-logo.svg";
import react from "../assets/react-logo.svg";
import tailwind from "../assets/tailwind-logo.svg";
import figma from "../assets/figma-logo.svg";
import java from "../assets/java-logo.png";
import springBoot from "../assets/spring-boot-logo.png";

const rawFrontEndData = [
  {
    name: "html",
    desc: "Structure of web pages",
    img: html,
    bg: "bg-[#6d4c2b]",
  },
  {
    name: "css",
    desc: "Styles website visual layout",
    img: css,
    bg: "bg-[#472f57]",
  },
  {
    name: "JS",
    desc: "Makes websites interactive",
    img: js,
    bg: "bg-[#81812e]",
  },
  {
    name: "React.js",
    desc: "UI-building JS library",
    img: react,
    bg: "bg-[#32555e]",
  },
  {
    name: "Tailwind",
    desc: "Utility-first CSS framework",
    img: tailwind,
    height: "h-6",
    bg: "bg-[#32555e]",
  },
  {
    name: "Figmal",
    desc: "Interface design tool",
    img: figma,
    bg: "bg-[#305522]",
  },
];

const rawBackEndData = [
  {
    name: "Java",
    desc: "Server-side language",
    img: java,
    bg: "bg-[#ffffff]",
  },
  {
    name: "Spring Boot",
    desc: "Java backend framework",
    img: springBoot,
    bg: "bg-[#3a5c30]",
  },
];

export const frontEndData = rawFrontEndData.map((items, index) => ({
  ...items,
  id: `frontend-${items.name}-${index}`,
}));

export const backEndData = rawBackEndData.map((items, index) => ({
  ...items,
  id: `backend-${items.name}-${index}`,
}));
