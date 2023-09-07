import Image from "next/image";
import img1 from '@/public/images/hero_1.jpg'


export default function Background({children, bgImg}) {
  return (
    <div className="flex items-start justify-center relative h-full pt-6 overflow-hidden">
        {/* Overlay */}
        <div className="w-full h-screen fixed top-0 left-0">
            <Image alt="/" src={bgImg} fill={true} style={{objectFit: "cover"}} className=''/>   
        </div>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#000F34]/80' />
        <div className='pt-32 flex flex-col w-full z-[2]'>
            {children}
        </div>
    </div>
  )
}
