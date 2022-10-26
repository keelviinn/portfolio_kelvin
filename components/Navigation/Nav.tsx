import Link from "next/link";
import { motion } from "framer-motion";

const NavItem = ({ href, children, isMobile, onClick }: any) => {
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
          className={`text-gray-500 transition hover:text-gray-500/75 ${
            isMobile
              ? "dark:text-pink-500 dark:hover:text-pink-500/75"
              : "dark:text-gray-200 dark:hover:text-gray-200/75"
          } `}
          onClick={isMobile ? onClick : undefined}
        >
          {children}
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
      aria-label="Site Nav"
      className="MOBILE-MENU md:hidden"
      animate={isOpen ? "open" : "closed"}
      variants={sideBarVariants}
    >
      <motion.ul
        variants={variants}
        className="flex flex-col absolute z-10 h-screen right-0 top-0 items-center w-2/3 py-10 gap-20 text-lg bg-white dark:bg-slate-700 justify-center"
      >
        {navItems.map(({ id, label, href }) => (
          <NavItem
            key={id}
            href={href}
            isMobile={true}
            onClick={handleHamburgerClick}
          >
            {label}
          </NavItem>
        ))}
        <div className="sm:flex sm:gap-4">
          <Link href="/">
            <a
              className="rounded-md border-pink-500 border-2 px-8 py-4 text-sm font-medium text-pink-500 shadow"
              onClick={handleHamburgerClick}
            >
              Resume
            </a>
          </Link>
        </div>
      </motion.ul>
    </motion.nav>
  );
};

export const DesktopNav = ({ navItems }: DesktopNavProps) => {
  return (
    <nav aria-label="Site Nav" className="DESKTOP-MENU hidden md:block">
      <ul className="hidden md:flex items-center gap-6 text-sm">
        {navItems.map(({ id, label, href }) => (
          <NavItem key={id} href={href}>
            {label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};
