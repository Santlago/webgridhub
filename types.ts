import { InferType } from 'yup'
import { usuarioSchema } from './schemas'

export type Usuario = InferType<typeof usuarioSchema>
