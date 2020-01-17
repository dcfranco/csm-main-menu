#!/bin/sh -e

# Projects
csmMainMenuProject="projects/csm-main-menu/"
csmMainMenuBuilt="dist/csm-main-menu/"

# Increase version and exec Lint, Test, E2E and Build
cd $csmMainMenuProject
echo "Increase patch version..."
npm version patch --no-git-tag-version

echo "Running pre-publish"
npm run prepublish

echo "Publishing..."
cd $csmMainMenuBuilt
npm publish

exit 1