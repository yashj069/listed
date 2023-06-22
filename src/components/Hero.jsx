import React from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Detail from "../components/Detail";
import Header from "../components/Header";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between gap-8 w-full py-2">
      <Header />
      <Card />
      <Chart />
      <Detail />
    </div>
  );
};

export default Hero;
