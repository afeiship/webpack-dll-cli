import { Command, flags } from '@oclif/command';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import nx from '@jswork/next';
import '@jswork/next-log';

enum ASSETS_TYPE {
  css = 'css',
  js = 'js',
};

class WebpackDllCli extends Command {
  static description = 'Generate dll files use webpack.DllPlugin.';

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    type: flags.enum({
      char: 't',
      description: 'Type of asset(css/js).',
      options: Object.keys(ASSETS_TYPE),
      default: ASSETS_TYPE.js,
    }),
    init: flags.boolean({ char: 'i', description: 'Generate .webpack.dll.yml file.' }),
  };

  async run() {
    const { flags } = this.parse(WebpackDllCli);
    if (flags.init) {
      const src = path.resolve(__dirname, 'template.yml');
      const dst = path.resolve(process.cwd(), '.webpack.dll.yml');
      if (fs.existsSync(dst)) return nx.log('File exist!');
      return fs.copyFileSync(src, dst);
    }
    return execSync(`npx webpack --config ${__dirname}/webpack.${flags.type}.conf.js`);
  }
}

export = WebpackDllCli;
