import React from "react";

import { CustomAlgoliaSearchBox } from "../Custom";
import { CatalogBreadcrumb } from "./components";
import CatalogList from "../CatalogList";
import { PageContent } from "../Common";

const Catalog: React.FC = () => (
  <PageContent>
    <CatalogBreadcrumb />
    <CustomAlgoliaSearchBox />
    <CatalogList />
  </PageContent>
);

export default Catalog;
