"use client"

import { useClient } from "@/app/hooks/useClient"
import { getCookies } from "@/app/services/cookies"
import { useRouter } from "next/navigation"
import { useAsync } from "react-async-hook"

export default function PerfilRoute() {

  const client = useClient()
  const router = useRouter()

  const fetchUsuario = useAsync(async () => {
    try {
      const token = await getCookies()
      const response = await client.getPerfil(token)
      return response
    } catch (error) {
      router.push('/')
    }
  }, [])

  return(
    <div>
      <h1>Perfil</h1>
      {fetchUsuario.loading && <p>Carregando...</p>}
      {fetchUsuario.error && <p>Ocorreu um erro: {fetchUsuario.error.message}</p>}
      {fetchUsuario.result && (
        <div>
          <p>Nome: {fetchUsuario.result.nome}</p>
          <p>Email: {fetchUsuario.result.email}</p>
          <p>Telefone: {fetchUsuario.result.telefone}</p>
        </div>
      )}
    </div>
  )
}
