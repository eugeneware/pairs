# pairs

Turn a JSON object into a list of pairs. Useful for indexing.

NB: The basis for this file was extracted from the fine [level-search](https://github.com/dominictar/level-search) library.

## Installation

Install via npm:

```
$ npm install pairs
```

## Usage

### pairs(obj)

Turn a javascript JSON object, and generate an array of unique pairs that
represent every possible pair of adjacent properties in the object tree.

Given a json object: (eg. from a package.json)
``` js
{
  "name": "pairs",
  "version": "0.0.1",
  "description": "Turn a JSON object into a list of pairs. Useful for indexing.",
  "main": "index.js",
  "scripts": {
    "test": "node_modules/.bin/mocha"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/eugeneware/pairs.git"
  },
  "keywords": [
    "pairs",
    "index",
    "indexing",
    "levelup",
    "leveldb",
    "indexer",
    "query",
    "querying",
    "mongodb",
    "search"
  ],
  "author": "Eugene Ware <eugene@noblesamurai.com>",
  "license": "BSD",
  "devDependencies": {
    "chai": "~1.7.2",
    "mocha": "~1.12.0"
  }
}
```

``` js
var pairs = require('pairs');
var pkg = require('package.json'); // the file above
var p = pairs(pkg);
console.log(p);
```

Which will print out:

```
[ [ 'author', 'Eugene Ware <eugene@noblesamurai.com>' ],
  [ 'chai', '~1.7.2' ],
  [ 'description',
    'Turn a JSON object into a list of pairs. Useful for indexing.' ],
  [ 'devDependencies', 'chai' ],
  [ 'devDependencies', 'mocha' ],
  [ 'keywords', 'index' ],
  [ 'keywords', 'indexer' ],
  [ 'keywords', 'indexing' ],
  [ 'keywords', 'leveldb' ],
  [ 'keywords', 'levelup' ],
  [ 'keywords', 'mongodb' ],
  [ 'keywords', 'pairs' ],
  [ 'keywords', 'query' ],
  [ 'keywords', 'querying' ],
  [ 'keywords', 'search' ],
  [ 'license', 'BSD' ],
  [ 'main', 'index.js' ],
  [ 'mocha', '~1.12.0' ],
  [ 'name', 'pairs' ],
  [ 'repository', 'type' ],
  [ 'repository', 'url' ],
  [ 'scripts', 'test' ],
  [ 'test', 'node_modules/.bin/mocha' ],
  [ 'type', 'git' ],
  [ 'url', 'https://github.com/eugeneware/pairs.git' ],
  [ 'version', '0.0.1' ] ]
```

### pairs.index(key, value, emit)

An indexer function that can be used with [subindex](https://github.com/eugeneware/subindex)
to generate indexes using the pairs function for every json object stored in a levelup/leveldb
database.

Example Usage:

``` js
var levelQuery = require('level-queryengine'),
    jsonqqueryEngine = require('jsonquery-engine'),
    pairs = require('pairs'),
    levelup = require('levelup'),
    db = levelQuery(levelup('my-db'));

db.query.use(jsonqueryEngine());
db.ensureIndex('*', 'pairs', pairs.index);

db.batch(makeSomeData(), function (err) {
  db.query({ $and: [ { tags: 'tag1' }, { num: { $lt: 100 } } ] })
    .on('data', console.log);
});
```
