import Head from "next/head"; // For button component (optional)
import { Button } from "./ui/button";
import FeaturesSection from "./Feature";

const HeroSection = () => {
  return (
    <section>
      <div
        className="flex items-baseline 
        justify-center pt-20"
      >
        <h2
          className="text-white border 
            px-3 p-2 rounded-full
        text-center border-white"
        >
          See What's New | <span className="text-sky-300">AI Diagram</span>
        </h2>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto h-screen max-w-3xl text-center flex flex-col justify-between items-center gap-8">
          <div>
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Sketching Ideas -
              <span className="sm:block">
                {" "}
                DoodleDocs, where creativity meets documentation.{" "}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              DoodleDocs merges artistic expression with efficient
              documentation, fostering creativity in a realm where every stroke
              conveys meaningful ideas and knowledge.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <FeaturesSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
