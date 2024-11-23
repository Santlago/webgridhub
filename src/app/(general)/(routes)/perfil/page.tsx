"use client"

import { useClient } from "@/app/hooks/useClient"
import { deleteCookies, getCookies } from "@/app/services/cookies"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { useAsync } from "react-async-hook"

export default function PerfilRoute() {

  const client = useClient()
  const router = useRouter()

  const fetchUsuario = useAsync(async () => {
    try {
      const token = await getCookies()
      if (!token) {
        throw new Error("Token is undefined")
      }
      const response = await client.getPerfil(token)
      return response
    } catch {
      router.push('/')
    }
  }, [])

  return (
    <div className='flex justify-center items-center flex-1'>
      {fetchUsuario.loading && <div className='skeleton h-96 w-96'></div>}
      {fetchUsuario.error && <p>Ocorreu um erro: {fetchUsuario.error.message}</p>}
      {fetchUsuario.result && (
        <div className='card'>
          <div className='p-8 flex gap-4'>
            <div id="perfil-options" className='flex-1 flex flex-col gap-4 justify-around'>
              <div className='flex justify-center'>
                <div className="avatar">
                  <div className="w-44 rounded-xl">
                    <Image
                      src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                      alt='avatar'
                      width={300}
                      height={300}
                      className="rounded-xl"
                    />
                  </div>
                </div>

              </div>
              <div className='flex flex-col gap-2'>
                <Link href='/perfil/editar' className='btn btn-primary'>Editar Perfil</Link>
                <button className='btn btn-error' onClick={() => {
                  deleteCookies()
                  router.push('/')
                }}>Sair do Perfil</button>
              </div>
            </div>
            <div id="perfil-credencials" className='flex-1 card bg-base-300 p-4 gap-4'>
              <div>
                <h2 className='font-bold'>Credenciais</h2>
                <p>Você usa estas credenciais para realizar Login em nossa plataforma</p>
              </div>
              <div id="form" className='flex flex-col gap-2'>
                <label>
                  <p>Email</p>
                  <input
                    type="text"
                    className='input h-10 w-full'
                    defaultValue={fetchUsuario.result.email}
                  />
                </label>
                <label>
                  <p>Nome</p>
                  <input
                    type="text"
                    className='input h-10 w-full'
                    defaultValue={fetchUsuario.result.nome}
                  />
                </label>
                <label>
                  <p>Telefone</p>
                  <input
                    type="text"
                    className='input h-10 w-full'
                    defaultValue={fetchUsuario.result.telefone}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}
