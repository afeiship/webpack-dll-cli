# webpack-dll-cli
> Webpack dll plugin to be a simply cli.

## installation
```shell
npm i -D webpack webpack-cli@4.9.1
npm i -g @jswork/webpack-dll-cli
```

## usgae
```shell
# 1. create config file
wpkdc -i

# 2.1 generate js dll files
wpkdc

# 2.2 generate css dll file
wpkdc -t=css
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

## .webpack.example.dll.yml
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
