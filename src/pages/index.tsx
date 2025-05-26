import { Header, CatalogList, Head, Footer, Catalog } from "@/components";
import { Configure, RefinementList } from "react-instantsearch";
import { CustomAlgoliaSearchBox } from "@/components/Custom";

export default function Home() {
  return (
    <>
      <Head />
      <Configure hitsPerPage={40} />
      <Header />
      <Catalog />

      {/* TODO: Hero banner */}
      {/* TODO: Seção de contato */}
      <Footer />

      <RefinementList attribute="name" />
    </>
  );
}
