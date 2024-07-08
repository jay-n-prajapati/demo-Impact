import { FaCircleCheck } from "react-icons/fa6";
import SectionHeader from "../components/common/SectionHeader";
import { Link } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";
import Container from "../components/common/Container";
import client1 from "/images/client-1.png";
import client2 from "/images/client-2.png";
import client3 from "/images/client-3.png";
import client4 from "/images/client-4.png";
import client5 from "/images/client-5.png";
import client6 from "/images/client-6.png";
import client7 from "/images/client-7.png";
import client8 from "/images/client-8.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CountUp from "react-countup";
import { BsEmojiSmile, BsJournalRichtext, BsPeople } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

const clientImages = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
];

const About = () => {
  return (
    <div id="about">
      <Container>
        <SectionHeader title={"About Us"} />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div
              className="lg:basis-[50%] flex flex-col gap-8"
              data-aos="fade-up"
            >
              <h1 className="text-2xl sm:text-4xl font-semibold">
                Voluptatem dignissimos provident laboris nisi ut aliquip ex ea
                commodo
              </h1>
              <div className="overflow-hidden rounded-2xl">
                <img src="/images/about1.jpg" alt="about1" />
              </div>
              <div>
                <p className="mb-4">
                  Ut fugiat ut sunt quia veniam. Voluptate perferendis
                  perspiciatis quod nisi et. Placeat debitis quia recusandae
                  odit et consequatur voluptatem. Dignissimos pariatur
                  consectetur fugiat voluptas ea.
                </p>
                <p>
                  Temporibus nihil enim deserunt sed ea. Provident sit expedita
                  aut cupiditate nihil vitae quo officia vel. Blanditiis
                  eligendi possimus et in cum. Quidem eos ut sint rem veniam
                  qui. Ut ut repellendus nobis tempore doloribus debitis
                  explicabo similique sit. Accusantium sed ut omnis beatae neque
                  deleniti repellendus.
                </p>
              </div>
            </div>
            <div
              className="lg:basis-[50%] flex flex-col gap-8"
              data-aos="fade-up"
            >
              <div>
                <p className="text-[#b2b2b2]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-4 items-center">
                    <FaCircleCheck className="text-xl text-accentColor" />
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <FaCircleCheck className="text-xl text-accentColor" />
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <FaCircleCheck className="text-xl text-accentColor" />
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl relative">
                <img src="/images/about2.jpg" alt="about1" />
                <Link className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-accentColor p-4 rounded-full">
                  <IoIosPlay className="text-4xl" />
                </Link>
              </div>
            </div>
          </div>
          <div className="py-8 items-center" data-aos="fade-up">
            <div>
              <Carousel
                className=""
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={2000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              >
                {clientImages.map((image, index) => (
                  <div key={index} className="flex justify-around w-full">
                    <img
                      src={image}
                      alt={"imgs"}
                      className="h-8 w-auto object-contain hover:scale-110 duration-300"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row gap-8 py-14"
            data-aos="fade-up"
          >
            <div className="basis-[40%]">
              <img src="/images/stats-img.svg" alt="img" />
            </div>
            <div className="basis-[60%] grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex gap-6" data-aos="fade-up">
                <div>
                  <BsEmojiSmile className="text-5xl text-accentColor" />
                </div>
                <div>
                  <CountUp
                    start={0}
                    end={232}
                    duration={2}
                    className="text-4xl font-semibold"
                  />
                  <p className="text-[#575757aa] mt-2">
                    <strong>Happy Clients</strong> Lorem, ipsum.
                  </p>
                </div>
              </div>
              <div className="flex gap-6" data-aos="fade-up">
                <div>
                  <BsJournalRichtext className="text-5xl text-accentColor" />
                </div>
                <div>
                  <CountUp
                    start={0}
                    end={521}
                    duration={2}
                    className="text-4xl font-semibold"
                  />
                  <p className="text-[#575757aa] mt-2">
                    <strong>Happy Clients</strong> Lorem, ipsum.
                  </p>
                </div>
              </div>
              <div className="flex gap-6" data-aos="fade-up">
                <div>
                  <MdHeadsetMic className="text-5xl text-accentColor" />
                </div>
                <div>
                  <CountUp
                    start={0}
                    end={1453}
                    duration={2}
                    className="text-4xl font-semibold"
                  />
                  <p className="text-[#575757aa] mt-2">
                    <strong>Happy Clients</strong> Lorem, ipsum.
                  </p>
                </div>
              </div>
              <div className="flex gap-6" data-aos="fade-up">
                <div>
                  <BsPeople className="text-5xl text-accentColor" />
                </div>
                <div>
                  <CountUp
                    start={0}
                    end={32}
                    duration={2}
                    className="text-4xl font-semibold"
                  />
                  <p className="text-[#575757aa] mt-2">
                    <strong>Happy Clients</strong> Lorem, ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative h-[70vh] md:h-[60vh] bg-[url('/images/unnamed.jpg')] bg-fixed bg-cover bg-center rounded-xl overflow-hidden"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
              className="h-full flex flex-col gap-5 justify-center items-center text-white relative z-10 text-center md:text-left"
              data-aos="zoom-in-up"
            >
              <div className="flex flex-col text-center w gap-2 justify-center items-center px-8">
                <Link className="text-white bg-accentColor p-4 rounded-full">
                  <IoIosPlay className="text-4xl" />
                </Link>
                <div className=" w[70%] m-8">
                  <h1 className="text-4xl font-bold text-white ">
                    Call To Action
                  </h1>
                  <p className="text-white italic pt-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button className="bg-transparent border-2 border-white py-3 px-10 rounded text-md font-medium tracking-wider hover:border-accentColor hover:bg-accentColor font-semibold hover:text-white duration-500">
                    Call To Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
