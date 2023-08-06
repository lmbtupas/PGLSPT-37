import Image from "next/image";

export default function ProfileCard({name,position,img}) {
  return (
    <div className="flex flex-col w-52 items-center text-center">
        <div className="overflow-hidden relative h-52 w-52 mb-4 rounded-lg">
            <Image  alt={name} src={img} fill draggable={false} placeholder="blur" style={{objectFit: "cover"}}/>
        </div>
        <div className="leading-none text-yellow font-body text-lg md:text-xl mb-2">
          <p>{name}</p>
        </div>
        <div className="leading-none text-white font-body text-sm md:text-base">
          <p>{position}</p>
        </div>
    </div>
  )
}
