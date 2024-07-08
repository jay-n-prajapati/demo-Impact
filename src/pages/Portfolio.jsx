import { useState } from "react";
import SectionHeader from "../components/common/SectionHeader";
import Container from "../components/common/Container";
import { portfolioItems } from "../constants";
import { BsLink45Deg, BsZoomIn } from "react-icons/bs";
import { Link } from "react-router-dom";

const PortfolioTabItems = ["All", "App", "Product", "Branding", "Book"];

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <div id="portfolio">
      <Container>
        <SectionHeader title="Portfolio" />
        <div>
          <ul
            className="flex justify-center items-center gap-6"
            data-aos="fade-up"
          >
            {PortfolioTabItems.map((portfolioTabItem, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => setSelectedTab(portfolioTabItem)}
                  className={`text-lg font-semibold rounded-full duration-300 hover:bg-accent hover:text-accentColor inline-block cursor-pointer ${
                    selectedTab === portfolioTabItem ? "text-accentColor" : ""
                  }`}
                >
                  {portfolioTabItem}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems
            .filter((item) => selectedTab === "All" || item.tag === selectedTab)
            .map((item, idx) => (
              <div key={idx} className="shadow-xl group" data-aos="zoom-in-up">
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="shadow-lg group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="p-6 py-8">
                  <Link
                    to={"/portfolio-detail"}
                    className="text-lg font-semibold hover:text-accentColor duration-300"
                  >
                    {item.title}
                  </Link>
                  <p className="text-sm text-[#575757] mt-2">
                    Lorem ipsum, dolor sit Lorem ipsum, dolor sit
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
