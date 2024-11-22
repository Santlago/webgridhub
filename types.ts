import { InferType } from 'yup'
import { usuarioLoginSchema, usuarioSchema } from './schemas'

export type Usuario = InferType<typeof usuarioSchema>

export type UsuarioLogin = InferType<typeof usuarioLoginSchema>

export type Token = {
    token: string
    email: string
}
