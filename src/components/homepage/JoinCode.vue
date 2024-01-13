<script setup lang="ts">
import JoinInput from './JoinInput.vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex flex-col bg-brown-300 py-4 px-5 gap-3 rounded-2xl mt-6">
    <span class="font-heading text-white text-[20px]">Joining as a Participant?</span>
    <div class="flex gap-1.5">
      <join-input />
      <button class="transition-all bg-orange-300 hover:bg-yellow-400 px-3 rounded-lg">
        <arrow-right-icon class="text-white w-6 h-6 font-bold" />
      </button>
    </div>
  </div>
</template>
