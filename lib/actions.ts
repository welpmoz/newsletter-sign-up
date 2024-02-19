'use server'

import { z } from "zod";

const EmailValidator = z.object({
  email: z.string().email({ message: 'Valid email required'}),
})

type State = {
  errors?: {
    email?: string[]
  }
  message?: string | null
}

export async function newJoin(
  prevState: State,
  formData: FormData
) {
  const validatedFields = EmailValidator.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields',
    }
  }

  const { email } = validatedFields.data
  console.log('email received in server', email)
}
