// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faMapMarkerAlt, faPhone, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
// import { LineChart } from '@mui/x-charts/LineChart';
// import GoogleMapComponent from './Maps';

// const Profile = () => {
//   // Supongamos que tienes los datos del usuario en un objeto llamado user
//   const user = {
//     name: 'Nombre del Usuario',
//     email: 'usuario@example.com',
//     location: 'Chiapas',
//     phone: '1234567890',
//   };

//   // Datos de ejemplo para la gráfica
//   const totalRecorridos = {
//     xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//     series: [
//       {
//         data: [2, 5.5, 2, 8.5, 1.5, 5],
//       },
//     ],
//   };

//   const userProfile = 'Deportista';

//   return (
//     <div className="p-4 bg-gray-100 rounded-md shadow-md">

//       <div className="mx-auto max-w-lg">
//         <div className="bg-gradient-to-r from-teal-400 to-green-500 text-white rounded-lg shadow-xl p-6">
//           <div className="text-center mb-4">
//             <FontAwesomeIcon icon={faUser} className="text-5xl mb-4" />
//             <h2 className="text-2xl font-semibold">{user.name}</h2>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center text-gray-200">
//               <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" />
//               <span className='text-lg'>{user.email}</span>
//             </div>
//             <div className="flex items-center text-gray-200">
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mr-2" />
//               <span className='text-lg'>{user.location}</span>
//             </div>
//             <div className="flex items-center text-gray-200">
//               <FontAwesomeIcon icon={faPhone} className="text-xl mr-2" />
//               <span className='text-lg'>{user.phone}</span>
//             </div>
//           </div>
//         </div>
//       </div>


//       <div className="mt-8">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-teal-500 px-4 py-3 flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-white">Perfil</h3>
//             <FontAwesomeIcon icon={faUsersViewfinder} className="text-lg text-white" />
//           </div>
//           <div className="p-4">
//             <p className="text-gray-700">{userProfile}</p>
//             {/* Aquí puedes agregar más detalles del perfil si es necesario */}
//           </div>
//         </div>
//       </div>


//       <div className="mt-4 mx-auto max-w-2xl">
//         <div className="p-4 rounded-md shadow-md bg-teal-200">
//           <h3 className="text-lg font-semibold mb-2">Ubicación:</h3>
//           <div className="mt-2 mb-4">
//             <GoogleMapComponent />
//           </div>
//         </div>
//       </div>

//       <div className="mt-4">
//         <div className="p-4 bg-white rounded-md shadow-md flex justify-center items-center">
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Total de Recorridos:</h3>
//             <LineChart {...totalRecorridos} width={500} height={300} />
//           </div>
//         </div>
//       </div>



//     </div>
//   );
// };

// export default Profile;



// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faMapMarkerAlt, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
// import { LineChart } from '@mui/x-charts/LineChart';
// import GoogleMapComponent from './Maps';
// import axios from 'axios';

// const Profile = () => {
//   const [userData, setUserData] = useState<any>(null);
//   const [userStats, setUserStats] = useState<any>(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userId = localStorage.getItem("token");
//         if (userId) {
//           const response = await axios.get(`https://apiusuarios-spkt.onrender.com/api/usersws/${userId}`);
//           setUserData(response.data);
//           setUserStats({
//             xAxis: [{ data: response.data.sensorData.map((_ : any, i: number) => i + 1) }],
//             series: [{ data: response.data.sensorData.map((datoSensor: any) => datoSensor.distancia) }],
//           });
//         }
//       } catch (error) {
//         console.error('Error al obtener los datos del usuario:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <div className="p-4 bg-gray-100 rounded-md shadow-md">
//       {userData && (
//         <div className="mx-auto max-w-lg">
//           <div className="bg-gradient-to-r from-teal-400 to-green-500 text-white rounded-lg shadow-xl p-6">
//             <div className="text-center mb-4">
//               <FontAwesomeIcon icon={faUser} className="text-5xl mb-4" />
//               <h2 className="text-2xl font-semibold">{userData.name}</h2>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="flex items-center text-gray-200">
//                 <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" />
//                 <span className='text-lg'>{userData.email}</span>
//               </div>
//               <div className="flex items-center text-gray-200">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mr-2" />
//                 <span className='text-lg'>{userData.location}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="mt-8">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-teal-500 px-4 py-3 flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-white">Perfil</h3>
//             <FontAwesomeIcon icon={faUsersViewfinder} className="text-lg text-white" />
//           </div>
//           <div className="p-4">
//             <p className="text-gray-700">{userData?.profile || "Perfil no disponible"}</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 mx-auto max-w-2xl">
//         <div className="p-4 rounded-md shadow-md bg-teal-200">
//           <h3 className="text-lg font-semibold mb-2">Ubicación:</h3>
//           <div className="mt-2 mb-4">
//             <GoogleMapComponent />
//           </div>
//         </div>
//       </div>

//       <div className="mt-4">
//         {userStats && (
//           <div className="p-4 bg-white rounded-md shadow-md flex justify-center items-center">
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Total de Recorridos:</h3>
//               <LineChart {...userStats} width={500} height={300} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMapMarkerAlt, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import { LineChart } from '@mui/x-charts/LineChart';
import GoogleMapComponent from './Maps';
import axios, { AxiosError } from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [userStats, setUserStats] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = localStorage.getItem('user'); // Obtener los datos del usuario del localStorage
        console.log("user:", userDataString); // Verificar los datos del usuario en la consola
        if (userDataString) {
          const user = JSON.parse(userDataString);
          console.log("user:", user); // Verificar el objeto del usuario en la consola
          const response = await axios.get(`https://apiusuarios-spkt.onrender.com/api/usersws/${user._id}`);
          console.log("response:", response.data); // Verificar la respuesta de la solicitud en la consola
          setUserData(response.data);
          setUserStats({
            xAxis: [{ data: response.data.sensorData.map((_ : any, i: number) => i + 1) }],
            series: [{ data: response.data.sensorData.map((datoSensor: any) => datoSensor.distancia) }],
          });
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          console.error('AxiosError:', axiosError.response?.data); // Verificar el error en la consola
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      {userData && (
        <div className="mx-auto max-w-lg">
          <div className="bg-gradient-to-r from-teal-400 to-green-500 text-white rounded-lg shadow-xl p-6">
            <div className="text-center mb-4">
              <FontAwesomeIcon icon={faUser} className="text-5xl mb-4" />
              <h2 className="text-2xl font-semibold">{userData.name}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-200">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" />
                <span className='text-lg'>{userData.email}</span>
              </div>
              <div className="flex items-center text-gray-200">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mr-2" />
                <span className='text-lg'>{userData.estado}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-teal-500 px-4 py-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Perfil</h3>
            <FontAwesomeIcon icon={faUsersViewfinder} className="text-lg text-white" />
          </div>
          <div className="p-4">
            <p className="text-gray-700">{userData?.ocupacion || "Perfil no disponible"}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 mx-auto max-w-2xl">
        <div className="p-4 rounded-md shadow-md bg-teal-200">
          <h3 className="text-lg font-semibold mb-2">Ubicación:</h3>
          <div className="mt-2 mb-4">
            <GoogleMapComponent />
          </div>
        </div>
      </div>

      <div className="mt-4">
        {userStats && (
          <div className="p-4 bg-white rounded-md shadow-md flex justify-center items-center">
            <div>
            <h3 className="text-lg font-semibold mb-2">Distancia Recorrida por Día:</h3>
              <LineChart {...userStats} width={500} height={300} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;


