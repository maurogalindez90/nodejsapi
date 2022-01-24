import express = require('express');
import { loadControllers } from 'awilix-express'

export const app: express.Application = express();

import loadContainer from './container';

loadContainer(app);


app.use(loadControllers(
    'controllers/*.ts',
    { cwd: __dirname }
))