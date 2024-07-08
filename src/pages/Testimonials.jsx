import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa6";
import SectionHeader from "../components/common/SectionHeader";
import { testimonials } from "../constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../components/common/Container";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonials = () => {
  return (
    <Container>
      <SectionHeader title={"Testimonials"} />
      <div data-aos="fade-up">
        <Carousel
          className="pb-20"
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration={2000}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          containerClass="custom-carousel"
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-8 shadow-lg lg:mx-5"
            >
              <div className="overflow-hidden rounded-full size-24">
                <img src={testimonial.img} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-[#b2b2b2]">{testimonial.designation}</p>
              </div>
              <div className="flex gap-1">
                <FaStar className="text-yellow-500 text-lg" />
                <FaStar className="text-yellow-500 text-lg" />
                <FaStar className="text-yellow-500 text-lg" />
                <FaStar className="text-yellow-500 text-lg" />
                <FaStar className="text-yellow-500 text-lg" />
              </div>
              <div>
                <i className="flex gap-2">
                  {/* <FaQuoteLeft /> */}
                  {testimonial.review}
                  {/* <FaQuoteRight /> */}
                </i>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonials;
