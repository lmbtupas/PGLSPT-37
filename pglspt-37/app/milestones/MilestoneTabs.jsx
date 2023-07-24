'use client';

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import data from '@/data/milestonesData.json'
import img1 from '@/public/images/hero_1.jpg'

export default function MilestoneTabs() {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='2xl:w-1/2 lg:w-2/3 mt-12 mx-auto'>
        <Tabs value={activeTab} orientation="vertical">
            <TabsHeader
                className="w-56 rounded-none border-r border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                className: "bg-transparent border-r-2 shadow-none rounded-none",
                }}
            >
                <div className='text-white font-body text-3xl text-right pr-4 pb-4'>MILESTONES</div>
                {data.items.map((item, index) => (
                <Tab
                    key={index}
                    value={index}
                    onClick={() => setActiveTab(index)}
                    className={`font-body text-lg text-right leading-tight justify-end p-2 ${activeTab === index ? "text-yellow" : "text-white"}`}
                >
                    {item.title}
                </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.items.map((item, index) => (
                <TabPanel key={index} value={index} className="h-full text-white">
                    <div className='relative h-full p-6 rounded-lg overflow-hidden'>
                        <div className="w-full h-full absolute top-0 left-0">
                            <Image alt="/" src={img1} fill={true} style={{objectFit: "cover"}} className=''/>   
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
                                <Link href='/' className='self-end mt-auto'>
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
