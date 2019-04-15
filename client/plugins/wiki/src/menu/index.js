export default async (ctx, next) => {
  // const store = ctx.$store.state.wiki;
  // store.editable = true;


  ctx.$store.state.main.sideMenu = [
    {
      name: '新建文档',
      click: () => {
        ctx.app.redirect("/wiki/add")
      }
    },
    {
      name: '入职指南',
      click: () => {
        ctx.app.redirect("/wiki/type/entry")
      }
    },
    {
      name: '技术分享',
      click: () => {
        ctx.app.redirect("/wiki/type/tech")
      }
    },
    {
      name: '开发规范',
      click: () => {
        ctx.app.redirect("/wiki/type/rule")
      },
      // children: [
      //   {
      //     name: '前端规范',
      //     click: () => { }
      //   },
      //   {
      //     name: '接口规范',
      //     click: () => { }
      //   }
      // ]
    },
  ]

  return await next()
}