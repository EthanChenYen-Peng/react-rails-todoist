import React from 'react'
import { BsCalendarDate } from 'react-icons/bs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Datepicker.css'

interface DueDateBtnProps {
  onClick(): void
  value: Date
}
const DueDateBtn = React.forwardRef<unknown, DueDateBtnProps>((props) => {
  const defaultValue = 'Due date'
  return (
    <button
      onClick={props.onClick}
      className="flex items-center gap-2 rounded-md border-[1px] border-gray-400 py-1 px-2 text-gray-600 hover:bg-gray-300"
    >
      <>
        <BsCalendarDate />
        {props.value || defaultValue}
      </>
    </button>
  )
})

DueDateBtn.displayName = 'DueDateBtn'

interface Props {
  setDate: (date: number) => void
}
function Datepicker({ setDate }: Props) {
  const [startDate, setStartDate] = React.useState<Date | undefined>(undefined)
  return (
    <div
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => {
          console.log(date.getTime())
          setStartDate(date)
          setDate(date.getTime())
        }}
        customInput={<DueDateBtn />}
      />
    </div>
  )
}

export default Datepicker
