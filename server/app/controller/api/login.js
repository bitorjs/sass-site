import {
  Controller,
  Get,
  Post,
  Put,
  Middleware
} from 'bitorjs';
import jwt from 'jsonwebtoken';


@Controller('/')
export default class {

  @Post("/reg-user")
  async reg(ctx, next) {

    const data = await ctx.$service.login.register(ctx.request.body);

    return ctx.body = {
      code: '000001',
      data,
      msg: '注册成功'
    }
  }

  @Post('/login')
  async login(ctx, next) {
    const data = await ctx.$service.login.login(ctx.request.body);
    let body = ctx.request.body;
    // ctx.type = 'application/json;charset=UTF-8';
    const token = jwt.sign({
      name: body.username,
      passwd: body.passwd
    }, '密钥', {
        expiresIn: '2h'
      });
    console.log('.... post login', ctx.status)

    if (data) {
      return ctx.body = {
        code: '000001',
        data,
        token: token,
        msg: '登录成功'
      }
    } else {
      return ctx.body = {
        code: '000002',
        data,
        msg: '登录失败'
      }
    }

  }
}