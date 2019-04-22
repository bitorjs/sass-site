import {
  Controller,
  Get,
  Post,
  Put,
  Middleware
} from 'bitorjs-decorators';

import Gitlab from 'gitlab';
const gitlab = new Gitlab({
  url: 'http://gitlab.adatafun.com', // Defaults to https://gitlab.com
  token: 'yHuhtbPp62Rm7yfxQidx' // Can be created in your profile.
})
@Controller('/gitlab')
export default class {

  @Post("/groups")
  async groups(ctx) {
    // return 
    ctx.body = await gitlab.Groups.all();
  }

  @Post("/projects")
  async projects(ctx) {
    ctx.body = await gitlab.Projects.all();
  }

  @Post("/user-projects")
  async userprojects(ctx) {
    // ctx.body = await gitlab.Projects.all();
    ctx.body = await gitlab.Users.projects(ctx.request.body.id);
    // ctx.body = await gitlab.Branches.all(393);
    // ctx.body = await gitlab.Commits.all(393);
  }

  @Post("/search-projects")
  async search_projects(ctx) {
    // ctx.body = await gitlab.Projects.all();
    ctx.body = await gitlab.Projects.search(ctx.request.body.name);
    // ctx.body = await gitlab.Branches.all(393);
    // ctx.body = await gitlab.Commits.all(393);
  }

  @Post("/project-branchs")
  async projectbranchs(ctx) {
    // ctx.body = await gitlab.Projects.all();
    ctx.body = await gitlab.Branches.all(ctx.request.body.id);
    // ctx.body = await gitlab.Branches.all(393);
    // ctx.body = await gitlab.Commits.all(393);
  }

  @Post('/users')
  async users(ctx) {
    ctx.body = await gitlab.Users.all();
    // ctx.body = await gitlab.Users.current();
    // ctx.body = await gitlab.Projects.Branches.all();
  }


}


// yHuhtbPp62Rm7yfxQidx

// 帮助文档入口：{gitlab_host}/help/api/README.md；或者点击主菜单“Help” -> 点击Documentation底下的API进入

