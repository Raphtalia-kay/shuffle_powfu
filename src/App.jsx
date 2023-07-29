import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AnimatedCursor from "react-animated-cursor";
import Discography from "./pages/Discography";
import Tours from "./pages/Tours";
import Blog from "./pages/Blog";

import About from "./pages/About";
import UptoTop from "./components/UptoTop";

const App = () => {
  

  return (
    <>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={10}
          outerSize={15}
          color="82,128,31"
          outerAlpha={0.1} // opacity of outer cursor while hover
          innerScale={0} // size of inner cursor while hover
          outerScale={10} // size of outer cursor while hover
          trailingSpeed={1} // following dot speed
          outerStyle={{
            background:
              "radial-gradient(circle, rgba(82,128,31,1) 0%, rgba(255,255,255,0.2) 100%)",
            filter: "blur(75px)",
          }}
        />
      </div>
      <UptoTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
