'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Locale } from '@/i18n-config'
import { hqnrd } from '@/constants'
import { useRouter } from 'next/navigation'

type CategorySelectProps = {
  lang: Locale
  category: string | null // selected slug
}

export function CategorySelect({ lang, value, category }: CategorySelectProps) {
  const [open, setOpen] = React.useState(false)
  const selectedCategory = hqnrd.categories.find(
    cat => cat.label.toLowerCase() === category?.toLowerCase(),
  )
  const router = useRouter()

  const handleSelect = (category: { label: string; slug: string }) => {
    setOpen(false)
    console.log(category)
    router.push(`/${lang}/habitaciones/${category.slug}`)
  }

  return (
    <div className='flex w-full flex-col max-w-[23rem] mx-auto'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size='lg'
            variant='secondary'
            role='combobox'
            aria-expanded={open}
            className='w-full justify-between'
          >
            {selectedCategory?.label ?? 'Select category...'}
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[370px] p-0'>
          <Command>
            <CommandInput placeholder='Search category...' />
            <CommandList>
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {hqnrd.categories.map((category, index) => (
                  <CommandItem
                    key={index}
                    value={category.label}
                    onSelect={() => handleSelect(category)}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === category.slug ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {category.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
