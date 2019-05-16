
/**
 *  Error的7种运行时会发生的错误类
 * 1. InternalError: 创建一个代表Javascript引擎内部错误的异常抛出的实例。 如: "递归太多"。非ECMAScript标准。
 * 
 * 2. RangeError: 数值变量或参数超出其有效范围。例子：var a = new Array(-1);
 * 
 * 3. EvalError: 与eval()相关的错误。eval()本身没有正确执行。
 * 
 * 4. ReferenceError: 引用错误。 例子：console.log(b);
 * 
 * 5. SyntaxError: 语法错误。例子：var a = ;
 * 
 * 6. TypeError: 变量或参数不属于有效范围。例子：[1,2].split('.')
 * 
 * 7. URIError: 给 encodeURI或 decodeURl()传递的参数无效。例子：decodeURI('%2')
 * 
 * 面对资源加载失败的错误，只能用window.addEventListerner('error')，window.onerror无效
 * 
 * 
 * 
 * */

export default (app, options) => {
  // 前端错误一般指的是以下两种情况：即时运行错误（代码错误）和资源加载错误。
  window.onerror = function (message, source, lineno, colno, error) {
    // window.onerror不能捕获资源加载错误
    console.log("onerror ", message, source, lineno, colno, error)
    return true;
  }

  window.addEventListener('error', function (e) {
    e.stopPropagation()
    e.preventDefault();
    console.log('addEventListener error', e)
    return true;
  })

  window.addEventListener('unhandledrejection', function (event) {
    console.log('unhandledrejection error', event)
  }, true);

  window.addEventListener("rejectionhandled", function (e) {
    // Event新增属性
    // @prop {Promise} promise - 状态为rejected的Promise实例
    // @prop {String|Object} reason - 异常信息或rejected的内容

    // Uncaught(in promise) Error已经抛出，所以这句毫无意义^_^
    e.preventDefault()
    console.log('rejectionhandled error', event)
  })
}