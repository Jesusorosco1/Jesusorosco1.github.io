"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { 
  Bars3Icon, 
  XMarkIcon, 
  MagnifyingGlassIcon, 
  HeartIcon, 
  UserIcon 
} from "@heroicons/react/24/outline";

// 1. Definimos el menú con sus rutas correspondientes
const NAV_MENU = [
  { name: "Modelos", href: "/catalogo" },
  { name: "Compra", href: "/catalogo" },
  { name: "Electromovilidad", href: "/catalogo" },
  { name: "Servicios y accesorios", href: "/servicio" },
  { name: "Mundo JAC", href: "/nosotros" }
];

// 2. Actualizamos NavItem para usar Link de Next.js
function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link href={href}>
        <Typography
          as="span" // Usamos "span" para que el Link sea el que maneje el clic
          variant="small"
          className="font-medium transition-colors hover:text-gray-400 cursor-pointer"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {label}
        </Typography>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color="black"
      className={`fixed top-0 z-50 border-0 transition-all ${
        isScrolling ? "bg-black/90 py-2" : "bg-black py-4"
      }`}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between text-white">
        
        {/* LOGO con Link a Home */}
        <Link href="/" className="cursor-pointer">
          <img 
            src="/image/logoJac2.jpg" 
            alt="logo" 
            className="w-32 hover:opacity-80 transition-opacity" 
          />
        </Link>

        {/* MENÚ CENTRAL (Desktop) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((item) => (
            <NavItem key={item.name} label={item.name} href={item.href} />
          ))}
        </ul>

        {/* ICONOS DERECHA (Desktop) */}
        <div className="hidden items-center gap-5 lg:flex">
          <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer hover:text-gray-400" />
          <HeartIcon className="h-5 w-5 cursor-pointer hover:text-gray-400" />
          <UserIcon className="h-5 w-5 cursor-pointer hover:text-gray-400" />
        </div>

        {/* BOTÓN MÓVIL */}
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* MENÚ DESPLEGABLE (Móvil) */}
      <Collapse open={open}>
        <div className="container mx-auto mt-4 border-t border-gray-800 px-4 pt-4 text-white lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((item) => (
              <NavItem key={item.name} label={item.name} href={item.href} />
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-6 pb-4">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <HeartIcon className="h-6 w-6" />
            <UserIcon className="h-6 w-6" />
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;