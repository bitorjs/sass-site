import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';
import menu from '../menu/';
import wiki from '../view/';
import add from '../view/add';
import list from '../view/list';
import detail from '../view/detail';


@Controller('/wiki')
@Middleware('login')
@Middleware(menu)
export default class {
  @Get('/')
  async markdown() {
    this.ctx.render(wiki)
  }

  @Get('/add')
  async add() {
    this.ctx.render(add)
  }

  @Get('/type/:type')
  async type(ctx) {
    ctx.render(list, {
      contentType: ctx.params.type
    })
  }

  @Get('/detail/:id')
  async detail(ctx) {
    ctx.$store.state.wiki.detail = `<h1>标题 - ${ctx.params.id}</h1><p>部分摘要</p>`
    this.ctx.render(detail, {
      content: {
        title: 'ss',
        desc: "<h1>"
      }
    })
  }

}