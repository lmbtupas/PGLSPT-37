import Background from '@/components/Background';
import MilestoneTabs from "./MilestoneTabs"
import bg from '@/public/images/backgroundImages/milestonesbg.jpg'

export const metadata = {
  title: 'Milestones PIGLASAPAT 37',
  description:
    'The milestones achieved by PIGLASAPAT',
};

export default function page() {
  return (
    <Background bgImg={bg}>
        <MilestoneTabs/>
    </Background>
  )
}
