interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function Header({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className="flex flex-1 items-center justify-between">
      <aside className="flex items-center gap-2 font-bold last-child:text-[var(--purple)]">
        <p className="text-[0.875rem] text-[var(--blue)]">
          Tarefas criadas
        </p>

        <span
          className="
            py-[2px]
            px-[8px]
            rounded-2xl
            text-[0.875rem]
            text-[var(--gray-200)]
            bg-[var(--gray-400)]
          "
        >
          {tasksCounter}
        </span>
      </aside>

      <aside className="flex items-center gap-2 font-bold last-child:text-[var(--purple)]">
        <p className="text-[0.875rem] text-[var(--purple)]">
          Concluídas
        </p>

        <span
          className="
            py-[2px]
            px-[8px]
            rounded-2xl
            text-[0.875rem]
            text-[var(--gray-200)]
            bg-[var(--gray-400)]
          "
        >
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}
