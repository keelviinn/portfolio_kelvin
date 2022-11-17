import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Hambuger } from "./Hamburguer";
import { LinkButton } from "../LinkButton";
import { DesktopNav, MobileNav } from "./Nav";
import { ThemeChange } from "./ThemeButton";

export const Navigation = ({ navItems }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  //set the body blur when the mobile nav is open
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    // document.body.classList.toggle("blur");
  };

  return (
    <>
      <header
        aria-label="Site Header"
        className="w-full sticky left-0 top-0 bg-gray-200 dark:bg-gray-800 z-10"
      >
        <div className="mx-auto max-w-screen-xl px-6 border-b-2 border-b-gray-500 dark:border-b-gray-200">
          <div className="flex h-24 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link href="/">
                <a className="flex items-center gap-2">
                  <Image
                    src="/images/kelvin.svg"
                    alt="Kelvin Oliveira"
                    width={170}
                    height={40}
                  />
                </a>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <DesktopNav navItems={navItems} />
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4 hidden">
                  <LinkButton href="https://docs.google.com/document/d/1sguXssN2o_zgBiO67ZhoBa3tlkSAM86Px2i9_4IoUf0/edit?usp=sharing">
                    Resume
                  </LinkButton>
                </div>

                <ThemeChange className={"mr-6 sm:mr-0"} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="md:hidden z-20 fixed right-2 top-7">
        <button
          onClick={handleHamburgerClick}
          className="rounded flex flex-col h-9 w-9 justify-center items-center group focus:outline-none "
        >
          <Hambuger isOpen={isOpen} />
        </button>
      </div>
      <MobileNav
        isOpen={isOpen}
        navItems={navItems}
        handleHamburgerClick={handleHamburgerClick}
      />
    </>
  );
};
