import { IoMdPersonAdd } from "react-icons/io";
import { sendFrindRequest } from "../../lib/apiCenter";
import { IAddFriend } from "../../lib/interfaces";

const AddFriend = ({ userId, setIsLoading }: IAddFriend) => {
  return (
    <button
      className="bg-third p-3 rounded-lg text-text border-none outline-none"
      onClick={async () => {
        setIsLoading(true);
        await sendFrindRequest(userId);
        setIsLoading(false);
      }}
    >
      <IoMdPersonAdd />
    </button>
  );
};

export default AddFriend;
