<script setup lang="ts">
import { useNav } from '@slidev/client'
import { getTextColor } from '../utils/color'
import { ref, watch } from 'vue'

const { currentSlideNo } = useNav()

const textColor = ref(getTextColor(currentSlideNo.value - 1))

watch(currentSlideNo, () => {
  textColor.value = getTextColor(currentSlideNo.value - 1)
})
</script>

<template>
  <div class="slidev-layout center">
    <div class="my-auto">
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
