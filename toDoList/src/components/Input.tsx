export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      className="
        border border-[var(--gray-700)]
        rounded-lg
        bg-[var(--gray-500)]
        text-[var(--gray-100)]
        h-[3.375rem]
        p-[1rem]
        w-full
        leading-[140%]
        placeholder:text-[var(--gray-400)]
        focus:border-[var(--purple-dark)]
        focus:outline-none
      "
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  )
}
