<script setup>

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import HomeCards from './components/HomeCards.vue'
import BrowseJobs from './components/BrowseJobs.vue'

</script>

<template>
  <Navbar />
  <Hero />
  <HomeCards />
  <BrowseJobs :limit='3' :showButton='true' />
</template>