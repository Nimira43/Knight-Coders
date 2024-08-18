<script setup>

</script>

<template>
  <section class="bg-[#111] py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <div class="bg-[#ff4500] p-6 rounded-lg shadow-md">
          <h2 class="text-[#eee] text-2xl font-bold">For Developers</h2>
          <p class="text-[#111] mt-2 mb-4">
            Django, MERN, Svelte Kit job opportunities plus many more...
          </p>
          <a
            href="jobs.html"
            class="inline-block bg-[#eee] text-[#111] rounded-lg px-4 py-2 hover:text-[#ff4500]"
          >
            Browse Jobs
          </a>
        </div>
        <div class="bg-[#eee] p-6 rounded-lg shadow-md">
          <h2 class="text-[#ff4500] text-2xl font-bold">For Employers</h2>
          <p class="text-[#111] mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <a
            href="add-job.html"
            class="inline-block bg-[#ff4500] text-[#111] rounded-lg px-4 py-2 hover:text-[#eee]"
          >
            Add Job
          </a>
        </div>
      </div>
    </div>
  </section>
</template>