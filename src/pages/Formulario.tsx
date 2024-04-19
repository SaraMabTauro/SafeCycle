/*import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import Rad from "./RadioGroup";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function For() {
  const [agreed, setAgreed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-cyan-900 sm:text-4xl">
          Crea tu cuenta
        </h2>
        <p className="mt-2 text-lg leading-8 text-cyan-600">
          Forma parte de SafeCycle y sus beneficios.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Apellidos
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Usuario
            </label>
            
            <Rad selected={selectedPlan} onChange={handlePlanChange} />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Número Telefónico
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  País
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>MX</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="país"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              País
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="pais"
                id="pais"
                autoComplete="pais"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="estado"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Estado
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="state"
                id="state"
                autoComplete="state"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-sky-900" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Acepto las políticas</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
                Al seleccionar esto, usted acepta nuestra{" "}
              <h3 href="#" className="font-semibold text-sky-900">
                privacy and policy
              </h3>
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Crear Cuenta
          </button>
        </div>
      </form>
    </div>
  );
}
*/
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";



interface Plan {
  name: string;
}

const CreateUserForm: React.FC = () => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [deviceId, setDeviceId] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    // Verificar que se haya seleccionado un plan
    if (!selectedPlan) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, selecciona un plan para continuar",
      });
      return;
    }

    // Verificar que todos los campos estén llenos
    if (!name || !email || !password || !state || !deviceId) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, completa todos los campos para continuar",
      });
      return;
    }

    // Verificar que se haya aceptado las políticas
    if (!agreed) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes aceptar las políticas de seguridad para continuar",
      });
      return;
    }

    try {
      const userData = {
        name,
        email,
        password,
        IdEsp: deviceId,
        estado: state,
        ocupacion: selectedPlan.name,
      };

      const response = await axios.post(
        "https://apiusuarios-spkt.onrender.com/api/users",
        userData
      );

      console.log("Response:", response.data);

      Swal.fire({
        icon: "success",
        title: "¡Cuenta creada exitosamente!",
        text: "Gracias por registrarte en SafeCycle.",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde",
      });
    }
  };

  const handlePlanChange = (plan: Plan): void => {
    setSelectedPlan(plan);
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-cyan-900 sm:text-4xl">
          Crea tu cuenta
        </h2>
        <p className="mt-2 text-lg leading-8 text-cyan-600">
          Forma parte de SafeCycle y sus beneficios.
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nombre:
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div>
              <label
                htmlFor="device-id"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                ID del Dispositivo:
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="device-id"
                  id="device-id"
                  autoComplete="off"
                  value={deviceId}
                  onChange={(e) => setDeviceId(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <Rad selectedPlan={selectedPlan} onChange={handlePlanChange} />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email:
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Contraseña:
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="estado"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Estado:
            </label>
            <div className="mt-2.5">
              <select
                id="estado"
                name="estado"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecciona un estado</option>
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Baja California">Baja California</option>
                <option value="Baja California Sur">Baja California Sur</option>
                <option value="Campeche">Campeche</option>
                <option value="Chiapas">Chiapas</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Coahuila">Coahuila</option>
                <option value="Colima">Colima</option>
                <option value="Durango">Durango</option>
                <option value="Estado de México">Estado de México</option>
                <option value="Guanajuato">Guanajuato</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Hidalgo">Hidalgo</option>
                <option value="Jalisco">Jalisco</option>
                <option value="Michoacán">Michoacán</option>
                <option value="Morelos">Morelos</option>
                <option value="Nayarit">Nayarit</option>
                <option value="Nuevo León">Nuevo León</option>
                <option value="Oaxaca">Oaxaca</option>
                <option value="Puebla">Puebla</option>
                <option value="Querétaro">Querétaro</option>
                <option value="Quintana Roo">Quintana Roo</option>
                <option value="San Luis Potosí">San Luis Potosí</option>
                <option value="Sinaloa">Sinaloa</option>
                <option value="Sonora">Sonora</option>
                <option value="Tabasco">Tabasco</option>
                <option value="Tamaulipas">Tamaulipas</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Veracruz">Veracruz</option>
                <option value="Yucatán">Yucatán</option>
                <option value="Zacatecas">Zacatecas</option>
              </select>
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={`${
                  agreed ? "bg-sky-900" : "bg-gray-200"
                } flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                <span className="sr-only">Acepto las políticas</span>
                <span
                  aria-hidden="true"
                  className={`${
                    agreed ? "translate-x-3.5" : "translate-x-0"
                  } h-4 w-4 transform rounded-full bg-teal-400 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              Al seleccionar esto, usted acepta nuestra{" "}
              <span className="font-semibold text-sky-900">privacy and policy</span>
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className={`block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 focus-visible:ring-offset-gray-50`}
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

const Rad: React.FC<{ selectedPlan: Plan | null; onChange: (plan: Plan) => void }> = ({ selectedPlan, onChange }) => {
  const plans: Plan[] = [
    { name: "Estudiante"},
    { name: "Profesional"},
    { name: "Corporativo"},
  ];

  return (
    <div>
      <label className="block text-sm font-semibold leading-6 text-gray-900">
        Selecciona tu plan:
      </label>
      <div className="mt-2.5">
        {plans.map((plan, index) => (
          <label
            key={index}
            className={`cursor-pointer flex justify-between w-full px-4 py-2 rounded-md border border-teal-300 shadow-sm ${
              selectedPlan === plan
                ? "bg-sky-500 border-sky-700"
                : "hover:bg-teal-600"
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                name="plan"
                checked={selectedPlan === plan}
                onChange={() => onChange(plan)}
              />
              <span className="ml-3 text-sm font-medium text-gray-900">
                {plan.name}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CreateUserForm;





// import React, { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { Switch } from "@headlessui/react";
// import Swal from "sweetalert2";
// import axios, { AxiosResponse } from "axios";
// import { useNavigate } from "react-router-dom";

// interface Plan {
//   name: string;
//   ram: string;
//   cpus: string;
// }

// const For: React.FC = () => {
//   const [agreed, setAgreed] = useState<boolean>(false);
//   const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
//   const [country, setCountry] = useState<string>("MX");
//   const [state, setState] = useState<string>("");
//   const [deviceId, setDeviceId] = useState<number | undefined>(undefined);
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const navigate = useNavigate();

//   const handlePlanChange = (plan: Plan): void => {
//     setSelectedPlan(plan);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     event.preventDefault();
  
//     // Verificar que todos los campos estén llenos
//     const formData = new FormData(event.currentTarget);
//     const data: { [key: string]: string } = {};
//     let allFieldsFilled = true; // Variable para rastrear si todos los campos están llenos
  
//     formData.forEach((value, key) => {
//       data[key] = value as string;
//       if (!value) {
//         allFieldsFilled = false;
//       }
//     });

//     // Validar el campo de ID del dispositivo
//     const deviceId = formData.get('device-id');
//     if (!deviceId) {
//       allFieldsFilled = false;
//     }
  
//     if (!allFieldsFilled) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Por favor, completa todos los campos para continuar'
//       });
//       return;
//     }
  
//     // Verificar que se haya aceptado las políticas
//     if (!agreed) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Debes aceptar las políticas de seguridad para continuar'
//       });
//       return;
//     }
  
//     try {
//       const response: AxiosResponse = await axios.post('https://apiusuarios-spkt.onrender.com/api/users', data);
//       console.log('Response;', response.data)
  
//       // Mostrar el modal de creación exitosa
//       Swal.fire({
//         icon: 'success',
//         title: '¡Cuenta creada exitosamente!',
//         text: 'Gracias por registrarte en SafeCycle.',
//         showConfirmButton: false,
//         timer: 2000,
//       });
  
//       // Redirigir a la página de inicio de sesión después de 2 segundos
//       setTimeout(() => {
//         navigate('/login');
//       }, 2000);
//     } catch (error) {
//       console.error('Error', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde'
//       })
//     }
//   };
  
//   const classNames = (...classes: string[]): string => {
//     return classes.filter(Boolean).join(" ");
//   };

//   return (
//     <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//       <div
//         className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//         aria-hidden="true"
//       >
//         <div
//           className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//         />
//       </div>
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="text-3xl font-bold tracking-tight text-cyan-900 sm:text-4xl">
//           Crea tu cuenta
//         </h2>
//         <p className="mt-2 text-lg leading-8 text-cyan-600">
//           Forma parte de SafeCycle y sus beneficios.
//         </p>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="mx-auto mt-16 max-w-xl sm:mt-20"
//       >
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Nombre:
//             </label>
//             <div className="mt-2.5">
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 autoComplete="given-name"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="last-name"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Apellidos:
//             </label>
//             <div className="mt-2.5">
//               <input
//                 type="text"
//                 name="last-name"
//                 id="last-name"
//                 autoComplete="family-name"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div>
//             <div>
//               <label
//                 htmlFor="device-id"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 ID del Dispositivo:
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   type="number"
//                   name="device-id"
//                   id="device-id"
//                   autoComplete="off"
//                   value={deviceId || ""}
//                   onChange={(e) => setDeviceId(parseInt(e.target.value))}
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="company"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Usuario:
//             </label>

//             <Rad selected={selectedPlan} onChange={handlePlanChange} />
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Email:
//             </label>
//             <div className="mt-2.5">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="password"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Contraseña:
//             </label>
//             <div className="mt-2.5">
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 autoComplete="new-password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-1">
//             <label
//               htmlFor="country"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               País:
//             </label>
//             <div className="mt-2.5">
//               <select
//                 id="country"
//                 name="country"
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               >
//                 <option value="MX">México</option>
//               </select>
//               <ChevronDownIcon
//                 className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-1">
//             <label
//               htmlFor="estado"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Estado:
//             </label>
//             <div className="mt-2.5">
//               <select
//                 id="estado"
//                 name="estado"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               >
//                 <option value="">Selecciona un estado</option>
//                 <option value="Aguascalientes">Aguascalientes</option>
//                 <option value="Baja California">Baja California</option>
//                 <option value="Baja California Sur">Baja California Sur</option>
//                 <option value="Campeche">Campeche</option>
//                 <option value="Chiapas">Chiapas</option>
//                 <option value="Chihuahua">Chihuahua</option>
//                 <option value="Coahuila">Coahuila</option>
//                 <option value="Colima">Colima</option>
//                 <option value="Durango">Durango</option>
//                 <option value="Estado de México">Estado de México</option>
//                 <option value="Guanajuato">Guanajuato</option>
//                 <option value="Guerrero">Guerrero</option>
//                 <option value="Hidalgo">Hidalgo</option>
//                 <option value="Jalisco">Jalisco</option>
//                 <option value="Michoacán">Michoacán</option>
//                 <option value="Morelos">Morelos</option>
//                 <option value="Nayarit">Nayarit</option>
//                 <option value="Nuevo León">Nuevo León</option>
//                 <option value="Oaxaca">Oaxaca</option>
//                 <option value="Puebla">Puebla</option>
//                 <option value="Querétaro">Querétaro</option>
//                 <option value="Quintana Roo">Quintana Roo</option>
//                 <option value="San Luis Potosí">San Luis Potosí</option>
//                 <option value="Sinaloa">Sinaloa</option>
//                 <option value="Sonora">Sonora</option>
//                 <option value="Tabasco">Tabasco</option>
//                 <option value="Tamaulipas">Tamaulipas</option>
//                 <option value="Tlaxcala">Tlaxcala</option>
//                 <option value="Veracruz">Veracruz</option>
//                 <option value="Yucatán">Yucatán</option>
//                 <option value="Zacatecas">Zacatecas</option>
//               </select>
//             </div>
//           </div>
//           <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
//             <div className="flex h-6 items-center">
//               <Switch
//                 checked={agreed}
//                 onChange={setAgreed}
//                 className={classNames(
//                   agreed ? "bg-sky-900" : "bg-gray-200",
//                   "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 )}
//               >
//                 <span className="sr-only">Acepto las políticas</span>
//                 <span
//                   aria-hidden="true"
//                   className={classNames(
//                     agreed ? "translate-x-3.5" : "translate-x-0",
//                     "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
//                   )}
//                 />
//               </Switch>
//             </div>
//             <Switch.Label className="text-sm leading-6 text-gray-600">
//               Al seleccionar esto, usted acepta nuestra{" "}
//               <span className="font-semibold text-sky-900">privacy and policy</span>
//             </Switch.Label>
//           </Switch.Group>
//         </div>
//         <div className="mt-10">
//           <button
//             type="submit"
//             className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             disabled={agreed}
//           >
//             Crear Cuenta
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default For;
