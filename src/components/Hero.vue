<script setup>

import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Want to become a Web Developer?'
  },    
  subtitle: {
    type: String,
    default: 'Thousands of Coding jobs waiting to be filled.'
  }    
})

</script>

<template>
  <section class='bg-[#eee] py-20 mb-4'>
      <div
        class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'
      >
        <div class='text-center'>
          <h1
            class='text-4xl font-extrabold text-[#1c9fd3] sm:text-5xl md:text-6xl'
          >
            {{ title }}
          </h1>
          <p class='my-4 text-xl text-[#111]'>
            {{ subtitle }} 
          </p>
        </div>
      </div>
    </section>
</template>