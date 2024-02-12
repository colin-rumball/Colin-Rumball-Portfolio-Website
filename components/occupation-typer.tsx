"use client";

import { TypeAnimation } from "react-type-animation";

const OccupationTyper = () => {
  return (
    <TypeAnimation
      sequence={[
        400,
        "I'm a UI Engineer",
        1000,
        "I'm a Game Programmer",
        1000,
        "I'm a Mushroom Farmer",
        1000,
        "I'm a Web Developer",
        1000,
        "I'm a Problem Solver",
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
