import Link from "next/link";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import { SiNextdotjs, SiNextui, SiVercel } from "react-icons/si";
import { MotionH2 } from "../components/motionH2";
import { MotionP } from "../components/motionP";
import { MotionDiv } from "../components/motionDiv";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { baseURL } from "../lib/bases";

const ogImage = [
  {
    url: `https://world-countriess.vercel.app/World-countriess.png`,
    width: 1400,
    height: 1080,
    alt: "World Countriess",
  },
];

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "About.MetaData" });
  return {
    title: t("title"),
    url: "https://world-countriess.vercel.app/about",
    alternates: {
      canonical: `${baseURL}/about`,
      languages: {
        "en-US": `${baseURL}/en/about`,
        "en-GB": `${baseURL}/en/about`,
        "az-AZ": `${baseURL}/az/about`,
      },
    },
    description: t("description"),
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
      title: `${t("title")} | World Countriess`,
      images: ogImage,
      url: `https://world-countriess.vercel.app/about`,
      description: t("description"),
      type: "website",
    },
  };
}

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

const texts = [
  {
    t: "text2",
    linkText: "Rest Countries API",
    link: "https://rest-api-countries-with-react.netlify.app/",
  },
  {
    t: "myCodes",
    linkText: "World Countriess Repository",
    link: "https://github.com/YusifAliyevPro/World-Countries",
  },
  {
    t: "buyACoffee",
    linkText: "kofe.al/@yusifaliyevpro",
    link: "https://kofe.al/@yusifaliyevpro",
  },
];

export default function About() {
  const t = useTranslations("About");
  return (
    <main className="relative flex items-center sm:mx-0 mx-7 text-center lg:text-left mt-9 lg:mt-0 justify-center ">
      <div className=" rounded-lg p-0 lg:p-12 sm:w-[800px] gap-y-6 flex relative flex-col">
        <MotionH2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
            duration: 0.5,
          }}
          className="bg-gradient-to-r from-[rgba(0,57,181,1)] from-0% via-[rgba(10,107,222,1)] via-50% to-[rgba(0,130,255,1)] to-100% bg-clip-text  text-center text-3xl font-bold text-transparent lg:mb-2"
        >
          {t("aboutTheProject")}
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
          {t("text1")}
        </MotionP>
        <MotionP
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto flex text-2xl mt-2 font-bold"
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 1.4,
            duration: 0.5,
          }}
        >
          {t("toolsIUsed")}
        </MotionP>
        <div className="flex relative my-8 select-none flex-wrap gap-y-8 sm:flex-row gap-x-8 items-center justify-center">
          {tools.map((tool, index) => (
            <MotionDiv
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              key={index}
              transition={{
                type: "spring",
                duration: 0.3,
                delay: 1.8 + (index + 1) * 0.3,
                stiffness: 80,
              }}
            >
              <Link
                target="_blank"
                className="flex flex-col gap-y-2 items-center hover:bg-gray-100 p-3 shadow-large drop-shadow-2xl rounded-xl justify-center"
                href={tool.link}
              >
                <p>{tool.name}</p>
                {tool.icon && tool.icon}
                {tool.img && tool.img}
              </Link>
            </MotionDiv>
          ))}
        </div>
        {texts.map((text, index) => (
          <MotionP
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            key={index}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 3.7 + (index + 1) * 0.6,
              duration: 0.6,
            }}
          >
            {t(text.t)}
            <Link
              href={text.link}
              className="text-blue-600 hover:text-blue-800 text-nowrap"
              target="_blank"
            >
              {text.linkText}
            </Link>
          </MotionP>
        ))}
      </div>
    </main>
  );
}
