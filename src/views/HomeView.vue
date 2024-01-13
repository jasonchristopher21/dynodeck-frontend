<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import JoinCode from '@/components/homepage/JoinCode.vue'
import dinoimg from '@/assets/dino.png'
</script>

<template>
  <div
    class="flex flex-col items-center min-h-screen max-w-[740px] mx-auto text-center justify-center mt-24"
  >
    <span class="font-heading font-semibold text-[36px] leading-tight">
      Why separate apps, when you can <span class="text-green-400">poll</span> and view
      <span class="text-orange-500">presenter notes</span> in one!
    </span>
    <p class="text-[20px] text-grey-300 py-6 max-w-[500px] leading-tight">
      Dynodeck provides seamless integration from switching between your markdown-supported
      presenter notes, to engaging with audiences with real-time polls
    </p>
    <JoinCode />
    <img class="w-[400px] h-[400px] mt-10" :src="dinoimg" alt="dino" />
  </div>
</template>
