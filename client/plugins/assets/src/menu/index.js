
export default async (ctx, next) => {
  ctx.$store.state.main.sideMenu = [

  ]

  return await next()
}