<template>
  <section class='bg-light'>
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-grey-light px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form>
          <h2 class="text-3xl text-center font-medium mb-6">Add Job</h2>
          <div class="mb-4">
            <label 
              for="type" 
              class="block text-grey-dark font-medium mb-2 uppercase"
            >
              Job Type
            </label>
            <select 
              name="type" 
              id="type" 
              class="border rounded-md w-full py-2 px-3"
              required
            >
              <option value="Full-Time">Full Time</option>
              <option value="Part-Time">Part Time</option>
              <option value="Remote">Remote</option>
              <option value="Placement">Placement</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>

          <div class="mb-4">
            <label 
              class="block text-grey-dark font-medium mb-2 uppercase"
            >
              Job Title
            </label>
            <input 
              type="text" 
              id="name"
              name="name" 
              class="border rounded w-full py-2 px-3 mb-2"
              required
            >
          </div>
          <div class="mb-4">
            <label 
              for="description"
              class="block text-grey-dark font-medium mb-2 uppercase"
            >
              Job Description
            </label>
            <textarea 
              type="text" 
              id="description"
              name="description" 
              class="border rounded w-full py-2 px-3"
              rows="4"
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>