const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');

const checkForSession = require('./middleware/checkForSession');

require('dotenv').config();

const tests_controller = require('./controllers/testCtrl');

const auth_controller = require('./controllers/auth_controller');

const app = express();

app.use( bodyParser.json() );
app.use ( cors() );
massive( process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));


app.use( session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))

app.use( checkForSession );

app.post('/api/auth/login', auth_controller.login);
app.post('/api/auth/register', auth_controller.register);
app.post( '/api/auth/logout', auth_controller.logOut);

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${ port }.`); } );