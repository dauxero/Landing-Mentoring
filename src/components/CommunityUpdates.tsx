import React from "react";

interface DataCommunityUpdates {
  id: number;
  title: string;
  image: string;
  link: string;
}

interface dataCommunityUpdatesProps {
  dataCommunityUpdate: DataCommunityUpdates[];
}

const CommunityUpdates = ({
  dataCommunityUpdate,
}: dataCommunityUpdatesProps) => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center mb-12">
        {dataCommunityUpdate.map(({ id, title, image, link }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative flex flex-col items-center max-w-[285px]">
              <img
                src={image}
                alt="imagenes del post"
                className="h-auto max-h-[286px] max-w-[368px] object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 h-24">
                {title}
              </h3>
              <a
                href={link}
                className="inline-flex items-center text-green-500 font-medium hover:text-green-600 mx-auto"
              >
                Readmore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityUpdates;

/*
UpdateContext(
  {
      varAdjuntos: 
          ForAll(
              DataCardValue7.Attachments;
              {
                  Name: Name;
                  ContentBytes: JSON(Value; JSONFormat.IncludeBinaryData)
              }
          )
  }
);;




appres://blobmanager/672d4678f4884144bb635c124980afde/6


UpdateContext(
    {
        varBase64Images: ForAll(
            RegisterPhoto;
            {
                Name: "Imagen" & Text(Now(); "yyyymmddhhmmss") & ".png";
                ContentBytes: base64
            }
        )
    }
);;


*/
