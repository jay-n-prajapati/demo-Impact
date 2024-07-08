import { Link } from "react-router-dom";
import { links } from "../../constants";
import { IoCloseOutline } from "react-icons/io5";
import { cn } from "../../utils";
import { useState } from "react";

const NavbarModal = ({ setIsOpen }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isSubDropDownOpen, setIsSubDropDownOpen] = useState(false);

  return (
    <div className="size-full bg-[#000000a4] absolute top-0 left-0 p-4 py-8 font-montserrat font-extrabold">
      <div>
        <IoCloseOutline
          className="text-white text-3xl ml-auto my-2"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="p-8 bg-backgroundColor rounded shadow-2xl max-h-[75vh] overflow-y-scroll">
        <ul className=" flex flex-col gap-4">
          {links.map((link, idx) => (
            <li key={idx} className="text-lg">
              <a
                href={link?.slug}
                className="flex justify-between items-center hover:text-accentColor"
                onClick={() => {
                  if (link.name === "Dropdown"){
                    setIsDropDownOpen(!isDropDownOpen);
                    return
                  }
                  setIsOpen(prev => !prev)
                }}
              >
                {link.name}
                {link?.icon}
              </a>
              {link.dropdown && (
                <ul
                  className={cn(
                    "bg-gray-100 mt-2  rounded border border-gray-300 duration-500",
                    isDropDownOpen ? "h-auto p-4 block" : "h-0 hidden p-0"
                  )}
                >
                  {link.dropdown.map((subLink) => (
                    <li
                      key={subLink.name}
                      className="py-2"
                      onClick={() => {
                        if (subLink.name === "Deep Dropdown")
                          setIsSubDropDownOpen(!isSubDropDownOpen);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        {subLink.name}
                        <span>{subLink?.icon}</span>
                      </div>
                      {subLink.dropdown && (
                        <ul
                          className={cn(
                            "bg-gray-200 mt-2 rounded  border border-gray-200",
                            isSubDropDownOpen
                              ? "h-auto p-4 block"
                              : "h-0 hidden p-0"
                          )}
                        >
                          {subLink.dropdown.map((nestedLink) => (
                            <li
                              key={nestedLink.name}
                              className="hover:text-accentColor py-1 px-4 my-2"
                            >
                              {nestedLink.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;
