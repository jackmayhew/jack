<script setup lang="ts">
import { about } from '~/data/about'

useHead({ title: 'About' })
</script>

<template>
  <main>
    <Header
      title="About Jack"
      subtitle="A bit about me and how I got into coding."
    />
    <div class="w-full max-w-3xl mx-auto">
      <div class="mt-8 text-lg">
        <div v-for="(section, index) in about" :key="index" class="mt-6">
          <h3 class="text-xl text-gray-500 font-semibold">
            {{ section.headline }}
          </h3>
          <MDC :value="section.text" class="markdown-content" />
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
:deep(.markdown-content a) {
  @apply underline;
}
</style>
