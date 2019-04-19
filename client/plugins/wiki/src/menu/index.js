export default async (ctx, next) => {
  // const store = ctx.$store.state.wiki;
  // store.editable = true;
  let data = [];
  if (ctx.$store.state.wiki.typeList && ctx.$store.state.wiki.typeList.length == 0) {
    const list = await ctx.$post('/wiki/types');
    data = list.data;
    ctx.$store.state.wiki.typeList = data;
  } else {
    data = ctx.$store.state.wiki.typeList;
  }



  let menu = [
    {
      name: '新建文档',
      click: () => {
        ctx.app.redirect("/wiki/add")
      }
    },
  ];

  data.forEach(item => {
    menu.push({
      name: `${item.title}`,
      click: () => {
        ctx.app.redirect(`/wiki/type/${item.id}`)
      }
    })
  });


  ctx.$store.state.main.sideMenu = menu;
  return await next()
}