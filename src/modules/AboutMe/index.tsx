import Image from "next/image";
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
  SiRedis,
  SiVuedotjs,
  SiNuxtdotjs
} from "react-icons/si";
import { ExternalLink } from "../../components/ExternalLink";

import { Icon } from "../../components/Icon";

const icons = [
    {
        icon: SiJavascript,
        label: "JavaScript",
        color: "text-yellow-400",
    },
    {
        icon: SiTypescript,
        label: "TypeScript",
        color: "text-blue-400",
    },
    {
        icon: SiNodedotjs,
        label: "NodeJS",
        color: "text-green-400",
    },
    {
        icon: SiReact,
        label: "React",
        color: "text-blue-400",
    },
    {
        icon: SiVuedotjs,
        label: "VueJS",
        color: "text-green-400",
    },
    {
        icon: SiNuxtdotjs,
        label: "NuxtJS",
        color: "text-green-400",
    },
    {
        icon: SiRedux,
        label: "Redux",
        color: "text-purple-400",
    },
    {
        icon: SiGraphql,
        label: "GraphQL",
        color: "text-pink-400",
    },
    {
        icon: SiAzuredevops,
        label: "Azure DevOps",
        color: "text-blue-400",
    },
    {
        icon: SiAmazonaws,
        label: "AWS",
        color: "text-yellow-400",
    },
    {
        icon: SiMongodb,
        label: "MongoDB",
        color: "text-green-400",
    },
    {
        icon: SiRedis,
        label: "Redis",
        color: "text-red-400",
    },
    {
        icon: SiNextdotjs,
        label: "NextJS",
        color: "text-black",
    },
    {
        icon: SiMeteor,
        label: "Meteor",
        color: "text-blue-400",
    },
    {
        icon: SiCypress,
        label: "Cypress",
        color: "text-green-400",
    },
    {
        icon: SiJest,
        label: "Jest",
        color: "text-red-400",
    },
    {
        icon: SiStripe,
        label: "Stripe",
        color: "text-purple-400",
    },
    {
        icon: SiTailwindcss,
        label: "TailwindCSS",
        color: "text-blue-400",
    },
]

interface AboutMeProps {
  item: NavItem;
}

export const AboutMe = ({ item }: AboutMeProps) => {
  return (
    <section aria-labelledby="aboutme" id="aboutme" className="w-full">
      <div className="py-12 items-start max-w-screen-xl px-6 mx-auto">
        <h1 className="text-2xl font-bold mb-3">
          <span className="text-cyan-500 text-xl">{item.id}</span> {item.title}
          <div className="w-10 border-b-2 border-cyan-500 inline-block ml-2"/>
        </h1>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="item py-4 mx-2 w-full md:w-1/2 h-auto flex-auto">
            <p className="max-w-lg text-justify text-base dark:text-gray-200 text-gray-600 font-normal my-4">
              Hello! My name is{" "}
              <span className="text-gray-400">Kelvin Henrique</span> I&apos;m an
              Electrical Engineer and System and Software Developer. I was born
              in Sao Paulo, Brazil, and currently living in Dublin, Ireland. I
              enjoy creating things that live on the internet. My interest in
              web development started in 2018 when I decided to open a small ISP
              business and started studying Networking and Programming.
            </p>

            <p className="max-w-lg text-justify text-base dark:text-gray-200 text-gray-600 font-normal my-4">
              Fast-forward to today, and I&apos;ve had the privilege of working
              as a <span className="text-cyan-500">Web Developer</span> in a{" "}
              <ExternalLink href="https://site.eurekadigital.app/">
                content publisher
              </ExternalLink>
              , a{" "}
              <ExternalLink href="https://clusterstack.io/en">
                start-up
              </ExternalLink>
              , and a{" "}
              <ExternalLink href="https://pathable.com/">
                huge corporation
              </ExternalLink>
              . My main focus these days is building web applications as a{" "}
              <span className="text-cyan-500">Full Stack Developer</span>{" "}
              working with the latest tech in the market to achieve better
              performance in the application.
            </p>

            <p className="max-w-lg text-justify text-base dark:text-gray-200 text-gray-600 font-normal my-4">
              Here are a few technologies I&apos;ve been working with recently:
            </p>
          </div>
          <div className="item py-4 mx-2 w-full md:w-1/2 h-auto flex-auto">
            <div className="md:mt-12 flex justify-center ">
              <Image
                src="/images/kelvin.jpeg"
                alt="Kelvin Oliveira"
                className="rounded-3xl border-2 border-cyan-500 grayscale hover:grayscale-0 transition-all duration-300"
                width={275}
                height={275}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 px-4 md:px-0">
            {icons.map((icon, i) => (
                <Icon
                icon={icon.icon}
                label={icon.label}
                className={`${icon.color}`}
                key={i}
                />
            ))}
        </div>
      </div>
    </section>
  );
};
