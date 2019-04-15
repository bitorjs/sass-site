## API 文档

### props

| name 名称    | type 类型 | default 默认值 | describe 描述                                                |
| ------------ | --------- | -------------- | ------------------------------------------------------------ |
| value        | String    |                | 初始值                                                       |
| language     | String    | cn             | 语言选择，暂支持 cn: 中文简体 ， en: 英文 ， fr: 法语        |
| scrollStyle  | Boolean   | true           | 开启滚动条样式(暂时仅支持chrome)                             |
| subfield     | Boolean   | true           | true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)       |
| defaultOpen | String    |                | edit： 默认展示编辑区域 ， preview： 默认展示预览区域  , 其他 = edit |
| placeholder  | String    | 开始编辑...    | 输入框为空时默认提示文本                                     |
| editable     | Boolean   | true           | 是否允许编辑                                                 |
| code_style   | String    | code-github    | markdown样式： 默认github, [可选配色方案](https://link.jianshu.com?t=.%2Fsrc%2Flib%2Fcore%2Fhljs%2Flang.hljs.css.js) |
| toolbarsFlag | Boolean   | true           | 工具栏是否显示                                               |
| toolbars     | Object    | 如下例         | 工具栏                                                       |
| ishljs       | Boolean   | true           | 代码高亮(cdn外链)                                            |

externalLink 去掉 cdn 外链
```
 /*
    默认工具栏按钮全部开启, 传入自定义对象
    例如: {
         bold: true, // 粗体
         italic: true,// 斜体
         header: true,// 标题
    }
    此时, 仅仅显示此三个功能键
 */
toolbars: {
      bold: true, // 粗体
      italic: true, // 斜体
      header: true, // 标题
      underline: true, // 下划线
      strikethrough: true, // 中划线
      mark: true, // 标记
      superscript: true, // 上角标
      subscript: true, // 下角标
      quote: true, // 引用
      ol: true, // 有序列表
      ul: true, // 无序列表
      link: true, // 链接
      imagelink: true, // 图片链接
      code: true, // code
      table: true, // 表格
      fullscreen: true, // 全屏编辑
      readmodel: true, // 沉浸式阅读
      htmlcode: true, // 展示html源码
      help: true, // 帮助
      /* 1.3.5 */
      undo: true, // 上一步
      redo: true, // 下一步
      trash: true, // 清空
      save: true, // 保存（触发events中的save事件）
      /* 1.4.2 */
      navigation: true, // 导航目录
      /* 2.1.8 */
      alignleft: true, // 左对齐
      aligncenter: true, // 居中
      alignright: true, // 右对齐
      /* 2.2.1 */
      subfield: true, // 单双栏模式
      preview: true, // 预览
  }
```

### events

| name 方法名      | params 参数                     | describe 描述                                                |
| ---------------- | ------------------------------- | ------------------------------------------------------------ |
| change           | String: value , String: render  | 编辑区发生变化的回调事件(render: value 经过markdown解析后的结果) |
| save             | String: value , String: render  | ctrl + s 的回调事件(保存按键,同样触发该回调)                 |
| fullscreen       | Boolean: status , String: value | 切换全屏编辑的回调事件(boolean: 全屏开启状态)                |
| readmodel        | Boolean: status , String: value | 切换沉浸式阅读的回调事件(boolean: 阅读开启状态)              |
| htmlcode         | Boolean: status , String: value | 查看html源码的回调事件(boolean: 源码开启状态)                |
| subfieldtoggle   | Boolean: status , String: value | 切换单双栏编辑的回调事件(boolean: 双栏开启状态)              |
| previewtoggle    | Boolean: status , String: value | 切换预览编辑的回调事件(boolean: 预览开启状态)                |
| helptoggle       | Boolean: status , String: value | 查看帮助的回调事件(boolean: 帮助开启状态)                    |
| navigationtoggle | Boolean: status , String: value | 切换导航目录的回调事件(boolean: 导航开启状态)                |
| imgAdd           | String: filename, File: imgfile | 图片文件添加回调事件(filename: 写在md中的文件名, File: File Object) |
| imgDel           | String: filename                | 图片文件删除回调事件(filename: 写在md中的文件名)             |