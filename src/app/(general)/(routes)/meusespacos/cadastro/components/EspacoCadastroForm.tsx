'use client'

import { useClient } from '@/app/hooks/useClient'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { espacoSchema } from '../../../../../../../schemas'
import { useAsyncCallback } from 'react-async-hook'
import { getCookies } from '@/app/services/cookies'
import { toast } from 'react-toastify'
import { Espaco } from '../../../../../../../types'

export function EspacoCadastroForm() {

  const client = useClient()
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      nome_espaco: '',
      endereco: '',
      descricao_espaco: '',
    },
    validationSchema: espacoSchema,
    onSubmit: async values => {
      console.log('teste2')
      handleSubmit.execute(values)
    }
  })

  const handleSubmit = useAsyncCallback(async (values: Espaco) => {
    console.log('teste1')
    try {
      console.log('teste')
      const token = await getCookies()
      if (!token) {
        throw new Error("Token is undefined")
      }
      await client.createEspaco(token, values)
      toast.success('Cadastro realizado com sucesso!')
      router.push('/meusespacos')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Ocorreu um erro inesperado')
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className='card bg-base-300 p-4 flex gap-4'>
      <div className='flex flex-col gap-2'>
        <label>
          <p>Nome</p>
          <input
            type="text"
            name='nome_espaco'
            onChange={formik.handleChange}
            className='input h-10 w-full'
          />
        </label>
        {formik.errors.nome_espaco && formik.touched.nome_espaco && (
          <div className='text-error'>{formik.errors.nome_espaco}</div>
        )}
        <label>
          <p>Endereco</p>
          <input
            type="text"
            name='endereco'
            onChange={formik.handleChange}
            className='input h-10 w-full'
          />
        </label>
        {formik.errors.endereco && formik.touched.endereco && (
          <div className='text-error'>{formik.errors.endereco}</div>
        )}
        <label>
          <p>Descrição</p>
          <input
            type="text"
            name='descricao_espaco'
            onChange={formik.handleChange}
            className='input h-10 w-full'
          />
        </label>
        {formik.errors.descricao_espaco && formik.touched.descricao_espaco && (
          <div className='text-error'>{formik.errors.descricao_espaco}</div>
        )}
      </div>
      <button type='submit' className='btn btn-primary'>
        Cadastrar Espaço
      </button>
    </form>
  )
}
