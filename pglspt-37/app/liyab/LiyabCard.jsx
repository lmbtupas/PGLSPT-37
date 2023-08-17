import Link from 'next/link';

export default function LiyabCard({title, date, link}) {
    return (
        <Link href={link} rel="noopener noreferrer" target="_blank" className="flex flex-col md:flex-row items-center justify-between bg-yellow rounded-lg p-3 w-[70rem] text-center md:text-left">
            <div className="text-black font-header text-2xl">
                {title}
            </div>
            <div className="text-black font-body text-2xl">
                {date}
            </div>
        </Link> 
    )
  }
  