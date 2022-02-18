<script lang="ts">
  import { defineComponent } from "vue"
  
  export default defineComponent({

  })
</script>

<template>
  <header>
    <div id="logo">
      <img src="../../images/cloud.png" alt="Cloud Image">
      <h1>Metal Cloud</h1>
    </div>
    <div id="user-menu">
      <div id="username">john_doe	&#128025;</div>
      <div id="user-settings-dropdown">
        <div class="dropdown-item"><p>Profile</p></div>
        <div class="dropdown-item"><p>Logout</p></div>
      </div>
    </div>
  </header>
</template>

<style>
  img {
    width: 5em;
    height: 6em;
    margin-right: 1em;
  }
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666;
  }
  #logo {
    display: flex;
    width: 18em;
    justify-content: space-around;
    margin: auto 0 0 2em;
  }
  #username:hover + #user-settings-dropdown, #user-settings-dropdown:hover {
    display: flex;
    flex-direction: column;
  }
  #user-settings-dropdown {
    display: none;
    position: absolute;
    border: 1px solid #666;
    box-shadow: 2px 1px 10px #888;
    border-radius: 5px;
    background-color: #fefefe;
    width: 100%;
  }
  #user-menu {
    position: relative;
    margin: 3em 2em auto 0;
    cursor: pointer;
    width: 8em;
  }
  #username {
    display: flex;
    justify-content: center;
    font-weight: 500;
    color: #0077dd;
    padding-bottom: .7em;
  }
  .dropdown-item:hover {
    background-color: #eee;
  }
  .dropdown-item>p {
    line-height: .5em;
  }
  .dropdown-item {
    border-radius: inherit;
  }
</style>

