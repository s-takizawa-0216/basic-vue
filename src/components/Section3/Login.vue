<template>
  <div>
    <div>
      <input type='text' placeholder='login ID' v-model='userid'>
    </div>
    <div>
      <input type='text' placeholder="password" v-model='password'>
    </div>
    <button @click="login()">Log in </button>
  </div>
</template>

<script>
var auth = {
  login: function(id, pass) {
    window.alert('userid:' + id + '\n' + 'password:' + pass)
  }
}
export default { 
  name: 'Login',
  data: function() {
    return {
      userid: '',
      password: '',
    }
  },
  methods: {
    login: function() {
      auth.login(this.userid, this.password);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
