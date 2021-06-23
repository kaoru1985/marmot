export const state = () => ({
  buttonName: 'news',
  buttonUrl: '/posts',
});

export const mutations = {
  setButton: function (state) {
    state.buttonName = 'shop';
    state.buttonUrl = '/';
  }
};
