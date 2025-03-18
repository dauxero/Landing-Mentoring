import React from "react";

interface HeroContentProps {
  title: string;
  highlightedText: string;
  subtitle: string;
  buttonText: string;
  imageSrc: string;
  onButtonClick?: () => void;
}

export const HeroContent = ({ dataHeroContent }: HeroContentProps) => {
  const {
    title,
    highlightedText,
    subtitle,
    buttonText,
    imageSrc,
    onButtonClick,
  } = dataHeroContent;
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between max-w-screen-xl">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            {title}
            <br />
            <span className="text-green-500">{highlightedText}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">{subtitle}</p>
          <button
            onClick={onButtonClick}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            {buttonText}
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt="Developer with computer"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};
