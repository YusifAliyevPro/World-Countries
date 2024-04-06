"use client";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { usePathname, useRouter } from "../../../navigation";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
export default function LanguageSwitcher({ locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header.LanguageSwitcher");
  const [value, setValue] = useState({ currentKey: locale });
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (!initialRender) {
      const key = value.currentKey;
      router.replace(pathname, { locale: key });
    }
    setInitialRender(false);
  }, [value]);

  const languages = [
    { key: "az", lang: "Azərbaycanca", flag: "az" },
    { key: "en", lang: "English", flag: "gb" },
    /*{ key: "ru", lang: "Russian", flag: "ru" },*/
  ];

  return (
    <Select
      items={languages}
      className="min-w-[110px]"
      classNames={{
        trigger: "bg-gray-200",
        popoverContent: "bg-gray-200",
        value: "font-bold font-sans",
        listbox: "font-bold",
      }}
      aria-label="Language"
      selectedKeys={[locale]}
      onSelectionChange={setValue}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex flex-row items-center gap-x-2">
            <Avatar
              alt={item.data.lang}
              className="h-6 w-6"
              src={`https://flagcdn.com/${item.data.flag}.svg`}
            />
            <p>{item.data.key.toUpperCase()}</p>
          </div>
        ));
      }}
    >
      {(language) => (
        <SelectItem
          key={language.key}
          startContent={
            <Avatar
              alt={language.lang}
              className="h-6 w-6"
              src={`https://flagcdn.com/${language.flag}.svg`}
            />
          }
        >
          {language.key.toUpperCase()}
        </SelectItem>
      )}
    </Select>
  );
}
