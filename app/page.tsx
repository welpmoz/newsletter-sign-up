import { clsx } from "clsx";
import { JoinForm } from "@/components/join-form";
import { ListItem } from "@/components/list-item";
import { SignUpImages } from "@/components/sign-up-images";

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
      <SignUpImages />

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
