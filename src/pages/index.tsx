import type { NextPage } from "next";
import { AboutMe } from "../modules/AboutMe";
import { Experience } from "../modules/Experience";
import { Hero } from "../modules/Hero";

import { navItems } from "../variables/navItems";

interface HomeProps {
  navItems: NavItem[];
}

const Home = ({ navItems }: HomeProps) => {
  return (
    <div>
      <Hero />
      <AboutMe item={navItems.find(({ id }) => id === "01.") as NavItem} />
      <Experience item={navItems.find(({ id }) => id === "02.") as NavItem} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: { 
      navItems
    },
  };
}