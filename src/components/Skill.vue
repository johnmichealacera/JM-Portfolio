<template>
  <div class="border-2 p-2 sm:p-10 bg-yellow-50 bg-opacity-50">
    <h1 class="text-center text-xl sm:text-2xl font-medium">My Skills</h1>
    <hr class="m-2 sm:m-6">
    <div class="flex justify-evenly text-xs sm:text-base">
      <div class="w-2/12">
        <h1 class="m-2 font-semibold">Programming Languages</h1>
        <ul class="font-black text-right">
          <li>Javascript
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-700"></div>
            </div>
          </li>
          <li>Typescript
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-700"></div>
            </div>
          </li>
          <li>NodeJs
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-700"></div>
            </div>
          </li>
          <li>CSS
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-700"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-2/12">
        <h1 class="m-2 font-semibold">Frameworks</h1>
        <ul class="font-black text-left">
          <li>Express
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color"></div>
            </div>
          </li>
          <li>NestJs
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color"></div>
            </div>
          </li>
          <li>Vue
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color"></div>
            </div>
          </li>
          <li>Bootstrap
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color"></div>
            </div>
          </li>
          <li>Tailwind
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:50%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-2/12">
        <h1 class="m-2 font-semibold">Others</h1>
        <ul class="font-black text-left">
          <li>Git
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:90%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color"></div>
            </div>
          </li>
          <li>Visual Studio Code
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color"></div>
            </div>
          </li>
          <li>Linux
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color"></div>
            </div>
          </li>
        </ul>
      </div>  
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: "Skill.vue",
}
</script>

<style scoped>
  .bg-color {
    background-color: #01a2a6;
  }
</style>