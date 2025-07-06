<script setup lang="ts">
import { useNav } from '@slidev/client'
import { getGradient, getRandomNumber } from './utils/color'
import { ref, watch } from 'vue'

const { currentSlideNo } = useNav()

const position = ref(getRandomNumber(15, 45))
const gradient = ref(getGradient(currentSlideNo.value - 1))

watch(currentSlideNo, () => {
  position.value = getRandomNumber(15, 45)
  gradient.value = getGradient(currentSlideNo.value - 1)
})
</script>

<template>
  <div class="relative wrapper">
    <div :class="`gradient fixed inset-0 ${gradient}`"></div>
    <div
      class="fixed inset-4 bg-crust/40 rounded-md outline-dashed outline-2 outline-overlay2/40"
    ></div>
  </div>
</template>

<style>
.gradient {
  --un-gradient-from-position: v-bind(`${position}%`);
}
</style>
