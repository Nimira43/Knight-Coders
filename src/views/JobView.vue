<script setup>
  import BackButton from '@/components/BackButton.vue'
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import { reactive, onMounted } from 'vue'
  import { useRoute, RouterLink, useRouter } from 'vue-router' 
  import axios from 'axios'
  import { useToast } from 'vue-toastification'

  const route = useRoute()
  const router = useRouter()
  const toast = useToast()
  const jobId = route.params.id
  
  const state = reactive({
    job: {},
    isLoading: true
  })

  const deleteJob = async () => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this job listing?')

      if (confirm) {
        await axios.delete(`/api/jobs/${jobId}`)
        toast.success('Job deleted successfully.')
        router.push('/jobs')
      }
    } catch (error) {
      console.error('Error deleting job', error)   
      toast.error('Failed. Job not deleted.')   
    }
  }

  onMounted(async () => {
    try {
      const response = await axios.get(`/api/jobs/${jobId}`)
      state.job = response.data
    } catch (error) {
      console.error('Error fetching job data.', error)
    } finally {
      state.isLoading = false
    }
  }
)
</script>

<template>
  <BackButton />
  <section 
    v-if='!state.isLoading'  
    class='bg-light'
  >
    <div class='container m-auto py-10 px-6'>
      <div class='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
        <main>
          <div
            class='bg-grey-light p-6 rounded-lg shadow-md text-center md:text-left'
          >
            <div class='text-main font-semibold mb-4 uppercase'>{{ state.job.type }}</div>
            <h1 class='text-3xl font-semibold mb-4'>{{ state.job.title }}</h1>
            <div
              class='text-dark mb-4 flex items-center justify-center md:justify-start'
            >
              <i class='pi pi-map-marker text-lg mr-2 text-main'></i>
              <p class='text-main font-semibold uppercase '>{{ state.job.location }}</p>
            </div>
          </div>

          <div class='bg-grey-light p-6 rounded-lg shadow-md mt-6'>
            <h3 class='text-main text-lg font-semibold mb-6 uppercase'>
              Job Description
            </h3>

            <p class='mb-4'>
              {{ state.job.description }}

            </p>
            <h3 class='text-main text-lg font-semibold mb-2 uppercase'>Salary</h3>
            <p class='mb-4'>{{ state.job.salary }}</p>
          </div>
        </main>

        <aside>
          <div class='bg-grey-light p-6 rounded-lg shadow-md'>
            <h3 class='text-2xl text-main font-semibold mb-6 uppercase'>Company Details</h3>
            <h2 class='text-2xl font-medium'>{{ state.job.company.name }}</h2>
            <p class='my-2 '>
              {{ state.job.company.description }}
            </p>
            <hr class='my-4' />
            <h3 class='text-xl uppercase font-medium text-main'>Contact Email:</h3>
            <p class='my-2 bg-light p-2 font-semibold'>
              {{ state.job.company.contactEmail }}
            </p>
            <h3 class='text-xl uppercase font-medium text-main'>Contact Phone:</h3>
            <p class='my-2 bg-light p-2 font-semibold'>{{ state.job.company.contactPhone }}</p>
          </div>

          <div class='bg-light p-6 rounded-lg shadow-md mt-6'>
            <h3 class='text-xl text-center font-semibold mb-6 uppercase'>Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.job.id}`"
              class='bg-dark hover:bg-grey-dark text-light text-center uppercase font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline mt-4 block btn-hover'
            >
              Edit Job
            </RouterLink>
            <button
              @click='deleteJob'
              class='bg-dark hover:bg-grey-dark text-light uppercase font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline mt-4 block btn-hover'
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
  <div v-else class='text-center text-main py-6'>
    <PulseLoader />
  </div>
</template>