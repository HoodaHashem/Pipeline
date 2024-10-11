import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface IUserSettingsInput {
  defaultValue: string;
}
const UserSettingsInput = ({ defaultValue }: IUserSettingsInput) => {
  const [touched, setIsTouched] = useState(false);
  return (
    <div className="w-full max-w-sm min-w-[200px] ">
      <div className="relative flex flex-col items-center justify-center">
        <input
          className={`peer w-full my-2 bg-transparent placeholder:text-slate-400  700 text-sm rounded-md px-3 py-2 transition-all border  duration-300 ease focus:outline-none shadow-sm focus:shadow ${touched ? "text-text border border-gray-500" : "text-slate-400 border-gray-100 dark:border-gray-900"}`}
          defaultValue={defaultValue}
          disabled={!touched}
        />

        <button
          type="button"
          className={`absolute right-4 ${touched ? "top-[17px]" : "top-[19px]"} text-text`}
          onClick={() => {
            setIsTouched(!touched);
          }}
        >
          {touched ? <IoClose size={"20"} /> : <FaPen />}
        </button>
      </div>
    </div>
  );
};

export default UserSettingsInput;
