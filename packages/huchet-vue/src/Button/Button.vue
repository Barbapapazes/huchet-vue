<script lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'border-2 px-2.5 py-1.5 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  variants: {
    variant: {
      solid: 'border-transparent bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
      outline: 'border-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100',
    },
  },
})

export type ButtonVariantProps = VariantProps<typeof button>

export interface ButtonProps {
  label?: string
  variant?: ButtonVariantProps['variant']
}
</script>

<script lang="ts" setup>
withDefaults(defineProps<ButtonProps>(), {
  variant: 'solid',
})
</script>

<template>
  <button :class="button({ variant })">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>
