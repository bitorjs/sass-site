export default app => {
  app.on('error', (err, ctx) => {
    // if (401 == err.status) {
    //   ctx.status = 401;
    //   ctx.body = 'Protected resource, use Authorization header to get access\n';
    // } else {
    //   throw err;
    // }
    console.log('.....error...', err)
  });
}