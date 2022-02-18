<script lang="ts">
  import { defineComponent } from "vue"
  
  export default defineComponent({

  })
</script>

<template>
  <nav>
    <div id="nav-list">
      <div class="nav-item">
        <router-link active-class="active" to="/">Dashboard</router-link>
      </div>
      <div class="nav-item">
        <router-link active-class="active" to="/Kubernetes">Kubernetes</router-link>
      </div>
      <div class="nav-item">
        <router-link active-class="active" to="/Volumes">Volumes</router-link>
      </div>
      <div class="nav-item">
        <router-link active-class="active" to="/IpAddresses">Ip Addresses</router-link>
      </div>
      <div>
        <div id="submenu-summary">Settings</div>
        <div id="submenu">
          <div class="nav-item">
            <router-link class="submenu-link" active-class="active" to="/GeneralSettings">General</router-link>
          </div>
          <div class="nav-item">
            <router-link class="submenu-link" active-class="active" to="/BillingSettings">Billing</router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="version-info">
      <p>Metal Cloud</p>
      <p>API Version XY</p>
    </div>
  </nav>
</template>

<style>
  nav {
    background-color: #777;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #version-info {
    border: 1px solid #eee;
    border-radius: 2px;
    width: 90%;
    margin: 0 auto 1em auto;
    font-size: 80%;
  }
  #version-info>p {
    color: #eee;
    line-height: 1em;
  }
  #nav-list {
    display: flex;
    flex-direction: column;
  }
  .nav-item>a, #submenu-summary {
    display: block;
    line-height: 3em;
    padding-left: 2em;
    color: #eee;
  }
  .submenu-link {
    padding-left: 3em;
    line-height: 2.5em;
    font-size: 90%;
  }
  a:hover, #submenu-summary:hover {
    background-color: #0077dd;
    text-decoration: none;
    color: #eee;
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