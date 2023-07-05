import Background from '@/components/Background';
import MilestoneTabs from "./MilestoneTabs"
import img1 from '@/public/images/hero_1.jpg'


export default function page() {
  return (
    <Background bgImg={img1}>
        <MilestoneTabs/>
    </Background>
  )
}
