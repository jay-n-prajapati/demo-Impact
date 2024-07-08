import { useEffect, useState } from "react";

const useScroll = (elementId) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const handleScroll = () => {
    window.scrollY > navHeight ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    const navHeight = document.querySelector(elementId).offsetHeight;
    setNavHeight(navHeight);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [isScrolled];
};

export default useScroll;
