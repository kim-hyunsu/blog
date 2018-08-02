set -e
yarn docs:build
cd docs/.vuepress/dist
git add -A
git commit -m 'deploy'
git push -f git@github.com:kim-hyunsu/blog.git master:gh-pages
cd -
