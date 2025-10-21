<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content space-x-2 whitespace-nowrap">
      <label for="my-drawer-5" class="drawer-button btn btn-ghost btn-link">
        <icon name="mdi:share-variant" size="32" />
      </label>
      <theme-switcher />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-300 min-h-full w-80 p-4">
        <li>
          <nuxt-link to="https://www.linkedin.com/in/axel-segovia" target="_blank">
            <icon name="mdi:linkedin" size="32" class="mr-2" />LinkedIn
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
