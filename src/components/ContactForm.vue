<template>
  <div class="w-full flex flex-col items-center justify-center p-8 ">
    <div>
      <h3 class="text-lg sm:text-2xl font-light sm:font-medium text-justify" style="text-indent: 2em;" >If you find my work impressive, I would be delighted to hear from you. Please feel free to reach out and discuss your project with me.</h3>
    </div>
    <div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" :action=actionString method="POST">
      <input name="_redirect" type="hidden" id="name" :value=redirectUrl>
      <input type="hidden" name="_autoresponse" value="Thank you for your email! I will get back to you as soon as possible.">
      <input name="_formsubmit_id" type="text" style="display:none">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Enter your full name">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="email" placeholder="Enter your email address">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
            Message
          </label>
          <textarea name="message" id="message" cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your message"></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  setup() {
    const actionString = computed(() =>`https://formsubmit.io/send/${process.env.VUE_APP_FORM_EMAIL_CODE}`);
    const redirectUrl = computed(() => `${process.env.VUE_APP_REDIRECT_URL}/thank-you`);
    return {
      actionString,
      redirectUrl,
    }
  },
}
</script>

<style scoped>
  .contact {
    background-color: #fff;
  }
</style>