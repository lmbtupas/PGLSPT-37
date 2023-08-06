import Background from '@/components/Background';
import Button from './Button'
import Image from "next/image";
import bg from '@/public/images/backgroundImages/officersbg.jpg'
import batch from '@/public/images/officersPage/batch.jpg'
import deps from '@/public/images/officersPage/deps.jpg'
import exec from '@/public/images/officersPage/exec.jpg'

export default function page() {
  return (
    <Background bgImg={bg}>
      <div className='header_1 text-center mt-12 mb-24'>
            <h1>OFFICERS</h1>
      </div>
      <div className='w-full flex flex-col lg:flex-row h-[40rem] lg:h-[50vh]'>
        <div className='relative h-1/2 lg:h-full w-full lg:w-1/2'>
          <Image alt="/" src={exec} fill draggable={false} placeholder="blur" style={{objectFit: "cover"}}/>
        </div>
        <div className='flex flex-col justify-center items-center px-14 h-1/2 lg:h-full lg:w-1/2 bg-blue'>
          <div className='text-yellow font-header text-center mb-9 text-4xl xl:text-5xl'>
            <h4>EXECUTIVE BOARD</h4>
          </div>
          <Button variant="white" href="/officers/executive-board"/>
        </div>
      </div>
      <div className='w-full flex flex-col-reverse lg:flex-row h-[40rem] lg:h-[50vh]'>
        <div className='flex flex-col justify-center items-center px-14 h-1/2 lg:h-full lg:w-1/2 bg-white'>
            <div className='text-blue font-header text-center mb-9 text-4xl xl:text-5xl'>
              <h4>DEPUTIES & DEPARMENTS</h4>
            </div>
            <Button variant="yellow" href="/officers/deputies-departments"/>
        </div>
        <div className='relative h-1/2 lg:h-full w-full lg:w-1/2'>
          <Image alt="/" src={deps} fill draggable={false} placeholder="blur" style={{objectFit: "cover"}}/>
        </div>
      </div>
      <div className='w-full flex flex-col lg:flex-row h-[40rem] lg:h-[50vh]'>
        <div className='relative h-1/2 lg:h-full w-full lg:w-1/2'>
          <Image alt="/" src={batch} fill draggable={false} placeholder="blur" style={{objectFit: "cover"}}/>
        </div>
        <div className='flex flex-col justify-center items-center px-14 h-1/2 lg:h-full lg:w-1/2 bg-yellow'>
          <div className='text-black font-header text-center mb-9 text-4xl xl:text-5xl'>
            <h4>BATCH COUNCILS & CLUSTER CONSULS</h4>
          </div>
          <Button variant="blue" href="/officers/batch-councils-cluster-consuls"/>
        </div>
      </div>
    </Background>
    
  )
}
