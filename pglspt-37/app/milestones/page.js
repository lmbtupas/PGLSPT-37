import Background from '@/components/Background';
import MilestoneTabs from "./MilestoneTabs"
import bg from '@/public/images/backgroundImages/milestonesbg.jpg'


export default function page() {
  return (
    <Background bgImg={bg}>
        <MilestoneTabs/>
    </Background>
  )
}
