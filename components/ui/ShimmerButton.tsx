import React from "react";

const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  outrasClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  outrasClasses?: string;
}) => {
  return (
    <button
      className={` w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-blue-300 transition-colors :outline-none md:w-60 md:mt-10 gap-2 ${outrasClasses}`}
      onClick={handleClick}
      >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default ShimmerButton;
