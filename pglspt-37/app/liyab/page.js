import Background from '@/components/Background';
import bg from '@/public/images/backgroundImages/liyabbg.jpg'
import LiyabCard from './LiyabCard';
import data from '@/data/liyabData.json'
import Image from 'next/image';

export const metadata = {
  title: 'Liyab PIGLASAPAT 37',
  description:
    'The content of the official publication arm of PIGLASAPAT',
};

export default function Liyab() {
  return (
    <Background bgImg={bg}>
      <div className='flex flex-col px-8 header_1 justify-center items-center mt-8 mb-14'>
        <Image
            src="/images/LiyabLogoWhite.png"
            width={500}
            height={500}
            alt="liyab logo"
            priority={true}
            unoptimized
            className="block" 
            style={{ height: '100%'}}
          />
        <div className='subheader_1 text-center mt-3'>
          THE OFFICIAL PIGLASAPAT PUBLICATIONS
        </div>
      </div>

      <div className='font-header text-center text-7xl text-white mb-14'>
        ARCHIVES
      </div>
      <div className='flex flex-row flex-wrap justify-center mx-[2rem] md:mx-[5rem] gap-8 mb-24'>
        {
          data.items.map((item,index)=>(
            <LiyabCard key={index} title={item.title} date={item.date} link={item.link} />
          ))
        }
      </div>
    </Background>
  )
}
