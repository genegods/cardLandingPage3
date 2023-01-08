import React from "react";
import AllCards from "../cards/AllCards";
import TitlePage from "./TitlePage";

const HeroPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="w-full h-screen grid grid-rows-2 md:grid-cols-5">
          <div className="centered md:h-screen md:col-span-2">
            <TitlePage/>
          </div>
          <div className=" md:h-screen md:col-span-3">
            <AllCards/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroPage;
