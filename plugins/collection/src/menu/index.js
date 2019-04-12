function redirect(ctx, path) {
  ctx.app.redirect(path || '/collection')
}

export default async (ctx, next) => {
  const store = ctx.$store.state.collection;
  ctx.$store.state.main.sideMenu = [
    {
      name: '新增收藏',
      click: () => {
        // redirect(ctx, "/collection/add")
        store.showAdd = true;
      }
    },
    {
      name: "百度",
      click: () => {
        redirect(ctx)
        store.openUrl = "https://www.baidu.com"
      }
    },
    {
      name: "Json 格式化",
      click: () => {
        redirect(ctx)
        store.openUrl = "https://www.json.cn/"
      }
    },
    {
      name: "发布系统",
      children: [
        {
          name: '瓦力一',
          click: () => {
            redirect(ctx)
            store.openUrl = "http://walle.adatafun.com/"
          }
        },
        {
          name: "瓦力二",
          click: () => {
            redirect(ctx)
            store.openUrl = "http://walle1.adatafun.com/"
          }
        },
      ]
    },
  ]

  await next()
}