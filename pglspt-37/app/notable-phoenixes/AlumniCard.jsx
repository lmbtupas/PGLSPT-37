import Image from "next/image";

export default function AlumniCard({name,position,img}) {
  return (
    <div className="flex flex-row w-[32rem] items-center">
        <div className="overflow-hidden relative h-40 w-40 mr-4 rounded-lg">
            <Image  alt="/" src={img} fill={true} style={{objectFit: "cover"}}/>
        </div>
        <div className="text-left w-80">
            <div className="text-yellow font-body text-2xl mb-2">
                {name}
            </div>
            <div className="leading-tight text-white font-body text-lg whitespace-pre-line">
                {position}
            </div>
        </div>        
    </div>
  )
}
