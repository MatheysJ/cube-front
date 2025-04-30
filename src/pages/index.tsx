import { Header, CatalogList, Head } from "@/components";
import { Configure, RefinementList } from "react-instantsearch";
import { CustomAlgoliaSearchBox } from "@/components/Custom";

export default function Home() {
  return (
    <>
      <Head />
      <Configure hitsPerPage={40} />
      <Header />
      <CustomAlgoliaSearchBox />
      <CatalogList />

      <RefinementList attribute="name" />
    </>
  );
}
