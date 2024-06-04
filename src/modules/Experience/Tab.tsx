interface TabProps {
  experience: Experience;
  setExperience: (experience: Experience) => void;
  experiences: Experience[];
}

export const Tab = ({ experience, setExperience, experiences }: TabProps) => {
  const active = "text-cyan-500 border-cyan-500";

  return (
    <ul className="flex border-b md:border-b-0 overflow-y-scroll md:overflow-hidden -mb-px md:flex-col md:flex-wrap md:-ml-px md:border-l">
      {experiences.map((item, i) => (
        <li
          className={`p-2 md:p-6 border-b-2 md:border-b-0 md:border-l-2 hover:text-gray-300 hover:border-gray-300 w-full text-start
              ${item.id === experience.id ? active : ""}          
            `}
          key={i}
        >
          <button
            className="text-left"
            onClick={() => setExperience(item)}
          >
            {item.company.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
