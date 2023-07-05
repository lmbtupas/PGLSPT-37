import Background from '@/components/Background';
import Button from './Button'
import Image from "next/image";
import img1 from '@/public/images/hero_1.jpg'

export default function page() {
  return (
    <Background bgImg={img1}>
      <div className='header_1 text-center mt-12 mb-24'>
            OFFICERS
      </div>
      <div className='w-full flex flex-row h-[50vh]'>
        <div className='relative w-1/2'>
          <Image alt="/" src={img1} fill={true} style={{objectFit: "cover"}}/>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2 bg-blue'>
          <div className='text-yellow font-header text-5xl mb-9'>EXECUTIVE BOARD</div>
          <Button variant="white" href="/officers/executive-board"/>
        </div>
      </div>
      <div className='w-full flex flex-row h-[50vh]'>
        <div className='flex flex-col justify-center items-center w-1/2 bg-white'>
            <div className='text-blue font-header text-center text-5xl mb-9'>DEPUTIES &<br/>DEPARMENTS</div>
            <Button variant="yellow" href="/officers/deputies-departments"/>
        </div>
        <div className='relative w-1/2'>
          <Image alt="/" src={img1} fill={true} style={{objectFit: "cover"}}/>
        </div>
      </div>
      <div className='w-full flex flex-row h-[50vh]'>
        <div className='relative w-1/2'>
          <Image alt="/" src={img1} fill={true} style={{objectFit: "cover"}}/>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2 bg-yellow'>
          <div className='text-black font-header text-center text-5xl mb-9'>BATCH COUNCILS &<br/>CLUSTER CONSULS</div>
          <Button variant="blue" href="/officers/batch-councils-cluster-consuls"/>
        </div>
      </div>
    </Background>
    
  )
}
