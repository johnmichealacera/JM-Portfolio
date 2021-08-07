<template>
  <div class="w-full flex flex-col items-center justify-center p-12 ">
    <div>
      <h3 class="text-2xl font-medium">Do you like my work? Please contact me and let us discuss your project.</h3>
    </div>
    <div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Your name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Your email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@mail">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
            Your message
          </label>
          <textarea name="message" id="message" cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="your message"></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style scoped>
  .contact {
    background-color: #fff;
  }
</style>