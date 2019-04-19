function redirect(ctx, path) {
  ctx.app.redirect(path || '/collection')
}

export default async (ctx, next) => {
  let data = [];
  const store = ctx.$store.state.collection;
  if (store.list && store.list.length == 0) {
    const list = await ctx.$post('/collection/list');
    data = list.data;
    store.list = data;
  } else {
    data = store.list;
  }

  let menu = [
    {
      name: '新增收藏',
      click: () => {
        store.showAdd = true;
      }
    },
  ];

  data.forEach(item => {
    menu.push({
      name: `${item.title}`,
      click: () => {
        redirect(ctx)
        store.openUrl = item.url;
      }
    })
  });


  ctx.$store.state.main.sideMenu = menu;
  return await next()
}