import Image from "next/image";
import { useState, useEffect } from "react";
import { Figtree, Montserrat, Roboto } from "next/font/google";

const figtree = Figtree({ weight: "400", subsets: ["latin"] });
const montserratLight = Montserrat({ weight: "200", subsets: ["latin"] });
const montserratMedium = Montserrat({ weight: "500", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const images = ["/fondo1.jpeg", "/fondo2.jpeg", "/fondo3.jpeg", "/fondo4.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <main className="main">
        <header className="header">
          <div className="logo">
            <Image src="/logo.png" alt="Logo" width={120} height={50} />
          </div>

          <nav className="nav">
            <ul className={`${figtree.className} menu`}>
              {["Inicio", "Servicios", "Productos", "Contacto"].map((item, i) => (
                <li key={i} className="menu-item">{item}</li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
            {images.map((src, i) => (
              <div key={i} className="carousel-slide">
                <Image
                  src={src}
                  alt={`Fondo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  priority={i === 0}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            ))}
          </div>

          <div className="hero-text">
            <div className={montserratMedium.className}><span className="highlight">Servicios</span> de</div>
            <div className={montserratLight.className}>Consultoría y Venta de productos</div>
          </div>
        </div>

        <footer className={roboto.className}>© 2025 Cerredes Spa</footer>
      </main>

      <style jsx>{`
        .main {
          position: relative;
          overflow-x: hidden;
          height: 100vh;
          width: 100%;
          background-color: #111111;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #2c2c2c;
          z-index: 10;
        }

        .nav .menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .menu-item {
          color: #fff;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .menu-item:hover,
        .menu-item:active {
          color: orange;
        }

        .carousel-container {
          position: relative;
          margin-top: 80px;
          height: calc(100vh - 80px);
          min-height: 400px;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          width: ${images.length * 100}vw;
          transition: transform 1s ease-in-out;
        }

        .carousel-slide {
          position: relative;
          flex: 0 0 100vw;
          height: 100%;
        }

        .hero-text {
          position: absolute;
          bottom: 10%;
          left: 5%;
          color: #fff;
          font-size: 2.8rem;
          line-height: 1.2;
          letter-spacing: 1px;
          z-index: 2;
        }

        .highlight {
          color: orange;
        }

        footer {
          width: 100%;
          background-color: #111111;
          color: #666666;
          text-align: center;
          padding: 0.5rem 0;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .header {
            padding: 0.5rem 1rem;
          }
          .nav .menu {
            gap: 1rem;
          }
          .hero-text {
            font-size: 1.6rem;
            bottom: 5%;
            left: 5%;
          }
          .carousel-container {
            margin-top: 60px;
            height: calc(100vh - 60px);
          }
          footer {
            font-size: 0.9rem;
            padding: 1rem 0;
          }
        }

        @media (max-width: 480px) {
          .hero-text {
            font-size: 1.2rem;
          }
          .menu-item {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
