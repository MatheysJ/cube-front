import { Header, Head, Footer, OrderDetails } from "@/components";
import { useRouter } from "next/router";

export default function Order() {
  const router = useRouter();

  console.log("Order");

  return (
    <>
      <Head />
      <Header hideCart />
      <OrderDetails id={router.query.slug as string} />

      <Footer />
    </>
  );
}
