import SocialCards from "./card-fan-carousel";

const WEDDING_CARDS = [
  { imgUrl: "/fotos/foto 1.jpeg", alt: "Nuestro compromiso" },
  { imgUrl: "/fotos/foto 2.jpeg", alt: "Viaje a la montaña" },
  { imgUrl: "/fotos/foto 3.jpg", alt: "Atardecer en la playa" },
  { imgUrl: "/fotos/foto 4.jpeg", alt: "Familia y amigos" },
  { imgUrl: "/fotos/foto 5.jpg", alt: "Nuestra canción" },
  { imgUrl: "/fotos/foto 6.jpg", alt: "El primer hogar" },
];

export default function GalleryFan() {
  return (
    <section id="galeria" className="section">
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 400,
        fontSize: "2.5rem",
        color: "var(--dark)",
        marginBottom: "1.5rem",
        letterSpacing: "0.15rem",
        textAlign: "center"
      }}>Galería</h2>
      <div className="divider" />
      <SocialCards cards={WEDDING_CARDS} />
    </section>
  );
}
