"use client";

import React from "react";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components"; 

export default function ServicioPage() {
  // Parche para evitar errores de tipos en Vercel
  const fixProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  } as any;

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* SECCIÓN HERO */}
      <section className="relative w-full">
        <div className="relative h-[50vh] w-full bg-[url('/image/carrocatalogo1.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 h-full w-full bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full items-center justify-center">
            <Typography 
              variant="h1" 
              color="white" 
              className="text-5xl font-bold uppercase tracking-widest text-center"
              {...fixProps}
            >
              Servicios y Repuestos
            </Typography>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONTENIDO */}
      <section className="bg-white py-20 px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography 
                variant="h2" 
                className="mb-6 text-3xl font-bold text-gray-900 uppercase"
                {...fixProps}
              >
                Mantenimiento Profesional
              </Typography>
              <Typography 
                className="mb-8 text-gray-600 leading-relaxed"
                {...fixProps}
              >
                Contamos con talleres especializados y personal altamente capacitado 
                para asegurar que tu JAC se mantenga como nuevo. Utilizamos tecnología 
                de diagnóstico de última generación.
              </Typography>
              <Button 
                className="bg-[#007fb2]" 
                {...fixProps}
              >
                Agendar Cita
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image 
                src="/image/jacrojo3.webp" 
                alt="Servicio Técnico"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}