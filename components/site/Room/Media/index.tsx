import HeroVideoDialog from '@/components/magicui/hero-video-dialog'

export function Media() {
  return (
    <div className='w-full pb-10'>
      <div className='grid grid-cols-1 items-stretch gap-2 lg:grid-cols-[1.2fr_2fr] lg:grid-rows-[auto]'>
        {/* Layout Section */}
        <div className='flex w-full flex-col'>
          <h3 className='mb-2 text-xl font-bold'>Layout</h3>
          <div className='relative aspect-[16/9] w-full flex-grow rounded-md border bg-pink-500 lg:aspect-auto' />
        </div>

        {/* Walkthrough Section */}
        <div className='flex w-full flex-col'>
          <h3 className='mb-2 text-xl font-bold'>Walkthrough</h3>
          <div className='relative aspect-[16/9] w-full flex-grow overflow-hidden rounded-md lg:aspect-auto'>
            <div className='relative'>
              <HeroVideoDialog
                className='block dark:hidden'
                animationStyle='from-center'
                videoSrc='https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4'
                thumbnailSrc='/video/poster.gif'
                thumbnailAlt='Hero Video'
              />
              <HeroVideoDialog
                className='hidden dark:block'
                animationStyle='from-center'
                videoSrc='https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4'
                thumbnailSrc='/video/poster.gif'
                thumbnailAlt='Hero Video'
              />
            </div>
            {/* <HeroVideoDialog
              videoSrc='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              thumbnailSrc='/video/poster.gif'
              thumbnailAlt='Video thumbnail'
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
