<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <div class='container m-auto py-6 px-6'>
      <RouterLink
        href='jobs.html'
        class='text-main hover:text-dark flex items-center uppercase'
      >
        <i class='fas fa-arrow-left mr-2'></i> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>