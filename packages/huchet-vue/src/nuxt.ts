import type { } from '@nuxt/schema'
import { addComponent, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'

import { components } from './components'

export interface ModuleOptions {
  components: Partial<Record<keyof typeof components, boolean>> | boolean
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@barbapapazes/huchet-vue',
    configKey: 'huchet',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    prefix: '',
    components: true,
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // @ts-expect-error - tailwindcss:config hook is not available in the types
    nuxt.hook('tailwindcss:config', (tailwindConfig) => {
      tailwindConfig.content = tailwindConfig.content ?? { files: [] }
      if (Array.isArray(tailwindConfig.content)) {
        tailwindConfig.content.push(resolver.resolve('./index.mjs'))
      }
      else {
        tailwindConfig.content.files.push(resolver.resolve('./index.mjs'))
      }
    })

    await installModule('@nuxtjs/tailwindcss')

    function getComponents() {
      if (typeof options.components === 'object') {
        return Object.entries(components)
          .filter(([name]) => (options.components as Record<string, boolean>)[name])
          .flatMap(([_, components]) => components)
      }

      if (options.components)
        return Object.values(components)

      return []
    }

    for (const component of getComponents()) {
      addComponent({
        name: `${options.prefix}${component}`,
        export: component,
        filePath: '@barbapapazes/huchet-vue',
      })
    }
  },
})
