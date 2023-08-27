import Link from 'next/link';

export default function LiyabCard({title, date, link}) {
    return (
        <Link href={link} rel="noopener noreferrer" target="_blank" className="transition ease-in-out flex flex-col md:flex-row items-center justify-between bg-yellow rounded-lg p-3 w-[70rem] text-center md:text-left hover:bg-blue hover:text-white">
            <div className="font-header text-2xl">
                {title}
            </div>
            <div className="font-body text-2xl">
                {date}
            </div>
        </Link> 
    )
  }
  