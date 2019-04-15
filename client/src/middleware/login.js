export default async (ctx, next) => {
  if (!ctx.user) {
    return await next()
  } else {
    ctx.app.redirect('/login')
  }
}