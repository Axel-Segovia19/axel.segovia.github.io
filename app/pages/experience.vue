<script lang="ts" setup>
import type { TimelineItem } from '@nuxt/ui'
import { breakpointsTailwind, useBreakpoints, useIntersectionObserver } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMd = breakpoints.greaterOrEqual('md')

const { cardRefs, activeTimeline, timelineOrientation, handleSelect } = useTimeline()

const experiences = [
  {
    employer: 'Arivo Acceptance',
    role: 'Software Engineer',
    period: '2025 - Present',
    description: `I take more ownership here, get pulled into deeper conversations about architecture and business logic, and make decisions with conviction instead of waiting for a green light on everything. The work has naturally shifted more toward the backend — that's where the complexity is, and honestly that's where I find myself most engaged. I ask for forgiveness more than permission these days, and I'm okay with that. I still care a lot about getting better, and I think failure is part of that — as long as you're honest about it and don't run from it. Being on a team where people think that way too makes the whole thing worth it.`,
    accomplishments: [
      'Built and deployed a full-stack customer-facing application for Ken Garff dealerships to capture prime and subprime auto loan leads, implementing authentication, client-side routing, and global state management.',
      'Presented a technical deep-dive to the full team on building Go client libraries for programmatic inter-service communication, contributing to a culture of continuous learning and knowledge sharing.',
    ],
  },
  {
    employer: 'Arivo Acceptance',
    role: 'Jr Software Engineer',
    period: '2023 - 2025',
    description:
      'My time as a Junior Developer is where I grew the most. I made it a personal goal to learn something new every day — whether that was writing cleaner, more efficient code, applying DRY principles and SOLID design, or simply getting better at communicating my work to the people around me. I never shied away from asking for help or inviting criticism, because I treated every challenge as a learning opportunity rather than something to feel the pressure of. I worked across both frontend and backend, contributed to major product rebuilds, and picked up TypeScript along the way. But more than any specific technology, this is the period where I discovered the kind of developer I actually wanted to be.',
    accomplishments: [
      'Contributed to a collaborative effort to migrate and modernize legacy projects, including backend microservices, front-end clients and databases',
      'Received multiple Key Contributor awards for outstanding monthly performance.',
    ],
  },
  {
    employer: 'Arivo Acceptance',
    role: 'Software Engineer Intern',
    period: '2022 - 2023',
    description:
      'Being one of four interns hired for a three-month period was a turning point for me. For the first time, the code I was writing actually mattered — it was being used by real people across the company. That changed how I thought about software development entirely. I fell in love with the craft, picked up Golang and Vue.js, learned how to work in a Scrum team, and built friendships that carried right into the job when they brought me on full-time.',
    accomplishments: [
      'Built a fullstack income calculator alongside 3 other interns to underwrite subprime auto loans.',
    ],
  },
]
const timeLineItems: ComputedRef<TimelineItem[]> = computed(() => {
  return experiences.map((exp, i) => ({
    title: exp.employer,
    description: exp.role,
    date: exp.period,
    icon: 'mdi-briefcase',
    value: i,
  }))
})

function useTimeline() {
  const activeTimeline = ref(0)
  const timelineOrientation = computed(() => (isMd.value ? 'vertical' : 'horizontal'))
  const visibleCards = ref(new Set<number>())
  const cardRefs = ref([])

  useIntersectionObserver(
    cardRefs,
    (entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.value.findIndex((el) => el.$el === entry.target)
        if (index === -1) return

        if (entry.isIntersecting) {
          visibleCards.value.add(index)
        } else {
          visibleCards.value.delete(index)
        }
      })

      activeTimeline.value = visibleCards.value.size ? Math.max(...visibleCards.value) : 0
    },
    { threshold: 1 }
  )

  function handleSelect(e, item) {
    cardRefs.value[item.value]?.$el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return {
    cardRefs,
    activeTimeline,
    timelineOrientation,
    handleSelect,
  }
}
</script>

<template>
  <u-container class="flex gap-4 flex-col md:flex-row justify-evenly md:items-start">
    <section class="flex justify-center md:order-1 md:sticky top-50">
      <u-timeline
        v-model="activeTimeline"
        :orientation="timelineOrientation"
        :items="timeLineItems"
        color="info"
        :ui="{
          indicator: 'cursor-pointer',
        }"
        @select="handleSelect"
      />
    </section>
    <section>
      <u-card
        v-for="(exp, i) in experiences"
        :key="i"
        :ref="
          (el) => {
            if (el) cardRefs[i] = el
          }
        "
        variant="subtle"
        class="even:my-20 shadow-lg max-w-4xl"
      >
        <template #header>
          <span> {{ exp.role }}: {{ exp.period }} </span>
        </template>
        {{ exp.description }}
        <template #footer>
          <div>
            <ul class="list-disc text-sm">
              <div class="text-base !mb-4">Accomplishments</div>
              <li v-for="acc in exp.accomplishments" :key="acc" class="mx-4 my-2">
                {{ acc }}
              </li>
            </ul>
          </div>
        </template>
      </u-card>
    </section>
  </u-container>
</template>
