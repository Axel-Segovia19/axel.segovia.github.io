<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
  email: undefined,
  message: undefined,
  botcheck: undefined,
})

type Schema = typeof state

const config = useRuntimeConfig()
const form = useTemplateRef('form')
const toast = useToast()
const isSubmitting = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (event.data.botcheck) return
  if (isSubmitting.value) return

  isSubmitting.value = true
  try {
    await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        access_key: config.public.webFormAccessKey,
        email: event.data.email,
        message: event.data.message,
      },
    })
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    state.email = undefined
    state.message = undefined
  } catch (err) {
    toast.add({ title: 'Error', description: 'Something went wrong. Try again.', color: 'error' })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16">
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- Left: personal context -->
      <div class="space-y-6">
        <h1 class="text-3xl font-bold">Let's talk</h1>
        <p class="text-muted text-lg">
          Got a project, a question, or just want to say hi?
          I read every message and usually reply within a day or two.
        </p>

        <div class="flex items-center gap-4 pt-4">
          <img
            src="@/assets/images/anime-face-shot.png"
            alt="avatar of personal self"
            class="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p class="font-medium">Axel Segovia</p>
            <p class="text-sm text-muted">Salt Lake City, UT</p>
          </div>
        </div>

        <div class="flex gap-3 pt-2">
          <u-button icon="i-simple-icons-github" variant="ghost" to="https://github.com/you" target="_blank" />
          <u-button icon="i-simple-icons-linkedin" variant="ghost" to="https://linkedin.com/in/you" target="_blank" />
          <u-button icon="i-simple-icons-x" variant="ghost" to="https://x.com/you" target="_blank" />
        </div>
      </div>

      <!-- Right: form -->
      <u-form ref="form" :state="state" class="space-y-5 w-full" @submit="onSubmit">
        <u-form-field name="botcheck" class="hidden" aria-hidden="true">
          <input v-model="state.botcheck" type="text" tabindex="-1" autocomplete="off" />
        </u-form-field>

        <u-form-field label="Email" name="email" class="w-full">
          <u-input
            v-model="state.email"
            type="email"
            placeholder="you@example.com"
            size="lg"
            class="w-full"
            required
          />
        </u-form-field>

        <u-form-field label="Message" name="message" class="w-full">
          <u-textarea
            v-model="state.message"
            placeholder="What's on your mind?"
            size="lg"
            :rows="6"
            autoresize
            class="w-full"
            required
          />
        </u-form-field>

        <u-button type="submit" size="lg" block :loading="isSubmitting" :disabled="isSubmitting">
          Send message
        </u-button>
      </u-form>
    </div>
  </div>
</template>
