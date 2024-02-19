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
    <div className="flex flex-col bg-white min-h-screen">
      <Image
        alt="Sign Up Illustration"
        className="w-auto h-auto"
        height={284}
        src={`/assets/images/illustration-sign-up-mobile.svg`}
        width={375}
      />

      <div className="text-dark-slate-grey px-4 py-8 space-y-8">
        <h1 className="font-bold text-4xl">
          Stay updated!
        </h1>

        <p>
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul>
          {advantages.map(advantage => (
            <ListItem content={advantage} />
          ))}
        </ul>

        <JoinForm />
      </div>
    </div>
  );
}
