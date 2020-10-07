<template>
  <div>
    {{ counter }}個 <button @click="addToCart">追加</button>
  </div>
</template>

<script>
export default { 
  name: 'CounterButton',
  data: function() {
    return {
      counter: 0,
    }
  },
  methods: {
    addToCart: function() {
      this.counter += 1;
      this.$emit('increment');
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
