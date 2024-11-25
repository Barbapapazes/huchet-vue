<script lang="ts" setup>
withDefaults(defineProps<{
  label?: string
  variant?: 'solid' | 'outline'
}>(), {
  variant: 'solid',
})
</script>

<template>
  <button
    class="border-2 px-2.5 py-1.5 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    :class="{
      'border-transparent bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 ': variant === 'solid',
      'border-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100': variant === 'outline',
    }"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>
