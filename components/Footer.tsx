import React from "react";
import PText from "./ui/PText";
import ShimmerButton from "./ui/ShimmerButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contato">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Está pronto para{" "}
          <span className="text-blue-400">para trabalhar</span>{" "}
            comigo?
        </h1>
        <PText
          className="text-white-200 md:mt-10 my-5 text-center"
          text={
            "Entre em contato hoje mesmo! Bora discutir como eu posso te ajudar :)"
          }
          colorMap={{
            "!": "text-blue-400",
            contato: "text-blue-400",
            ajudar: "text-blue-400",
            ".": "text-blue-400",
            hoje: "text-blue-400",
            mesmo: "text-blue-400",
          }}
        />
        <a href="nelsonmodenezjunior05@gmail.com">
          <ShimmerButton
            title="Entre em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Nelson Júnior
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((perfil) => (
            <div
              className="sm:mt-4 md:mt-2 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              key={perfil.id}
            >
              <a href={perfil.link}>
                <img src={perfil.img} alt={perfil.id} width={30} height={30} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
