<script lang="ts">
  import { defineComponent } from "vue"
  
  export default defineComponent({

  })
</script>

<template>
  <nav>
    <div id="nav-list">
      <div>
        <router-link active-class="active" to="/"><span>Dashboard</span></router-link>
      </div>
      <div>
        <router-link active-class="active" to="/Kubernetes">Kubernetes</router-link>
      </div>
      <div>
        <router-link active-class="active" to="/Volumes">Volumes</router-link>
      </div>
      <div>
        <router-link active-class="active" to="/IpAddresses">Ip Addresses</router-link>
      </div>
      <div>
        <div id="submenu-summary">Settings</div>
          <div id="submenu">
            <div>
              <router-link class="submenu-link" active-class="active" to="/GeneralSettings">General</router-link>
            </div>
            <div>
              <router-link class="submenu-link" active-class="active" to="/BillingSettings">Billing</router-link>
            </div>
          </div>
      </div>
    </div>
  </nav>
</template>

<style>
  nav {
    background-color: #777;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #nav-list {
    display: flex;
    flex-direction: column;
  }
  a, #submenu-summary {
    display: block;
    line-height: 3em;
    padding-left: 2em;
    color: #ddd;
  }
  .submenu-link {
    padding-left: 3em;
    line-height: 2.5em;
    font-size: 90%;
  }
  a:hover, #submenu-summary:hover {
    background-color: #0077dd;
    text-decoration: none;
    color: #ddd;
  }
  #submenu-summary {
    cursor: pointer;
  }
  #submenu {
    display: none;
  }
  #submenu-summary:hover + #submenu, #submenu:hover {
    display: block;
  }
  .active {
    background-color: #0077dd;
  }
</style>