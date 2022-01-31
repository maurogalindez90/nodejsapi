import express = require('express');
import { loadControllers } from 'awilix-express';
let bodyParser = require('body-parser');
export const app: express.Application = express();

import loadContainer from './container';

loadContainer(app);

app.use(bodyParser.json({limit: "50mb"}));

app.use(loadControllers(
    'controllers/*.ts',
    { cwd: __dirname }
));