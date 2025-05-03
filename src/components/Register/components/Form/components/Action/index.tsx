import React from "react";
import { Button, Flex } from "@chakra-ui/react";

import { ActionProps } from "./types";

const Action: React.FC<ActionProps> = ({
  goToPrevStep,
  goToNextStep,

  currentStep,
  stepItems,
}) => {
  const isLastStep = currentStep == stepItems.length - 1;
  const mainButtonText = isLastStep ? "Finalizar" : "Próximo";
  const mainButtonType = isLastStep ? "submit" : "button";
  const mainButtonClick = isLastStep ? undefined : goToNextStep;

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
      <Button
        color="brand"
        flex={1}
        onClick={mainButtonClick}
        type={mainButtonType}
      >
        {mainButtonText}
      </Button>
    </Flex>
  );
};

export default Action;
