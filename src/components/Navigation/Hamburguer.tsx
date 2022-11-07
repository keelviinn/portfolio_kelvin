interface HamburguerProps {
  isOpen: boolean;
}

export const Hambuger = ({ isOpen }: HamburguerProps) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full dark:bg-gray-200 bg-gray-800 transition ease transform duration-300`;

  return (
    <>
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </>
  );
};