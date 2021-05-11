export const state = () => ({
  number: 0,
  price: 0
});

export const mutations = {
  plusCount1: function (state) {
    state.number ++;
    state.price += 100
  },
  plusCount2: function (state) {
    state.number ++;
    state.price += 300
  },
  plusCount3: function (state) {
    state.number ++;
    state.price += 500
  },

  resetCount: function (state) {
    state.number = 0;
    state.price = 0
  }
}

