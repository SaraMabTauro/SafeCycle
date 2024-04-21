import React from 'react';

const GoogleMapComponent: React.FC = () => {
  const apiKey = 'AIzaSyBByrpRYNUS0hxYZZEg33qP0y3hzNprmss'; 
  const placeName = 'Universidad Politécnica de Chiapas, Suchiapa';

  
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
