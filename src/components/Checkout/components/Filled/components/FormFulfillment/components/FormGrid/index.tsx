import React from "react";
import { FormGridProps } from "./types";
import { Flex } from "@chakra-ui/react";
import { SmartInput } from "@/components/Common";
import { FIELD } from "@/constants/field";

const FormGrid: React.FC<FormGridProps> = (form) => {
  return (
    <Flex gap="4" flexDirection="column">
      <Flex w="40">
        <SmartInput variant="outline" {...form} id={FIELD.POSTAL_CODE} />
      </Flex>
      <Flex gap="4">
        <SmartInput w="2/3" variant="outline" {...form} id={FIELD.STREET} />
        <Flex w="1/3" gap="4">
          <SmartInput variant="outline" {...form} id={FIELD.HOUSE_NUMBER} />
          <SmartInput variant="outline" {...form} id={FIELD.COMPLEMENT} />
        </Flex>
      </Flex>
      <Flex gap="4">
        <SmartInput variant="outline" {...form} id={FIELD.NEIGHBORHOOD} />
        <SmartInput variant="outline" {...form} id={FIELD.CITY} />
        <SmartInput variant="outline" {...form} id={FIELD.STATE} />
      </Flex>
      <Flex w="1/2">
        <SmartInput variant="outline" {...form} id={FIELD.ADDRESSEE} />
      </Flex>
    </Flex>
  );
};

export default FormGrid;
