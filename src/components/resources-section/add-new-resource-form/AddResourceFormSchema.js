import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .required('Requerido')
    .min(2, 'Mínimo 2 caracteres')
    .max(50, 'Máximo 50 caracteres'),
  url: yup
    .string()
    .required('Requerido')
    .min(2, 'Mínimo 2 caracteres')
    .max(250, 'Máximo 250 caracteres')
    .matches(
      /^(http(s)?:\/\/)[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm,
      'Por favor, ingresa una url válida'
    ),
});
