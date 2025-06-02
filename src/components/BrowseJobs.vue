<script setup>
import { RouterLink } from 'vue-router'
import JobListing from './JobListing.vue'
import { ref, defineProps, onMounted } from 'vue'
import axios from 'axios'

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
})

const jobs = ref([]) 
</script>

<template>
  <section class='bg-light px-4 py-10'>
    <div class='container-xl lg:container m-auto'>
      <h2 class='text-3xl font-semibold text-main mb-6 text-center'>
        Browse Jobs
      </h2>
      <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <JobListing 
          v-for='job in jobs.slice(0, limit || jobData.length)' 
          :key='job.id' 
          :job='job' 
        />
      </div>
    </div>
  </section>
  <section v-if='showButton' className='m-auto max-w-lg my-10 px-6'>
    <RouterLink
      to='/jobs'
      className='block bg-dark text-light text-center py-4 px-6 rounded-xl hover:bg-main uppercase'
    >
      View All Jobs
    </RouterLink>
  </section>
</template>