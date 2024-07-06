"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { useScopedI18n } from "@/locales/client";

export default function MapModal({ country, latlng, latlng2 }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const t = useScopedI18n("Country.MoreInfo");
  return (
    <div>
      <p
        onClick={onOpen}
        className=" text-md underline select-none w-fit text-blue-500 hover:text-blue-600 cursor-pointer font-bold"
      >
        {t("showOnMap")}
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
                <GoogleMapsEmbed
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}
                  height={500}
                  width={600}
                  mode="place"
                  zoom="5"
                  q={`${latlng},${latlng2}`}
                />
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
