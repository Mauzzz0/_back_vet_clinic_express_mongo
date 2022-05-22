const express = require('express');
const Model = require('../models/UserModel');
const usersRouter = express.Router();

const post = require('./services/post');
const getAll = require('./services/getAll');
const getOne = require('./services/getOne');
const update = require('./services/update');
const del = require('./services/del');

usersRouter.post('', post(Model))
usersRouter.get('', getAll(Model))
usersRouter.get('/:id', getOne(Model))
usersRouter.patch('/:id', update(Model))
usersRouter.delete('/:id', del(Model))

module.exports = usersRouter;