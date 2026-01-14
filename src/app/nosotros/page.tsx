"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components"; 

export default function NosotrosPage() {
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
          
          <div className="mb-16 text-center">
            <Typography variant="h2" className="mb-6 text-3xl font-bold text-[#007fb2] uppercase">
              JAC MOTORS: POTENCIA Y EFICIENCIA AL SERVICIO DE LA MOVILIDAD
            </Typography>
            <Typography className="text-gray-700 leading-relaxed text-lg">
              Fundada en 1964, JAC Motors se ha consolidado como una de las empresas automotrices más importantes de China. Su compromiso con la innovación y la excelencia se refleja en el desarrollo de motores de alto rendimiento.
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Typography variant="h3" className="mb-6 text-2xl font-bold text-[#007fb2] uppercase leading-tight">
                POTENCIA, EFICIENCIA Y COMPROMISO CON VENEZUELA
              </Typography>
              <div className="space-y-4 text-gray-600">
                <Typography>
                  La reconocida marca automotriz JAC Motors, con más de 60 años de trayectoria a nivel mundial, celebra dos décadas de presencia en Venezuela.
                </Typography>
                <Typography>
                  Auto Partes Lara, C.A. es la empresa representante de JAC MOTORS en Venezuela, constituida con el propósito de ensamblar y comercializar vehículos terrestres.
                </Typography>
                <Typography>
                  Con una planta de ensamblaje de 75.000 metros cuadrados ubicada en Yaritagua, Estado Yaracuy, realizamos el ensamblaje completo de nuestros vehículos.
                </Typography>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-2xl">
              <Image 
                src="/image/fotobiografia.jpg" 
                alt="Directivo JAC Motors"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Bloque 3: Cierre de Biografía - COMILLAS ESCAPADAS */}
          <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-[#007fb2]">
            <Typography className="text-gray-700 italic text-lg">
              &quot;Esta nueva adquisición nos permitirá incrementar significativamente nuestra producción de vehículos, reafirmando nuestro compromiso con el mercado venezolano&quot;, manifestó el señor Sergio González.
            </Typography>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE TARJETAS DE VALORES */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Typography variant="h5" className="mb-4 text-gray-900 font-bold uppercase text-sm tracking-tighter">
                Con estándares mundiales
              </Typography>
              <Typography className="text-gray-600 text-sm leading-relaxed">
                Siguiendo el estándar de JAC Motors Global y respaldada por Corporación BEL.
              </Typography>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Typography variant="h5" className="mb-4 text-gray-900 font-bold uppercase text-sm tracking-tighter">
                Innovación y compromiso social
              </Typography>
              <Typography className="text-gray-600 text-sm leading-relaxed">
                Pioneros en sistemas de ensamblaje en el país.
              </Typography>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Typography variant="h5" className="mb-4 text-gray-900 font-bold uppercase text-sm tracking-tighter">
                #1 en Venezuela: Un objetivo claro
              </Typography>
              <Typography className="text-gray-600 text-sm leading-relaxed">
                Invertimos en tecnología de punta para ofrecer productos competitivos.
              </Typography>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
            <Typography variant="h4" className="text-gray-800 font-serif italic mb-6 leading-relaxed">
              &quot;Creemos firmemente en el potencial de Venezuela y su gente. Nos hemos comprometido a seguir creciendo&quot;
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