# cloudflow-api

## Description

This is node.js wrapper for the Cloudflow API.  It is available in async and sync flavors.


## Usage

	var getCloudflowAPI = require('cloudflow-api');
	var apiSync = getCloudflowAPI('http://localhost:9090', true);
	var apiAsync = getCloudflowAPI('http://localhost:9090');

	// Doing sync Cloudflow calls
	var session = apiSync.auth.create_session('user', 'password');

	// Doing async Cloudflow calls
	apiAsync.auth.create_session('user', 'password', function(session) {
		...
	}, function(error) {
		...
	});


