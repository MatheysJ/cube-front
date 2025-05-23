import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";
import { useMutation } from "@tanstack/react-query";
import { register as mutationFn } from "@/services";
import { FIELD } from "@/components/Register/constants";
import { RegisterServiceBody } from "@/services/auth/register/types";

import { ActionProps } from "../../types";
import { useRouter } from "next/navigation";

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

  const { mutateAsync, isPending } = useMutation<
    void,
    unknown,
    RegisterServiceBody
  >({
    mutationFn,
  });

  usePrefetch(PAGE.LOGIN);
  const onSuccess = () => {
    push(PAGE.LOGIN);
  };

  const handleNext = async () => {
    if (isLastStep) {
      const body = getValues() as RegisterServiceBody;

      return await mutateAsync(body, { onSuccess });
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
