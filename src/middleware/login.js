export default (ctx, next) => {
  if (!ctx.user) {
    next()
  } else {
    ctx.app.redirect('/login')
  }
}