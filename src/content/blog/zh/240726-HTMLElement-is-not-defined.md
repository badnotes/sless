---
title: 'HTMLElement is not defined'
description: 'Astro 错误: HTMLElement is not defined'
pubDate: 'Jul 26 2024'
heroImage: 
  src: '/blog-placeholder-error.jpg'
  alt: 'astro error'
tags: ["Typescript", "Error"]
updatedDate: 'Jul 26 2024'
series: "Error"
---

我使用 Astro 构建网站，当我想在工程里面加入浏览器事件时，报错误类型为定义。
</br>
使用方式 `index.astro`：
```ts
---
  // ...
  const menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu);
---
````

错误信息如下：

```bash
14:55:11 [ERROR] HTMLElement is not defined
  Stack trace:
    at new Scroll (scrollspy\scrollspy.ts:45:37)
    at src\pages\index.astro:25:1
    [...] See full stack trace in the browser, or rerun with --verbose.

```

查资料才知道页面上标记 `--- ... ---` 之内的内容是编译的时候在 server 端执行的。
而 server 端没有浏览器相关的接口。

在开发调试时需要使用浏览器接口的话，要启用 服务器端渲染 (SSR)。
</br>
[SSR](https://docs.astro.build/zh-cn/guides/server-side-rendering/)：
在服务器上根据请求生成 HTML 页面，并将其发送给客户端。一个适配器被用来在服务器上运行你的项目并处理这些请求。 

可以安装官方推荐的适配器，也可以安装这个 `custom-elements-ssr`, 但是安装并配置好后发现有其他的库不兼容SSR，如下：

```bash
15:30:03 [ERROR] [sass] Cannot read properties of undefined (reading 'pop')
  Stack trace:
    at .../src/styles/langSelect.scss
    [...] See full stack trace in the browser, or rerun with --verbose.
```

但是后面想想了，不对呀，我这个功能只需要在前端页面运行，不需要在后端 server 预先执行呀。
</br>
<b>那可以把代码放到页面的 `script` 标记内就可以了:</b>

```js
<script>
  // ...
  const menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu);
</script>
```

是的，就这样，代码仅在前端浏览器运行，可以很简单的实现功能啦。

Links:

https://dev.to/thepassle/server-side-rendering-vanilla-custom-elements-in-astro-5hgg
https://dev.to/thepassle/trying-out-astro-ssr-astro-10-hackaton-3h0g
https://github.com/thepassle/custom-elements-ssr
https://stevenwoodson.com/blog/web-components-in-astro/

