#!/bin/sh -e

# Projects
csmMainMenuProject="projects/csm-main-menu/"
csmMainMenuBuilt="dist/csm-main-menu/"

# Pre Publish
echo "Running pre-publish"
npm run prepublish

# Updating version
cd $csmMainMenuProject
echo "Increase patch version..."
npm version patch --no-git-tag-version

cd '../../'

# Updating Version Number
git add .
git commit -m "Updating Version Number"
git push origin master

# Building
echo "Building..."
npm run build

# Publishing
echo "Publishing..."
cd $csmMainMenuBuilt
npm publish

exit 0