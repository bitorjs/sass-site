import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';


@Controller('/wiki')
@Middleware('login')
export default class {

  @Post('/detail')
  async detail(ctx) {
    return await ctx.$service.wiki.getDetail(ctx.body);
  }

  @Post('/add/type')
  async addType(ctx) {
    return await ctx.$service.wiki.addType(ctx.body);
  }

  @Post('/add/article')
  async addArticle(ctx) {
    return await ctx.$service.wiki.addArticle(ctx.body);

  }

  @Post('/types')
  async types(ctx) {
    return await ctx.$service.wiki.getTypeList();
  }

  @Get('/list')
  async list(ctx, next) {
    console.log(ctx)
    let type = ctx.query.type;
    const res = await ctx.$service.wiki.getList({
      type: type
    });

    let listData = [];
    if (res && res.data) {
      let data = res.data;
      data.forEach(item => {
        listData.push({
          href: item.id,
          title: item.title,
          description: item.type_id,
          keywords: item.keywords ? item.keywords.split('|') : [],
          content: item.content,
          summary: item.summary,
          star: item.star,
          view: item.view
        })
      });
    }

    return listData;
  }

}