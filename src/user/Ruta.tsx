import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';
import io from 'socket.io-client'; 

import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const CreateRoute = () => {
  const [speed, setSpeed] = useState(0);
  const [acceleration, setAcceleration] = useState(0);
  const [cantidadPedaleos, setCantidadPedaleos] = useState(0);
  const [distancia, setDistancia] = useState(0);
  const [fecha, setFecha] = useState(0);

  useEffect(() => {
    const socketInstance = io('http://52.20.195.195');

    socketInstance.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socketInstance.on('updateSensorData', (data) => {
      console.log('Datos de sensor actualizados recibidos:', data);
      setSpeed(data.velocidad);
      setAcceleration(data.aceleracion);
      setCantidadPedaleos(data.cantidadPedaleos)
      setDistancia(data.distancia);
      setFecha(data.createdAt);
    });

    socketInstance.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleStartRoute = () => {
    console.log('Iniciando ruta...');
    // Puedes agregar lógica adicional aquí si es necesario

    // Ejemplo de mostrar SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Ruta iniciada',
      text: 'La ruta se ha iniciado correctamente.',
    });
  };

  const handleFinishRoute = () => {
    console.log('Finalizando ruta...');
    // Puedes agregar lógica adicional aquí si es necesario

    // Ejemplo de mostrar SweetAlert
    Swal.fire({
      icon: 'warning',
      title: '¿Finalizar ruta?',
      text: '¿Estás seguro de que quieres finalizar la ruta?',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Ruta finalizada',
          text: 'La ruta se ha finalizado correctamente.',
        });
      }
    });
  };

  // Definir la configuración del Gauge
  <Gauge
  value={75}
  startAngle={-110}
  endAngle={110}
  sx={{
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 40,
      transform: 'translate(0px, 0px)',
    },
  }}
  text={
     ({ value, valueMax }) => `${value} km/h / ${valueMax}`
  }
            style={{ height: '200px' }} // Establecer una altura para el contenedor del gráfico

  />

  

  const GaugePointer = () => {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {
      // No value to display
      return null;
    }

    const target = {
      x: cx + outerRadius * Math.sin(valueAngle),
      y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
      <g>
        <circle cx={cx} cy={cy} r={5} fill="red" />
        <path
          d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
          stroke="red"
          strokeWidth={3}
        />
      </g>
    );
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Crear Ruta</h2>
      <div className="mb-4 flex justify-center items-center">
        <button
          onClick={handleStartRoute}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mr-2"
        >
          Iniciar Ruta
        </button>
        <button
          onClick={handleFinishRoute}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Finalizar Ruta
        </button>
      </div>
     
      <div className='flex justify-center items-center'>
        <div>
          <h2 className=''>Velocidad: {speed}</h2>
          <h2>Km/h</h2>
        </div>
        <GaugeContainer width={200} height={200} startAngle={-110} endAngle={110} value={speed}>
          <GaugeReferenceArc />
          <GaugeValueArc />
          <GaugePointer />
        </GaugeContainer>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div>
          <h4 className="">Cantidad de Pedaleos: {cantidadPedaleos}</h4>
          <h2>Distancia: {distancia} km</h2>
        </div>
        <Gauge
          value={cantidadPedaleos}
          startAngle={-110}
          endAngle={110}
          innerRadius="80%"
          outerRadius="100%"
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 20,
              transform: 'translate(0px, 0px)',
            },
          }}
          text={({ value, valueMax }) => `${value} / ${valueMax} pedaleos`}
          style={{ height: '150px' }} // Establecer una altura para el contenedor del gráfico

        />
      </div>


    </div>

  );
};

export default CreateRoute;


