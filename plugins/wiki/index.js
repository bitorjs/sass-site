import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
export default app => {
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}