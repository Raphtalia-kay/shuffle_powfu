import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={10}
          outerSize={25}
          color="83, 154, 12"
          outerAlpha={0.1} // opacity of outer cursor while hover
          innerScale={0} // size of inner cursor while hover
          outerScale={10} // size of outer cursor while hover
          trailingSpeed={1} // following dot speed
          outerStyle={{
            background: "rgb(83, 154, 12);",
            background:
              "radial-gradient(circle, rgba(83, 154, 12,1) 0%, rgba(255,255,255,0.2) 100%)",
            filter: "blur(15px)",
          }}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
