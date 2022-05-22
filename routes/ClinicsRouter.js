const express = require('express');
const Model = require('../models/ClinicModel');
const clinicsRouter = express.Router();

const post = require('./services/post');
const getAll = require('./services/getAll');
const getOne = require('./services/getOne');
const update = require('./services/update');
const del = require('./services/del');

clinicsRouter.post('', post(Model))
clinicsRouter.get('', getAll(Model))
clinicsRouter.get('/:id', getOne(Model))
clinicsRouter.patch('/:id', update(Model))
clinicsRouter.delete('/:id', del(Model))

module.exports = clinicsRouter;