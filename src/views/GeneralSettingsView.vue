<script lang="ts">
  import TopBar from '../components/TopBar.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    components: {
      TopBar
    },
    data() {
      return {
        subtitle: 'General'
      }
    }
  })
</script>

<template>
  <TopBar title="Settings" :values="false" :subtitle="subtitle"/>
</template>