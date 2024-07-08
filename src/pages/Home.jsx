import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "../components/common/Button";
import { BsEasel } from "react-icons/bs";
import { heroCards } from "../constants";
import Container from "../components/common/Container";

const Home = () => {
  return (
    <div className="bg-accentColor" data-aos="fade-up" id="home">
      <Container className="xl:mb-32 relative py-14">
        <div className="flex flex-col">
          <div className="flex flex-col-reverse md:justify-between md:flex-row items-center gap-16 mb-4 pb-4 xl:pb-28">
            <div className="flex flex-col gap-6">
              <h1 className="text-white font-montserrat-bold text-5xl">
                Welcome to Impact
              </h1>
              <p className="text-white">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div className="flex justify-between sm:justify-normal sm:gap-3">
                <Button className={'font-montserrat hover:border-white'}>Get Started</Button>
                <Button className="border-none bg-transparent hover:text-white flex gap-2 items-center">
                  <FaRegCirclePlay className="text-2xl" /> Watch Video
                </Button>
              </div>
            </div>
            <div>
              <img src="/images/hero-img.svg" alt="hero-img" />
            </div>
          </div>
          <div className="xl:absolute -bottom-[18%] xl:w-full xl:left-0 xl:px-16">
            <div className="gap-6 grid md:grid-cols-2 xl:grid-cols-4">
              {heroCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-lg size-full bg-accentColor hover:bg-[#169485] duration-300 shadow-[0px_0px_29px_0px_#0000001a] flex items-center justify-center h-56"
                >
                  <div className="flex flex-col gap-2 justify-center items-center text-white font-semibold lg:text-2xl font-montserrat-bold">
                    {card.icon}
                    {card.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
