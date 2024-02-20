'use client'

import { useFormState } from "react-dom"
import { newJoin } from "@/lib/actions"
import { clsx } from "clsx";

type State = {
  errors?: {
    email?: string[]
  }
  message?: string | null
}

export function JoinForm() {
  const initialState: State = {}
  const [state, dispatch] = useFormState(newJoin, initialState)

  return (
    <form action={dispatch} className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <label
            className="text-xs font-bold"
            htmlFor="email"
          >
            Email address
          </label>
          <div id="email-error" aria-live="polite" aria-atomic>
            {
              state?.errors?.email &&
              state.errors.email.map((error, i) => (
                <p key={i} className="text-tomato text-xs font-bold">
                  {error}
                </p>
              ))
            }
          </div>
        </div>
        <input
          aria-describedby="email-error"
          className={clsx(
            "pl-5 py-4 border-solid border border-grey rounded-md",
            "hover:cursor-pointer active:border-dark-slate-grey active:text-dark-slate-grey", {
              "text-tomato bg-red-100 border-tomato": state?.errors?.email
            }
          )}
          id="email"
          name="email"
          placeholder="email@company.com"
        />
      </div>

      <button
        className="w-full text-center py-4 bg-dark-slate-grey text-white font-bold rounded-md"
        type="submit"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}