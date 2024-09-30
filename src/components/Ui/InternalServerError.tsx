import Error from "../Icons/Error";
import Button from "./Button";

interface IProp {
  close: () => void;
}
const InternalServerError = ({ close }: IProp) => {
  return (
    <div className=" w-64 flex flex-col justify-center items-center text-center gap-1">
      <Error />
      <h1 className="font-bold font-mono my-1 text-text"> Server Error 500</h1>
      <p className=" text-gray-600">
        Looks like we're having some trouble on our end. Hang tight while we fix
        it, or try again in a bit.
      </p>

      <Button onClick={close}>Close</Button>
    </div>
  );
};

export default InternalServerError;
