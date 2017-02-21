/*
 *  Copyright (c) 2017 NiXPS, All rights reserved.
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

'use strict';

var vm = require('vm');
var _ = require('lodash');
var syncRequest = require('sync-request');
var asyncServerCall = require('./asyncServerCall.js');
var syncServerCall = require('./syncServerCall.js');


/**
 * @brief returns the Cloudflow API object
 * @param cloudflowURI the uri of the server to access
 * @param sync a boolean that indicates if the returned api should be sync
 */
function getAPI(cloudflowURI, sync, apiJS) {
    var script;
    if (_.isString(apiJS) === true) {
        script = new vm.Script(apiJS);
    }
    else {
        apiJS = syncRequest('GET', cloudflowURI + '/portal.cgi?api=js').getBody('utf8');
        script = new vm.Script(apiJS);
    }

    var context = {};
    script.runInNewContext(context, apiJS, {
        filename: 'cloudflow/api.js'
    });

    context.api_async.m_address = cloudflowURI + '/portal.cgi';
    context.api_async.server_call = asyncServerCall;

    context.api_sync.m_address = cloudflowURI + '/portal.cgi';
    context.api_sync.server_call = syncServerCall;

    if (sync === true) {
        return context.api_sync;
    }
    return context.api_async;
}


module.exports = getAPI;

