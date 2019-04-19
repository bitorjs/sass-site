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
  constructor() {

  }

  @Post("/groups")
  async groups() {
    // return gitlab.Groups.all();
    return {}
  }

  @Post("/projects")
  async projects() {
    console.log('----')
    return gitlab.Projects.all({ maxPages: 2 });
  }

  @Post('/users')
  async users() {
    return gitlab.Users.all();
  }


}


// yHuhtbPp62Rm7yfxQidx

// 帮助文档入口：{gitlab_host}/help/api/README.md；或者点击主菜单“Help” -> 点击Documentation底下的API进入

