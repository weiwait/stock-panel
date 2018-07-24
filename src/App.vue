<template>
  <div id="app">
    <StockPanel/>
  </div>
</template>

<script>
import StockPanel from './components/StockPanel.vue'

export default {
  name: 'app',
  components: {
    StockPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
