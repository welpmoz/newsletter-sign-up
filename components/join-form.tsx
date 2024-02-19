export function JoinForm() {
  return (
    <form action="" className="space-y-6">
      <div className="flex flex-col gap-2">
        <label
          className="text-xs font-bold"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          className="pl-5 py-4 border-solid border border-grey rounded-md"
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