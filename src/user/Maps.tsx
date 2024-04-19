import React from 'react';

const GoogleMapComponent: React.FC = () => {
  const apiKey = 'AIzaSyDOOXHRurl4jSD1AkvLz16ZzLOSC2o3VK4'; // Reemplaza con tu clave de API de Google Maps
  const placeName = 'Universidad Politécnica de Chiapas, Suchiapa';

  // Construye la URL del mapa de Google con los parámetros deseados
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(placeName)}`;

  return (
    <iframe
      title="Google Map"
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={mapUrl}
    />
  );
};

export default GoogleMapComponent;
