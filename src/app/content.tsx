"use client";

import React from "react";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";

export function Content() {
  // Parche para evitar errores de tipos en Vercel
  const fixProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  } as any;

  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        {/* INFO Y NAVEGACIÓN */}
        <div className="mb-6 flex items-center justify-between">
          <Typography 
            variant="small" 
            className="font-normal opacity-70"
            {...fixProps}
          >
            January 14, 2026
          </Typography>

          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              variant="outlined" 
              className="flex items-center gap-2"
              {...fixProps}
            >
              Compartir
            </Button>
          </div>
        </div>

        <Typography 
          variant="h2" 
          color="blue-gray" 
          className="mb-4"
          {...fixProps}
        >
          El Futuro de la Movilidad con JAC
        </Typography>

        <Typography 
          className="mb-12 font-normal !text-gray-500"
          {...fixProps}
        >
          Descubre cómo la tecnología de vanguardia y el diseño innovador se 
          fusionan en nuestros modelos más recientes...
        </Typography>

        {/* Asegúrate de aplicar {...fixProps} a CUALQUIER otro Typography 
            o Button que tengas en el resto de este archivo */}
        
        <div className="relative mb-12 h-96 w-full overflow-hidden rounded-xl">
          <Image
            src="/image/blogs/blog-1.png"
            alt="Jac blog"
            fill
            className="h-full w-full object-cover"
          />
        </div>

        <Typography 
          variant="h5" 
          color="blue-gray" 
          className="mb-4"
          {...fixProps}
        >
          Innovación constante
        </Typography>

        <Typography 
          className="mb-6 font-normal !text-gray-500"
          {...fixProps}
        >
          Nuestra misión es proporcionar vehículos que no solo sean herramientas 
          de transporte, sino experiencias tecnológicas completas.
        </Typography>
      </div>
    </section>
  );
}

export default Content;