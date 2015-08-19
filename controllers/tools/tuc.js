'use strict';

module.exports = function (router) {
  router.get('/', function (req, res) {
    var model = {
      scripts: [
        {
          file: 'tools/tuc'
        }
      ]
    };

      res.render('tools/tuc', model);
  });
};
