/*
 *  Copyright (c) 2017 NiXPS, All rights reserved.
 *
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

/* global describe, before, it, after */

'use strict';

var assert = require('power-assert');
var nock = require('nock');
var fs = require('fs');
var getCloudflowAPI = require('../');

describe('Cloudflow API', function () {
    var api;

    before(function() {
        api = getCloudflowAPI('http://localhost:9090', false, fs.readFileSync(__dirname + '/fixtures/api.js.stub', 'utf8').toString('utf8'));
    });

    it('it should return the current user', function(done) {
        nock.cleanAll();
        nock.disableNetConnect();
        var scope = nock('http://localhost:9090')
            .post('/portal.cgi', {
                'method':'auth.create_session',
                'user_name':'admin',
                'options':'admin'
            })
            .reply(200, {
                'session': '58a171ac870700a9000000055B8F3FC154915503B92AEFB6E2FFD9731487718938'
            });

        api.auth.create_session('admin', 'admin', function(response) {
            assert.equal(response.session, '58a171ac870700a9000000055B8F3FC154915503B92AEFB6E2FFD9731487718938');
            scope.done();
            done();
        });
    });


    it('it should return an error when a callback is specified and database is down', function(done) {
        nock.cleanAll();
        nock.disableNetConnect();
        var scope = nock('http://localhost:9090')
            .post('/portal.cgi', {
                'method':'auth.create_session',
                'user_name':'admin',
                'options':'admin'
            })
            .reply(200, {
                'error': 'database is down',
                'error_code': 'no_database'
            });

        api.auth.create_session('admin', 'admin', function() {
        }, function(error) {
            assert.equal(error.error_code, 'no_database');
            scope.done();
            done();
        });
    });

    after(function () {
        nock.cleanAll();
        nock.enableNetConnect();
    });
});
