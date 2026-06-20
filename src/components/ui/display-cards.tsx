"use client";

import { cn } from "@/lib/utils";
import { Clock, Wine, PartyPopper, Utensils, Heart, ChevronDown } from "lucide-react";
import { useRef, useState, useCallback } from "react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
  isExpanded?: boolean;
}

function DisplayCard({
  className,
  icon = <Clock className="size-5 text-[#697670]" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-[#697670]",
  titleClassName = "text-[#697670]",
  onClick,
  isExpanded,
}: DisplayCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      transition: "transform 0.1s ease-out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease-out",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={style}
      className={cn(
        "relative flex h-52 w-[90vw] sm:w-[24rem] lg:w-[28rem] sm:-skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-[#697670]/20 bg-[#dfdedb]/70 backdrop-blur-sm px-4 sm:px-6 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-[#dfdedb] after:to-transparent after:content-[''] hover:border-[#697670]/40 hover:bg-[#dfdedb] [&>*]:flex [&>*]:items-center [&>*]:gap-2 sm:[&>*]:gap-3",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-[#5c7766]/20 p-1.5 sm:p-2">
          {icon}
        </span>
        <p className={cn("text-base sm:text-xl font-medium flex-1", titleClassName)}>{title}</p>
        <ChevronDown className={cn("size-4 sm:size-5 text-[#697670] transition-transform duration-300", isExpanded && "rotate-180")} />
      </div>
      <p className="whitespace-nowrap text-base sm:text-xl text-[#5c7766]">{description}</p>
      <p className="text-sm sm:text-base text-[#697670]/60 whitespace-normal">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const defaultCards = [
    {
      icon: <Clock className="size-4 sm:size-5 text-[#697670]" />,
      title: "4:00 PM",
      description: "Recepción de invitados",
      date: "Llegada y bienvenida — Los esperamos con un café de bienvenida mientras todos llegan.",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-[#697670]/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#dfdedb]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Heart className="size-4 sm:size-5 text-[#697670]" />,
      title: "5:00 PM",
      description: "Ceremonia civil",
      date: "El gran momento — La ceremonia donde uniremos nuestras vidas frente a nuestros seres queridos.",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "[grid-area:stack] translate-x-4 sm:translate-x-12 translate-y-4 sm:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-[#697670]/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#dfdedb]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Wine className="size-4 sm:size-5 text-[#697670]" />,
      title: "6:30 PM",
      description: "Cóctel y apertura de bar",
      date: "Brindis y celebración — Disfrutaremos de un cóctel con aperitivos mientras brindamos por el amor.",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "[grid-area:stack] translate-x-8 sm:translate-x-24 translate-y-8 sm:translate-y-20 hover:translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-[#697670]/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#dfdedb]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Utensils className="size-4 sm:size-5 text-[#697670]" />,
      title: "8:00 PM",
      description: "Cena",
      date: "Banquete — Una cena especial preparada para celebrar este día tan importante.",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "[grid-area:stack] translate-x-12 sm:translate-x-36 translate-y-12 sm:translate-y-30 hover:translate-y-20 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-[#697670]/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#dfdedb]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <PartyPopper className="size-4 sm:size-5 text-[#697670]" />,
      title: "10:00 PM",
      description: "Fiesta y baile",
      date: "¡A bailar! — La noche apenas comienza, todos a la pista a celebrar.",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "[grid-area:stack] translate-x-16 sm:translate-x-48 translate-y-16 sm:translate-y-40 hover:translate-y-30",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center">
      {displayCards.map((cardProps, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <DisplayCard
            key={index}
            {...cardProps}
            isExpanded={isExpanded}
            onClick={() => setExpandedIndex(isExpanded ? null : index)}
            date={isExpanded ? (cardProps.date || "") : (cardProps.date?.split("—")[0]?.trim() || "")}
            className={cn(
              cardProps.className,
              "cursor-pointer transition-all duration-500",
              isExpanded && "!z-50 !h-auto !min-h-52 !pb-6 !grayscale-0 !border-[#697670]/60 !before:opacity-0 !translate-y-0 !translate-x-0",
            )}
          />
        );
      })}
    </div>
  );
}
