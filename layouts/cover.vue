<script setup lang="ts">
import { useColor } from '../composables/useColor'

const { coverTitle } = useColor()
</script>

<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full" :class="coverTitle">
      <slot />
    </div>
  </div>
</template>
