<script setup lang="ts"></script>

<template>
  <!-- <nav class="navbar sticky top-0 bg-primary z-10">Gello</nav> -->
  <main class="w-screen min-h-screen flex justify-center items-center">
    <div class="size-full max-w-5xl flex flex-col p-4 gap-[var(--space-md)]">
      <div class="gap-[var(--space-sm)] flex flex-col md:flex-row w-full">
        <img
          src="@/assets/images/anime-face-shot.png"
          alt="face-shot"
          class="rounded-xl w-full  max-w-sm shadow-2xl self-center"
        />
        <div class="flex flex-col gap-[var(--space-sm)]">
          <div class="card bg-base-200 w-full">
            <div class="card-body flex-row items-center justify-between">
              <div class="card-title text-step-2xl">
                <span class="">Axel Segovia</span>
              </div>
              <input
                type="checkbox"
                value="axelDark"
                class="toggle theme-controller"
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
      <div class="flex flex-col md:flex-row gap-[var(--space-sm)]">
        <div class="w-full">
          <experience-view />
        </div>
      </div>
    </div>
  </main>
</template>
