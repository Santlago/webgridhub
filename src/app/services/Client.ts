import axios, { AxiosInstance } from 'axios'
import { Espaco, Token, Usuario, UsuarioLogin } from '../../../types'

class Client {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_API_URL })

    this.axios.interceptors.response.use(
      async (response) => {
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 500))

        if (Math.random() > 1) {
          throw new Error("Random error")
        }

        return response
      },
      (error) => {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.response?.data)
          if (error.response?.data?.message) {
            console.error("Error message:", error.response.data.message)
            return Promise.reject(new Error(error.response.data.message))
          }
        }
        console.error("An unknown error occurred:", error)
        return Promise.reject(new Error("An unknown error occurred"))
      }
    )
  }

  async loginUsuario(usuario: UsuarioLogin): Promise<Token> {
    return (await this.axios.post("api/auth/login", usuario)).data
  }

  async createUsuario(usuario: Usuario) {
    const response = await this.axios.post("api/auth/signup", usuario)
    return response.data
  }

  async getPerfil(token: string): Promise<Usuario> {
    const response = await this.axios.get<Usuario>("users/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }

  async getUsuarios(): Promise<Usuario[]> {
    return (await this.axios.get<Usuario[]>("users")).data
  }

  async getUsuarioEspacos(token: string, page: number = 0): Promise<Espaco[]> {
    const response = await this.axios.get<{ content: Espaco[] }>(`usuarioespacos?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.content;
  }

  async getEspacos(token: string, page: number = 0): Promise<Espaco[]> {
    const response = await this.axios.get<{ content: Espaco[] }>(`espacos?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.content;
  }

  async createEspaco(token: string, espaco: Espaco) {
    const response = await this.axios.post<Espaco>(
      "usuarioespacos",
      espaco,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    return response.data
  }
}

export default Client
