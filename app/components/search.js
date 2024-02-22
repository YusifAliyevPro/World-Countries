"use client";
import { Input } from "@nextui-org/input";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";

export default function Search({ searchQuery, resultCount, pageQuery }) {
  const router = useRouter();
  const [text, setText] = useState(searchQuery);
  const [query] = useDebounce(text, 500);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (!query || query.length < 3) {
      router.push(`/?${pageQuery !== 1 ? "page=" + pageQuery : ""}`);
    } else {
      router.push(
        `/?search=${query}${pageQuery !== 1 ? "" : "&page=" + pageQuery}`
      );
    }
  }, [query, router]);

  useEffect(() => {
    if (resultCount === 0) {
      toast("Axtarışınıza uyğun ölkə tapılmadı", {
        icon: <BiSearch className="text-2xl font-bold" />,
      });
    }
  }, [resultCount]);

  return (
    <div>
      <div className=" mx-5 sm:mx-auto mb-4 mt-6 w-auto sm:w-[500px]">
        <Input
          placeholder="Search by country name"
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
