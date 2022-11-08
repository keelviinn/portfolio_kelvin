import type { NextPage } from "next";
import { AboutMe } from "../modules/AboutMe";
import { Hero } from "../modules/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
    </div>
  );
};

export default Home;
