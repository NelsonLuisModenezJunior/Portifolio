import React from "react";
import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const ProjetosRecentes = () => {
  return (
    <section id="projetos">
      <div className="mt-8 py-4 sm:py-20">
        <h1 className="heading text-center md:text-4xl lg:text-5xl sm:text-2xl">
          Um pouco dos{" "}
          <span className="text-blue-400 lg:text-5xl md:text-4xl sm:text-2xl">
            meus projetos
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-2 sm:p-4 gap-8 sm:gap-16 mt-1 sm:mt-10">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="sm:lg:min-h-[32.5rem] h-[20rem] sm:h-[25rem] flex items-center justify-center sm:2-96 sm:2-[80vw] w-full sm:w-auto mt-8 sm:mt-16"
            >
              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border"
                  href={link}
                >
                  <CardItem
                    translateZ="50"
                    className=" text-sm sm:text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-xs sm:text-sm max-w-xs sm:max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {des}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={img}
                      height="1000"
                      width="1000"
                      className="lg:h-60 sm:h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-10 sm:mt-20">
                    <CardItem
                      translateZ={20}
                      className="px-1 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Clique para visitar o projeto
                    </CardItem>
                    <CardItem className="flex items-center justify-between mt-2 sm:mt-0">
                      <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                          <div
                            key={icon}
                            className="border border-white/[0.2] rounded-full bg-black w-6 sm:w-8 h-6 sm:h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`,
                            }}
                          >
                            <img src={icon} alt={icon} className="p-1 sm:p-2" />
                          </div>
                        ))}
                      </div>
                      <div></div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetosRecentes;
