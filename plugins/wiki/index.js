import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
export default app => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '文档管理',
      click: () => {
        app.redirect('/wiki');

        app.ctx.$store.state.main.sideMenu = []

      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}