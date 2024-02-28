import Link from "next/link";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiNextdotjs, SiNextui, SiVercel } from "react-icons/si";

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

export default function About() {
  return (
    <main className="relative flex items-center sm:mx-0 mx-4 justify-center ">
      <div className=" rounded-lg p-12 w-auto sm:w-[800px] gap-y-6 flex relative flex-col">
        <h2 className="font-bold text-2xl text-center">About the Project</h2>
        <p>
          My main goal in creating this project is to improve my coding skills
          and add a new project to my portfolio.
        </p>
        <p>I used the following tools when creating this site.</p>
        <div className="tools flex relative my-8 select-none flex-1 flex-col flex-wrap gap-y-8 sm:flex-row gap-x-8 items-center justify-center">
          <Link
            target="_blank"
            className="flex flex-col  gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center"
            href={"https://nextjs.org/"}
          >
            <p>NextJS 14.1.0</p>
            <SiNextdotjs className="text-7xl" />
          </Link>
          <Link
            target="_blank"
            className="flex flex-col  gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center"
            href={"https://vercel.com/"}
          >
            <p>Vercel Hosting</p>
            <SiVercel className="text-7xl" />
          </Link>
          <Link
            target="_blank"
            className="flex flex-col  gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center"
            href={"https://restcountries.com/"}
          >
            <p>Countries API</p>
            <TbApi className="text-7xl" />
          </Link>
          <Link
            target="_blank"
            className="flex flex-col gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center"
            href={"https://nextui.org/"}
          >
            <p>NextUI</p>
            <SiNextui className="text-8xl sm:text-7xl" />
          </Link>
          <Link
            target="_blank"
            className="flex flex-col  gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center"
            href={"https://tailwindcss.com/"}
          >
            <p>Tailwind CSS</p>
            <BiLogoTailwindCss className="text-8xl text-[#38bdf8]" />
          </Link>
          <Link
            target="_blank"
            className="flex flex-col  gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center"
            href={"https://react-icons.github.io/react-icons/"}
          >
            <p>React Icons</p>
            <FaReact className="text-8xl text-[#e91e63]" />
          </Link>
        </div>
        <p>
          I got inspiration from this site in design and other things:{" "}
          <Link
            href={"https://rest-api-countries-with-react.netlify.app/"}
            className="text-blue-600 hover:text-blue-800"
          >
            Rest Countries API
          </Link>
        </p>
        <p>
          My codes are in my GitHub account:{" "}
          <Link
            className="text-blue-600 hover:text-blue-800"
            href={"https://github.com/YusifAliyevPro/World-Countries"}
          >
            World Countriess Repository
          </Link>
        </p>
      </div>
    </main>
  );
}
