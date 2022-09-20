#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/ikhmal2/personalporfolio.git master:gh-pages

cd -