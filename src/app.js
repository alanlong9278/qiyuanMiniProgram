import { createApp } from 'vue'
import { createUI } from 'taro-ui-vue3'

// 引用全部组件样式
import 'taro-ui-vue3/dist/style/index.scss'

import store from './store'

import './app.styl'


const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

const tuv3 = createUI()
App.use(store)

export default App
