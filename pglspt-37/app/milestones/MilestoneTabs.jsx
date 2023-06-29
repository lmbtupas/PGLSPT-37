'use client';

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import data from '../../data/milestonesData.json'
import img from '@/public/images/hero_1.jpg'

export default function MilestoneTabs() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
  return (
    <div className='flex felx-row w-full'>
        <TabContext value={value}>
        <div className='my-auto'>
            <TabList
            orientation='vertical'
            onChange={handleChange}
            aria-label='Tabs example'
            // textColor='#FFC705'
            TabIndicatorProps={{sx: {backgroundColor: 'white'}}}
            // centered
            // variant='scrollable'
            scrollButtons='auto'
            sx={{ borderRight: 1, borderColor: 'white', width: '14rem',"& button.Mui-selected": { color: '#FFC705',}}}
            >
                <div className='text-white font-body text-3xl text-right pr-4 pb-4'>MILESTONES</div>
            {
                data.items.map((item, index) => (
                    <Tab 
                        value = {index} 
                        key = {index} 
                        label = {item.title} 
                        sx={{alignItems: 'end', textAlign: 'right', color: 'white', padding: '0 1rem', height: '2.5rem', minHeight: '2.5rem'}}/>
                ))
            }
            </TabList>
        </div>
        <div>
            {data.items.map((item, index) => {
                return (
                <TabPanel value={index} key = {index} sx={{height: '100%', color: 'white'}}>
                    <div className='relative h-full p-6 rounded-lg'>
                    <div className="w-full h-full absolute top-0 left-0 rounded-lg">
                        <Image src={img} fill={true} style={{objectFit: "cover"}} className='rounded-lg'/>   
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#000F34]/50 backdrop-blur-sm rounded-lg' />
                    </div>
                    <div className='flex flex-col relative h-full'>
                        <div className='text-center subheader_1'>
                            {item.title}
                        </div>
                        <div className='text-center mb-4'>
                            {item.date}
                        </div>
                        <div>
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
                );
            })}
        </div>
        </TabContext>
    </div>
  )
}
