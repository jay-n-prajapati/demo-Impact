import { Link } from "react-router-dom";
import SectionHeader from "../components/common/SectionHeader";
import { services } from "../constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import Container from "../components/common/Container";

const Services = () => {
  return (
    <div id="services">
      <Container>
        <SectionHeader title="Services" />
        <div>
          <div className="grid gap-6 grid-rows-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Link
                to="/service-detail"
                key={idx}
                className="shadow-[0px_0px_29px_0px_#0000001a] p-10 flex flex-col gap-2 group"
                data-aos="fade-up"
              >
                <div className="text-6xl w-fit text-accentColor mb-2 relative group-hover:text-black duration-300 before:content-[' '] before:absolute before:top-0 before:-right-2 before:size-12 before:rounded-full before:bg-transparent group-hover:before:bg-[#0083745b] before:duration-300">
                  {service.icon}
                </div>
                <h1 className="text-2xl w-fit font-semibold text-accentColor pb-2 border-b-4 group-hover:border-accentColor duration-300">
                  {service.title}
                </h1>
                <div>
                  <p>{service.content}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#00878A] mt-2">
                    Read More <IoIosArrowRoundForward className="text-2xl" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
