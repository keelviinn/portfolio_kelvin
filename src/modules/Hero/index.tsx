import { NextComponentType } from "next";
import { ExternalLink } from "../../components/ExternalLink";
import { LinkButton } from "../../components/LinkButton";

export const Hero: NextComponentType = () => {
  return (
    <section aria-labelledby="hero-title" className="mt-24 w-full">
      <div className="py-12 flex flex-col items-end max-w-screen-xl px-6 mx-auto">
        <p className="md:text-2xl text-lg leading-8 mb-4 md:mb-8">
          <span className="text-cyan-500">Hi, my name is</span>
        </p>
        <h1 className="md:text-5xl text-3xl dark:text-gray-200 text-gray-400 mb-4 md:mb-8 font-bold">
          Kelvin Henrique
        </h1>
        <h2 className="md:text-5xl text-2xl dark:text-gray-300 text-gray-500 mb-4 md:mb-8 font-bold">
          Let&apos;s build the future 🔨
        </h2>

        <p className="max-w-xl text-right text-base dark:text-gray-400 text-gray-600 font-bold mb-4 md:mb-8">
          I&apos;m a software engineer specializing in javascript and typescript
          stack and providing exceptional digital experiences. Currently,
          I&apos;m focused on building web services at{" "}
          <ExternalLink href="https://clusterstack.io/en">ClusterStack</ExternalLink>.
        </p>

        <LinkButton href="https://www.linkedin.com/in/khenriqqe/" className="my-6">
          Check my <span className="text-blue-500">LinkedIn</span>
        </LinkButton>
      </div>
    </section>
  );
};
