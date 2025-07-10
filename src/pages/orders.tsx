import { Header, Head, Footer, Orders as OrdersComponent } from "@/components";

export default function Orders() {
  return (
    <>
      <Head />
      <Header hideCart />
      <OrdersComponent />

      <Footer />
    </>
  );
}
