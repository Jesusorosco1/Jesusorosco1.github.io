"use client";

import React from "react";
import Image from "next/image";
import { Button, Typography, Textarea } from "@material-tailwind/react";

export function NewComment() {
  // Parche para evitar errores de tipos en Vercel
  const fixProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  } as any;

  return (
    <div>
      <div className="flex !items-center gap-4">
        <div className=" !m-0 h-full  w-full  max-h-[40px] max-w-[40px] ">
          <Image
            width={768}
            height={768}
            src="/image/avatar1.jpg"
            alt="img"
            className="h-full rounded w-full object-cover object-center"
          />
        </div>
        <Typography
          variant="small"
          className=" font-bold flex items-center gap-2 !text-gray-900"
          {...fixProps}
        >
          Tina Andrew
        </Typography>
      </div>
      <div className="flex-col mt-4 pl-14 h-full">
        <form action="#" className="flex flex-col items-end">
          <Textarea
            label="Your Message"
            variant="static"
            placeholder="Write a nice reply or go home..."
            {...fixProps}
          />
          <Button 
            color="gray" 
            className="mt-4" 
            size="md"
            {...fixProps}
          >
            Post Comment
          </Button>
        </form>
      </div>
    </div>
  );
}

export default NewComment;