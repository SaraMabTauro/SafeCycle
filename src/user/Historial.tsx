import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRoad, faRuler, faArrowUpShortWide, faGauge} from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from "react";

interface DatoSensor {
  distancia: number;
  cantidadPedaleos: number;
  velocidad: number;
  createdAt: Date;
}


const Historial = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = localStorage.getItem('user');
        if (userDataString) {
          const user = JSON.parse(userDataString);
          const response = await axios.get(`http://3.218.205.205/api/usersws/${user._id}`);
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          console.error('AxiosError:', axiosError.response?.data);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Historial de Rutas</h2>
      {userData && userData.sensorData.length === 0 ? (
        <div className="bg-white rounded-md shadow-md p-6">
          <p className="text-lg font-semibold text-gray-600">No hay rutas registradas.</p>
          <p className="text-sm text-gray-500">Empieza a registrar tus rutas para verlas aquí.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {userData && userData.sensorData.map((datoSensor: DatoSensor, index: number) => (
            <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 flex items-center">
                <FontAwesomeIcon icon={faRoad} className="text-teal-500 mr-2" />
                <h3 className="text-lg font-semibold">Dato de Sensor {index + 1}</h3>
              </div>
              <div className="px-4 py-3 flex items-center">
                <FontAwesomeIcon icon={faRuler} className="text-gray-500 mr-2" />
                <p className="text-sm">Distancia: {datoSensor.distancia} km</p>
              </div>
              <div className="px-4 py-3 flex items-center">
                <FontAwesomeIcon icon={faArrowUpShortWide} className="text-gray-500 mr-2" />
                <p className="text-sm">Cantidad de pedaleos: {datoSensor.cantidadPedaleos}</p>
              </div>
              <div className="px-4 py-3 flex items-center">
                <FontAwesomeIcon icon={faGauge} className="text-gray-500 mr-2" />
                <p className="text-sm">Velocidad: {datoSensor.velocidad}</p>
              </div>
              <div className="px-4 py-3 flex items-center">
                <FontAwesomeIcon icon={faClock} className="text-gray-500 mr-2" />
                <p className="text-sm">Fecha: {datoSensor.createdAt ? new Date(datoSensor.createdAt).toLocaleDateString() : 'Fecha no disponible'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Historial;

