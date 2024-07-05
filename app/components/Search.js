"use client";
import { Input } from "@nextui-org/input";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { useScopedI18n } from "@/locales/client";
import useStore from "@/lib/store";

export default function Search() {
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 600);
  const setSearch = useStore((state) => state.setSearch);
  const resultCount = useStore((state) => state.resultCount);
  const t = useScopedI18n("Home.Search");

  useEffect(() => {
    setSearch(query);
  }, [query]);

  useEffect(() => {
    if (resultCount === 0) {
      toast(t("noResult"), {
        icon: <BiSearch className="text-2xl font-bold" />,
      });
    }
  }, [resultCount]);

  return (
    <div>
      <div className=" mx-5 sm:mx-auto mb-4 mt-6 w-auto sm:w-[500px]">
        <Input
          placeholder={t("placeholder")}
          variant="bordered"
          size="lg"
          classNames={{
            base: "sm:max-w-[100rem] h-11",
            mainWrapper: "h-full",
            input: "text-small text-black font-bold text-md",
            inputWrapper: "h-full font-normal text-white",
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value.replace(/['\[\]\/\\()]/g, ""));
          }}
          radius="full"
          startContent={
            <BiSearch className="text-[1.7rem] text-black font-bold" />
          }
          type="search"
        />
      </div>
    </div>
  );
}
