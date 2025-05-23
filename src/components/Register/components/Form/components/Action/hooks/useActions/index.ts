import { register } from "@/services";
import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";
import { FIELD } from "@/constants/field";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { RegisterBody } from "@/services/auth/register/types";

import { ActionProps } from "../../types";

export const useActions = ({
  currentStep,
  stepItems,
  getValues,
  goToNextStep,
  getFieldState,
  goToPrevStep,
  trigger,
}: ActionProps) => {
  const { push } = useRouter();

  const numberOfSteps = stepItems.length;
  const isLastStep = currentStep == numberOfSteps - 1;
  const nextText = isLastStep ? "Finalizar" : "Próximo";
  const firstPhaseFields = [FIELD.MAIL, FIELD.PASSWORD, FIELD.CONFIRM_PASSWORD];

  const { mutateAsync, isPending } = useMutation<void, unknown, RegisterBody>({
    mutationFn: register,
  });

  usePrefetch(PAGE.LOGIN);
  const onSuccess = () => {
    push(PAGE.LOGIN);
  };

  const handleNext = async () => {
    if (isLastStep) {
      const body = getValues() as RegisterBody;

      try {
        return await mutateAsync(body, { onSuccess });
      } catch (e) {
        console.error("Error creating account");
      }
    }

    await trigger(firstPhaseFields);
    if (firstPhaseFields.some((field) => getFieldState(field).invalid)) return;

    goToNextStep();
  };

  return {
    nextText,
    handleNext,
    handleBack: goToPrevStep,
    isPending,
  };
};
