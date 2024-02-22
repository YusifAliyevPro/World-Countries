import Link from "next/link";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

export const metadata = {
  title: "About",
  url: "https://countries-of-world.vercel.app/about",
  description:
    "My main goal in creating this project is to improve my coding skills and add a new project to my portfolio.",
  keywords: [
    "countries",
    "world",
    "Vercel",
    "Tailwind CSS",
    "Rest Countries API",
    "React-Icons",
    "NextJS",
    "NextUI",
    "world countries",
    "countries information",
    "country flags",
    "World Countries.com",
    "yusifaliyevpro",
    "yusifaliyevpro.com",
    "yusifaliyev",
    "yusif",
    "aliyev",
  ],
  openGraph: {
    title: `About | World Countries`,
    url: `https://countries-of-world.vercel.app/about`,
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
          <Link target="_blank" href={"https://nextjs.org/"}>
            <div className="flex flex-col gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center">
              <p>NextJS 14.1.0</p>
              <img src="/next.svg" alt="NextJS Logo" width={80} height={80} />
            </div>
          </Link>
          <Link target="_blank" href={"https://vercel.com/"}>
            <div className="flex flex-col gap-y-5 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center">
              <p>Vercel Hosting</p>
              <img src="/vercel.svg" alt="Vercel Logo" width={80} height={80} />
            </div>
          </Link>
          <Link target="_blank" href={"https://restcountries.com/"}>
            <div className="flex flex-col gap-y-3 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center">
              <p>Countries API</p>
              <TbApi className="text-7xl" />
            </div>
          </Link>
          <Link target="_blank" href={"https://nextui.org/"}>
            <div className="flex flex-col gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center">
              <p>NextUI</p>
              <img src="/nextui.png" alt="NextUI Logo" width={80} height={80} />
            </div>
          </Link>
          <Link target="_blank" href={"https://tailwindcss.com/"}>
            <div className="flex flex-col gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center">
              <p>Tailwind CSS</p>
              <BiLogoTailwindCss className="text-8xl text-[#38bdf8]" />
            </div>
          </Link>
          <Link
            target="_blank"
            href={"https://react-icons.github.io/react-icons/"}
          >
            <div className="flex flex-col gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center">
              <p>React Icons</p>
              <FaReact className="text-8xl text-[#e91e63]" />
            </div>
          </Link>
        </div>
        <p>
          I got inspiration from this site in design and other things:{" "}
          <Link
            href={"https://rest-api-countries-with-react.netlify.app/"}
            className="text-blue-600 hover:text-blue-800"
          >
            Rest API Countries
          </Link>
        </p>
        <p>
          My codes are in my GitHub account:{" "}
          <Link
            className="text-blue-600 hover:text-blue-800"
            href={"https://github.com/YusifAliyevPro/World-Countries"}
          >
            World Countries Repository
          </Link>
        </p>
      </div>
    </main>
  );
}
