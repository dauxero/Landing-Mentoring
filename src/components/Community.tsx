import React from "react";

interface dataCommunit {
  id: number;
  title: string;
  iconSrc: string;
  description: string;
}

interface dataCommunityProps {
  dataCommunity: dataCommunit[];
}

const Community = ({ dataCommunity }: dataCommunityProps) => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-screen-xl text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-700 mb-4">
          Manage your entire community
        </h2>
        <h2 className="text-4xl font-bold text-gray-700 mb-6">
          in a single system
        </h2>
        <p className="text-gray-600">Who is Nextcent suitable for?</p>
      </div>

      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {dataCommunity.map(({ id, title, iconSrc, description }) => (
          <div key={id} className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img src={iconSrc} alt={title} className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {title}
            </h3>
            <p className="text-gray-600 max-w-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
