import React, { useState } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faCloud,
  faHome,
  faRoute,
  faUserTie,
  faBicycle,
  faClock,
  faClipboard
} from "@fortawesome/free-solid-svg-icons";

interface LinkItem {
  name: string;
  icon: any; 
  to: string;
}

const links: LinkItem[] = [
  { name: "Inicio", icon: faHome, to: '/dash' },
  { name: "Clima", icon: faCloud, to: '/dash/clima' },
  { name: "Ruta", icon: faRoute, to: '/dash/ruta' },
  { name: "Tiempo", icon: faClock, to: '/dash/tiempo' },
  { name: "Historial", icon: faClipboard, to: '/dash/historial' }
];

const Dash: React.FC = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = async () => {
    try {
      const nombreCliente = localStorage.getItem("nombreCliente");
      await axios.put("http://localhost:3000/api/logout", { nombreCliente });
      setLoggedOut(true);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }; 

  return (
    <div className="flex flex-col h-full bg-teal-500 text-white px-3 py-4">
      <button className="flex items-end justify-start rounded-md bg-turquoise-700 p-4 mb-2">
        <div className="w-32 text-white">
          <FontAwesomeIcon icon={faBicycle} className="text-3xl" />
        </div>
      </button>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className="flex items-center gap-2 p-3 text-sm font-medium rounded-md hover:bg-turquoise-400 hover:text-white"
          >
            <FontAwesomeIcon icon={link.icon} className="w-6" />
            <div>{link.name}</div>
          </NavLink>
        ))}

        {loggedOut ? ( 
          <Link to="/" className="text-white">
            <button
              className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-turquoise-800 hover:bg-turquoise-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faPowerOff} className="w-6" />
              <div>Salir</div>
            </button>
          </Link>
        ) : ( 


          <div>
          <button
            onClick={handleLogout} 
            className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-turquoise-800 hover:bg-turquoise-600 hover:text-white"
          >
            <FontAwesomeIcon icon={faPowerOff} className="w-6" />
            <div>Salir</div>
          </button>
          </div>
        )}

        <button className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-turquoise-800 hover:bg-turquoise-600 hover:text-white">
          <FontAwesomeIcon icon={faUserTie} className="w-6" />
          <div>Estado de cuenta</div>
        </button>
      </div>
    </div>
  );
};

export default Dash;
