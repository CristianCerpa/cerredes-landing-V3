import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const images = [
    "/fondo1.jpeg",
    "/fondo2.jpeg",
    "/fondo3.jpeg",
    "/fondo4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Imagen de fondo dinámica */}
      <Image
        key={images[currentIndex]} // importante para que Next cambie la imagen
        src={images[currentIndex]}
        alt="Fondo Carrusel"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1, transition: "opacity 1s ease" }}
      />

      {/* Texto encima */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          top: "40%",
        }}
      >
        Servicios de consultoría y venta de productos
      </div>
    </div>
  );
}
