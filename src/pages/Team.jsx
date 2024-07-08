import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import { teamMembers } from "../constants";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Team = () => {
  return (
    <div id="team">
    <Container>
      <SectionHeader title={"Our Team"} />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4" data-aos="fade-up">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="p-4 shadow-[0px_0px_29px_0px_#0000001a] rounded-lg flex flex-col gap-4"
          >
            <div>
              <img src={member.img} alt="member" className="rounded-xl" />
            </div>
            <div>
              <h3 className="text-center text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-center text-[#b2b2b2] text-sm">
                {member.field}
              </p>
            </div>
            <div className="flex justify-around items-center text-[#b2b2b2] text-lg pb-2">
              <div className="p-2 border border-[#b2b2b2] hover:text-accentColor hover:border-accentColor duration-300 rounded-full">
                <FaXTwitter />
              </div>
              <div className="p-2 border border-[#b2b2b2] hover:text-accentColor hover:border-accentColor duration-300 rounded-full">
                <FaFacebook />
              </div>
              <div className="p-2 border border-[#b2b2b2] hover:text-accentColor hover:border-accentColor duration-300 rounded-full">
                <FaInstagram />
              </div>
              <div className="p-2 border border-[#b2b2b2] hover:text-accentColor hover:border-accentColor duration-300 rounded-full">
                <FaLinkedin />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
};

export default Team;
