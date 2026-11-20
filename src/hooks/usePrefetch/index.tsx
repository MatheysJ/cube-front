import { useEffect } from "react";
import { PAGE } from "@/constants/page";
import { useRouter } from "next/navigation";

export const usePrefetch = (pages: PAGE | PAGE[]) => {
  const { prefetch } = useRouter();
  const routes = [pages].flat().join(",");

  useEffect(() => {
    routes.split(",").forEach((route) => prefetch(route));
  }, [prefetch, routes]);
};
