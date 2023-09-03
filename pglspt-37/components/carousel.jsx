"use client"

import { Carousel, Typography } from "@material-tailwind/react";
 
export default function Slider() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full md:h-[540px] w-full">
        <img
          src="/images/carousel_1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              className="text-3xl md:text-4xl lg:text-5xl text-yellow"
            >
              People
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="text-lg md:text-2xl"
            >
              We hone our members to be people equipped with various capacities and potentials who will remain in mission to serve the Ateneo and the nation.
            </Typography>
            <div className="flex justify-center gap-2">
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full md:h-[540px] w-full">
        <img
          src="/images/carousel2.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-yellow"
            >
              Passion
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="text-lg md:text-2xl"
            >
                We keep the fire of our reimagined aspirations burning from a selfless place of love for the country and for the community.
            </Typography>
            <div className="flex justify-center gap-2">
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full md:h-[540px] w-full">
        <img
          src="/images/carousel_3.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-yellow"
            >
              Principles
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="text-lg md:text-2xl"
            >
                We ground ourselves on our core principles of active non-violence, authentic Christian humanism, liberating faith, pro-people democracy, and faith that does justice.
            </Typography>
            <div className="flex justify-center gap-2">
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}