<template>
  <div>
    <FruitsList 
      :fruitsItems=fruitsItems>
    </FruitsList>
  </div>
</template>

<script>
import FruitsList from './FruitsList'

export default { 
  name: 'Fruits',
  data: function() {
    return {
      fruitsItems: [
        {name: 'apple'},
        {name: 'orange'}
      ]
    }
  },
  components:{
    FruitsList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
