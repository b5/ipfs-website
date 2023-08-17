import type { RouterConfig } from '@nuxt/schema'
import { createWebHistory } from 'vue-router'
import { createBase } from 'ipfs-base'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  history: base => process.client ? createWebHistory(createBase(base === '.' ? '/' : base)) : null,
}
