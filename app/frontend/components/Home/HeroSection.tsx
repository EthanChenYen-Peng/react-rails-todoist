import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { SiRubyonrails, SiReact } from 'react-icons/si'

function HeroSection() {
  return (
    <div className="flex min-h-[700px] items-center justify-center">
      <div className="text-center">
        <h1 className="font-semi text-6xl md:text-7xl">
          todoist <span className="italic">clone</span>
        </h1>
        <div className="my-10">
          <Link
            href="/register"
            className="cursor-pointer rounded-lg bg-primary px-3 py-3 text-xl text-white transition-colors hover:bg-red-400"
          >
            Register
          </Link>
        </div>
        <div className="my-8 flex items-center justify-center gap-6">
          <SiRubyonrails className="h-32 w-32 text-primary" />
          <SiReact className="h-24 w-24 text-primary" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-1xl">Presented in React</h2>
          <h2 className="text-1xl">Backed by Rails</h2>
          <h2 className="text-1xl">Bridged the two by InertiaJS</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
