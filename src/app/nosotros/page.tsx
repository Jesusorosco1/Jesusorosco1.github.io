"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components"; 

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* SECCIÓN HERO */}
      <section className="relative w-full">
        <div className="relative h-[60vh] w-full bg-[url('/image/nosotrosfondo.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 h-full w-full bg-black/50" />
          <div className="container relative z-10 mx-auto flex h-full items-center justify-center">
            <Typography variant="h1" color="white" className="text-5xl font-bold uppercase tracking-widest text-center">
              Nuestra Historia
            </Typography>
          </div>
        </div>
      </section>

      {/* SECCIÓN BIOGRAFÍA / CORPORATIVA */}
      <section className="bg-white py-20 px-8">
        <div className="container mx-auto max-w-5xl">
          
          {/* Bloque 1: Título Principal y Resumen */}
          <div className="mb-16 text-center">
            <Typography variant="h2" className="mb-6 text-3xl font-bold text-[#007fb2] uppercase">
              JAC MOTORS: POTENCIA Y EFICIENCIA AL SERVICIO DE LA MOVILIDAD
            </Typography>
            <Typography className="text-gray-700 leading-relaxed text-lg">
              Fundada en 1964, JAC Motors se ha consolidado como una de las empresas automotrices más importantes de China. 
              Su compromiso con la innovación y la excelencia se refleja en el desarrollo de motores de alto rendimiento, 
              capaces de ofrecer una experiencia de conducción emocionante y eficiente.
            </Typography>
          </div>

          {/* Bloque 2: Grid de Información con Imagen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Typography variant="h3" className="mb-6 text-2xl font-bold text-[#007fb2] uppercase leading-tight">
                POTENCIA, EFICIENCIA Y COMPROMISO CON VENEZUELA
              </Typography>
              <div className="space-y-4 text-gray-600">
                <Typography>
                  La reconocida marca automotriz JAC Motors, con más de 60 años de trayectoria a nivel mundial, 
                  celebra dos décadas de presencia en Venezuela.
                </Typography>
                <Typography>
                  Auto Partes Lara, C.A. es la empresa representante de JAC MOTORS en Venezuela, constituida con el 
                  propósito de ensamblar, comercializar e importar vehículos terrestres, principalmente de la marca JAC.
                </Typography>
                <Typography>
                  Con una planta de ensamblaje de 75.000 metros cuadrados ubicada en Yaritagua, Estado Yaracuy, 
                  nos distinguimos por realizar el ensamblaje completo de nuestros vehículos.
                </Typography>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-2xl">
              <Image 
                src="/image/fotobiografia.jpg" // Reemplaza con la imagen del directivo/planta
                alt="Directivo JAC Motors"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Bloque 3: Cierre de Biografía */}
          <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-[#007fb2]">
            <Typography className="text-gray-700 italic text-lg">
              "Esta nueva adquisición nos permitirá incrementar significativamente nuestra producción de vehículos, 
              reafirmando nuestro compromiso con el mercado venezolano y fortaleciendo nuestro liderazgo en la industria 
              automotriz del país", manifestó el señor Sergio González, presidente de Corporación BEL y JAC Motors en el país.
            </Typography>
          </div>

        </div>
      </section>
      {/* SECCIÓN DE TARJETAS DE VALORES Y COMPROMISO */}
<section className="bg-gray-50 py-20 px-8">
  <div className="container mx-auto max-w-6xl">
    
    {/* Grid de 3 Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      
      {/* Card 1: Estándares Mundiales */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="mb-4 text-[#007fb2]">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <Typography variant="h5" className="mb-4 text-gray-900 font-bold uppercase text-sm tracking-tighter">
          Con estándares mundiales
        </Typography>
        <Typography className="text-gray-600 text-sm leading-relaxed">
          Siguiendo el estándar de JAC Motors Global y respaldada por la sólida trayectoria de Corporación BEL, la empresa ha logrado ensamblar una gama de modelos adaptados a las necesidades del venezolano, garantizando durabilidad y rendimiento óptimo.
        </Typography>
      </div>

      {/* Card 2: Innovación */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="mb-4 text-[#007fb2]">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <Typography variant="h5" className="mb-4 text-gray-900 font-bold uppercase text-sm tracking-tighter">
          Innovación y compromiso social
        </Typography>
        <Typography className="text-gray-600 text-sm leading-relaxed">
          Pioneros en sistemas de ensamblaje en el país. Su compromiso se evidencia en la creación de planes de financiamiento accesibles, permitiendo a más venezolanos tener un vehículo propio.
        </Typography>
      </div>

      {/* Card 3: Objetivo #1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="mb-4 text-[#007fb2]">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.306 3.5 3.5 0 015.438 0 3.42 3.42 0 001.946 1.306 3.5 3.5 0 012.812 2.812 3.42 3.42 0 001.306 1.946 3.5 3.5 0 010 5.438 3.42 3.42 0 00-1.306 1.946 3.5 3.5 0 01-2.812 2.812 3.42 3.42 0 00-1.946 1.306 3.5 3.5 0 01-5.438 0 3.42 3.42 0 00-1.946-1.306 3.5 3.5 0 01-2.812-2.812 3.42 3.42 0 00-1.306-1.946 3.5 3.5 0 010-5.438 3.42 3.42 0 001.306-1.946 3.5 3.5 0 012.812-2.812z" />
          </svg>
        </div>
        <Typography variant="h5" className="mb-4 text-gray-900 font-bold uppercase text-sm tracking-tighter">
          #1 en Venezuela: Un objetivo claro
        </Typography>
        <Typography className="text-gray-600 text-sm leading-relaxed">
          JAC Motors Venezuela se ha trazado la meta de convertirse en la marca número uno del país, invirtiendo en tecnología de punta y capacitación para ofrecer productos competitivos.
        </Typography>
      </div>
    </div>

    {/* Bloque de Cita Final */}
    <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
      <Typography variant="h4" className="text-gray-800 font-serif italic mb-6 leading-relaxed">
        "Creemos firmemente en el potencial de Venezuela y su gente. Nos hemos comprometido a seguir creciendo, ofreciendo vehículos de calidad y excelente postventa"
      </Typography>
      <Typography className="text-[#007fb2] font-bold uppercase tracking-widest text-sm">
        — Sergio González, Presidente de Corporación BEL y JAC Motors
      </Typography>
    </div>
    
  </div>
</section>

      <Footer />
    </main>
  );
}