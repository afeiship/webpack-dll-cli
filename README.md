# webpack-dll-cli
> Webpack dll plugin to be a simply cli.

[![Version](https://img.shields.io/npm/v/webpack-dll-cli.svg)](https://npmjs.org/package/webpack-dll-cli)
[![Downloads/week](https://img.shields.io/npm/dw/webpack-dll-cli.svg)](https://npmjs.org/package/webpack-dll-cli)
[![License](https://img.shields.io/npm/l/webpack-dll-cli.svg)](https://github.com/afeiship/webpack-dll-cli/blob/master/package.json)

## installation
```shell
npm i -D webpack webpack-cli 
npm i -g @jswork/webpack-dll-cli
```

## usgae
```shell
# 1. create config file
wpkc -i

# 2.1 generate js dll files
wpkc

# 2.2 generate css dll file
wpkc -t=css
```

## help
```
Generate dll files use webpack.DllPlugin.

USAGE
  $ wpkdc

OPTIONS
  -h, --help           show CLI help
  -i, --init           Generate .webpack.dll.yml file.
  -t, --type=(css|js)  [default: js] Type of asset(css/js).
  -v, --version        show CLI version
```

##  .webpack.example.dll.yml
```yml
name: template
css:
  path: src/assets/libs/css
  entry: ./src/assets/styles/index.scss

js:
  path: src/assets/libs/js
  entry:
    venders:
      - react
      - react-dom
```
