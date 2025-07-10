import { Breadcrumb } from "@chakra-ui/react";

const CatalogBreadcrumb = () => (
  <Breadcrumb.Root size="lg">
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.CurrentLink>Início</Breadcrumb.CurrentLink>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.CurrentLink>Produtos</Breadcrumb.CurrentLink>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
);

export default CatalogBreadcrumb;
