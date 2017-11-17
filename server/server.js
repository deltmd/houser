const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const tests_controller = require('./controllers/testCtrl.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

// app.post('/api/test', tests_controller.create);
app.get('/api/tests', tests_controller.readAll);
// app.get('/api/test/:id', tests_controller.readOne);
// app.put('/api/test/:id', tests_controller.update);
// app.delete('/api/test/:id', tests_controller.delete);

const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`Server listening on port ${port}.`) });