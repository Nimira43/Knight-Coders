<script setup>

  import logo from '@/assets/images/logo.png'

</script>

<template>
  <nav class="bg-[#ff4500] border-b border-[#111]">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
              <img class="h-10 w-auto" :src="logo" alt="Jobs 4 Coders" />
              <span class="hidden md:block text-[#111] text-2xl ml-2"
                >Jobs 4 Coders</span
              >
            </a>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <a
                  href="index.html"
                  class="text-[#111] hover:text-[#eee] rounded-md px-3 py-2"
                  >Home</a
                >
                <a
                  href="jobs.html"
                  class="text-[#111] hover:text-[#eee] rounded-md px-3 py-2"
                  >Jobs</a
                >
                <a
                  href="add-job.html"
                  class="text-[#111] hover:text-[#eee] rounded-md px-3 py-2"
                  >Add Job</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

</template>