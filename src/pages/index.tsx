import { AboutMe } from "../modules/AboutMe";
import { Experience } from "../modules/Experience";
import { Hero } from "../modules/Hero";

import { experiences } from "../variables/experiences";
import { navItems } from "../variables/navItems";

interface HomeProps {
  navItems: NavItem[];
  experiences: Experience[];
}

const Home = ({ navItems, experiences }: HomeProps) => {
  return (
    <div>
      <Hero />
      <AboutMe item={navItems.find(({ id }) => id === "01.") as NavItem} />
      <Experience
        item={navItems.find(({ id }) => id === "02.") as NavItem}
        experiences={experiences}
      />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      navItems,
      experiences: experiences.reverse(),
    },
  };
}
