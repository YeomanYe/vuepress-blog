module.exports = {
  title: "fwheart's blog",
  description: "fwheart 写博客的地方",
  theme: "reco",
  base: '/vuepress-blog/',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "其他链接",
        items: [{ text: "Github", link: "https://github.com/YeomanYe" }],
      },
    ],
    sidebar: [
      {
        title: "一级目录",
        path: "/",
        collapsable: false, // 不折叠
        children: [
          {
            title: "二级目录",
            path: "/",
          },
        ],
      },
    ],
    subSidebar: 'auto'
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
};
