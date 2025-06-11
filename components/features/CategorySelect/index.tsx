'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { hqnrd } from '@/constants'
import { useRouter } from 'next/navigation'
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

export function CategorySelect({
  lang,
  defaultCategory = 'Select category...',
}: {
  lang: Locale
  defaultCategory?: string
}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(defaultCategory)
  const router = useRouter()

  const handleSelect = (category: { label: string; slug: string }) => {
    setOpen(false)
    if (category.label === 'Ver Todas') {
      router.push(`/${lang}/habitaciones`)
    } else if (category.slug) {
      router.push(`/${lang}/habitaciones/${category.slug}`)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='secondary'
          role='combobox'
          aria-expanded={open}
          className='w-full max-w-[18rem] justify-between'
        >
          {hqnrd.categories.find(category => category.slug === value)?.label ||
            defaultCategory}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0'>
        <Command>
          <CommandInput placeholder={value} className='h-9' />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {hqnrd.categories.map(category => (
                <CommandItem
                  key={category.slug}
                  value={category.slug}
                  onSelect={currentValue => {
                    setValue(currentValue)
                    handleSelect({
                      label: category.label,
                      slug: category.slug,
                    })
                  }}
                >
                  {category.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === category.slug ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
