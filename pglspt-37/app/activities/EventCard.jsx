export default function EventCard({title, date}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg p-3 w-[60rem]">
        <div className="text-blue font-header text-2xl text-center">
            {title}
        </div>
        <div className="text-blue font-body text-2xl">
            {date}
        </div> 
    </div>
  )
}
