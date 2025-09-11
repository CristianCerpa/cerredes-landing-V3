import Image from "next/image";
import { useState, useEffect } from "react";
import { Figtree } from "next/font/google";
import { Montserrat } from "next/font/google";

const figtree = Figtree({ 
  weight: "400",   // Regular
  subsets: ["latin"] 
});
const montserratLight = Montserrat({
  weight: "200", // Light Italic 
  subsets: ["latin"],
});
const montserratMedium = Montserrat({
  weight: "500", // Medium
  subsets: ["latin"],
});

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
          background: "linear-gradient(to right, #1a1a1a, #2c2c2c, #444444, #2c2c2c, #1a1a1a)",
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
  className={figtree.className} // aplica la fuente Figtree Regular
  style={{
    display: "flex",
    listStyle: "none",
    gap: "2rem",
    margin: 0,
    padding: 0,
  }}
>
  {["Inicio", "Servicios", "Productos", "Contacto"].map((item, i) => (
    <li
      key={i}
      style={{
        color: "#fff",
        cursor: "pointer",
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.color = "orange")}
      onMouseLeave={(e) => (e.target.style.color = "#fff")}
    >
      {item}
    </li>
  ))}
</ul>

          {/* Carrito de compras */}
          <div style={{ fontSize: "2rem", color: "#ff6600", cursor: "pointer" }}>🛒</div>
        </nav>
      </header>

{/* Contenedor del carrusel */}
<div
  style={{
    display: "flex",
    height: "calc(100vh - 80px)", // altura total menos la barra de menú
    width: `${images.length * 100}vw`,
    transform: `translateX(-${currentIndex * 100}vw)`,
    transition: "transform 1s ease-in-out",
    marginTop: "80px", // empuja el carrusel debajo de la barra
  }}
>
  {images.map((src, i) => (
    <div
      key={i}
      style={{
        position: "relative",
        flex: "0 0 100vw", // ancho completo
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
          objectFit: "cover",
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
    bottom: "5%",        // lo mandamos hacia abajo
    left: "5%",           // lo alineamos a la izquierda
    color: "#fff",
    fontSize: "2.8rem",
    textAlign: "left",    // alineación del texto a la izquierda
    zIndex: 2,
    lineHeight: "1.2",    // separación entre frases
    letterSpacing: "1px",
  }}
>
<div className={montserratMedium.className}>
  <span style={{ color: "orange" }}>Servicios</span> de
  </div>
  <div className={montserratLight.className}>Consultoría y Venta de productos</div>
</div>
    </main>
  );
}
