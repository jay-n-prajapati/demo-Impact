import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { LuSmartphone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import Container from "./common/Container";

const TopBar = () => {
  return (
    <div className="bg-accentColor border-b border-gray-400">
      <Container className="flex justify-center md:justify-between py-2">
        <div className="flex items-center gap-4 sm:gap-8 text-white">
          <div className="flex items-center gap-1 text-xs">
            <TfiEmail />
            contact@example.com
          </div>
          <div className="flex items-center gap-1 text-xs">
            <LuSmartphone />
            +91 1111111111
          </div>
        </div>
        <div className="hidden md:flex items-center text-gray-300 gap-3 text-lg">
          <FaXTwitter className="hover:text-white" />
          <FaFacebook className="hover:text-white" />
          <FaInstagram className="hover:text-white" />
          <FaLinkedin className="hover:text-white" />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
