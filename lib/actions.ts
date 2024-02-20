'use server'

import { redirect } from "next/navigation";
import { EmailValidator } from "./validators";

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
  redirect(`/thanks?email=${email}`)
}
