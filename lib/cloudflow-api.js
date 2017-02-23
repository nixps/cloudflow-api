/*
 *  Copyright (c) 2017 NiXPS, All rights reserved.
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

'use strict';

var asyncServerCall = require('./asyncServerCall.js');
var syncServerCall = require('./syncServerCall.js');
var CloudflowAPI = require('./api.js');

function getAPISync(cloudflowURI) {
    var api = new CloudflowAPI();
    api.m_address = cloudflowURI + '/portal.cgi';
    api.server_call = syncServerCall;
    return api;
}

function getAPIAsync(cloudflowURI) {
    var api = new CloudflowAPI();
    api.m_address = cloudflowURI + '/portal.cgi';
    api.server_call = asyncServerCall;
    return api;
}

module.exports = {
    getSyncAPI: getAPISync,
    getAsyncAPI: getAPIAsync
};
