const express = require('express');
const Model = require('../models/AnimalModel');
const animalsRouter = express.Router();

const post = require('./services/post');
const getAll = require('./services/getAll');
const getOne = require('./services/getOne');
const update = require('./services/update');
const del = require('./services/del');

animalsRouter.post('', post(Model))
animalsRouter.get('', getAll(Model))
animalsRouter.get('/:id', getOne(Model))
animalsRouter.patch('/:id', update(Model))
animalsRouter.delete('/:id', del(Model))

module.exports = animalsRouter;