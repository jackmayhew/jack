<script setup lang="ts">
import { Github, Link } from 'lucide-vue-next'

defineProps<{
  url: string
  githubUrl?: string
}>()
</script>

<template>
  <div class="flex gap-2">
    <ButtonLinkExternal
      :url="url"
      text="Visit"
      :icon="Link"
      :icon-size="18"
      width="150px"
    />
    <ButtonLinkExternal
      v-if="githubUrl"
      :url="githubUrl"
      text="Code"
      :icon="Github"
      :icon-size="18"
      width="150px"
    />
  </div>
</template>
