# Morpheus - Neumorphic design system [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Dev stuff

### Bootstrap of the project

```sh
npm run bootstrap
```

### Lint code

```sh
npm run lint
```

### Add a node_modules

```sh

# add a module on all packages
npx lerna add <package_name>

# add a module on single package
npx lerna add <package_name> --scope=morpheus-react

# add a module on single package in devDependecies
npx lerna add <package_name> --scope=morpheus-react --dev

# add an internal module to another module
npx lerna add morpheus-style --scope=morpheus-react
```

## Create a new tag version

To create a new tag version you have just to create a new version of the project using

```sh
npm run version
```
