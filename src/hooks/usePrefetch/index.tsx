import { useEffect } from "react";
import { PAGE } from "@/constants/page";
import { useRouter } from "next/navigation";

export const usePrefetch = (pages: PAGE | PAGE[]) => {
  const { prefetch } = useRouter();

  useEffect(() => {
    const routes = typeof pages == "string" ? [pages] : pages;

    routes.map((route) => prefetch(route));
  });
};
