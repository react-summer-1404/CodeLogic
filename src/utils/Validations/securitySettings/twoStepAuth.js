import * as Yup from "yup";
export const twpStepAuthValidation = () => {
  return Yup.object({
    twoStepAuth: Yup.boolean(),
  });
};
