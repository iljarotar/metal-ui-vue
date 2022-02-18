<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      title: String,
      values: Boolean
    }
  })
</script>

<template>
  <div id="top-bar">
    <h2>{{ title }}</h2>
    <div v-if="values" id="values-and-button">
      <div id="values">
        <div class="value-box">
          <p>78 CPUs</p>
        </div>
        <div class="value-box">
          <p>128 GB</p>
        </div>
        <div class="value-box">
          <p>1 Cluster</p>
        </div>
      </div>
      <router-link tag="div" id="add-cluster-button" to="/CreateCluster">
        <p>New Cluster</p>
      </router-link>
    </div>
  </div>
</template>

<style>
  #top-bar {
    display: flex;
    justify-content: space-between;
    width: 97%;
    height: 100%;
    margin: auto;
    border-bottom: 1px solid #666;
  }
  h2 {
    margin: auto 0 auto 2em;
    font-weight: normal;
  }
  #values-and-button {
    display: flex;
    justify-content: space-evenly;
  }
  #values {
    display: flex;
    justify-content: space-evenly;
  }
  #add-cluster-button {
    border: none !important;
    background-color: #0088ee;
    cursor: pointer;
    color: #eee;
  }
  .value-box, #add-cluster-button {
    width: 8em;
    margin: auto 1em auto 1em;
    border: 1px solid #666;
    border-radius: 2px;
  }
  p {
    text-align: center;
    line-height: 2em;
  }
  #add-cluster-button:hover {
    background-color: #0077dd;
  }
  #add-cluster-button:active {
    background-color: #0088ee;
  }
</style>