import { RepoCard } from "../../components/Card";

interface ProjectsProps {
  item: NavItem;
  repos: Repo[];
}

export const Projects = ({ item, repos }: ProjectsProps) => {
  return (
    <section aria-labelledby="projects" className="w-full">
      <div className="py-12 items-start max-w-screen-xl px-6 mx-auto">
        <h1 className="text-2xl font-bold mb-3">
          <span className="text-cyan-500 text-xl">{item.id}</span> {item.title}
          <div className="w-10 border-b-2 border-cyan-500 inline-block ml-2"/>
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
};
