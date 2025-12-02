<script setup lang="ts">
import { useSharedColor } from '../composables/useSharedColor'

const { textColor } = useSharedColor()
</script>

<template>
  <div class="slidev-layout center">
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
