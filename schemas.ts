import * as yup from 'yup'

export const usuarioSchema = yup.object({
  id: yup.number().nullable().optional(),
  email: yup.string().email().required().trim(),
  senha: yup.string().min(6).required().trim(),
  nome: yup.string().required().trim(),
  telefone: yup.string().required().trim(),
  foto_perfil: yup.mixed().optional()
})

export const usuarioLoginSchema = yup.object({
  email: yup.string().email().required().trim(),
  senha: yup.string().min(6).required().trim()
})
