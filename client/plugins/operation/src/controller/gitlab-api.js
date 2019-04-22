import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';

@Controller('/operation/gitlab')
@Middleware('login')
export default class {
  @Post('/groups')
  async groups() {
    return this.ctx.$ajax.post('/gitlab/groups', null, {
      timeout: 6000
    });
  }

  @Post('/projects')
  async projects(ctx) {
    return this.ctx.$ajax.post('/gitlab/projects', ctx.body, {
      timeout: 18000
    });
  }

  @Post('/user-projects')
  async userprojects(ctx) {
    return this.ctx.$ajax.post('/gitlab/user-projects', ctx.body, {
      timeout: 12000
    });
  }

  @Post('/project-branchs')
  async projectbranchs(ctx) {
    return this.ctx.$ajax.post('/gitlab/project-branchs', ctx.body, {
      timeout: 6000
    });
  }

  @Post('/search/projects')
  async search_projects(ctx) {
    return this.ctx.$ajax.post('/gitlab/search-projects', ctx.body, {
      timeout: 6000
    });
  }

  @Post('/users')
  async users(ctx) {
    let users = ctx.$store.state.operation.gitlab.users;
    if (users.length == 0) {
      users = this.ctx.$ajax.post('/gitlab/users', null, {
        timeout: 12000
      });
    }


    return users;
  }


}