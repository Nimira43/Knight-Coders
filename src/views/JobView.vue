<script setup>
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import { reactive, onMounted } from 'vue'
  import { useRoute, RouterLink } from 'vue-router' 
  import axios from 'axios'
</script>

<template>
  <section class='bg-light'>
    <div class='container m-auto py-10 px-6'>
      <div class='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
        <main>
          <div
            class='bg-grey-light p-6 rounded-lg shadow-md text-center md:text-left'
          >
            <div class='text-main font-semibold mb-4 uppercase'>Full-Time</div>
            <h1 class='text-3xl font-semibold mb-4'>Senior Vue Developer</h1>
            <div
              class='text-dark mb-4 flex align-middle justify-center md:justify-start'
            >
              <i
                class='fa-solid fa-location-dot text-lg text-main mr-2'
              ></i>
              <p class='text-main font-semibold uppercase '>Manchester</p>
            </div>
          </div>

          <div class='bg-grey-light p-6 rounded-lg shadow-md mt-6'>
            <h3 class='text-main text-lg font-semibold mb-6 uppercase'>
              Job Description
            </h3>

            <p class='mb-4'>
              We are seeking a talented Front-End Developer to join our team
              in Manchester. The ideal candidate will have strong skills in
              HTML, CSS, and JavaScript, with experience working with modern
              JavaScript frameworks such as Vue or Angular.
            </p>
            <h3 class='text-main text-lg font-semibold mb-2 uppercase'>Salary</h3>
            <p class='mb-4'>£55,000</p>
          </div>
        </main>

        <aside>
          <div class='bg-grey-light p-6 rounded-lg shadow-md'>
            <h3 class='text-xl text-main font-semibold mb-6 uppercase'>Company Info</h3>
            <h2 class='text-2xl font-medium uppercase'>Modulas Solutions</h2>
            <p class='my-2 '>
              Modulas Solutions is a leading technology company specialising in
              web development and digital solutions. We pride ourselves on
              delivering high-quality products and services to our clients
              while fostering a collaborative and innovative work environment.
            </p>
            <hr class='my-4' />
            <h3 class='text-xl'>Contact Email:</h3>
            <p class='my-2 bg-light p-2 font-semibold'>
              contact@modulassolutions.com
            </p>
            <h3 class='text-xl'>Contact Phone:</h3>
            <p class='my-2 bg-light p-2 font-semibold'>0161 123 9876</p>
          </div>

          <div class='bg-light p-6 rounded-lg shadow-md mt-6'>
            <h3 class='text-xl text-center font-semibold mb-6 uppercase '>Manage Job</h3>
            <a
              href='/jobs/add'
              class='bg-dark hover:bg-grey-dark text-light text-center uppercase font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline mt-4 block'
            >
              Edit Job
            </a>
            <button
              class='bg-dark hover:bg-grey-dark text-light uppercase font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline mt-4 block'
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>