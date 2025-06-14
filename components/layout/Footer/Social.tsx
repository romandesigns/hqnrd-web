import { FaFacebookSquare, TiSocialInstagram } from '@/components/icons'

export function Social() {
  return (
    <div>
      <h3 className='uppercase text-xs font-bold'>Social</h3>
      <ul className='space-y-6 py-4 text-xs md:py-10 md:text-[0.90rem] text-muted-foreground [&>li]:hover:text-foreground cursor-pointer'>
        <li className='flex items-center justify-start gap-2'>
          <span className='icon-highlight'>
            <FaFacebookSquare />
          </span>
          <span>Facebook</span>
        </li>
        <li className='flex items-center justify-start gap-2'>
          <span className='icon-highlight'>
            <TiSocialInstagram size={15} />
          </span>
          <span>Instagram</span>
        </li>
      </ul>
    </div>
  )
}
