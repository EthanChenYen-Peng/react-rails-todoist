import React from 'react'
import { MdDone, MdOutlineDescription } from 'react-icons/md'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import type { Task } from '../Task/types'
import {
  AiOutlineClose,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from 'react-icons/ai'

interface Props {
  open: boolean
  onClose(): void
  task: Task
  nextTask(): void
  previousTask(): void
}
export default function TaskEditModal({
  open,
  onClose,
  task,
  nextTask,
  previousTask,
}: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <Dialog.Panel className="mx-auto w-11/12 rounded-lg bg-white py-2 md:w-6/12">
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
        <div className="px-5 py-4">
          <div className="">
            <div className="flex items-center">
              <MdDone
                className="mr-2 h-7 w-7 translate-y-[1px] cursor-pointer rounded-full border-[1px] border-gray-500 bg-inherit p-1 text-gray-50 transition-colors duration-300 hover:text-gray-500"
                onClick={(e) => {
                  e.stopPropagation()
                }}
              />
              <h2 className="text-3xl ">{task.name}</h2>
            </div>
            <div>
              <div className="my-3 text-xl">
                {task.description || (
                  <div className="flex items-center gap-2 text-gray-500 ">
                    <MdOutlineDescription className="text-2xl" />
                    Description
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Modal>
  )
}
