import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faBicycle,
  faHome,
  faRoute,
  faClipboard,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

interface LinkItem {
  name: string;
  icon: any; 
  to: string;
}

const links: LinkItem[] = [
  { name: "Inicio", icon: faHome, to: '/dash' },
  { name: "Ruta", icon: faRoute, to: '/dash/ruta' },
  { name: "Historial", icon: faClipboard, to: '/dash/historial' },
  { name: "Comunidad", icon: faPeopleGroup, to: '/dash/comunidad'}
];

const Dash: React.FC = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const navigate = useNavigate(); 


  const handleLogout = async () => {
    navigate('/')
  }; 

  return (
    <nav className="rounded-md w-72 h-screen flex-col justify-between bg-white">
      <div>
        <div className="flex justify-center py-10 shadow-sm pr-4">
          <FontAwesomeIcon icon={faBicycle} className="h-14 w-14 text-teal-400" />
          <div className="pl-2">
            <p className="text-2xl font-bold text-teal-600">SafeCycle</p>
            <span className="text-xs block text-gray-800">DASHBOARD</span>
          </div>
        </div>
        <div className="pl-10 pt-10 space-y-8 flex-1">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="flex space-x-4 items-center hover:text-teal-600 cursor-pointer"
            >
              <FontAwesomeIcon icon={link.icon} className="h-6 w-6" />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex pt-5 text-center pl-14 ">
        <hr />
        <div className="">
          <FontAwesomeIcon icon={faPowerOff} className="h-6 w-6" />
          {loggedOut ? (
            <Link
              to="/"
              className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-turquoise-800 hover:bg-turquoise-600 hover:text-white"
              >
              Logout
            </Link>
          ) : (
           <div className="">
             <button onClick={handleLogout} className="text-sky-600">
              Logout
            </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );  
  
};

export default Dash;
