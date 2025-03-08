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
  <section class='bg-light py-20 mb-4'>
      <div
        class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'
      >
        <div class='text-center'>
          <h1
            class='text-4xl font-extrabold text-main sm:text-5xl md:text-6xl'
          >
            {{ title }}
          </h1>
          <p class='my-4 text-xl text-dark'>
            {{ subtitle }} 
          </p>
        </div>
      </div>
    </section>
</template>