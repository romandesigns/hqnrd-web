import clsx from 'clsx'

export function TeamCard({ className }: { className?: string }) {
  return (
    <li
      className={clsx(
        `rounded-md bg-secondary flex items-center justify-center flex-col`,
        className,
      )}
    >
      <div className='p-1 w-full h-full'>
        <div className='bg-green-200 aspect-square rounded-md w-full h-full block' />
      </div>
      <div className='flex items-start p-2 justify-center flex-col w-full pt-1'>
        <h3 className='text-foreground font-semibold'>Roman</h3>
        <p className='text-muted-foreground text-xs'>Receptionist</p>
      </div>
    </li>
  )
}
