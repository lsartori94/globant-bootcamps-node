/*! Copyright Globant. All rights reserved. */
'use strict';

/**
 * Simple environment configuration loader
 */
const env = (process.env.APP_ENV || 'prd').toLowerCase();
const port = process.env.API_PORT || process.env.PORT || 9001;
const hostname = process.env.API_HOST || '0.0.0.0';
const basePath = process.env.API_BASE_PATH || '/api/v1';

module.exports = {
    // Execution mode
    env: env,

    // Server port
    port: port,

    // Server hostname
    hostname: hostname,
    
    // The base path of all routes for this server
    basePath: basePath
};
