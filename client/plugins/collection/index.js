export default app => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '网址收藏',
      click: () => {
        app.redirect('/collection')
      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}