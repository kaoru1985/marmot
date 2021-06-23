export const state = () => ({
  buttonName: 'news',
  buttonUrl: '/posts',
});

export const mutations = {
  setButton: function (state,url) {
    console.log(url);
    if ( url.match(/posts/)) {
      state.buttonName = 'shop';
      state.buttonUrl = '/';
    }else{
      state.buttonName = 'news';
      state.buttonUrl = '/posts';
    }

    // if (this.$route.path == url) {
    // }
  },
};
