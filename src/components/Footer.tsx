import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-teal-900 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="text-center md:text-left text-white">
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <FontAwesomeIcon
                                icon={faBicycle}
                                className="text-teal-500 mr-2"
                            />
                            <h2 className="text-xl font-bold">SafeCycle</h2>
                        </div>
                        <p className="text-sm">Tu solución para ciclistas seguros</p>
                    </div>

                    <nav className="text-center md:text-right">
                        <ul className="flex justify-center md:justify-end space-x-4">
                            <li>
                                <p className="text-gray-300 hover:text-white transition duration-300">
                                    Términos de servicio
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-300 hover:text-white transition duration-300">
                                    Política de privacidad
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold mb-2 hover:text-green-200">Contacto</h3>
                                <p className="hover:text-teal-400">Universidad Politécnica de Chiapas</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


