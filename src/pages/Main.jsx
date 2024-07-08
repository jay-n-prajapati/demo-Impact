import About from "./About";
import BlogPosts from "./BlogPosts";
import Contact from "./Contact";
import Faq from "./Faq";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Services from "./Services";
import Team from "./Team";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <>
      <div>
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Portfolio />
        <Team />
        <Pricing />
        <Faq />
        <BlogPosts />
        <Contact />
      </div>
    </>
  );
};

export default Main;
