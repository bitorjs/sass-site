import "normalize.css";
import Vue from 'vue';
import Application from 'bitorjs';
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import main from './src/view';
Vue.config.productionTip = false
Vue.use(Antd)

const client = (app) => {

  app.on('ready', async () => {

    let r = await app.ctx.$service.main.test()
    console.log('r ==', r)
  })
  app.watch(require.context('./config', false, /\.js$/))
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));


}

new Application({}, main).start(client)