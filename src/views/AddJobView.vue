<template>
  <section class='bg-light'>
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-grey-light px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form>
          <h2 class="text-3xl text-center font-medium mb-6 text-main">Add Job</h2>
          <div class="mb-4">
            <label 
              for="type" 
              class="block text-main font-medium mb-2 uppercase"
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
              class="block text-main font-medium mb-2 uppercase"
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
              class="block text-main font-medium mb-2 uppercase"
            >
              Job Description
            </label>
            <textarea 
              id="description"
              name="description" 
              class="border rounded w-full py-2 px-3"
              rows="4"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <label 
              for="type" 
              class="block text-main font-medium mb-2 uppercase"
            >
              Salary
            </label>
            <select 
              name="salary" 
              id="salary" 
              class="border rounded-md w-full py-2 px-3"
              required
            >
              <option value="Under £25,000">Under £25,000</option>
              <option value="£25,000 - £30,000">£25,000 - £30,000</option>
              <option value="£30,000 - £40,000">£30,000 - £40,000</option>
              <option value="£40,000 - £50,000">£40,000 - £50,000</option>
              <option value="£50,000 - £60,000">£50,000 - £60,000</option>
              <option value="£60,000 - £70,000">£60,000 - £70,000</option>
              <option value="£70,000 - £80,000">£70,000 - £80,000</option>
              <option value="£80,000 - £90,000">£80,000 - £90,000</option>
              <option value="£90,000 - £100,000">£90,000 - £100,000</option>
              <option value="£100,000 - £125,000">100,000 - £125,000</option>
              <option value="£125,000 - £150,000">125,000 - £150,000</option>
              <option value="£150,000 - £175,000">£150,000 - £175,000</option>
              <option value="£175,000 - £200,000">£175,000 - £200,000</option>
              <option value="Over £200,000">Over £200,000</option> 
            </select>
          </div>
          <div class="mb-4">
            <label 
              class="block text-main font-medium mb-2 uppercase"
            >
              Location
            </label>
            <input 
              type="text" 
              id="location"
              name="loction" 
              class="border rounded w-full py-2 px-3 mb-2"
              required
            >
          </div>
          <h3 class="text-2xl mb-5">Company Details</h3>
          <div class="mb-4">
            <label 
              for="company"
              class="block text-main font-medium mb-2 uppercase"
            >
              Company Name
            </label>
            <input 
              type="text" 
              id="company"
              name="company" 
              class="border rounded w-full py-2 px-3 mb-2"
            >
          </div>
          <div class="mb-4">
            <label 
              for="company_description"
              class="block text-main font-medium mb-2 uppercase"
            >
              Company Description
            </label>
            <textarea 
              id="company_description"
              name="company_description" 
              class="border rounded w-full py-2 px-3"
              rows="4"
            ></textarea>
          </div>
          <div class="mb-4">
            <label 
              for="company_email"
              class="block text-main font-medium mb-2 uppercase"
            >
              Company Name
            </label>
            <input 
              type="email" 
              id="company_email"
              name="company_email" 
              class="border rounded w-full py-2 px-3 mb-2"
              required
            >
          </div>
          <div class="mb-4">
            <label 
              for="contact_phone"
              class="block text-main font-medium mb-2 uppercase"
            >
              Company Phone Number
            </label>
            <input 
              type="tel" 
              id="contact_phone"
              name="contact_phone" 
              class="border rounded w-full py-2 px-3 mb-2"
              required
            >
          </div>
        </form>
      </div>
    </div>
  </section>
</template>