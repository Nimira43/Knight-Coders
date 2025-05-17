<script setup>
import { RouterLink } from 'vue-router'
import Card from './Card.vue'
</script>

<template>
  <section class='bg-dark py-4'>
    <div class='container-xl lg:container m-auto'>
      <div class='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
        <Card bg='bg-main'>
        <h2 class='text-light text-2xl font-semibold'>For Developers</h2>
          <p class='text-dark mt-2 mb-4'>
            Django, MERN, Svelte Kit job opportunities plus many more...
          </p>
          <RouterLink
            to='/jobs'
            class='inline-block bg-light text-dark font-medium rounded-md px-4 py-2 hover:text-main uppercase'
          >
            Browse Jobs
          </RouterLink>
        </Card>
        <Card bg='bg-light'>
          <h2 class='text-main text-2xl font-semibold'>For Employers</h2>
          <p class='text-dark mt-2 mb-4'>
            List your job to find the perfect developer for the role
          </p>
          <RouterLink
            to='/jobs/add'
            class='inline-block bg-main text-dark font-medium rounded-md px-4 py-2 hover:text-light uppercase'
          >
            Add Job
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>