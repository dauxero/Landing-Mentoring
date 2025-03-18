import React from "react";

interface Client {
  id: number;
  name: string;
  logoSrc: string;
}

interface ClientsProps {
  dataClients: {
    // Recibe el objeto completo
    title: string;
    subtitle: string;
    clients: Client[];
  };
}

const Clients = ({ dataClients }: ClientsProps) => {
  const { title, subtitle, clients } = dataClients; // Desestructura aquí

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-700 mb-4">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
        {clients.map((client) => (
          <div
            key={client.id}
            className="w-24 md:w-28 lg:w-32 flex items-center justify-center"
          >
            <img
              src={client.logoSrc || "/placeholder.svg"}
              alt={`${client.name} logo`}
              className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
