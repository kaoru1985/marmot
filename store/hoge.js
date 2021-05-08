export const state = () => ({
  number: 0,
  price: 0
})

export const mutations = {
  plusCount: function (state) {
    state.number += 1;
    state.price += 100
  },

  resetCount: function (state) {
    state.number = 0;
    state.price = 0
  }
}

