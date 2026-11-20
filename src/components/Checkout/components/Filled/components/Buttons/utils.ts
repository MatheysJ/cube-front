import { FieldValues } from "react-hook-form";

export enum FULFILLMENT_ERROR {
  ADDRESS = "ADDRESS",
  ADDRESSEE = "ADDRESSEE",
}

export const getFulfillmentError = (
  values: FieldValues
): FULFILLMENT_ERROR | null => {
  const isAddresseeFilled = values.address?.addressee?.fullName !== "";

  if (values.isPickUp) {
    return isAddresseeFilled ? null : FULFILLMENT_ERROR.ADDRESSEE;
  }

  const isAddressFilled = Object.values(values.address).every(
    (field) => field !== ""
  );

  return isAddressFilled && isAddresseeFilled
    ? null
    : FULFILLMENT_ERROR.ADDRESS;
};
