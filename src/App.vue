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
    <Navigation id="navigation"/>
    <Main/>
  </div>
</template>

<style>
  #app-container {
    display: grid;
    grid-template-areas: 
     "header header"
     "nav content";
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 1fr 9fr;
    height: 100vh;
  }
  Header {
    grid-area: header;
  }
  #navigation {
    grid-area: nav;
  }
  Main {
    grid-area: content;
  }
</style>