import { wrapFunctional } from './utils'

export { default as Hoge } from '../../components/Hoge.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyHoge = import('../../components/Hoge.vue' /* webpackChunkName: "components/hoge" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
