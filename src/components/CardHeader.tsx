import StartIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center text-3xl gap-2">
        <StartIcon className="size-9 text-emerald-300" />
        <h2 className="font-serif">{title}</h2>
      </div>
      <p className="text-sm lg:text-base text-white/60 mt-2 max-w-xs">
        {description}
      </p>
    </div>
  );
};
