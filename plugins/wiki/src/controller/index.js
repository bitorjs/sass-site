import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';
import wiki from '../view/';

@Controller('/')
export default class {
  @Get('/wiki')
  @Middleware('login')
  async markdown() {
    this.ctx.render(wiki)
  }

}