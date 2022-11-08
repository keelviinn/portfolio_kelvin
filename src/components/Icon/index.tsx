import { IconType } from "react-icons/lib";

interface IconProps {
  icon: IconType;
  label: string;
  className?: string;
}

export const Icon = ({ icon: Icon, label, className, ...rest }: IconProps) => {
  return (
    <div className="flex flex-col items-center" >
      <Icon className={`md:text-5xl text-4xl my-2 cursor-pointer ${className}`} {...rest} />
      <p className="md:text-base text-sm dark:text-gray-400 text-gray-600 font-normal my-2 md:my-4">
        {label}
      </p>
    </div>
  );
};