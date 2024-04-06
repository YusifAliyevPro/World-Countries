"use client";
import React from "react";
import { Pagination } from "@nextui-org/pagination";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaginationUI({ pageQuery, searchQuery, count }) {
  const router = useRouter();
  const total = Math.ceil(count / 42);
  const [page, setPage] = useState(pageQuery);

  useEffect(() => {
    if (page === 1) {
      router.push(
        `/${searchQuery !== undefined ? "?search=" + searchQuery : ""}`,
        {
          scroll: false,
        },
      );
    } else if (page > total) {
      router.push(
        `/?${
          searchQuery !== undefined ? "search=" + searchQuery + "&" : ""
        }page=${total}`,
        {
          scroll: false,
        },
      );
    } else {
      router.push(
        `/?${
          searchQuery !== undefined ? "search=" + searchQuery + "&" : ""
        }page=${page}`,
        {
          scroll: false,
        },
      );
    }
  }, [page, router]);

  return count !== 0 ? (
    <div className="relative mt-5 flex w-full items-center justify-center">
      <Pagination
        total={total !== 0 ? total : 1}
        page={pageQuery < total ? pageQuery : total}
        onChange={(page) => setPage(page)}
      />
    </div>
  ) : (
    ""
  );
}
