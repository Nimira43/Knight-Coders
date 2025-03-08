<script setup>

import logo from '@/assets/images/logo.png'

</script>

<template>
  <nav class='bg-main border-b-2 border-dark'>
      <div class='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div class='flex h-20 items-center justify-between'>
          <div
            class='flex flex-1 items-center justify-center md:items-stretch md:justify-start'
          >
            <a class='flex flex-shrink-0 items-center mr-4' href='index.html'>
              <img class='h-10 w-auto' :src='logo' alt='Jobs 4 Coders' />
              <span class='hidden md:block text-light text-3xl ml-2 logo'
                >Knight Coders</span
              >
            </a>
            <div class='md:ml-auto'>
              <div class='flex space-x-2'>
                <a
                  href='/'
                  class='text-light hover:text-dark rounded-md px-3 py-2'
                  >Home</a
                >
                <a
                  href='/jobs'
                  class='text-light hover:text-dark rounded-md px-3 py-2'
                  >Jobs</a
                >
                <a
                  href='/jobs/add'
                  class='text-light hover:text-dark rounded-md px-3 py-2'
                  >Add Job</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

</template>