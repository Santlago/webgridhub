import { InferType } from 'yup'
import { espacoSchema, usuarioLoginSchema, usuarioSchema } from './schemas'

export type Usuario = InferType<typeof usuarioSchema>

export type UsuarioLogin = InferType<typeof usuarioLoginSchema>

export type Token = {
    token: string
    email: string
}

export type Espaco = InferType<typeof espacoSchema>
