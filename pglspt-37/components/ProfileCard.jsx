import Image from "next/image";

export default function ProfileCard({name,position,img}) {
  return (
    <div className="flex flex-col w-52 items-center text-center">
        <div className="overflow-hidden relative h-52 w-52 mb-4 rounded-lg">
            <Image  alt="/" src={img} fill={true} style={{objectFit: "cover"}}/>
        </div>
        <div className="body_text">
            {name}
        </div>
        <div className="body_text">
            {position}
        </div>
    </div>
  )
}
