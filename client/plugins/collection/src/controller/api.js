import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';


@Controller('/collection')
@Middleware('login')
export default class {
  @Post('/add')
  async add(ctx) {
    return await ctx.$service.collection.add(ctx.body);
  }

  @Post('/list')
  async list(ctx) {
    return await ctx.$service.collection.list(ctx.body);
  }
}