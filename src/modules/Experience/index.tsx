import Image from "next/image";
import Link from "next/link";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiGraphql,
  SiAzuredevops,
  SiAmazonaws,
  SiMongodb,
  SiNextdotjs,
  SiMeteor,
  SiCypress,
  SiJest,
  SiStripe,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { ExternalLink } from "../../components/ExternalLink";

import { Icon } from "../../components/Icon";

interface ExperienceProps {
  item: NavItem;
}

export const Experience = ({ item }: ExperienceProps) => {
  return (
    <section aria-labelledby="experience" className="w-full">
      <div className="py-12 items-start max-w-screen-xl px-6 mx-auto">
        <h1 className="text-2xl font-bold mb-3 text-end">
          <span className="text-cyan-500 text-xl">{item.id}</span> {item.title}
          <span className="text-cyan-500 text-xl ml-2">____________</span>
        </h1>
        <div className="text-sm font-medium text-start border-l border-gray-500 dark:border-gray-200">
          <ul className="flex flex-col flex-wrap -ml-px">
            <li className="mr-2">
              <button
                className="inline-block p-6 border-l-2 border-transparent hover:text-gray-300 hover:border-gray-300"
              >
                ClusterStack
              </button>
            </li>
            <li className="mr-2">
              <button
                className="inline-block p-6 text-cyan-500 border-l-2 border-cyan-500 active hover:text-gray-300 hover:border-gray-300"
              >
                Pathable
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
