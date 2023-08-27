'use client'

import { Carousel, Typography } from "@material-tailwind/react";
import Image from "next/image";
 
export default function Slider() {
  return (
    <div className="w-fit h-auto">
        <Carousel className="">
        {/* Slide 1*/}
        <div className="relative h-[550px] w-fit overflow-y-hidden">
            <Image
                src="/images/carousel_1.jpg"
                alt="image 1"
                width={1660}
                height={550}
                style={{objectFit:"cover"}}
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-[#172554]/50">
            <div className="w-3/4 text-center md:w-2/4">
                <Typography
                variant="h1"
                className="text-3xl md:text-4xl lg:text-6xl font-header text-yellow"
                >
                People
                </Typography>
                <Typography
                color="white"
                className="font-body text-md md:text-2xl text-justify"
                >
                We hone our members to be people equipped with various 
                capacities and potentials who will remain in mission 
                to serve the Ateneo and the nation.
                </Typography>
            </div>
            </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[550px] w-full overflow-y-hidden">
            <Image
                src="/images/carousel2.jpg"
                alt="image 2"
                width={1660}
                height={550}
                style={{objectFit:"cover"}}
                // className="blur"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-[#172554]/50">
            <div className="w-3/4 text-center md:w-2/4">
            <Typography
                variant="h1"
                className="text-3xl md:text-4xl lg:text-6xl font-header text-yellow"
                >
                Passion
            </Typography>
            <Typography
                color="white"
                className="font-body text-md md:text-2xl text-justify"
                >
                We keep the fire of our reimagined aspirations 
                burning from a selfless place of love for the country and for the community.
            </Typography>
            </div>
            </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[550px] w-full overflow-y-hidden">
            <Image
                src="/images/carousel_3.jpg"
                alt="image 3"
                width={1660}
                height={550}
                style={{objectFit:"cover"}}
                // className="blur"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-[#172554]/50">
            <div className="w-3/4 text-center md:w-2/4">
            <Typography
                variant="h1"
                className="text-3xl md:text-4xl lg:text-6xl font-header text-yellow"
                >
                Principles
                </Typography>
                <Typography
                color="white"
                className="font-body text-md md:text-2xl text-justify"
                >
                We ground ourselves on our core principles of active non-violence, 
                authentic Christian humanism, liberating faith, 
                pro-people democracy, and faith that does justice.
                </Typography>
            </div>
            </div>
        </div>
        </Carousel>
    </div>
  );
}