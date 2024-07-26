---
title: 'HTMLElement is not defined'
description: 'Astro Error: HTMLElement is not defined'
pubDate: 'Jul 26 2024'
heroImage: 
  src: '/blog-placeholder-error.jpg'
  alt: 'astro error'
tags: ["Typescript", "Error"]
updatedDate: 'Jul 26 2024'
series: "Error"
---

I use Astro to build a website. When I want to add browser events to the project, the error type is defined.
</br>
Usage `index.astro`:

```ts
---
  // ...
  const menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu);
---
````

The error message is as follows:

```bash
14:55:11 [ERROR] HTMLElement is not defined
  Stack trace:
    at new Scroll (scrollspy\scrollspy.ts:45:37)
    at src\pages\index.astro:25:1
    [...] See full stack trace in the browser, or rerun with --verbose.

```

I found out from the information that the content marked `--- ... ---` on the page is executed on the server side during compilation.
And there is no browser-related interface on the server side.

If you need to use the browser interface during development and debugging, you need to enable server-side rendering (SSR).
</br>
[SSR](https://docs.astro.build/zh-cn/guides/server-side-rendering/):
Generate HTML pages on the server based on the request and send them to the client. An adapter is used to run your project on the server and handle these requests.

You can install the official recommended adapter, or you can install this `custom-elements-ssr`, but after installing and configuring it, I found that other libraries are not compatible with SSR, as follows:

```bash
15:30:03 [ERROR] [sass] Cannot read properties of undefined (reading 'pop')
  Stack trace:
    at .../src/styles/langSelect.scss
    [...] See full stack trace in the browser, or rerun with --verbose.
```

But then I thought about it, that's not right, my function only needs to run on the front-end page, and does not need to be pre-executed on the back-end server.
</br>
<b>Then you can put the code in the `script` tag of the page: </b>

```js
<script>
  // ...
  const menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu);
</script>
```

Yes, that's it. The code only runs in the front-end browser, and the function can be implemented very easily.

Links:

https://dev.to/thepassle/server-side-rendering-vanilla-custom-elements-in-astro-5hgg
https://dev.to/thepassle/trying-out-astro-ssr-astro-10-hackaton-3h0g
https://github.com/thepassle/custom-elements-ssr
https://stevenwoodson.com/blog/web-components-in-astro/

