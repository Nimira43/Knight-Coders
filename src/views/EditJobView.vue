<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'

const route = useRoute()
const jobId = route.params.id

const form = reactive({
  type: 'full-time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: ''
  }
})

const state = reactive({
  job: {},
  isLoading: true
})

const toast = useToast()

const handleSubmit = async () => {
  const updatedJob = {
    title: form.title,
    type: form.type,
    location: form.location,
    description: form.description,
    salary: form.salary,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone
    }
  }
  try {
    const response = await axios.put(`/api/jobs/${jobId}`, updatedJob)
    toast.success('Job updated successfully.')
    router.push(`/jobs/${response.data.id}`)  
  } catch (error) {
    console.error('Error fetching job data.', error)
    toast.error('Failed. Job was not updated.')
  }
}

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`)
    state.job = response.data

    form.type = state.job.type
    form.title = state.job.title
    form.description = state.job.description
    form.salary = state.job.salary
    form.location = state.job.location
    form.company.name = state.job.company.name
    form.company.description = state.job.company.description
    form.company.contactEmail = state.job.company.contactEmail
    form.company.contactPhone = state.job.company.contactPhone
  } catch (error) {
    console.error('Error fetching job', error)
  } finally {
    state.isLoading = false
  }
})

</script>

<template>
  <section class='bg-light'>
    <div class='container m-auto max-w-2xl py-24'>
      <div class='bg-grey-light px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
        <form @submit.prevent='handleSubmit'>
          <h2 class='text-3xl text-center font-semibold mb-6 text-dark uppercase'>Edit Job</h2>
          <div class='mb-4'>
            <label 
              for='type' 
              class='block text-main font-medium mb-2 uppercase'
            >
              Job Type
            </label>
            <select
              v-model='form.type' 
              name='type' 
              id='type' 
              class='border rounded-md w-full py-2 px-3'
              required
            >
              <option value='Full-Time'>Full Time</option>
              <option value='Part-Time'>Part Time</option>
              <option value='Remote'>Remote</option>
              <option value='Placement'>Placement</option>
              <option value='Temporary'>Temporary</option>
            </select>
          </div>

          <div class='mb-4'>
            <label 
              class='block text-main font-medium mb-2 uppercase'
            >
              Job Title
            </label>
            <input 
              v-model='form.title'
              type='text' 
              id='name'
              name='name' 
              class='border rounded w-full py-2 px-3 mb-2'
              required
            >
          </div>
          <div class='mb-4'>
            <label 
              for='description'
              class='block text-main font-medium mb-2 uppercase'
            >
              Job Description
            </label>
            <textarea 
              id='description'
              v-model='form.description'
              name='description' 
              class='border rounded w-full py-2 px-3'
              rows='4'
              required
            ></textarea>
          </div>
          <div class='mb-4'>
            <label 
              for='type' 
              class='block text-main font-medium mb-2 uppercase'
            >
              Salary
            </label>
            <select 
              id='salary'   
              v-model='form.salary'
              name='salary' 
              class='border rounded-md w-full py-2 px-3'
              required
            >
              <option value='Under £25,000'>Under £25,000</option>
              <option value='£25,000 - £30,000'>£25,000 - £30,000</option>
              <option value='£30,000 - £40,000'>£30,000 - £40,000</option>
              <option value='£40,000 - £50,000'>£40,000 - £50,000</option>
              <option value='£50,000 - £60,000'>£50,000 - £60,000</option>
              <option value='£60,000 - £70,000'>£60,000 - £70,000</option>
              <option value='£70,000 - £80,000'>£70,000 - £80,000</option>
              <option value='£80,000 - £90,000'>£80,000 - £90,000</option>
              <option value='£90,000 - £100,000'>£90,000 - £100,000</option>
              <option value='£100,000 - £125,000'>£100,000 - £125,000</option>
              <option value='£125,000 - £150,000'>£125,000 - £150,000</option>
              <option value='£150,000 - £175,000'>£150,000 - £175,000</option>
              <option value='£175,000 - £200,000'>£175,000 - £200,000</option>
              <option value='Over £200,000'>Over £200,000</option> 
            </select>
          </div>
          <div class='mb-4'>
            <label 
              class='block text-main font-medium mb-2 uppercase'
            >
              Location
            </label>
            <input 
              type='text' 
              v-model='form.location'
              id='location'
              name='loction' 
              class='border rounded w-full py-2 px-3 mb-2'
              required
            >
          </div>
          <h3 class='text-2xl mb-5 font-medium uppercase'>Company Info</h3>
          <div class='mb-4'>
            <label 
              for='company'
              class='block text-main font-medium mb-2 uppercase'
            >
              Company Name
            </label>
            <input 
              type='text' 
              v-model='form.company.name'
              id='company'
              name='company' 
              class='border rounded w-full py-2 px-3 mb-2'
            >
          </div>
          <div class='mb-4'>
            <label 
              for='company_description'
              class='block text-main font-medium mb-2 uppercase'
            >
              Company Description
            </label>
            <textarea 
              id='company_description'
              v-model='form.company.description'
              name='company_description' 
              class='border rounded w-full py-2 px-3'
              rows='4'
            ></textarea>
          </div>
          <div class='mb-4'>
            <label 
              for='company_email'
              class='block text-main font-medium mb-2 uppercase'
            >
              Company Email
            </label>
            <input 
              type='email' 
              v-model='form.company.contactEmail'
              id='company_email'
              name='company_email' 
              class='border rounded w-full py-2 px-3 mb-2'
              required
            >
          </div>
          <div class='mb-4'>
            <label 
              for='contact_phone'
              class='block text-main font-medium mb-2 uppercase'
            >
              Company Phone Number
            </label>
            <input 
              type='tel'
              v-model='form.company.contactPhone' 
              id='contact_phone'
              name='contact_phone' 
              class='border rounded w-full py-2 px-3 mb-2'
              required
            >
          </div>
          <div>
            <button
              class='bg-dark hover:bg-grey-dark text-light uppercase font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline mt-4 block btn-hover'
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>