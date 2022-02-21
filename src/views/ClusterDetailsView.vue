<script lang="ts">
  import TopBar from '../components/TopBar.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    components: {
      TopBar
    },
    data() {
      return {
        subtitle: this.$route.params.clusterId as string
      }
    }
  })
</script>

<template>
  <TopBar title="Cluster Details" :values="true" :subtitle="subtitle"/>
</template>