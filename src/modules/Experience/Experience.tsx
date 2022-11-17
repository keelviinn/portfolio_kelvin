import { ExternalLink } from "../../components/ExternalLink";

export const ExperienceItem = ({
  company,
  role,
  period,
  responsibilities,
}: Experience) => {
  return (
    <>
      <h2 className="text-base md:text-xl font-bold my-3 text-start">
        {role}{" "}
        <ExternalLink href={company.url} className="text-sm">
          <span className="text-cyan-500 md:text-lg text-base">@ {company.name}</span>
        </ExternalLink>
      </h2>
      <p className="text-sm text-start text-gray-500 my-2">{period}</p>
      <ul className="text-sm text-start text-gray-300 md:h-64 h-80">
        {responsibilities.map((responsibility, i) => (
          <li key={i} className="flex gap-2 mt-2">
            <span className="text-cyan-500">-</span>
            <p>{responsibility}</p>
          </li>
        ))}
      </ul>
    </>
  );
};