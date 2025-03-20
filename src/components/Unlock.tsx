import React from "react";
interface UnlockSectionProps {
  unlockContent: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
  };
}
const Unlock = ({ dataUnlock }: UnlockSectionProps) => {
  const { title, description, buttonText, buttonLink, imageSrc } = dataUnlock;
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Imagen/Ilustración */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt="Feature illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Contenido de texto */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 mb-8">{description}</p>
          <a
            href={buttonLink}
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
