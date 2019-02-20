/*! Copyright Globant. All rights reserved. */
'use strict';

/**
 * Miscellaneous utility functions
 */

const config = require('./config');
const _ = require('lodash');
const find = require('find');

module.exports = {
    loadRoutes: loadRoutes,
    log: log
};

/////////////////////////////////////////////////////////////

/**
 * Load all routes files
 * @param {} app
 */
function loadRoutes(path, app) {
    // Find all routes files
    const files = find.fileSync(/routes.js$/, path + '/../');

    files.forEach((file) => {
        log(`Load route file: ${file}`);
        require(file)(app);
    });
}

/**
 * Create a log to each element in args
 * @param {ApiLog[] | ApiLog} args - a log or list of logs to be process
 */
function log(args) {
    args = _.isArray(args) ? args : [args];
    console.log(
        `\n------------------ Api @ ${new Date().toISOString()} ------------------`
    );
    for (let i = 0, l = args.length; i < l; i++) {
        console.log(
            _.isObject(args[i]) ? JSON.stringify(args[i]) : args[i]
        );
    }
    console.log('\n');
}
