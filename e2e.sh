#!/bin/bash

set -e

local_registry="http://0.0.0.0:4873"

# start local registry
tmp_registry_log=`mktemp`
nohup yarn verdaccio -c ./config.yaml &>$tmp_registry_log &
# wait for `verdaccio` to boot
grep -q 'http address' <(tail -f $tmp_registry_log)
# login so we can publish packages
yarn npm-auth-to-token -u test -p test -e test@test.com -r "$local_registry"
# Run nmp command
git clean -df
yarn run publish --registry $local_registry prerelease --yes --force-publish=* --no-git-tag-version --no-commit-hooks --no-push --exact --dist-tag=latest
