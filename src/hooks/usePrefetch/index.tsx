import { useEffect } from "react";
import { PAGE } from "@/constants/page";
import { useRouter } from "next/navigation";

export const usePrefetch = (page: PAGE) => {
  const { prefetch } = useRouter();

  useEffect(() => {
    prefetch(page);
  });
};
