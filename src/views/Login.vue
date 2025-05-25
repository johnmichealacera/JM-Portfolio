<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col">
      <h1 class="mb-4">Create your own professional, hobby or engaging portfolio!</h1>
      <input type="text" placeholder="Username" class="border-2 border-gray-300 my-2" v-model="state.username">
      <input type="password" placeholder="Password" class="border-2 border-gray-300 mb-2" v-model="state.password">
      <input type="button" value="Log In" @click="login">
    </div>
</div>
</template>

<script>
import axios from 'axios';
import { reactive, ref } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useHead } from '@vueuse/head';
export default {
  name: "Login",
  setup() {
    // Adding canonical link
    useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://johnmichealacera.vercel.app/login',
        },
      ],
    });
    const isUserVerified = ref(false);
    const router = useRouter();
    const state = reactive({
      username: '',
      password: '',
    });
    const login = async () => {  
      try {
        const user = await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/user`, { params: {
        username: state.username,
        password: state.password
      } });

        isUserVerified.value = user.data;
        if (user.data) {
          alert('Correct credentials. Logging In');
          router.push('/');
        }
      } catch {
        console.error('error, huhuhu');
      }    
      
    };

    return {
      state,
      login,
    }
  }
}
</script>