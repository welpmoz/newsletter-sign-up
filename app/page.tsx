import { clsx } from "clsx";
import { JoinForm } from "@/components/join-form";
import { ListItem } from "@/components/list-item";
import Image from "next/image";

export default function Home() {
  const advantages = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!'
  ]

  return (
    <div className={clsx(
      "flex flex-col bg-white min-h-screen",
      "md:flex-row-reverse md:min-h-fit md:p-4 md:rounded-xl md:justify-center md:max-w-fit md:mx-auto"
    )}>
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

      <div className={clsx(
        "text-dark-slate-grey px-4 py-8 space-y-8",
        "md:max-w-[45ch] md:space-y-4 md:my-auto"
      )}>
        <h1 className="font-bold text-4xl">
          Stay updated!
        </h1>

        <p>
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul>
          {advantages.map((advantage, i) => (
            <ListItem content={advantage} key={i} />
          ))}
        </ul>

        <JoinForm />
      </div>
    </div>
  );
}
