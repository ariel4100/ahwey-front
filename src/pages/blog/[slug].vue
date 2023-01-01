<template>
  <div>
    <h1 class="text-blue  ">slug mucndi</h1>
  </div>
</template>

<script setup>
const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>