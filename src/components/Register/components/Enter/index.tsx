import React from "react";
import { PAGE } from "@/constants/page";
import { Link, Text } from "@chakra-ui/react";

import { EnterProps } from "./types";

const Enter: React.FC<EnterProps> = (props) => (
  <Text color="black" fontSize="2xl" fontWeight="bold" {...props}>
    Já possui uma conta?{" "}
    <Link
      variant="underline"
      color="inherit"
      textDecorationColor="colorPalette.solid"
      href={PAGE.LOGIN}
    >
      Entre
    </Link>
  </Text>
);

export default Enter;
