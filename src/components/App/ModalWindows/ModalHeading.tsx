import { useState } from "react";
import { IModalHeading } from "../../../lib/interfaces";

const ModalHeading = ({ headingList }: IModalHeading) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <header>
      <nav>
        <ul className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-4 lg:mt-0">
          {headingList.map((item: string, idx: number) => {
            return (
              <li
                className={`relative cursor-pointer  transition-all duration-300 ${activeItem === idx ? "border-b-2 border-third text-third pointer-events-none" : " group text-text hover:text-second border-b-2 border-transparent"}`}
                onClick={() => setActiveItem(idx)}
                key={idx}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-third transition-all duration-300 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default ModalHeading;
