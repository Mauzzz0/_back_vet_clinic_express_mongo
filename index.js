require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const animalsRouter = require('./routes/AnimalsRouter');
const appointmentsRouter = require('./routes/AppointmentsRouter');
const clinicsRouter = require('./routes/ClinicsRouter');
const servicesRouter = require('./routes/ServicesRouter');
const usersRouter = require('./routes/UsersRouter');

app.use((req,res,next) => {
    console.log('======' + req.method + '\nurl: ' + req.path + '\nbody: ',  req.body, '\n');
    next();
})

app.use('/api/animals', animalsRouter)
app.use('/api/appointments', appointmentsRouter)
app.use('/api/clinics', clinicsRouter)
app.use('/api/services', servicesRouter)
app.use('/api/users', usersRouter)


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
