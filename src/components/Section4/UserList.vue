<template>
  <div>
    <p>ユーザー一覧ページです</p>
    <div class='loading' v-if='loading'>読み込み中</div>
    <div class='error' v-if='error'>{{ error }}</div>
    <div v-for='user in users' :key='user.id'>
      {{ user.name }}
    </div>
    <div>
      <router-link to='/section4/top'>セクション4のトップへ</router-link>
    </div>
  </div>
</template>

<script>
var getUsers = function(callback) {
  setTimeout(function(){
    callback(null, [
      {
        id: 1,
        name: 'taro'
      },
      {
        id: 2,
        name: 'jiro'
      }
    ], 1000)
  })
}

export default { 
  name: 'UserList',
  data: function() {
    return {
      loading: false,
      users: Array,
      error: null,
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      this.loading = true;
      getUsers(function(error, users) {
        this.loading = false;
        if(error) {
          this.error = error;
        } else{
          this.users = users
        }
      }.bind(this))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
