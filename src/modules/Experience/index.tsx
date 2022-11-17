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
          <div className="w-10 border-b-2 border-cyan-500 inline-block ml-2"/>
        </h1>

        <div className="flex flex-col md:grid overflow-hidden grid-cols-4 gap-2 mt-12">
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
