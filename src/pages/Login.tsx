import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Importa el hook useAuth
import { useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);
  const { login } = useAuth(); // Obtiene el método de login del contexto
  const navigate = useNavigate(); // Obtiene la función navigate

  const handleFormulario = () => {
    navigate('/formulario');
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = localStorage.getItem("user"); 
        if (userDataString) {
          const user = JSON.parse(userDataString);
          console.log("user:", user);
          setUserData(user); // Establecer los datos del usuario en el estado
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
  
    fetchUserData();
  }, []);  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos Incompletos",
        text: "Por favor completa todos los campos.",
      });
      return;
    }

    try {
      const response = await axios.post("http://3.218.205.205/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Obtener el token y la información del usuario desde la respuesta del servidor
        const { token, user } = response.data;

        // Guardar el token en localStorage
        localStorage.setItem('token', token);

        // Limpiar datos anteriores del usuario en localStorage
        localStorage.removeItem('user');

        // Guardar todos los datos del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(user));

        console.log(response.data)

        Swal.fire({
          icon: "success",
          title: `¡Bienvenido, ${user.name}!`,
          text: "Autenticación exitosa",
          showConfirmButton: false,
          timer: 2000,
        });

        // Guardar la información del usuario en el contexto de autenticación
        login(user);

        // Redirige a la página de dash
        navigate('/dash');
      }
    } catch (error: unknown) {
      if ((error as AxiosError<any>).response) {
        const axiosError = error as AxiosError<any>;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error: ${axiosError.response?.data.error}`,
        });
      } else if ((error as AxiosError<any>).request) {
        console.error("Error de red:", (error as AxiosError<any>).request);
        Swal.fire({
          icon: "error",
          title: "Error de red",
          text: "Intenta nuevamente más tarde.",
        });
      } else {
        console.error("Error desconocido:", (error as Error).message);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-teal-300">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-500">
          <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
            <FontAwesomeIcon
              icon={faBicycle}
              className="text-teal-500 mx-auto h-16 w-16 mb-4 animate-bounce"
            />
            <h2 className="text-3xl font-bold text-teal-800">Inicia Sesión</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="transition-all duration-500">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-cyan-700 transition-all duration-500"
                >
                  Email de Usuario
                </label>
                <div className="mt-2 transition-all duration-500">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-600 shadow-sm ring-1 ring-inset ring-cyan-700 placeholder:text-cyan-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="transition-all duration-500">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-cyan-700 transition-all duration-500"
                  >
                    Contraseña
                  </label>
                  {/*<div className="text-sm">
                    <span
                      className="font-semibold text-indigo-800 hover:text-indigo-700 transition-all duration-500"
                    >
                      ¿Olvidaste la Contraseña?
                    </span>
                  </div>*/}
                </div>
                <div className="mt-2 transition-all duration-500">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="transition-all duration-500">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-teal-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-500"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500 transition-all duration-500">
              ¿No eres miembro?{" "}
              <button
                onClick={handleFormulario}
                className="font-semibold leading-6 text-indigo-800 hover:text-indigo-700 transition-all duration-500"
              >
                ¡Empieza Ya!
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
