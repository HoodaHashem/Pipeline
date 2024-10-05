import { IContact } from "../../../lib/interfaces";

const Contact = ({ src, contactName, lastMsg }: IContact) => {
  return (
    <button className="transition-colors duration-500 w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
      <div className="flex items-center">
        <img
          className="rounded-full items-start flex-shrink-0 mr-3"
          width="32"
          height="32"
          src={src}
          alt={contactName}
        />
        <div>
          <h4 className="text-sm font-semibold text-text transition-colors duration-500">
            {contactName}
          </h4>
          <div className="text-[13px] text-text transition-colors duration-500">
            {lastMsg}
          </div>
        </div>
      </div>
    </button>
  );
};

export default Contact;
