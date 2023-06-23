import MilestoneTabs from "./MilestoneTabs"


export default function page() {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom_img">
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#000F34]/80 z-[2]'/>
            <div className='flex flex-col z-[2] justify-center items-center gap-4'>
                <MilestoneTabs/>
            </div>
        </div>
  )
}
