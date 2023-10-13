export default function Button({variant, href}) {
  return (
    <a 
        href={href} 
        className={`px-5 py-2 rounded-lg font-header text-xl ${variant=='blue' && 'text-white bg-blue'} ${variant=='white' && 'text-blue bg-white'} ${variant=='yellow' && 'text-blue bg-yellow'}`}
    >
        Learn More
    </a>
  )
}
