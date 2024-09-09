import React from "react";
import { quadrolg } from "@/data/index";
import Logo from "@/components/ui/Logo";

const QuadroLogos: React.FC = () => {
  return (
    <div className="pt-14">
      <h1 className="heading pb-20 lg:text-5xl">
        Principais <span className="text-blue-400">ferramentas</span>
      </h1>
      <div className="flex lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap flex-row justify-between gap-4 p-4 border border-white/[0.1] rounded-xl shadow-lg shadow-blue-500/50 bg-black-200">
        {quadrolg.map((logo, index) => (
          <Logo key={index} src={logo} />
        ))}
      </div>
    </div>
  );
};

export default QuadroLogos;
