<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from '../../components/Section3/Login'

export default { 
  name: 'LoginView',
  data: function() {
    return {
    }
  },
  components:{
    Login,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
