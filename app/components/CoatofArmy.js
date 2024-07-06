"use client";
import { useScopedI18n } from "@/locales/client";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
export default function CoatofArmy({ src, alt }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loaded, setLoaded] = useState(false);
  const t = useScopedI18n("Country.MoreInfo");
  return (
    <>
      <p
        onClick={onOpen}
        className=" text-md underline select-none w-fit text-blue-500 hover:text-blue-600 cursor-pointer font-bold"
      >
        {t("showCoatOfArmy")}
      </p>
      <Modal
        placement="center"
        isOpen={isOpen}
        size="3xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <div className="relative mx-4 my-4 flex items-center justify-center">
                <div
                  className={`fixed left-1/2 right-1/2 mt-32 items-center justify-center ${loaded ? "hidden" : "flex"}`}
                >
                  <p className="font-bold text-3xl">Loading...</p>
                </div>
                <Image
                  src={src}
                  width={400}
                  height={400}
                  onLoad={() => setLoaded(true)}
                  alt={alt}
                  className="select-none bg-transparent object-fill"
                />
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
