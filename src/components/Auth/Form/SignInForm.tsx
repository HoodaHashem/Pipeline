import { useReducer, useState } from "react";
import Input from "../../Ui/Input";
import {
  signInReducer,
  handleSubmitSignIn,
  createHandleChange,
} from "../../../lib/helpers/forms";
import { IStateSignIn } from "../../../lib/interfaces";
import SecondaryLoader from "../../Ui/SecondaryLoader/SecondaryLoader";
import { Navigate } from "react-router-dom";
import useLoad from "../../../hooks/useLoad";
import useModal from "../../../hooks/useModal";

const initialStates = {
  userIdentifier: "",
  signInPassword: "",
};

const SignInForm = () => {
  const [formState, dispatch] = useReducer(signInReducer, initialStates);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { setIsModalOpen } = useModal();
  const { isLoading, setIsLoading } = useLoad();
  const [apiApproval, setApiApproval] = useState(false);

  const { userIdentifier, signInPassword } = formState as IStateSignIn;

  const handleChange = createHandleChange(dispatch, setErrors, signInPassword);
  const handleSubmit = handleSubmitSignIn(
    setApiApproval,
    setIsLoading,
    setIsModalOpen,
    formState,
    setErrors,
    signInPassword,
  );

  if (apiApproval) {
    return <Navigate to="/app" replace />;
  }
  return (
    <form
      className="bg-third dark:bg-first flex items-center justify-center flex-col p-0 px-[50px] h-full text-center transition-all duration-500 ease-in-out transform"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-3xl mb-4 text-white dark:text-bg">
        Sign in
      </h1>
      <Input
        id="userIdentifier"
        inputType="text"
        label="Email or username or phone"
        value={userIdentifier}
        inputValue={userIdentifier}
        onChange={handleChange}
        err={!!errors.userIdentifier}
        errMsg={errors.userIdentifier}
      />
      <Input
        id="signInPassword"
        inputType="password"
        label="Input your Password"
        value={signInPassword}
        inputValue={signInPassword}
        onChange={handleChange}
        err={!!errors.signInPassword}
        errMsg={errors.signInPassword}
      />
      <a
        href="#"
        className="text-bg dark:text-third dark:hover:text-bg text-sm mb-4 underline hover:text-second transition-all duration-500"
      >
        Forgot your password?
      </a>
      <button className="rounded-full bg-first text-white text-xs font-bold py-3 px-11 uppercase tracking-wider transition duration-300 ease-in hover:bg-second dark:bg-fourth dark:hover:bg-third">
        {isLoading ? <SecondaryLoader /> : "Sign In"}
      </button>
    </form>
  );
};

export default SignInForm;
