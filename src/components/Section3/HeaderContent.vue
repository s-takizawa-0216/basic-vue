<template>
  <div style='color: blue;'>
    <slot name='content'>※親から何も来ない場合に表示</slot>
  </div>
</template>

<script>


export default { 
  name: 'HeaderContent',
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
</style>
