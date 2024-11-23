"use client"

import { useClient } from '@/app/hooks/useClient'
import { getCookies } from '@/app/services/cookies'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAsync } from 'react-async-hook'

export default function Espacos() {

  const client = useClient()
  const router = useRouter()
  const [page, setPage] = useState(0)

  const fetchEspacos = useAsync(async () => {
    try {
      const token = await getCookies()
      if (!token) {
        throw new Error("Token is undefined")
      }
      const response = await client.getEspacos(token, page)
      console.log('espacos', response)
      return response
    } catch {
      router.push('/')
    }

  }, [page])

  return (
    <div className='flex-1 flex flex-col items-center p-4'>
      <h1 className='font-bold text-4xl my-8'>Espaços disponíveis</h1>
      {fetchEspacos.loading && <div>Carregando...</div>}
      {fetchEspacos.error && <div>Ocorreu um erro: {fetchEspacos.error.message}</div>}
      {fetchEspacos.result && (
        <div className='flex flex-col gap-4'>
          <div className="join justify-center">
            <button className="join-item btn" onClick={() => setPage(prevPage => prevPage !== 0 ? prevPage - 1 : 0)}>«</button>
            <button className="join-item btn">{page + 1}</button>
            <button className="join-item btn" onClick={() => setPage(page + 1)}>»</button>
          </div>
          {fetchEspacos.result.map((espaco) => (
            <div key={espaco.espaco_id} className='card card-side bg-base-200 shadow-xl p-6'>
              <figure className='skeleton h-44 w-44'></figure>
              <div className='card-body'>
                <h2 className='card-title'>{espaco.nome_espaco}</h2>
                <p>{espaco.endereco}</p>
                <p>{espaco.usuario.email}</p>
                <div className='card-actions justify-end'>
                </div>
              </div>
            </div>

          ))}

        </div>
      )}
    </div>
  )
}
