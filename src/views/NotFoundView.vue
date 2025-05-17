<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-main text-5xl mb-5"></i>
    <h1 class="text-6xl font-bold mb-4">404</h1>
    <p class="text-main text-xl mb-5 uppercase">Page Not Found</p>
    <RouterLink
      to="/"
      class="text-light bg-dark hover:bg-grey-dark rounded-md px-3 py-2 mt-4 uppercase"
    >
      Go Back
    </RouterLink>
  </section>
  
</template>