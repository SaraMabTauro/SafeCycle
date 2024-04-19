/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Ruta {
  nombre: string;
  fecha: string;
  ubicacionInicio: string;
  ubicacionFin: string;
  distancia: number;
  duracion: string;
}

const Historial = () => {
  const [rutas, setRutas] = useState<Ruta[]>([]);

  useEffect(() => {
    const obtenerRutas = async () => {
      try {
        const response = await axios.get<Ruta[]>('URL_DE_TU_API/rutas');
        setRutas(response.data);
      } catch (error) {
        console.error('Error al obtener las rutas:', error);
      }
    };

    obtenerRutas();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Historial de Rutas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {rutas.map((ruta, index) => (
          <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold">{ruta.nombre}</h3>
              <p className="text-sm text-gray-500">{ruta.fecha}</p>
            </div>
            <div className="px-4 py-3">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="font-semibold">Ubicación de Inicio:</td>
                    <td>{ruta.ubicacionInicio}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Ubicación de Fin:</td>
                    <td>{ruta.ubicacionFin}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Distancia:</td>
                    <td>{ruta.distancia}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Duración:</td>
                    <td>{ruta.duracion}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historial;
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faRoad } from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from "react";

interface DatoSensor {
  distancia: number;
  cantidadPedaleos: number;
  velocidad:number;
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
          const response = await axios.get(`https://apiusuarios-spkt.onrender.com/api/usersws/${user._id}`);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {userData && userData.sensorData.map((datoSensor: DatoSensor, index: number) => (
          <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center">
              <FontAwesomeIcon icon={faRoad} className="text-teal-500 mr-2" />
              <h3 className="text-lg font-semibold">Dato de Sensor {index + 1}</h3>
            </div>
            <div className="px-4 py-3 flex items-center">
              <FontAwesomeIcon icon={faClock} className="text-gray-500 mr-2" />
              <p className="text-sm">Distancia: {datoSensor.distancia} km</p>
            </div>
            <div className="px-4 py-3 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-2" />
              <p className="text-sm">Cantidad de petaleos: {datoSensor.cantidadPedaleos}</p>
            </div>
            <div className="px-4 py-3 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-2" />
              <p className="text-sm">Velocidad: {datoSensor.velocidad}</p>
            </div>
            <div className="px-4 py-3 flex items-center">
              <FontAwesomeIcon icon={faClock} className="text-gray-500 mr-2" />
              <p className="text-sm">Fecha: {datoSensor.createdAt.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historial;

