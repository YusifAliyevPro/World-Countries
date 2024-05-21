import { Select, SelectItem, Avatar } from "@nextui-org/react";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales/client";

export default function LanguageSwitcher() {
  const t = useScopedI18n("Header.LanguageSwitcher");
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  const languages = [
    { key: "az", lang: "Azərbaycanca", flag: "az" },
    { key: "en", lang: "English", flag: "gb" },
    /*{ key: "ru", lang: "Russian", flag: "ru" },*/
  ];

  return (
    <Select
      items={languages}
      className="min-w-[110px]"
      isRequired
      classNames={{
        trigger: "bg-gray-200",
        popoverContent: "bg-gray-200",
        value: "font-bold font-sans",
        listbox: "font-bold",
      }}
      aria-label="Language"
      onSelectionChange={(value) => changeLocale(value.currentKey)}
      selectedKeys={[locale]}
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
