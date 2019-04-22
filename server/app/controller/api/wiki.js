import {
  Controller,
  Get,
  Post,
  Put,
  Middleware
} from 'bitorjs';


@Controller('/wiki')
export default class {

  @Post('/detail')
  async detail(ctx) {
    const data = await ctx.$service.wiki.getDetail(ctx.request.body);

    return ctx.body = {
      code: '000001',
      data,
      msg: ''
    }
  }

  @Post('/add/type')
  async addType(ctx) {
    const data = await ctx.$service.wiki.addType(ctx.request.body);

    return ctx.body = {
      code: '000001',
      data,
      msg: ''
    }
  }

  @Post('/add/article')
  async addArticle(ctx) {
    const data = await ctx.$service.wiki.addArticle(ctx.request.body);

    return ctx.body = {
      code: '000001',
      data,
      msg: ''
    }
  }

  @Post('/types')
  async types(ctx) {
    const data = await ctx.$service.wiki.getTypeList(ctx.request.body);
    return ctx.body = {
      code: '000001',
      data,
      msg: ''
    }
  }

  @Post('/list')
  async login(ctx, next) {

    const data = await ctx.$service.wiki.getList(ctx.request.body);
    console.log(data)
    return ctx.body = {
      code: '000001',
      data: data,
      msg: ''
    }
  }
}