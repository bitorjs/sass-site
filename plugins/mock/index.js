export default app => {
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}