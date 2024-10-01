import { IAvatar } from "../../lib/interfaces";
import { AVATAR_SIZES } from "../../lib/constants";

const Avatar = ({ src, alt, size = "md" }: IAvatar) => {
  return (
    <div className="relative">
      <div
        className={`${AVATAR_SIZES[size]} rounded-full overflow-hidden border-2 border-gray-200 `}
      >
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      </div>
      <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
  );
};

export default Avatar;
