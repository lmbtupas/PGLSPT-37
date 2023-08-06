'use client';

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { milestonesData } from '@/data/milestonesData.js'

export default function MilestoneTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [matches, setMatches] = useState(true);

    useEffect(() => {
        const query = "(min-width: 540px)";
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {setMatches(media.matches);}
        window.addEventListener('resize', listener);
        return () => {
            window.removeEventListener('resize', listener);
        }
    }, [matches]);

  return (
    <div className='w-full p-5 lg:w-2/3 2xl:w-1/2 pt-10 mx-auto'>
        <Tabs value={activeTab} orientation={matches ? "vertical" : "horizontal"}>
            <TabsHeader
                className="md:w-56 h-full overflow-x-auto rounded-none sm:border-r border-blue-gray-50 bg-transparent p-0 flex flex-row sm:flex-col"
                indicatorProps={{
                className: "bg-transparent sm:border-r-2 shadow-none rounded-none",
                }}
            >
                { matches && <div className='text-white font-body text-2xl md:text-3xl text-right pr-4 pb-4'>MILESTONES</div>}
                {milestonesData.map((item, index) => (
                <Tab
                    key={index}
                    value={index}
                    onClick={() => setActiveTab(index)}
                    className={`font-body h-auto sm:w-full text-md md:text-lg sm:text-right leading-tight sm:justify-end p-2 ${activeTab === index ? "text-yellow" : "text-white"}`}
                >
                    <p>{item.title}</p>
                </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {milestonesData.map((item, index) => (
                <TabPanel key={index} value={index} className="h-full text-white px-0 sm:px-6">
                    <div className='relative h-full p-6 rounded-lg overflow-hidden'>
                        <div className="w-full h-full absolute top-0 left-0">
                            <Image alt="/" src={item.img} fill={true} style={{objectFit: "cover"}} className=''/>   
                            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#000F34]/50 backdrop-blur-sm' />
                        </div>
                        <div className='flex flex-col relative h-full'>
                            <div className='text-center subheader_1'>
                                {item.title}
                            </div>
                            <div className='text-center body_text mb-4'>
                                {item.date}
                            </div>
                            <div className='body_text'>
                                {item.text}
                            </div>
                                <Link href={item.link} className='self-end mt-auto'>
                                    <Image
                                        src="/images/arrow_button.png"
                                        width={35}
                                        height={35}
                                        alt="arrow button"
                                    />
                                </Link>
                        </div>
                    </div>
                </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    </div>
  )
}
