import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { links } from "../../constants/index";
import { useState } from "react";
import Container from "../common/Container";
import { cn } from "../../utils";
import NavbarModal from "./NavbarModal";
import useScroll from "../../hooks/useScroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled] = useScroll("#nav");

  return (
    <>
      {isOpen && <NavbarModal setIsOpen={setIsOpen} />}
      <nav
        className={cn(" bg-accentColor", isScrolled ? "shadow-xl" : "")}
        id="nav"
      >
        <Container className="flex items-center justify-between text-white py-4 font-montserrat font-extrabold">
          <div>
            <h1 className="font-montserrat-bold text-xl sm:text-2xl md:text-3xl">
              Impact
            </h1>
          </div>
          <div>
            <div className="block xl:hidden">
              <IoMenu
                className="text-2xl"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            </div>
            <div className="hidden xl:block">
              <ul className="flex lg:flex-row lg:gap-4">
                {links.map((link, idx) => (
                  <li
                    key={idx}
                    className="p-1 after:content-[' '] after:absolute relative after:w-0 hover:after:w-full after:origin-left after:transition-all after:duration-500 after:h-[2px] after:bg-navHoverColor after:bottom-0 after:left-0 group/link "
                  >
                    <a
                      href={link?.slug}
                      className="flex gap-2 items-center font-medium"
                    >
                      {link.name}
                      {link?.icon}
                    </a>
                    {link.dropdown && (
                      <ul
                        className={cn(
                          "absolute hidden group-hover/link:block text-black font-medium bg-white rounded pt-4 pl-2 px-3 py-2 min-w-[200px]",
                          link.position
                        )}
                      >
                        {link.dropdown.map((subLink) => (
                          <li
                            key={subLink.name}
                            className="relative group/subLink py-2 cursor-pointer"
                          >
                            <div className="group-hover/subLink:text-accentColor  flex items-center gap-1">
                              {subLink.name}
                              {subLink.icon && <span>{subLink.icon}</span>}
                            </div>
                            {subLink.dropdown && (
                              <ul
                                className={cn(
                                  "absolute hidden group-hover/subLink:block bg-white rounded min-w-[200px]",
                                  subLink.position
                                )}
                              >
                                {subLink.dropdown.map((nestedLink) => (
                                  <li
                                    key={nestedLink.name}
                                    className="hover:text-accentColor py-1 px-4 my-2 cursor-pointer"
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
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
