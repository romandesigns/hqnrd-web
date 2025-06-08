import { FaAirbnb, FaHotel } from '@/components/icons'

export function Others({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h3 className='uppercase text-xs font-bold'>Others</h3>
      <ul className='space-y-6 py-4 text-xs md:py-10 md:text-[0.90rem] text-muted-foreground [&>li]:hover:text-foreground cursor-pointer'>
        <li className='flex items-center justify-start gap-2'>
          <span className='icon-highlight'>
            <FaAirbnb />
          </span>
          <span>Hotel Quinto Nivel RD - AirB&B</span>
        </li>
        <li className='flex items-center justify-start gap-2'>
          <span className='icon-highlight'>
            <FaHotel size={15} />
          </span>
          <span>Hotel Quinto Nivel RD - Expedia</span>
        </li>
      </ul>
    </div>
  )
}
