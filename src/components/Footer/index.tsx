import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-24">
      {/* Get in touch div */}
      <div className="flex flex-col">
        <h3 className="self-center text-2xl mb-8">Get in touch</h3>
        <p className="self-center text-justify max-w-xl text-sm">
          I&apos;m currently looking for a new role and am open to a wide range
          of opportunities. My preference would be to find a position in a
          company in Europe. But I&apos;m also happy to hear about opportunites
          that don&apos;t fit that description. I&apos;m a hard-working and
          positive person who will always approach each task with a sense of
          purpose and attention to detail.
        </p>

        <div className="flex justify-center mt-8 gap-4">
          <a href="https://wa.me/353832056034" target="_blank" rel="noreferrer">
            <SiWhatsapp size={32} color="#25D366" />
          </a>
          <a href="mailto:keelviinn@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope size={32} color="#d6d3d2" />
          </a>
        </div>
      </div>

      <div className="max-w-screen-xl px-6 py-12 mx-auto mt-12">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/khenriqqe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin
                  size={32}
                  className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-500"
                />
              </a>
              <a
                href="https://github.com/keelviinn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub
                  size={32}
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 md:mt-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2022 Kelvin Henrique. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
