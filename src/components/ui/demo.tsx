import SocialCards from "./card-fan-carousel";

const WEDDING_CARDS = [
  { imgUrl: "https://images.unsplash.com/photo-1716285360159-4161f9d251c7?w=600&h=400&fit=crop", alt: "Nuestro compromiso" },
  { imgUrl: "https://images.unsplash.com/photo-1769540209843-c1e6a462b9d3?w=600&h=400&fit=crop", alt: "Viaje a la montaña" },
  { imgUrl: "https://images.unsplash.com/photo-1772945492325-2fc6528cb547?w=600&h=400&fit=crop", alt: "Atardecer en la playa" },
  { imgUrl: "https://images.unsplash.com/photo-1756087612260-1bc23350628e?w=600&h=400&fit=crop", alt: "Familia y amigos" },
  { imgUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop", alt: "Nuestra canción" },
  { imgUrl: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&h=400&fit=crop", alt: "El primer hogar" },
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
