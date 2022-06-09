import React from 'react'
import { BsFlag, BsFlagFill } from 'react-icons/bs'

interface Props {
  priority?: 'p1' | 'p2' | 'p3' | 'p4'
  className?: string
  onClick?: () => void
}

const options = {
  p1: { color: 'text-red-600', component: BsFlagFill },
  p2: { color: 'text-orange-300', component: BsFlagFill },
  p3: { color: 'text-blue-600', component: BsFlagFill },
  p4: { color: '', component: BsFlag },
}
function PriorityFlag({ priority = 'p4', className = '', onClick }: Props) {
  const { color, component: Component } = options[priority]
  return (
    <Component
      className={`text-gray-600 ${color} ${className}`}
      onClick={onClick}
    />
  )
}

export default PriorityFlag
