"use client";

import { cn } from "@/lib/utils";
import { Clock, Wine, PartyPopper, Utensils, Heart } from "lucide-react";
import { useRef, useState, useCallback } from "react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Clock className="size-5 text-[#697670]" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-[#697670]",
  titleClassName = "text-[#697670]",
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
      style={style}
      className={cn(
        "relative flex sm:h-52 w-[90vw] sm:w-[24rem] lg:w-[28rem] sm:-skew-y-[8deg] -skew-y-0 select-none flex-col justify-between rounded-xl border-2 border-[#697670]/20 bg-[#dfdedb]/70 backdrop-blur-sm px-4 sm:px-6 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-[#dfdedb] after:to-transparent after:content-[''] hover:border-[#697670]/40 hover:bg-[#dfdedb] [&>*]:flex [&>*]:items-center [&>*]:gap-2 sm:[&>*]:gap-3",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-[#5c7766]/20 p-1.5 sm:p-2">
          {icon}
        </span>
        <p className={cn("text-base sm:text-xl font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-base sm:text-xl text-[#5c7766]">{description}</p>
      <p className="text-sm sm:text-base text-[#697670]/60">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      icon: <Clock className="size-4 sm:size-5 text-[#697670]" />,
      title: "4:00 PM",
      description: "Recepción de invitados",
      date: "Llegada y bienvenida",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "max-sm:static [grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-[#697670]/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#dfdedb]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Heart className="size-4 sm:size-5 text-[#697670]" />,
      title: "5:00 PM",
      description: "Ceremonia civil",
      date: "El gran momento",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "max-sm:static [grid-area:stack] sm:translate-x-12 sm:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-[#697670]/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#dfdedb]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Wine className="size-4 sm:size-5 text-[#697670]" />,
      title: "6:30 PM",
      description: "Cóctel y apertura de bar",
      date: "Brindis y celebración",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "max-sm:static [grid-area:stack] sm:translate-x-24 sm:translate-y-20 hover:translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-[#697670]/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#dfdedb]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Utensils className="size-4 sm:size-5 text-[#697670]" />,
      title: "8:00 PM",
      description: "Cena",
      date: "Banquete",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "max-sm:static [grid-area:stack] sm:translate-x-36 sm:translate-y-30 hover:translate-y-20 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-[#697670]/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#dfdedb]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <PartyPopper className="size-4 sm:size-5 text-[#697670]" />,
      title: "10:00 PM",
      description: "Fiesta y baile",
      date: "¡A bailar!",
      iconClassName: "text-[#697670]",
      titleClassName: "text-[#697670]",
      className:
        "max-sm:static [grid-area:stack] sm:translate-x-48 sm:translate-y-40 hover:translate-y-30",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <>
      {/* Mobile: vertical list */}
      <div className="flex flex-col gap-4 w-full sm:hidden">
        {displayCards.map((cardProps, index) => (
          <DisplayCard key={index} {...cardProps} className={"!w-full !h-40 !skew-y-0 !after:hidden " + (cardProps.className || "")} />
        ))}
      </div>
      {/* Desktop: stacked cards */}
      <div className="hidden sm:grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
        {displayCards.map((cardProps, index) => (
          <DisplayCard key={index} {...cardProps} />
        ))}
      </div>
    </>
  );
}
