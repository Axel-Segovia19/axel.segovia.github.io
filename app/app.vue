<template>
  <main class="flex justify-center items-center w-full">
    <div class="card rounded-3xl bg-base-200  m-4 shadow-xl w-full max-w-2xl">
      <div class="card-body grid grid-cols-12 gap-3">
        <div class="col-span-4 flex justify-center w-full">
          <img
            src="@/assets/images/anime-face-shot.png"
            alt="face-shot"
            class="rounded-xl w-full max-h-[303px] max-w-[202px]"
          />
        </div>
        <div
          class="row-span-3 col-span-6 w-full grid justify-around"
        >
          <div class="flex gap-1 text-step-sm items-center w-full">
            <h2 class="font-semibold">Name:</h2>
            <span class="text-step-sm">Axel Segovia</span>
          </div>
          <div class="flex gap-1 text-step-sm items-center">
            <h2 class="font-semibold">Profession:</h2>
            <span class="text-step-sm">Software Engineer</span>
          </div>
          <div class="flex gap-1 text-step-sm items-center">
            <h2 class="font-semibold">Current Employer:</h2>
            <span class="text-step-sm">Arivo Acceptance</span>
          </div>
          <div class="flex gap-1 text-step-sm items-center">
            <h2 class="font-semibold">Location:</h2>
            <span class="text-step-sm">UT, USA</span>
          </div>
          <div class="flex gap-1 text-step-sm items-center">
            <h2 class="font-semibold">Languages:</h2>
            <span class="text-step-sm">English, Spanish</span>
          </div>
          <div class="flex gap-1 text-step-sm items-center">
            <h2 class="font-semibold">Email:</h2>
            <span class="text-step-sm">axel.segovia@example.com</span>
          </div>
          <div class="flex gap-1 text-step-sm items-center">
            <h2 class="font-semibold">Skills:</h2>
            <span class="text-step-sm">
              <icon
                name="mdi:language-javascript"
                class="text-yellow-500"
              ></icon>
              <icon name="ci:go"></icon>
              <icon name="mdi:vuejs" class="text-green-500"></icon>
              <icon name="mdi:nuxt" class="text-lime-500"></icon>
              <icon name="mdi:docker" class="text-blue-500"></icon>
              <icon name="mdi:database" class="text-gray-500"></icon>
            </span>
          </div>
        </div>
        <div class="col-span-12 text-lg text-center">
          <p>
            Software developer with a passion for creating efficient and
            scalable applications. Experienced in full-stack development,
            problem-solving, and continuous learning.
          </p>
        </div>
        <div class="col-span-12">
          <div class="flex justify-center">
            <span class="w-full text-center">Arivo Acceptance</span>
            <div class="divider divider-horizontal w-full"></div>
            <span class="w-full text-start">Software Engineer (2025 - Present)</span>
          </div>
          <div class="flex justify-center">
            <span class="w-full text-center">Arivo Acceptance</span>
            <div class="divider divider-horizontal w-full"></div>
            <span class="w-full text-start">Jr Software Engineer (2022 - 2025)</span>
          </div>
          <div class="flex justify-center">
            <span class="w-full text-center">Arivo Acceptance</span>
            <div class="divider divider-horizontal w-full"></div>
            <span class="w-full text-start">Software Engineer Intern (2022 - 2022)</span>
            </div>
          <ul class="list p-2">
            <li class="list-row px-2 py-2">
              Design, develops and maintain full-stack applications using Vue.js
              and Go and MySQL, ensuring scalable and maintainable code.
            </li>
            <li class="list-row px-2 py-2">
              Collaborate with product managers and stakeholders to define
              technical requirements and deliver features that support business
              objectives.
            </li>
            <li class="list-row px-2 py-2">
              Implement robust testing practices using Vitest, Vue Test Utils,
              and Venom, improving reliability and reducing regressions.
            </li>
            <li class="list-row px-2 py-2">
              Participate in code reviews, testing, and deployment processes to
              ensure high-quality software delivery.
            </li>
            <li class="list-row px-2 py-2">
              Optimize database queries and schema design with GORM and MySQL,
              reducing query execution time and improving performance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
