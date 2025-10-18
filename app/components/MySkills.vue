<script setup lang="ts"></script>

<template>
  <div class="card size-full">
    <div class="card-body">
      <ul
        class="list flex-row flex-wrap gap-[var(--space-sm)] mt-2 text-step-sm items-center justify-center h-full"
      >
        <li class="flex items-center gap-2">
          <icon name="mdi:language-javascript" class="text-yellow-500" />
          Javascript
        </li>
        <li class="flex items-center gap-2">
          <icon name="mdi:language-typescript" class="text-blue-500" />
          Typescript
        </li>
        <li class="flex items-center gap-2">
          <icon name="mdi:language-html5" class="text-red-500" /> HTML
        </li>
        <li class="flex items-center gap-2">
          <icon name="mdi:language-css3" class="text-blue-400" /> CSS
        </li>
        <li class="flex items-center gap-2"><icon name="ci:go" /> Go</li>
        <li class="flex items-center gap-2">
          <icon name="mdi:vuejs" class="text-green-500" /> Vue
        </li>
        <li class="flex items-center gap-2"><icon name="mdi:nuxt" class="text-lime-500" /> Nuxt</li>
        <li class="flex items-center gap-2">
          <icon name="mdi:docker" class="text-blue-500" /> Docker
        </li>
        <li class="flex items-center gap-2">
          <icon name="mdi:database" class="text-gray-500" /> Database
        </li>
      </ul>
    </div>
  </div>
</template>
