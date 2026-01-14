"use client";

import React from "react";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";

export function PromoBanner() {
  const items = [
    {
      title: "JAC Arena automático",
      buttonText: "Saber más",
      image: "/image/carrojac1.png",
    },
    {
      title: "JAC 100% eléctrico",
      buttonText: "Ver experiencias",
      image: "/image/carrojac2.jpg",
    },
    {
      title: "JAC Sport ",
      buttonText: "Ver modelos disponibles",
      image: "/image/carrojac3.jpg",
    },
    {
      title: "JAC Nevado 4x4",
      buttonText: "Saber más",
      image: "/image/carrojac4.jpg",
    },
  ];

  return (
    // CAMBIO 1: Quitamos el h-[500px] de la sección principal para que crezca con el contenido
    // Añadimos bg-[#0f1114] para que el fondo sea oscuro como en la imagen de Audi
    <section className="relative w-full overflow-hidden bg-[#0f1114] pb-20">
      
      {/* SECCIÓN 1: BANNER PRINCIPAL (Márquez) */}
      <div className="relative w-full h-[500px] mb-16">
        <div 
          className="absolute inset-0 bg-[url('/image/fondo1.jpg')] bg-cover bg-center bg-no-repeat"
          role="img"
          aria-label="Márquez x Audi exclusive"
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container relative z-10 mx-auto h-full flex items-start justify-center flex-col px-8">
          <div className="max-w-xl">
            <Typography
              variant="h2"
              color="white"
              className="mb-2 text-3xl font-medium tracking-tight md:text-5xl"
            >
            JAC Venezuela
            </Typography>
            
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-base font-normal opacity-90 md:text-lg"
            >
              Descubre los Jac personalizados de este año.
            </Typography>

            <Button
              size="md"
              className="rounded-full bg-gray-500/80 px-8 py-2.5 text-xs font-bold normal-case hover:bg-white hover:text-black transition-colors"
            >
              Saber más
            </Button>
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: GRID DE 4 IMÁGENES (Contenidos destacados) */}
      <div className="container mx-auto max-w-7xl px-4">
        <Typography 
          variant="h2" 
          className="text-white text-center text-3xl font-light mb-12"
        >
          Contenidos destacados
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="relative group h-[400px] md:h-[550px] overflow-hidden rounded-xl bg-gray-900 shadow-xl"
            >
              {/* Imagen de fondo con efecto zoom */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Degradado inferior para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Texto y Botón centrados abajo */}
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center text-center">
                <Typography 
                  variant="h3" 
                  className="text-white text-xl md:text-2xl font-semibold mb-6 tracking-wide"
                >
                  {item.title}
                </Typography>
                
                <Button
                  size="sm"
                  className="rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-10 py-3 text-xs font-bold capitalize hover:bg-white hover:text-black transition-all duration-300"
                >
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;