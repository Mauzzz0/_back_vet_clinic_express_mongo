require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const changeConnect = async (log, pwd) => {
    if (log == undefined && pwd == undefined){
        log = 'username'
        pwd = 'password'
    }

    await mongoose.disconnect();
    try {
        await mongoose.connect(`mongodb://${log}:${pwd}@localhost:27017/`)
    }
    catch(er) {
        log = 'username'
        pwd = 'password'
        await mongoose.disconnect();
        await mongoose.connect(`mongodb://${log}:${pwd}@localhost:27017/`)
        return false;
    }

    return true;
}


changeConnect();

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

app.post('/login', async (req, res, next) => {
    const { login, password } = req.body;
    res.send({connected: await changeConnect(login, password)});
})


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
