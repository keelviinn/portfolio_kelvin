import Link from "next/link";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ExternalLink = ({
  href,
  children,
  className = "",
}: ExternalLinkProps) => {
  return (
    <Link href={href} passHref={true} >
      <a target="_blank" className={`text-cyan-500 hover:underline transition-all duration-200 cursor-pointer ${className}`}>
        {children}
      </a>
    </Link>
  );
};
