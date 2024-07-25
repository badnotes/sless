export const techList: Array<{ 
	key: string; 
	value: Array<{ title: string; icon: string; desc: string; href: string; zh: string; }> 
}> = [
	{
		key: "IDE",
		value: [
			{
				title: "VSCode",
				icon: "vscode-file-type-vscode2",
				desc: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free.",
				href: "https://code.visualstudio.com/",
				zh: "Visual Studio Code是一款由微软开发且跨平台的免费源代码编辑器。该软件以扩展的方式支持语法高亮、代码自动补全、代码重构功能，并且内置了命令行工具和Git 版本控制系统。用户可以更改主题和键盘快捷方式实现个性化设置，也可以通过内置的扩展程序商店安装其他扩展以拓展软件功能。",
			},{
				title: "Sublime",
				icon: "sublimetext-icon",
				desc: "Sublime Text is a sophisticated text editor for code, markup and prose. You'll love the slick user interface, extraordinary features and amazing.",
				href: "https://www.sublimetext.com/",
				zh: "Sublime Text是一套跨平台的文本编辑器，支持基于Python的插件。Sublime Text是专有软件，可透过包扩展。大多数的包使用自由软件授权发布，并由社群建置维护。 ",
			},
		]
	},
	{
		key: "Web",
		value: [
			{
				title: "Astro",
				icon: "logos-astro-icon",
				desc: "Build fast websites, faster.",
				href: "https://astro.build",
				zh: "更快地构建快速网站。",
			},{
				title: "Hugo",
				icon: "simple-hugo",
				desc: "Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again. language: golang",
				href: "https://gohugo.io/",
				zh: "Hugo 是最受欢迎的开源静态网站生成器之一。Hugo 凭借其惊人的速度和灵活性，让网站建设再次变得有趣。语言：golang",
			},{
				title: "Jekyll",
				icon: "logos-jekyll",
				desc: "Transform your plain text into static websites and blogs. language: ruby",
				href: "https://jekyllrb.com/",
				zh: "将纯文本转换为静态网站和博客。语言：ruby",
			},{
				title: "Hexo",
				icon: "logos-hexo",
				desc: "Hexo is a fast, simple & powerful blog framework powered by Node.js.",
				href: "https://hexo.io/",
				zh: "Hexo 是一个由Node.js驱动的快速、简单的& 强大的博客框架。",
			},{
				title: "Ghost",
				icon: "icon-park-ghost",
				desc: "Ghost is designed to simplify the process of publishing personal websites and online publishing. Or a personal blogging system that is developed using the NodeJs and SQL database. language: JavaScript",
				href: "https://ghost.org/",
				zh: "Ghost是用JavaScript编写的博客平台，基于MIT许可证开放源代码。Ghost的设计主旨是简化个人网站发布以及网上出版的过程。 Ghost是一款个人博客系统，它使用Node.js语言和MySQL数据库开发，同时支持MySQL、MariaDB、SQLite和PostgreSQL。",
			},{
				title: "Gatsby",
				icon: "mdi-gatsby",
				desc: "Gatsby is a React-based static website generator suitable for websites that require dynamic content and complex interactions. It has a rich plugin ecosystem that can easily integrate various services.",
				href: "https://www.gatsbyjs.com/",
				zh: "Gatsby 是基于 React 的静态网站生成器，适合于需要动态内容和复杂交互的网站。它拥有丰富的插件生态系统，可以轻松集成各种服务。",
			},{
				title: "Zola",
				icon: "zola",
				desc: "Your one-stop static site engine, Forget dependencies, Everything you need in one binary. language: rust",
				href: "https://www.getzola.org/",
				zh: "您的一站式静态站点引擎, 忘掉依赖项, 您需要的一切都包含在一个二进制文件中。",
			},{
				title: "Remix",
				icon: "ri-remix",
				desc: "Build Better Websites. Create modern, resilient user experiences with web fundamentals. ",
				href: "https://remix.run/",
				zh: "打造更出色的网站。利用网络基础知识打造现代、弹性的用户体验。",
			},{
				title: "VitePress",
				icon: "simple-vitepress",
				desc: "Vite & Vue Powered Static Site Generator, Markdown to Beautiful Docs in Minutes, What is VitePress? Quickstart",
				href: "https://vitepress.dev",
				zh: "由 Vite 和 Vue 驱动的静态站点生成器，将 Markdown 变成优雅的文档，只需几分钟",
			},
			{
				title: "Hakyll",
				icon: "mdi-lambda",
				desc: "A static website compiler library in Haskell. ",
				href: "https://jaspervdj.be/hakyll/",
				zh: "Haskell 中的静态网站编译器库。",
			},
		]
	},
	{
		key: "Theme",
		value: [
			{
				title: "Astro Theme",
				icon: "logos-astro-icon",
				desc: "Astro themes",
				href: "https://astro.build/themes/",
				zh: "Astro 主题库",
			},{
				title: "Hugo Theme",
				icon: "simple-hugo",
				desc: "Hugo themes",
				href: "https://themes.gohugo.io/",
				zh: "Hugo 主题库",
			},{
				title: "Jekyll Theme",
				icon: "logos-jekyll",
				desc: "Jekyll themes",
				href: "http://jekyllthemes.org/",
				zh: "Jekyll 主题库",
			},{
				title: "Hexo Theme",
				icon: "logos-hexo",
				desc: "Hexo themes",
				href: "https://hexo.io/themes/",
				zh: "Hexo 主题库",
			},
		]
	},
	{
		key: "UI",
		value: [
			{
				title: "React",
				icon: "logos-react",
				desc: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
				href: "https://react.dev/",
				zh: "React是一个自由及开放源代码的前端JavaScript工具库， 用于基于UI组件构建用户界面。 它由Meta和由个人开发者和公司组成的社群维护。 React可用作开发具有Next.js等框架的单页、手机或服务器渲染应用程序的基础。"
			},{
				title: "NextJS",
				icon: "logos-nextjs",
				desc: "Next.js by Vercel is the full-stack React framework for the web.",
				href: "https://nextjs.org/",
				zh: "Next.js是一个构建于Node.js之上的开源Web开发框架，支持基于React的Web应用程序功能，例如服务端渲染和生成静态网站。React于官方文件内的“推荐的工具链”中提及Next.js，建议将其作为“使用Node.js构建服务器渲染网站”的解决方案。 "
			},{
				title: "Vue",
				icon: "logos-vue",
				desc: "The Progressive JavaScript Framework · Approachable. Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.",
				href: "https://astro.build",
				zh: "Vue.js是一款JavaScript前端框架，旨在更好地组织与简化Web开发。Vue所关注的核心是MVC模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互。 ",
			},{
				title: "Nuxt",
				icon: "logos-nuxt-icon",
				desc: "Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites",
				href: "https://nuxt.com/",
				zh: "Nuxt.js是一个免费且开放源代码的Web应用框架，基于Vue.js、Nitro以及Vite。Nuxt.js的灵感来源于作用类似但基于React.js的框架Next.js。 该框架宣传为“通用应用程序的元框架”。",
			},{
				title: "Preact",
				icon: "logos-preact",
				desc: "Preact provides the thinnest possible Virtual DOM abstraction on top of the DOM. It builds on stable platform features, registers real event handlers and plays",
				href: "https://preactjs.com/",
				zh: "3kb 大小的 React 轻量、快速替代方案，拥有相同的现代 API。",
			},{
				title: "Svelte",
				icon: "dev-svelte",
				desc: "Svelte is a completely new way to build user interfaces. Traditional frameworks such as React and Vue require a lot of work in the browser, while Svelte handles this work during the compilation phase of building the application.",
				href: "https://astro.build",
				zh: "Svelte是一个由Rich Harris创建的开放源代码的前端编译器，由志愿者维护。与传统框架在浏览器中进行大量处理的方式不同，Svelte将这些工作提前到编译阶段处理。构建一个Svelte应用程序会生成操作文档对象模型的代码，Svelte借此可以减少传输的文件的大小，并提供更好的启动和运行时性能。",
			},{
				title: "SolidJS",
				icon: "logos-solidjs-icon",
				desc: "Simple and performant reactivity for building user interfaces.",
				href: "https://www.solidjs.com/",
				zh: "用于构建用户界面的简单且高效的反应能力。",
			},{
				title: "AlpineJS",
				icon: "logos-alpinejs-icon",
				desc: "A rugged, minimal framework for composing behavior directly in your markup.",
				href: "https://alpinejs.dev/",
				zh: "一个坚固的、最小的框架，用于直接在标记中编写行为。",
			},{
				title: "Lit",
				icon: "logos-lit",
				desc: "Lit is a simple library for building fast, lightweight web components. ",
				href: "https://lit.dev/",
				zh: "Lit 是一个用于构建快速、轻量级 Web 组件的简单库。",
			},{
				title: "Arco.design",
				icon: "arco",
				desc: "A comprehensive React UI components library based on Arco Design ",
				href: "https://arco.design/",
				zh: "基于 Arco Design 的综合 React UI 组件库",
			},{
				title: "Antd",
				icon: "simple-antdesign",
				desc: "A React UI component library based on the Ant Design design system, used for developing enterprise-level mid- and back-end products.",
				href: "https://ant.design",
				zh: "基于Ant Design 设计体系的React UI 组件库，用于研发企业级中后台产品。",
			},{
				title: "Ionic",
				icon: "ionic",
				desc: "A powerful cross-platform UI toolkit for building native-quality iOS, Android, and Progressive Web Apps with HTML, CSS, and JavaScript. ",
				href: "https://ionicframework.com/",
				zh: "一个强大的跨平台 UI 工具包，用于使用 HTML、CSS 和 JavaScript 构建原生质量的 iOS、Android 和渐进式 Web 应用程序。",
			},{
				title: "FloatingUI",
				icon: "floating-ui",
				desc: "A JavaScript library to position floating elements and create interactions for them.",
				href: "https://floating-ui.com/",
				zh: "用于定位 浮动元素 并为其创建交互的 JavaScript 库。",
			},
			{
				title: "PrelineUI",
				icon: "preline",
				desc: "Preline UI is an open-source Tailwind CSS components library for any needs. Comes with UI examples & blocks, templates, plugins, Figma design system and more. ",
				href: "https://preline.co/",
				zh: "Preline UI 是一个开源的 Tailwind CSS 组件库，可满足任何需求。附带 UI 示例和块、模板、插件、Figma 设计系统等。",
			},
		]
	},
	{
		key: "CSS",
		value: [
			{
				title: "Tailwind CSS",
				icon: "logos-tailwindcss-icon",
				desc: "Rapidly build modern websites without ever leaving your HTML.",
				href: "https://tailwindcss.com/docs/installation",
				zh: "无需离开 HTML 即可快速构建现代网站。",
			},{
				title: "Windi CSS",
				icon: "windicss",
				desc: "Next generation utility-first CSS framework.",
				href: "https://windicss.org/",
				zh: "下一代实用优先的 CSS 框架。",
			},{
				title: "Twind",
				icon: "twind",
				desc: "The smallest, fastest, most feature complete tailwind-in-js solution in existence. ",
				href: "https://twind.style/",
				zh: "现存最小、最快、功能最齐全的 tailwind-in-js 解决方案。",
			},{
				title: "unocss",
				icon: "unocss",
				desc: "UnoCSS was started by one of the Windi CSS's team members, with a lot of inspiration taken from the work we did in Windi CSS. While Windi CSS is no longer actively maintained (as of March 2023), you may consider UnoCSS as a \"spiritual successor\" of Windi CSS.",
				href: "https://unocss.dev/",
				zh: "UnoCSS 是由 Windi CSS 的一名团队成员发起的，其灵感来源于我们在 Windi CSS 中所做的工作。虽然 Windi CSS 不再积极维护（截至 2023 年 3 月），但您可以将 UnoCSS 视为 Windi CSS 的“精神继承者”。",
			},{
				title: "Sass",
				icon: "vscode-file-type-scss2",
				desc: "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. ",
				href: "https://sass-lang.com/",
				zh: "Sass是世界上最成熟、最稳定、最强大的专业级CSS扩展语言。",
			},{
				title: "Bootstrap",
				icon: "skill-bootstrap",
				desc: "Build fast, responsive sites with Bootstrap Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins. ",
				href: "https://getbootstrap.com/",
				zh: "使用 Bootstrap 构建快速且响应式的网站。强大、可扩展、且功能丰富的前端工具包。 使用 Sass 构建和定制，利用预构建的网格系统和组件，并通过强大的 JavaScript 插件将项目变为现实。 ",
			},{
				title: "Styled-components",
				icon: "skill-styled",
				desc: "Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. ",
				href: "https://styled-components.com/",
				zh: "利用标记模板字面量（JavaScript 的最新添加）和 CSS 的强大功能，styled-components 允许你编写实际的 CSS 代码来设置组件的样式。 ",
			},{
				title: "Lesscss",
				icon: "lesscss",
				desc: "It's CSS, with just a little more.",
				href: "https://lesscss.org/",
				zh: "它是 CSS，只是多了一点东西。",
			},
			{
				title: "stylus",
				icon: "logos-stylus",
				desc: "Expressive, dynamic, and robust CSS. An expressive, robust, feature-rich CSS language built for Node.js",
				href: "https://stylus-lang.com/",
				zh: "富有表现力、动态、强大的 CSS。专为 Nodejs 构建的富有表现力、强大、功能丰富的 CSS 语言。",
			},
		]
	},
	{
		key: "Image",
		value: [
			{
				title: "Svgo",
				icon: "simple-svgo",
				desc: "SVGO is a Node.js library and command-line application for optimizing vector images.",
				href: "https://github.com/svg/svgo",
				zh: "SVGO 及其各种集成将使您能够优化 SVG 并更快地为您的 Web 应用程序提供服务。",
			},{
				title: "astro-icon",
				icon: "astro-icon",
				desc: "Icons made easy, powered by Astro",
				href: "https://www.astroicon.dev/",
				zh: "基于Astro 让 SVG 变得简单！",
			},{
				title: "Iconify.design",
				icon: "simple-iconify",
				desc: "Freedom to choose icons. All popular icon sets, one framework. Over 200,000 open source vector icons.",
				href: "https://icon-sets.iconify.design/",
				zh: "自由选择图标。所有流行的图标集，一个框架。超过 200,000 个开源矢量图标。",
			},
			{
				title: "Yesicon",
				icon: "yesicon",
				desc: "High-Quality Vector Icons from Top Design Teams. 175 Open-Source, Free Icon sets. A Handy Tool for Developers and Designers to Ctrl+V. ",
				href: "https://yesicon.app/",
				zh: "来自顶级设计团队的高品质矢量图标。175 个开源免费图标集。开发人员和设计师的既可便捷 Ctrl+V。",
			},
			{
				title: "icones",
				icon: "icones",
				desc: "Icon Explorer with Instant searching, powered by Iconify. ",
				href: "https://icones.js.org/",
				zh: "具有即时搜索功能的图标浏览器，由 Iconify 提供支持",
			},
			{
				title: "Mermaid",
				icon: "mermaid",
				desc: "Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown. ",
				href: "https://mermaid.js.org/",
				zh: "以类似于 markdown 的方式从文本生成流程图或序列图等图表。",
			},
			{
				title: "Iconfinder",
				icon: "iconfinder",
				desc: "Make beautiful designs faster. Millions of graphics for your design projects. Created by independent designers.",
				href: "https://www.iconfinder.com/",
				zh: "更快地制作精美的设计，为您的设计项目提供数百万张图形。由独立设计师创作。",
			},
			{
				title: "Squoosh",
				icon: "squoosh",
				desc: "Make images smaller using best-in-class codecs, right in the browser. ",
				href: "https://squoosh.app/",
				zh: "直接在浏览器中使用一流的编解码器缩小图像。",
			},
		]
	},
	{
		key: "Auth",
		value: [
			{
				title: "WebAuthn",
				icon: "carbon-two-factor-authentication",
				desc: "Welcome to webauthn.io! This site is designed by Duo Labs to test the new W3C Specification Web Authentication. WebAuthn is supported in the Chrome, Firefox. ",
				href: "https://webauthn.io/",
				zh: "欢迎来到 webauthn.io！该网站由 Duo Labs 设计，用于测试新的 W3C 规范 Web 身份验证。Chrome、Firefox 支持 WebAuthn。",
			},
		]
	},
	{
		key: "Deploy",
		value: [
			{
				title: "Github Pages",
				icon: "icon-park-github",
				desc: "You get one site per GitHub account and organization, and unlimited project sites. Let's get started. ",
				href: "https://pages.github.com/",
				zh: "GitHub Pages是GitHub提供的一个网页寄存服务，于2008年推出。可以用于存放静态网页，包括博客、项目文档甚至整本书。Jekyll软件可以用于将文档转换成静态网页，该软件提供了将网页上传到GitHub Pages的功能。",
			},{
				title: "CloudFlare Pages",
				icon: "simple-cloudflare",
				desc: "Cloudflare Pages makes it dead simple to deploy our static websites and to collaborate within our team as we do so. Features such as shareable preview links.",
				href: "https://pages.cloudflare.com/",
				zh: "Cloudflare是一家总部位于旧金山的美国跨国科技企业，以向客户提供基于反向代理的内容分发网络及分布式域名解析服务为主要业务。",
			},
		]
	},
	{
		key: "Storage",
		value: [
			{
				title: "Supabase",
				icon: "simple-supabase",
				desc: "Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.",
				href: "https://supabase.com/",
				zh: "Supabase 是一个开源 Firebase 替代品。使用 Postgres 数据库、身份验证、即时 API、边缘函数、实时订阅、存储和向量嵌入来启动您的项目。",
			},{
				title: "CloudFlare D1",
				icon: "d1",
				desc: "D1 is Cloudflare's native serverless database. D1 allows you to build applications that handle large amounts of users at no extra cost.",
				href: "https://developers.cloudflare.com/d1/",
				zh: "D1 是 Cloudflare 的原生无服务器数据库。D1 允许您构建处理大量用户的应用程序，且无需额外付费。",
			},
		]
	},
	{
		key: "CMS",
		value: [
			{
				title: "Strapi",
				icon: "logos-strapi",
				desc: "The original purpose of the project was to help Bootstrap your API: that's how Strapi was created. Now, Strapi is an open-source headless CMS.",
				href: "https://strapi.io",
				zh: "该项目最初的目的是帮助用户快速 创建（strap） API：这就是 Strapi 的初衷。现在，Strapi 是一个开源的无头（headless） CMS。",
			},
		]
	},
	{
		key: "Other",
		value: [
			{
				title: "Markdown",
				icon: "markdown-outline",
				desc: "Simple and easy-to-use markup language.",
				href: "https://www.markdownguide.org/",
				zh: "简单易用的标记语言。",
			},
			{
				title: "MDX",
				icon: "logos-mdx",
				desc: "Markdown for the component era.",
				href: "https://mdxjs.com/",
				zh: "组件时代的 Markdown。",
			},
			{
				title: "Handlebars",
				icon: "handlebarsjs",
				desc: "Minimal templating on steroids.",
				href: "https://handlebarsjs.com/",
				zh: "轻量的语义化模板 ",
			},

		]
	}
];
