import Container from "./Container";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  return (
    <div className="bg-[#148D7F]">
      <Container className={"py-4"}>
        <div className="flex gap-2 items-center text-[#b2b2b2] font-semibold">
          <Link to={"/"} className="hover:text-white duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="capitalize text-white">
            {location.pathname.slice(1)}
          </span>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
