import Accordion from "../components/common/Accordian";
import Container from "../components/common/Container";
import { accordionItems } from "../constants";

const FaqPage = () => {
  return (
    <Container className={'py-14'}>
      <div className="flex flex-col gap-6 lg:flex-row" data-aos="fade-up">
        <div className="basis-[40%] lg:px-12">
          <h3 className="flex flex-col text-4xl text-primary ">
            <span className="font-montserrat">Frequently Asked</span>
            <strong className="font-montserrat-bold leading-[1.2]">
              Questions
            </strong>
          </h3>
          <p className="opacity-70  mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit
          </p>
        </div>

        <div className="flex flex-col gap-4 basis-[60%]">
          {accordionItems.map((accordion, idx) => (
            <Accordion
              key={idx}
              answer={accordion.desc}
              question={accordion.title}
              number={accordion.id}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FaqPage;
