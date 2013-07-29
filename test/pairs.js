var pairs = require('..'),
    pkg   = require('../package.json');
var expect = require('chai').expect;
describe('pairs', function() {
  it('should be able to turn a json document into a list of pairs', function(done) {
    var p = pairs(pkg);
    expect(p).to.deep.equals(
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
        [ 'version', '0.0.1' ] ]);
    done();
  });
});
