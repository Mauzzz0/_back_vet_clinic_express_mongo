const express = require('express');
const Model = require('../models/AppointmentModel');
const appointmentsRouter = express.Router();

const post = require('./services/post');
const getAll = require('./services/getAll');
const getOne = require('./services/getOne');
const update = require('./services/update');
const del = require('./services/del');

appointmentsRouter.post('', post(Model))
appointmentsRouter.get('', getAll(Model))
appointmentsRouter.get('/:id', getOne(Model))
appointmentsRouter.patch('/:id', update(Model))
appointmentsRouter.delete('/:id', del(Model))

module.exports = appointmentsRouter;