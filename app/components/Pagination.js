"use client";
import React from "react";
import { Pagination } from "@nextui-org/pagination";
import useStore from "@/lib/store";

export default function PaginationUI({ count }) {
  const setPage = useStore((state) => state.setPage);
  const page = useStore((state) => state.page);
  const search = useStore((state) => state.search);
  const total = Math.ceil((search ? 30 : count) / 30);

  return count !== 0 ? (
    <div className="relative mt-5 flex w-full items-center justify-center">
      <Pagination
        total={total !== 0 ? total : 1}
        page={page < total ? page : total}
        onChange={(page) => setPage(page)}
      />
    </div>
  ) : (
    ""
  );
}
