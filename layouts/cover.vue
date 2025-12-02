<script setup lang="ts">
import { useSharedColor } from '../composables/useSharedColor'

const { coverTitle } = useSharedColor()
</script>

<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full" :class="coverTitle">
      <slot />
    </div>
  </div>
</template>
