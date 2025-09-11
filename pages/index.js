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
        width: "100vw",
      }}
    >
      {/* Header con logo y menú */}
      <header
        style={{
          position: "absolute",       // fijo sobre el carrusel
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          zIndex: 10,
          background: "linear-gradient(to right, #1c1c1c, #2a2a2a)",
          borderBottom: "none" // línea naranja
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="Logo" width={120} height={50} />
        </div>

        {/* Menú */}
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "2rem",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ color: "#fff", cursor: "pointer" }}>Inicio</li>
            <li style={{ color: "#fff", cursor: "pointer" }}>Servicios</li>
            <li style={{ color: "#fff", cursor: "pointer" }}>Productos</li>
            <li style={{ color: "#fff", cursor: "pointer" }}>Contacto</li>
          </ul>
        </nav>
      </header>

      {/* Contenedor del carrusel */}
      <div
        style={{
          display: "flex",
          height: "100%",
          width: `${images.length * 100}vw`,
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              flex: "0 0 100vw",
              height: "100vh",
              flexShrink: 0,
            }}
          >
            <Image
              src={src}
              alt={`Fondo ${i + 1}`}
              fill
              priority={i === 0}
              style={{
                objectFit: "cover", // llena la pantalla
                objectPosition: "center", // centra la imagen
                backgroundColor: "black",
                minWidth: "100%",
                minHeight: "100%",
              }}
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
