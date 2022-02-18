<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      title: String
    }
  })
</script>

<template>
  <h3>{{ title || 'no title provided' }}</h3>
</template>