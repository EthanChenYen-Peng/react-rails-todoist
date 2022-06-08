import React, { useState } from 'react'
import { BsFlag, BsFlagFill } from 'react-icons/bs'
import { MdDone } from 'react-icons/md'

interface PriorityOption {
  name: string
  color: string
  id: string
}
const priorityOptions: PriorityOption[] = [
  { name: 'Priority 1', color: 'text-red-600', id: 'p1' },
  { name: 'Priority 2', color: 'text-orange-600', id: 'p2' },
  { name: 'Priority 3', color: 'text-blue-600', id: 'p3' },
  { name: 'Priority 4', color: 'text-gray-400', id: 'p4' },
]
function PrioritySelect() {
  const [selected, setSelected] = React.useState('p4')
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      const element = e.target as HTMLElement
      if (!element.closest('#priority-input-select')) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  return (
    <div className="relative" id="priority-input-select">
      <BsFlag
        className="h-7 w-7 rounded-md p-1 text-gray-600 transition-colors hover:bg-gray-200"
        onClick={() => setOpen(true)}
      />
      <div
        className={`${
          open ? 'opacity-100' : 'opacity-0'
        } absolute right-0 min-w-[250px] rounded-lg border-[1px] border-gray-300 bg-gray-50`}
      >
        <ul className="flex flex-col">
          {priorityOptions.map(({ name, color, id }, index) => (
            <Priority
              name={name}
              color={color}
              key={index}
              selected={id === selected}
              onClick={() => setSelected(id)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

function Priority({
  name,
  color,
  selected,
  onClick,
}: {
  name: string
  color: string
  selected: boolean
  onClick(): void
}) {
  return (
    <li
      className="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-gray-200"
      onClick={onClick}
    >
      <BsFlagFill className={`h-5 w-5 ${color}`} />
      <span className="font-light">{name}</span>
      {selected && <MdDone className="ml-auto text-red-700" />}
    </li>
  )
}

export default PrioritySelect
