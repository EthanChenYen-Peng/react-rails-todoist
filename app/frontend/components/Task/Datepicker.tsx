import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  open: boolean
}
function Datepicker({ open }: Props) {
  const [startDate, setStartDate] = React.useState(new Date())
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
    />
  )
}

export default Datepicker
