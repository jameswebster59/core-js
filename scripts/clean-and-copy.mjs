const { copy, lstat, pathExists, rm } = fs;
let copied = 0;

function options(overwrite) {
  return {
    async filter(from, to) {
      if ((await lstat(from)).isDirectory()) return true;
      if (!overwrite && await pathExists(to)) return false;
      return !!++copied;
    },
  };
}

await Promise.all((await globby([
  'tests/bundles/*',
  'packages/core-js-pure/!(override|.npmignore|package.json|README.md)',
], { onlyFiles: false })).map(path => rm(path, { force: true, recursive: true })));

// eslint-disable-next-line no-console -- output
console.log(chalk.green('old copies removed'));

await copy('packages/core-js', 'packages/core-js-pure', options(false));

const license = [
  'deno/corejs/LICENSE',
  ...(await globby('packages/*/package.json')).map(path => path.replace(/package\.json$/, 'LICENSE')),
];

await Promise.all([
  copy('packages/core-js-pure/override', 'packages/core-js-pure', options(true)),
  copy('packages/core-js/postinstall.js', 'packages/core-js-bundle/postinstall.js', options(true)),
  ...license.map(path => copy('LICENSE', path, options(true))),
]);

// eslint-disable-next-line no-console -- output
console.log(chalk.green(`copied ${ chalk.cyan(copied) } files`));
