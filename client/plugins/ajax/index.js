import axios from 'axios';

export default (app, option) => {
  const instance = axios.create({
    baseURL: option.baseURL || "http://localhost:1030",
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout: option.timeout || 1000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: option.withCredentials || false, // 默认的false, true:让ajax携带cookie
  });
  setHeaders(instance)
  requestIntercptor(instance);
  responceIntercptor(instance);
  instance.app = app;
  app[option.name || '$ajax'] = app.ctx[option.name || '$ajax'] = instance;
}

function setHeaders(axios) {
  // axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
  axios.defaults.headers.post['Content-Type'] = 'application/json;utf-8';
}

function requestIntercptor(axios) {
  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
}

function responceIntercptor(axios) {
  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    if (error && error.response && error.response.status == 401) {
      axios.app.redirect('/login');
    } else {
      // 对响应错误做点什么
      return Promise.reject(error);
    }

  });
}

// Todo list
