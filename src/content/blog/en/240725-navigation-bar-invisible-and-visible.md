---
title: 'Hide and display the navigation bar when the browser width changes'
description: 'The navigation bar is hidden when the browser width becomes smaller and displayed when it becomes larger.'
pubDate: 'Jul 25 2024'
heroImage: 
  src: '/blog-placeholder-office.jpg'
  alt: 'Typescript'
tags: ["Typescript", "TailwindCSS"]
updatedDate: 'Jul 24 2024'
series: "UI"
---

In actual use, some web page modules will be hidden and displayed according to dynamic conditions,
such as the quick navigation module, which is always displayed at the top or side of the web page,
but if the page is browsed on a small screen such as a mobile phone or Pad, there is no space to display the navigation module. You can consider putting the module at the bottom of the page so that it will not cover the content that needs to be browsed normally.
But the effect is often not very good, and some parts or some gaps will be displayed without being covered.

We can consider using `JS + CSS` to achieve this effect.

<h3> 1. CSS </h3>

Because the project originally used the `TailwindCSS` framework, it has already defined the required `class`.

As follows:

	- visible	visibility: visible;
	- invisible	visibility: hidden;
	- collapse	visibility: collapse;

Corresponding document link: [#TailwindCSS visibility](https://tailwindcss.com/docs/visibility)

<h3> 2. HTML </h3>

The module is hidden by default

```html
<!-- Hidden by default -->
<nav id="navbar" class="navbar invisible">
...
</nav>
```

<h3> 3. JavaScript </h3>

Judge once, and then add a listener for browser size changes. If it is less than a certain value, hide the module.


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

