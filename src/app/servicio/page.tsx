"use client";

import React from "react";
import Image from "next/image";
import { 
  Typography, 
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Navbar, Footer } from "@/components"; 

// Icono para los desplegables
function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function ServiciosPage() {
  const [openService, setOpenService] = React.useState(0);
  const [openSpare, setOpenSpare] = React.useState(0);

  const handleOpenService = (value: number) => setOpenService(openService === value ? 0 : value);
  const handleOpenSpare = (value: number) => setOpenSpare(openSpare === value ? 0 : value);

  // Datos basados en la imagen de repuestos y servicios
  const ESTADOS = ["Apure", "Anzoátegui", "Aragua", "Barinas", "Bolívar", "Carabobo", "Distrito Capital", "Falcón", "Guárico", "Lara"];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* SECCIÓN HERO */}
      <section className="relative w-full">
        <div className="relative h-[50vh] w-full bg-[url('/image/servicios.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 h-full w-full bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full items-center justify-center">
            <Typography variant="h1" color="white" className="text-5xl font-bold uppercase tracking-widest text-center">
              Servicios y Repuestos
            </Typography>
          </div>
        </div>
      </section>

      {/* SECCIÓN INTRODUCCIÓN Y COMPROMISO */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <Typography className="mb-8 text-gray-700 leading-relaxed">
            En **JAC MOTORS Venezuela**, somos su marca automotriz confiable para los servicios y repuestos de su vehículo JAC. Con una pasión por la excelencia y un compromiso con la satisfacción del cliente, ofrecemos una gama completa de servicios diseñados para mantener su vehículo en óptimas condiciones.
          </Typography>
          <Typography className="mb-12 text-gray-700 font-bold uppercase tracking-wider">
            ¡Estamos aquí para servirle!
          </Typography>
          
          <div className="bg-gray-50 p-8 rounded-xl inline-block w-full md:w-auto">
            <Typography variant="h6" className="mb-4 text-gray-900 uppercase">
              ¿TE INTERESA: Las 5 mejores camionetas para la familia?
            </Typography>
            <Button size="lg" className="bg-[#00adef] rounded-none px-12 py-4 text-sm">
              DESCARGA LA GUÍA DE MANTENIMIENTO
            </Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS Y REPUESTOS (GRID) */}
      <section className="py-16 px-8 border-t border-gray-100">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Columna JAC SERVICE */}
          <div>
            <Typography variant="h2" className="mb-6 text-4xl font-bold text-[#00adef] uppercase tracking-tighter">
              JAC SERVICE
            </Typography>
            <Typography className="mb-8 text-gray-600 text-sm leading-relaxed">
              En nuestros JAC Services, disponibles a nivel nacional, brindamos una amplia gama de servicios para el cuidado y mantenimiento de su vehículo. Ofrecemos **cambios de aceites y filtros**, así como servicios preventivos adaptados al kilometraje específico de tu auto.
            </Typography>

            {/* Accordions Estados Service */}
            <div className="space-y-2">
              {ESTADOS.slice(0, 5).map((estado, idx) => (
                <Accordion key={estado} open={openService === idx + 1} icon={<Icon id={idx + 1} open={openService} />}>
                  <AccordionHeader onClick={() => handleOpenService(idx + 1)} className="text-sm font-medium uppercase py-3 border-b-gray-300">
                    {estado}
                  </AccordionHeader>
                  <AccordionBody className="text-xs text-gray-500">
                    Contamos con centros de servicio autorizados en {estado} totalmente equipados para atender su unidad JAC.
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>

          {/* Columna REPUESTOS */}
          <div>
            <Typography variant="h2" className="mb-6 text-4xl font-bold text-[#00adef] uppercase tracking-tighter">
              REPUESTOS
            </Typography>
            <Typography className="mb-8 text-gray-600 text-sm leading-relaxed">
              Contamos con un amplio inventario de repuestos originales de la marca para garantizar que cada componente de su vehículo mantenga su rendimiento y fiabilidad. En **JAC MOTORS Venezuela**, nos enorgullece brindar soluciones rápidas y efectivas.
            </Typography>

            {/* Accordions Estados Spare */}
            <div className="space-y-2">
              {ESTADOS.map((estado, idx) => (
                <Accordion key={estado} open={openSpare === idx + 1} icon={<Icon id={idx + 1} open={openSpare} />}>
                  <AccordionHeader onClick={() => handleOpenSpare(idx + 1)} className="text-sm font-medium uppercase py-3 border-b-gray-300">
                    {estado}
                  </AccordionHeader>
                  <AccordionBody className="text-xs text-gray-500">
                    Disponibilidad inmediata de piezas originales en nuestros concesionarios de {estado}.
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}