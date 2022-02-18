<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({

  })
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
  main {
    display: grid;
    grid-template-rows: 1fr 7fr;
  }
</style>