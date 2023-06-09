export default function LiyabCard({title, date}) {
    return (
      <div className="flex flex-row items-center justify-between bg-yellow rounded-lg p-3 w-[60rem]">
          <div className="text-black font-header text-2xl">
              {title}
          </div>
          <div className="text-black font-body text-2xl">
              {date}
          </div> 
      </div>
    )
  }
  