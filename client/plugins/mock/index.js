export default app => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '数据模拟',
      click: () => {
        app.redirect('/mock')
        app.ctx.$store.state.main.sideMenu = []
      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}