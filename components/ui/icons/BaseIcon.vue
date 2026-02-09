<script setup lang="ts">
withDefaults(defineProps<{
  icon: Component
  size?: number
  strokeWidth?: number
  ariaLabel?: string
  ariaHidden?: boolean
  role?: string
  willChange?: boolean
}>(), {
  size: 16,
  strokeWidth: 2,
  ariaHidden: true,
  willChange: true,
})
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :stroke-width="strokeWidth"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden ? 'true' : undefined"
    :role="role"
    :class="{ 'will-change-transform': willChange }"
    v-bind="$attrs"
  />
</template>
