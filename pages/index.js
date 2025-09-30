import Image from "next/image";
import { useState, useEffect } from "react";
import { Figtree } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";

const figtree = Figtree({ 
  weight: "400",
  subsets: ["latin"] 
});
const montserratLight = Montserrat({
  weight: "200",
  subsets: ["latin"],
});
const montserratMedium = Montserrat({
  weight: "500",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "400",
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <main
        style={{
          position: "relative",
          overflow: "hidden",
          height: "100vh",
          width: "100%",
          backgroundColor: "#111111",
        }}
      >
        {/* Header con logo y menú */}
        <header
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.4rem 2rem",
            zIndex: 10,
            background: "#2c2c2c",
          }}
        >
          {/* Logo */}
          <div>
            <Image src="/logo.png" alt="Logo" width={180} height={80} />
          </div>

          {/* Botón hamburguesa (solo móvil) */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ cursor: "pointer" }}
            className="hamburger"
          >
            <div style={{ width: "25px", height: "3px", backgroundColor: "#fff", margin: "5px 0" }}></div>
            <div style={{ width: "25px", height: "3px", backgroundColor: "#fff", margin: "5px 0" }}></div>
            <div style={{ width: "25px", height: "3px", backgroundColor: "#fff", margin: "5px 0" }}></div>
          </div>

          {/* Menú */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem", marginRight: "5rem" }}>
            <ul
              className={figtree.className}
              style={{
                display: menuOpen ? "flex" : "none",
                flexDirection: "column",
                position: "absolute",
                top: "60px",
                right: "0.5rem",
                backgroundColor: "#2c2c2c",
                listStyle: "none",
                gap: "1rem",
                padding: "1rem",
              }}
            >
              {["Inicio", "Servicios", "Productos", "Contacto"].map((item, i) => (
                <li
                  key={i}
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    paddingBottom: "0.5rem",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "orange")}
                  onMouseLeave={(e) => (e.target.style.color = "#fff")}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          {/* Línea negra inferior */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "20px",
              backgroundColor: "#111111",
            }}
          ></div>
        </header>

        {/* Contenedor del carrusel */}
        <div
          style={{
            display: "flex",
            height: "calc(100vh - 80px)",
            width: `${images.length * 100}vw`,
            transform: `translateX(-${currentIndex * 100}vw)`,
            transition: "transform 1s ease-in-out",
            marginTop: "80px",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                flex: "0 0 100vw",
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
            bottom: "10%",
            left: "5%",
            color: "#fff",
            fontSize: "2.8rem",
            textAlign: "left",
            zIndex: 2,
            lineHeight: "1.2",
            letterSpacing: "1px",
          }}
        >
          <div className={montserratMedium.className}>
            <span style={{ color: "orange" }}>Servicios</span> de
          </div>
          <div className={montserratLight.className}>Consultoría y Venta de productos</div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={roboto.className}
        style={{
          width: "100%",
          backgroundColor: "#111111",
          color: "#666666",
          textAlign: "center",
          padding: "0.5rem 0",
          fontSize: "0.7rem",
          letterSpacing: "1px",
        }}
      >
        © 2025 Cerredes SpA
      </footer>

      {/* Estilos responsivos */}
      <style jsx>{`
        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }
          ul {
            display: flex !important;
            flex-direction: row !important;
            position: static !important;
            background: none !important;
            gap: 2rem !important;
            padding: 0 !important;
          }
        }
        @media (max-width: 767px) {
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
