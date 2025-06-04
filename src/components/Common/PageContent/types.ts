import { ReactNode } from "react";
import { FlexProps } from "@chakra-ui/react";

export interface PageContentProps extends FlexProps {
  children: ReactNode;
}
