export default app => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '系统设置',
      click: () => {
        app.redirect('/system')
        app.ctx.$store.state.main.sideMenu = [
          // {
          // name: '系统设置',
          // click: () => { },
          // children: [
          {
            name: '用户管理',
            click: () => {
              app.redirect('/system/users')
            }
          },
          {
            name: '角色管理',
            click: () => {
              app.redirect('/system/roles')
            }
          },
          {
            name: '授权管理',
            click: () => {
              app.redirect('/system/rights')
            }
          },
          {
            name: '菜单管理',
            click: () => {
              app.redirect('/system/menus')
            }
          },
          {
            name: '项目管理',
            click: () => {
              app.redirect('/system/products')
            }
          },
          // ]
          // }
        ]
      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}