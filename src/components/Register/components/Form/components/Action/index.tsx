import React from "react";
import { Button, Flex } from "@chakra-ui/react";

import { ActionProps } from "./types";

const Action: React.FC<ActionProps> = ({
  goToPrevStep,
  goToNextStep,
  currentStep,
  stepItems,
  trigger,
  getFieldState,
}) => {
  const isLastStep = currentStep == stepItems.length - 1;
  const mainButtonText = isLastStep ? "Finalizar" : "Próximo";
  const mainButtonType = isLastStep ? "submit" : "button";
  const firstPhaseFields = ["email", "password", "confirmPassword"];

  const handleMainButtonClick = async () => {
    if (isLastStep) {
      /* TODO: Chamada do mutation para registrar usuário */

      return;
    }

    await trigger(firstPhaseFields);

    if (firstPhaseFields.some((field) => getFieldState(field).invalid)) return;

    goToNextStep();
  };

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
        onClick={handleMainButtonClick}
        type={mainButtonType}
      >
        {mainButtonText}
      </Button>
    </Flex>
  );
};

export default Action;
