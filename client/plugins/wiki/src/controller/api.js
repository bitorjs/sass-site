import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';


@Controller('/wiki')
@Middleware('login')
export default class {
  @Get('/list')
  async markdown(ctx, next) {
    console.log(ctx)

    let listData = [];
    let len = 0;
    if (ctx.query.type == "rule") {
      listData = [
        {
          href: "0",
          title: `前端规范`,
          avatar: "hrr",
          description: "b",
          content: "b"
        },
        {
          href: "1",
          title: `接口规范`,
          avatar: "hrr",
          description: "b",
          content: "b"
        },
      ]
    } else if (ctx.query.type == "entry") {
      len = 5;
    } else {
      len = 23;
    }
    for (let i = 0; i < len; i++) {
      listData.push({
        href: i,
        title: `ant design vue part ${i}`,
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
      });
    }
    return listData;
  }

}