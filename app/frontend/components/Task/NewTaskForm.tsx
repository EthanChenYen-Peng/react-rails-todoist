import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import useFocus from '@/utils/useFocus'
import { BsCalendarDate } from 'react-icons/bs'

interface Props {
  close: () => void
}
const NewTaskForm = React.forwardRef<HTMLFormElement, Props>((props, ref) => {
  const { data, setData, post } = useForm({
    name: '',
    description: '',
  })
  const disableSubmit = data.name === ''
  const inputRef = useFocus()

  const createTask = () => {
    post('/tasks', {
      onSuccess: () => {
        props.close()
      },
    })
  }

  return (
    <div>
      <form
        className="my-3 rounded-lg border-[1px] border-gray-400 p-5"
        ref={ref}
        onSubmit={(e) => {
          e.preventDefault()
          createTask()
        }}
      >
        <input
          type="text"
          placeholder="Task name"
          className="w-full bg-inherit text-lg text-black focus:outline-none"
          onChange={(e) => setData('name', e.target.value)}
          ref={inputRef}
        />

        <input
          type="text"
          placeholder="Description"
          className="mt-1 mb-4 w-full bg-inherit text-lg text-black focus:outline-none"
          onChange={(e) => setData('description', e.target.value)}
        />

        <button className=" flex items-center gap-1 rounded-md border-[1px] border-gray-400 py-1 px-2 text-gray-500">
          <BsCalendarDate />
          Due date
        </button>
      </form>
      <div className="flex justify-end gap-5">
        <button
          className="rounded-md bg-gray-300 px-3 py-3 text-xl text-gray-800"
          onClick={props.close}
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
            createTask()
          }}
          disabled={disableSubmit}
        >
          Add task
        </button>
      </div>
    </div>
  )
})

NewTaskForm.displayName = 'NewTaskForm'
export default NewTaskForm
