<script lang="ts">
  import TopBar from '../components/TopBar.vue'
  import { defineComponent } from 'vue'

 

  export default defineComponent({
    components: {
      TopBar
    },
    methods: {
      toggleMenu(event: any) {
        const menu = event.target.nextElementSibling
        if (menu.style.display === 'none') {
          menu.style.display = 'block'
        } else {
          menu.style.display = 'none'
        }
      }
    },
    created() {
      document.body.addEventListener('click', () => {
        const elements: Element[] = Array.from(document.getElementsByClassName('actions-dropdown'))
        elements.forEach((element: Element) => {
          (element as HTMLElement).style.display = 'none'
        })
      })
    }
  })
</script>

<template>
  <div id="view">
    <TopBar title="Kubernetes" :values="true"/>
    <div id="content">
      <table id="cluster-table">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Kubernetes Version</th>
          <th>Nodes</th>
          <th>Uptime</th>
          <th>Actions</th>
        </tr>
        <tr id="appollo16-list">
          <td style="color: #22aa22;">&#9679;</td>
          <td>apollo16</td>
          <td>K3s-v1.20.0-k3s1</td>
          <td>1</td>
          <td>2 days</td>
          <td>
            <div class="actions-menu">
              <div class="actions-button" @click.stop="toggleMenu">&#10998;</div>
              <router-link tag="div" class="actions-dropdown" to="/ClusterDetails/appollo16" style="display: none;">
                <p>Details</p>
              </router-link>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
  #view {
    height: 100%;
  }
  #content {
    width: 90%;
    height: 80%;
    border: 1px solid #ccc;
    margin: 1em auto 0 auto;
    border-radius: 5px;
  }
  #cluster-table {
    width: 100%;
    text-align: center;
  }
  table, tr, td {
    border-bottom: 1px solid #ccc;
    border-collapse: collapse;
  }
  tr {
    height: 4em;
  }
  .actions-menu {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin: auto;
    position: relative;
  }
  .actions-button {
    width: 2em;
  }
  .actions-button:hover {
    background-color: #eee;
    border-radius: 2px;
  }
  .actions-dropdown {
    position: absolute;
    top: 1.8em;
    background-color: #fefefe;
    width: 8em;
    border: 1px solid #666;
    border-radius: 5px;
  }
  .actions-dropdown:hover {
    background-color: #eee;
    color: inherit;
  }
  .actions-dropdown>p {
    line-height: .5em;
  }
</style>