<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'

const router = useRouter()

function goBack() {
  if (window.history.state?.back) {
    router.go(-1)
  }
  else {
    router.push('/')
  }
}
</script>

<template>
  <button
    class="absolute mt-[-25px] flex hover:-translate-x-0.5 transition-transform duration-150 pr-4"
    @click="goBack"
  >
    <BaseIcon :icon="ArrowLeft" :size="22" />
  </button>
</template>
