export default app => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '运维管理',
      click: () => {
        app.redirect('/operation')

      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}