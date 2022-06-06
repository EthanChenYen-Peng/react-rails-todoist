import React from 'react'

interface Props {
  open: boolean
}
function Datepicker({ open }: Props) {
  return <>{open && <p>Date picker</p>}</>
}

export default Datepicker
