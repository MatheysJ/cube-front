import React from "react";
import { FormGridProps } from "./types";
import { Flex } from "@chakra-ui/react";
import { FIELD } from "@/constants/field";
import { SmartInput } from "@/components/Common";

const FormGrid: React.FC<FormGridProps> = (form) => {
  const isPickUp = form.getValues("isPickUp");

  return (
    <Flex gap="4" flexDirection="column">
      <Flex w="40">
        <SmartInput
          disabled={isPickUp}
          variant="outline"
          {...form}
          id={FIELD.POSTAL_CODE}
        />
      </Flex>
      <Flex gap="4">
        <SmartInput
          disabled={isPickUp}
          w="2/3"
          variant="outline"
          {...form}
          id={FIELD.STREET}
        />
        <Flex w="1/3" gap="4">
          <SmartInput
            disabled={isPickUp}
            variant="outline"
            {...form}
            id={FIELD.HOUSE_NUMBER}
          />
          <SmartInput
            disabled={isPickUp}
            variant="outline"
            {...form}
            id={FIELD.COMPLEMENT}
          />
        </Flex>
      </Flex>
      <Flex gap="4">
        <SmartInput
          disabled={isPickUp}
          variant="outline"
          {...form}
          id={FIELD.NEIGHBORHOOD}
        />
        <SmartInput
          disabled={isPickUp}
          variant="outline"
          {...form}
          id={FIELD.CITY}
        />
        <SmartInput
          disabled={isPickUp}
          variant="outline"
          {...form}
          id={FIELD.STATE}
        />
      </Flex>
      <Flex w="1/2">
        <SmartInput variant="outline" {...form} id={FIELD.ADDRESSEE} />
      </Flex>
    </Flex>
  );
};

export default FormGrid;
