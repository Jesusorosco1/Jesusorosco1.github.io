"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

interface SimpleContentCard {
  title: string;
  subtitle: string;
  name: string;
  icon: React.ElementType;
}

export function SimpleBlogCard({
  title,
  subtitle,
  name,
  icon: Icon,
}: SimpleContentCard) {
  // Parche para evitar errores de tipos en Vercel
  const fixProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  } as any;

  return (
    <div className="pb-10">
      <div className="flex items-center mb-3 gap-2">
        <Icon className="h-5 w-5 text-gray-900" />
        <Typography 
          className="w-full" 
          variant="h6"
          {...fixProps}
        >
          {title}
        </Typography>
      </div>
      <Typography 
        className="!text-base w-7/12 md:w-full mb-3 font-normal !text-gray-700"
        {...fixProps}
      >
        {subtitle}
      </Typography>
      <Typography 
        className="!text-xs font-normal !text-gray-500"
        {...fixProps}
      >
        {name}
      </Typography>
    </div>
  );
}

export default SimpleBlogCard;