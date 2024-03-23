"use client";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function MapModal({ country, ButtonText, mapOrCoat }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <p
        onClick={onOpen}
        className=" text-md select-none w-fit text-blue-500 hover:text-blue-600 cursor-pointer font-bold"
      >
        {ButtonText}
      </p>
      <Modal
        placement="center"
        isOpen={isOpen}
        size="3xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="relative mx-4 my-4 flex items-center justify-center">
                  {mapOrCoat === "map" ? (
                    <GoogleMapsEmbed
                      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}
                      height={500}
                      width={600}
                      mode="place"
                      zoom="4"
                      q={`${country.latlng[0]},${country.latlng[1]}`}
                    />
                  ) : (
                    <div>
                      <div
                        className={`fixed left-1/2 right-1/2 mt-32 items-center justify-center ${loaded ? "hidden" : "flex"}`}
                      >
                        <p className="font-bold text-3xl">Loading...</p>
                      </div>
                      <Image
                        src={country.coatOfArms.svg}
                        width={400}
                        height={400}
                        onLoad={() => setLoaded(true)}
                        alt={country.flags.alt}
                        className="select-none bg-transparent object-fill"
                      />
                    </div>
                  )}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
