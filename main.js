var app = new Vue({
  el: '#app',
  data: {
    name: 'キマイラ',
    list: [
      { id: 1, name: 'スライム', hp: 100},
      { id: 2, name: 'ゴブリン', hp: 200},
      { id: 3, name: 'ドラゴン', hp: 500},
    ]
  },
  created: function() {
    this.list.forEach(function(item) {
      this.$set(item, 'active', false);
    }, this);
  },
  methods: {
    doAdd: function() {
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a: b.id;
      }, 0);
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      });
    },
    doRemove: function(index) {
      this.list.splice(index, 1);
    },
    addKing: function() {
      this.$set(this.list, 0, { id: 1, name: 'キングスライム', hp: 500});
    }
  }
  
});