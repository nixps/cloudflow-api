/*
 *  Copyright (c) 2017 NiXPS, All rights reserved.
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

'use strict';

var syncRequest = require('sync-request');
var serverCall = require('./cloudflowServerCall.js');


/**
 * @brief sync implementation of the Cloudflow server call
 */
function syncImplementation(context, command, checkResponse) {
    var res = syncRequest('POST', context.m_parent.m_address, {
        json: command
    });

    var jsonResponse = JSON.parse(res.getBody('utf8'));
    return checkResponse(command, jsonResponse, function() {}, function (error) {
        throw new Error(error);
    });
}

module.exports = serverCall(syncImplementation);
