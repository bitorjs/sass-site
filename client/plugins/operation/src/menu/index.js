export default async (ctx, next) => {
  const store = ctx.$store.state.operation;
  ctx.$store.state.main.sideMenu = [
    {
      name: '接口Swagger',
      click: () => { }
    },
    {
      name: '数据库监控',
      click: () => { }
    },
    {
      name: '配置中心',
      click: () => { }
    },
    {
      name: '服务注册',
      click: () => { }
    },
    {
      name: '应用中心',
      click: () => { }
    },
  ]

  await next()
}