import { useState } from "react";

import { ExperienceItem } from "./Experience";
import { Tab } from "./Tab";
interface ExperienceProps {
  item: NavItem;
  experiences: Experience[];
}

export const Experience = ({ item, experiences }: ExperienceProps) => {
  const [experience, setExperience] = useState<Experience>(experiences[0]);

  return (
    <section aria-labelledby="experience" className="max-w-3xl mx-auto py-10">
      <div className="py-12 items-start max-w-screen-xl px-6 mx-auto">
        <h1 className="text-2xl font-bold mb-3 text-end">
          <span className="text-cyan-500 text-xl">{item.id}</span> {item.title}
          <span className="text-cyan-500 text-xl ml-2">____________</span>
        </h1>

        <div className="flex flex-col md:grid overflow-hidden grid-cols-4 gap-2">
          <div className="text-xs font-normal md:text-sm md:font-medium text-start col-span-1">
            <Tab
              experience={experience}
              setExperience={setExperience}
              experiences={experiences}
            />
          </div>
          <div className="col-span-3">
            <ExperienceItem {...experience} />
          </div>
        </div>
      </div>
    </section>
  );
};
