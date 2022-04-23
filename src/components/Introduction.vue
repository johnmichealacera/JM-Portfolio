<template>
  <div class="bg-intro text-white p-10 sm:p-20 bg-jm">
    <div class="m-5 text-center">
      <h1 class="text-5xl font-semibold">Hello, I'm JM Acera.</h1>
      <p>A Web Developer capable of creating websites that will suit your needs.</p>  
    </div>
    <div class="pt-5 sm:pt-10 z-12">
      <ul class="flex justify-evenly items-center h-48 text-lg font-medium">
        <li class="h-full text-xs sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current text-black h-28 sm:m-auto">
            <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>  
          <a href=# class="hover:underline uppercase">Database Administration</a>
        </li>
        <li class="h-full text-xs sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current text-black h-28 sm:m-auto">
            <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href=# class="hover:underline uppercase">Backend Development</a>
        </li>
        <li class="h-full text-xs sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current text-black h-28 sm:m-auto">
            <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>  
          <a href=# class="hover:underline uppercase">Custom Web Application</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: "Introduction"
}
</script>

<style scoped>
  .bg-intro {
    background-color: #01a2a6;
  }
  .bg-jm {
    background-image: url('../../public/jm-profile.jpg');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 100% 100%;
  }
  .demo_wrap {
    position: relative;
    background: #01a2a6;
    overflow: hidden;
}
/* You could use :after - it doesn't really matter */
.demo_wrap:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    opacity: 0.20;
    background-image: url('../../public/jm-profile.jpg');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 40% 100%;
}
</style>