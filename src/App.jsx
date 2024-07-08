import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import ServiceDetail from "./pages/ServiceDetail";
import BlogDetail from "./pages/BlogDetail";
import PortfolioDetail from "./pages/PortfolioDetail";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 350, animatedClassName: "aos-animate" });
  }, []);

  return (
    <div className="font-default">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/portfolio-detail" element={<PortfolioDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
