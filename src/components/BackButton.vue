<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <div class='container m-auto py-6 px-6'>
      <RouterLink
        to='/jobs'
        class='text-main hover:text-dark flex items-center uppercase'
      >
        <i class='pi pi-arrow-circle-left'></i> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>