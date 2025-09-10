import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const menuItems = ['Inicio', 'Servicios', 'Productos', 'Contacto'];

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/fondo1.jpeg',
    '/fondo2.jpeg',
    '/fondo3.jpeg',
    '/fondo4.jpeg'
  ];

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>

      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        background: '#000',
        zIndex: 1000,
        borderBottom: '2px solid orange'
      }}>
        {/* Logo */}
        <div style={{ cursor: 'pointer' }}>
          <Image src="/logo.png" alt="CERREDES" width={120} height={60} />
        </div>

        {/* Desktop Menu */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2rem',
            margin: 0,
            padding: 0
          }}>
            {menuItems.map((item) => (
              <li
                key={item}
                style={{
                  cursor: 'pointer',
                  color: '#fff',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.borderBottom = '2px solid orange'}
                onMouseLeave={e => e.currentTarget.style.borderBottom = 'none'}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Carrito */}
          <div style={{ fontSize: '1.5rem', color: 'orange', cursor: 'pointer' }}>🛒</div>
        </nav>
      </header>

      {/* Main */}
      <main style={{
        position: 'relative',
        overflow: 'hidden',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <Image
          src={images[currentIndex]}
          alt="Fondo CERREDES"
          fill
          priority
          style={{ objectFit: 'contain', zIndex: -1, transition: 'opacity 1s ease-in-out' }}
        />

        <p style={{ color: '#fff', fontSize: '2rem', zIndex: 1 }}>
          Servicios de consultoría y venta de productos
        </p>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        borderTop: '2px solid orange'
      }}>
        <p style={{ color: '#fff' }}>© 2025 CERREDES SpA</p>
      </footer>
    </div>
  );
}
