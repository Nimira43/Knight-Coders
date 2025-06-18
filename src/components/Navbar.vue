<script setup>
import logo from '@/assets/images/logo.png'
import { RouterLink, useRoute } from 'vue-router'

const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav class='bg-main'>
    <div class='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div class='flex h-20 items-center justify-between'>
        <div class='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
          <RouterLink class='flex flex-shrink-0 items-center mr-4' to='/'>
            <img class='h-10 w-auto' :src='logo' alt='Jobs 4 Coders' />
            <span class='hidden md:block text-light text-3xl ml-2 logo'>
              Knight Coders
            </span>
          </RouterLink>
          <div class='md:ml-auto'>
            <div class='flex space-x-2'>
              <RouterLink
                to='/'
                :class="[
                  isActiveLink('/')
                    ? 'bg-dark'
                    : 'hover:bg-grey-dark hover:text-light',
                  'text-light',
                  'font-medium',
                  'uppercase',
                  'px-3',
                  'py-2',
                  'rounded-sm',            
                ]" 
              >
                Home
              </RouterLink>
              <RouterLink
                to='/jobs'
                :class="[
                  isActiveLink('/jobs')
                    ? 'bg-dark'
                    : 'hover:bg-grey-dark hover:text-light',
                  'text-light',
                  'font-medium',
                  'uppercase',
                  'px-3',
                  'py-2',
                  'rounded-sm',
                ]" 
              >
                Jobs
              </RouterLink>
              <RouterLink
                to='/jobs/add'
                :class="[
                  isActiveLink('/jobs/add')
                    ? 'bg-dark'
                    : 'hover:bg-grey-dark hover:text-light',
                  'text-light',
                  'font-medium',
                  'uppercase',
                  'px-3',
                  'py-2',
                  'rounded-sm',
                ]" 
              >
                Add Job
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>