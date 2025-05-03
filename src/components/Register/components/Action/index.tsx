import { Button, Flex } from "@chakra-ui/react";
import React from "react";

import { ActionProps } from "./types";

const Action: React.FC<ActionProps> = ({
  goToPrevStep,
  goToNextStep,
  currentStep,
  stepItems,
}) => {
  return (
    <Flex width="100%" gap="4" mt="8">
      <Button
        variant="outline"
        borderRadius="xs"
        flex={1}
        onClick={goToPrevStep}
        disabled={currentStep == 0}
      >
        Voltar
      </Button>
      <Button color="brand" flex={1} onClick={goToNextStep}>
        {currentStep == stepItems.length - 1 ? "Finalizar" : "Próximo"}
      </Button>
    </Flex>
  );
};

export default Action;
