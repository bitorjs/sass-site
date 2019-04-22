import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';

@Controller('/operation/deploy')
@Middleware('login')
export default class {
  @Post('/project-users')
  async getProjectUsers(ctx) {
    return ctx.$ajax.post('/deploy/project/users', ctx.body);
  }

  @Post('/set-project-users')
  async setProjectUsers(ctx) {
    return ctx.$ajax.post('/deploy/project/set-users', ctx.body);
  }

}