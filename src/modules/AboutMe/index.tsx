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
  SiRedis
} from "react-icons/si";
import { ExternalLink } from "../../components/ExternalLink";

import { Icon } from "../../components/Icon";

interface AboutMeProps {
  item: NavItem;
}

export const AboutMe = ({ item }: AboutMeProps) => {
  return (
    <section aria-labelledby="aboutme" className="w-full">
      <div className="py-12 items-start max-w-screen-xl px-6 mx-auto">
        <h1 className="text-2xl font-bold mb-3">
          <span className="text-cyan-500 text-xl">{item.id}</span> {item.title}
          <span className="text-cyan-500 text-xl ml-2">____________</span>
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
          <Icon
            icon={SiJavascript}
            label="JavaScript"
            className="text-yellow-400"
            key="javascript"
          />
          <Icon
            icon={SiTypescript}
            label="TypeScript"
            className="text-blue-400"
            key="typescript"
          />
          <Icon
            icon={SiNodedotjs}
            label="NodeJS"
            className="text-green-400"
            key="nodejs"
          />
          <Icon
            icon={SiReact}
            label="React"
            className="text-blue-400"
            key="react"
          />
          <Icon
            icon={SiRedux}
            label="Redux"
            className="text-purple-400"
            key="redux"
          />
          <Icon
            icon={SiGraphql}
            label="GraphQL"
            className="text-pink-400"
            key="graphql"
          />
          <Icon
            icon={SiAzuredevops}
            label="Azure DevOps"
            className="text-blue-400"
            key="azuredevops"
          />
          <Icon
            icon={SiAmazonaws}
            label="AWS"
            className="text-yellow-400"
            key="aws"
          />
          <Icon
            icon={SiMongodb}
            label="MongoDB"
            className="text-green-400"
            key="mongodb"
          />
          <Icon
            icon={SiRedis}
            label="Redis"
            className="text-red-400"
            key="redis"
          />
          <Icon
            icon={SiNextdotjs}
            label="NextJS"
            className="text-black"
            key="nextjs"
          />
          <Icon
            icon={SiMeteor}
            label="Meteor"
            className="text-blue-400"
            key="meteor"
          />
          <Icon
            icon={SiCypress}
            label="Cypress"
            className="text-green-400"
            key="cypress"
          />
          <Icon
            icon={SiJest}
            label="Jest"
            className="text-red-400"
            key="jest"
          />
          <Icon
            icon={SiStripe}
            label="Stripe"
            className="text-purple-400"
            key="stripe"
          />
          <Icon
            icon={SiTailwindcss}
            label="TailwindCSS"
            className="text-blue-400"
            key="tailwindcss"
          />
        </div>
      </div>
    </section>
  );
};
