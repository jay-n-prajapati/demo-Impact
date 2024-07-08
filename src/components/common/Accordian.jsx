import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Accordion({ question, answer, number }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer">
      <button
        type="button"
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full px-4 py-5 group"
      >
        <div className="flex items-center gap-3">
          <p className=" text-sm font-semibold group-hover:text-accentColor">
            {`${number}.`}
          </p>
          <p
            className={`text-left font-montserrat font-extrabold group-hover:text-accentColor ${
              isOpen ? "text-accentColor" : ""
            }`}
          >
            {question}
          </p>
        </div>
        <MdOutlineKeyboardArrowRight
          className={`size-7 hover:text-accentColor text-gray-400  duration-300 ${
            isOpen
              ? "transform rotate-90 duration-400 text-secondary-color"
              : ""
          }`}
        />
      </button>
      <div
        className={`px-4 text-sm  duration-300 ${
          isOpen ? "pb-6 opacity-100" : "overflow-hidden h-0 opacity-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Accordion;
