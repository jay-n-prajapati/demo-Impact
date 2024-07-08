import Button from "../components/common/Button";
import Container from "../components/common/Container";
import Input from "../components/common/Input";
import SectionHeader from "../components/common/SectionHeader";
import { contactCards } from "../constants";

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <SectionHeader title="Contact Us" />
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
          <div
            className="bg-accentColor p-8 lg:p-5 basis-1/3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex flex-col justify-center gap-5 h-full">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-[#1A9082] text-white p-5 shadow-md group"
                >
                  <div className="rounded-full shadow-xl bg-[#48A69B] group-hover:bg-white duration-300 p-3">
                    <div className="text-2xl group-hover:text-accentColor">
                      {card.icon}
                    </div>
                  </div>
                  <div>
                    <h1>{card.title}</h1>
                    <p>{card.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="basis-2/3 p-8 shadow-lg lg:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <form className="w-full">
              <div className="flex flex-col gap-5">
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <Input className="" placeholder="Your Name" />
                  </div>
                  <div>
                    <Input className="" placeholder="Your Name" />
                  </div>
                </div>

                <div>
                  <Input className="" placeholder="Your Name" />
                </div>

                <div>
                  <textarea
                    className="w-full border border-[#D3D3D3] px-4 py-2 outline-none focus:border-black duration-300"
                    name="message"
                    rows="8"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>

                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    className="bg-accentColor border-none text-white"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
