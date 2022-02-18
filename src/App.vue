<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default defineComponent({
  name: 'app',
  components: {
    Navigation,
    Header,
    Main
  }
    
})
</script>

<template>
  <div id="app-container">
    <Header/>
    <div id="main-container">
      <Navigation/>
      <Main/>
    </div>
  </div>
</template>

<style>
  #app-container {
    display: grid;
    grid-template-rows: 1fr 9fr;
    height: 100vh;
  }
  #main-container {
    display: grid;
    grid-template-columns: 1fr 9fr;
  }
</style>