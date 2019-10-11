const sub = (x, y) => { return x - y }

const adder = new Vue({
  el: '#checker',
  data: {
    guest: 'Emmett'
  },
  computed: {
    result: function () {
      const maxlength=250
      const i = (this.guest).length

      return `${this.guest}, you can still type ${sub(maxlength, i)} characters.`
    }
  }
})