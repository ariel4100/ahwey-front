<template>
  <div>
    <h1 class="text-blue  ">blog mucndi</h1>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { children: 'console.log(\'Hello world\')' } ]
})

// const res = await axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSIFbs0EdrO7SGkXRxtxNKtUCzIMjVfLNr46RJPTqY4PVMSyv1swmwbeyNA1cGjbiRrCvxLZYEVIaZl/pub?output=csv",{
//     responseType: "blob",
//   });
</script>