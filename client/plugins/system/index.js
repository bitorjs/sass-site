export default app => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '系统管理',
      click: () => {
        app.redirect('/system')

      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}