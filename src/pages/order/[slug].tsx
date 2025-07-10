import { useRouter } from "next/router";
import { Header, Head, Footer, OrderDetails } from "@/components";

export default function Order() {
  const router = useRouter();

  return router.query?.slug ? (
    <>
      <Head />
      <Header hideCart />
      <OrderDetails id={router.query.slug as string} />

      <Footer />
    </>
  ) : null;
}
