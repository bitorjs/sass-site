export default async (ctx, next) => {
  ctx.$store.state.main.sideMenu = [
    {
      name: '组织管理',
      children: [
        {
          name: '用户管理',
          click: () => {
            ctx.app.redirect('/system/users')
          }
        },
        {
          name: '单位管理',
          click: () => {
          }
        },
        {
          name: '部门管理',
          click: () => {
          }
        },
      ]
    },

    {
      name: '权限管理',
      children: [
        {
          name: '角色管理',
          click: () => {
          }
        },
        {
          name: '二级管理员',
          click: () => {
          }
        },
        {
          name: '超级管理员',
          click: () => {
          }
        },
      ]
    },

    {
      name: '系统设置',
      children: [
        {
          name: '菜单管理',
          click: () => {
          }
        },
        {
          name: '模块管理',
          click: () => {
          }
        },
        {
          name: '参数设置',
          click: () => {
          }
        },
        {
          name: '字典管理',
          click: () => {
          }
        },
      ]
    },

  ]

  await next()
}