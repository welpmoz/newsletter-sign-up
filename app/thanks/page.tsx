import Image from "next/image"
import { redirect } from "next/navigation"
import { clsx } from "clsx";
import { EmailValidator } from "@/lib/validators"

interface SearchParams {
  searchParams?: {
    email?: string
  }
}

export default async function Page({
 searchParams
}: SearchParams) {
  const validatedUrl = EmailValidator.safeParse(searchParams)

  if (!validatedUrl.success) redirect(`/`)

  const { email } = validatedUrl.data

  return (
    <div className={clsx(
      "flex flex-col bg-white min-h-screen px-4 py-8",
      "md:max-w-fit md:max-h-fit md:mx-auto md:px-8 md:rounded-2xl md:min-h-fit md:gap-6"
    )}>
      <div className="flex-grow-[3] md:hidden"></div>

      <div className={clsx(
        "text-dark-slate-grey space-y-6",
        "md:max-w-[40ch]"
      )}>
        <Image
          alt="Icon Success"
          height={64}
          src={`/assets/images/icon-success.svg`}
          width={64}
        />

        <h1 className="font-bold text-4xl">
          Thanks for subscribing!
        </h1>

        <p>
          A confirmation email has been sent to{' '}
          <span className="font-bold">{email}</span>.{' '}
          Please open it and click the{' '}
          button inside to confirm your subscription
        </p>
      </div>

      <div className="flex-grow-[5] md:hidden"></div>

      <form action="" className="w-full">
        <button
          className="w-full text-center py-4 bg-dark-slate-grey text-white font-bold rounded-md"
          type="submit"
        >
          Dismiss message
        </button>
      </form>
    </div>
  )
}
