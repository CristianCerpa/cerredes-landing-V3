import Image from "next/image";
import { useState, useEffect } from "react";

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
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Contenedor del carrusel */}
      <div
        style={{
          display: "flex",
          height: "100%",
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{ position: "relative", flex: "0 0 100%", height: "100%" }}
          >
            <Image
              src={src}
              alt={`Fondo ${i + 1}`}
              fill
              priority={i === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Texto encima */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "2rem",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        Servicios de consultoría y venta de productos
      </div>
    </main>
  );
}
