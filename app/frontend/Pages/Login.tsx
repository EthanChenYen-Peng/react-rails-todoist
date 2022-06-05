import * as React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { useForm } from '@inertiajs/inertia-react'

function Login() {
  const { transform, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })
  transform((data) => {
    return {
      user: data,
    }
  })
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    post('/sessions')
  }

  const errorMessage = typeof errors === 'string' ? errors : null
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <h2 className="text-3xl">Welcome back</h2>
      <form
        className="flex w-[90%] max-w-[500px] flex-col gap-4 rounded-lg bg-gray-300 p-10"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="email"
          className="px-4 py-2"
          onChange={(e) => setData('email', e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="px-4 py-2"
          onChange={(e) => setData('password', e.target.value)}
        />
        {errorMessage && (
          <div className="text-sm text-red-500">{errorMessage}</div>
        )}
        <button
          type="submit"
          className={`mt-10 flex min-h-[50px] items-center justify-center px-3 py-2 text-xl text-white ${
            processing ? 'bg-red-400' : 'bg-primary'
          }`}
          disabled={processing}
        >
          {processing ? (
            <CgSpinner className="h-8 w-8 animate-spin" />
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
    </div>
  )
}

export default Login
