import ajax from '../plugins/axios';
import wiki from '../plugins/wiki';
import mock from '../plugins/mock';
import cnpm from '../plugins/cnpm';
import postMan from '../plugins/post-man';
import system from '../plugins/system';
import collection from '../plugins/collection';
import assets from '../plugins/assets';
import operation from '../plugins/operation';


export default [
  {
    name: 'axios',
    module: ajax,
    enable: true,
    export: '$ajax',
    baseUrl: '/',
    timeout: 1000
  },
  {
    name: 'wiki',
    module: wiki,
    enable: true
  },
  {
    name: 'mock',
    module: mock,
    enable: false
  },
  {
    name: 'cnpm',
    module: cnpm,
    enable: false
  },
  {
    name: 'post-man',
    module: postMan,
    enable: false
  },

  {
    name: 'collection',
    module: collection,
    enable: true
  },

  {
    name: 'operation',
    module: operation,
    enable: true
  },


  {
    name: 'assets',
    module: assets,
    enable: false
  },

  {
    name: 'system',
    module: system,
    enable: true
  },
]