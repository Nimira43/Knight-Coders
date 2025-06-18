<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <div class='container m-auto py-6 px-6'>
      <RouterLink
        to='/jobs'
        class='text-dark hover:text-main flex items-center uppercase font-medium btn-hover'
      >
        <i class='pi pi-arrow-circle-left mr-2'></i> 
        Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>