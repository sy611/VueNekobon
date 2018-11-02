var app = new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, name: 'スライム', hp: 40},
      { id: 2, name: 'ゴブリン', hp: 200},
      { id: 3, name: 'ドラゴン', hp: 500},
    ]
  },
  // created: function() {
  //   this.list.forEach(function(item) {
  //     this.$set(item, 'active', false);
  //   }, this);
  // },
  methods: {
    doAttack: function(index) {
      console.log(index);
      this.list[index].hp -= 10;
    }
  }
  
});