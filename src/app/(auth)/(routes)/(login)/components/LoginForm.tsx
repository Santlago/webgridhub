"use client"

import { useClient } from '@/app/hooks/useClient'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { useAsyncCallback } from 'react-async-hook'
import { toast } from 'react-toastify'
import { usuarioLoginSchema } from '../../../../../../schemas'
import { setCookies } from '@/app/services/cookies'

export function LoginForm() {

  const client = useClient()
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: ''
    },
    validationSchema: usuarioLoginSchema,
    onSubmit: async values => {
      handleSubmit.execute(values)
    }
  })

  const handleSubmit = useAsyncCallback(async (values) => {
    try {
      const response = await client.loginUsuario(values)
      console.log('response', response)
      await setCookies(response)
      toast.success('Login realizado com sucesso!')
      router.push('/perfil')
    } catch {
      toast.error('Credenciais incorretas')
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="card bg-base-300 p-4 flex gap-4">
      <h2 className='font-bold text-4xl'>Login</h2>
      <label>
        <p>Email</p>
        <input
          type="text"
          name='email'
          onChange={formik.handleChange}
          className='input h-10 w-full'
        />
      </label>
      {formik.errors.email && formik.touched.email && (
        <div className='text-error'>{formik.errors.email}</div>
      )}
      <label>
        <p>Senha</p>
        <input
          type="password"
          name='senha'
          onChange={formik.handleChange}
          className='input h-10 w-full'
        />
      </label>
      {formik.errors.senha && formik.touched.email && (
        <div className='text-error'>{formik.errors.senha}</div>
      )}
      <button type='submit' className='btn btn-primary'>
        Login
      </button>
    </form>
  )
}
