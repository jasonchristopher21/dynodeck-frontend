<script setup lang="ts">
import JoinCode from '@/components/homepage/JoinCode.vue'
import dinoimg from '@/assets/dino.png'
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-center min-h-screen mx-auto text-center justify-center -mt-16"
  >
    <div class="flex flex-col max-w-[740px] text-left justify-center">
      <span class="font-heading font-semibold text-[36px] leading-tight">
        Why separate apps, when you can <span class="text-green-400">poll</span> and view
        <span class="text-orange-500">presenter notes</span> in one!
      </span>
      <p class="text-[24px] text-grey-300 py-4 mt-4 max-w-[600px] leading-tight">
        Dynodeck provides seamless integration from switching between your markdown-supported
        presenter notes, to engaging with audiences with real-time polls
      </p>
      <JoinCode />
    </div>
    <img class="w-[400px] h-[400px] mt-10 lg:-scale-x-100" :src="dinoimg" alt="dino" />
  </div>
</template>
