import * as yup from 'yup'

export const usuarioSchema = yup.object({
  id: yup.number().nullable().optional(),
  email: yup.string().email().required().trim(),
  senha: yup.string().min(6).required().trim(),
  nome: yup.string().required().trim().trim(),
  telefone: yup.string().required().trim(),
  foto_perfil: yup.mixed().optional()
})

export const usuarioLoginSchema = yup.object({
  email: yup.string().email().required().trim(),
  senha: yup.string().min(6).required().trim()
})

export const espacoSchema = yup.object({
  espaco_id: yup.string().required(),
  usuario: usuarioSchema,
  endereco: yup.string().required(),
  fonte_energia: yup.string().optional(),
  orientacao_solar: yup.string().optional(),
  media_solar: yup.string().optional(),
  topografia: yup.string().optional(),
  area_total: yup.string().optional(),
  direcao_vento: yup.string().optional(),
  velocidade_vento: yup.string().optional(),
  nome_espaco: yup.string().required(),
  foto_espaco: yup.mixed().optional()
});
