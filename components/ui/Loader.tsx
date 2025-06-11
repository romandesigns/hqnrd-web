import React from 'react'
import clsx from 'clsx'

export default function Loader({ className }: { className?: string }) {
  return (
    <div className={clsx('relative w-24 h-24', className)}>
      <div className='absolute w-8 h-8 bg-primary animate-square'></div>
    </div>
  )
}
