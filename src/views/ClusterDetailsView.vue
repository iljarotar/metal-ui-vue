<script lang="ts">
  import TopBar from '../components/TopBar.vue'
  import { defineComponent } from 'vue'

  type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

  export default defineComponent({
    components: {
      TopBar
    },
    data() {
      return {
        subtitle: this.$route.params.clusterId as string,
        todos: {} as Todo
      }
    },
    created: async function() {
      const index = Math.floor(Math.random() * 200)
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
        this.todos = await response.json()
    }
  })
</script>

<template>
  <TopBar title="Cluster Details" :values="true" :subtitle="subtitle"/>
  <div id="details-list">
    <div v-if="todos.userId" id="data">
      <p><b>User Id: </b>{{ todos.userId }}</p>
      <p><b>Id: </b>{{ todos.id }}</p>
      <p><b>Title: </b>{{ todos.title }}</p>
      <p><b>Completed: </b>{{ todos.completed }}</p>
    </div>
    <div v-else id="waiting">
      <p>Loading...</p>
    </div>
  </div>
</template>

<style>
  #details-list {
    margin-left: 3em;
  }
  #data>p {
    text-align: left;
  }
</style>