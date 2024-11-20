"use client"

import { useClient } from '@/app/hooks/useClient'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { useAsyncCallback } from 'react-async-hook'
import { toast } from 'react-toastify'
import { usuarioSchema } from '../../../../../../schemas'
import { Usuario } from '../../../../../../types'

export function CadastroForm() {

  const client = useClient()
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: 'email@example.com',
      senha: 'password123',
      nome: '',
      telefone: '',
      foto_perfil: ''
    },
    validationSchema: usuarioSchema,
    onSubmit: async values => {
      handleSubmit.execute(values)
    }
  })

  const handleSubmit = useAsyncCallback(async (values: Usuario) => {
    toast.success('Cadastrando...')
    try {
      await client.createUsuario(values)
      toast.success('Cadastro realizado com sucesso!')
      router.push('/')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Ocorreu um erro inesperado')
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="card bg-base-300 p-4 flex gap-4">
      <h2 className='font-bold text-4xl'>Credenciais</h2>
      <p>Você usará estas credenciais para realizar Login em nossa plataforma</p>
      <label>
        <p>Nome</p>
        <input
          type="text"
          name='nome'
          onChange={formik.handleChange}
          className='input h-10 w-full'
        />
      </label>
      {formik.errors.nome && formik.touched.nome && (
        <div className='text-error'>{formik.errors.nome}</div>
      )}
      <label>
        <p>Telefone</p>
        <input
          type="text"
          name='telefone'
          onChange={formik.handleChange}
          className='input h-10 w-full'
        />
      </label>
      <button type='submit' className='btn btn-primary'>
        Finalizar Cadastro
      </button>
    </form>
  )
}
