import Link from "next/link";
import { motion } from "framer-motion";
import { LinkButton } from "../LinkButton";

const NavItem = ({ href, id, label, isMobile, onClick }: any) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: -1000, velocity: -100 },
      },
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.li variants={variants}>
      <Link href={href}>
        <a
          className={`text-gray-500 transition hover:text-gray-500/75 dark:text-gray-200 dark:hover:text-gray-200/75`}
          onClick={isMobile ? onClick : undefined}
        >
          <span className="text-cyan-500">{id}</span> {label}
        </a>
      </Link>
    </motion.li>
  );
};

export const MobileNav = ({
  isOpen,
  navItems,
  handleHamburgerClick,
}: MobileNavProps) => {
  const sideBarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 92.3% 48px)`,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(1px at 92.3% 48px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.nav
      aria-label="MOBILE-MENU"
      id="MOBILE-MENU"
      className="MOBILE-MENU md:hidden flex fixed h-screen right-0 top-0 z-10 w-2/3 justify-end"
      animate={isOpen ? "open" : "closed"}
      variants={sideBarVariants}
    >
      <motion.ul
        variants={variants}
        className="flex flex-col w-full items-center gap-20 text-lg bg-gray-100 dark:bg-gray-700 justify-center"
      >
        {navItems.map(({ id, label, href }) => (
          <NavItem
            key={id}
            href={href}
            isMobile={true}
            id={id}
            label={label}
            onClick={handleHamburgerClick}
          />
        ))}
        <LinkButton href="https://docs.google.com/document/d/1sguXssN2o_zgBiO67ZhoBa3tlkSAM86Px2i9_4IoUf0/edit?usp=sharing">
          Resume
        </LinkButton>
      </motion.ul>
    </motion.nav>
  );
};

export const DesktopNav = ({ navItems }: DesktopNavProps) => {
  return (
    <nav aria-label="Site Nav" className="DESKTOP-MENU hidden md:block">
      <ul className="hidden md:flex items-center gap-6 text-sm">
        {navItems.map(({ id, label, href }) => (
          <NavItem key={id} href={href} id={id} label={label} />
        ))}
      </ul>
    </nav>
  );
};
