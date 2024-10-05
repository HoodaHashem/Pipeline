import { IApiErrorResponse, IApiFeildError } from "../interfaces";

export const handleFieldError = async (
  res: IApiErrorResponse,
  setIsInternalServerError: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const newErrors: { [key: string]: string } = {};
  if (res.status === "fail") {
    const errs = res.errors;
    errs.forEach((err: IApiFeildError) => {
      newErrors[err.path] = err.msg;
    });
    return newErrors;
  }
  if (res.status === "error") {
    setIsInternalServerError(true);
  }
  return newErrors;
};
