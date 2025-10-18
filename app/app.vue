<script setup lang="ts">
const theme = ref('axelLight')

function switchTheme() {
  theme.value = theme.value === 'axelLight' ? 'axelDark' : 'axelLight'
}
</script>

<template>
  <main class="w-screen min-h-screen flex justify-center items-center">
    <div class="size-full max-w-5xl flex flex-col p-4 gap-[var(--space-md)] overflow-hidden">
      <div class="gap-[var(--space-sm)] flex flex-col md:flex-row w-full">
        <img
          src="@/assets/images/anime-face-shot.png"
          alt="face-shot"
          class="rounded-xl w-full max-w-sm shadow md:self-start self-center"
        />
        <div class="flex flex-col gap-[var(--space-sm)]">
          <div class="card w-full">
            <div class="card-body flex-row items-center justify-between">
              <div class="card-title text-step-2xl">
                <span class="">Axel Segovia</span>
              </div>
              <input
                type="checkbox"
                :value="theme"
                class="toggle theme-controller"
                @click="switchTheme"
              />
            </div>
          </div>
          <about-me />
        </div>
      </div>
      <div class="flex md:flex-row flex-col gap-[var(--space-sm)]">
        <div class="w-full">
          <info-section />
        </div>
        <div class="w-full">
          <my-skills />
        </div>
      </div>
      <div class="card flex flex-row gap-[var(--space-sm)] w-full overflow-x-auto shadow rounded">
        <experience-view />
      </div>
    </div>
  </main>
</template>
