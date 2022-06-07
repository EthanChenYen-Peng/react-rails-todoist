import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import useFocus from '@/utils/useFocus'
import Datepicker from '../Datepicker'
import type { Task } from '../task/types'

interface Props {
  close: () => void
  task: Task
}
interface FormDataType {
  name: string
  description: string
  due_date: number | undefined
}
function TaskEditForm({ close, task }: Props) {
  const taskDueDate = task.due_date ? new Date(task.due_date) : undefined
  const initalData: FormDataType = {
    name: task.name,
    description: task.description,
    due_date: taskDueDate?.getTime(),
  }
  const { data, setData, put } = useForm(initalData)
  const disableSubmit = data.name === ''
  const inputRef = useFocus()

  const updateTask = () => {
    put(`/tasks/${task.id}`, {
      onSuccess: () => {
        close()
      },
    })
  }
  const formRef = React.useRef<HTMLFormElement>(null)
  React.useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key !== 'Enter') return
      if (disableSubmit) return
      formRef.current?.requestSubmit()
    }

    document.addEventListener('keypress', handleKeyPress)
    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [disableSubmit])

  return (
    <div>
      <form
        className="my-3 rounded-lg border-[1px] border-gray-400 p-5"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault()
          updateTask()
        }}
      >
        <input
          type="text"
          placeholder="Task name"
          className="w-full bg-inherit text-lg text-black focus:outline-none"
          onChange={(e) => setData('name', e.target.value)}
          value={data.name}
          ref={inputRef}
        />

        <input
          type="text"
          placeholder="Description"
          className="mt-1 mb-4 w-full bg-inherit text-lg text-black focus:outline-none"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
        />
        <Datepicker
          selectedDate={taskDueDate}
          setDate={(date: number) => setData('due_date', date)}
        />
      </form>
      <form className="flex justify-end gap-5">
        <button
          className="rounded-md bg-gray-300 px-3 py-3 text-xl text-gray-800"
          onClick={close}
        >
          Cancel
        </button>
        <button
          className={`rounded-md px-3 py-3 text-xl text-white ${
            disableSubmit ? 'bg-red-300' : 'bg-primary'
          }`}
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            updateTask()
          }}
          disabled={disableSubmit}
        >
          Update task
        </button>
      </form>
    </div>
  )
}

export default TaskEditForm
