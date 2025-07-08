<script setup lang="ts">
import { computed } from 'vue'
import { useColor } from '../composables/useColor'

const props = defineProps<{
    url: string
    scale?: number
}>()

const { textColor } = useColor()
const scaleInvertPercent = computed(() => `${(1 / (props.scale || 1)) * 100}%`)
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="slidev-layout default" v-bind="$attrs">
      <slot />
    </div>
    <div relative :style="{ width: scaleInvertPercent, height: scaleInvertPercent }">
      <iframe
        id="frame" class="w-full h-full"
        :src="url"
        :style="scale ? { transform: `scale(${scale})`, transformOrigin: 'top left' } : {}"
      />
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
