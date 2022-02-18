<script lang="ts">
  import { defineComponent } from "vue"
  
  export default defineComponent({

  })
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/Kubernetes">Kubernetes</router-link>
      </li>
      <li>
        <router-link to="/Volumes">Volumes</router-link>
      </li>
      <li>
        <router-link to="/IpAddresses">Ip Addresses</router-link>
      </li>
      <li>
        <details>
          <summary>Settings</summary>
          <ul>
            <li>
              <router-link to="/GeneralSettings">General</router-link>
            </li>
            <li>
              <router-link to="/BillingSettings">Billing</router-link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
    
  </nav>
</template>

<style>
  nav {
    background-color: #999;
    height: 100%;
  }
</style>