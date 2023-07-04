
export default function Background({children}) {
  return (
    <div className="flex items-start justify-center relative h-screen overflow-y-scroll bg-fixed bg-center bg-cover bg-[url('../public/images/hero_1.jpg')]">
        {/* Overlay */}
        <div className='absolute w-full h-screen bg-[#000F34]/80 z-[2]'/>
        <div className='mt-32 flex flex-col w-full z-[2]'>
            {children}
        </div>
    </div>
  )
}
