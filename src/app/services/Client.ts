import axios, { AxiosInstance } from 'axios'
import { Usuario } from '../../../types'

class Client {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_API_URL });

    this.axios.interceptors.response.use(
      async (response) => {
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));

        if (Math.random() > 1) {
          throw new Error("Random error");
        }

        return response;
      },
      (error) => {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.response?.data);
          if (error.response?.data?.message) {
            console.error("Error message:", error.response.data.message);
            return Promise.reject(new Error(error.response.data.message));
          }
        }
        console.error("An unknown error occurred:", error);
        return Promise.reject(new Error("An unknown error occurred"));
      }
    )
  }

  async getUsuarios(): Promise<Usuario[]> {
    return (await this.axios.get<Usuario[]>("users")).data;
  }

  async loginUsuario(usuario: undefined): Promise<undefined> {
    return (await this.axios.post("api/auth/login", usuario))
  }

  async createUsuario(usuario: Usuario) {
    const response = await this.axios.post("api/auth/signup", usuario);
    return response.data;
  }
}

export default Client;
