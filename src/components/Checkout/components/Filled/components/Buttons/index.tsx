import React from "react";
import { Button, Flex } from "@chakra-ui/react";

import { ButtonsProps } from "./types";

const Buttons: React.FC<ButtonsProps> = ({ steps }) => {
  const { value, goToNextStep, goToPrevStep } = steps;

  return (
    <Flex mt="auto" gap="4" alignSelf="flex-end">
      <Button variant="outline" disabled={value < 1} onClick={goToPrevStep}>
        Voltar
      </Button>
      <Button onClick={goToNextStep}>Avançar</Button>
    </Flex>
  );
};

export default Buttons;
