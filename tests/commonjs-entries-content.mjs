/* eslint-disable no-console -- output */
import { deepStrictEqual, ok } from 'assert';
import konan from 'konan';
import allModules from '@core-js/compat/modules';
import entries from '@core-js/compat/entries';

function filter(regexp) {
  return allModules.filter(it => regexp.test(it));
}

function equal(name, required) {
  const contains = new Set(entries[name]);
  const shouldContain = new Set(Array.isArray(required) ? required : filter(required));
  deepStrictEqual(contains, shouldContain);
}

function superset(name, required) {
  const contains = new Set(entries[name]);
  const shouldContain = Array.isArray(required) ? required : filter(required);
  for (const module of shouldContain) {
    ok(contains.has(module), module);
  }
}

function subset(name, required) {
  const contains = entries[name];
  const shouldContain = new Set(Array.isArray(required) ? required : filter(required));
  for (const module of contains) {
    ok(shouldContain.has(module), module);
  }
}

superset('core-js', /^(es|web)\./);
equal('core-js/es', /^es\./);
superset('core-js/es/array', /^es\.array\./);
superset('core-js/es/array-buffer', /^es\.array-buffer\./);
superset('core-js/es/data-view', /^es\.data-view\./);
superset('core-js/es/date', /^es\.date\./);
superset('core-js/es/function', /^es\.function\./);
superset('core-js/es/json', /^es\.json\./);
superset('core-js/es/map', /^es\.map/);
superset('core-js/es/math', /^es\.math\./);
superset('core-js/es/number', /^es\.number\./);
superset('core-js/es/object', /^es\.object\./);
superset('core-js/es/promise', /^es\.promise/);
superset('core-js/es/reflect', /^es\.reflect\./);
superset('core-js/es/regexp', /^es\.regexp\./);
superset('core-js/es/set', /^es\.set/);
superset('core-js/es/string', /^es\.string\./);
superset('core-js/es/symbol', /^es\.symbol/);
superset('core-js/es/typed-array', /^es\.typed-array\./);
superset('core-js/es/weak-map', /^es\.weak-map/);
superset('core-js/es/weak-set', /^es\.weak-set/);
equal('core-js/stable', /^(es|web)\./);
superset('core-js/stable/array', /^es\.array\./);
superset('core-js/stable/array-buffer', /^es\.array-buffer\./);
superset('core-js/stable/data-view', /^es\.data-view\./);
superset('core-js/stable/date', /^es\.date\./);
superset('core-js/stable/dom-collections', /^web\.dom-collections\./);
superset('core-js/stable/function', /^es\.function\./);
superset('core-js/stable/json', /^es\.json\./);
superset('core-js/stable/map', /^es\.map/);
superset('core-js/stable/math', /^es\.math\./);
superset('core-js/stable/number', /^es\.number\./);
superset('core-js/stable/object', /^es\.object\./);
superset('core-js/stable/promise', /^es\.promise/);
superset('core-js/stable/reflect', /^es\.reflect\./);
superset('core-js/stable/regexp', /^es\.regexp\./);
superset('core-js/stable/set', /^es\.set/);
superset('core-js/stable/string', /^es\.string\./);
superset('core-js/stable/symbol', /^es\.symbol/);
superset('core-js/stable/typed-array', /^es\.typed-array\./);
superset('core-js/stable/url', /^web\.url(\.|$)/);
superset('core-js/stable/url-search-params', /^web\.url-search-params/);
superset('core-js/stable/weak-map', /^es\.weak-map/);
superset('core-js/stable/weak-set', /^es\.weak-set/);
superset('core-js/actual', /^(es|web)\./);
superset('core-js/actual/array', /^es\.array\./);
superset('core-js/actual/array-buffer', /^es\.array-buffer\./);
superset('core-js/actual/data-view', /^es\.data-view\./);
superset('core-js/actual/date', /^es\.date\./);
superset('core-js/actual/dom-collections', /^web\.dom-collections\./);
superset('core-js/actual/function', /^es\.function\./);
superset('core-js/actual/json', /^es\.json\./);
superset('core-js/actual/map', /^es\.map/);
superset('core-js/actual/math', /^es\.math\./);
superset('core-js/actual/number', /^es\.number\./);
superset('core-js/actual/object', /^es\.object\./);
superset('core-js/actual/promise', /^es\.promise/);
superset('core-js/actual/reflect', /^es\.reflect\./);
superset('core-js/actual/regexp', /^es\.regexp\./);
superset('core-js/actual/set', /^es\.set/);
superset('core-js/actual/string', /^es\.string\./);
superset('core-js/actual/symbol', /^es\.symbol/);
superset('core-js/actual/typed-array', /^es\.typed-array\./);
superset('core-js/actual/url', /^web\.url(\.|$)/);
superset('core-js/actual/url-search-params', /^web\.url-search-params/);
superset('core-js/actual/weak-map', /^es\.weak-map/);
superset('core-js/actual/weak-set', /^es\.weak-set/);
equal('core-js/full', allModules);
superset('core-js/full/array', /^es(next)?\.array\./);
superset('core-js/full/array-buffer', /^es(next)?\.array-buffer\./);
superset('core-js/full/async-iterator', /^es(next)?\.async-iterator\./);
equal('core-js/full/bigint', /^es(next)?\.bigint\./);
superset('core-js/full/data-view', /^es(next)?\.data-view\./);
superset('core-js/full/date', /^es(next)?\.date\./);
superset('core-js/full/dom-collections', /^web\.dom-collections\./);
superset('core-js/full/function', /^es(next)?\.function\./);
superset('core-js/full/iterator', /^es(next)?\.iterator\./);
superset('core-js/full/json', /^es(next)?\.json\./);
superset('core-js/full/map', /^es(next)?\.map/);
superset('core-js/full/math', /^es(next)?\.math\./);
superset('core-js/full/number', /^es(next)?\.number\./);
superset('core-js/full/object', /^es(next)?\.object\./);
superset('core-js/full/observable', /^es(next)?\.observable/);
superset('core-js/full/promise', /^es(next)?\.promise/);
superset('core-js/full/reflect', /^es(next)?\.reflect\./);
superset('core-js/full/regexp', /^es(next)?\.regexp\./);
superset('core-js/full/set', /^es(next)?\.set/);
superset('core-js/full/string', /^es(next)?\.string\./);
superset('core-js/full/symbol', /^es(next)?\.symbol/);
superset('core-js/full/typed-array', /^es(next)?\.typed-array\./);
superset('core-js/full/url', /^web\.url(\.|$)/);
superset('core-js/full/url-search-params', /^web\.url-search-params/);
superset('core-js/full/weak-map', /^es(next)?\.weak-map/);
superset('core-js/full/weak-set', /^es(next)?\.weak-set/);
subset('core-js/proposals', /^es(next)?\./);
subset('core-js/stage/1', /^es(next)?\./);
subset('core-js/stage/2', /^esnext\./);
subset('core-js/stage/3', /^esnext\./);
subset('core-js/stage/4', /^esnext\./);

async function unexpectedInnerNamespace(namespace, unexpected) {
  const paths = await globby(`packages/core-js/${ namespace }/**/*.js`);
  await Promise.all(paths.map(async path => {
    for (const dependency of konan(String(await fs.readFile(path))).strings) {
      if (unexpected.test(dependency)) {
        console.log(chalk.red(`${ chalk.cyan(path) }: found unexpected dependency: ${ chalk.cyan(dependency) }`));
      }
    }
  }));
}

await Promise.all([
  unexpectedInnerNamespace('es', /\/(actual|full|stable)\//),
  unexpectedInnerNamespace('stable', /\/(actual|full)\//),
  unexpectedInnerNamespace('actual', /\/(es|full)\//),
  unexpectedInnerNamespace('full', /\/(es|stable)\//),
]);

console.log(chalk.green('entry points content tested'));
