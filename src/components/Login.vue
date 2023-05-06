<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <h2 class="text-center font-bold text-xl mb-4">Login</h2>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="username">
        Username
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
        v-model="username"
        @keyup.enter="login"
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="*********"
        v-model="password"
        @keyup.enter="login"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="login"
      >
        Sign In
      </button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="loginWithGoogle">Login with Google</button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import auth from '../services/auth';

export default {
  name: 'LoginForm',
  setup() {
    const username = ref('');
    const password = ref('');

    const login = () => {
      if (username.value && password.value) {
        auth.login({
        realm: 'Username-Password-Authentication',
        username: username.value,
        password: password.value,
      }, (err, authResult) => {
        if (err) {
          console.error(err);
          alert(err?.description);
          return;
        }

        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', authResult.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem('user_id', authResult.idTokenPayload.sub);

        // Redirect to home page or dashboard
      });
      } else {
        alert('Please enter the username and password!');
      }
    };

    const loginWithGoogle = () => {
      auth.loginWithGoogle();
    };

    return {
      username,
      password,
      login,
      loginWithGoogle,
    };
  },
};
</script>
