import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkButton = ({ href, children, className }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <a
        className={`rounded-md border-cyan-500 border-2 px-6 py-2 text-sm font-medium text-cyan-500 shadow hover:bg-cyan-200 transition-colors duration-200 ${className}`}
        aria-label="Resume"
      >
        {children}
      </a>
    </Link>
  );
};
