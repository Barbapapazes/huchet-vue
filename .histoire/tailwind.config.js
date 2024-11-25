import { resolve } from 'node:path'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    resolve(__dirname, '../packages/huchet-vue/src/**/*.story.vue'),
    resolve(__dirname, '../packages/huchet-vue/dist/index.mjs'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
