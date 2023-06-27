import MilestoneTabs from "./MilestoneTabs"


export default function page() {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover">
            {/* Overlay */}
            {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#000F34]/80 z-[2]'/> */}
            <div className='mt-8 flex flex-col w-6/12 z-[2]'>
                <MilestoneTabs/>
            </div>
        </div>
  )
}
