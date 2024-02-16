"use client";

import { TypeAnimation } from "react-type-animation";

const OccupationTyper = () => {
  return (
    <TypeAnimation
      sequence={[
        400,
        "UI Engineer",
        1000,
        "Game Programmer",
        1000,
        "Mushroom Farmer",
        1000,
        "Web Developer",
        1000,
        "Problem Solver",
        1000,
      ]}
      speed={40}
      wrapper="h2"
      className=""
      deletionSpeed={70}
      cursor={false}
      repeat={Infinity}
    />
  );
};

export default OccupationTyper;
