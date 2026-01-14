"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components"; 

export default function CatalogoPage() {
  // Parche para evitar errores de tipos en Vercel
  const fixProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  } as any;

  // Estado para controlar la navegación numérica
  const [activeTab, setActiveTab] = useState(0);

  const colors = [
    { id: "white", hex: "bg-white", img: "/image/jaccolorblanco.png", name: "Blanco Ártico" },
    { id: "silver", hex: "bg-gray-300", img: "/image/jaccolorgris.png", name: "Plata Estelar" },
    { id: "black", hex: "bg-black", img: "/image/jacnegro.png", name: "Negro Profundo" },
    { id: "red", hex: "bg-red-600", img: "/image/jaccolorrojo.png", name: "Rojo Racing" },
  ];
  
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const FEATURES_DATA = [
    {
      id: 1,
      title: "Diseño Aerodinámico",
      description: "Las líneas fluidas del nuevo Arena Sport no solo cautivan la mirada, sino que optimizan el flujo de aire para una eficiencia superior y una estabilidad inigualable en carretera.",
      image: "/image/jacrojo8.webp",
    },
    {
      id: 2,
      title: "Iluminación dinámica",
      description: "Los faros LED con tecnología de secuenciación dinámica iluminan el camino con la máxima precisión. El nuevo diseño enfatiza el carácter deportivo con un estilo más afilado.",
      image: "/image/jacrojo3.webp",
    },
    {
      id: 3,
      title: "La verdadera belleza esta en el interior",
      description: "Enamórate de un interior con los mejores materiales y unos acabados del máximo nivel. Y gracias al paquete de iluminación ambiente2 crea una atmosfera especial según tus deseos.",
      image: "/image/jacrojo4.webp",
    },
    {
      id: 4,
      title: "Tecnología Inteligente",
      description: "Pantalla táctil de alta definición con integración completa para smartphones, permitiéndote controlar cada aspecto de tu viaje con un solo toque.",
      image: "/image/jacrojo6.webp",
    },
    {
      id: 5,
      title: "Tecnología Inteligente",
      description: "Pantalla táctil de alta definición con integración completa para smartphones, permitiéndote controlar cada aspecto de tu viaje con un solo toque.",
      image: "/image/jacrojo7.webp",
    },
    {
      id: 6,
      title: "Mejoras visuales",
      description: "Pantalla táctil de alta definición con integración completa para smartphones, permitiéndote controlar cada aspecto de tu viaje con un solo toque.",
      image: "/image/jacrojo9.webp",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* SECCIÓN HERO / BANNER PRINCIPAL */}
      <section className="relative w-full">
        <div className="relative h-[calc(100vh-80px)] w-full bg-[url('/image/carrocatalogo1.png')] bg-cover bg-center bg-no-repeat">
          {/* Overlay oscuro */}
          <div className="absolute inset-0 h-full w-full bg-black/30" />
          
          <div className="container relative z-10 mx-auto flex h-full items-center justify-start px-8">
            <div className="max-w-xl text-left">
              <Typography
                variant="h1"
                color="white"
                className="mb-2 text-5xl font-bold tracking-tight md:text-7xl uppercase"
                {...fixProps}
              >
                Nuevo Arena Sport
              </Typography>
    
              <Typography
                variant="lead"
                color="white"
                className="mb-10 text-xl opacity-90 font-light"
                {...fixProps}
              >
                Dinamismo sin límites.
              </Typography>
    
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-3 text-xs font-bold normal-case hover:bg-white hover:text-black transition-all"
                  {...fixProps}
                >
                  Automático
                </Button>
                <Button
                  size="lg"
                  className="rounded-full bg-black px-8 py-3 text-xs font-bold normal-case hover:bg-gray-900 transition-all"
                  {...fixProps}
                >
                  Eléctrico
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CARACTERÍSTICAS DINÁMICAS */}
      <section className="bg-[#0f1114] py-24 px-8">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Columna Izquierda: Texto y Navegación */}
          <div className="max-w-md">
            {/* Navegación Numérica */}
            <div className="mb-8 flex items-center gap-4 text-gray-500">
              <button 
                onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                className="hover:text-white transition-colors"
              >
                {"<"}
              </button>
              
              {FEATURES_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-sm font-medium transition-all ${
                    activeTab === index ? "text-white border-b-2 border-white" : "hover:text-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button 
                onClick={() => setActiveTab(prev => Math.min(FEATURES_DATA.length - 1, prev + 1))}
                className="hover:text-white transition-colors"
              >
                {">"}
              </button>
            </div>

            {/* Texto Dinámico */}
            <div className="min-h-[200px]">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 text-3xl font-semibold"
                {...fixProps}
              >
                {FEATURES_DATA[activeTab].title}
              </Typography>
              <Typography 
                className="font-normal text-gray-400 leading-relaxed"
                {...fixProps}
              >
                {FEATURES_DATA[activeTab].description}
              </Typography>
            </div>
          </div>

          {/* Columna Derecha: Imagen con Bordes Redondeados */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-3xl lg:h-[500px]">
            <Image
              src={FEATURES_DATA[activeTab].image}
              alt={FEATURES_DATA[activeTab].title}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN DE COLOR */}
      <section className="bg-black py-24 px-8">
      <div className="container mx-auto text-center">
        <Typography
          variant="h2"
          className="mb-4 text-3xl font-bold uppercase tracking-widest text-[#00f2ff]"
          {...fixProps}
        >
          ¿Cuál color prefieres?
        </Typography>
        
        <Typography 
          className="mb-12 text-gray-400 font-light"
          {...fixProps}
        >
          Personaliza tu nuevo <span className="text-white font-medium">Arena Sport</span>
        </Typography>

        <div className="relative mx-auto mb-16 h-[300px] w-full max-w-4xl md:h-[500px]">
          <Image
            src={selectedColor.img}
            alt={`JAC Arena Sport ${selectedColor.name}`}
            fill
            className="object-contain transition-all duration-700 ease-in-out"
            priority
          />
        </div>

        <div className="flex justify-center gap-6">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color)}
              className={`group relative h-10 w-10 rounded-full border-2 transition-all duration-300 ${
                selectedColor.id === color.id 
                ? "border-[#00f2ff] scale-125 shadow-[0_0_15px_rgba(0,242,255,0.5)]" 
                : "border-gray-700 hover:border-gray-400"
              }`}
              title={color.name}
            >
              <span 
                className={`absolute inset-1 rounded-full ${color.hex} shadow-inner`}
              />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>

      <Footer />
    </main>
  );
}