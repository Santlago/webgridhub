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
      email: '',
      senha: '',
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
    try {
      await client.createUsuario(values)
      toast.success('Cadastro realizado com sucesso!')
      router.push('/perfil')
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
      <div className='flex flex-col gap-4'>
        <div>
          <h2 className='font-bold text-3xl'>Credenciais</h2>
          <p>Você usará estas credenciais para realizar Login em nossa plataforma</p>
        </div>
        <div>
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
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <h2 className='font-bold text-3xl'>Dados do Usuário</h2>
          <p>Preencha com base nos seus dados</p>
        </div>
        <div>
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
          {formik.errors.telefone && formik.touched.telefone && (
            <div className='text-error'>{formik.errors.telefone}</div>
          )}
        </div>
      </div>
      <button type='submit' className='btn btn-primary'>
        Finalizar Cadastro
      </button>
    </form>
  )
}
