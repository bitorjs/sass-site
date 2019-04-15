export default app => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '资源管理',
      click: () => {
        app.redirect('/assets')
      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}