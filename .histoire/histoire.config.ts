import { resolve } from 'node:path'
import { HstVue } from '@histoire/plugin-vue'
import Tailwind from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
  plugins: [HstVue()],

  storyMatch: [
    resolve(__dirname, '../packages/huchet-vue/src/**/*.story.vue'),
  ],

  setupFile: resolve(__dirname, 'setup.ts'),

  theme: {
    title: 'Huchet Vue',
  },

  vite: {
    plugins: [
      Vue(),
      Tailwind(),
    ],
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
})
