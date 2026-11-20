import { Footer, Head, Header } from "@/components";
import Checkout from "@/components/Checkout";

export default function CheckoutPage() {
  return (
    <>
      <Head />
      <Header hideCart />
      <Checkout />
      <Footer />
    </>
  );
}
