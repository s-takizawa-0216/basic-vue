<template>
  <div>
    <ol>
      <li v-for="fruit in fruitsItems" :key="fruit.name">
        {{ fruit.name }}
      </li>
      合計: {{ total }} 個
    </ol>
    <CounterButton @increment="incrementCartStatus()" />
  </div>
</template>

<script>
import CounterButton from './CounterButton'

export default { 
  name: 'FruitsList',
  data: function() {
    return {
      total: 0,
    }
  },
  methods: {
    incrementCartStatus: function() {
      this.total += 1;
    }
  },
  props:{
    fruitsItems: {
      type: Array,
      required: true,
    }
  },
  components:{
    CounterButton,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol {
  list-style: none;
}
</style>
