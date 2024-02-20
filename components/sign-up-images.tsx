import Image from "next/image";

export function SignUpImages() {
  return (
    <>
      <Image
        alt="Sign Up Illustration"
        className="w-auto h-auto md:hidden"
        height={284}
        priority
        src={`/assets/images/illustration-sign-up-mobile.svg`}
        width={375}
      />

      <Image
        alt="Sign Up Illustration"
        className="hidden md:block"
        height={593}
        src={`/assets/images/illustration-sign-up-desktop.svg`}
        width={400}
      />
    </>
  )
}