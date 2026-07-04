<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
const name = 'Axel Segovia'
const aboutMe = `If you catch me staring off into space, I'm either debugging code in my head, planning tonight's dinner, or rewriting this very description.`
const icons = [
  { icon: 'mdi:language-javascript', color: 'text-yellow-500' },
  { icon: 'mdi:language-typescript', color: 'text-blue-500' },
  { icon: 'mdi:language-html5', color: 'text-red-500' },
  { icon: 'mdi:language-css3', color: 'text-blue-400' },
  { icon: 'mdi:vuejs', color: 'text-green-500' },
  { icon: 'mdi:docker', color: 'text-blue-500' },
  { icon: 'mdi:database', color: 'text-gray-500' },
  { icon: 'ci:go', color: 'text-blue-500' },
]
</script>

<template>
  <section>
    <u-page-hero
      orientation="horizontal"
      :title="name"
      reverse
      :ui="{
        description: 'px-2',
        title: 'text-center',
      }"
    >
      <template #description>
        <u-carousel
          v-slot="{ item }"
          loop
          auto-scroll
          auto-play
          :items="icons"
          :ui="{ item: 'basis-1/4' }"
        >
          <icon :name="item.icon" size="45" :class="item.color" />
        </u-carousel>
        <p>{{ aboutMe }}</p>
      </template>
      <div class="self-center relative">
        <span
          class="absolute top-0 -left-4 -rotate-45 text-6xl font-bold"
          :class="{ 'text-primary': isDark }"
          >Hey!</span
        >
        <img
          src="@/assets/images/anime-face-shot.png"
          alt="Animated face shot"
          class="rounded-lg shadow-2xl ring ring-default max-w-md w-full"
        />
      </div>
    </u-page-hero>
  </section>
</template>
