<script lang="ts" setup>
import { logEvent } from 'histoire/client'
import Button from './Button.vue'
</script>

<template>
  <Story>
    <Variant title="Solid">
      <Button variant="solid" label="Hello World" @click="logEvent('Click', $event)" />
    </Variant>
    <Variant title="Outline">
      <Button variant="outline" label="Hello World" @click="logEvent('Click', $event)" />
    </Variant>
  </Story>
</template>
