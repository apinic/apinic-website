'use strict';

var MenuModel = require('../models/menu');

var menuModel = new MenuModel();

module.exports = function getMenu() {
  return function (req, res, next) {
    res.locals.menu = menuModel
    next();
  };
};
