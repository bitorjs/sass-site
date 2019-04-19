import Model from '../models';
const { WikiArticle, WikiType } = Model;


export default class {

  async getDetail(params) {
    let one = await WikiArticle.findOne({
      where: {
        id: params.id
      }
    })
    one.view++;
    one.save();
    return one;
  }

  async addType(params) {
    return await WikiType.findOrCreate({
      where: {
        title: params.type
      }
    })
  }

  async addArticle(params) {
    return await WikiArticle.findOrCreate({
      where: {
        title: params.title,
        type_id: params.contentType,
        content: params.content,
        keywords: params.keywords,
        summary: params.summary
      }
    })
  }



  async getTypeList() {

    return WikiType.findAll();
  }
  async getList(params) {
    return WikiArticle.findAll({

      order: [['utc_create', 'DESC']],

      where: {
        type_id: params.type
      }
    });
  }
}