import React, { useState } from 'react'
import { BsFlag } from 'react-icons/bs'

function PriorityFlag() {
  return (
    <div>
      <BsFlag className="h-7 w-7 rounded-md p-1 text-gray-600 transition-colors hover:bg-gray-200" />
    </div>
  )
}

export default PriorityFlag
