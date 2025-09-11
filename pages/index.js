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
        overflow: "hidden", // evita scroll horizontal
        height: "100vh",
        width: "100%", // evita scroll horizontal
      }}
    >

      {/* Header con logo, menú y carrito */}
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem", // margen del logo a la izquierda
          zIndex: 10,
          background: "linear-gradient(to right, #0a0a0a, #1c1c1c, #333333, #1c1c1c, #0a0a0a)",
        }}
      >
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="Logo" width={120} height={50} />
        </div>

        {/* Menú + carrito */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginRight: "2rem", // margen al final, mismo que el del logo
          }}
        >
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

          {/* Carrito de compras */}
          <div style={{ fontSize: "1.5rem", color: "orange", cursor: "pointer" }}>🛒</div>
        </nav>
      </header>

      {/* Contenedor del carrusel */}
      <div
        style={{
          display: "flex",
          height: "100%",
          width: `${images.length * 100}%`, // ancho proporcional
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              flex: `0 0 ${100 / images.length}%`, // ancho proporcional
              height: "100%",
              flexShrink: 0,
            }}
          >
            <Image
              src={src}
              alt={`Fondo ${i + 1}`}
              fill
              priority={i === 0}
              style={{
                objectFit: "cover", // mantiene la imagen completa
                objectPosition: "center",
                backgroundColor: "black",
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
