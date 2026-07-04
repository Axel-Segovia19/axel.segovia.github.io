<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import type { VariantType } from 'motion-v'
import { motion } from 'motion-v'

const route = useRoute()
const items: ComputedRef<NavigationMenuItem[]> = computed(() => [
  {
    label: 'Experience',
    to: '/experience',
    active: route.path.startsWith('/experience'),
  },
  {
    label: 'Contact',
    to: '/contact',
    active: route.path.startsWith('/contact'),
  },
])

const variants: { [k: string]: VariantType | ((custom: unknown) => VariantType) } = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1,
  },
  close: (custom: unknown) => {
    const c = custom as number
    return {
      rotate: c === 1 ? 45 : c === 3 ? -45 : 0,
      y: c === 1 ? 6 : c === 3 ? -6 : 0,
      opacity: c === 2 ? 0 : 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    }
  },
}
</script>

<template>
  <u-header
    title="Axel Segovia"
    mode="slideover"
    :ui="{
      container: '!mx-0 !max-w-full',
    }"
  >
    <u-navigationMenu :items="items" variant="link" highlight />
    <template #right>
      <UColorModeSwitch />
    </template>

    <template #body>
      <u-navigationMenu
        :items="items"
        orientation="vertical"
        :ui="{
          linkLabel: '!text-center w-full text-base',
          link: 'my-2',
        }"
      />
    </template>
  </u-header>
</template>
