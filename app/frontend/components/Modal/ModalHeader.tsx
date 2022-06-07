import React from 'react'
import {
  AiOutlineClose,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from 'react-icons/ai'

interface Props {
  nextTask(): void
  previousTask(): void
  onClose(): void
}
function ModalHeader({ nextTask, previousTask, onClose }: Props) {
  return (
    <div className="flex border-b-[1px] border-b-gray-200 px-4 pt-3 pb-4">
      <div className="ml-auto flex gap-3 text-3xl text-gray-600">
        <AiOutlineArrowDown
          className="rounded-md p-[2px] transition-colors hover:bg-red-100"
          onClick={nextTask}
        />
        <AiOutlineArrowUp
          className="rounded-md p-[2px] transition-colors hover:bg-red-100"
          onClick={previousTask}
        />
        <AiOutlineClose
          className="rounded-md p-[2px] transition-colors hover:bg-red-100"
          onClick={onClose}
        />
      </div>
    </div>
  )
}

export default ModalHeader
