import { IAvatar } from "../../lib/interfaces";
import { AVATAR_SIZES } from "../../lib/constants";

const Avatar = ({ src, alt, size = "md", icon }: IAvatar) => {
  return (
    <div className="relative">
      <div className={`${AVATAR_SIZES[size]} rounded-full overflow-hidden`}>
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      </div>
      {icon ? (
        <div className=" cursor-pointer  items-center flex justify-center absolute  text-text top-14 right-1 w-6 h-6 bg-bg rounded-full">
          {icon}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Avatar;
