import {
  Controller,
  Get,
  Post,
  Put,
  Middleware
} from 'bitorjs-decorators';

@Controller('/deploy')
export default class {

  @Post('/project/users')
  async getProjectUsers(ctx) {
    ctx.body = await ctx.$service.deploy.getProjectUsers(ctx.request.body);
  }

  @Post('/project/set-users')
  async setProjectUsers(ctx) {
    ctx.body = await ctx.$service.deploy.setProjectUsers(ctx.request.body);
  }


}
