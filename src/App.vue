<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">

</style>
