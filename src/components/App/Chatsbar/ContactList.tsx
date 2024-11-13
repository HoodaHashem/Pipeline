import { useEffect, useState } from "react";
import Contact from "./Contact";
import { useSocket } from "../../../hooks/useSocket";
import { IChatData } from "../../../lib/interfaces";
import { TContacts } from "../../../lib/types";

const ContactList = () => {
  const socket = useSocket();
  const [contacts, setContacts] = useState<TContacts | null>(null);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  useEffect(() => {
    if (!socket) return;

    const handleContacts = (data: TContacts) => {
      setContacts(data);
    };

    socket.emit("getChats");

    socket.on("chatsUpdate", handleContacts);

    return () => {
      socket.off("contactsUpdate");
    };
  }, [socket]);

  return (
    <div className="py-3 px-4 overflow-auto h-screen">
      <h3 className="transition-colors duration-500 text-xs font-semibold uppercase text-gray-400 dark:text-gray-600 mb-1">
        Pipelines
      </h3>
      {contacts && contacts.length > 0 ? (
        <div className="divide-y divide-gray-300 dark:divide-gray-800 ">
          {contacts?.map((ele: IChatData, idx) => {
            return (
              <Contact
                key={idx}
                src={ele.photo}
                contactName={ele.fullName}
                status={ele.participantStatus}
                lastMessage={ele.lastMessage}
                chatId={ele.id}
                selectedChatId={selectedChatId}
                setSelectedChatId={setSelectedChatId}
              />
            );
          })}
        </div>
      ) : (
        <h3 className="uppercase text-center transition-colors duration-500 text-sm font-semibold  text-gray-400 dark:text-gray-600 mb-1">
          There Is No Friends
        </h3>
      )}
    </div>
  );
};

export default ContactList;
