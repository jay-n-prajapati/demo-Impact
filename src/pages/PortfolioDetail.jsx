import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import BreadCrumb from "../components/common/BreadCrums";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import Carousel from "react-multi-carousel";
import { useEffect } from "react";
import { scrollToTop } from "../utils";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ImageItems = [
  {
    src: "/images/app-1.jpg",
  },
  {
    src: "/images/product-1.jpg",
  },
  {
    src: "/images/books-1.jpg",
  },
  {
    src: "/images/books-2.jpg",
  },
];

const PortfolioDetail = () => {

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <div className="bg-accentColor">
        <Container>
          <PageHeader title={"Portfolio Details"} />
        </Container>
      </div>
      <BreadCrumb />
      <Container>
        <Carousel
          className="py-16"
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          arrows={true}
          autoPlaySpeed={5000}
          transitionDuration={2000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {ImageItems.map((imageItem, idx) => {
            return (
              <img
                key={idx}
                src={imageItem.src}
                alt={imageItem.src}
                className="w-[95vw] sm:w-[70vw] lg:w-[85vw] mx-auto"
              />
            );
          })}
        </Carousel>

        <div className="grid grid-cols-12 justify-center items-start w-[95vw] sm:w-[70vw] lg:w-[85vw] mx-auto my-10">
          {/* Left */}
          <div className="col-start-1 col-span-12 lg:col-span-8">
            <h2 className="text-2xl font-bold mb-5">
              This is an example of portfolio details
            </h2>

            <p className="font-opensans mb-4">
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
              inventore commodi labore quia quia. Exercitationem repudiandae
              officiis neque suscipit non officia eaque itaque enim. Voluptatem
              officia accusantium nesciunt est omnis tempora consectetur
              dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>

            <p className="font-opensans mb-4">
              Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non
              aspernatur atque natus ut cum nam et. Praesentium error dolores
              rerum minus sequi quia veritatis eum. Eos et doloribus doloremque
              nesciunt molestiae laboriosam.
            </p>

            <div className="relative mb-12 bg-[#F8F8F8] p-7 pb-0">
              <p className=" text-primary font-opensans italic mb-4">
                <i className="inline-block mr-2">
                  <FaQuoteLeft className="text-accentColor text-lg" />
                </i>
                <span>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                </span>
                <i className="inline-block ml-2">
                  <FaQuoteRight className="text-accentColor text-lg" />
                </i>
              </p>

              <div>
                <img
                  src="/images/testimonials-2.jpg"
                  alt="Image"
                  className="w-[90px] h-[90px] rounded-full border-[6px] border-white float-left mr-3 align-middle"
                />
                <h3 className="text-lg font-bold mt-4 mb-1 pt-5">
                  Sara Wilsson
                </h3>
                <h4 className="text-sm text-[#6c757d] m-0">Designer</h4>
              </div>
            </div>

            <p className="font-opensans mb-4">
              Impedit ipsum quae et aliquid doloribus et voluptatem quasi.
              Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea
              vitae suscipit vitae sunt. Repudiandae incidunt cumque minus
              deserunt assumenda tempore. Delectus voluptas necessitatibus est.
            </p>
            <p className="font-opensans mb-4">
              Sunt voluptatum sapiente facilis quo odio aut ipsum repellat
              debitis. Molestiae et autem libero. Explicabo et quod
              necessitatibus similique quis dolor eum. Numquam eaque praesentium
              rem et qui nesciunt.
            </p>
          </div>

          {/* Right */}
          <div className="col-start-1 lg:col-start-10 col-span-12 lg:col-span-3">
            <h3 className="text-xl font-bold mb-5 pb-5 relative after:absolute after:block after:w-[50px] after:h-[3px] after:left-0 after:bottom-0 after:bg-accent">
              Project information
            </h3>

            <ul>
              <li className="flex flex-col pb-4">
                <strong className="uppercase font-normal text-default opacity-50 text-sm">
                  Category
                </strong>
                <span> Web Design</span>
              </li>

              <li className="flex flex-col pb-4">
                <strong className="uppercase font-normal text-default opacity-50 text-sm">
                  Client
                </strong>
                <span> ASU Company</span>
              </li>

              <li className="flex flex-col pb-4">
                <strong className="uppercase font-normal text-default opacity-50 text-sm">
                  Project Date
                </strong>
                <span> 01 March, 2020</span>
              </li>

              <li className="flex flex-col pb-4">
                <strong className="uppercase font-normal text-default opacity-50 text-sm">
                  Project URL
                </strong>
                <span className="text-accent"> www.xyz.com</span>
              </li>

              <li>
                <Button className="rounded-full px-[40px!important]">
                  Visit Website
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PortfolioDetail;
