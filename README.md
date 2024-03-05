# README

## Structure
```
project/
│
├── index.html            # 主页文件
│
├── blogs.html            # 博客页面文件
│
├── about.html            # 关于页面文件
│
├── css/                  # 存放 CSS 文件的目录
│   └── style.css         # 主要样式文件
│
├── js/                   # 存放 JavaScript 文件的目录
│   ├── navigation.js     # 导航栏交互逻辑文件
│   └── markdown.js       # 处理 Markdown 文档展示的逻辑文件
│
├── assets/               # 存放资源文件的目录
│   ├── images/           # 存放图片文件的目录
│   │   └── logo.png      # 圆形 logo 图片
│   └── docs/             # 存放 Markdown 文档的目录
│       ├── blog1.md      # 博客文章 Markdown 文件
│       ├── blog2.md      # 博客文章 Markdown 文件
│       └── ...           # 其他博客文章 Markdown 文件
│
└── fonts/                # 存放字体文件的目录

```

上方一个横着的黑色固定的导航栏，之后导航栏中依次为一个圆形logo图片，点击它可以回到主页；“Blogs” 白色文字，点击它可以打开另外一个html文件，用以展示md文档；“About” 白色文字，点击它可以打开另外一个html文件，用以展示我的一些个人信息；
点击BLogs后，跳转，然后左侧是竖着的文档目录标题导航，右侧一大块展示文档的内容；这一部分可能需要你写一些js文件，我希望左侧导航栏是可以点击下拉看下一级标题的那种；标题展示依次为各自逐级文件夹的名字，再到md文件的一级二级三级标题这样子