import { Trash, Check } from 'phosphor-react'
import type { ITask } from '../../App'

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const checkboxCheckedClassname = data.isChecked
    ? `border-2 border-[var(--purple-dark)] 
       bg-[var(--purple-dark)]
       hover:border-2 border-[var(--purple)]
       hover:bg-[var(--purple)]`
    : `border-2 border-[var(--blue)] 
       hover:bg-[#1e709f]`
  const paragraphCheckedClassname = data.isChecked
    ? 'line-through text-[var(--gray300)] '
    : ''

  return (
    <div 
      className="
        flex
        flex-1
        gap-[0.75rem]
        items-center
        justify-between
        p-[1rem]
        rounded-lg
        bg-[var(--gray-500)]
        border-1 border-[var(--gray-400)]
        ">
      <div className='flex'>
        <label 
          htmlFor="checkbox" 
          onClick={handleTaskToggle}
          className='
            flex
            p-3
            items-center
            gap-[0.75rem]'>
          <input 
            readOnly 
            type="checkbox" 
            checked={data.isChecked} 
            className='hidden'/>
          <span 
            className={`
             ${checkboxCheckedClassname}
             rounded-full
             h-[1.125rem]
             w-[1.125rem]
             transition-all
             duration-200
             flex
             items-center
             justify-center`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p 
            className={`
              text-[0.875rem]
              leading-[140%]
              select-none
              transition-all
              duration-200
              ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}