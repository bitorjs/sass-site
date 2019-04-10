export default app => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '数据请求代理',
      click: () => {
        app.redirect('/post-man')
        app.ctx.$store.state.main.sideMenu = []
      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}