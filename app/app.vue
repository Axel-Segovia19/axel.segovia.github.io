<script setup lang="ts">
const isFlipped = ref(false);

function flipCard() {
  isFlipped.value = !isFlipped.value;
}
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    <div
      class="relative [perspective:1000px] sm:cursor-default cursor-pointer size-full"
      @click="flipCard"
    >
      <!-- Front Side -->
      <div class="relative size-full transition-transform duration-700 [transform-style:preserve-3d] flex justify-center items-center"
      :class="{'[transform:rotateY(180deg)]': isFlipped}">
        <div class="absolute [backface-visibility:hidden] m-6">
          <FrontCard />
        </div>
        <!-- Back Side -->
        <div class="absolute [backface-visibility:hidden] [transform:rotateY(180deg)] m-6">
          <BackCard />
        </div>
      </div>
    </div>
  </main>
</template>
