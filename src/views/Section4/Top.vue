<template>
  <nav>
    <div class='link'>
      <router-link to='/section4/top'>セクション4のTopへ</router-link>
    </div>
    <div class='link'>
      <router-link to='/section4/users'>ユーザー一覧</router-link>
    </div>
    <router-view />
  </nav>
</template>

<script>

export default { 
  name: 'Top',
  data: function() {
    return {
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 10px;
}

</style>
