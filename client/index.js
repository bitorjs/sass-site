import "normalize.css";
import Vue from 'vue';
import Application from 'bitorjs/vue';
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import main from './src/view';
Vue.config.productionTip = false
Vue.use(Antd)

const client = (app) => {

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // `entry` is a PerformanceEntry instance.
      console.log(entry.entryType);
      console.log(entry.startTime);
      console.log(entry.duration);
    }
  });

  // register observer for long task notifications
  observer.observe({ entryTypes: ["paint"] });

  app.on('ready', async () => {

    // let r = await app.ctx.$service.main.test()
    // console.log('r ==', r)
  })
  app.watch(require.context('./config', false, /\.js$/))
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));


}

new Application({}, main).start(client)