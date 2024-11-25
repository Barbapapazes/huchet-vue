import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    stylistic: true,
    vue: true,
    typescript: true,
  },
  ...tailwind.configs['flat/recommended'],
)
