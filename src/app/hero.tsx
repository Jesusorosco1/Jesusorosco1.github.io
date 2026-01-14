"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";

function Hero() {
  // Parche completo para todos los componentes de Material Tailwind
  const fixProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  } as any;

  return (
    <div className="relative min-h-screen w-full bg-[url('/image/carrojac3.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay oscuro para que el texto resalte */}
      <div className="absolute inset-0 h-full w-full bg-black/40" />
      
      <div className="container relative z-10 mx-auto flex min-h-screen items-start justify-start px-8 pt-48">
        <div className="max-w-xl text-left">
          
          <Typography
            variant="h1"
            color="white"
            className="mb-2 text-4xl font-normal tracking-tight md:text-5xl"
            {...fixProps}
          >
            Nuevo Arena Sport
          </Typography>

          <Typography
            variant="lead"
            color="white"
            className="mb-10 text-lg opacity-90"
            {...fixProps}
          >
            Dinamismo sin límites.
          </Typography>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full bg-gray-500/80 px-8 py-3 text-xs font-bold normal-case hover:bg-gray-400"
              {...fixProps}
            >
              Automático
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-black/80 px-8 py-3 text-xs font-bold normal-case hover:bg-black"
              {...fixProps}
            >
              Eléctrico
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;