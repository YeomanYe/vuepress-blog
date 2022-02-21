#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'auto deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:YeomanYe/vuepress-blog.git master:gh-pages

cd -

git add .
git commit -m 'auto commit'
git push -f git@github.com:YeomanYe/vuepress-blog.git master:master