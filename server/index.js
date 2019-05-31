// import KoaAppliction from './inject';
import KoaAppliction from 'bitorjs';
import koaBody from 'koa-body'; //koa-bodyparser内置Request Body的解析器, 支持x-www-form-urlencoded, application/json等格式的请求体，但不支持form-data的请求体,，需要借助 formidable 这个库，也可以直接使用 koa-body 支持multipart，urlencoded和json请求体
import koaStatic from 'koa-static'; // 配置静态文件服务的中间件
import koaJWT from 'koa-jwt'; //JWT(Json Web Tokens)
// import koaHelmet from 'koa-helmet'; //增加如Strict-Transport-Security, X-Frame-Options, X-Frame-Options等网络安全HTTP头
import koaCompress from 'koa-compress'; // 启用类似Gzip的压缩技术减少传输内容
import koaCors from 'koa2-cors';
import path from 'path';
import koaProxy from 'koa-proxies';


const cwd = process.cwd();
let client = app => {
  app.on('error', (err, ctx) => {
    // if (401 == err.status) {
    //   ctx.status = 401;
    //   ctx.body = 'Protected resource, use Authorization header to get access\n';
    // } else {
    //   throw err;
    // }
    console.log('.....error...', err)
  });

  // app.use((ctx, next)=>{

  // })

  app.use(function (ctx, next) {

    return next().catch((err) => {
      if (401 == err.status) {
        ctx.status = 401;
        ctx.body = err;
        // {
        //   code: '10002',
        //   msg: 'Protected resource, use Authorization header to get access\n'
        // };
      } else {
        throw err;
      }
    });
  });

  // app.use(async (ctx, next) => {
  //   const token = ctx.header.authorization  // 获取jwt
  //   let payload
  //   if (token) {
  //     payload = await jwt.verify(token.split(' ')[1], '密钥')  // // 解密，获取payload
  //     console.log(payload)
  //     // ctx.body = {
  //     //   payload
  //     // }
  //   } else {
  //     // ctx.body = {
  //     //   message: 'token 错误',
  //     //   code: -1
  //     // }
  //   }

  //   await next()
  // })

  // app.use(koaHelmet());
  app.use(koaCors({
    // origin: function (ctx) {
    //   if (ctx.url === '/test') {
    //     return false;
    //   }
    //   return '*';
    // },
    // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    // maxAge: 5,
    // credentials: true,
    allowMethods: ['GET,HEAD'],
    // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  }));
  // app.use(koaJWT({
  //   secret: '密钥'
  // }).unless({
  //   path: ['/login', '/reg-user', '/test/ss']
  // }));
  app.use(koaStatic(path.join(cwd, 'web')));
  app.use(koaBody({
    multipart: true, // 支持文件上传
    // encoding: 'gzip',
    // jsonStrict: false, // for json
    parsedMethods: ['POST', 'PUT', 'PATCH'],
    formidable: {
      uploadDir: path.join(cwd, 'web/upload/'), // 设置文件上传目录
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
      onFileBegin: (name, file) => { // 文件上传前的设置
        if (file.size === 0) return false;
        console.log(name, file)
        // 获取文件后缀
        const ext = getUploadFileExt(file.name);
        // 最终要保存到的文件夹目录
        const dirName = getUploadDirName();
        const dir = path.join(cwd, `web/upload/${dirName}`);
        // 检查文件夹是否存在如果不存在则新建文件夹
        checkDirExist(dir);
        // 获取文件名称
        const fileName = getUploadFileName(ext);
        // 重新覆盖 file.path 属性
        file.path = `${dir}/${fileName}`;
        app.context.uploadpath = app.context.uploadpath ? app.context.uploadpath : {};
        app.context.uploadpath[name] = `${dirName}/${fileName}`;
      },
      onError: (err) => {
        console.log(err);
      }
    }
  }));
  app.use(koaCompress({
    filter: function (content_type) {
      return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  }));

  console.log('use proxy')
  const proxy = {
    '/-/npm/v1/security/audits': {
      target: 'https://registry.npmjs.org',
      changeOrigin: true,
    }
  }

  for (const key in proxy) {
    if (proxy.hasOwnProperty(key)) {
      const item = proxy[key];
      app.use(koaProxy(key, {
        target: item.target,
        changeOrigin: item.changeOrigin,
        rewrite: item.pathRewrite,
        logs: true
      }))
    }
  }

  app.on('ready', async () => {
    // let r = await app.$store.test.get('hi');
    // let t = await app.$store.up.get('hi');
    // app.$store.test.hi = '--==';
    let r = await app.$store.test.hi;
    let t = await app.$store.up.hi;
    console.log('@@@@@', r, t)
  })
  // app.config(config)
  app.watch(require.context("./config", true, /.*\.js$/));
  app.watch(require.context("./app", true, /.*\.js$/));


}

new KoaAppliction().start(client, 1030);