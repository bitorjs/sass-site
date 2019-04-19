import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';
import menu from '../menu';

import index from '../view/';
import gitlab from '../view/gitlab';

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
  async projects() {
    return this.ctx.$ajax.post('/gitlab/projects', null, {
      timeout: 22000
    });
  }


}