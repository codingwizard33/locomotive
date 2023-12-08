'use strict';

import serverless from 'serverless-http';

import app from './src/app.js';

export const api = serverless(app);
