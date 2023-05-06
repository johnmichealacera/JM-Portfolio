<template>
  <div class="flex items-center justify-center h-screen">
    <h1 v-if="isAuthenticated">Welcome, {{ user.name }}!</h1>
    <div class="flex flex-col">
      <h1 class="mb-4">Create your own professional, hobby or engaging portfolio!</h1>
      <input type="text" placeholder="Username" class="border-2 border-gray-300 my-2" v-model="state.username">
      <input type="password" placeholder="Password" class="border-2 border-gray-300 mb-2" v-model="state.password">
      <input type="button" value="Log In" @click="login">
    </div>
</div>
</template>

<script>
import { reactive } from '@vue/runtime-core';
import { useAuth0 } from '@auth0/auth0-vue';
export default {
  name: "Login",
  setup() {
    const state = reactive({
      username: '',
      password: '',
    });
    const { isAuthenticated, user, loginWithRedirect } = useAuth0();
    const login = async () => {  
      loginWithRedirect();   

    };

    return {
      state,
      login,
      isAuthenticated,
      user,
    }
  }
}
</script>