export default async (ctx, next) => {
  ctx.$store.state.main.sideMenu = [
    // {
    //   name: '系统设置',
    //   children: [
    {
      name: '菜单管理',
      click: () => {
        ctx.app.redirect('/system/menus')
      }
    },
    //   ]
    // },
    // {
    //   name: '权限管理',
    //   children: [
    {
      name: '功能管理',
      click: () => {
      }
    },
    {
      name: '角色管理',
      click: () => {
        ctx.app.redirect('/system/roles')
      }
    },
    {
      name: '角色权限管理',
      click: () => {
      }
    },
    {
      name: '用户角色管理',
      click: () => {
        ctx.app.redirect('/system/users')
      }
    },
    //   ]
    // },
    // {
    //   name: '组织架构',
    //   children: [
    {
      name: '部门管理',
      click: () => {
      }
    },
    {
      name: '职位管理',
      click: () => {
      }
    },
    //   ]
    // },
    {
      name: '用户管理',
      click: () => {
        ctx.app.redirect('/system/users')
      }
    },

  ]

  await next()
}