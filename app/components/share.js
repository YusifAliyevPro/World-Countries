"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  BiDotsVerticalRounded,
  BiImageAlt,
  BiLink,
  BiLogoTelegram,
  BiLogoWhatsapp,
  BiSolidShareAlt,
} from "react-icons/bi";
import { Snippet } from "@nextui-org/snippet";
import { baseURL } from "../lib/bases";
import { MotionDiv } from "./motionDiv";

export default function Share({ country }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();

  const whatsappBody =
    country.flag +
    " *Country Name:* " +
    country.name.common +
    "\n\n📄 *Official Name:* " +
    country.name.official +
    "\n\n🏛️ *Capital:* " +
    (country.capital ? country.capital.join(", ") : "No Capital City") +
    "\n\n👩‍👩‍👧‍👦 *Population:* " +
    country.population.toLocaleString("en") +
    "\n\n🌍 *Region:* " +
    (country.subregion ? country.subregion : "No Information") +
    "\n\n💵 *Currency:* " +
    (country.currencies ? Object.values(country.currencies)[0].name : "") +
    (country.currencies
      ? ` (${Object.values(country.currencies)[0].symbol})`
      : "No Currency") +
    "\n\n🆓 *Is Country Independent?:* " +
    (country.independent ? "✅" : "❎") +
    `\n\n *Follow the link for more information about ${country.name.common}* ⬇️` +
    "\n\n" +
    `${baseURL}` +
    pathname;

  const telegramBody =
    country.flag +
    " **Country Name:** " +
    country.name.common +
    "\n\n📄 **Official Name:** " +
    country.name.official +
    "\n\n🏛️ **Capital:** " +
    (country.capital ? country.capital.join(", ") : "No Capital City") +
    "\n\n👩‍👩‍👧‍👦 **Population:** " +
    country.population.toLocaleString("en") +
    "\n\n🌍 **Region:** " +
    (country.subregion ? country.subregion : "No Information") +
    "\n\n💵 **Currency:** " +
    (country.currencies ? Object.values(country.currencies)[0].name : "") +
    (country.currencies
      ? ` (${Object.values(country.currencies)[0].symbol})`
      : "No Currency") +
    "\n\n🆓 **Is Country Independent?:** " +
    (country.independent ? "✅" : "❎") +
    `\n\n **Follow the link for more information about ${country.name.common}** ⬇️` +
    "\n\n" +
    `${baseURL}` +
    pathname;

  const copyBody =
    country.flag +
    " Country Name: " +
    country.name.common +
    "\n\n📄 Official Name: " +
    country.name.official +
    "\n\n🏛️ Capital: " +
    (country.capital ? country.capital.join(", ") : "No Capital City") +
    "\n\n👩‍👩‍👧‍👦 Population: " +
    country.population.toLocaleString("en") +
    "\n\n🌍 Region: " +
    (country.subregion ? country.subregion : "No Information") +
    "\n\n💵 Currency: " +
    (country.currencies ? Object.values(country.currencies)[0].name : "") +
    (country.currencies
      ? ` (${Object.values(country.currencies)[0].symbol})`
      : "No Currency") +
    "\n\n🆓 Is Country Independent?: " +
    (country.independent ? "✅" : "❎") +
    `\n\n Follow the link for more information about ${country.name.common} ⬇️` +
    "\n\n" +
    `${baseURL}` +
    pathname;

  const handleShare = (platform) => {
    if (platform === "whatsapp") {
      router.push(`whatsapp://send?text=${encodeURIComponent(whatsappBody)}`);
    } else if (platform === "telegram") {
      router.push(`tg://msg?text=${encodeURIComponent(telegramBody)}`);
    } else if (platform === "copy") {
      navigator.clipboard.writeText(copyBody);
      toast.success("Kopyalandı");
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }
    } else if (platform === "other") {
      const shareData = {
        title: `World Countriess | ${country.name.common}`,
        text: copyBody,
      };
      toast.loading("Hazırlanır", {
        duration: 1000,
      });
      navigator.share(shareData);
    }
  };

  async function handlePoster() {
    try {
      const posterURL = country.flags.png;
      const response = await fetch(posterURL);

      if (!response.ok) {
        throw new Error("Şəkil yüklənə bilmədi.");
      }

      const blob = await response.blob();
      const filesArray = [
        new File([blob], `flag.png`, {
          type: "image/png",
          lastModified: new Date().getTime(),
        }),
      ];
      const shareData = {
        title: `FilmIsBest | ${country.name.common}`,
        files: filesArray,
      };
      toast.promise(Promise.resolve(), {
        // Change to Promise.resolve()
        loading: "Şəkil hazırlanır",
        success: "Şəkil hazırdır!",
        error: "Xəta baş verdi.",
      });
      navigator.share(shareData);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <MotionDiv
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: country.borders ? 3.5 : 2.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        <Button
          size="lg"
          color="primary"
          className="relative flex flex-row items-center justify-center gap-1 text-xl font-bold"
          onPress={onOpen}
        >
          <BiSolidShareAlt className="mt-1 text-2xl" />
          <p className="select-none">Share</p>
        </Button>
      </MotionDiv>
      <Modal
        isOpen={isOpen}
        placement="center"
        className="light:text-white dark:text-white"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex w-full flex-row items-center justify-center gap-3 font-bold">
                <BiSolidShareAlt className="mt-1 text-4xl" />
                <h6 className="text-3xl font-bold select-none">Share</h6>
              </ModalHeader>
              <ModalBody className="p-8">
                <div className="no-scrollbar relative select-none mb-10 flex flex-1 p-2 flex-row items-center gap-4 overflow-x-scroll scrollbar-hide">
                  <div
                    className="relative flex w-fit cursor-pointer flex-col items-center rounded-lg p-2 hover:shadow-medium"
                    onClick={() => handleShare("whatsapp")}
                  >
                    <BiLogoWhatsapp className=" text-7xl text-blue-600" />
                    <p className="font-bold">WhatsApp</p>
                  </div>
                  {window.innerWidth < window.innerHeight ? (
                    <div
                      className="relative flex w-fit cursor-pointer flex-col items-center rounded-lg p-2 hover:shadow-medium"
                      onClick={() => handleShare("telegram")}
                    >
                      <BiLogoTelegram className="text-7xl text-blue-600" />
                      <p className="font-bold">Telegram</p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    className="relative flex w-fit cursor-pointer flex-col items-center rounded-lg p-2 hover:shadow-medium"
                    onClick={() => handleShare("copy")}
                  >
                    <BiLink className="text-7xl text-blue-600" />
                    <p className="text-nowrap font-bold">Copy Text</p>
                  </div>
                  {navigator.canShare ? (
                    <div
                      className="relative flex w-fit cursor-pointer flex-col items-center rounded-lg p-2 hover:shadow-medium"
                      onClick={handlePoster}
                    >
                      <BiImageAlt className="text-nowrap text-7xl text-blue-600" />
                      <p className="font-bold" title="Low quality">
                        Flag
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {navigator.share ? (
                    <div
                      className="relative flex w-fit cursor-pointer flex-col items-center rounded-lg p-2 hover:shadow-medium"
                      onClick={() => handleShare("other")}
                    >
                      <BiDotsVerticalRounded className="text-7xl text-blue-600" />
                      <p className="font-bold">Other</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className=" mx-auto ">
                  <Snippet
                    symbol=""
                    variant="bordered"
                    codeString={`${baseURL}/countries/${country.cca3}`}
                  >
                    <div className="line-clamp-1 w-48 flex-row truncate text-nowrap lg:w-80">
                      {`${baseURL}/countries/${country.cca3}`}
                    </div>
                  </Snippet>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
