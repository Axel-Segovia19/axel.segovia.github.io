<template>
    <div class="card rounded-3xl bg-base-200 shadow-xl max-w-3xl">
      <div class="card-body grid grid-cols-12 gap-3">
        <div class="col-span-12 xs:col-span-6  sm:col-span-4 flex justify-center">
          <img
            src="@/assets/images/anime-face-shot.png"
            alt="face-shot"
            class="rounded-xl "
          />
        </div>
        <div
          class="col-span-12 xs:col-span-6 sm:col-span-8"
        >
        <about-me class="hidden sm:grid md:hidden text-step-md content-center h-full ml-2"/>
          <info-section class="grid xs:grid sm:hidden md:grid"/>
        </div>
        <div class="col-span-12 h-full">
          <about-me class="hidden xs:grid sm:hidden md:grid text-step-md text-center pt-4"/>
          <info-section class="hidden sm:grid md:hidden"/>
        </div>
        <div class="col-span-12 hidden md:inline">
          <back-card/>
        </div>
      </div>
    </div>
</template>