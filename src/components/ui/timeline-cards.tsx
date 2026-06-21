import { CardStack } from "./card-stack";

const TIMELINE_ITEMS = [
  {
    id: 1,
    title: "Recepción de invitados",
    description: "4:00 PM - Los esperamos con un cóctel de bienvenida en los jardines de la hacienda.",
    imageSrc: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Ceremonia civil",
    description: "5:00 PM - El momento más esperado. Nos uniremos en matrimonio rodeados de su amor.",
    imageSrc: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Cóctel y apertura de bar",
    description: "6:30 PM - Brindis, aperitivos y música para ambientar la celebración.",
    imageSrc: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Cena",
    description: "8:00 PM - Disfrutaremos de una cena especial preparada para todos los invitados.",
    imageSrc: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Fiesta y baile",
    description: "10:00 PM - Abran pista, que la fiesta recién comienza. ¡A bailar hasta el amanecer!",
    imageSrc: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
  },
];

export default function TimelineCards() {
  return (
    <div className="max-w-3xl mx-auto">
      <style>{`
        .bg-foreground { background-color: #5c7766; }
        .bg-foreground\/30 { background-color: rgba(92,119,102,0.3); }
        .bg-foreground\/50 { background-color: rgba(92,119,102,0.5); }
        .hover\:bg-foreground\/50:hover { background-color: rgba(92,119,102,0.5); }
        .text-muted-foreground { color: #5c7766; }
        .hover\:text-foreground:hover { color: #2d2a28; }
        .text-foreground { color: #2d2a28; }
        .bg-secondary { background: #dfdedb; }
        .text-muted-foreground { color: #5c7766; }
      `}</style>
      <CardStack
        items={TIMELINE_ITEMS}
        initialIndex={0}
        autoAdvance
        intervalMs={3000}
        pauseOnHover
        showDots
        loop
        cardWidth={400}
        cardHeight={280}
        overlap={0.45}
        spreadDeg={40}
      />
    </div>
  );
}
