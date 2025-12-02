<script setup lang="ts">
import { useSharedColor } from './composables/useSharedColor'

const { bgGradient } = useSharedColor()
</script>

<template>
  <div class="relative wrapper">
    <div
      :class="`gradient fixed inset-0 from-surface0 to-100% ${bgGradient.gradient} ${bgGradient.direction}`"
    ></div>
    <div
      class="fixed inset-4 bg-crust/40 rounded-md outline-solid outline-2 outline-overlay2/40"
    ></div>
  </div>
</template>

<style>
.gradient {
  --un-gradient-from-position: v-bind(`${bgGradient.position}%`);
}
</style>
