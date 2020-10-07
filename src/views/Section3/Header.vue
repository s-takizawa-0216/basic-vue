<template>
  <div>
    <HeaderItem>
      <h1 slot='header'>夏の果物</h1>
    </HeaderItem>
    <HeaderContent>
      <ul slot='content'>
        <li>スイカ</li>
        <li>マンゴー</li>
      </ul>
    </HeaderContent>
  </div>
</template>

<script>
import HeaderItem from '../../components/Section3/HeaderItem'
import HeaderContent from '../../components/Section3/HeaderContent'

export default { 
  name: 'Header',
  data: function() {
    return {
    }
  },
  components:{
    HeaderItem,
    HeaderContent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
