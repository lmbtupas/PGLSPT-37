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
    <div className='w-full p-5 lg:w-3/4 pt-10 mx-auto'>
        <Tabs value={activeTab} orientation={matches ? "vertical" : "horizontal"}>
            <TabsHeader
                className="md:w-56 h-full overflow-x-auto rounded-none sm:border-r border-blue-gray-50 bg-transparent p-0 flex flex-row sm:flex-col"
                indicatorProps={{
                className: "bg-transparent sm:border-r-2 shadow-none rounded-none",
                }}
            >
                { matches && <div className='text-yellow font-bold text-2xl md:text-3xl text-right pr-4 pb-4'>MILESTONES</div>}
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
                    <div className='h-full rounded-lg overflow-hidden'>
                        <div className="h-56 w-full relative">
                            <Image alt="/" src={item.img} fill={true} className='object-cover object-bottom'/>   
                        </div>
                        <div className=''>
                            <div className='text-center subheader_1 pt-2'>
                                {item.title}
                            </div>
                            <div className='text-center body_text mb-4'>
                                {item.date}
                            </div>
                            <div className='body_text'>
                                {item.text}
                            </div>
                            <Link href={item.link} className='mt-auto flex justify-end' rel="noopener noreferrer" target="_blank">
                                <Image
                                    loading="lazy"
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
