import AvatarLoader from "../Loaders/avatarLoader";
import TextLoader from "../Loaders/TextLoader";

const ContactLoader = () => {
  return (
    <li>
      <div className="flex items-center space-x-4 p-3">
        <div className="inline-flex items-start mr-3">
          <AvatarLoader size="md" />
        </div>
        <div className="pr-1">
          <h2 className="text-xl leading-snug font-bold text-text transition-colors duration-500">
            <TextLoader w="w-48" h="h-4" />
          </h2>

          <div className="flex items-center  text-sm font-medium text-second transition-colors duration-500">
            <TextLoader w="w-20" h="h-3" />
            <TextLoader w="w-3" h="h-3" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContactLoader;
