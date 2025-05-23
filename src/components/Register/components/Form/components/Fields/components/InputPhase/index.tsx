import React from "react";
import { Flex } from "@chakra-ui/react";

import { InputPhaseProps } from "./types";

const InputPhase: React.FC<InputPhaseProps> = ({ step, phase, children }) =>
  step == phase ? (
    <Flex flexDirection="column" gap="4">
      {children}
    </Flex>
  ) : null;

export default InputPhase;
