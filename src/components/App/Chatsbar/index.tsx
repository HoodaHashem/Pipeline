import ChatsbarHeading from "./ChatsbarHeading";
import ContactList from "./ContactList";

const Chatsbar = () => {
  return (
    <div className="flex-none w-1/4  flex flex-col border-r border-gray-400 dark:border-gray-800 transition-colors duration-500">
      <ChatsbarHeading />
      <ContactList />
    </div>
  );
};
export default Chatsbar;
