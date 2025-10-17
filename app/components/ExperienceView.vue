<script lang="ts" setup>
const route = useRoute()
const tester = ref([
  {
    employer: 'Arivo Acceptance',
    role: 'Software Engineer',
    period: '2025 - Present',
    details: [
      'Engineered real-time WebSocket notification system with role-based access control, implementing application locking mechanisms and edit request workflows to prevent concurrent editing conflicts',
      'Led migration of multiple Vue.js applications to Nuxt framework, improving performance, SEO capabilities, and developer experience while maintaining feature parity',
      'Helped developed partner-gateway microservice from the ground up, integrating SAML-based authentication to enable secure single sign-on capabilities across the platform',
      'Mentored team members through technical presentations and training sessions on emerging technologies, TypeScript best practices, and modern development patterns',
      'Released income calculator v2 with enhanced features while maintaining 100% test coverage and adhering to rigorous code quality standards; recognized with multiple Key Contributor Awards',
    ],
  },
  {
    employer: 'Arivo Acceptance',
    role: 'Jr Software Engineer',
    period: '2023 - 2025',
    details: [
      "Helped development of Norman v2, a complete rebuild of the company's core underwriting software using modern JavaScript frameworks and improved architecture",
      'Helped build Pinpoint v2, a dealer-facing platform enabling real-time borrower qualification, vehicle inventory matching, and deal structuring with seamless loan submission workflows',
      'Spearheaded codebase modernization initiative by refactoring legacy JavaScript to TypeScript, improving type safety and reducing runtime errors across multiple projects',
      'Encouraged testing culture by implementing comprehensive unit and integration test suites for both frontend (Vue.js) and backend (Go) applications, significantly improving code reliability',
      'Received Key Contributor Award for exceptional contributions to product development and code quality improvements',
    ],
  },
  {
    employer: 'Arivo Acceptance',
    role: 'Software Engineer Intern',
    period: '2022 - 2023',
    details: [
      'Collaborated with development team through mob programming sessions and peer code reviews to build features and resolve bugs across the full-stack codebase',
      'Developed an end-to-end income calculator application using JavaScript, Vue.js, and SQL that computed 12 distinct income types for subprime auto lending underwriting processes',
      'Contributed to database design and implementation to support complex income calculations and data retrieval for lending operations',
      'Participated in agile development practices including daily standups, sprint planning, and retrospectives to deliver features on schedule',
      'Gained hands-on experience with full-stack development workflows, from database queries to client-side rendering and business logic implementation',
    ],
  },
])

const currentSlide = computed(() => Number(route.hash.at(-1)) || 0)

const getPrevIndex = computed(() => {
  return `#slide${!currentSlide.value ? tester.value.length - 1 : currentSlide.value - 1}`
})

const getNextIndex = computed(() => {
  return `#slide${currentSlide.value === tester.value.length - 1 ? 0 : currentSlide.value + 1}`
})
</script>

<template>
  <div class="card bg-base-200">
    <div class="card-body gap-[var(--space-lg)]">
      <div
        class="card-title items-baseline justify-between border-b text-step-md gap-[var(--space-lg)]"
      >
        <span>{{ tester[currentSlide]?.employer }}</span>
        <span>{{ tester[currentSlide]?.role }} ({{ tester[currentSlide]?.period }}) </span>
      </div>
      <div class="carousel w-full">
        <div
          v-for="(item, index) in tester"
          :key="index"
          :id="`slide${index}`"
          class="carousel-item relative w-full"
        >
          <ul class="list text-lg">
            <li v-for="detail in item.details" class="list-row px-2 py-2">
              {{ detail }}
            </li>
          </ul>
          <div
            class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
          >
            <div class="hidden">{{ index }}</div>
            <a :href="getPrevIndex" class="btn btn-circle">❮</a>
            <a :href="getNextIndex" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-circle {
  display: none;
}

.card-body:hover {
  .btn-circle {
    display: inline-flex;
  }
}
</style>
