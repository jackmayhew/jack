<script setup lang="ts">
import type { ProjectDetails } from '~/types/project/project-details-types'

defineProps<{
  project: ProjectDetails
}>()
</script>

<template>
  <div>
    <div class="my-6">
      <NuxtImg
        class="hero-img w-full h-auto block rounded-lg"
        :src="project.image"
        :alt="project.title"
        width="800"
        height="510"
        loading="eager"
      />
    </div>
    <MDC
      v-for="(p, index) in project.paragraphs"
      :key="index"
      :value="p"
      class="my-4 text-xl project-md-content"
    />
    <p class="text-lg mb-6">
      Built with: {{ project.stack }}
    </p>
  </div>
</template>
