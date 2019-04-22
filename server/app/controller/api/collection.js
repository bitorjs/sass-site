import {
  Controller,
  Get,
  Post,
  Put,
  Middleware
} from 'bitorjs';

import jwt from 'jsonwebtoken';

@Controller('/collection')
export default class {

  @Post('/add')
  async add(ctx) {
    const token = ctx.header.authorization  // 获取jwt
    let payload
    if (token) {
      payload = await jwt.verify(token.split(' ')[1], '密钥')  // // 解密，获取payload
      console.log(payload)
    }

    const data = await ctx.$service.collection.add(ctx.request.body, payload);

    return ctx.body = {
      code: '000001',
      data,
      msg: '添加成功'
    }
  }

  @Post('/list')
  async list(ctx) {
    const token = ctx.header.authorization  // 获取jwt
    let payload
    if (token) {
      payload = await jwt.verify(token.split(' ')[1], '密钥')  // // 解密，获取payload
      console.log(payload)
    }

    const data = await ctx.$service.collection.list(payload);

    return ctx.body = {
      code: '000001',
      data,
      msg: '获取成功'
    }
  }

}