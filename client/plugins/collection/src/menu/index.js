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
      name: "二维码",
      click: () => {
        redirect(ctx)
        store.openUrl = "http://www.wwei.cn/"
      }
    },
    {
      name: "Json 格式化",
      click: () => {
        redirect(ctx)
        store.openUrl = "https://www.json.cn/"
      }
    },
  ]

  await next()
}