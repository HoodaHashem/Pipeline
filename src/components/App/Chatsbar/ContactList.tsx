import { useEffect, useState } from "react";
import Contact from "./Contact";
import { useSocket } from "../../../hooks/useSocket";
import { IContact } from "../../../lib/interfaces";
import { IContacts } from "../../../lib/types";

const ContactList = () => {
  const socket = useSocket();
  const [loadingState, setLoadingState] = useState();
  const [contacts, setContacts] = useState<IContacts | null>(null);

  useEffect(() => {
    if (!socket) return;

    const handleContacts = (data: IContacts) => {
      console.log(data);
      setContacts(data);
    };

    socket.emit("getContacts");

    socket.on("contactsUpdate", handleContacts);

    return () => {
      socket.off("contactsUpdate");
    };
  }, [socket]);

  return (
    <div className="py-3 px-4 overflow-auto h-screen">
      <h3 className="transition-colors duration-500 text-xs font-semibold uppercase text-gray-400 dark:text-gray-600 mb-1">
        Pipelines
      </h3>
      <div className="divide-y divide-gray-300 dark:divide-gray-800 ">
        {contacts?.map((ele: IContact) => {
          return (
            <Contact
              src={ele.photo}
              contactName={ele.fullName}
              lastMsg="fuck this shit is good"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
