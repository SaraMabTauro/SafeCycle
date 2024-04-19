// import React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUsers, faRoad } from "@fortawesome/free-solid-svg-icons";

// const Comunidad = () => {
//   // Datos simulados
//   const usuariosActualmente = 50;
//   const totalRutas = 100;
//   const kilometrosRecorridos = 500;
//   const estadisticasComunidad = [2, 5.5, 2, 8.5, 1.5, 5];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Comunidad</h2>
//       <div className="bg-white rounded-md shadow-md overflow-hidden">
//         <div className="px-4 py-3 border-b border-gray-200 flex items-center">
//           <FontAwesomeIcon icon={faUsers} className="text-teal-500 mr-2" />
//           <h3 className="text-lg font-semibold">Usuarios Actualmente:</h3>
//           <p className="ml-auto text-gray-500">{usuariosActualmente}</p>
//         </div>
//         <div className="px-4 py-3 border-b border-gray-200 flex items-center">
//           <FontAwesomeIcon icon={faRoad} className="text-teal-500 mr-2" />
//           <h3 className="text-lg font-semibold">Total de Rutas:</h3>
//           <p className="ml-auto text-gray-500">{totalRutas}</p>
//         </div>
//         <div className="px-4 py-3 border-b border-gray-200 flex items-center">
//           <FontAwesomeIcon icon={faRoad} className="text-teal-500 mr-2" />
//           <h3 className="text-lg font-semibold">Kilómetros Recorridos Totales:</h3>
//           <p className="ml-auto text-gray-500">{kilometrosRecorridos}</p>
//         </div>
//         <div className="px-4 py-3 border-b border-gray-200">
//           <h3 className="text-lg font-semibold">Estadísticas de la Comunidad:</h3>
//           <LineChart
//             xAxis={[{ data: estadisticasComunidad.map((_, i) => i + 1) }]}
//             series={[
//               {
//                 data: estadisticasComunidad,
//                 area: true,
//               },
//             ]}
//             width={500}
//             height={300}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comunidad;

import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faRoad } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

// Interfaz para los datos del sensor
interface SensorData {
  distancia: number;
}

// Interfaz para los datos del usuario
interface UserData {
  sensorData: SensorData[];
}

const Comunidad = () => {
  const [usuariosActualmente, setUsuariosActualmente] = useState<number>(0);
  const [totalRutas, setTotalRutas] = useState<number>(0);
  const [kilometrosRecorridos, setKilometrosRecorridos] = useState<number>(0);
  const [estadisticasComunidad, setEstadisticasComunidad] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<UserData[]>('http://3.218.205.205/api/usersws/');
        const data = response.data;

        // Obtener la cantidad de usuarios actualmente
        setUsuariosActualmente(data.length);

        // Calcular el total de rutas y los kilómetros recorridos
        let totalRutas = 0;
        let kilometrosRecorridos = 0;
        data.forEach((usuario) => {
          totalRutas += usuario.sensorData.length;
          usuario.sensorData.forEach((datoSensor) => {
            kilometrosRecorridos += datoSensor.distancia;
          });
        });
        setTotalRutas(totalRutas);
        setKilometrosRecorridos(kilometrosRecorridos);

        // Obtener las estadísticas de la comunidad
        const estadisticas = data.map((usuario) => {
          let totalDistancia = 0;
          usuario.sensorData.forEach((datoSensor) => {
            totalDistancia += datoSensor.distancia;
          });
          return totalDistancia;
        });
        setEstadisticasComunidad(estadisticas);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Comunidad</h2>
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex items-center">
          <FontAwesomeIcon icon={faUsers} className="text-teal-500 mr-2" />
          <h3 className="text-lg font-semibold">Usuarios Actualmente:</h3>
          <p className="ml-auto text-gray-500">{usuariosActualmente}</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 flex items-center">
          <FontAwesomeIcon icon={faRoad} className="text-teal-500 mr-2" />
          <h3 className="text-lg font-semibold">Total de Rutas:</h3>
          <p className="ml-auto text-gray-500">{totalRutas}</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 flex items-center">
          <FontAwesomeIcon icon={faRoad} className="text-teal-500 mr-2" />
          <h3 className="text-lg font-semibold">Kilómetros Recorridos Totales:</h3>
          <p className="ml-auto text-gray-500">{kilometrosRecorridos}</p>
        </div>
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Estadísticas de la Comunidad:</h3>
          <LineChart
            xAxis={[{ data: estadisticasComunidad.map((_, i) => i + 1) }]}
            series={[
              {
                data: estadisticasComunidad,
                area: true,
              },
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Comunidad;

