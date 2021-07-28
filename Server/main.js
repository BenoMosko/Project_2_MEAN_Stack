const express = require('express');
const UsersRouter = require('./Routers/UsersRouter');
const cors = require('cors');

let app = express();

app.use(cors());

require('./Configs/database');

app.use(express.json());

app.use('/api/users', UsersRouter);

app.listen(8000);

