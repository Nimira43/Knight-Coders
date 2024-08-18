<script setup>

import jobData from '@/jobs.json'
import { ref } from 'vue'

const jobs = ref(jobData)
console.log(jobs.value) 

</script>

<template>
  <section class="bg-[#ff4500] px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-[#eee] mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="job in jobs" :key="job.id">
          {{ job.title }}
        </div>
      </div>
    </div>
  </section>
    
<!-- 
  <div class="bg-[#111] rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-[#ff4500] my-2">Full-Time</div>
        <h3 class="text-[#eee] text-xl font-bold">Senior Angular Developer</h3>
      </div>
      <div class="text-[#eee] mb-5">
        We are seeking a talented Front-End Developer to join our team
        in Leeds. The ideal candidate will have strong skills in multiple JavaScript and CSS frameworks.
      </div>
      <h3 class="text-[#ff4500] mb-2">£50-£60K / Year</h3>
      <div class="border border-[#eee] mb-5"></div>
      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-[#eee] mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          Leeds
        </div>
        <a
          href="job.html"
          class="h-[36px] bg-[#ff4500] hover:text-[#eee] text-[#111] px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>

  <div class="bg-[#eee] rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-[#ff4500] my-2">Remote</div>
        <h3 class="text-[#111] text-xl font-bold">Back-End Database Engineer</h3>
      </div>
      <div class="text-[#111] mb-5">
        Join our team as a Backend-End Developer in London. We are looking for a motivated individual with a passion for Database design and development.
      </div>
      <h3 class="text-[#ff4500] mb-2">£80K - $90K / Year</h3>
      <div class="border border-[#111] mb-5"></div>
      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-[#111] mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          London
        </div>
        <a
          href="job.html"
          class="h-[36px] bg-[#ff4500] hover:text-[#eee] text-[#111] px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>

  <div class="bg-[#111] rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-[#ff4500] my-2">Full-Time</div>
        <h3 class="text-[#eee] text-xl font-bold">C++ Software Engineer</h3>
      </div>
      <div class="text-[#eee] mb-5">
        A great opportunity for a Software Engineer, who is experienced in both C++ and embedded software to join a small team who are genuinely developing software and systems that save lives.
      </div>
      <h3 class="text-[#ff4500] mb-2">£55-£60K / Year</h3>
      <div class="border border-[#eee] mb-5"></div>
      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-[#eee] mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          Manchester
        </div>
        <a
          href="job.html"
          class="h-[36px] bg-[#ff4500] hover:text-[#eee] text-[#111] px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
-->

</template>