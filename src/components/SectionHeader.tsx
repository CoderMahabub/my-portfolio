import { twMerge } from "tailwind-merge";

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description?: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p
          className={twMerge(
            "uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center"
          )}
        >
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:font-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
