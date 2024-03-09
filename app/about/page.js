import Link from "next/link";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import { SiNextdotjs, SiNextui, SiVercel } from "react-icons/si";
import { MotionH2 } from "../components/motionH2";
import { MotionP } from "../components/motionP";
import { MotionDiv } from "../components/motionDiv";

const ogImage = [
  {
    url: `https://world-countriess.vercel.app/World-countriess.png`,
    width: 1400,
    height: 1080,
    alt: "World Countriess",
  },
];

export const metadata = {
  title: "About",
  url: "https://world-countriess.vercel.app/about",
  description:
    "My main goal in creating this project is to improve my coding skills and add a new project to my portfolio.",
  keywords: [
    "countries",
    "world",
    "World-Countriess",
    "World Countriess",
    "Vercel",
    "Tailwind CSS",
    "Rest Countries API",
    "React-Icons",
    "NextJS",
    "NextUI",
    "world countriess",
    "countries information",
    "country flags",
    "yusifaliyevpro",
    "filmisbest.com",
    "filmisbest",
    "yusifaliyevpro.com",
    "yusifaliyev",
    "yusif",
    "aliyev",
  ],
  openGraph: {
    title: `About | World Countriess`,
    images: ogImage,
    url: `https://world-countriess.vercel.app/about`,
    description:
      "My main goal in creating this project is to improve my coding skills and add a new project to my portfolio.",
    type: "website",
  },
};

const tools = [
  {
    name: "NextJS 14.1.0",
    link: "https://nextjs.org/",
    icon: <SiNextdotjs className="text-7xl" />,
  },
  {
    name: "Vercel Hosting",
    link: "https://vercel.com/",
    icon: <SiVercel className="text-7xl" />,
  },
  {
    name: "Countries API",
    link: "https://restcountries.com/",
    icon: <TbApi className="text-7xl" />,
  },
  {
    name: "NextUI",
    link: "https://nextui.org/",
    icon: <SiNextui className="text-8xl sm:text-7xl" />,
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: <BiLogoTailwindCss className="text-8xl text-[#38bdf8]" />,
  },
  {
    name: "React Icons",
    link: "https://react-icons.github.io/react-icons/",
    icon: <FaReact className="text-8xl text-[#e91e63]" />,
  },
  {
    name: "Framer Motion",
    link: "https://www.framer.com/motion/",
    icon: <TbBrandFramerMotion className="text-8xl" />,
  },
];

export default function About() {
  return (
    <main className="relative flex items-center sm:mx-0 mx-4 justify-center ">
      <div className=" rounded-lg p-12 w-auto sm:w-[800px] gap-y-6 flex relative flex-col">
        <MotionH2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
            duration: 0.5,
          }}
          className="font-bold text-2xl text-center"
        >
          About the Project
        </MotionH2>
        <MotionP
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.8,
            duration: 0.5,
          }}
        >
          My main goal in creating this project is to improve my coding skills
          and add a new project to my portfolio.
        </MotionP>
        <MotionP
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 1.4,
            duration: 0.5,
          }}
        >
          I used the following tools when creating this site.
        </MotionP>
        <div className="tools flex relative my-8 select-none flex-1 flex-col flex-wrap gap-y-8 sm:flex-row gap-x-8 items-center justify-center">
          {tools.map((tool, index) => (
            <MotionDiv
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 0.3,
                delay: 1.8 + (index + 1) * 0.3,
                stiffness: 80,
              }}
            >
              <Link
                target="_blank"
                key={index}
                className="flex flex-col  gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center"
                href={tool.link}
              >
                <p>{tool.name}</p>
                {tool.icon && tool.icon}
                {tool.img && tool.img}
              </Link>
            </MotionDiv>
          ))}
        </div>
        <MotionP
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 4.3,
            duration: 0.6,
          }}
        >
          I got inspiration from this site in design and other things:{" "}
          <Link
            href={"https://rest-api-countries-with-react.netlify.app/"}
            className="text-blue-600 hover:text-blue-800"
          >
            Rest Countries API
          </Link>
        </MotionP>
        <MotionP
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 4.7,
            duration: 0.6,
          }}
        >
          My codes are in my GitHub account:{" "}
          <Link
            className="text-blue-600 hover:text-blue-800"
            href={"https://github.com/YusifAliyevPro/World-Countries"}
          >
            World Countriess Repository
          </Link>
        </MotionP>
      </div>
    </main>
  );
}
