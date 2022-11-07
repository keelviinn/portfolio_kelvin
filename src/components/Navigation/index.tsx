import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Hambuger } from "./Hamburguer";
import { LinkButton } from "../LinkButton";
import { DesktopNav, MobileNav } from "./Nav";
import { ThemeChange } from "./ThemeButton";

export const Navigation = ({ navItems }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        aria-label="Site Header"
        className="w-full absolute left-0 top-0"
      >
        <div className="mx-auto max-w-screen-xl px-6 border-b-2 border-b-gray-500 dark:border-b-gray-200">
          <div className="flex h-24 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link href="/">
                <a className="flex items-center gap-2">
                  <Image src="/images/kelvin.svg" alt="Kelvin Oliveira" width={170} height={40} />
                </a>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <DesktopNav navItems={navItems} />
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4 hidden">
                  <LinkButton href="/">
                    Resume
                  </LinkButton>
                </div>

                <ThemeChange />

                <div className="block md:hidden z-20">
                  <button
                    onClick={handleHamburgerClick}
                    className="rounded flex flex-col h-9 w-9 justify-center items-center group"
                  >
                    <Hambuger isOpen={isOpen} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileNav isOpen={isOpen} navItems={navItems} handleHamburgerClick={handleHamburgerClick} />
    </>
  );
};
