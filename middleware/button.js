export default function ({store,route}) {
    console.log(route.path);
    store.commit('fuga/setButton',route.path);
}