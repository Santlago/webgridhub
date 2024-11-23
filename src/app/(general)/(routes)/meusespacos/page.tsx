"use client"

import { useClient } from '@/app/hooks/useClient'
import { getCookies } from '@/app/services/cookies'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAsync } from 'react-async-hook'

export default function MeusEspacos() {

  const client = useClient()
  const router = useRouter()

  const fetchEspacos = useAsync(async () => {
    try {
      const token = await getCookies()
      if (!token) {
        throw new Error("Token is undefined")
      }
      const response = await client.getUsuarioEspacos(token)
      console.log('espacos', response)
      return response
    } catch {
      router.push('/')
    }

  }, [])

  return (
    <div className='flex-1 flex flex-col items-center p-4'>
      <h1 className='font-bold text-4xl my-8'>Meus Espaços</h1>
      {fetchEspacos.loading && <div>Carregando...</div>}
      {fetchEspacos.error && <div>Ocorreu um erro: {fetchEspacos.error.message}</div>}
      {fetchEspacos.result && fetchEspacos.result.length === 0 && (
        <div>
          <p>Você ainda não possui espaços cadastrados</p>
        </div>
      )}
      {fetchEspacos.result && (
        <div className='flex flex-col gap-4'>
          {fetchEspacos.result.map((espaco) => (
            <div key={espaco.espaco_id} className='card card-side bg-base-200 shadow-xl p-6'>
              <figure className='skeleton h-44 w-44'></figure>
              <div className='card-body'>
                <h2 className='card-title'>{espaco.nome_espaco}</h2>
                <p>{espaco.endereco}</p>
              </div>
            </div>

          ))}
          <Link href={'/meusespacos/'} className='btn btn-primary'>
            Adicionar Espaço
          </Link>
        </div>
      )}
    </div>
  )
}
