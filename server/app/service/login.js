import Model from '../models';
const { Users } = Model;
import crypto from 'crypto';
import utility from 'utility';

export default class {
  async register(params) {
    let salt = crypto.randomBytes(30).toString('hex');
    let password_sha = utility.sha1(params.password + salt);


    return await Users.findOrCreate({
      where: {
        login_name: params.username,
      },
      defaults: {
        login_name: params.username,
        passwd: password_sha,
        salt: salt
      }
    })
  }

  async login(params) {
    const one = await Users.findOne({
      where: {
        login_name: params.username,
      }
    })

    if (one) {
      let password_sha = utility.sha1(params.password + one.salt);


      return await Users.findOne({
        where: {
          login_name: params.username,
          passwd: password_sha
        }
      })
    }

    return null;

  }
}