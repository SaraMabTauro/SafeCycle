/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import Fly from "./Flyout";

const HomePage = () => {
  return (
    <div className="sm:min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-teal-100 to-teal-300">
      <hr />
      <div className="z-10 text-center mb-8 py-2 px-4">
        <FontAwesomeIcon
          icon={faBicycle}
          className="text-teal-500 mx-auto h-16 w-16 mb-2"
          alt="SafeCycle Logo"
        />

        <h1 className="text-4xl font-bold text-teal-800 mb-2">SafeCycle</h1>
        <p className="text-lg text-teal-800 mb-4">
          Tu solución para ciclistas seguros
        </p>
      </div>

      <a
        href="#features"
        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 animate-pulse mb-8"
      >
        Obtén tu cuenta
      </a>

      <section id="features" className="bg-white py-16 relative mb-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-500 mb-8">
            Características
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Seguridad en la carretera
              </h3>
              <p className="text-gray-700">
                SafeCycle te ayuda a planificar rutas seguras y te alerta sobre
                peligros potenciales en el camino.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Seguimiento en tiempo real
              </h3>
              <p className="text-gray-700">
                Comparte tu ubicación en tiempo real con amigos y familiares
                para una mayor seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <Fly />
      </div>
    </div>
  );
};

export default HomePage;
*/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import Fly from "../components/Flyout";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/formulario'); 
  };

  const handleButtonLoginClick = () => {
    navigate('/login')
  }
  return (
    <div className="sm:min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-teal-100 to-teal-300">
      <hr />
      <div className="z-10 text-center mb-8 py-2 px-4">
        <FontAwesomeIcon
          icon={faBicycle}
          className="text-teal-500 mx-auto h-16 w-16 mb-2"
        />

        <h1 className="text-4xl font-bold text-teal-800 mb-2">SafeCycle</h1>
        <p className="text-lg text-teal-800 mb-4">
          Tu solución para ciclistas seguros
        </p>
      </div>

      <div className="flex mb-8">
        <button
          onClick={handleButtonClick}
          className="mr-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 animate-pulse"
        >
          Obtén tu cuenta
        </button>
        <button
          onClick={handleButtonLoginClick}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 animate-pulse"
        >
          Iniciar Sesión
        </button>
      </div>

      <section id="features" className="bg-white py-16 relative mb-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-500 mb-8">
            Características
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Seguridad en la carretera
              </h3>
              <p className="text-gray-700">
                SafeCycle te ayuda a planificar rutas seguras y te alerta sobre
                peligros potenciales en el camino.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Seguimiento en tiempo real
              </h3>
              <p className="text-gray-700">
                Comparte tu ubicación en tiempo real con amigos y familiares
                para una mayor seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <Fly />
      </div>

      <Footer />

    </div>
    
  );
};

export default HomePage;
