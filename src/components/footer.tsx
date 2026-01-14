"use client";

import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";

const FOOTER_COLUMNS = [
  {
    title: "Modelos",
    links: [
      "SUVs (JS2, JS3, JS4, JS6, JS8)", 
      "Pickups (T6, T8, T8 PRO, T9)", 
      "Eléctricos (E-JS1, E-JS4)", 
      "Vehículos Comerciales", 
      "Línea de Camiones", 
      "Configura tu JAC", 
      "Test Drive", 
      "Catálogos Digitales"
    ],
  },
  {
    title: "Compra y Financiación",
    links: [
      "Planes de Financiación", 
      "Simulador de Crédito", 
      "Venta Corporativa / Flotas", 
      "Bonos de Descuento", 
      "Seguros JAC", 
      "Toma de vehículo usado"
    ],
  },
  {
    title: "Servicio y Postventa",
    links: [
      "Mantenimiento Programado", 
      "Agendar Cita de Taller", 
      "Repuestos Originales", 
      "Garantía JAC (5 años o 150k km)", 
      "Asistencia en Ruta", 
      "Accesorios JAC", 
      "Campañas de Seguridad"
    ],
  },
  {
    title: "Mundo JAC",
    links: [
      "Sobre JAC Motors", 
      "Innovación y Tecnología", 
      "Noticias y Lanzamientos", 
      "Red de Concesionarios", 
      "Sostenibilidad", 
      "JAC Global"
    ],
  },
  {
    title: "Contacto",
    links: [
      "Centro de Atención al Cliente", 
      "WhatsApp de Ventas", 
      "Trabaja con nosotros", 
      "PQRS (Peticiones y Quejas)", 
      "Canal Ético", 
      "Solicitar Cotización"
    ],
  },
];

const SOCIAL_LINKS = [
  "fa-brands fa-facebook-f",
  "fa-brands fa-instagram",
  "fa-brands fa-youtube",
  "fa-brands fa-x-twitter",
  "fa-brands fa-linkedin-in"
];

const LEGAL_LINKS = [
  "Términos y condiciones", 
  "Aviso Legal", 
  "Política de Privacidad y Datos Personales", 
  "Política de Cookies", 
  "Derechos del Consumidor", 
  "Superintendencia de Industria y Comercio", 
  "Mapa del sitio"
];

export function Footer() {
  // Parche para evitar errores de tipos en Vercel
  const fixProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  } as any;

  return (
    <footer className="w-full bg-[#e3e4e4] px-8 pt-20 pb-12 text-gray-900">
      <div className="container mx-auto">
        {/* Botón Volver arriba */}
        <div className="flex justify-end mb-12">
          <button className="flex items-center gap-2 text-xs font-bold uppercase hover:opacity-70">
            Volver arriba
            <i className="fa-solid fa-chevron-up text-[10px]" />
          </button>
        </div>

        {/* Columnas principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <Typography 
                variant="h6" 
                className="mb-6 font-bold text-sm uppercase" 
                {...fixProps}
              >
                {col.title}
              </Typography>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Typography 
                      as="a" 
                      href="#" 
                      className="text-xs font-medium text-gray-700 hover:text-black transition-colors" 
                      {...fixProps}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-end gap-4 mb-10">
          {SOCIAL_LINKS.map((icon, idx) => (
            <IconButton 
              key={idx} 
              variant="text" 
              size="sm" 
              className="bg-gray-300/50 hover:bg-gray-400/50 rounded-full" 
              {...fixProps}
            >
              <i className={`${icon} text-sm text-gray-900`} />
            </IconButton>
          ))}
        </div>

        <hr className="border-gray-400 mb-8" />

        {/* Copyright y Legal */}
        <div className="flex flex-col gap-6">
          <Typography 
            variant="small" 
            className="text-[11px] font-normal text-gray-600" 
            {...fixProps}
          >
            © 2026. JAC VENEZUELA división de venta.
          </Typography>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Typography 
                key={link} 
                as="a" 
                href="#" 
                className="text-[11px] font-bold text-gray-900 hover:underline" 
                {...fixProps}
              >
                {link}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;