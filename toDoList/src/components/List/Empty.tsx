import { ClipboardText } from "phosphor-react";

export function Empty() {
  return (
    <div 
        className="
            py-[4rem] 
            px-[1rem]
            border-t border-t-[var(--gray-400)]
            rounded-lg
            flex
            flex-col
            items-center
            gap-[1rem]
            text-[var(--gray-300)]">
      <ClipboardText size={32} />
      <p className="flex flex-col">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}