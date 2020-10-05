<template>
  <div id="app">
    <div class='link__wrapper'>
      <router-link to='/section2' class='link'>section2</router-link>
      <router-link to='/section3' class='link'>section3</router-link>
    </div>
    <div>
      <router-view />
    </div>
    <div class='link__wrapper'>
      <router-link to='/' class='link'>Top</router-link>
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

.link__wrapper {
  margin: 10px;
}

.link {
  padding: 10px;
}
</style>
