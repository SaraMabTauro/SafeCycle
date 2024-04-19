import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import axios from 'axios';

const Tiempo = () => {
  const [meta, setMeta] = useState(5); // Meta de rendimiento
  const [proceso, setProceso] = useState([]); // Datos de proceso

  useEffect(() => {
    const fetchProcesoData = async () => {
      try {
        const userDataString = localStorage.getItem('user'); // Obtener los datos del usuario del localStorage
        if (userDataString) {
          const user = JSON.parse(userDataString);
          const response = await axios.get(`https://apiusuarios-spkt.onrender.com/api/usersws/${user._id}`);
          // Verificar si la respuesta contiene los datos de proceso
          if (response.data && response.data.proceso) {
            // Actualizar los datos de proceso en el estado
            setProceso(response.data.proceso);
          } else {
            console.error('No se encontraron datos de proceso en la respuesta');
          }
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchProcesoData();
  }, []);

  const formatSeries = (data: number[]) => {
    // Verificar si data es un array antes de llamar a forEach
    if (!Array.isArray(data)) {
      console.error('Error: data is not an array');
      return [];
    }
  
    // Formatear los datos de la serie
    return data.map((item, index) => item);
  };
  

  // Formatear los datos de la serie proceso
  const formattedProceso = formatSeries(proceso);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Tiempo y Rendimiento</h2>
      {/* Gráfica de proceso */}
      <div className="mb-4">
        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <SparkLineChart
              data={formattedProceso} // Utilizar los datos formateados
              height={100}
              showTooltip
              showHighlight
            />
          </Box>
        </Stack>
      </div>
      {/* Meta de rendimiento */}
      <div className="mb-4">
        <label htmlFor="meta" className="block text-sm font-medium text-gray-700">Meta de rendimiento:</label>
        <input
          type="number"
          id="meta"
          value={meta}
          onChange={(e) => setMeta(parseInt(e.target.value))}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        />
      </div>
      {/* Comparación con la meta */}
      <div>
        <p>Rendimiento actual:</p>
        {proceso[proceso.length - 1] >= meta ? (
          <p className="text-green-600 font-semibold">¡Rendimiento alcanzado!</p>
        ) : (
          <p className="text-red-600 font-semibold">No se ha alcanzado la meta de rendimiento.</p>
        )}
      </div>
    </div>
  );
};

export default Tiempo;
