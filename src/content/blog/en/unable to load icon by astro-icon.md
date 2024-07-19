---
title: 'Unable to load icon by astro-icon'
description: 'Astro not found icon: Unable to load icon by astro-icon'
pubDate: 'Jul 19 2024'
heroImage: 
  src: '/blog-placeholder-5.jpg'
  alt: 'astro error'
tags: ["Typescript", "Error", "Icon"]
updatedDate: 'Jul 19 2024'
series: "Error"
---


My Astro project complains that it cannot find the icon chart when building. I am using the astro-icon library.

```bash
15:18:57   ├─ /blog/my-post/index.html[astro-icon] Unable to load icon "carbon:tag-group"!
Error: Unknown builtin plugin "cleanupIDs" specified.
  Stack trace:
    at file:///.../dist/chunks/index_CkwRwbc7.mjs:254:13
error: script "build" exited with code 1

```

When using an icon, you need to add its module to the project dependency `package.json`. You can use the installation command.

```bash
bun add -d @iconify-json/carbon
```

Or you can directly download the svg file and put it in the project directory `src/icons`. You can download the icon from [iconify](https://icon-sets.iconify.design/).
`astro-icon` is quite convenient to use. It can automatically import icons under the `mdi` module by default, and other modules need to be explicitly declared.



Links:
- https://icon-sets.iconify.design/
- https://github.com/natemoo-re/astro-icon
