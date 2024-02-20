import Image from "next/image"

interface SearchParams {
  searchParams?: {
    email?: string
  }
}

export default async function Page({
 searchParams
}: SearchParams) {
  const email = searchParams?.email || 'default@gmail.com'

  return (
    <div className="bg-white min-h-screen relative">
      <div className="pt-32 px-4 text-dark-slate-grey space-y-6">
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

      <form action="" className="w-full absolute bottom-10 px-4">
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
