<script setup>
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
  <div class='bg-[#111] rounded-xl shadow-md relative'>
    <div class='p-4'>
      <div class='mb-6'>
        <div class='text-[#1c9fd3] my-2'>{{ job.type }}</div>
        <h3 class='text-[#eee] text-xl font-bold'>{{ job.title }}</h3>
      </div>

      <div class='text-[#eee] mb-5'>
        <div>{{ truncatedDescription }}</div>
      </div>
      <button 
        @click="toggleFullDescription"
        class="text-[#1c9fd3] hover:text-[#eee] mb-5"
      >
        {{ showFullDescription ? 'Less' : 'More' }}
      </button>
      
      <h3 class='text-[#1c9fd3] mb-2'>{{ job.salary }} / Year</h3>
      <div class='border border-[#eee] mb-5'></div>
      <div class='flex flex-col lg:flex-row justify-between mb-4'>
        <div class='text-[#eee] mb-3'>
          <i class='fa-solid fa-location-dot text-lg'></i>
          {{ job.location }}
        </div>
        <a
          :href="'/job/' + job.id"
          class='h-[36px] bg-[#eee] font-semibold hover:bg-[#1c9fd3] text-[#111] px-4 py-2 rounded-lg text-center text-sm'
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>