<script setup>
import { RouterLink } from 'vue-router'
import JobListing from './JobListing.vue'
import { reactive, defineProps, onMounted } from 'vue'
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
})

const state = reactive({
  jobs: [],
  isLoading: true
}) 

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5001/jobs')
    state.jobs = response.data
  } catch (error) {
    console.error('Error fetching jobs data.', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class='bg-light px-4 py-10'>
    <div class='container-xl lg:container m-auto'>
      <h2 class='text-3xl font-semibold text-main mb-6 text-center'>
        Browse Jobs
      </h2>
      <div v-if='state.isLoading' class="text-center text-main py-6">
        <PulseLoader />
      </div>
      <div v-else class='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <JobListing 
          v-for='job in state.jobs.slice(0, limit || state.jobs.length)' 
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