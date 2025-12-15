type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className="
        flex items-center justify-center
        h-[3.25rem]
        p-[1rem]
        bg-[var(--blue-dark)]
        text-[var(--gray-100)]
        border-0
        rounded-lg
        gap-2
        shadow-none
        leading-[140%]
        font-bold
        text-[0.875rem]
        transition-all
        duration-200
        hover:bg-[var(--blue)]
      "
    >
      {children}
    </button>
  )
}
