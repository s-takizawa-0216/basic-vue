<template>
  <div :style="errorMessageStyle">
    <ul>
      <li v-for='item in items' :key='item.name'>
        {{ item.name }} の個数 : 
        <input type='number' @change='item.quantity = $event.target.value' :value='item.quantity' min='0'>
      </li>
    </ul>
    <ul>
      <li v-for='item in items' :key='item.name'>
        {{ item.name }} : {{ item.price }} * {{ item.quantity }} = 
        {{ item.price * item.quantity | numberWithDelimiter }} 円
      </li>
    </ul>
    <p>合計金額(税抜き) {{ totalPrice }} 円</p>
    <p>合計金額(税込み) {{ totalPriceWithTax }} 円</p>
    <p v-show="!canBuy">
      {{ 1000 | numberWithDelimiter }} 円以上からご購入頂けます。
    </p>
  </div>
</template>

<script>
export default { 
  name: 'Section2',
  data: function() {
    return {
      items:[
            {
              name: 'pencil',
              price: 300,
              quantity: 0,
            },
            {
              name: 'note',
              price: 400,
              quantity: 0,
            },
            {
              name: 'eraser',
              price: 300,
              quantity: 0,
            }
      ]
    }
  },
  computed: {
    totalPrice: function() {
      var sum = 0;
      for(var i = 0; i < this.items.length; i++) {
        sum += this.items[i].price * this.items[i].quantity;
      }
      return sum;
    },
    totalPriceWithTax: function() {
      var sum = 0;
      for(var i = 0; i < this.items.length; i++) {
        sum += this.items[i].price * this.items[i].quantity;
      }
      return Math.floor(sum * 1.10);
    },
    canBuy: function() {
      return 1000 <= this.totalPrice //合計金額が1000円以上なら購入可能とする
    },
    errorMessageStyle: function() {
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'red',
      }
    }
  },

  filters: {
    numberWithDelimiter: function(value){
      if(!value){
        return 0;
      } else{
        return value.toLocaleString();
      }
    },
  },

  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
