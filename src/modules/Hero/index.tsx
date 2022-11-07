import { NextComponentType } from "next";
import Link from "next/link";
import { LinkButton } from "../../components/LinkButton";

export const Hero: NextComponentType = () => {
  return (
    <section aria-labelledby="hero-title" className="mt-24 w-full">
      <div className="py-16 flex flex-col items-end max-w-screen-xl px-6 mx-auto">
        <h3 className="text-2xl leading-8 mb-8">
          <span className="text-cyan-500">Hi, my name is</span>
        </h3>
        <h2 className="text-5xl dark:text-gray-200 text-gray-400 mb-8 font-bold">
          Kelvin Henrique
        </h2>
        <h2 className="text-5xl dark:text-gray-300 text-gray-500 mb-8 font-bold">
          Let&apos;s build the future 🔨
        </h2>

        <p className="max-w-lg text-right text-base dark:text-gray-400 text-gray-600 font-bold mb-8">
          I&apos;m a software engineer specializing in javascript and typescript
          stack and providing exceptional digital experiences. Currently,
          I&apos;m focused on building web services at{" "}
          <span className="text-cyan-500">ClusterStack</span>.
        </p>

        <LinkButton href="/" className="my-6">
          Check my <span className="text-blue-500">LinkedIn</span> Profile
        </LinkButton>
      </div>
    </section>
  );
};
