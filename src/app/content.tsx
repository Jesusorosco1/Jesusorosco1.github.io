"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importación necesaria
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";



// Datos para el carrusel de Audi
const CATEGORIES = ["Todos", "100% eléctrico", "Híbrido enchufable", "Gasolina / Diésel", "Sportback", "allstreet", "Sedan", "Audi Sport", "Avant", "Deportivo", "SUV"];

const MODELS = [
  { name: "JAC Arena", models: "2 modelos", image: "/image/1.png" },
  { name: "JAC Arena Sport", models: "9 modelos", image: "/image/2.png" },
  { name: "JAC A3", models: "6 modelos", image: "/image/3.png" },
  { name: "JAC A3 Sport", models: "6 modelos", image: "/image/4.png" },
  { name: "JAC A5 ", models: "4 modelos", image: "/image/5.png", electric: true },
  { name: "JAC A7", models: "2 modelos", image: "/image/6.png" },
  { name: "JAC A8", models: "5 modelos", image: "/image/8.png" },
  { name: "JAC Sport GT", models: "4 modelos", image: "/image/9.png", electric: true },
];
export function Content() {
  return (
    <section className="py-12 px-8 bg-[#0f1115] text-white">
      <div className="">
        
        {/* SECCIÓN DE FILTROS (CHIPS) */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                idx === 0 
                  ? "bg-[#333a45] text-white" 
                  : "bg-transparent border border-gray-800 text-gray-400 hover:border-gray-500 hover:text-white"
              }`}
            >
              {cat === "Todos" ? `✓ ${cat}` : cat}
            </button>
          ))}
        </div>

        {/* INFO Y NAVEGACIÓN */}
        <div className="mb-6 flex items-center justify-between">
          <Typography 
            variant="small" 
            className="font-normal opacity-70"
          >
            64 modelos
          </Typography>
          <div className="flex gap-6">
            <button className="opacity-30 hover:opacity-100 transition-opacity">
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button className="opacity-100 hover:text-gray-400 transition-colors">
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CARRUSEL DE TARJETAS CON LINK */}
        <div className="flex gap-4 overflow-x-auto pb-10 scrollbar-hide">
          {MODELS.map((car) => (
            <Link href="/catalogo" key={car.name}> {/* Enlace al catálogo */}
              <Card 
                className="min-w-[260px] bg-[#1c2026] border-0 rounded-xl overflow-hidden cursor-pointer hover:bg-[#252a32] transition-colors group"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
              >
                <CardBody className="p-5" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  <div className="flex justify-between items-start mb-4">
                    <Typography 
                      variant="h6" 
                      color="white" 
                      className="font-semibold"
                    >
                      {car.name}
                    </Typography>
                    {car.electric && (
                      <div className="bg-[#2a2f3a] p-1 rounded">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="my-6 h-32 w-full relative group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill 
                      className="object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between text-gray-500 text-xs mt-4">
                    <span>{car.models}</span>
                    <ChevronRightIcon className="h-4 w-4 rotate-0 opacity-50 group-hover:text-white group-hover:opacity-100 transition-all" />
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>

        {/* ACCIONES FINALES */}
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <Link href="/catalogo">
            <Button 
              variant="outlined" 
              color="white" 
              className="rounded-full px-8 py-3 text-xs normal-case border-gray-700 hover:bg-white/5 w-full md:w-auto"
            >
              Ver modelos
            </Button>
          </Link>
          <Button 
            variant="outlined" 
            color="white" 
            className="rounded-full px-8 py-3 text-xs normal-case border-gray-700 hover:bg-white/5"
          >
            Comparar modelos
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Content;
