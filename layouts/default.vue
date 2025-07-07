<script setup lang="ts">
import { useColor } from '../composables/useColor'

const { textColor } = useColor()
</script>

<template>
  <div class="slidev-layout default">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:slotted(h1),
:slotted(h2),
:slotted(h3),
:slotted(a:hover) {
  color: v-bind(textColor) !important;
}
</style>
