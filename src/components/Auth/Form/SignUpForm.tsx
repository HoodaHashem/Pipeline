import { useContext, useReducer, useState } from "react";
import Input from "../../Ui/Input";
import {
  createHandleChange,
  handleSubmitSignUp,
  signUpReducer,
} from "../../../lib/helpers/forms";
import { IStateSignUp } from "../../../lib/interfaces";
import ModalContext from "../../../Contexts/ModalContext";
import LoadingContext from "../../../Contexts/LoadingContext";
import SecondaryLoader from "../../Ui/SecondaryLoader/SecondaryLoader";
import { Navigate } from "react-router-dom";

const initialStates = {
  email: "",
  fullName: "",
  username: "",
  confirmPassword: "",
  password: "",
  phone: "",
};

const SignUpForm = () => {
  const [formState, dispatch] = useReducer(signUpReducer, initialStates);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { setIsModalOpen } = useContext(ModalContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [apiApproval, setApiApproval] = useState(false);

  const { email, fullName, username, confirmPassword, password, phone } =
    formState as IStateSignUp;

  const handleChange = createHandleChange(dispatch, setErrors, password);
  const handleSubmit = handleSubmitSignUp(
    setApiApproval,
    setIsLoading,
    setIsModalOpen,
    formState,
    setErrors,
    password,
  );

  if (apiApproval) {
    return <Navigate to="/app" replace />;
  }

  return (
    <form
      className="bg-third dark:bg-first flex items-center justify-center flex-col p-0 px-[50px] h-full text-center transition-all duration-500 ease-in-out transform gap-2"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-3xl mb-4 text-white dark:text-bg">
        Create Account
      </h1>

      <Input
        inputType="text"
        id="fullName"
        label="Full Name"
        value={fullName}
        inputValue={fullName}
        onChange={handleChange}
        err={!!errors.fullName}
        errMsg={errors.fullName}
      />
      <Input
        inputType="text"
        id="username"
        label="Username"
        value={username}
        inputValue={username}
        onChange={handleChange}
        err={!!errors.username}
        errMsg={errors.username}
        autoComplete="on"
      />
      <Input
        inputType="text"
        id="phone"
        label="Valid Phone Number"
        value={phone}
        inputValue={phone}
        onChange={handleChange}
        err={!!errors.phone}
        errMsg={errors.phone}
        autoComplete="on"
      />
      <Input
        inputType="email"
        id="email"
        label="Email Address"
        value={email}
        inputValue={email}
        onChange={handleChange}
        err={!!errors.email}
        errMsg={errors.email}
        autoComplete="on"
      />
      <Input
        inputType="password"
        id="password"
        label="Strong Password"
        value={password}
        inputValue={password}
        onChange={handleChange}
        err={!!errors.password}
        errMsg={errors.password}
      />
      <Input
        inputType="password"
        id="confirmPassword"
        label="Confirm Your Password"
        value={confirmPassword}
        inputValue={confirmPassword}
        onChange={handleChange}
        err={!!errors.confirmPassword}
        errMsg={errors.confirmPassword}
      />
      <button className="rounded-full bg-first text-white text-xs font-bold py-3 px-11 uppercase tracking-wider transition duration-300 ease-in hover:bg-second dark:bg-fourth dark:hover:bg-third">
        {isLoading ? <SecondaryLoader /> : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
