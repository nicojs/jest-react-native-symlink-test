const path = require('path');
require('fs')
    .symlink(path.resolve('node_modules'), path.resolve('sandbox/node_modules'), 'junction',
        err => err ? console.error(err) : console.log('Sym-linked node_modules under the sandbox directory'));