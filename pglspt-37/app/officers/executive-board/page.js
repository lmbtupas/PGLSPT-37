import Background from '@/components/Background';
import ProfileCard from '@/components/ProfileCard';
import {executiveBoardData} from '@/data/executiveBoardData.js'
import bg from '@/public/images/officersPage/exec.jpg'

export const metadata = {
  title: 'Executive Board PIGLASAPAT 37',
  description:
    'The executive board of PIGLASAPAT 37',
};

export default function page() {
  return (
    <Background bgImg={bg}>
      <div className='header_2 text-center mt-12 mb-24 px-12 lg:px-20'>
        EXECUTIVE BOARD
      </div>
      <div className='flex flex-row flex-wrap justify-center mb-16 gap-14 mx-28 xl:mx-52'>
        {
          executiveBoardData.map((item,index)=>(
            <ProfileCard key={index} name={item.name} position={item.position} img={item.img}/>
          ))
        }
      </div>
    </Background>
  )
}
