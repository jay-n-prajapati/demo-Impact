import { BsCheck, BsX } from "react-icons/bs";
import { PricingItems } from "../constants";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import Container from "../components/common/Container";

const Pricing = () => {
  return (
    <Container className={"h-auto"}>
      <SectionHeader title={"Pricing"} />
      <div
        className="flex flex-col gap-6 justify-center items-center lg:flex-row lg:mt-24"
        data-aos="zoom-in-up"
      >
        {PricingItems.map((pricingItem, idx) => {
          return <PricingCard key={idx} pricingItem={pricingItem} />;
        })}
      </div>
    </Container>
  );
};

const PricingCard = ({ pricingItem }) => {
  return (
    <div
      className={`py-14 px-10 relative shadow-[0px_0px_29px_0px_#0000001a] rounded-2xl w-full lg:basis-1/3 bg-white ${
        pricingItem.isMiddle
          ? "lg:scale-[1.1] z-10 border-[3px] border-accentColor"
          : ""
      }`}
      
    >
      <h3 className="font-semibold mb-4 text-xl text-center">
        {pricingItem.title}
      </h3>

      <div className="mt-7 mb-5 rounded-full flex justify-center items-center before:absolute before:h-20 before:w-20 before:rounded-full before:bg-accentColor before:transform before:translate-z-[-1] before:z-20 after:absolute after:h-[102px] after:w-[102px] after:rounded-full after:bg-[#00837440] after:transform after:translate-z-[-2] after:z-10">
        <i className="text-3xl text-white z-30 bg-accent rounded-full p-4">
          {pricingItem?.icon}
        </i>
      </div>

      <h4 className="text-5xl text-accentColor font-bold mb-6 text-center">
        <sup className="text-2xl -top-4">$</sup>
        {pricingItem.price}
        <span className="text-lg">/ month</span>
      </h4>

      {/* Features */}
      <ul className="py-5">
        {pricingItem?.features.map((feature, idx) => {
          return (
            <li
              key={idx}
              className={`py-[10px] flex items-center font-opensans`}
            >
              <i
                className={`${
                  feature?.isAvailable === false
                    ? "text-[#bcbdbe]"
                    : "text-[#059552]"
                } text-2xl`}
              >
                {feature?.isAvailable === false ? <BsX /> : <BsCheck />}
              </i>
              <span
                className={`${
                  feature?.isAvailable === false
                    ? "text-[#bcbdbe] line-through"
                    : "text-primary"
                } `}
              >
                {feature.desc}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Button */}
      <div className="text-center">
        <Button className="bg-white border-accentColor text-accentColor font-semibold hover:bg-accentColor hover:text-white hover:border-accentColor">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
