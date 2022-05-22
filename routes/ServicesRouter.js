const express = require('express');
const Model = require('../models/ServiceModel');
const serviceRouter = express.Router();

const post = require('./services/post');
const getAll = require('./services/getAll');
const getOne = require('./services/getOne');
const update = require('./services/update');
const del = require('./services/del');

serviceRouter.post('', post(Model))
serviceRouter.get('', getAll(Model))
serviceRouter.get('/:id', getOne(Model))
serviceRouter.patch('/:id', update(Model))
serviceRouter.delete('/:id', del(Model))

module.exports = serviceRouter;