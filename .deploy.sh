#!/bin/bash

set -e

rm -rf build || exit 0;
mkdir build;

./node_modules/.bin/grunt

cd build
git init

git config user.name "Travis CI"
git config user.email "m@cto.hiv"

git add .
git commit -m "Deploy to GitHub Pages"

git push --force --quiet "https://${GH_TOKEN}@github.com/cooboo/www.git" master:gh-pages > /dev/null 2>&1
