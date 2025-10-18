<script lang="ts" setup>
const experiences = ref([
  {
    employer: 'Arivo Acceptance',
    role: 'Software Engineer',
    period: '2025 - Present',
    details: [
      'Engineered real-time WebSocket notification system with role-based access control, implementing application locking mechanisms and edit request workflows to prevent concurrent editing conflicts',
      'Led migration of multiple Vue.js applications to Nuxt framework, improving performance, SEO capabilities, and developer experience while maintaining feature parity',
      'Helped developed partner-gateway microservice, integrating SAML-based authentication to enable secure single sign-on capabilities across the platform',
      'Mentored team members through technical presentations and training sessions on emerging technologies, TypeScript best practices, and modern development patterns',
      'Released income calculator v2 with enhanced features while maintaining 100% test coverage and adhering to rigorous code quality standards; recognized with multiple Key Contributor Awards',
    ],
  },
  {
    employer: 'Arivo Acceptance',
    role: 'Jr Software Engineer',
    period: '2023 - 2025',
    details: [
      'Helped development of Norman v2, a complete rebuild of the company\'s core underwriting software using modern JavaScript frameworks and improved architecture',
      'Helped build Pinpoint v2, a dealer-facing platform enabling real-time borrower qualification, vehicle inventory matching, and deal structuring with seamless loan submission workflows',
      'Refactored legacy JavaScript to TypeScript, improving type safety and reducing runtime errors across multiple projects',
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
</script>

<template>
  <div
    v-for="(item, index) in experiences"
    :key="index"
    class="card w-full flex-shrink-0"
  >
    <div class="card-body gap-[var(--space-lg)]">
      <div
        class="card-title items-baseline justify-between border-b text-step-md gap-[var(--space-lg)]"
      >
        <span>{{ item.employer }}</span>
        <span>{{ item.role }} ({{ item.period }}) </span>
      </div>
      <div v-for="(details, dIndex) in item.details" :key="dIndex">
        <ul class="list text-lg">
          <li class="list-row px-2 py-2">
            {{ details }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
