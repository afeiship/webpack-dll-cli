# webpack-dll-cli
> Webpack dll plugin to be a simply cli.

[![Version](https://img.shields.io/npm/v/webpack-dll-cli.svg)](https://npmjs.org/package/webpack-dll-cli)
[![Downloads/week](https://img.shields.io/npm/dw/webpack-dll-cli.svg)](https://npmjs.org/package/webpack-dll-cli)
[![License](https://img.shields.io/npm/l/webpack-dll-cli.svg)](https://github.com/afeiship/webpack-dll-cli/blob/master/package.json)

## installation
```shell
npm i -g webpack-dll-cli
```

## usgae
```shell
# 1. create config file
wpkc -i

# 2. generate dll files
wpkc
```

##  .webpack.dll.yml
```yml
name: webpack-dll-config
config:
  path: src/assets/libs
  entry:
    venders:
      - react
      - react-dom
```
