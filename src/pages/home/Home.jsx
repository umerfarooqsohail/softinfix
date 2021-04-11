import React from "react";
import Carousal from "../../component/carousal/Carousal";
import Introduction from "../../component/introduction/Introduction";
import Project from "../../component/project/Project";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <Carousal />
      <Introduction />
      <Services />
      <Project />
    </div>
  );
};

export default Home;
