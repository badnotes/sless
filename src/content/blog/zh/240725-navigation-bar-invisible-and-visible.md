---
title: '导航栏在浏览器宽度变化时的隐藏和显示'
description: '导航栏在浏览器宽度变小时隐藏，变大时显示。'
pubDate: 'Jul 25 2024'
heroImage: 
  src: '/blog-placeholder-office.jpg'
  alt: 'Typescript'
tags: ["Typescript", "TailwindCSS"]
updatedDate: 'Jul 24 2024'
series: "UI"
---


在实际使用中，会根据动态条件隐藏和显示部份网页模块，
如快捷导航模块，始终显示在网页的上方或者侧方位，
但是如果手机或者 Pad 等小屏幕浏览页面时，就没有空间展示导航模块，可以考虑将模块放到页面的最底层，这样不会遮住正常需要浏览的内容。
但是往往效果不是太好，会显示部份或者某些缺口没有被遮住。

我们可以考虑使用 `JS + CSS` 实现这个效果。

<h3> 1. CSS </h3>

因为工程本来使用了 `TailwindCSS` 框架，它已经把需要的 `class` 定义好了。
如下：

	- visible	visibility: visible;
	- invisible	visibility: hidden;
	- collapse	visibility: collapse;

相应的文档链接：[#TailwindCSS visibility](https://tailwindcss.com/docs/visibility)


<h3> 2. HTML </h3>

默认为隐藏该模块

```html
<!-- 默认为隐藏 -->
<nav id="navbar" class="navbar invisible">
...
</nav>
```

<h3> 3. JavaScript </h3>

先判断一次，然后增加浏览器大小变化的监听。判断小于某个值是则隐藏模块。

```js
const box = document.getElementById('navbar');
const wth = window.innerWidth;
if (box != null ) {
	if (wth < 1480) {
  		box.classList.add('invisible');
	} else {
  		box.classList.remove('invisible');
	}
}

window.addEventListener('resize', () => {
	const box = document.getElementById('navbar');
	const wth = window.innerWidth;
	if (box != null ) {
		if (wth < 1480) {
	  		box.classList.add('invisible');
		} else {
	  		box.classList.remove('invisible');
		}
	}
})
```

Links:

https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event


