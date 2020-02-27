/*
 *  Copyright (c) 2017 NiXPS, All rights reserved.
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

'use strict';

var _ = require('lodash');

/**
 * @brief checks the returned data for errors
 */
function checkResponse(command, data, cb, errorCB) {
    if (_.isPlainObject(data) && (data.error !== undefined)) {
        if (_.isFunction(errorCB)) {
            errorCB(data);
            return;
        }
        else if (data.error_code === 'no_license') {
            throw new Error('not licensed');
        }
        else if (data.error_code === 'session_expired') {
            throw new Error('session is expired');
        }
        else if (data.error_code === 'database_down') {
            throw new Error('database is down');
        }
        else {
            throw new Error('executing ' + command.method + ' failed: ' + data.error);
        }
    }

    cb(data);
    return data;
}


/**
 * @brief a generic server call implementation
 */
function makeServerCall(requestFunction) {
    return function serverCall(context, urlPostfix, command, cb, errorCB) {
        // Set the session if present in the context
        if (typeof context.m_parent.m_session === 'string' && context.m_parent.m_session.length > 0) {
            command.session = context.m_parent.m_session;
        }

        // Help the user if he passes a session result from api.auth.create_session
        if (_.isPlainObject(command.session)) {
            command.session = command.session.session;
        }

        // Support for Cloudflow sites
        if (context.m_parent.m_site !== undefined) {
            var new_command = {
                method: 'site.execute',
                site: context.m_parent.m_site,
                method_name: command.method,
                parameters: _.cloneDeep(command),
                options: {}
            };

            delete new_command.parameters.method;

            // Take over the session of the original command
            if (command.session !== undefined) {
                new_command.options.session = command.session;
                delete new_command.parameters.session;
            }

            command = new_command;
        }

        // Do the request
        return requestFunction(context, command, checkResponse, cb, errorCB);
    };
}

module.exports = makeServerCall;
