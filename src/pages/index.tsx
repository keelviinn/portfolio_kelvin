import { AboutMe } from "../modules/AboutMe";
import { Experience } from "../modules/Experience";
import { Hero } from "../modules/Hero";
import { Projects } from "../modules/Projects";
import { github } from "../services/api";

import { experiences } from "../variables/experiences";
import { navItems } from "../variables/navItems";

interface HomeProps {
  navItems: NavItem[];
  experiences: Experience[];
  repos: Repo[];
}

const Home = ({ navItems, experiences, repos }: HomeProps) => {
  return (
    <div>
      <Hero />
      <AboutMe item={navItems.find(({ id }) => id === "01.") as NavItem} />
      <Experience
        item={navItems.find(({ id }) => id === "02.") as NavItem}
        experiences={experiences}
      />
      <Projects
        item={navItems.find(({ id }) => id === "03.") as NavItem}
        repos={repos}
      />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const myRepos = await github.get("/users/keelviinn/repos", {
    params: {
      sort: "updated",
      direction: "desc",
      per_page: 6,
    },
  });

  const repos = myRepos.data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    avatar: repo.owner.avatar_url,
    owner_url: repo.owner.html_url,
    owner_login: repo.owner.login,
    description: repo.description,
    url: repo.html_url,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    page: repo.homepage,
    created_at: repo.created_at,
  }));

  return {
    props: {
      navItems,
      experiences: experiences.reverse(),
      repos,
    },
  };
}
