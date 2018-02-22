var fs = require('fs');


module.exports = {
    protected: function(cb) {
       fs.readFile('./utils/token.txt', cb);
    }
};
