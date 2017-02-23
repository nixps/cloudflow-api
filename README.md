# cloudflow-api

## Description

This is node.js wrapper for the Cloudflow API.  It is available in async and sync flavors.


## Usage

	var cloudflowAPI = require('cloudflow-api');

	// Create a Cloudflow API wrapper for http://localhost:9090
	var apiSync = cloudflowAPI.getSyncAPI('http://localhost:9090');
	var apiAsync = cloudflowAPI.getAsyncAPI('http://localhost:9090');

	// Doing sync Cloudflow calls
	var session = apiSync.auth.create_session('user', 'password');

	// Setting the session
	apiSync.m_session = session.session;

	// Doing calls with that session
	var whitepapers = apiSync.whitepaper.list();

	// Doing async Cloudflow calls
	apiAsync.auth.create_session('user', 'password', function(session) {
		...
	}, function(error) {
		...
	});
