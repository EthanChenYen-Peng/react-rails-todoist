import React from 'react'
import { useForm } from '@inertiajs/inertia-react'

interface Props {
  close: () => void
}
const NewTaskForm = React.forwardRef(
  (props: Props, ref: React.RefObject<HTMLFormElement>) => {
    const { data, setData, post, wasSuccessful } = useForm({
      name: '',
      description: '',
    })
    const inputRef = React.useRef<HTMLInputElement>(null)

    const disableSubmit = data.name === ''

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, [])

    React.useEffect(() => {
      if (wasSuccessful) {
        close()
      }
    }, [wasSuccessful])
    return (
      <div>
        <form
          className="my-3 rounded-lg border-[1px] border-gray-400 p-5"
          ref={ref}
          onSubmit={(e) => {
            e.preventDefault()
            post('/tasks')
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
        </form>
        <div className="flex justify-end gap-5">
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
              post('/tasks')
            }}
            disabled={disableSubmit}
          >
            Add task
          </button>
        </div>
      </div>
    )
  }
)

NewTaskForm.displayName = 'NewTaskForm'
export default NewTaskForm
