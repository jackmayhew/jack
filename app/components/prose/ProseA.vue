<script setup lang="ts">
defineProps<{
  href: string
  target?: string
}>()
</script>

<template>
  <NuxtLink
    :to="href"
    :target="href.startsWith('http') ? '_blank' : undefined"
    class="underline"
  >
    <slot />
  </NuxtLink>
</template>
