import BillingSettingsView from '@/views/BillingSettingsView.vue'
import ClusterDetailsView from '@/views/ClusterDetailsView.vue'
import CreateClusterView from '@/views/CreateClusterView.vue'
import GeneralSettingsView from '@/views/GeneralSettingsView.vue'
import IpView from '@/views/IpView.vue'
import KubernetesView from '@/views/KubernetesView.vue'
import VolumesView from '@/views/VolumesView.vue'
import DashboardView from '../views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/Kubernetes',
      name: 'kubernetes',
      component: KubernetesView
    },
    {
      path: '/Volumes',
      name: 'volumes',
      component: VolumesView
    },
    {
      path: '/IpAddresses',
      name: 'ip-addresses',
      component: IpView
    },
    {
      path: '/GeneralSettings',
      name: 'general-settings',
      component: GeneralSettingsView
    },
    {
      path: '/BillingSettings',
      name: 'billing-settings',
      component: BillingSettingsView
    }, 
    { 
      path: '/CreateCluster',
      name: 'create-cluster',
      component: CreateClusterView
    },
    {
      path: '/ClusterDetails',
      name: 'cluster-details',
      component: ClusterDetailsView
    }
  ]
})

export default router
