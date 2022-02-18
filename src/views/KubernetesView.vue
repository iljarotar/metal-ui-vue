<script lang="ts">
  import TopBar from '../components/TopBar.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    components: {
      TopBar
    }
  })
</script>

<template>
  <TopBar title="Kubernetes"/>
</template>