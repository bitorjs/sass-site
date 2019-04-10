export default app => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '私有包管理',
      click: () => {
        app.redirect('/cnpm')
        app.ctx.$store.state.main.sideMenu = []
      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));

}