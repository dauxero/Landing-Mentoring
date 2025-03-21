import React from "react";
interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string; // Ahora esto será la ruta al SVG o el componente del icono
}

interface StatsContentProps {
  dataStatsContent: {
    title: string;
    subtitle: string;
    stats: Stat[];
  };
}
const StatsContent = ({ dataStatsContent }: StatsContentProps) => {
  const { subtitle, stats } = dataStatsContent;
  return (
    <>
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:justify-between ml-20 md:ml-0">
            {/* Título y subtítulo */}
            <div className="md:w-1/3 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Helping a local
                <br />
                <span className="text-green-500">business reinvent itself</span>
              </h2>
              <p className="text-gray-600 mt-4">{subtitle}</p>
            </div>
            <p>
              <img src="" alt="" />
            </p>
            {/* Estadísticas */}
            <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-6 mr-15 md:mr-0">
              {stats.map((stat) => (
                <div key={stat.id} className="flex items-start">
                  <img
                    src={stat.icon || "/placeholder.svg"}
                    alt={stat.label}
                    className="w-10 h-10 mr-4 text-green-500"
                  />
                  <div>
                    <div className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsContent;
