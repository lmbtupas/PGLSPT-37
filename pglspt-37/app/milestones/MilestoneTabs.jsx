'use client';

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import data from '../../data/milestonesData.json'

export default function MilestoneTabs() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
  return (
    <div className='flex felx-row w-full'>
        <TabContext value={value}>
        <div>
            <TabList
            orientation='vertical'
            onChange={handleChange}
            aria-label='Tabs example'
            textColor='secondary'
            indicatorColor='secondary'
            // centered
            // variant='scrollable'
            scrollButtons='auto'
            sx={{ borderRight: 1, borderColor: 'divider', width: '12rem' }}
            >
            {
                data.items.map((item, index) => (
                    <Tab value = {index} label = {item.title} sx={{alignItems: 'end', textAlign: 'right'}}/>
                ))
            }
            </TabList>
        </div>
        <div>
            {data.items.map((item, index) => {
                return (
                <TabPanel value={index}>
                    {item.text}
                </TabPanel>
                );
            })}
        </div>
        </TabContext>
    </div>
  )
}
