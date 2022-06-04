import * as React from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage, useForm } from '@inertiajs/inertia-react'

interface ErrorResponse {
  username?: string
  email?: string
  password?: string
}

interface HasNameAndValue {
  name: string
  value: string
}

function Register() {
  const { transform, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    username: '',
  })
  transform((data) => {
    return {
      user: data,
    }
  })
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    post('/users')
  }
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <h2 className="text-3xl">Register</h2>
      {processing && 'Processing'}
      <form
        className="flex w-[90%] max-w-[500px] flex-col gap-4 rounded-lg bg-gray-300 p-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          className="px-4 py-2"
          onChange={(e) => setData('username', e.target.value)}
        />
        {errors?.username && (
          <div className="text-red-500">{errors.username}</div>
        )}
        <input
          type="email"
          name="email"
          placeholder="email"
          className="px-4 py-2"
          onChange={(e) => setData('email', e.target.value)}
        />
        {errors?.email && <div className="text-red-500">{errors.email}</div>}
        <input
          type="password"
          name="password"
          placeholder="password"
          className="px-4 py-2"
          onChange={(e) => setData('password', e.target.value)}
        />
        {errors?.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
        <button
          type="submit"
          className="mt-10 bg-primary px-3 py-2 text-xl text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register
