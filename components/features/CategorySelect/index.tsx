'use client'
import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn, removePluralSuffix } from '@/lib/utils'
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

import roomsData from '@/public/data/rooms.json'
import { hqnrd } from '@/constants'

export function CategorySelect({ lang }: { lang: Locale }) {
  const [open, setOpen] = React.useState(false)
  const searchParams = useSearchParams().get('categoria')
  const [value, setValue] = React.useState(searchParams || 'ver-todas')
  const router = useRouter()

  const getRoomsLabel = () => hqnrd.categories.map(cat => cat.label)

  const handleSelectedCategory = (categoryValue: string) => {
    const newValue = categoryValue === value ? 'ver-todas' : categoryValue
    if (categoryValue) {
      setValue(newValue)
      setOpen(false)
      router.push(`/${lang}/habitaciones?categoria=${newValue}`)
    }
    if (!categoryValue) {
      setOpen(false)
      router.push(`/${lang}/habitaciones`)
    }
  }
  console.log(getRoomsLabel())
  //   const filteredRoomsBySlug = (slug: string | undefined) => {
  //     if (slug === 'ver-todas' || slug === undefined) {
  //       return roomsData.rooms
  //     }
  //     return roomsData.rooms.filter(
  //       r => r.slug.toLowerCase() == removePluralSuffix(slug),
  //     )
  //   }

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
            {/* {getRoomsLabel().find(category => category.slug === value)
              ?.label ?? 'Select category...'} */}
            Select category...
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[370px] p-0'>
          <Command>
            <CommandInput placeholder='Search category...' />
            <CommandList>
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {hqnrd.categories.map((slug, index) => (
                  <CommandItem
                    key={index}
                    value={slug.label}
                    onSelect={() => handleSelectedCategory(slug)}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === slug.label ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {slug.label}
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
