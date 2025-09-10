import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Imagen de fondo */}
      <Image
        src="/fondo1.jpeg"
        alt="Fondo CERREDES"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
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
