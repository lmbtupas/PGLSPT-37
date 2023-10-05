"use client"

import { Carousel, Typography } from "@material-tailwind/react";
 
export default function Thumbnail() {
  return (
      <div className="relative h-full w-full md:w-[940px]">
        <img
          src="/images/Thumbnail.png"
          alt="image 1"
          className="h-full w-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
            <a href="https://www.youtube.com/watch?v=357sQbLQFTQ " rel="noopener noreferrer" target="_blank">
                <img
                    src="/images/play.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
            </a>
        </div>
      </div>
  );
}
