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
import { baseURL } from "../../lib/constants";
import countries from "i18n-iso-countries";
import { useScopedI18n } from "@/locales/client";
import { Motion } from "./Motion";

export default function Share({ country, locale }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();
  const t = useScopedI18n("Country.Share");
  const ShareText = (s) => {
    return t("shareText", {
      s: s,
      flag: country.flag,
      country: countries.getName(country.cca3, locale) || country.name.common,
      officialName: country.name.official,
      capital: country.capital ? country.capital.join(", ") : "No Capital City",
      population: country.population.toLocaleString("az"),
      region: country.subregion ? country.subregion : "No Information",
      currency: country.currencies
        ? Object.values(country.currencies)[0].name +
          ` (${Object.values(country.currencies)[0].symbol})`
        : "No Currency",
      independent: country.independent ? "✅" : "❎",
      baseURL: baseURL,
      pathname: pathname,
    });
  };

  const handleShare = (platform) => {
    if (platform === "whatsapp") {
      router.push(`whatsapp://send?text=${encodeURIComponent(ShareText("*"))}`);
    } else if (platform === "telegram") {
      router.push(`tg://msg?text=${encodeURIComponent(ShareText("**"))}`);
    } else if (platform === "copy") {
      navigator.clipboard.writeText(ShareText(""));
      toast.success(t("copied"));
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }
    } else if (platform === "other") {
      const shareData = {
        title: `World Countriess | ${country.name.common}`,
        text: copyBody,
      };
      toast.loading(t("preparing"), {
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
        throw new Error("İmage couldn't fetch");
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
        loading: t("imageIsPreparing"),
        success: t("imageIsReady"),
        error: t("anErrorOccurred"),
      });
      navigator.share(shareData);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <Motion
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
          <p className="select-none">{t("share")}</p>
        </Button>
      </Motion>
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
                <h6 className="select-none text-3xl font-bold">{t("share")}</h6>
              </ModalHeader>
              <ModalBody className="p-8">
                <div className="no-scrollbar relative mb-10 flex flex-1 select-none flex-row items-center gap-4 overflow-x-scroll p-2 scrollbar-hide">
                  <div
                    className="relative flex w-fit cursor-pointer flex-col items-center rounded-lg p-2 hover:shadow-medium"
                    onClick={() => handleShare("whatsapp")}
                  >
                    <BiLogoWhatsapp className="text-7xl text-blue-600" />
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
                        {t("flag")}
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
                      <p className="font-bold">{t("other")}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mx-auto">
                  <Snippet
                    symbol=""
                    variant="bordered"
                    codeString={`${baseURL}/${locale}/${country.cca3.toLowerCase()}`}
                  >
                    <div className="line-clamp-1 w-48 flex-row truncate text-nowrap lg:w-80">
                      {`${baseURL}/${locale}/${country.cca3.toLowerCase()}`}
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
