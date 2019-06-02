import {
  Controller,
  Get,
  Post
} from 'bitorjs-decorators';

@Controller('/')
export default class {

  @Get('/test/:name')
  async g(ctx, next) {
    console.log(ctx.params, ctx.request.body, ctx.body, ctx.request.query, ctx.query)
    return ctx.body = '<h1>404 Not Found</h1>'
    // ctx.redirect('/');

  }

  @Get('*')
  async c(ctx, next) {
    ctx.response.body = '<h1>404 Not Found</h1>'
    // ctx.redirect('/');

  }
}