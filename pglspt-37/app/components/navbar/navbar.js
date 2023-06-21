import Image from 'next/image'

export default function NavBar() {
  return (
    <header> 
        <nav class="flex justify-between items-center mx-auto w-[92%] py-4 px-16 text-white">
            <div>
                <Image
                    src="/images/PIGLAS_LOGO.png"
                    width={100}
                    height={100}
                    alt="PIGLAS Logo"
                    unoptimized
                />
            </div>
            <div class="md:static md:min-h-fit absolute bg-blue min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center text-xl font-body md:gap-[4vw] gap-8">
                    <li>
                        <a href="#"> About </a>
                    </li>
                    <li>
                        <a href="#"> Milestones </a>
                    </li>
                    <li>
                        <a href="#"> Officers </a>
                    </li>
                    <li>
                        <a href="#"> Alumni </a>
                    </li>
                    <li>
                        <a href="#"> Events </a>
                    </li>
                    <li>
                        <a href="#"> Liyab </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="text-xl font-body flex flex-row gap-5">
                    <li>
                        <a href="#"> <Image src="/images/facebook.png" width={40} height={40} alt="facebook" /> </a>    
                    </li>
                    <li>
                        <a href="#"> <Image src="/images/twitter.png" width={40} height={40} alt="twitter" /> </a>
                    </li>
                    <li>
                        <a href="#"> <Image src="/images/instagram.png" width={40} height={40} alt="instragram" /> </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
