<template>
  <div id="app">
    <div>
      <router-link to='/section2'>section2</router-link>
    </div>
    <div>
      <router-view />
    </div>
    <div>
      <router-link to='/'>Top</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
