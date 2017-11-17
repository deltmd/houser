const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
app.use ( cors() );
massive( process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));


app.use( session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))

app.get('/api/tests', tests_controller.readAll);

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${ port }.`); } );