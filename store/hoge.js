export const state = () => ({
  number: 0,
  price: 0
});

export const mutations = {
  plusCount: function (state,amount) {
    state.number ++;
    state.price += amount;
  },
  resetCount: function (state) {
    state.number = 0;
    state.price = 0
  }
}
