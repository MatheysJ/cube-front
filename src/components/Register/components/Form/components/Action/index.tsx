import React from "react";
import { Button, Flex } from "@chakra-ui/react";

import { useActions } from "./hooks/useActions";
import { ActionProps } from "./types";

const Action: React.FC<ActionProps> = (props) => {
  const { handleBack, handleNext, nextText, isPending } = useActions(props);

  return (
    <Flex width="100%" gap="4" mt="auto">
      <Button
        variant="outline"
        borderRadius="xs"
        flex={1}
        onClick={handleBack}
        disabled={props.currentStep == 0}
      >
        Voltar
      </Button>
      <Button color="brand" flex={1} onClick={handleNext} loading={isPending}>
        {nextText}
      </Button>
    </Flex>
  );
};

export default Action;
