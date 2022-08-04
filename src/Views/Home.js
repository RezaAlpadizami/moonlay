import React from "react";
import Footer from "../Component/Footer";

import bgImage from "../Assets/bg-home.jpg";

const Home = () => {
  return (
    <div>
      <img src={bgImage} alt="" className="no-repeat cover-full" />
      <Footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-[-10] flex-1 w-full" />
    </div>
  );
};

export default Home;
