<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import BrowseJobs from '@/components/BrowseJobs.vue'
</script>

<template>
  <Hero />
  <HomeCards />
  <BrowseJobs :limit='3' :showButton='true' />
</template>