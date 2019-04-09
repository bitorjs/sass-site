import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';
import mock from '../view/';

@Controller('/')
export default class {
  @Get('/mock')
  @Middleware('login')
  async markdown() {
    this.ctx.render(mock)
  }

}