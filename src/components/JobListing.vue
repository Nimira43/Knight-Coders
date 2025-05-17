<script setup>
import { RouterLink } from 'vue-router'
import { defineProps,ref, computed } from 'vue'

const props = defineProps({
  job: Object,
})

const showFullDescription = ref(false)
const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const truncatedDescription = computed(() => {
  let description = props.job.description
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...'
  }
  return description
})

</script>

<template>
  <div class='bg-dark rounded-xl shadow-md relative'>
    <div class='p-4'>
      <div class='mb-6'>
        <div class='text-main my-2'>{{ job.type }}</div>
        <h3 class='text-light text-xl font-semibold'>{{ job.title }}</h3>
      </div>

      <div class='text-light mb-5'>
        <div>{{ truncatedDescription }}</div>
      </div>
      <button 
        @click='toggleFullDescription'
        class='text-main hover:text-light mb-5'
      >
        {{ showFullDescription ? 'Less' : 'More' }}
      </button>
      
      <h3 class='text-main mb-2'>{{ job.salary }} / Year</h3>
      <div class='border border-light mb-5'></div>
      <div class='flex flex-col lg:flex-row justify-between mb-4'>
        <div class='text-light mb-3'>
          <i class='pi pi-map-marker text-lg'></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="'/jobs/' + job.id"
          class='h-[36px] bg-light font-semibold hover:bg-main text-dark px-4 py-2 rounded-lg text-center text-sm uppercase'
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>