'use client'

import { Button } from '@/components/ui/button'

export function ButtonSubmit({
  action,
}: {
  action: (formData: FormData) => void
}) {
  return <Button formAction={action}>Create</Button>
}
