/***************************************************************************************************************************************
 * portal API
 */

function portal_api_portal(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_portal.prototype.get_proofscope_url = function (p_proofscope_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.get_proofscope_url' };
	if (p_proofscope_id !== undefined)
		l_dict.proofscope_id = p_proofscope_id

	return this.m_parent.server_call(this, "portal/get_proofscope_url", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.get_db_status = function (p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.get_db_status' };
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "portal/get_db_status", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.get_stats = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.get_stats' };

	return this.m_parent.server_call(this, "portal/get_stats", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.get_active_users = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.get_active_users' };

	return this.m_parent.server_call(this, "portal/get_active_users", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.get_workers_pending = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.get_workers_pending' };

	return this.m_parent.server_call(this, "portal/get_workers_pending", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.log = function (p_severity, p_message, p_url, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.log' };
	if (p_severity !== undefined)
		l_dict.severity = p_severity
	if (p_message !== undefined)
		l_dict.message = p_message
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "portal/log", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.version = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.version' };

	return this.m_parent.server_call(this, "portal/version", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.setup = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.setup' };

	return this.m_parent.server_call(this, "portal/setup", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.send_test_mail = function (p_smtp_to, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.send_test_mail' };
	if (p_smtp_to !== undefined)
		l_dict.smtp_to = p_smtp_to

	return this.m_parent.server_call(this, "portal/send_test_mail", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.check_file_store = function (p_path, p_test_file, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.check_file_store' };
	if (p_path !== undefined)
		l_dict.path = p_path
	if (p_test_file !== undefined)
		l_dict.test_file = p_test_file

	return this.m_parent.server_call(this, "portal/check_file_store", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.flush = function (p_collection, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.flush' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection

	return this.m_parent.server_call(this, "portal/flush", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.remove_filestore = function (p_filestore, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.remove_filestore' };
	if (p_filestore !== undefined)
		l_dict.filestore = p_filestore

	return this.m_parent.server_call(this, "portal/remove_filestore", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.drop_blue_collar_definitions = function (p_mode, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.drop_blue_collar_definitions' };
	if (p_mode !== undefined)
		l_dict.mode = p_mode

	return this.m_parent.server_call(this, "portal/drop_blue_collar_definitions", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.scan_addons = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.scan_addons' };

	return this.m_parent.server_call(this, "portal/scan_addons", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.get_logical = function (p_logical, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.get_logical' };
	if (p_logical !== undefined)
		l_dict.logical = p_logical
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "portal/get_logical", l_dict, p_callback, p_error_callback);
}

portal_api_portal.prototype.get_file_store_mappings = function (p_work_server, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'portal.get_file_store_mappings' };
	if (p_work_server !== undefined)
		l_dict.work_server = p_work_server
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "portal/get_file_store_mappings", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * attributes API
 */

function portal_api_attributes(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_attributes.prototype.remove = function (p_attribute_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'attributes.remove' };
	if (p_attribute_id !== undefined)
		l_dict.attribute_id = p_attribute_id

	return this.m_parent.server_call(this, "attributes/remove", l_dict, p_callback, p_error_callback);
}

portal_api_attributes.prototype.list_all = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'attributes.list_all' };

	return this.m_parent.server_call(this, "attributes/list_all", l_dict, p_callback, p_error_callback);
}

portal_api_attributes.prototype.list_for_contact = function (p_contact_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'attributes.list_for_contact' };
	if (p_contact_id !== undefined)
		l_dict.contact_id = p_contact_id

	return this.m_parent.server_call(this, "attributes/list_for_contact", l_dict, p_callback, p_error_callback);
}

portal_api_attributes.prototype.add_to_contact_by_id = function (p_contact_id, p_attribute_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'attributes.add_to_contact_by_id' };
	if (p_contact_id !== undefined)
		l_dict.contact_id = p_contact_id
	if (p_attribute_id !== undefined)
		l_dict.attribute_id = p_attribute_id

	return this.m_parent.server_call(this, "attributes/add_to_contact_by_id", l_dict, p_callback, p_error_callback);
}

portal_api_attributes.prototype.add_to_contact_by_name = function (p_contact_id, p_attribute_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'attributes.add_to_contact_by_name' };
	if (p_contact_id !== undefined)
		l_dict.contact_id = p_contact_id
	if (p_attribute_name !== undefined)
		l_dict.attribute_name = p_attribute_name

	return this.m_parent.server_call(this, "attributes/add_to_contact_by_name", l_dict, p_callback, p_error_callback);
}

portal_api_attributes.prototype.change_name = function (p_attribute_id, p_attribute_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'attributes.change_name' };
	if (p_attribute_id !== undefined)
		l_dict.attribute_id = p_attribute_id
	if (p_attribute_name !== undefined)
		l_dict.attribute_name = p_attribute_name

	return this.m_parent.server_call(this, "attributes/change_name", l_dict, p_callback, p_error_callback);
}

portal_api_attributes.prototype.add = function (p_attribute_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'attributes.add' };
	if (p_attribute_name !== undefined)
		l_dict.attribute_name = p_attribute_name

	return this.m_parent.server_call(this, "attributes/add", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * scopes API
 */

function portal_api_scopes(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_scopes.prototype.remove = function (p_scope_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'scopes.remove' };
	if (p_scope_id !== undefined)
		l_dict.scope_id = p_scope_id

	return this.m_parent.server_call(this, "scopes/remove", l_dict, p_callback, p_error_callback);
}

portal_api_scopes.prototype.list_all = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'scopes.list_all' };

	return this.m_parent.server_call(this, "scopes/list_all", l_dict, p_callback, p_error_callback);
}

portal_api_scopes.prototype.update = function (p_scope_id, p_name, p_filter, p_welcomepage, p_callback, p_error_callback)
{
	var l_dict = { method: 'scopes.update' };
	if (p_scope_id !== undefined)
		l_dict.scope_id = p_scope_id
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_filter !== undefined)
		l_dict.filter = p_filter
	if (p_welcomepage !== undefined)
		l_dict.welcomepage = p_welcomepage

	return this.m_parent.server_call(this, "scopes/update", l_dict, p_callback, p_error_callback);
}

portal_api_scopes.prototype.add = function (p_name, p_filter, p_welcomepage, p_callback, p_error_callback)
{
	var l_dict = { method: 'scopes.add' };
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_filter !== undefined)
		l_dict.filter = p_filter
	if (p_welcomepage !== undefined)
		l_dict.welcomepage = p_welcomepage

	return this.m_parent.server_call(this, "scopes/add", l_dict, p_callback, p_error_callback);
}

portal_api_scopes.prototype.get = function (p_name, p_add_if_missing, p_callback, p_error_callback)
{
	var l_dict = { method: 'scopes.get' };
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_add_if_missing !== undefined)
		l_dict.add_if_missing = p_add_if_missing

	return this.m_parent.server_call(this, "scopes/get", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * assets API
 */

function portal_api_assets(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_assets.prototype.get = function (p__id, p_callback, p_error_callback)
{
	var l_dict = { method: 'assets.get' };
	if (p__id !== undefined)
		l_dict._id = p__id

	return this.m_parent.server_call(this, "assets/get", l_dict, p_callback, p_error_callback);
}

portal_api_assets.prototype.get_with_url = function (p_url, p_sub, p_callback, p_error_callback)
{
	var l_dict = { method: 'assets.get_with_url' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_sub !== undefined)
		l_dict.sub = p_sub

	return this.m_parent.server_call(this, "assets/get_with_url", l_dict, p_callback, p_error_callback);
}

portal_api_assets.prototype.get_cloudflow_url = function (p_url, p_sub, p_type, p_callback, p_error_callback)
{
	var l_dict = { method: 'assets.get_cloudflow_url' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_sub !== undefined)
		l_dict.sub = p_sub
	if (p_type !== undefined)
		l_dict.type = p_type

	return this.m_parent.server_call(this, "assets/get_cloudflow_url", l_dict, p_callback, p_error_callback);
}

portal_api_assets.prototype.reset_metadata = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'assets.reset_metadata' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "assets/reset_metadata", l_dict, p_callback, p_error_callback);
}

portal_api_assets.prototype.reset_thumb = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'assets.reset_thumb' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "assets/reset_thumb", l_dict, p_callback, p_error_callback);
}

portal_api_assets.prototype.reset_render = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'assets.reset_render' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "assets/reset_render", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * templates API
 */

function portal_api_templates(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_templates.prototype.remove = function (p_template_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'templates.remove' };
	if (p_template_id !== undefined)
		l_dict.template_id = p_template_id

	return this.m_parent.server_call(this, "templates/remove", l_dict, p_callback, p_error_callback);
}

portal_api_templates.prototype.list_all = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'templates.list_all' };

	return this.m_parent.server_call(this, "templates/list_all", l_dict, p_callback, p_error_callback);
}

portal_api_templates.prototype.update = function (p_template_id, p_name, p_language, p_subject, p_message, p_callback, p_error_callback)
{
	var l_dict = { method: 'templates.update' };
	if (p_template_id !== undefined)
		l_dict.template_id = p_template_id
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_language !== undefined)
		l_dict.language = p_language
	if (p_subject !== undefined)
		l_dict.subject = p_subject
	if (p_message !== undefined)
		l_dict.message = p_message

	return this.m_parent.server_call(this, "templates/update", l_dict, p_callback, p_error_callback);
}

portal_api_templates.prototype.add = function (p_name, p_language, p_subject, p_message, p_callback, p_error_callback)
{
	var l_dict = { method: 'templates.add' };
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_language !== undefined)
		l_dict.language = p_language
	if (p_subject !== undefined)
		l_dict.subject = p_subject
	if (p_message !== undefined)
		l_dict.message = p_message

	return this.m_parent.server_call(this, "templates/add", l_dict, p_callback, p_error_callback);
}

portal_api_templates.prototype.fill_template = function (p_template_name, p_template_language, p_variable_map, p_callback, p_error_callback)
{
	var l_dict = { method: 'templates.fill_template' };
	if (p_template_name !== undefined)
		l_dict.template_name = p_template_name
	if (p_template_language !== undefined)
		l_dict.template_language = p_template_language
	if (p_variable_map !== undefined)
		l_dict.variable_map = p_variable_map

	return this.m_parent.server_call(this, "templates/fill_template", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * panzer API
 */

function portal_api_panzer(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer.prototype.exportpdf = function (p_asset_id, p_filepath, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.exportpdf' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_filepath !== undefined)
		l_dict.filepath = p_filepath

	return this.m_parent.server_call(this, "panzer/exportpdf", l_dict, p_callback, p_error_callback);
}

portal_api_panzer.prototype.get_registration = function (p_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.get_registration' };
	if (p_email !== undefined)
		l_dict.email = p_email

	return this.m_parent.server_call(this, "panzer/get_registration", l_dict, p_callback, p_error_callback);
}

portal_api_panzer.prototype.list_registrations = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.list_registrations' };

	return this.m_parent.server_call(this, "panzer/list_registrations", l_dict, p_callback, p_error_callback);
}

portal_api_panzer.prototype.disable_registration = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.disable_registration' };

	return this.m_parent.server_call(this, "panzer/disable_registration", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * panzer.costcalc API
 */

function portal_api_panzer_costcalc(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer_costcalc.prototype.list = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.costcalc.list' };

	return this.m_parent.server_call(this, "panzer/costcalc/list", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * panzer.device API
 */

function portal_api_panzer_device(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer_device.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.device.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/device/get", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_device.prototype.save = function (p_record, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.device.save' };
	if (p_record !== undefined)
		l_dict.record = p_record

	return this.m_parent.server_call(this, "panzer/device/save", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_device.prototype.list = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.device.list' };

	return this.m_parent.server_call(this, "panzer/device/list", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * panzer.jobinfo API
 */

function portal_api_panzer_jobinfo(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer_jobinfo.prototype.sendpjl = function (p_ip, p_port, p_command, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.jobinfo.sendpjl' };
	if (p_ip !== undefined)
		l_dict.ip = p_ip
	if (p_port !== undefined)
		l_dict.port = p_port
	if (p_command !== undefined)
		l_dict.command = p_command

	return this.m_parent.server_call(this, "panzer/jobinfo/sendpjl", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_jobinfo.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.jobinfo.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/jobinfo/get", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_jobinfo.prototype.remove = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.jobinfo.remove' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/jobinfo/remove", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_jobinfo.prototype.save = function (p_record, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.jobinfo.save' };
	if (p_record !== undefined)
		l_dict.record = p_record

	return this.m_parent.server_call(this, "panzer/jobinfo/save", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_jobinfo.prototype.send_raw = function (p_ip, p_port, p_command, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.jobinfo.send_raw' };
	if (p_ip !== undefined)
		l_dict.ip = p_ip
	if (p_port !== undefined)
		l_dict.port = p_port
	if (p_command !== undefined)
		l_dict.command = p_command

	return this.m_parent.server_call(this, "panzer/jobinfo/send_raw", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_jobinfo.prototype.setdatablob = function (p_id, p_blob, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.jobinfo.setdatablob' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_blob !== undefined)
		l_dict.blob = p_blob

	return this.m_parent.server_call(this, "panzer/jobinfo/setdatablob", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_jobinfo.prototype.getdatablob = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.jobinfo.getdatablob' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/jobinfo/getdatablob", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * panzer.layoutdb API
 */

function portal_api_panzer_layoutdb(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer_layoutdb.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layoutdb.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/layoutdb/get", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layoutdb.prototype.remove = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layoutdb.remove' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/layoutdb/remove", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layoutdb.prototype.save = function (p_record, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layoutdb.save' };
	if (p_record !== undefined)
		l_dict.record = p_record

	return this.m_parent.server_call(this, "panzer/layoutdb/save", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layoutdb.prototype.list = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layoutdb.list' };

	return this.m_parent.server_call(this, "panzer/layoutdb/list", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * panzer.lmsstate API
 */

function portal_api_panzer_lmsstate(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer_lmsstate.prototype.list = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.lmsstate.list' };

	return this.m_parent.server_call(this, "panzer/lmsstate/list", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * panzer.media API
 */

function portal_api_panzer_media(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer_media.prototype.remove = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.media.remove' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/media/remove", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_media.prototype.save = function (p_record, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.media.save' };
	if (p_record !== undefined)
		l_dict.record = p_record

	return this.m_parent.server_call(this, "panzer/media/save", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_media.prototype.get = function (p_id, p_size_width, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.media.get' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_size_width !== undefined)
		l_dict.size_width = p_size_width

	return this.m_parent.server_call(this, "panzer/media/get", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_media.prototype.list = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.media.list' };

	return this.m_parent.server_call(this, "panzer/media/list", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * panzer.layout API
 */

function portal_api_panzer_layout(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer_layout.prototype.createlayout = function (p_parameters, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.createlayout' };
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters

	return this.m_parent.server_call(this, "panzer/layout/createlayout", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layout.prototype.createlayoutvdp = function (p_parameters, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.createlayoutvdp' };
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters

	return this.m_parent.server_call(this, "panzer/layout/createlayoutvdp", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layout.prototype.updateeyemarks = function (p_layout, p_eyemarks, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.updateeyemarks' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_eyemarks !== undefined)
		l_dict.eyemarks = p_eyemarks

	return this.m_parent.server_call(this, "panzer/layout/updateeyemarks", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layout.prototype.applymargins = function (p_layout, p_margins, p_minheight, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.applymargins' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_margins !== undefined)
		l_dict.margins = p_margins
	if (p_minheight !== undefined)
		l_dict.minheight = p_minheight

	return this.m_parent.server_call(this, "panzer/layout/applymargins", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layout.prototype.openfile = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.openfile' };

	return this.m_parent.server_call(this, "panzer/layout/openfile", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layout.prototype.inkcoverages = function (p_path, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.inkcoverages' };
	if (p_path !== undefined)
		l_dict.path = p_path

	return this.m_parent.server_call(this, "panzer/layout/inkcoverages", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layout.prototype.savelayoutdb = function (p_layout, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.savelayoutdb' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout

	return this.m_parent.server_call(this, "panzer/layout/savelayoutdb", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layout.prototype.resoterlayoutdb = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.resoterlayoutdb' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/layout/resoterlayoutdb", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layout.prototype.savelayout = function (p_parameters, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.savelayout' };
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters

	return this.m_parent.server_call(this, "panzer/layout/savelayout", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_layout.prototype.sendlayout = function (p_layout, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.layout.sendlayout' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout

	return this.m_parent.server_call(this, "panzer/layout/sendlayout", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * panzer.preference API
 */

function portal_api_panzer_preference(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer_preference.prototype.list = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.preference.list' };

	return this.m_parent.server_call(this, "panzer/preference/list", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_preference.prototype.save = function (p_record, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.preference.save' };
	if (p_record !== undefined)
		l_dict.record = p_record

	return this.m_parent.server_call(this, "panzer/preference/save", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * panzer.printqueue API
 */

function portal_api_panzer_printqueue(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_panzer_printqueue.prototype.list = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.printqueue.list' };

	return this.m_parent.server_call(this, "panzer/printqueue/list", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_printqueue.prototype.remove = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.printqueue.remove' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/printqueue/remove", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_printqueue.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.printqueue.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "panzer/printqueue/get", l_dict, p_callback, p_error_callback);
}

portal_api_panzer_printqueue.prototype.save = function (p_jobdata, p_callback, p_error_callback)
{
	var l_dict = { method: 'panzer.printqueue.save' };
	if (p_jobdata !== undefined)
		l_dict.jobdata = p_jobdata

	return this.m_parent.server_call(this, "panzer/printqueue/save", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * utils API
 */

function portal_api_utils(p_parent)
{
	this.m_parent = p_parent;
}

/***************************************************************************************************************************************
 * utils.xml API
 */

function portal_api_utils_xml(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_utils_xml.prototype.read = function (p_xml, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.xml.read' };
	if (p_xml !== undefined)
		l_dict.xml = p_xml

	return this.m_parent.server_call(this, "utils/xml/read", l_dict, p_callback, p_error_callback);
}

portal_api_utils_xml.prototype.read_url = function (p_file_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.xml.read_url' };
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url

	return this.m_parent.server_call(this, "utils/xml/read_url", l_dict, p_callback, p_error_callback);
}

portal_api_utils_xml.prototype.write = function (p_json, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.xml.write' };
	if (p_json !== undefined)
		l_dict.json = p_json

	return this.m_parent.server_call(this, "utils/xml/write", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * utils.http API
 */

function portal_api_utils_http(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_utils_http.prototype.post = function (p_host, p_port, p_url, p_ssl, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.http.post' };
	if (p_host !== undefined)
		l_dict.host = p_host
	if (p_port !== undefined)
		l_dict.port = p_port
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_ssl !== undefined)
		l_dict.ssl = p_ssl
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "utils/http/post", l_dict, p_callback, p_error_callback);
}

portal_api_utils_http.prototype.post_data = function (p_host, p_port, p_url, p_ssl, p_content_type, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.http.post_data' };
	if (p_host !== undefined)
		l_dict.host = p_host
	if (p_port !== undefined)
		l_dict.port = p_port
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_ssl !== undefined)
		l_dict.ssl = p_ssl
	if (p_content_type !== undefined)
		l_dict.content_type = p_content_type
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "utils/http/post_data", l_dict, p_callback, p_error_callback);
}


portal_api_utils.prototype.format_date = function (p_secs_since_epoch, p_format, p_time_zone_offset, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.format_date' };
	if (p_secs_since_epoch !== undefined)
		l_dict.secs_since_epoch = p_secs_since_epoch
	if (p_format !== undefined)
		l_dict.format = p_format
	if (p_time_zone_offset !== undefined)
		l_dict.time_zone_offset = p_time_zone_offset

	return this.m_parent.server_call(this, "utils/format_date", l_dict, p_callback, p_error_callback);
}

portal_api_utils.prototype.uuid = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.uuid' };

	return this.m_parent.server_call(this, "utils/uuid", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * utils.csv API
 */

function portal_api_utils_csv(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_utils_csv.prototype.read = function (p_csv, p_column_sep, p_row_sep, p_use_headers, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.csv.read' };
	if (p_csv !== undefined)
		l_dict.csv = p_csv
	if (p_column_sep !== undefined)
		l_dict.column_sep = p_column_sep
	if (p_row_sep !== undefined)
		l_dict.row_sep = p_row_sep
	if (p_use_headers !== undefined)
		l_dict.use_headers = p_use_headers

	return this.m_parent.server_call(this, "utils/csv/read", l_dict, p_callback, p_error_callback);
}

portal_api_utils_csv.prototype.read_url = function (p_file_url, p_column_sep, p_row_sep, p_use_headers, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.csv.read_url' };
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url
	if (p_column_sep !== undefined)
		l_dict.column_sep = p_column_sep
	if (p_row_sep !== undefined)
		l_dict.row_sep = p_row_sep
	if (p_use_headers !== undefined)
		l_dict.use_headers = p_use_headers

	return this.m_parent.server_call(this, "utils/csv/read_url", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * utils.sql API
 */

function portal_api_utils_sql(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_utils_sql.prototype.query = function (p_db_url, p_query, p_params, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.sql.query' };
	if (p_db_url !== undefined)
		l_dict.db_url = p_db_url
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_params !== undefined)
		l_dict.params = p_params

	return this.m_parent.server_call(this, "utils/sql/query", l_dict, p_callback, p_error_callback);
}

portal_api_utils_sql.prototype.update = function (p_db_url, p_queries, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.sql.update' };
	if (p_db_url !== undefined)
		l_dict.db_url = p_db_url
	if (p_queries !== undefined)
		l_dict.queries = p_queries

	return this.m_parent.server_call(this, "utils/sql/update", l_dict, p_callback, p_error_callback);
}


portal_api_utils.prototype.hash = function (p_data, p_hash_method, p_encoding, p_callback, p_error_callback)
{
	var l_dict = { method: 'utils.hash' };
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_hash_method !== undefined)
		l_dict.hash_method = p_hash_method
	if (p_encoding !== undefined)
		l_dict.encoding = p_encoding

	return this.m_parent.server_call(this, "utils/hash", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * archive API
 */

function portal_api_archive(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_archive.prototype.unzip_data = function (p_archive, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'archive.unzip_data' };
	if (p_archive !== undefined)
		l_dict.archive = p_archive
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "archive/unzip_data", l_dict, p_callback, p_error_callback);
}

portal_api_archive.prototype.unzip_files = function (p_archive, p_folder, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'archive.unzip_files' };
	if (p_archive !== undefined)
		l_dict.archive = p_archive
	if (p_folder !== undefined)
		l_dict.folder = p_folder
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "archive/unzip_files", l_dict, p_callback, p_error_callback);
}

portal_api_archive.prototype.zip_data = function (p_archive_folder, p_archive_name, p_data_to_add, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'archive.zip_data' };
	if (p_archive_folder !== undefined)
		l_dict.archive_folder = p_archive_folder
	if (p_archive_name !== undefined)
		l_dict.archive_name = p_archive_name
	if (p_data_to_add !== undefined)
		l_dict.data_to_add = p_data_to_add
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "archive/zip_data", l_dict, p_callback, p_error_callback);
}

portal_api_archive.prototype.zip_files = function (p_archive_folder, p_archive_name, p_files_to_add, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'archive.zip_files' };
	if (p_archive_folder !== undefined)
		l_dict.archive_folder = p_archive_folder
	if (p_archive_name !== undefined)
		l_dict.archive_name = p_archive_name
	if (p_files_to_add !== undefined)
		l_dict.files_to_add = p_files_to_add
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "archive/zip_files", l_dict, p_callback, p_error_callback);
}

portal_api_archive.prototype.list_zip = function (p_archive, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'archive.list_zip' };
	if (p_archive !== undefined)
		l_dict.archive = p_archive
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "archive/list_zip", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * asset API
 */

function portal_api_asset(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_asset.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "asset/create", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "asset/delete", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "asset/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "asset/get", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "asset/list", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "asset/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "asset/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "asset/update", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.add_crop_zone = function (p_asset, p_crop_zone, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.add_crop_zone' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset
	if (p_crop_zone !== undefined)
		l_dict.crop_zone = p_crop_zone

	return this.m_parent.server_call(this, "asset/add_crop_zone", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.add_tag = function (p_asset, p_tag, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.add_tag' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset
	if (p_tag !== undefined)
		l_dict.tag = p_tag

	return this.m_parent.server_call(this, "asset/add_tag", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.add_to_database = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.add_to_database' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "asset/add_to_database", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.create_anonymous_url = function (p_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.create_anonymous_url' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/create_anonymous_url", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.download = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.download' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "asset/download", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.export_xfdf_with_options = function (p_asset_url, p_xfdf_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.export_xfdf_with_options' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_xfdf_url !== undefined)
		l_dict.xfdf_url = p_xfdf_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/export_xfdf_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.export_xfdf = function (p_asset_url, p_xfdf_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.export_xfdf' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_xfdf_url !== undefined)
		l_dict.xfdf_url = p_xfdf_url

	return this.m_parent.server_call(this, "asset/export_xfdf", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.get_by_url = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.get_by_url' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "asset/get_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.get_crop_zones = function (p_asset, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.get_crop_zones' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset

	return this.m_parent.server_call(this, "asset/get_crop_zones", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.get_tags = function (p_asset, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.get_tags' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset

	return this.m_parent.server_call(this, "asset/get_tags", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.has_all_tags = function (p_asset, p_tags, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.has_all_tags' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset
	if (p_tags !== undefined)
		l_dict.tags = p_tags

	return this.m_parent.server_call(this, "asset/has_all_tags", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.has_at_least_one_tag = function (p_asset, p_tags, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.has_at_least_one_tag' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset
	if (p_tags !== undefined)
		l_dict.tags = p_tags

	return this.m_parent.server_call(this, "asset/has_at_least_one_tag", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.has_tag = function (p_asset, p_tag, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.has_tag' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset
	if (p_tag !== undefined)
		l_dict.tag = p_tag

	return this.m_parent.server_call(this, "asset/has_tag", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.list_with_tag_query = function (p_query, p_tag_query, p_tag_mode, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.list_with_tag_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_tag_query !== undefined)
		l_dict.tag_query = p_tag_query
	if (p_tag_mode !== undefined)
		l_dict.tag_mode = p_tag_mode
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "asset/list_with_tag_query", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.list_with_tag_query_and_options = function (p_query, p_tag_query, p_tag_mode, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.list_with_tag_query_and_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_tag_query !== undefined)
		l_dict.tag_query = p_tag_query
	if (p_tag_mode !== undefined)
		l_dict.tag_mode = p_tag_mode
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/list_with_tag_query_and_options", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.remove_crop_zone = function (p_asset, p_crop_zone_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.remove_crop_zone' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset
	if (p_crop_zone_id !== undefined)
		l_dict.crop_zone_id = p_crop_zone_id

	return this.m_parent.server_call(this, "asset/remove_crop_zone", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.remove_tag = function (p_asset, p_tag, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.remove_tag' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset
	if (p_tag !== undefined)
		l_dict.tag = p_tag

	return this.m_parent.server_call(this, "asset/remove_tag", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.update_crop_zone = function (p_asset, p_crop_zone, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.update_crop_zone' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset
	if (p_crop_zone !== undefined)
		l_dict.crop_zone = p_crop_zone

	return this.m_parent.server_call(this, "asset/update_crop_zone", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.set_priority = function (p_asset, p_priority, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.set_priority' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset
	if (p_priority !== undefined)
		l_dict.priority = p_priority

	return this.m_parent.server_call(this, "asset/set_priority", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.import_xfdf = function (p_asset_url, p_xfdf_url, p_user_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.import_xfdf' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_xfdf_url !== undefined)
		l_dict.xfdf_url = p_xfdf_url
	if (p_user_id !== undefined)
		l_dict.user_id = p_user_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/import_xfdf", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.remove_tiles = function (p_url, p_thumb, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.remove_tiles' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_thumb !== undefined)
		l_dict.thumb = p_thumb

	return this.m_parent.server_call(this, "asset/remove_tiles", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.add_comment = function (p_asset_id, p_note_id, p_comment, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.add_comment' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_note_id !== undefined)
		l_dict.note_id = p_note_id
	if (p_comment !== undefined)
		l_dict.comment = p_comment
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/add_comment", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.add_comment_by_url = function (p_asset_url, p_note_id, p_comment, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.add_comment_by_url' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_note_id !== undefined)
		l_dict.note_id = p_note_id
	if (p_comment !== undefined)
		l_dict.comment = p_comment
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/add_comment_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.add_note = function (p_asset_id, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.add_note' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/add_note", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.add_note_by_url = function (p_asset_url, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.add_note_by_url' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/add_note_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.delete_note = function (p_asset_id, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.delete_note' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/delete_note", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.delete_note_by_url = function (p_asset_url, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.delete_note_by_url' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/delete_note_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.get_notes2 = function (p_asset_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.get_notes2' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/get_notes2", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.get_notes_by_url = function (p_asset_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.get_notes_by_url' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/get_notes_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.save_note = function (p_asset_id, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.save_note' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/save_note", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.save_note_by_url = function (p_asset_url, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.save_note_by_url' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "asset/save_note_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_asset.prototype.get_notes = function (p_asset, p_callback, p_error_callback)
{
	var l_dict = { method: 'asset.get_notes' };
	if (p_asset !== undefined)
		l_dict.asset = p_asset

	return this.m_parent.server_call(this, "asset/get_notes", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * auth API
 */

function portal_api_auth(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_auth.prototype.create_session = function (p_user_name, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'auth.create_session' };
	if (p_user_name !== undefined)
		l_dict.user_name = p_user_name
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "auth/create_session", l_dict, p_callback, p_error_callback);
}

portal_api_auth.prototype.create_session_with_expiry = function (p_user_name, p_user_pass, p_expiry, p_callback, p_error_callback)
{
	var l_dict = { method: 'auth.create_session_with_expiry' };
	if (p_user_name !== undefined)
		l_dict.user_name = p_user_name
	if (p_user_pass !== undefined)
		l_dict.user_pass = p_user_pass
	if (p_expiry !== undefined)
		l_dict.expiry = p_expiry

	return this.m_parent.server_call(this, "auth/create_session_with_expiry", l_dict, p_callback, p_error_callback);
}

portal_api_auth.prototype.generate_oauth2_url = function (p_provider, p_callback, p_error_callback)
{
	var l_dict = { method: 'auth.generate_oauth2_url' };
	if (p_provider !== undefined)
		l_dict.provider = p_provider

	return this.m_parent.server_call(this, "auth/generate_oauth2_url", l_dict, p_callback, p_error_callback);
}

portal_api_auth.prototype.get_current_user = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'auth.get_current_user' };

	return this.m_parent.server_call(this, "auth/get_current_user", l_dict, p_callback, p_error_callback);
}

portal_api_auth.prototype.login = function (p_user_name, p_user_pass, p_callback, p_error_callback)
{
	var l_dict = { method: 'auth.login' };
	if (p_user_name !== undefined)
		l_dict.user_name = p_user_name
	if (p_user_pass !== undefined)
		l_dict.user_pass = p_user_pass

	return this.m_parent.server_call(this, "auth/login", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * registry API
 */

function portal_api_registry(p_parent)
{
	this.m_parent = p_parent;
}

/***************************************************************************************************************************************
 * registry.cfapp API
 */

function portal_api_registry_cfapp(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_registry_cfapp.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'registry.cfapp.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "registry/cfapp/create", l_dict, p_callback, p_error_callback);
}

portal_api_registry_cfapp.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'registry.cfapp.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "registry/cfapp/delete", l_dict, p_callback, p_error_callback);
}

portal_api_registry_cfapp.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'registry.cfapp.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "registry/cfapp/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_registry_cfapp.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'registry.cfapp.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "registry/cfapp/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_registry_cfapp.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'registry.cfapp.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "registry/cfapp/get", l_dict, p_callback, p_error_callback);
}

portal_api_registry_cfapp.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'registry.cfapp.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "registry/cfapp/list", l_dict, p_callback, p_error_callback);
}

portal_api_registry_cfapp.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'registry.cfapp.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "registry/cfapp/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_registry_cfapp.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'registry.cfapp.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "registry/cfapp/update", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * curve API
 */

function portal_api_curve(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_curve.prototype.interpolate = function (p_curve_json, p_callback, p_error_callback)
{
	var l_dict = { method: 'curve.interpolate' };
	if (p_curve_json !== undefined)
		l_dict.curve_json = p_curve_json

	return this.m_parent.server_call(this, "curve/interpolate", l_dict, p_callback, p_error_callback);
}

portal_api_curve.prototype.read_file = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'curve.read_file' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "curve/read_file", l_dict, p_callback, p_error_callback);
}

portal_api_curve.prototype.write_file = function (p_data, p_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'curve.write_file' };
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "curve/write_file", l_dict, p_callback, p_error_callback);
}

portal_api_curve.prototype.cgats_import = function (p_cgats_file, p_density, p_callback, p_error_callback)
{
	var l_dict = { method: 'curve.cgats_import' };
	if (p_cgats_file !== undefined)
		l_dict.cgats_file = p_cgats_file
	if (p_density !== undefined)
		l_dict.density = p_density

	return this.m_parent.server_call(this, "curve/cgats_import", l_dict, p_callback, p_error_callback);
}

portal_api_curve.prototype.smoothen = function (p_points, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'curve.smoothen' };
	if (p_points !== undefined)
		l_dict.points = p_points
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "curve/smoothen", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * custom_objects API
 */

function portal_api_custom_objects(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_custom_objects.prototype.create = function (p_collection, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.create' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "custom_objects/create", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.delete = function (p_collection, p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.delete' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "custom_objects/delete", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.delete_multiple = function (p_collection, p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.delete_multiple' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "custom_objects/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.delete_by_query = function (p_collection, p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.delete_by_query' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "custom_objects/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.delete_many = function (p_collection, p_query, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.delete_many' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query

	return this.m_parent.server_call(this, "custom_objects/delete_many", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.get = function (p_collection, p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.get' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "custom_objects/get", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.list = function (p_collection, p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.list' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "custom_objects/list", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.list_with_options = function (p_collection, p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.list_with_options' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "custom_objects/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.remove_keys = function (p_collection, p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.remove_keys' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "custom_objects/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.remove_keys_by_query = function (p_collection, p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.remove_keys_by_query' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "custom_objects/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.set_is_scoped = function (p_collection, p_is_scoped, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.set_is_scoped' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_is_scoped !== undefined)
		l_dict.is_scoped = p_is_scoped

	return this.m_parent.server_call(this, "custom_objects/set_is_scoped", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.set_keys = function (p_collection, p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.set_keys' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "custom_objects/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.set_keys_by_query = function (p_collection, p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.set_keys_by_query' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "custom_objects/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.set_scope = function (p_collection, p_id, p_scope_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.set_scope' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_scope_id !== undefined)
		l_dict.scope_id = p_scope_id

	return this.m_parent.server_call(this, "custom_objects/set_scope", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.update = function (p_collection, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.update' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "custom_objects/update", l_dict, p_callback, p_error_callback);
}

portal_api_custom_objects.prototype.count = function (p_collection, p_query, p_callback, p_error_callback)
{
	var l_dict = { method: 'custom_objects.count' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query

	return this.m_parent.server_call(this, "custom_objects/count", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * database API
 */

function portal_api_database(p_parent)
{
	this.m_parent = p_parent;
}

/***************************************************************************************************************************************
 * database.collection API
 */

function portal_api_database_collection(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_database_collection.prototype.create_index = function (p_collection, p_index_name, p_key, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.collection.create_index' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_index_name !== undefined)
		l_dict.index_name = p_index_name
	if (p_key !== undefined)
		l_dict.key = p_key
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database/collection/create_index", l_dict, p_callback, p_error_callback);
}

portal_api_database_collection.prototype.get_all_names = function (p_database, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.collection.get_all_names' };
	if (p_database !== undefined)
		l_dict.database = p_database

	return this.m_parent.server_call(this, "database/collection/get_all_names", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * database.document API
 */

function portal_api_database_document(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_database_document.prototype.count = function (p_collection, p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.count' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database/document/count", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.create = function (p_collection, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.create' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "database/document/create", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.create_by_url = function (p_url, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.create_by_url' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "database/document/create_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.delete = function (p_collection, p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.delete' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "database/document/delete", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.delete_multiple = function (p_collection, p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.delete_multiple' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "database/document/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.delete_by_query = function (p_collection, p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.delete_by_query' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database/document/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.get = function (p_collection, p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.get' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "database/document/get", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.get_by_url = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.get_by_url' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "database/document/get_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.list = function (p_collection, p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.list' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "database/document/list", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.list_with_options = function (p_collection, p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.list_with_options' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database/document/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.remove_keys = function (p_collection, p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.remove_keys' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "database/document/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.remove_keys_by_query = function (p_collection, p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.remove_keys_by_query' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database/document/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.set_keys = function (p_collection, p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.set_keys' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "database/document/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.set_keys_by_query = function (p_collection, p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.set_keys_by_query' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database/document/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_database_document.prototype.update = function (p_collection, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'database.document.update' };
	if (p_collection !== undefined)
		l_dict.collection = p_collection
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "database/document/update", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * email API
 */

function portal_api_email(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_email.prototype.send_mail = function (p_email_address, p_subject, p_body, p_callback, p_error_callback)
{
	var l_dict = { method: 'email.send_mail' };
	if (p_email_address !== undefined)
		l_dict.email_address = p_email_address
	if (p_subject !== undefined)
		l_dict.subject = p_subject
	if (p_body !== undefined)
		l_dict.body = p_body

	return this.m_parent.server_call(this, "email/send_mail", l_dict, p_callback, p_error_callback);
}

portal_api_email.prototype.send_mail_with_attachements = function (p_email_address, p_subject, p_body, p_attachments, p_callback, p_error_callback)
{
	var l_dict = { method: 'email.send_mail_with_attachements' };
	if (p_email_address !== undefined)
		l_dict.email_address = p_email_address
	if (p_subject !== undefined)
		l_dict.subject = p_subject
	if (p_body !== undefined)
		l_dict.body = p_body
	if (p_attachments !== undefined)
		l_dict.attachments = p_attachments

	return this.m_parent.server_call(this, "email/send_mail_with_attachements", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * file API
 */

function portal_api_file(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_file.prototype.compare_files_with_options = function (p_first_file, p_second_file, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.compare_files_with_options' };
	if (p_first_file !== undefined)
		l_dict.first_file = p_first_file
	if (p_second_file !== undefined)
		l_dict.second_file = p_second_file
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/compare_files_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.compare_files = function (p_first_file, p_second_file, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.compare_files' };
	if (p_first_file !== undefined)
		l_dict.first_file = p_first_file
	if (p_second_file !== undefined)
		l_dict.second_file = p_second_file

	return this.m_parent.server_call(this, "file/compare_files", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.copy_file_with_options = function (p_from_file, p_to_file_or_folder, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.copy_file_with_options' };
	if (p_from_file !== undefined)
		l_dict.from_file = p_from_file
	if (p_to_file_or_folder !== undefined)
		l_dict.to_file_or_folder = p_to_file_or_folder
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/copy_file_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.copy_file = function (p_from_file, p_to_file_or_folder, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.copy_file' };
	if (p_from_file !== undefined)
		l_dict.from_file = p_from_file
	if (p_to_file_or_folder !== undefined)
		l_dict.to_file_or_folder = p_to_file_or_folder

	return this.m_parent.server_call(this, "file/copy_file", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.copy_file_and_overwrite = function (p_from_file, p_to_file_or_folder, p_overwrite, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.copy_file_and_overwrite' };
	if (p_from_file !== undefined)
		l_dict.from_file = p_from_file
	if (p_to_file_or_folder !== undefined)
		l_dict.to_file_or_folder = p_to_file_or_folder
	if (p_overwrite !== undefined)
		l_dict.overwrite = p_overwrite

	return this.m_parent.server_call(this, "file/copy_file_and_overwrite", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.copy_file_with_unique_name = function (p_from_file, p_to_file_or_folder, p_unique_name_mode, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.copy_file_with_unique_name' };
	if (p_from_file !== undefined)
		l_dict.from_file = p_from_file
	if (p_to_file_or_folder !== undefined)
		l_dict.to_file_or_folder = p_to_file_or_folder
	if (p_unique_name_mode !== undefined)
		l_dict.unique_name_mode = p_unique_name_mode

	return this.m_parent.server_call(this, "file/copy_file_with_unique_name", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.copy_folder = function (p_from_folder, p_to_folder, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.copy_folder' };
	if (p_from_folder !== undefined)
		l_dict.from_folder = p_from_folder
	if (p_to_folder !== undefined)
		l_dict.to_folder = p_to_folder
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/copy_folder", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.create_folder_with_options = function (p_inside_folder, p_folder_to_create, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.create_folder_with_options' };
	if (p_inside_folder !== undefined)
		l_dict.inside_folder = p_inside_folder
	if (p_folder_to_create !== undefined)
		l_dict.folder_to_create = p_folder_to_create
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/create_folder_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.create_folder = function (p_inside_folder, p_folder_to_create, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.create_folder' };
	if (p_inside_folder !== undefined)
		l_dict.inside_folder = p_inside_folder
	if (p_folder_to_create !== undefined)
		l_dict.folder_to_create = p_folder_to_create

	return this.m_parent.server_call(this, "file/create_folder", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.delete_file_with_options = function (p_file, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.delete_file_with_options' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/delete_file_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.delete_file = function (p_file, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.delete_file' };
	if (p_file !== undefined)
		l_dict.file = p_file

	return this.m_parent.server_call(this, "file/delete_file", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.delete_folder_with_options = function (p_folder, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.delete_folder_with_options' };
	if (p_folder !== undefined)
		l_dict.folder = p_folder
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/delete_folder_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.delete_folder = function (p_folder, p_contents_only, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.delete_folder' };
	if (p_folder !== undefined)
		l_dict.folder = p_folder
	if (p_contents_only !== undefined)
		l_dict.contents_only = p_contents_only

	return this.m_parent.server_call(this, "file/delete_folder", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.does_exist = function (p_file_or_folder, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.does_exist' };
	if (p_file_or_folder !== undefined)
		l_dict.file_or_folder = p_file_or_folder

	return this.m_parent.server_call(this, "file/does_exist", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.get_file_info = function (p_file, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.get_file_info' };
	if (p_file !== undefined)
		l_dict.file = p_file

	return this.m_parent.server_call(this, "file/get_file_info", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.get_file_info_from_file = function (p_file, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.get_file_info_from_file' };
	if (p_file !== undefined)
		l_dict.file = p_file

	return this.m_parent.server_call(this, "file/get_file_info_from_file", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.get_predefined_folder = function (p_folder_type, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.get_predefined_folder' };
	if (p_folder_type !== undefined)
		l_dict.folder_type = p_folder_type

	return this.m_parent.server_call(this, "file/get_predefined_folder", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.list_folder = function (p_folder, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.list_folder' };
	if (p_folder !== undefined)
		l_dict.folder = p_folder
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/list_folder", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.move_file_with_options = function (p_from_file, p_to_file_or_folder, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.move_file_with_options' };
	if (p_from_file !== undefined)
		l_dict.from_file = p_from_file
	if (p_to_file_or_folder !== undefined)
		l_dict.to_file_or_folder = p_to_file_or_folder
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/move_file_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.move_file = function (p_from_file, p_to_file_or_folder, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.move_file' };
	if (p_from_file !== undefined)
		l_dict.from_file = p_from_file
	if (p_to_file_or_folder !== undefined)
		l_dict.to_file_or_folder = p_to_file_or_folder

	return this.m_parent.server_call(this, "file/move_file", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.move_file_and_overwrite = function (p_from_file, p_to_file_or_folder, p_overwrite, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.move_file_and_overwrite' };
	if (p_from_file !== undefined)
		l_dict.from_file = p_from_file
	if (p_to_file_or_folder !== undefined)
		l_dict.to_file_or_folder = p_to_file_or_folder
	if (p_overwrite !== undefined)
		l_dict.overwrite = p_overwrite

	return this.m_parent.server_call(this, "file/move_file_and_overwrite", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.move_file_with_unique_name = function (p_from_file, p_to_file_or_folder, p_unique_name_mode, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.move_file_with_unique_name' };
	if (p_from_file !== undefined)
		l_dict.from_file = p_from_file
	if (p_to_file_or_folder !== undefined)
		l_dict.to_file_or_folder = p_to_file_or_folder
	if (p_unique_name_mode !== undefined)
		l_dict.unique_name_mode = p_unique_name_mode

	return this.m_parent.server_call(this, "file/move_file_with_unique_name", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.move_folder = function (p_from_folder, p_to_folder, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.move_folder' };
	if (p_from_folder !== undefined)
		l_dict.from_folder = p_from_folder
	if (p_to_folder !== undefined)
		l_dict.to_folder = p_to_folder
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/move_folder", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.move_file_to_trash = function (p_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.move_file_to_trash' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/move_file_to_trash", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.ospath_to_url = function (p_ospath, p_base_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.ospath_to_url' };
	if (p_ospath !== undefined)
		l_dict.ospath = p_ospath
	if (p_base_url !== undefined)
		l_dict.base_url = p_base_url

	return this.m_parent.server_call(this, "file/ospath_to_url", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.read_json_file = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.read_json_file' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "file/read_json_file", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * file.json API
 */

function portal_api_file_json(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_file_json.prototype.read = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.json.read' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "file/json/read", l_dict, p_callback, p_error_callback);
}


portal_api_file.prototype.rewrite_ospath = function (p_ospath, p_from_notation, p_to_notation, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.rewrite_ospath' };
	if (p_ospath !== undefined)
		l_dict.ospath = p_ospath
	if (p_from_notation !== undefined)
		l_dict.from_notation = p_from_notation
	if (p_to_notation !== undefined)
		l_dict.to_notation = p_to_notation

	return this.m_parent.server_call(this, "file/rewrite_ospath", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.set_file_info = function (p_file, p_file_info, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.set_file_info' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_file_info !== undefined)
		l_dict.file_info = p_file_info

	return this.m_parent.server_call(this, "file/set_file_info", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.url_to_ospath = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.url_to_ospath' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "file/url_to_ospath", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.write_json_file = function (p_data, p_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.write_json_file' };
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/write_json_file", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * file.json API
 */

function portal_api_file_json(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_file_json.prototype.write = function (p_data, p_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.json.write' };
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/json/write", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * file.text API
 */

function portal_api_file_text(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_file_text.prototype.read = function (p_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.text.read' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/text/read", l_dict, p_callback, p_error_callback);
}

portal_api_file_text.prototype.tail = function (p_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.text.tail' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/text/tail", l_dict, p_callback, p_error_callback);
}

portal_api_file_text.prototype.write = function (p_text, p_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.text.write' };
	if (p_text !== undefined)
		l_dict.text = p_text
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "file/text/write", l_dict, p_callback, p_error_callback);
}


portal_api_file.prototype.write_string = function (p_url, p_string, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.write_string' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_string !== undefined)
		l_dict.string = p_string

	return this.m_parent.server_call(this, "file/write_string", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.read_string = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.read_string' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "file/read_string", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.fileExists = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.fileExists' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "file/fileExists", l_dict, p_callback, p_error_callback);
}

portal_api_file.prototype.read_json_from_url = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'file.read_json_from_url' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "file/read_json_from_url", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * folder API
 */

function portal_api_folder(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_folder.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "folder/get", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.add_tag = function (p_folder, p_tag, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.add_tag' };
	if (p_folder !== undefined)
		l_dict.folder = p_folder
	if (p_tag !== undefined)
		l_dict.tag = p_tag

	return this.m_parent.server_call(this, "folder/add_tag", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.get_tags = function (p_folder, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.get_tags' };
	if (p_folder !== undefined)
		l_dict.folder = p_folder

	return this.m_parent.server_call(this, "folder/get_tags", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.has_all_tags = function (p_folder, p_tags, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.has_all_tags' };
	if (p_folder !== undefined)
		l_dict.folder = p_folder
	if (p_tags !== undefined)
		l_dict.tags = p_tags

	return this.m_parent.server_call(this, "folder/has_all_tags", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.has_at_least_one_tag = function (p_folder, p_tags, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.has_at_least_one_tag' };
	if (p_folder !== undefined)
		l_dict.folder = p_folder
	if (p_tags !== undefined)
		l_dict.tags = p_tags

	return this.m_parent.server_call(this, "folder/has_at_least_one_tag", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.has_tag = function (p_folder, p_tag, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.has_tag' };
	if (p_folder !== undefined)
		l_dict.folder = p_folder
	if (p_tag !== undefined)
		l_dict.tag = p_tag

	return this.m_parent.server_call(this, "folder/has_tag", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "folder/list", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "folder/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.list_with_tag_query = function (p_query, p_tag_query, p_tag_mode, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.list_with_tag_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_tag_query !== undefined)
		l_dict.tag_query = p_tag_query
	if (p_tag_mode !== undefined)
		l_dict.tag_mode = p_tag_mode
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "folder/list_with_tag_query", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.list_with_tag_query_and_options = function (p_query, p_tag_query, p_tag_mode, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.list_with_tag_query_and_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_tag_query !== undefined)
		l_dict.tag_query = p_tag_query
	if (p_tag_mode !== undefined)
		l_dict.tag_mode = p_tag_mode
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "folder/list_with_tag_query_and_options", l_dict, p_callback, p_error_callback);
}

portal_api_folder.prototype.remove_tag = function (p_folder, p_tag, p_callback, p_error_callback)
{
	var l_dict = { method: 'folder.remove_tag' };
	if (p_folder !== undefined)
		l_dict.folder = p_folder
	if (p_tag !== undefined)
		l_dict.tag = p_tag

	return this.m_parent.server_call(this, "folder/remove_tag", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * logging API
 */

function portal_api_logging(p_parent)
{
	this.m_parent = p_parent;
}

/***************************************************************************************************************************************
 * logging.trace API
 */

function portal_api_logging_trace(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_logging_trace.prototype.is_enabled_for = function (p_context, p_level, p_callback, p_error_callback)
{
	var l_dict = { method: 'logging.trace.is_enabled_for' };
	if (p_context !== undefined)
		l_dict.context = p_context
	if (p_level !== undefined)
		l_dict.level = p_level

	return this.m_parent.server_call(this, "logging/trace/is_enabled_for", l_dict, p_callback, p_error_callback);
}

portal_api_logging_trace.prototype.log = function (p_context, p_level, p_message, p_callback, p_error_callback)
{
	var l_dict = { method: 'logging.trace.log' };
	if (p_context !== undefined)
		l_dict.context = p_context
	if (p_level !== undefined)
		l_dict.level = p_level
	if (p_message !== undefined)
		l_dict.message = p_message

	return this.m_parent.server_call(this, "logging/trace/log", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * network API
 */

function portal_api_network(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_network.prototype.download_to_file = function (p_url, p_file, p_callback, p_error_callback)
{
	var l_dict = { method: 'network.download_to_file' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_file !== undefined)
		l_dict.file = p_file

	return this.m_parent.server_call(this, "network/download_to_file", l_dict, p_callback, p_error_callback);
}

portal_api_network.prototype.upload_file = function (p_file, p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'network.upload_file' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "network/upload_file", l_dict, p_callback, p_error_callback);
}

portal_api_network.prototype.upload_file_with_authentication = function (p_file, p_url, p_username, p_password, p_callback, p_error_callback)
{
	var l_dict = { method: 'network.upload_file_with_authentication' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_username !== undefined)
		l_dict.username = p_username
	if (p_password !== undefined)
		l_dict.password = p_password

	return this.m_parent.server_call(this, "network/upload_file_with_authentication", l_dict, p_callback, p_error_callback);
}

portal_api_network.prototype.call_rest = function (p_http_method, p_url, p_content_type, p_request_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'network.call_rest' };
	if (p_http_method !== undefined)
		l_dict.http_method = p_http_method
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_content_type !== undefined)
		l_dict.content_type = p_content_type
	if (p_request_data !== undefined)
		l_dict.request_data = p_request_data

	return this.m_parent.server_call(this, "network/call_rest", l_dict, p_callback, p_error_callback);
}

portal_api_network.prototype.call_rest_with_options = function (p_http_method, p_url, p_content_type, p_request_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'network.call_rest_with_options' };
	if (p_http_method !== undefined)
		l_dict.http_method = p_http_method
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_content_type !== undefined)
		l_dict.content_type = p_content_type
	if (p_request_data !== undefined)
		l_dict.request_data = p_request_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "network/call_rest_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_network.prototype.call_soap = function (p_url, p_name, p_parameters, p_callback, p_error_callback)
{
	var l_dict = { method: 'network.call_soap' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters

	return this.m_parent.server_call(this, "network/call_soap", l_dict, p_callback, p_error_callback);
}

portal_api_network.prototype.call_soap_with_local_wsdl = function (p_url, p_name, p_parameters, p_wsdl_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'network.call_soap_with_local_wsdl' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters
	if (p_wsdl_url !== undefined)
		l_dict.wsdl_url = p_wsdl_url

	return this.m_parent.server_call(this, "network/call_soap_with_local_wsdl", l_dict, p_callback, p_error_callback);
}

portal_api_network.prototype.call_soap_with_options = function (p_url, p_name, p_parameters, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'network.call_soap_with_options' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "network/call_soap_with_options", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * output_device API
 */

function portal_api_output_device(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_output_device.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'output_device.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "output_device/create", l_dict, p_callback, p_error_callback);
}

portal_api_output_device.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'output_device.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "output_device/delete", l_dict, p_callback, p_error_callback);
}

portal_api_output_device.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'output_device.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "output_device/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_output_device.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'output_device.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "output_device/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_output_device.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'output_device.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "output_device/get", l_dict, p_callback, p_error_callback);
}

portal_api_output_device.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'output_device.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "output_device/list", l_dict, p_callback, p_error_callback);
}

portal_api_output_device.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'output_device.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "output_device/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_output_device.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'output_device.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "output_device/update", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * pdf API
 */

function portal_api_pdf(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_pdf.prototype.delete_pages = function (p_url, p_pages, p_callback, p_error_callback)
{
	var l_dict = { method: 'pdf.delete_pages' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_pages !== undefined)
		l_dict.pages = p_pages

	return this.m_parent.server_call(this, "pdf/delete_pages", l_dict, p_callback, p_error_callback);
}

portal_api_pdf.prototype.down_sample = function (p_pdf, p_downsampled, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'pdf.down_sample' };
	if (p_pdf !== undefined)
		l_dict.pdf = p_pdf
	if (p_downsampled !== undefined)
		l_dict.downsampled = p_downsampled
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "pdf/down_sample", l_dict, p_callback, p_error_callback);
}

portal_api_pdf.prototype.join_pages = function (p_files, p_target_folder, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'pdf.join_pages' };
	if (p_files !== undefined)
		l_dict.files = p_files
	if (p_target_folder !== undefined)
		l_dict.target_folder = p_target_folder
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "pdf/join_pages", l_dict, p_callback, p_error_callback);
}

portal_api_pdf.prototype.optimize_for_rip = function (p_pdf, p_optimized, p_callback, p_error_callback)
{
	var l_dict = { method: 'pdf.optimize_for_rip' };
	if (p_pdf !== undefined)
		l_dict.pdf = p_pdf
	if (p_optimized !== undefined)
		l_dict.optimized = p_optimized

	return this.m_parent.server_call(this, "pdf/optimize_for_rip", l_dict, p_callback, p_error_callback);
}

portal_api_pdf.prototype.split_pages = function (p_url, p_target_folder, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'pdf.split_pages' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_target_folder !== undefined)
		l_dict.target_folder = p_target_folder
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "pdf/split_pages", l_dict, p_callback, p_error_callback);
}

portal_api_pdf.prototype.update_4pro_file = function (p_file, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'pdf.update_4pro_file' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "pdf/update_4pro_file", l_dict, p_callback, p_error_callback);
}

portal_api_pdf.prototype.pdf_validate = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'pdf.pdf_validate' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "pdf/pdf_validate", l_dict, p_callback, p_error_callback);
}

portal_api_pdf.prototype.save_rasterized_to_file = function (p_input_url, p_rasterized_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'pdf.save_rasterized_to_file' };
	if (p_input_url !== undefined)
		l_dict.input_url = p_input_url
	if (p_rasterized_url !== undefined)
		l_dict.rasterized_url = p_rasterized_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "pdf/save_rasterized_to_file", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * preferences API
 */

function portal_api_preferences(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_preferences.prototype.get_for_current_user = function (p_application_id, p_sub_key, p_callback, p_error_callback)
{
	var l_dict = { method: 'preferences.get_for_current_user' };
	if (p_application_id !== undefined)
		l_dict.application_id = p_application_id
	if (p_sub_key !== undefined)
		l_dict.sub_key = p_sub_key

	return this.m_parent.server_call(this, "preferences/get_for_current_user", l_dict, p_callback, p_error_callback);
}

portal_api_preferences.prototype.get_for_realm = function (p_realm_type, p_realm_value, p_application_id, p_sub_key, p_callback, p_error_callback)
{
	var l_dict = { method: 'preferences.get_for_realm' };
	if (p_realm_type !== undefined)
		l_dict.realm_type = p_realm_type
	if (p_realm_value !== undefined)
		l_dict.realm_value = p_realm_value
	if (p_application_id !== undefined)
		l_dict.application_id = p_application_id
	if (p_sub_key !== undefined)
		l_dict.sub_key = p_sub_key

	return this.m_parent.server_call(this, "preferences/get_for_realm", l_dict, p_callback, p_error_callback);
}

portal_api_preferences.prototype.save_for_current_user = function (p_preferences, p_application_id, p_sub_key, p_callback, p_error_callback)
{
	var l_dict = { method: 'preferences.save_for_current_user' };
	if (p_preferences !== undefined)
		l_dict.preferences = p_preferences
	if (p_application_id !== undefined)
		l_dict.application_id = p_application_id
	if (p_sub_key !== undefined)
		l_dict.sub_key = p_sub_key

	return this.m_parent.server_call(this, "preferences/save_for_current_user", l_dict, p_callback, p_error_callback);
}

portal_api_preferences.prototype.save_for_realm = function (p_preferences, p_realm_type, p_realm_value, p_application_id, p_sub_key, p_callback, p_error_callback)
{
	var l_dict = { method: 'preferences.save_for_realm' };
	if (p_preferences !== undefined)
		l_dict.preferences = p_preferences
	if (p_realm_type !== undefined)
		l_dict.realm_type = p_realm_type
	if (p_realm_value !== undefined)
		l_dict.realm_value = p_realm_value
	if (p_application_id !== undefined)
		l_dict.application_id = p_application_id
	if (p_sub_key !== undefined)
		l_dict.sub_key = p_sub_key

	return this.m_parent.server_call(this, "preferences/save_for_realm", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * preprocess API
 */

function portal_api_preprocess(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_preprocess.prototype.file = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'preprocess.file' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "preprocess/file", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * printer API
 */

function portal_api_printer(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_printer.prototype.print = function (p_printer_name, p_file, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'printer.print' };
	if (p_printer_name !== undefined)
		l_dict.printer_name = p_printer_name
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "printer/print", l_dict, p_callback, p_error_callback);
}

portal_api_printer.prototype.print_test_page = function (p_printer_name, p_test_type, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'printer.print_test_page' };
	if (p_printer_name !== undefined)
		l_dict.printer_name = p_printer_name
	if (p_test_type !== undefined)
		l_dict.test_type = p_test_type
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "printer/print_test_page", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * request API
 */

function portal_api_request(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_request.prototype.config = function (p_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'request.config' };
	if (p_name !== undefined)
		l_dict.name = p_name

	return this.m_parent.server_call(this, "request/config", l_dict, p_callback, p_error_callback);
}

portal_api_request.prototype.metadata = function (p_url, p_sub, p_callback, p_error_callback)
{
	var l_dict = { method: 'request.metadata' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_sub !== undefined)
		l_dict.sub = p_sub

	return this.m_parent.server_call(this, "request/metadata", l_dict, p_callback, p_error_callback);
}

portal_api_request.prototype.requiredversion = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'request.requiredversion' };

	return this.m_parent.server_call(this, "request/requiredversion", l_dict, p_callback, p_error_callback);
}

portal_api_request.prototype.show_logs = function (p_parameters, p_callback, p_error_callback)
{
	var l_dict = { method: 'request.show_logs' };
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters

	return this.m_parent.server_call(this, "request/show_logs", l_dict, p_callback, p_error_callback);
}

portal_api_request.prototype.store_config = function (p_name, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'request.store_config' };
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "request/store_config", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * resource API
 */

function portal_api_resource(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_resource.prototype.download = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'resource.download' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "resource/download", l_dict, p_callback, p_error_callback);
}

portal_api_resource.prototype.enumerate = function (p_type, p_callback, p_error_callback)
{
	var l_dict = { method: 'resource.enumerate' };
	if (p_type !== undefined)
		l_dict.type = p_type

	return this.m_parent.server_call(this, "resource/enumerate", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * rss API
 */

function portal_api_rss(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_rss.prototype.get_pending_approvals_url = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'rss.get_pending_approvals_url' };

	return this.m_parent.server_call(this, "rss/get_pending_approvals_url", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * subProcess API
 */

function portal_api_subProcess(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_subProcess.prototype.call_with_options = function (p_command, p_arguments, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'subProcess.call_with_options' };
	if (p_command !== undefined)
		l_dict.command = p_command
	if (p_arguments !== undefined)
		l_dict.arguments = p_arguments
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "subProcess/call_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_subProcess.prototype.call = function (p_command, p_arguments, p_osList, p_hostList, p_callback, p_error_callback)
{
	var l_dict = { method: 'subProcess.call' };
	if (p_command !== undefined)
		l_dict.command = p_command
	if (p_arguments !== undefined)
		l_dict.arguments = p_arguments
	if (p_osList !== undefined)
		l_dict.osList = p_osList
	if (p_hostList !== undefined)
		l_dict.hostList = p_hostList

	return this.m_parent.server_call(this, "subProcess/call", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * tag API
 */

function portal_api_tag(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_tag.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'tag.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "tag/create", l_dict, p_callback, p_error_callback);
}

portal_api_tag.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'tag.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "tag/delete", l_dict, p_callback, p_error_callback);
}

portal_api_tag.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'tag.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "tag/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_tag.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'tag.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "tag/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_tag.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'tag.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "tag/get", l_dict, p_callback, p_error_callback);
}

portal_api_tag.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'tag.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "tag/list", l_dict, p_callback, p_error_callback);
}

portal_api_tag.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'tag.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "tag/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_tag.prototype.get_all_names = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'tag.get_all_names' };

	return this.m_parent.server_call(this, "tag/get_all_names", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * users API
 */

function portal_api_users(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_users.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "users/create", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.change_password = function (p_user_id, p_old_password, p_new_password, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.change_password' };
	if (p_user_id !== undefined)
		l_dict.user_id = p_user_id
	if (p_old_password !== undefined)
		l_dict.old_password = p_old_password
	if (p_new_password !== undefined)
		l_dict.new_password = p_new_password

	return this.m_parent.server_call(this, "users/change_password", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "users/delete", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "users/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "users/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "users/get", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "users/list", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "users/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "users/update", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "users/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get_all_scopes_for_user = function (p_user_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get_all_scopes_for_user' };
	if (p_user_name !== undefined)
		l_dict.user_name = p_user_name

	return this.m_parent.server_call(this, "users/get_all_scopes_for_user", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get_by_user_name = function (p_username, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get_by_user_name' };
	if (p_username !== undefined)
		l_dict.username = p_username

	return this.m_parent.server_call(this, "users/get_by_user_name", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get_by_email = function (p_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get_by_email' };
	if (p_email !== undefined)
		l_dict.email = p_email

	return this.m_parent.server_call(this, "users/get_by_email", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get_contact_by_email = function (p_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get_contact_by_email' };
	if (p_email !== undefined)
		l_dict.email = p_email

	return this.m_parent.server_call(this, "users/get_contact_by_email", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get_permissions = function (p_user_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get_permissions' };
	if (p_user_id !== undefined)
		l_dict.user_id = p_user_id

	return this.m_parent.server_call(this, "users/get_permissions", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.is_admin = function (p_user_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.is_admin' };
	if (p_user_id !== undefined)
		l_dict.user_id = p_user_id

	return this.m_parent.server_call(this, "users/is_admin", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.add_permission = function (p_user_id, p_permissions, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.add_permission' };
	if (p_user_id !== undefined)
		l_dict.user_id = p_user_id
	if (p_permissions !== undefined)
		l_dict.permissions = p_permissions

	return this.m_parent.server_call(this, "users/add_permission", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.remove_permission = function (p_user_id, p_permissions, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.remove_permission' };
	if (p_user_id !== undefined)
		l_dict.user_id = p_user_id
	if (p_permissions !== undefined)
		l_dict.permissions = p_permissions

	return this.m_parent.server_call(this, "users/remove_permission", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get_all_permissions = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get_all_permissions' };

	return this.m_parent.server_call(this, "users/get_all_permissions", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.add_contact = function (p_email, p_fullname, p_scope, p_attributes, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.add_contact' };
	if (p_email !== undefined)
		l_dict.email = p_email
	if (p_fullname !== undefined)
		l_dict.fullname = p_fullname
	if (p_scope !== undefined)
		l_dict.scope = p_scope
	if (p_attributes !== undefined)
		l_dict.attributes = p_attributes

	return this.m_parent.server_call(this, "users/add_contact", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.add_user = function (p_username, p_userpass, p_fullname, p_email, p_scope, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.add_user' };
	if (p_username !== undefined)
		l_dict.username = p_username
	if (p_userpass !== undefined)
		l_dict.userpass = p_userpass
	if (p_fullname !== undefined)
		l_dict.fullname = p_fullname
	if (p_email !== undefined)
		l_dict.email = p_email
	if (p_scope !== undefined)
		l_dict.scope = p_scope

	return this.m_parent.server_call(this, "users/add_user", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get_contact_by_id = function (p_contact_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get_contact_by_id' };
	if (p_contact_id !== undefined)
		l_dict.contact_id = p_contact_id

	return this.m_parent.server_call(this, "users/get_contact_by_id", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get_user_by_username = function (p_username, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get_user_by_username' };
	if (p_username !== undefined)
		l_dict.username = p_username

	return this.m_parent.server_call(this, "users/get_user_by_username", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.list_contacts = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'users.list_contacts' };

	return this.m_parent.server_call(this, "users/list_contacts", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.update_contact = function (p_contact_id, p_email, p_fullname, p_scope, p_attributes, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.update_contact' };
	if (p_contact_id !== undefined)
		l_dict.contact_id = p_contact_id
	if (p_email !== undefined)
		l_dict.email = p_email
	if (p_fullname !== undefined)
		l_dict.fullname = p_fullname
	if (p_scope !== undefined)
		l_dict.scope = p_scope
	if (p_attributes !== undefined)
		l_dict.attributes = p_attributes

	return this.m_parent.server_call(this, "users/update_contact", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.remove_contact = function (p_contact_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.remove_contact' };
	if (p_contact_id !== undefined)
		l_dict.contact_id = p_contact_id

	return this.m_parent.server_call(this, "users/remove_contact", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.list_users = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'users.list_users' };

	return this.m_parent.server_call(this, "users/list_users", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.update_user = function (p_user_id, p_username, p_userpass, p_fullname, p_email, p_scope, p_add_permissions, p_remove_permissions, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.update_user' };
	if (p_user_id !== undefined)
		l_dict.user_id = p_user_id
	if (p_username !== undefined)
		l_dict.username = p_username
	if (p_userpass !== undefined)
		l_dict.userpass = p_userpass
	if (p_fullname !== undefined)
		l_dict.fullname = p_fullname
	if (p_email !== undefined)
		l_dict.email = p_email
	if (p_scope !== undefined)
		l_dict.scope = p_scope
	if (p_add_permissions !== undefined)
		l_dict.add_permissions = p_add_permissions
	if (p_remove_permissions !== undefined)
		l_dict.remove_permissions = p_remove_permissions

	return this.m_parent.server_call(this, "users/update_user", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.remove_user = function (p_user_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.remove_user' };
	if (p_user_id !== undefined)
		l_dict.user_id = p_user_id

	return this.m_parent.server_call(this, "users/remove_user", l_dict, p_callback, p_error_callback);
}

portal_api_users.prototype.get_user_id = function (p_username, p_callback, p_error_callback)
{
	var l_dict = { method: 'users.get_user_id' };
	if (p_username !== undefined)
		l_dict.username = p_username

	return this.m_parent.server_call(this, "users/get_user_id", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * license API
 */

function portal_api_license(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_license.prototype.activate = function (p_workserver, p_callback, p_error_callback)
{
	var l_dict = { method: 'license.activate' };
	if (p_workserver !== undefined)
		l_dict.workserver = p_workserver

	return this.m_parent.server_call(this, "license/activate", l_dict, p_callback, p_error_callback);
}

portal_api_license.prototype.download_new = function (p_customer_code, p_serial, p_callback, p_error_callback)
{
	var l_dict = { method: 'license.download_new' };
	if (p_customer_code !== undefined)
		l_dict.customer_code = p_customer_code
	if (p_serial !== undefined)
		l_dict.serial = p_serial

	return this.m_parent.server_call(this, "license/download_new", l_dict, p_callback, p_error_callback);
}

portal_api_license.prototype.get = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'license.get' };

	return this.m_parent.server_call(this, "license/get", l_dict, p_callback, p_error_callback);
}

portal_api_license.prototype.get_license = function (p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'license.get_license' };
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "license/get_license", l_dict, p_callback, p_error_callback);
}

portal_api_license.prototype.get_status = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'license.get_status' };

	return this.m_parent.server_call(this, "license/get_status", l_dict, p_callback, p_error_callback);
}

portal_api_license.prototype.install = function (p_customer_code, p_serial, p_license, p_callback, p_error_callback)
{
	var l_dict = { method: 'license.install' };
	if (p_customer_code !== undefined)
		l_dict.customer_code = p_customer_code
	if (p_serial !== undefined)
		l_dict.serial = p_serial
	if (p_license !== undefined)
		l_dict.license = p_license

	return this.m_parent.server_call(this, "license/install", l_dict, p_callback, p_error_callback);
}

portal_api_license.prototype.reset = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'license.reset' };

	return this.m_parent.server_call(this, "license/reset", l_dict, p_callback, p_error_callback);
}

portal_api_license.prototype.review = function (p_sender_site, p_signature, p_callback, p_error_callback)
{
	var l_dict = { method: 'license.review' };
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site
	if (p_signature !== undefined)
		l_dict.signature = p_signature

	return this.m_parent.server_call(this, "license/review", l_dict, p_callback, p_error_callback);
}

portal_api_license.prototype.sync = function (p_distribution, p_sender_site, p_signature, p_timestamp, p_callback, p_error_callback)
{
	var l_dict = { method: 'license.sync' };
	if (p_distribution !== undefined)
		l_dict.distribution = p_distribution
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site
	if (p_signature !== undefined)
		l_dict.signature = p_signature
	if (p_timestamp !== undefined)
		l_dict.timestamp = p_timestamp

	return this.m_parent.server_call(this, "license/sync", l_dict, p_callback, p_error_callback);
}

portal_api_license.prototype.update = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'license.update' };

	return this.m_parent.server_call(this, "license/update", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * metadata API
 */

function portal_api_metadata(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_metadata.prototype.get_from_asset_with_options = function (p_file, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.get_from_asset_with_options' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "metadata/get_from_asset_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.get_from_asset = function (p_file, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.get_from_asset' };
	if (p_file !== undefined)
		l_dict.file = p_file

	return this.m_parent.server_call(this, "metadata/get_from_asset", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.get_from_file_with_options = function (p_file, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.get_from_file_with_options' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "metadata/get_from_file_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.get_from_file = function (p_file, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.get_from_file' };
	if (p_file !== undefined)
		l_dict.file = p_file

	return this.m_parent.server_call(this, "metadata/get_from_file", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.get_metadata = function (p_file, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.get_metadata' };
	if (p_file !== undefined)
		l_dict.file = p_file

	return this.m_parent.server_call(this, "metadata/get_metadata", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.get_preview = function (p_file, p_page, p_size, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.get_preview' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_page !== undefined)
		l_dict.page = p_page
	if (p_size !== undefined)
		l_dict.size = p_size

	return this.m_parent.server_call(this, "metadata/get_preview", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.get_preview_with_options = function (p_file, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.get_preview_with_options' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "metadata/get_preview_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.get_thumbnail_with_options = function (p_file, p_page, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.get_thumbnail_with_options' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_page !== undefined)
		l_dict.page = p_page
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "metadata/get_thumbnail_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.get_thumbnail = function (p_file, p_page, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.get_thumbnail' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_page !== undefined)
		l_dict.page = p_page

	return this.m_parent.server_call(this, "metadata/get_thumbnail", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.save_preview_to_file = function (p_url, p_page, p_preview_url, p_document_type, p_size, p_overwrite, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.save_preview_to_file' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_page !== undefined)
		l_dict.page = p_page
	if (p_preview_url !== undefined)
		l_dict.preview_url = p_preview_url
	if (p_document_type !== undefined)
		l_dict.document_type = p_document_type
	if (p_size !== undefined)
		l_dict.size = p_size
	if (p_overwrite !== undefined)
		l_dict.overwrite = p_overwrite

	return this.m_parent.server_call(this, "metadata/save_preview_to_file", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.save_preview_to_file_with_options = function (p_url, p_preview_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.save_preview_to_file_with_options' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_preview_url !== undefined)
		l_dict.preview_url = p_preview_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "metadata/save_preview_to_file_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.save_thumbnail_to_file = function (p_url, p_page, p_thumbnail_url, p_document_type, p_overwrite, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.save_thumbnail_to_file' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_page !== undefined)
		l_dict.page = p_page
	if (p_thumbnail_url !== undefined)
		l_dict.thumbnail_url = p_thumbnail_url
	if (p_document_type !== undefined)
		l_dict.document_type = p_document_type
	if (p_overwrite !== undefined)
		l_dict.overwrite = p_overwrite

	return this.m_parent.server_call(this, "metadata/save_thumbnail_to_file", l_dict, p_callback, p_error_callback);
}

portal_api_metadata.prototype.set_in_asset = function (p_file, p_meta_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'metadata.set_in_asset' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_meta_data !== undefined)
		l_dict.meta_data = p_meta_data

	return this.m_parent.server_call(this, "metadata/set_in_asset", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * xmp API
 */

function portal_api_xmp(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_xmp.prototype.update = function (p_file_url, p_updates, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'xmp.update' };
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url
	if (p_updates !== undefined)
		l_dict.updates = p_updates
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "xmp/update", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * proofscope API
 */

function portal_api_proofscope(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_proofscope.prototype.calculate_graphic_difference_offset = function (p_view, p_a_x, p_a_y, p_b_x, p_b_y, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.calculate_graphic_difference_offset' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_a_x !== undefined)
		l_dict.a_x = p_a_x
	if (p_a_y !== undefined)
		l_dict.a_y = p_a_y
	if (p_b_x !== undefined)
		l_dict.b_x = p_b_x
	if (p_b_y !== undefined)
		l_dict.b_y = p_b_y
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/calculate_graphic_difference_offset", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.complete_view = function (p_view, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.complete_view' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/complete_view", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_file_url = function (p_host_url, p_approval_id, p_participant_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_file_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email

	return this.m_parent.server_call(this, "proofscope/create_approve_file_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_file_url_for_pending_approval = function (p_host_url, p_file_url, p_participant_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_file_url_for_pending_approval' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email

	return this.m_parent.server_call(this, "proofscope/create_approve_file_url_for_pending_approval", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_file_url_with_options = function (p_host_url, p_approval_id, p_participant_email, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_file_url_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_approve_file_url_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_file_url_for_pending_approval_with_options = function (p_host_url, p_file_url, p_participant_email, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_file_url_for_pending_approval_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_approve_file_url_for_pending_approval_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_folder_as_versions_url = function (p_host_url, p_folder_url, p_approval_id, p_participant_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_folder_as_versions_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_folder_url !== undefined)
		l_dict.folder_url = p_folder_url
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email

	return this.m_parent.server_call(this, "proofscope/create_approve_folder_as_versions_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_folder_as_versions_url_for_pending_approval = function (p_host_url, p_folder_url, p_participant_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_folder_as_versions_url_for_pending_approval' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_folder_url !== undefined)
		l_dict.folder_url = p_folder_url
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email

	return this.m_parent.server_call(this, "proofscope/create_approve_folder_as_versions_url_for_pending_approval", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_folder_as_versions_url_with_options = function (p_host_url, p_folder_url, p_approval_id, p_participant_email, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_folder_as_versions_url_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_folder_url !== undefined)
		l_dict.folder_url = p_folder_url
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_approve_folder_as_versions_url_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_folder_as_versions_url_for_pending_approval_with_options = function (p_host_url, p_folder_url, p_participant_email, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_folder_as_versions_url_for_pending_approval_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_folder_url !== undefined)
		l_dict.folder_url = p_folder_url
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_approve_folder_as_versions_url_for_pending_approval_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_versions_url = function (p_host_url, p_file_urls, p_approval_id, p_participant_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_versions_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_urls !== undefined)
		l_dict.file_urls = p_file_urls
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email

	return this.m_parent.server_call(this, "proofscope/create_approve_versions_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_versions_url_for_pending_approval = function (p_host_url, p_file_urls, p_participant_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_versions_url_for_pending_approval' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_urls !== undefined)
		l_dict.file_urls = p_file_urls
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email

	return this.m_parent.server_call(this, "proofscope/create_approve_versions_url_for_pending_approval", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_versions_url_with_options = function (p_host_url, p_file_urls, p_approval_id, p_participant_email, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_versions_url_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_urls !== undefined)
		l_dict.file_urls = p_file_urls
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_approve_versions_url_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_approve_versions_url_for_pending_approval_with_options = function (p_host_url, p_file_urls, p_participant_email, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_approve_versions_url_for_pending_approval_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_urls !== undefined)
		l_dict.file_urls = p_file_urls
	if (p_participant_email !== undefined)
		l_dict.participant_email = p_participant_email
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_approve_versions_url_for_pending_approval_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_file_difference_url = function (p_host_url, p_file_url, p_diff_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_file_difference_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url
	if (p_diff_url !== undefined)
		l_dict.diff_url = p_diff_url

	return this.m_parent.server_call(this, "proofscope/create_view_file_difference_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_file_difference_url_with_options = function (p_host_url, p_file_url, p_diff_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_file_difference_url_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url
	if (p_diff_url !== undefined)
		l_dict.diff_url = p_diff_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_view_file_difference_url_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_file_url = function (p_host_url, p_file_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_file_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url

	return this.m_parent.server_call(this, "proofscope/create_view_file_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_file_url_with_options = function (p_host_url, p_file_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_file_url_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_view_file_url_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_folder_as_versions_url = function (p_host_url, p_folder_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_folder_as_versions_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_folder_url !== undefined)
		l_dict.folder_url = p_folder_url

	return this.m_parent.server_call(this, "proofscope/create_view_folder_as_versions_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_folder_as_versions_url_with_options = function (p_host_url, p_folder_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_folder_as_versions_url_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_folder_url !== undefined)
		l_dict.folder_url = p_folder_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_view_folder_as_versions_url_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_versions_url = function (p_host_url, p_file_urls, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_versions_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_urls !== undefined)
		l_dict.file_urls = p_file_urls

	return this.m_parent.server_call(this, "proofscope/create_view_versions_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_versions_url_with_options = function (p_host_url, p_file_urls, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_versions_url_with_options' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_urls !== undefined)
		l_dict.file_urls = p_file_urls
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/create_view_versions_url_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_3d_controller_data = function (p_asset_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_3d_controller_data' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id

	return this.m_parent.server_call(this, "proofscope/get_3d_controller_data", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_3d_render_status = function (p_asset_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_3d_render_status' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id

	return this.m_parent.server_call(this, "proofscope/get_3d_render_status", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_generate_text_layer_status_by_view = function (p_view, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_generate_text_layer_status_by_view' };
	if (p_view !== undefined)
		l_dict.view = p_view

	return this.m_parent.server_call(this, "proofscope/get_generate_text_layer_status_by_view", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_graphic_barcode = function (p_view, p_a_x, p_a_y, p_b_x, p_b_y, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_graphic_barcode' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_a_x !== undefined)
		l_dict.a_x = p_a_x
	if (p_a_y !== undefined)
		l_dict.a_y = p_a_y
	if (p_b_x !== undefined)
		l_dict.b_x = p_b_x
	if (p_b_y !== undefined)
		l_dict.b_y = p_b_y
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/get_graphic_barcode", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_graphic_halftone = function (p_view, p_a_x, p_a_y, p_b_x, p_b_y, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_graphic_halftone' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_a_x !== undefined)
		l_dict.a_x = p_a_x
	if (p_a_y !== undefined)
		l_dict.a_y = p_a_y
	if (p_b_x !== undefined)
		l_dict.b_x = p_b_x
	if (p_b_y !== undefined)
		l_dict.b_y = p_b_y
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/get_graphic_halftone", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_graphic_sample = function (p_view, p_x, p_y, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_graphic_sample' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_x !== undefined)
		l_dict.x = p_x
	if (p_y !== undefined)
		l_dict.y = p_y
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/get_graphic_sample", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_graphic_text_layer = function (p_view, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_graphic_text_layer' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/get_graphic_text_layer", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_render_status_by_url = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_render_status_by_url' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "proofscope/get_render_status_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_render_status_by_view = function (p_view, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_render_status_by_view' };
	if (p_view !== undefined)
		l_dict.view = p_view

	return this.m_parent.server_call(this, "proofscope/get_render_status_by_view", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_view_info = function (p_query, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_view_info' };
	if (p_query !== undefined)
		l_dict.query = p_query

	return this.m_parent.server_call(this, "proofscope/get_view_info", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.request_render_by_url = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.request_render_by_url' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "proofscope/request_render_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.render = function (p_asset_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.render' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url

	return this.m_parent.server_call(this, "proofscope/render", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.request_3d_render = function (p_asset_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.request_3d_render' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id

	return this.m_parent.server_call(this, "proofscope/request_3d_render", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.request_3d_render_by_url = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.request_3d_render_by_url' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "proofscope/request_3d_render_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.request_text_layer_generation_by_view = function (p_view, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.request_text_layer_generation_by_view' };
	if (p_view !== undefined)
		l_dict.view = p_view

	return this.m_parent.server_call(this, "proofscope/request_text_layer_generation_by_view", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.request_text_layer_generation_by_url = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.request_text_layer_generation_by_url' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "proofscope/request_text_layer_generation_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.request_rerender_by_url = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.request_rerender_by_url' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "proofscope/request_rerender_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.request_render_by_view = function (p_view, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.request_render_by_view' };
	if (p_view !== undefined)
		l_dict.view = p_view

	return this.m_parent.server_call(this, "proofscope/request_render_by_view", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.save_rasterized_view_to_file = function (p_view, p_rasterized_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.save_rasterized_view_to_file' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_rasterized_url !== undefined)
		l_dict.rasterized_url = p_rasterized_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/save_rasterized_view_to_file", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.save_updated_view = function (p_view, p_asset_id, p_view_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.save_updated_view' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_view_id !== undefined)
		l_dict.view_id = p_view_id

	return this.m_parent.server_call(this, "proofscope/save_updated_view", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.save_view = function (p_view, p_asset_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.save_view' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id

	return this.m_parent.server_call(this, "proofscope/save_view", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.add_comment = function (p_view, p_note_id, p_comment, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.add_comment' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_note_id !== undefined)
		l_dict.note_id = p_note_id
	if (p_comment !== undefined)
		l_dict.comment = p_comment
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/add_comment", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.add_note = function (p_view, p_root_view, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.add_note' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_root_view !== undefined)
		l_dict.root_view = p_root_view
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/add_note", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.delete_note = function (p_view, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.delete_note' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/delete_note", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.get_notes = function (p_views, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.get_notes' };
	if (p_views !== undefined)
		l_dict.views = p_views
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/get_notes", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.save_note = function (p_view, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.save_note' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "proofscope/save_note", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.login_with_guest_token = function (p_token, p_params, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.login_with_guest_token' };
	if (p_token !== undefined)
		l_dict.token = p_token
	if (p_params !== undefined)
		l_dict.params = p_params

	return this.m_parent.server_call(this, "proofscope/login_with_guest_token", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_url = function (p_host_url, p_file_url, p_permissions, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url
	if (p_permissions !== undefined)
		l_dict.permissions = p_permissions

	return this.m_parent.server_call(this, "proofscope/create_view_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_diff_url = function (p_host_url, p_file_url, p_fileB_url, p_permissions, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_diff_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_file_url !== undefined)
		l_dict.file_url = p_file_url
	if (p_fileB_url !== undefined)
		l_dict.fileB_url = p_fileB_url
	if (p_permissions !== undefined)
		l_dict.permissions = p_permissions

	return this.m_parent.server_call(this, "proofscope/create_diff_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_view_folder_url = function (p_host_url, p_folder_url, p_email, p_permissions, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_view_folder_url' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_folder_url !== undefined)
		l_dict.folder_url = p_folder_url
	if (p_email !== undefined)
		l_dict.email = p_email
	if (p_permissions !== undefined)
		l_dict.permissions = p_permissions

	return this.m_parent.server_call(this, "proofscope/create_view_folder_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_url = function (p_host, p_asset_url, p_permissions, p_expiry, p_username, p_diff_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_url' };
	if (p_host !== undefined)
		l_dict.host = p_host
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_permissions !== undefined)
		l_dict.permissions = p_permissions
	if (p_expiry !== undefined)
		l_dict.expiry = p_expiry
	if (p_username !== undefined)
		l_dict.username = p_username
	if (p_diff_url !== undefined)
		l_dict.diff_url = p_diff_url

	return this.m_parent.server_call(this, "proofscope/create_url", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.create_url_with_parameters = function (p_host_url, p_username, p_expiry, p_parameters, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.create_url_with_parameters' };
	if (p_host_url !== undefined)
		l_dict.host_url = p_host_url
	if (p_username !== undefined)
		l_dict.username = p_username
	if (p_expiry !== undefined)
		l_dict.expiry = p_expiry
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters

	return this.m_parent.server_call(this, "proofscope/create_url_with_parameters", l_dict, p_callback, p_error_callback);
}

portal_api_proofscope.prototype.invite = function (p_asset_url, p_email_addresses, p_email_message, p_host, p_permissions, p_expiry, p_callback, p_error_callback)
{
	var l_dict = { method: 'proofscope.invite' };
	if (p_asset_url !== undefined)
		l_dict.asset_url = p_asset_url
	if (p_email_addresses !== undefined)
		l_dict.email_addresses = p_email_addresses
	if (p_email_message !== undefined)
		l_dict.email_message = p_email_message
	if (p_host !== undefined)
		l_dict.host = p_host
	if (p_permissions !== undefined)
		l_dict.permissions = p_permissions
	if (p_expiry !== undefined)
		l_dict.expiry = p_expiry

	return this.m_parent.server_call(this, "proofscope/invite", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * notes API
 */

function portal_api_notes(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_notes.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/count", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "notes/create", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "notes/delete", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "notes/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "notes/get", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "notes/list", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "notes/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "notes/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "notes/update", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.add_comment = function (p_notes_id, p_note_id, p_comment, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.add_comment' };
	if (p_notes_id !== undefined)
		l_dict.notes_id = p_notes_id
	if (p_note_id !== undefined)
		l_dict.note_id = p_note_id
	if (p_comment !== undefined)
		l_dict.comment = p_comment
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/add_comment", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.add_note = function (p_notes_id, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.add_note' };
	if (p_notes_id !== undefined)
		l_dict.notes_id = p_notes_id
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/add_note", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.delete_note = function (p_notes_id, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.delete_note' };
	if (p_notes_id !== undefined)
		l_dict.notes_id = p_notes_id
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/delete_note", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.save_note = function (p_notes_id, p_note, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.save_note' };
	if (p_notes_id !== undefined)
		l_dict.notes_id = p_notes_id
	if (p_note !== undefined)
		l_dict.note = p_note
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/save_note", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.get_by_asset_id_with_options = function (p_asset_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.get_by_asset_id_with_options' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/get_by_asset_id_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.get_by_asset_id = function (p_asset_id, p_comment_format, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.get_by_asset_id' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_comment_format !== undefined)
		l_dict.comment_format = p_comment_format

	return this.m_parent.server_call(this, "notes/get_by_asset_id", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.get_by_notes_id = function (p_notes_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.get_by_notes_id' };
	if (p_notes_id !== undefined)
		l_dict.notes_id = p_notes_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/get_by_notes_id", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.get_overview_by_approval_id = function (p_approval_id, p_reference, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.get_overview_by_approval_id' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_reference !== undefined)
		l_dict.reference = p_reference
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/get_overview_by_approval_id", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.get_overview_by_proofscope_view = function (p_view, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.get_overview_by_proofscope_view' };
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/get_overview_by_proofscope_view", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.get_overview_by_reference_with_options = function (p_reference, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.get_overview_by_reference_with_options' };
	if (p_reference !== undefined)
		l_dict.reference = p_reference
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "notes/get_overview_by_reference_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_notes.prototype.get_overview_by_reference = function (p_reference, p_only_comments, p_comment_format, p_callback, p_error_callback)
{
	var l_dict = { method: 'notes.get_overview_by_reference' };
	if (p_reference !== undefined)
		l_dict.reference = p_reference
	if (p_only_comments !== undefined)
		l_dict.only_comments = p_only_comments
	if (p_comment_format !== undefined)
		l_dict.comment_format = p_comment_format

	return this.m_parent.server_call(this, "notes/get_overview_by_reference", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * ic3d API
 */

function portal_api_ic3d(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_ic3d.prototype.get_label_info = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'ic3d.get_label_info' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "ic3d/get_label_info", l_dict, p_callback, p_error_callback);
}

portal_api_ic3d.prototype.render_labels = function (p_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'ic3d.render_labels' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "ic3d/render_labels", l_dict, p_callback, p_error_callback);
}

portal_api_ic3d.prototype.render_view_to_file_with_options = function (p_url, p_view_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'ic3d.render_view_to_file_with_options' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_view_url !== undefined)
		l_dict.view_url = p_view_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "ic3d/render_view_to_file_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_ic3d.prototype.render_view_to_file = function (p_url, p_view, p_view_url, p_document_type, p_size, p_overwrite, p_callback, p_error_callback)
{
	var l_dict = { method: 'ic3d.render_view_to_file' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_view !== undefined)
		l_dict.view = p_view
	if (p_view_url !== undefined)
		l_dict.view_url = p_view_url
	if (p_document_type !== undefined)
		l_dict.document_type = p_document_type
	if (p_size !== undefined)
		l_dict.size = p_size
	if (p_overwrite !== undefined)
		l_dict.overwrite = p_overwrite

	return this.m_parent.server_call(this, "ic3d/render_view_to_file", l_dict, p_callback, p_error_callback);
}

portal_api_ic3d.prototype.replace_labels = function (p_url, p_replacements, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'ic3d.replace_labels' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_replacements !== undefined)
		l_dict.replacements = p_replacements
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "ic3d/replace_labels", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * software_update API
 */

function portal_api_software_update(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_software_update.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "software_update/create", l_dict, p_callback, p_error_callback);
}

portal_api_software_update.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "software_update/delete", l_dict, p_callback, p_error_callback);
}

portal_api_software_update.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "software_update/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_software_update.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "software_update/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_software_update.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "software_update/get", l_dict, p_callback, p_error_callback);
}

portal_api_software_update.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "software_update/list", l_dict, p_callback, p_error_callback);
}

portal_api_software_update.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "software_update/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_software_update.prototype.check_for_updates = function (p_do_download, p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.check_for_updates' };
	if (p_do_download !== undefined)
		l_dict.do_download = p_do_download

	return this.m_parent.server_call(this, "software_update/check_for_updates", l_dict, p_callback, p_error_callback);
}

portal_api_software_update.prototype.download_archive = function (p_update_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.download_archive' };
	if (p_update_id !== undefined)
		l_dict.update_id = p_update_id

	return this.m_parent.server_call(this, "software_update/download_archive", l_dict, p_callback, p_error_callback);
}

portal_api_software_update.prototype.list_updates = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'software_update.list_updates' };

	return this.m_parent.server_call(this, "software_update/list_updates", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * calendar API
 */

function portal_api_calendar(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_calendar.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "calendar/count", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "calendar/create", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "calendar/delete", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "calendar/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "calendar/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "calendar/get", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "calendar/list", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "calendar/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "calendar/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "calendar/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "calendar/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "calendar/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "calendar/update", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.add_item = function (p_calendar_id, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.add_item' };
	if (p_calendar_id !== undefined)
		l_dict.calendar_id = p_calendar_id
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "calendar/add_item", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.calculate_offsetted_time = function (p_calendar_id, p_time, p_offset, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.calculate_offsetted_time' };
	if (p_calendar_id !== undefined)
		l_dict.calendar_id = p_calendar_id
	if (p_time !== undefined)
		l_dict.time = p_time
	if (p_offset !== undefined)
		l_dict.offset = p_offset
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "calendar/calculate_offsetted_time", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.get_item = function (p_calendar_id, p_item_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.get_item' };
	if (p_calendar_id !== undefined)
		l_dict.calendar_id = p_calendar_id
	if (p_item_id !== undefined)
		l_dict.item_id = p_item_id

	return this.m_parent.server_call(this, "calendar/get_item", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.get_visualization_data = function (p_query, p_from_date, p_to_date, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.get_visualization_data' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_from_date !== undefined)
		l_dict.from_date = p_from_date
	if (p_to_date !== undefined)
		l_dict.to_date = p_to_date
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "calendar/get_visualization_data", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.remove_item = function (p_calendar_id, p_item_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.remove_item' };
	if (p_calendar_id !== undefined)
		l_dict.calendar_id = p_calendar_id
	if (p_item_id !== undefined)
		l_dict.item_id = p_item_id

	return this.m_parent.server_call(this, "calendar/remove_item", l_dict, p_callback, p_error_callback);
}

portal_api_calendar.prototype.update_item = function (p_calendar_id, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'calendar.update_item' };
	if (p_calendar_id !== undefined)
		l_dict.calendar_id = p_calendar_id
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "calendar/update_item", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * form API
 */

function portal_api_form(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_form.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "form/count", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "form/create", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "form/delete", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "form/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "form/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "form/get", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "form/list", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "form/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "form/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "form/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "form/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "form/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "form/update", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.upload = function (p_contents, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.upload' };
	if (p_contents !== undefined)
		l_dict.contents = p_contents

	return this.m_parent.server_call(this, "form/upload", l_dict, p_callback, p_error_callback);
}

portal_api_form.prototype.get_form = function (p_whitepaper_name, p_form_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'form.get_form' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_form_name !== undefined)
		l_dict.form_name = p_form_name

	return this.m_parent.server_call(this, "form/get_form", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * task_list API
 */

function portal_api_task_list(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_task_list.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/count", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "task_list/create", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "task_list/delete", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "task_list/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "task_list/get", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "task_list/list", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "task_list/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "task_list/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "task_list/update", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.add_task = function (p_task_list_id, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.add_task' };
	if (p_task_list_id !== undefined)
		l_dict.task_list_id = p_task_list_id
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/add_task", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.get_form = function (p_task_list_id, p_task_id, p_form_type, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.get_form' };
	if (p_task_list_id !== undefined)
		l_dict.task_list_id = p_task_list_id
	if (p_task_id !== undefined)
		l_dict.task_id = p_task_id
	if (p_form_type !== undefined)
		l_dict.form_type = p_form_type

	return this.m_parent.server_call(this, "task_list/get_form", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.get_task = function (p_task_list_id, p_task_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.get_task' };
	if (p_task_list_id !== undefined)
		l_dict.task_list_id = p_task_list_id
	if (p_task_id !== undefined)
		l_dict.task_id = p_task_id

	return this.m_parent.server_call(this, "task_list/get_task", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.get_visualization_data = function (p_query, p_from_date, p_to_date, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.get_visualization_data' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_from_date !== undefined)
		l_dict.from_date = p_from_date
	if (p_to_date !== undefined)
		l_dict.to_date = p_to_date
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/get_visualization_data", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.mark = function (p_task_list_id, p_item_id, p_action, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.mark' };
	if (p_task_list_id !== undefined)
		l_dict.task_list_id = p_task_list_id
	if (p_item_id !== undefined)
		l_dict.item_id = p_item_id
	if (p_action !== undefined)
		l_dict.action = p_action
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/mark", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.remove_task = function (p_task_list_id, p_task_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.remove_task' };
	if (p_task_list_id !== undefined)
		l_dict.task_list_id = p_task_list_id
	if (p_task_id !== undefined)
		l_dict.task_id = p_task_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/remove_task", l_dict, p_callback, p_error_callback);
}

portal_api_task_list.prototype.update_task = function (p_task_list_id, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'task_list.update_task' };
	if (p_task_list_id !== undefined)
		l_dict.task_list_id = p_task_list_id
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "task_list/update_task", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * job API
 */

function portal_api_job(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_job.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/count", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "job/create", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "job/delete", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "job/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "job/get", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.get_copy_of = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.get_copy_of' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "job/get_copy_of", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "job/list", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "job/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "job/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.add_task = function (p_project_id, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.add_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/add_task", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.add_tasks_from_template = function (p_project_id, p_template_project_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.add_tasks_from_template' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_template_project_id !== undefined)
		l_dict.template_project_id = p_template_project_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/add_tasks_from_template", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.calculate = function (p_data_or_id, p_what, p_parameters, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.calculate' };
	if (p_data_or_id !== undefined)
		l_dict.data_or_id = p_data_or_id
	if (p_what !== undefined)
		l_dict.what = p_what
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters

	return this.m_parent.server_call(this, "job/calculate", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.get_form = function (p_project_id, p_form_type, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.get_form' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_form_type !== undefined)
		l_dict.form_type = p_form_type

	return this.m_parent.server_call(this, "job/get_form", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.get_task = function (p_project_id, p_task_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.get_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_task_id !== undefined)
		l_dict.task_id = p_task_id

	return this.m_parent.server_call(this, "job/get_task", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.get_task_list_visualization_data = function (p_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.get_task_list_visualization_data' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/get_task_list_visualization_data", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.get_recursive = function (p_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.get_recursive' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/get_recursive", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.get_by_project_id = function (p_project_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.get_by_project_id' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/get_by_project_id", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.mark_task = function (p_project_id, p_task_id, p_action, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.mark_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_task_id !== undefined)
		l_dict.task_id = p_task_id
	if (p_action !== undefined)
		l_dict.action = p_action
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/mark_task", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.prepare_schedule = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.prepare_schedule' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/prepare_schedule", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.remove_task = function (p_project_id, p_task_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.remove_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_task_id !== undefined)
		l_dict.task_id = p_task_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/remove_task", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.schedule = function (p_query, p_algorithm, p_parameters, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.schedule' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_algorithm !== undefined)
		l_dict.algorithm = p_algorithm
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/schedule", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.set_state = function (p_project_id, p_state, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.set_state' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_state !== undefined)
		l_dict.state = p_state

	return this.m_parent.server_call(this, "job/set_state", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "job/update", l_dict, p_callback, p_error_callback);
}

portal_api_job.prototype.update_task = function (p_project_id, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.update_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/update_task", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * job.resource API
 */

function portal_api_job_resource(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_job_resource.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/resource/count", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "job/resource/create", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "job/resource/delete", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "job/resource/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/resource/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "job/resource/get", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "job/resource/list", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/resource/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "job/resource/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/resource/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "job/resource/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "job/resource/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_job_resource.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'job.resource.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "job/resource/update", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * project API
 */

function portal_api_project(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_project.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/count", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "project/create", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "project/delete", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "project/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "project/get", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.get_copy_of = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.get_copy_of' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "project/get_copy_of", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "project/list", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "project/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "project/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.add_task = function (p_project_id, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.add_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/add_task", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.add_tasks_from_template = function (p_project_id, p_template_project_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.add_tasks_from_template' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_template_project_id !== undefined)
		l_dict.template_project_id = p_template_project_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/add_tasks_from_template", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.calculate = function (p_data_or_id, p_what, p_parameters, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.calculate' };
	if (p_data_or_id !== undefined)
		l_dict.data_or_id = p_data_or_id
	if (p_what !== undefined)
		l_dict.what = p_what
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters

	return this.m_parent.server_call(this, "project/calculate", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.get_form = function (p_project_id, p_form_type, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.get_form' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_form_type !== undefined)
		l_dict.form_type = p_form_type

	return this.m_parent.server_call(this, "project/get_form", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.get_task = function (p_project_id, p_task_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.get_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_task_id !== undefined)
		l_dict.task_id = p_task_id

	return this.m_parent.server_call(this, "project/get_task", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.get_task_list_visualization_data = function (p_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.get_task_list_visualization_data' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/get_task_list_visualization_data", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.get_recursive = function (p_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.get_recursive' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/get_recursive", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.get_by_project_id = function (p_project_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.get_by_project_id' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/get_by_project_id", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.mark_task = function (p_project_id, p_task_id, p_action, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.mark_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_task_id !== undefined)
		l_dict.task_id = p_task_id
	if (p_action !== undefined)
		l_dict.action = p_action
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/mark_task", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.prepare_schedule = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.prepare_schedule' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/prepare_schedule", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.remove_task = function (p_project_id, p_task_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.remove_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_task_id !== undefined)
		l_dict.task_id = p_task_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/remove_task", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.schedule = function (p_query, p_algorithm, p_parameters, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.schedule' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_algorithm !== undefined)
		l_dict.algorithm = p_algorithm
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/schedule", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.set_state = function (p_project_id, p_state, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.set_state' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_state !== undefined)
		l_dict.state = p_state

	return this.m_parent.server_call(this, "project/set_state", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "project/update", l_dict, p_callback, p_error_callback);
}

portal_api_project.prototype.update_task = function (p_project_id, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.update_task' };
	if (p_project_id !== undefined)
		l_dict.project_id = p_project_id
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/update_task", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * project.resource API
 */

function portal_api_project_resource(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_project_resource.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/resource/count", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "project/resource/create", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "project/resource/delete", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "project/resource/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/resource/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "project/resource/get", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "project/resource/list", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/resource/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "project/resource/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/resource/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "project/resource/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "project/resource/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_project_resource.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'project.resource.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "project/resource/update", l_dict, p_callback, p_error_callback);
}


/***************************************************************************************************************************************
 * bluecollardefinition API
 */

function portal_api_bluecollardefinition(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_bluecollardefinition.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "bluecollardefinition/count", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "bluecollardefinition/create", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.download = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.download' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "bluecollardefinition/download", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "bluecollardefinition/delete", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "bluecollardefinition/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "bluecollardefinition/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "bluecollardefinition/get", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "bluecollardefinition/list", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "bluecollardefinition/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "bluecollardefinition/update", l_dict, p_callback, p_error_callback);
}

portal_api_bluecollardefinition.prototype.upload = function (p_contents, p_callback, p_error_callback)
{
	var l_dict = { method: 'bluecollardefinition.upload' };
	if (p_contents !== undefined)
		l_dict.contents = p_contents

	return this.m_parent.server_call(this, "bluecollardefinition/upload", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * hub API
 */

function portal_api_hub(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_hub.prototype.abort_jacket = function (p_jacket_id, p_immediate_kill, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.abort_jacket' };
	if (p_jacket_id !== undefined)
		l_dict.jacket_id = p_jacket_id
	if (p_immediate_kill !== undefined)
		l_dict.immediate_kill = p_immediate_kill

	return this.m_parent.server_call(this, "hub/abort_jacket", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.abort_workable = function (p_workable_id, p_immediate_kill, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.abort_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_immediate_kill !== undefined)
		l_dict.immediate_kill = p_immediate_kill

	return this.m_parent.server_call(this, "hub/abort_workable", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.change_workable_priority = function (p_workable_id, p_priority, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.change_workable_priority' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_priority !== undefined)
		l_dict.priority = p_priority

	return this.m_parent.server_call(this, "hub/change_workable_priority", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.check_waiting_room_of_workable = function (p_workable_id, p_collar, p_node_id, p_connector, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.check_waiting_room_of_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_collar !== undefined)
		l_dict.collar = p_collar
	if (p_node_id !== undefined)
		l_dict.node_id = p_node_id
	if (p_connector !== undefined)
		l_dict.connector = p_connector

	return this.m_parent.server_call(this, "hub/check_waiting_room_of_workable", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.continue_workable_with_options = function (p_workable_id, p_node_name, p_to_connector, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.continue_workable_with_options' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_node_name !== undefined)
		l_dict.node_name = p_node_name
	if (p_to_connector !== undefined)
		l_dict.to_connector = p_to_connector
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "hub/continue_workable_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.continue_workable = function (p_workable_id, p_node_name, p_to_connector, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.continue_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_node_name !== undefined)
		l_dict.node_name = p_node_name
	if (p_to_connector !== undefined)
		l_dict.to_connector = p_to_connector

	return this.m_parent.server_call(this, "hub/continue_workable", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.continue_workable_with_variables = function (p_workable_id, p_node_name, p_to_connector, p_variables, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.continue_workable_with_variables' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_node_name !== undefined)
		l_dict.node_name = p_node_name
	if (p_to_connector !== undefined)
		l_dict.to_connector = p_to_connector
	if (p_variables !== undefined)
		l_dict.variables = p_variables

	return this.m_parent.server_call(this, "hub/continue_workable_with_variables", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.continue_workable_from_kiosk = function (p_workable_id, p_node_id, p_to_connector, p_files, p_variables, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.continue_workable_from_kiosk' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_node_id !== undefined)
		l_dict.node_id = p_node_id
	if (p_to_connector !== undefined)
		l_dict.to_connector = p_to_connector
	if (p_files !== undefined)
		l_dict.files = p_files
	if (p_variables !== undefined)
		l_dict.variables = p_variables

	return this.m_parent.server_call(this, "hub/continue_workable_from_kiosk", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.continue_workable_from_kiosk_with_options = function (p_workable_id, p_node_id, p_to_connector, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.continue_workable_from_kiosk_with_options' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_node_id !== undefined)
		l_dict.node_id = p_node_id
	if (p_to_connector !== undefined)
		l_dict.to_connector = p_to_connector
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "hub/continue_workable_from_kiosk_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.cleanup_jacket = function (p_jacket_id, p_whitepaper_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.cleanup_jacket' };
	if (p_jacket_id !== undefined)
		l_dict.jacket_id = p_jacket_id
	if (p_whitepaper_id !== undefined)
		l_dict.whitepaper_id = p_whitepaper_id

	return this.m_parent.server_call(this, "hub/cleanup_jacket", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.create_jacket = function (p_jacket_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.create_jacket' };
	if (p_jacket_name !== undefined)
		l_dict.jacket_name = p_jacket_name

	return this.m_parent.server_call(this, "hub/create_jacket", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.create_jacket_with_variables = function (p_jacket_name, p_variables, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.create_jacket_with_variables' };
	if (p_jacket_name !== undefined)
		l_dict.jacket_name = p_jacket_name
	if (p_variables !== undefined)
		l_dict.variables = p_variables

	return this.m_parent.server_call(this, "hub/create_jacket_with_variables", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_jacket_actions = function (p_jacket_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_jacket_actions' };
	if (p_jacket_id !== undefined)
		l_dict.jacket_id = p_jacket_id

	return this.m_parent.server_call(this, "hub/get_jacket_actions", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_overview_with_options = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_overview_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "hub/get_overview_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_overview = function (p_query, p_previous_timestamp, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_overview' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_previous_timestamp !== undefined)
		l_dict.previous_timestamp = p_previous_timestamp

	return this.m_parent.server_call(this, "hub/get_overview", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_reference_details = function (p_references, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_reference_details' };
	if (p_references !== undefined)
		l_dict.references = p_references

	return this.m_parent.server_call(this, "hub/get_reference_details", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_variables_from_jacket = function (p_jacket_id, p_variables, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_variables_from_jacket' };
	if (p_jacket_id !== undefined)
		l_dict.jacket_id = p_jacket_id
	if (p_variables !== undefined)
		l_dict.variables = p_variables

	return this.m_parent.server_call(this, "hub/get_variables_from_jacket", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_variables_from_workable = function (p_workable_id, p_variables, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_variables_from_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_variables !== undefined)
		l_dict.variables = p_variables

	return this.m_parent.server_call(this, "hub/get_variables_from_workable", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_waiting_room_of_workable = function (p_workable_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_waiting_room_of_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id

	return this.m_parent.server_call(this, "hub/get_waiting_room_of_workable", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_whitepaper_input_options = function (p_whitepaper_name, p_input_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_whitepaper_input_options' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name

	return this.m_parent.server_call(this, "hub/get_whitepaper_input_options", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_whitepaper_input_options_data = function (p_whitepaper_name, p_input_name, p_data, p_files, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_whitepaper_input_options_data' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_files !== undefined)
		l_dict.files = p_files

	return this.m_parent.server_call(this, "hub/get_whitepaper_input_options_data", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_whitepaper_inputs = function (p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_whitepaper_inputs' };
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "hub/get_whitepaper_inputs", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_workable_hold_options_with_options = function (p_workable_id, p_node_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_workable_hold_options_with_options' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_node_id !== undefined)
		l_dict.node_id = p_node_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "hub/get_workable_hold_options_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_workable_hold_options = function (p_workable_id, p_node_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_workable_hold_options' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_node_id !== undefined)
		l_dict.node_id = p_node_id

	return this.m_parent.server_call(this, "hub/get_workable_hold_options", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.get_workable_hold_options_data = function (p_workable_id, p_node_id, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.get_workable_hold_options_data' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_node_id !== undefined)
		l_dict.node_id = p_node_id
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "hub/get_workable_hold_options_data", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.move_uploaded_files = function (p_urls, p_whitepaper_name, p_input_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.move_uploaded_files' };
	if (p_urls !== undefined)
		l_dict.urls = p_urls
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name

	return this.m_parent.server_call(this, "hub/move_uploaded_files", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.poll_for_workable_result = function (p_workable_id, p_time_out, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.poll_for_workable_result' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_time_out !== undefined)
		l_dict.time_out = p_time_out

	return this.m_parent.server_call(this, "hub/poll_for_workable_result", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.prepare_jacket_rerun = function (p_whitepaper_name, p_input_name, p_jacket_id, p_workable_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.prepare_jacket_rerun' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_jacket_id !== undefined)
		l_dict.jacket_id = p_jacket_id
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id

	return this.m_parent.server_call(this, "hub/prepare_jacket_rerun", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.process_from_whitepaper_with_options = function (p_whitepaper_name, p_input_name, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.process_from_whitepaper_with_options' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "hub/process_from_whitepaper_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.process_from_whitepaper = function (p_whitepaper_name, p_input_name, p_time_out, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.process_from_whitepaper' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_time_out !== undefined)
		l_dict.time_out = p_time_out

	return this.m_parent.server_call(this, "hub/process_from_whitepaper", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.process_from_whitepaper_with_variables = function (p_whitepaper_name, p_input_name, p_variables, p_time_out, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.process_from_whitepaper_with_variables' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_variables !== undefined)
		l_dict.variables = p_variables
	if (p_time_out !== undefined)
		l_dict.time_out = p_time_out

	return this.m_parent.server_call(this, "hub/process_from_whitepaper_with_variables", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.process_from_whitepaper_with_files_and_variables = function (p_whitepaper_name, p_input_name, p_files, p_variables, p_time_out, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.process_from_whitepaper_with_files_and_variables' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_files !== undefined)
		l_dict.files = p_files
	if (p_variables !== undefined)
		l_dict.variables = p_variables
	if (p_time_out !== undefined)
		l_dict.time_out = p_time_out

	return this.m_parent.server_call(this, "hub/process_from_whitepaper_with_files_and_variables", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.start_from_whitepaper_with_options = function (p_whitepaper_name, p_input_name, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.start_from_whitepaper_with_options' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "hub/start_from_whitepaper_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.start_from_whitepaper = function (p_whitepaper_name, p_input_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.start_from_whitepaper' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name

	return this.m_parent.server_call(this, "hub/start_from_whitepaper", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.start_from_whitepaper_with_variables = function (p_whitepaper_name, p_input_name, p_variables, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.start_from_whitepaper_with_variables' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_variables !== undefined)
		l_dict.variables = p_variables

	return this.m_parent.server_call(this, "hub/start_from_whitepaper_with_variables", l_dict, p_callback, p_error_callback);
}

portal_api_hub.prototype.start_from_whitepaper_with_files_and_variables = function (p_whitepaper_name, p_input_name, p_files, p_variables, p_callback, p_error_callback)
{
	var l_dict = { method: 'hub.start_from_whitepaper_with_files_and_variables' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_files !== undefined)
		l_dict.files = p_files
	if (p_variables !== undefined)
		l_dict.variables = p_variables

	return this.m_parent.server_call(this, "hub/start_from_whitepaper_with_files_and_variables", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * jacket API
 */

function portal_api_jacket(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_jacket.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "jacket/count", l_dict, p_callback, p_error_callback);
}

portal_api_jacket.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "jacket/create", l_dict, p_callback, p_error_callback);
}

portal_api_jacket.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "jacket/delete", l_dict, p_callback, p_error_callback);
}

portal_api_jacket.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "jacket/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_jacket.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "jacket/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_jacket.prototype.download = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.download' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "jacket/download", l_dict, p_callback, p_error_callback);
}

portal_api_jacket.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "jacket/get", l_dict, p_callback, p_error_callback);
}

portal_api_jacket.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "jacket/list", l_dict, p_callback, p_error_callback);
}

portal_api_jacket.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "jacket/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_jacket.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'jacket.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "jacket/update", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * valuecomposer API
 */

function portal_api_valuecomposer(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_valuecomposer.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "valuecomposer/count", l_dict, p_callback, p_error_callback);
}

portal_api_valuecomposer.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "valuecomposer/create", l_dict, p_callback, p_error_callback);
}

portal_api_valuecomposer.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "valuecomposer/delete", l_dict, p_callback, p_error_callback);
}

portal_api_valuecomposer.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "valuecomposer/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_valuecomposer.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "valuecomposer/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_valuecomposer.prototype.download = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.download' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "valuecomposer/download", l_dict, p_callback, p_error_callback);
}

portal_api_valuecomposer.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "valuecomposer/get", l_dict, p_callback, p_error_callback);
}

portal_api_valuecomposer.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "valuecomposer/list", l_dict, p_callback, p_error_callback);
}

portal_api_valuecomposer.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "valuecomposer/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_valuecomposer.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'valuecomposer.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "valuecomposer/update", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * whitepaper API
 */

function portal_api_whitepaper(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_whitepaper.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "whitepaper/count", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.get_copy_of = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.get_copy_of' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "whitepaper/get_copy_of", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "whitepaper/get", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "whitepaper/list", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "whitepaper/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "whitepaper/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "whitepaper/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "whitepaper/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "whitepaper/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "whitepaper/create", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.create_from_template = function (p_template_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.create_from_template' };
	if (p_template_id !== undefined)
		l_dict.template_id = p_template_id

	return this.m_parent.server_call(this, "whitepaper/create_from_template", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "whitepaper/delete", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "whitepaper/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "whitepaper/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.download = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.download' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "whitepaper/download", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.evaluate_value_composer = function (p_composers, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.evaluate_value_composer' };
	if (p_composers !== undefined)
		l_dict.composers = p_composers

	return this.m_parent.server_call(this, "whitepaper/evaluate_value_composer", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.get_sub_flow_parameters = function (p_whitepaper_name, p_sub_flow_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.get_sub_flow_parameters' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_sub_flow_name !== undefined)
		l_dict.sub_flow_name = p_sub_flow_name

	return this.m_parent.server_call(this, "whitepaper/get_sub_flow_parameters", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.get_template_parameters = function (p_id, p_template_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.get_template_parameters' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_template_id !== undefined)
		l_dict.template_id = p_template_id

	return this.m_parent.server_call(this, "whitepaper/get_template_parameters", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.get_value_composer_editor_configuration = function (p_context, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.get_value_composer_editor_configuration' };
	if (p_context !== undefined)
		l_dict.context = p_context

	return this.m_parent.server_call(this, "whitepaper/get_value_composer_editor_configuration", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "whitepaper/update", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.update_template_parameters = function (p_id, p_parameters, p_template_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.update_template_parameters' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters
	if (p_template_id !== undefined)
		l_dict.template_id = p_template_id

	return this.m_parent.server_call(this, "whitepaper/update_template_parameters", l_dict, p_callback, p_error_callback);
}

portal_api_whitepaper.prototype.upload = function (p_contents, p_callback, p_error_callback)
{
	var l_dict = { method: 'whitepaper.upload' };
	if (p_contents !== undefined)
		l_dict.contents = p_contents

	return this.m_parent.server_call(this, "whitepaper/upload", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * workable API
 */

function portal_api_workable(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_workable.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "workable/count", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "workable/create", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "workable/delete", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "workable/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "workable/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.download = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.download' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "workable/download", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "workable/get", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "workable/list", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "workable/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "workable/update", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.abort = function (p_id, p_immediate_kill, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.abort' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_immediate_kill !== undefined)
		l_dict.immediate_kill = p_immediate_kill

	return this.m_parent.server_call(this, "workable/abort", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.evaluate_value_composer = function (p_composers, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.evaluate_value_composer' };
	if (p_composers !== undefined)
		l_dict.composers = p_composers

	return this.m_parent.server_call(this, "workable/evaluate_value_composer", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get_container_data_by_url = function (p_container_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get_container_data_by_url' };
	if (p_container_url !== undefined)
		l_dict.container_url = p_container_url

	return this.m_parent.server_call(this, "workable/get_container_data_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get_executed_parameters_for_node = function (p_id, p_node, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get_executed_parameters_for_node' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_node !== undefined)
		l_dict.node = p_node

	return this.m_parent.server_call(this, "workable/get_executed_parameters_for_node", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get_merged_variables = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get_merged_variables' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "workable/get_merged_variables", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get_messages = function (p_id, p_severity, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get_messages' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_severity !== undefined)
		l_dict.severity = p_severity

	return this.m_parent.server_call(this, "workable/get_messages", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get_messages_for_node = function (p_id, p_node, p_severity, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get_messages_for_node' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_node !== undefined)
		l_dict.node = p_node
	if (p_severity !== undefined)
		l_dict.severity = p_severity

	return this.m_parent.server_call(this, "workable/get_messages_for_node", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get_original_parameters_for_node = function (p_id, p_node, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get_original_parameters_for_node' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_node !== undefined)
		l_dict.node = p_node

	return this.m_parent.server_call(this, "workable/get_original_parameters_for_node", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get_output_for_node = function (p_id, p_node, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get_output_for_node' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_node !== undefined)
		l_dict.node = p_node

	return this.m_parent.server_call(this, "workable/get_output_for_node", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get_progress = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get_progress' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "workable/get_progress", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.get_resolved_parameters_for_node = function (p_id, p_node, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.get_resolved_parameters_for_node' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_node !== undefined)
		l_dict.node = p_node

	return this.m_parent.server_call(this, "workable/get_resolved_parameters_for_node", l_dict, p_callback, p_error_callback);
}

portal_api_workable.prototype.move = function (p_id, p_from_node_id, p_from_connector, p_to_node_id, p_to_connector, p_callback, p_error_callback)
{
	var l_dict = { method: 'workable.move' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_from_node_id !== undefined)
		l_dict.from_node_id = p_from_node_id
	if (p_from_connector !== undefined)
		l_dict.from_connector = p_from_connector
	if (p_to_node_id !== undefined)
		l_dict.to_node_id = p_to_node_id
	if (p_to_connector !== undefined)
		l_dict.to_connector = p_to_connector

	return this.m_parent.server_call(this, "workable/move", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * approval API
 */

function portal_api_approval(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_approval.prototype.count = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.count' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "approval/count", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "approval/create", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "approval/delete", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "approval/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "approval/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "approval/get", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "approval/list", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "approval/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.remove_keys = function (p_id, p_keys, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.remove_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_keys !== undefined)
		l_dict.keys = p_keys

	return this.m_parent.server_call(this, "approval/remove_keys", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.remove_keys_by_query = function (p_query, p_keys, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.remove_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_keys !== undefined)
		l_dict.keys = p_keys
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "approval/remove_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.set_keys = function (p_id, p_key_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.set_keys' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data

	return this.m_parent.server_call(this, "approval/set_keys", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.set_keys_by_query = function (p_query, p_key_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.set_keys_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_key_data !== undefined)
		l_dict.key_data = p_key_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "approval/set_keys_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "approval/update", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.assess_with_options = function (p_approval_id, p_user_email, p_assessment, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.assess_with_options' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_user_email !== undefined)
		l_dict.user_email = p_user_email
	if (p_assessment !== undefined)
		l_dict.assessment = p_assessment
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "approval/assess_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.assess = function (p_approval_id, p_user_email, p_assessment, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.assess' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_user_email !== undefined)
		l_dict.user_email = p_user_email
	if (p_assessment !== undefined)
		l_dict.assessment = p_assessment

	return this.m_parent.server_call(this, "approval/assess", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.assess_from_workable_with_options = function (p_workable_id, p_assessment, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.assess_from_workable_with_options' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_assessment !== undefined)
		l_dict.assessment = p_assessment
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "approval/assess_from_workable_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.assess_from_workable = function (p_workable_id, p_assessment, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.assess_from_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_assessment !== undefined)
		l_dict.assessment = p_assessment

	return this.m_parent.server_call(this, "approval/assess_from_workable", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.cancel = function (p_approval_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.cancel' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id

	return this.m_parent.server_call(this, "approval/cancel", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.cancel_from_workable = function (p_workable_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.cancel_from_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id

	return this.m_parent.server_call(this, "approval/cancel_from_workable", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.delegate = function (p_approval_id, p_user_email, p_delegate_emails, p_mode, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.delegate' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_user_email !== undefined)
		l_dict.user_email = p_user_email
	if (p_delegate_emails !== undefined)
		l_dict.delegate_emails = p_delegate_emails
	if (p_mode !== undefined)
		l_dict.mode = p_mode

	return this.m_parent.server_call(this, "approval/delegate", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.delegate_from_workable = function (p_workable_id, p_delegate_emails, p_mode, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.delegate_from_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_delegate_emails !== undefined)
		l_dict.delegate_emails = p_delegate_emails
	if (p_mode !== undefined)
		l_dict.mode = p_mode

	return this.m_parent.server_call(this, "approval/delegate_from_workable", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.delete_by_approval_id = function (p_approval_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.delete_by_approval_id' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id

	return this.m_parent.server_call(this, "approval/delete_by_approval_id", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.force = function (p_approval_id, p_assessment, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.force' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_assessment !== undefined)
		l_dict.assessment = p_assessment

	return this.m_parent.server_call(this, "approval/force", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.force_from_workable = function (p_workable_id, p_assessment, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.force_from_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_assessment !== undefined)
		l_dict.assessment = p_assessment

	return this.m_parent.server_call(this, "approval/force_from_workable", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.get_approval_id_from_workable = function (p_workable_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.get_approval_id_from_workable' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id

	return this.m_parent.server_call(this, "approval/get_approval_id_from_workable", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.get_assessment = function (p_approval_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.get_assessment' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id

	return this.m_parent.server_call(this, "approval/get_assessment", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.get_overview = function (p_approval_id, p_flatten_iterations, p_inline_sub_approvals, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.get_overview' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_flatten_iterations !== undefined)
		l_dict.flatten_iterations = p_flatten_iterations
	if (p_inline_sub_approvals !== undefined)
		l_dict.inline_sub_approvals = p_inline_sub_approvals

	return this.m_parent.server_call(this, "approval/get_overview", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.get_overview_by_reference = function (p_reference, p_flatten_iterations, p_inline_sub_approvals, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.get_overview_by_reference' };
	if (p_reference !== undefined)
		l_dict.reference = p_reference
	if (p_flatten_iterations !== undefined)
		l_dict.flatten_iterations = p_flatten_iterations
	if (p_inline_sub_approvals !== undefined)
		l_dict.inline_sub_approvals = p_inline_sub_approvals

	return this.m_parent.server_call(this, "approval/get_overview_by_reference", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.get_participant_assessment = function (p_approval_id, p_user_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.get_participant_assessment' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_user_email !== undefined)
		l_dict.user_email = p_user_email

	return this.m_parent.server_call(this, "approval/get_participant_assessment", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.get_participant_assessment_by_url = function (p_url, p_user_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.get_participant_assessment_by_url' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_user_email !== undefined)
		l_dict.user_email = p_user_email

	return this.m_parent.server_call(this, "approval/get_participant_assessment_by_url", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.get_participant_assessment_by_asset_id = function (p_asset_id, p_user_email, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.get_participant_assessment_by_asset_id' };
	if (p_asset_id !== undefined)
		l_dict.asset_id = p_asset_id
	if (p_user_email !== undefined)
		l_dict.user_email = p_user_email

	return this.m_parent.server_call(this, "approval/get_participant_assessment_by_asset_id", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.manage_participants = function (p_approval_id, p_manage_emails, p_mode, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.manage_participants' };
	if (p_approval_id !== undefined)
		l_dict.approval_id = p_approval_id
	if (p_manage_emails !== undefined)
		l_dict.manage_emails = p_manage_emails
	if (p_mode !== undefined)
		l_dict.mode = p_mode

	return this.m_parent.server_call(this, "approval/manage_participants", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.remove_by_reference = function (p_reference, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.remove_by_reference' };
	if (p_reference !== undefined)
		l_dict.reference = p_reference

	return this.m_parent.server_call(this, "approval/remove_by_reference", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.remove_stale_records = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.remove_stale_records' };

	return this.m_parent.server_call(this, "approval/remove_stale_records", l_dict, p_callback, p_error_callback);
}

portal_api_approval.prototype.start = function (p_whitepaper_name, p_input_name, p_files, p_variables, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval.start' };
	if (p_whitepaper_name !== undefined)
		l_dict.whitepaper_name = p_whitepaper_name
	if (p_input_name !== undefined)
		l_dict.input_name = p_input_name
	if (p_files !== undefined)
		l_dict.files = p_files
	if (p_variables !== undefined)
		l_dict.variables = p_variables

	return this.m_parent.server_call(this, "approval/start", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * approval_whitepaper_proxy API
 */

function portal_api_approval_whitepaper_proxy(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_approval_whitepaper_proxy.prototype.add = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval_whitepaper_proxy.add' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "approval_whitepaper_proxy/add", l_dict, p_callback, p_error_callback);
}

portal_api_approval_whitepaper_proxy.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval_whitepaper_proxy.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "approval_whitepaper_proxy/delete", l_dict, p_callback, p_error_callback);
}

portal_api_approval_whitepaper_proxy.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval_whitepaper_proxy.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "approval_whitepaper_proxy/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_approval_whitepaper_proxy.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval_whitepaper_proxy.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "approval_whitepaper_proxy/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_approval_whitepaper_proxy.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval_whitepaper_proxy.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "approval_whitepaper_proxy/get", l_dict, p_callback, p_error_callback);
}

portal_api_approval_whitepaper_proxy.prototype.list = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'approval_whitepaper_proxy.list' };

	return this.m_parent.server_call(this, "approval_whitepaper_proxy/list", l_dict, p_callback, p_error_callback);
}

portal_api_approval_whitepaper_proxy.prototype.update = function (p_id, p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'approval_whitepaper_proxy.update' };
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "approval_whitepaper_proxy/update", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * printplanner API
 */

function portal_api_printplanner(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_printplanner.prototype.create_pdf = function (p_layout, p_output, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.create_pdf' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_output !== undefined)
		l_dict.output = p_output

	return this.m_parent.server_call(this, "printplanner/create_pdf", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.create_cheatsheet_pdf = function (p_layout, p_output, p_font_size, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.create_cheatsheet_pdf' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_output !== undefined)
		l_dict.output = p_output
	if (p_font_size !== undefined)
		l_dict.font_size = p_font_size

	return this.m_parent.server_call(this, "printplanner/create_cheatsheet_pdf", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.create_heaford_mounting_pdf = function (p_layout, p_output, p_job, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.create_heaford_mounting_pdf' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_output !== undefined)
		l_dict.output = p_output
	if (p_job !== undefined)
		l_dict.job = p_job
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "printplanner/create_heaford_mounting_pdf", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.create_drl_mounting_pdf = function (p_layout, p_output, p_job, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.create_drl_mounting_pdf' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_output !== undefined)
		l_dict.output = p_output
	if (p_job !== undefined)
		l_dict.job = p_job
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "printplanner/create_drl_mounting_pdf", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.create_mom = function (p_layout, p_output, p_job, p_options, p_export_patch_surfaces, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.create_mom' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_output !== undefined)
		l_dict.output = p_output
	if (p_job !== undefined)
		l_dict.job = p_job
	if (p_options !== undefined)
		l_dict.options = p_options
	if (p_export_patch_surfaces !== undefined)
		l_dict.export_patch_surfaces = p_export_patch_surfaces

	return this.m_parent.server_call(this, "printplanner/create_mom", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.bin_pack = function (p_layout, p_h_margin, p_v_margin, p_exclude_patches, p_gutter_margin, p_start_bottom, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.bin_pack' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_h_margin !== undefined)
		l_dict.h_margin = p_h_margin
	if (p_v_margin !== undefined)
		l_dict.v_margin = p_v_margin
	if (p_exclude_patches !== undefined)
		l_dict.exclude_patches = p_exclude_patches
	if (p_gutter_margin !== undefined)
		l_dict.gutter_margin = p_gutter_margin
	if (p_start_bottom !== undefined)
		l_dict.start_bottom = p_start_bottom

	return this.m_parent.server_call(this, "printplanner/bin_pack", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.bin_pack_with_options = function (p_layout, p_h_margin, p_v_margin, p_exclude_patches, p_gutter_margin, p_start_bottom, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.bin_pack_with_options' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_h_margin !== undefined)
		l_dict.h_margin = p_h_margin
	if (p_v_margin !== undefined)
		l_dict.v_margin = p_v_margin
	if (p_exclude_patches !== undefined)
		l_dict.exclude_patches = p_exclude_patches
	if (p_gutter_margin !== undefined)
		l_dict.gutter_margin = p_gutter_margin
	if (p_start_bottom !== undefined)
		l_dict.start_bottom = p_start_bottom
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "printplanner/bin_pack_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.detect_patches = function (p_layout, p_url, p_horizontalmargin, p_verticalmargin, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.detect_patches' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_horizontalmargin !== undefined)
		l_dict.horizontalmargin = p_horizontalmargin
	if (p_verticalmargin !== undefined)
		l_dict.verticalmargin = p_verticalmargin

	return this.m_parent.server_call(this, "printplanner/detect_patches", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.detect_full_patch = function (p_layout, p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.detect_full_patch' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "printplanner/detect_full_patch", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.detect_zero_patches = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.detect_zero_patches' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "printplanner/detect_zero_patches", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.layout_to_pdf = function (p_layout, p_data, p_pdf, p_overwrite, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.layout_to_pdf' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_pdf !== undefined)
		l_dict.pdf = p_pdf
	if (p_overwrite !== undefined)
		l_dict.overwrite = p_overwrite

	return this.m_parent.server_call(this, "printplanner/layout_to_pdf", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.layout_to_tiff = function (p_layout, p_data, p_tiff, p_overwrite, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.layout_to_tiff' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_tiff !== undefined)
		l_dict.tiff = p_tiff
	if (p_overwrite !== undefined)
		l_dict.overwrite = p_overwrite
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "printplanner/layout_to_tiff", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.create_jdf = function (p_layout, p_output, p_flavour, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.create_jdf' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_output !== undefined)
		l_dict.output = p_output
	if (p_flavour !== undefined)
		l_dict.flavour = p_flavour

	return this.m_parent.server_call(this, "printplanner/create_jdf", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.decorate_pdf = function (p_file, p_decorate, p_data, p_decorated_file, p_overwrite, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.decorate_pdf' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_decorate !== undefined)
		l_dict.decorate = p_decorate
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_decorated_file !== undefined)
		l_dict.decorated_file = p_decorated_file
	if (p_overwrite !== undefined)
		l_dict.overwrite = p_overwrite

	return this.m_parent.server_call(this, "printplanner/decorate_pdf", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.install_patchplanner = function (p_application_paths, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.install_patchplanner' };
	if (p_application_paths !== undefined)
		l_dict.application_paths = p_application_paths

	return this.m_parent.server_call(this, "printplanner/install_patchplanner", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.check_patchplanner_install = function (p_folders, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.check_patchplanner_install' };
	if (p_folders !== undefined)
		l_dict.folders = p_folders

	return this.m_parent.server_call(this, "printplanner/check_patchplanner_install", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.get_patch_placement_info = function (p_jobs_path, p_sheets_path, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.get_patch_placement_info' };
	if (p_jobs_path !== undefined)
		l_dict.jobs_path = p_jobs_path
	if (p_sheets_path !== undefined)
		l_dict.sheets_path = p_sheets_path

	return this.m_parent.server_call(this, "printplanner/get_patch_placement_info", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.archive_jobs_and_sheets = function (p_jobs_path, p_sheets_path, p_jobs_archive_path, p_sheets_archive_path, p_timeout, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.archive_jobs_and_sheets' };
	if (p_jobs_path !== undefined)
		l_dict.jobs_path = p_jobs_path
	if (p_sheets_path !== undefined)
		l_dict.sheets_path = p_sheets_path
	if (p_jobs_archive_path !== undefined)
		l_dict.jobs_archive_path = p_jobs_archive_path
	if (p_sheets_archive_path !== undefined)
		l_dict.sheets_archive_path = p_sheets_archive_path
	if (p_timeout !== undefined)
		l_dict.timeout = p_timeout

	return this.m_parent.server_call(this, "printplanner/archive_jobs_and_sheets", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.invalidate_cache = function (p_cloudflow_path, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.invalidate_cache' };
	if (p_cloudflow_path !== undefined)
		l_dict.cloudflow_path = p_cloudflow_path

	return this.m_parent.server_call(this, "printplanner/invalidate_cache", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.mom_file_exists = function (p_mom_file, p_mom_path, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.mom_file_exists' };
	if (p_mom_file !== undefined)
		l_dict.mom_file = p_mom_file
	if (p_mom_path !== undefined)
		l_dict.mom_path = p_mom_path

	return this.m_parent.server_call(this, "printplanner/mom_file_exists", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.install_printplanner = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.install_printplanner' };

	return this.m_parent.server_call(this, "printplanner/install_printplanner", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.create_mirror_mounting_pdf = function (p_layout, p_output, p_job, p_die_separation, p_distortion, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.create_mirror_mounting_pdf' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_output !== undefined)
		l_dict.output = p_output
	if (p_job !== undefined)
		l_dict.job = p_job
	if (p_die_separation !== undefined)
		l_dict.die_separation = p_die_separation
	if (p_distortion !== undefined)
		l_dict.distortion = p_distortion

	return this.m_parent.server_call(this, "printplanner/create_mirror_mounting_pdf", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.create_drill_mounting_pdf = function (p_layout, p_output, p_job, p_die_separation, p_distortion, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.create_drill_mounting_pdf' };
	if (p_layout !== undefined)
		l_dict.layout = p_layout
	if (p_output !== undefined)
		l_dict.output = p_output
	if (p_job !== undefined)
		l_dict.job = p_job
	if (p_die_separation !== undefined)
		l_dict.die_separation = p_die_separation
	if (p_distortion !== undefined)
		l_dict.distortion = p_distortion

	return this.m_parent.server_call(this, "printplanner/create_drill_mounting_pdf", l_dict, p_callback, p_error_callback);
}

portal_api_printplanner.prototype.rotate_tiff = function (p_input_tiff, p_output_tiff, p_angle, p_overwrite, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'printplanner.rotate_tiff' };
	if (p_input_tiff !== undefined)
		l_dict.input_tiff = p_input_tiff
	if (p_output_tiff !== undefined)
		l_dict.output_tiff = p_output_tiff
	if (p_angle !== undefined)
		l_dict.angle = p_angle
	if (p_overwrite !== undefined)
		l_dict.overwrite = p_overwrite
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "printplanner/rotate_tiff", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * screenpro API
 */

function portal_api_screenpro(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_screenpro.prototype.list_screens = function (p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'screenpro.list_screens' };
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "screenpro/list_screens", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * estimation API
 */

function portal_api_estimation(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_estimation.prototype.parceling = function (p_algorithm, p_input, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'estimation.parceling' };
	if (p_algorithm !== undefined)
		l_dict.algorithm = p_algorithm
	if (p_input !== undefined)
		l_dict.input = p_input
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "estimation/parceling", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * csv API
 */

function portal_api_csv(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_csv.prototype.to_json = function (p_csv_file, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'csv.to_json' };
	if (p_csv_file !== undefined)
		l_dict.csv_file = p_csv_file
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "csv/to_json", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * database_proxy API
 */

function portal_api_database_proxy(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_database_proxy.prototype.count = function (p_proxy, p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database_proxy.count' };
	if (p_proxy !== undefined)
		l_dict.proxy = p_proxy
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database_proxy/count", l_dict, p_callback, p_error_callback);
}

portal_api_database_proxy.prototype.create = function (p_proxy, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database_proxy.create' };
	if (p_proxy !== undefined)
		l_dict.proxy = p_proxy
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database_proxy/create", l_dict, p_callback, p_error_callback);
}

portal_api_database_proxy.prototype.delete = function (p_proxy, p_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database_proxy.delete' };
	if (p_proxy !== undefined)
		l_dict.proxy = p_proxy
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database_proxy/delete", l_dict, p_callback, p_error_callback);
}

portal_api_database_proxy.prototype.get = function (p_proxy, p_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database_proxy.get' };
	if (p_proxy !== undefined)
		l_dict.proxy = p_proxy
	if (p_id !== undefined)
		l_dict.id = p_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database_proxy/get", l_dict, p_callback, p_error_callback);
}

portal_api_database_proxy.prototype.get_all_proxies = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'database_proxy.get_all_proxies' };

	return this.m_parent.server_call(this, "database_proxy/get_all_proxies", l_dict, p_callback, p_error_callback);
}

portal_api_database_proxy.prototype.get_columns = function (p_proxy, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database_proxy.get_columns' };
	if (p_proxy !== undefined)
		l_dict.proxy = p_proxy
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database_proxy/get_columns", l_dict, p_callback, p_error_callback);
}

portal_api_database_proxy.prototype.list = function (p_proxy, p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database_proxy.list' };
	if (p_proxy !== undefined)
		l_dict.proxy = p_proxy
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database_proxy/list", l_dict, p_callback, p_error_callback);
}

portal_api_database_proxy.prototype.update = function (p_proxy, p_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'database_proxy.update' };
	if (p_proxy !== undefined)
		l_dict.proxy = p_proxy
	if (p_data !== undefined)
		l_dict.data = p_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "database_proxy/update", l_dict, p_callback, p_error_callback);
}

portal_api_database_proxy.prototype.poll_for_result = function (p_workable_id, p_time_out, p_callback, p_error_callback)
{
	var l_dict = { method: 'database_proxy.poll_for_result' };
	if (p_workable_id !== undefined)
		l_dict.workable_id = p_workable_id
	if (p_time_out !== undefined)
		l_dict.time_out = p_time_out

	return this.m_parent.server_call(this, "database_proxy/poll_for_result", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * dataconnector API
 */

function portal_api_dataconnector(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_dataconnector.prototype.custom_function = function (p_data_connector, p_function, p_parameters, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'dataconnector.custom_function' };
	if (p_data_connector !== undefined)
		l_dict.data_connector = p_data_connector
	if (p_function !== undefined)
		l_dict.function = p_function
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "dataconnector/custom_function", l_dict, p_callback, p_error_callback);
}

portal_api_dataconnector.prototype.get = function (p_data_connector, p_table, p_record_id, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'dataconnector.get' };
	if (p_data_connector !== undefined)
		l_dict.data_connector = p_data_connector
	if (p_table !== undefined)
		l_dict.table = p_table
	if (p_record_id !== undefined)
		l_dict.record_id = p_record_id
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "dataconnector/get", l_dict, p_callback, p_error_callback);
}

portal_api_dataconnector.prototype.get_all_table_names = function (p_data_connector, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'dataconnector.get_all_table_names' };
	if (p_data_connector !== undefined)
		l_dict.data_connector = p_data_connector
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "dataconnector/get_all_table_names", l_dict, p_callback, p_error_callback);
}

portal_api_dataconnector.prototype.list = function (p_data_connector, p_table, p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'dataconnector.list' };
	if (p_data_connector !== undefined)
		l_dict.data_connector = p_data_connector
	if (p_table !== undefined)
		l_dict.table = p_table
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "dataconnector/list", l_dict, p_callback, p_error_callback);
}

portal_api_dataconnector.prototype.list_hql = function (p_data_connector, p_table, p_hql_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'dataconnector.list_hql' };
	if (p_data_connector !== undefined)
		l_dict.data_connector = p_data_connector
	if (p_table !== undefined)
		l_dict.table = p_table
	if (p_hql_query !== undefined)
		l_dict.hql_query = p_hql_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "dataconnector/list_hql", l_dict, p_callback, p_error_callback);
}

portal_api_dataconnector.prototype.update = function (p_data_connector, p_table, p_record_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'dataconnector.update' };
	if (p_data_connector !== undefined)
		l_dict.data_connector = p_data_connector
	if (p_table !== undefined)
		l_dict.table = p_table
	if (p_record_data !== undefined)
		l_dict.record_data = p_record_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "dataconnector/update", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * xls API
 */

function portal_api_xls(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_xls.prototype.get_cell = function (p_file, p_sheet, p_cellname, p_callback, p_error_callback)
{
	var l_dict = { method: 'xls.get_cell' };
	if (p_file !== undefined)
		l_dict.file = p_file
	if (p_sheet !== undefined)
		l_dict.sheet = p_sheet
	if (p_cellname !== undefined)
		l_dict.cellname = p_cellname

	return this.m_parent.server_call(this, "xls/get_cell", l_dict, p_callback, p_error_callback);
}

portal_api_xls.prototype.to_json = function (p_excel_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'xls.to_json' };
	if (p_excel_data !== undefined)
		l_dict.excel_data = p_excel_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "xls/to_json", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * xml API
 */

function portal_api_xml(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_xml.prototype.transform = function (p_xml_data, p_transformation_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'xml.transform' };
	if (p_xml_data !== undefined)
		l_dict.xml_data = p_xml_data
	if (p_transformation_url !== undefined)
		l_dict.transformation_url = p_transformation_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "xml/transform", l_dict, p_callback, p_error_callback);
}

portal_api_xml.prototype.update = function (p_xml_data, p_updates, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'xml.update' };
	if (p_xml_data !== undefined)
		l_dict.xml_data = p_xml_data
	if (p_updates !== undefined)
		l_dict.updates = p_updates
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "xml/update", l_dict, p_callback, p_error_callback);
}

portal_api_xml.prototype.xml_to_json = function (p_xml_data, p_xml_template, p_strip_whitespace, p_callback, p_error_callback)
{
	var l_dict = { method: 'xml.xml_to_json' };
	if (p_xml_data !== undefined)
		l_dict.xml_data = p_xml_data
	if (p_xml_template !== undefined)
		l_dict.xml_template = p_xml_template
	if (p_strip_whitespace !== undefined)
		l_dict.strip_whitespace = p_strip_whitespace

	return this.m_parent.server_call(this, "xml/xml_to_json", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * len API
 */

function portal_api_len(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_len.prototype.to_tiff = function (p_len, p_tiff, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'len.to_tiff' };
	if (p_len !== undefined)
		l_dict.len = p_len
	if (p_tiff !== undefined)
		l_dict.tiff = p_tiff
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "len/to_tiff", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * tiff API
 */

function portal_api_tiff(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_tiff.prototype.to_pdf = function (p_tiff, p_pdf, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'tiff.to_pdf' };
	if (p_tiff !== undefined)
		l_dict.tiff = p_tiff
	if (p_pdf !== undefined)
		l_dict.pdf = p_pdf
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "tiff/to_pdf", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * hell_gravure API
 */

function portal_api_hell_gravure(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_hell_gravure.prototype.create_heliodisk_jobticket = function (p_files, p_pro, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'hell_gravure.create_heliodisk_jobticket' };
	if (p_files !== undefined)
		l_dict.files = p_files
	if (p_pro !== undefined)
		l_dict.pro = p_pro
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "hell_gravure/create_heliodisk_jobticket", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * share API
 */

function portal_api_share(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_share.prototype.get_status = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'share.get_status' };

	return this.m_parent.server_call(this, "share/get_status", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * site API
 */

function portal_api_site(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_site.prototype.add = function (p_url, p_admin_name, p_admin_password, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.add' };
	if (p_url !== undefined)
		l_dict.url = p_url
	if (p_admin_name !== undefined)
		l_dict.admin_name = p_admin_name
	if (p_admin_password !== undefined)
		l_dict.admin_password = p_admin_password

	return this.m_parent.server_call(this, "site/add", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.cancel_sync = function (p_cloudflow_url, p_signature, p_sender_site, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.cancel_sync' };
	if (p_cloudflow_url !== undefined)
		l_dict.cloudflow_url = p_cloudflow_url
	if (p_signature !== undefined)
		l_dict.signature = p_signature
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site

	return this.m_parent.server_call(this, "site/cancel_sync", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.check_deleted_files = function (p_urls, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.check_deleted_files' };
	if (p_urls !== undefined)
		l_dict.urls = p_urls

	return this.m_parent.server_call(this, "site/check_deleted_files", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.check_files = function (p_files, p_time, p_share_version, p_update_asset, p_signature, p_sender_site, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.check_files' };
	if (p_files !== undefined)
		l_dict.files = p_files
	if (p_time !== undefined)
		l_dict.time = p_time
	if (p_share_version !== undefined)
		l_dict.share_version = p_share_version
	if (p_update_asset !== undefined)
		l_dict.update_asset = p_update_asset
	if (p_signature !== undefined)
		l_dict.signature = p_signature
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site

	return this.m_parent.server_call(this, "site/check_files", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.execute = function (p_site, p_method_name, p_parameters, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.execute' };
	if (p_site !== undefined)
		l_dict.site = p_site
	if (p_method_name !== undefined)
		l_dict.method_name = p_method_name
	if (p_parameters !== undefined)
		l_dict.parameters = p_parameters
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "site/execute", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.finish_update_file = function (p_cloudflow_url, p_source_url, p_md5, p_md5_ad, p_data_type, p_apple_double, p_mod_time, p_signature, p_sender_site, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.finish_update_file' };
	if (p_cloudflow_url !== undefined)
		l_dict.cloudflow_url = p_cloudflow_url
	if (p_source_url !== undefined)
		l_dict.source_url = p_source_url
	if (p_md5 !== undefined)
		l_dict.md5 = p_md5
	if (p_md5_ad !== undefined)
		l_dict.md5_ad = p_md5_ad
	if (p_data_type !== undefined)
		l_dict.data_type = p_data_type
	if (p_apple_double !== undefined)
		l_dict.apple_double = p_apple_double
	if (p_mod_time !== undefined)
		l_dict.mod_time = p_mod_time
	if (p_signature !== undefined)
		l_dict.signature = p_signature
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site

	return this.m_parent.server_call(this, "site/finish_update_file", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.init_sync = function (p_cloudflow_url, p_md5, p_md5_ad, p_file_size, p_block_size, p_data_type, p_signature, p_sender_site, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.init_sync' };
	if (p_cloudflow_url !== undefined)
		l_dict.cloudflow_url = p_cloudflow_url
	if (p_md5 !== undefined)
		l_dict.md5 = p_md5
	if (p_md5_ad !== undefined)
		l_dict.md5_ad = p_md5_ad
	if (p_file_size !== undefined)
		l_dict.file_size = p_file_size
	if (p_block_size !== undefined)
		l_dict.block_size = p_block_size
	if (p_data_type !== undefined)
		l_dict.data_type = p_data_type
	if (p_signature !== undefined)
		l_dict.signature = p_signature
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site

	return this.m_parent.server_call(this, "site/init_sync", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.get_changes = function (p_sync_spec_name, p_mapping_id, p_time, p_last_check, p_sender_site, p_share_version, p_sprint_major, p_sprint_minor, p_sprint_update, p_signature, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.get_changes' };
	if (p_sync_spec_name !== undefined)
		l_dict.sync_spec_name = p_sync_spec_name
	if (p_mapping_id !== undefined)
		l_dict.mapping_id = p_mapping_id
	if (p_time !== undefined)
		l_dict.time = p_time
	if (p_last_check !== undefined)
		l_dict.last_check = p_last_check
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site
	if (p_share_version !== undefined)
		l_dict.share_version = p_share_version
	if (p_sprint_major !== undefined)
		l_dict.sprint_major = p_sprint_major
	if (p_sprint_minor !== undefined)
		l_dict.sprint_minor = p_sprint_minor
	if (p_sprint_update !== undefined)
		l_dict.sprint_update = p_sprint_update
	if (p_signature !== undefined)
		l_dict.signature = p_signature

	return this.m_parent.server_call(this, "site/get_changes", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.get_changed_mappings = function (p_last_check, p_sender_site, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.get_changed_mappings' };
	if (p_last_check !== undefined)
		l_dict.last_check = p_last_check
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site

	return this.m_parent.server_call(this, "site/get_changed_mappings", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.list = function (p_callback, p_error_callback)
{
	var l_dict = { method: 'site.list' };

	return this.m_parent.server_call(this, "site/list", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.list_files = function (p_sync_spec_name, p_mapping_id, p_time, p_share_version, p_signature, p_sender_site, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.list_files' };
	if (p_sync_spec_name !== undefined)
		l_dict.sync_spec_name = p_sync_spec_name
	if (p_mapping_id !== undefined)
		l_dict.mapping_id = p_mapping_id
	if (p_time !== undefined)
		l_dict.time = p_time
	if (p_share_version !== undefined)
		l_dict.share_version = p_share_version
	if (p_signature !== undefined)
		l_dict.signature = p_signature
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site

	return this.m_parent.server_call(this, "site/list_files", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.prepare_update_file = function (p_cloudflow_url, p_data_size, p_reuse_blocks, p_signature, p_sender_site, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.prepare_update_file' };
	if (p_cloudflow_url !== undefined)
		l_dict.cloudflow_url = p_cloudflow_url
	if (p_data_size !== undefined)
		l_dict.data_size = p_data_size
	if (p_reuse_blocks !== undefined)
		l_dict.reuse_blocks = p_reuse_blocks
	if (p_signature !== undefined)
		l_dict.signature = p_signature
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site

	return this.m_parent.server_call(this, "site/prepare_update_file", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.register = function (p_sites, p_signature, p_sender_site, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.register' };
	if (p_sites !== undefined)
		l_dict.sites = p_sites
	if (p_signature !== undefined)
		l_dict.signature = p_signature
	if (p_sender_site !== undefined)
		l_dict.sender_site = p_sender_site

	return this.m_parent.server_call(this, "site/register", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.remove_file_or_folder = function (p_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.remove_file_or_folder' };
	if (p_url !== undefined)
		l_dict.url = p_url

	return this.m_parent.server_call(this, "site/remove_file_or_folder", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.request_session = function (p_site, p_user_name, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.request_session' };
	if (p_site !== undefined)
		l_dict.site = p_site
	if (p_user_name !== undefined)
		l_dict.user_name = p_user_name
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "site/request_session", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.sync_file = function (p_source_site, p_source_url, p_target_site, p_target_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.sync_file' };
	if (p_source_site !== undefined)
		l_dict.source_site = p_source_site
	if (p_source_url !== undefined)
		l_dict.source_url = p_source_url
	if (p_target_site !== undefined)
		l_dict.target_site = p_target_site
	if (p_target_url !== undefined)
		l_dict.target_url = p_target_url

	return this.m_parent.server_call(this, "site/sync_file", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.sync_folder = function (p_source_site, p_source_url, p_target_site, p_target_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.sync_folder' };
	if (p_source_site !== undefined)
		l_dict.source_site = p_source_site
	if (p_source_url !== undefined)
		l_dict.source_url = p_source_url
	if (p_target_site !== undefined)
		l_dict.target_site = p_target_site
	if (p_target_url !== undefined)
		l_dict.target_url = p_target_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "site/sync_folder", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.setup = function (p_site, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.setup' };
	if (p_site !== undefined)
		l_dict.site = p_site

	return this.m_parent.server_call(this, "site/setup", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.unlink = function (p_site_name, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.unlink' };
	if (p_site_name !== undefined)
		l_dict.site_name = p_site_name

	return this.m_parent.server_call(this, "site/unlink", l_dict, p_callback, p_error_callback);
}

portal_api_site.prototype.watch_file = function (p_syncspec, p_mapping_id, p_cloudflow_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'site.watch_file' };
	if (p_syncspec !== undefined)
		l_dict.syncspec = p_syncspec
	if (p_mapping_id !== undefined)
		l_dict.mapping_id = p_mapping_id
	if (p_cloudflow_url !== undefined)
		l_dict.cloudflow_url = p_cloudflow_url

	return this.m_parent.server_call(this, "site/watch_file", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * syncspec API
 */

function portal_api_syncspec(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_syncspec.prototype.clean_up_after_removal = function (p_spec, p_mapping, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.clean_up_after_removal' };
	if (p_spec !== undefined)
		l_dict.spec = p_spec
	if (p_mapping !== undefined)
		l_dict.mapping = p_mapping

	return this.m_parent.server_call(this, "syncspec/clean_up_after_removal", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "syncspec/create", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "syncspec/list", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "syncspec/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "syncspec/get", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.delete = function (p_spec, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.delete' };
	if (p_spec !== undefined)
		l_dict.spec = p_spec

	return this.m_parent.server_call(this, "syncspec/delete", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.add_mapping = function (p_spec, p_mapping, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.add_mapping' };
	if (p_spec !== undefined)
		l_dict.spec = p_spec
	if (p_mapping !== undefined)
		l_dict.mapping = p_mapping

	return this.m_parent.server_call(this, "syncspec/add_mapping", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.remove_mapping = function (p_spec, p_mapping, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.remove_mapping' };
	if (p_spec !== undefined)
		l_dict.spec = p_spec
	if (p_mapping !== undefined)
		l_dict.mapping = p_mapping

	return this.m_parent.server_call(this, "syncspec/remove_mapping", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.remove_file_mapping = function (p_spec, p_source_site, p_source_url, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.remove_file_mapping' };
	if (p_spec !== undefined)
		l_dict.spec = p_spec
	if (p_source_site !== undefined)
		l_dict.source_site = p_source_site
	if (p_source_url !== undefined)
		l_dict.source_url = p_source_url

	return this.m_parent.server_call(this, "syncspec/remove_file_mapping", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "syncspec/update", l_dict, p_callback, p_error_callback);
}

portal_api_syncspec.prototype.update_mapping = function (p_spec, p_name, p_changes, p_callback, p_error_callback)
{
	var l_dict = { method: 'syncspec.update_mapping' };
	if (p_spec !== undefined)
		l_dict.spec = p_spec
	if (p_name !== undefined)
		l_dict.name = p_name
	if (p_changes !== undefined)
		l_dict.changes = p_changes

	return this.m_parent.server_call(this, "syncspec/update_mapping", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * xliff API
 */

function portal_api_xliff(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_xliff.prototype.from_json = function (p_json_data, p_xliff_url, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'xliff.from_json' };
	if (p_json_data !== undefined)
		l_dict.json_data = p_json_data
	if (p_xliff_url !== undefined)
		l_dict.xliff_url = p_xliff_url
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "xliff/from_json", l_dict, p_callback, p_error_callback);
}

portal_api_xliff.prototype.to_json = function (p_xml_data, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'xliff.to_json' };
	if (p_xml_data !== undefined)
		l_dict.xml_data = p_xml_data
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "xliff/to_json", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * webtrace API
 */

function portal_api_webtrace(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_webtrace.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'webtrace.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "webtrace/list", l_dict, p_callback, p_error_callback);
}

portal_api_webtrace.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'webtrace.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "webtrace/list_with_options", l_dict, p_callback, p_error_callback);
}

/***************************************************************************************************************************************
 * registration API
 */

function portal_api_registration(p_parent)
{
	this.m_parent = p_parent;
}

portal_api_registration.prototype.create = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'registration.create' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "registration/create", l_dict, p_callback, p_error_callback);
}

portal_api_registration.prototype.delete = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'registration.delete' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "registration/delete", l_dict, p_callback, p_error_callback);
}

portal_api_registration.prototype.delete_multiple = function (p_ids, p_callback, p_error_callback)
{
	var l_dict = { method: 'registration.delete_multiple' };
	if (p_ids !== undefined)
		l_dict.ids = p_ids

	return this.m_parent.server_call(this, "registration/delete_multiple", l_dict, p_callback, p_error_callback);
}

portal_api_registration.prototype.delete_by_query = function (p_query, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'registration.delete_by_query' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "registration/delete_by_query", l_dict, p_callback, p_error_callback);
}

portal_api_registration.prototype.get = function (p_id, p_callback, p_error_callback)
{
	var l_dict = { method: 'registration.get' };
	if (p_id !== undefined)
		l_dict.id = p_id

	return this.m_parent.server_call(this, "registration/get", l_dict, p_callback, p_error_callback);
}

portal_api_registration.prototype.list = function (p_query, p_fields, p_callback, p_error_callback)
{
	var l_dict = { method: 'registration.list' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_fields !== undefined)
		l_dict.fields = p_fields

	return this.m_parent.server_call(this, "registration/list", l_dict, p_callback, p_error_callback);
}

portal_api_registration.prototype.list_with_options = function (p_query, p_order_by, p_fields, p_options, p_callback, p_error_callback)
{
	var l_dict = { method: 'registration.list_with_options' };
	if (p_query !== undefined)
		l_dict.query = p_query
	if (p_order_by !== undefined)
		l_dict.order_by = p_order_by
	if (p_fields !== undefined)
		l_dict.fields = p_fields
	if (p_options !== undefined)
		l_dict.options = p_options

	return this.m_parent.server_call(this, "registration/list_with_options", l_dict, p_callback, p_error_callback);
}

portal_api_registration.prototype.update = function (p_data, p_callback, p_error_callback)
{
	var l_dict = { method: 'registration.update' };
	if (p_data !== undefined)
		l_dict.data = p_data

	return this.m_parent.server_call(this, "registration/update", l_dict, p_callback, p_error_callback);
}

portal_api_registration.prototype.send_email = function (p__id, p_callback, p_error_callback)
{
	var l_dict = { method: 'registration.send_email' };
	if (p__id !== undefined)
		l_dict._id = p__id

	return this.m_parent.server_call(this, "registration/send_email", l_dict, p_callback, p_error_callback);
}


function portal_api_frame(p_parent)
{
	this.m_parent = p_parent;
}

function portal_api_frame_os(p_parent)
{
	this.m_parent = p_parent;
	this.m_promise = false;
}

portal_api_frame_os.prototype.get = function (pOptions) {
	var parent = this.m_parent;
	var forceVersion = $.isPlainObject(pOptions) && pOptions.forceVersion === true;
	
	if (this.m_promise === false) {
		// Not loaded yet, load frame
		this.m_promise = $.Deferred(function (pDefer) {
			/**
			 * Returns a promise that resolves in case that the Cloudflow version is compatible with Frame
			 */
			function isCompatible (pCompatibleCloudflowVersion) {
				return $.Deferred(function (pDefer) {
					api_async.portal.version(function (pResult) {
						var cloudflowMajor = pResult.major;
						var cloudflowMinor = pResult.minor;
						var cloudflowVersion = cloudflowMajor * 100 + cloudflowMinor;
						if (cloudflowVersion >= pCompatibleCloudflowVersion) {
							pDefer.resolve();
						} else {
							pDefer.reject({
								error: 'The running Cloudflow is not compatible with Frame, need at least' + pCompatibleCloudflowVersion
							});
						}
					}, function (pError) {
						pDefer.reject(pError);
					});
				});
			}
	
			$.ajax({
				type: "POST",
				url: "http://127.0.0.1:9091/frameCGI/frame.cgi/frame/os/get_api_bootstrap",
				contentType: "text/plain; charset=UTF-8",
				data: JSON.stringify({method: "frame.os.get_api_bootstrap"})
			}).then(function (responseText) {
				var bootSetup = responseText;
				if (bootSetup.javascript === undefined) {
					pDefer.reject({
						error: 'Could not retrieve the bootstrap javascript'
					});
				}
				var install = new Function(bootSetup.javascript);
				var tryInstall = function () {
					try {
						install()
					} catch (error) {
						// Reject with an error message that can be shown in the UI
						pDefer.reject({
							messages: [{
								type: 'Could not install the frame functions',
								description: 'Could not install the frame functions',
								severity: 'error'
							}]
						});
						console.log(error);
					}
				};

				// In case we want to force the incompatible version
				if (forceVersion) {
					tryInstall();
					pDefer.resolve(parent);
					return;
				}

				var compatibleCloudflowVersion = bootSetup.compatibleCloudflowVersion
				if (compatibleCloudflowVersion !== undefined) {
					isCompatible(compatibleCloudflowVersion).then(function () {
						tryInstall();
						pDefer.resolve(parent);
					}).fail(function (error) {
						pDefer.reject(error);
					});
				} else {
					tryInstall();
					pDefer.resolve(parent);
				}
			}).fail(function (error) {
				// Reject with an error message that can be shown in the UI
				pDefer.reject({
					messages: [{
						type: 'frame os not running',
						description: 'Plug-in Suite Desktop Service is not running',
						severity: 'error'
					}]
				});
			});
		});
	}

	return this.m_promise;
}


function portal_api_frame_host(p_parent)
{
	this.m_parent = p_parent;
}

// #29894: This function is used only to bootstrap the Illustrator Javascript library.
// After the javascript is loaded, the portal_api_frame_host is replaced with another object
// If methods are added to this object here, they will be lost when the Illustrator library is loaded.
portal_api_frame_host.prototype.get = function (pHost, pOptions) {
	var parent = this.m_parent;
	return $.Deferred(function (pDefer) {
		if (window.frameHostLoader === undefined) {
			pDefer.reject({
				error: 'Frame Host: asking for a host handle without including the frame Javascript'
			});
			return;
		}
		
		var forceVersion = $.isPlainObject(pOptions) && pOptions.forceVersion === true;
		pDefer.resolve(window.frameHostLoader.get(pHost, parent, forceVersion));
	}).then(function (pApi) {
		return pApi;
	});
}
 

/***************************************************************************************************************************************
 * Main API
 */
function portal_api_base() {
	// settings
	this.m_address = '/portal.cgi';
	this.m_session = undefined;

	// modules
	this.approval = new portal_api_approval(this);
	this.approval_whitepaper_proxy = new portal_api_approval_whitepaper_proxy(this);
	this.archive = new portal_api_archive(this);
	this.asset = new portal_api_asset(this);
	this.assets = new portal_api_assets(this);
	this.attributes = new portal_api_attributes(this);
	this.auth = new portal_api_auth(this);
	this.bluecollardefinition = new portal_api_bluecollardefinition(this);
	this.calendar = new portal_api_calendar(this);
	this.csv = new portal_api_csv(this);
	this.curve = new portal_api_curve(this);
	this.custom_objects = new portal_api_custom_objects(this);
	this.database = new portal_api_database(this);
	this.database.collection = new portal_api_database_collection(this);
	this.database.document = new portal_api_database_document(this);
	this.database_proxy = new portal_api_database_proxy(this);
	this.dataconnector = new portal_api_dataconnector(this);
	this.email = new portal_api_email(this);
	this.estimation = new portal_api_estimation(this);
	this.file = new portal_api_file(this);
	this.file.json = new portal_api_file_json(this);
	this.file.text = new portal_api_file_text(this);
	this.folder = new portal_api_folder(this);
	this.form = new portal_api_form(this);
	this.hell_gravure = new portal_api_hell_gravure(this);
	this.hub = new portal_api_hub(this);
	this.ic3d = new portal_api_ic3d(this);
	this.jacket = new portal_api_jacket(this);
	this.job = new portal_api_job(this);
	this.job.resource = new portal_api_job_resource(this);
	this.len = new portal_api_len(this);
	this.license = new portal_api_license(this);
	this.logging = new portal_api_logging(this);
	this.logging.trace = new portal_api_logging_trace(this);
	this.metadata = new portal_api_metadata(this);
	this.network = new portal_api_network(this);
	this.notes = new portal_api_notes(this);
	this.output_device = new portal_api_output_device(this);
	this.panzer = new portal_api_panzer(this);
	this.panzer.costcalc = new portal_api_panzer_costcalc(this);
	this.panzer.device = new portal_api_panzer_device(this);
	this.panzer.jobinfo = new portal_api_panzer_jobinfo(this);
	this.panzer.layout = new portal_api_panzer_layout(this);
	this.panzer.layoutdb = new portal_api_panzer_layoutdb(this);
	this.panzer.lmsstate = new portal_api_panzer_lmsstate(this);
	this.panzer.media = new portal_api_panzer_media(this);
	this.panzer.preference = new portal_api_panzer_preference(this);
	this.panzer.printqueue = new portal_api_panzer_printqueue(this);
	this.pdf = new portal_api_pdf(this);
	this.portal = new portal_api_portal(this);
	this.preferences = new portal_api_preferences(this);
	this.preprocess = new portal_api_preprocess(this);
	this.printer = new portal_api_printer(this);
	this.printplanner = new portal_api_printplanner(this);
	this.project = new portal_api_project(this);
	this.project.resource = new portal_api_project_resource(this);
	this.proofscope = new portal_api_proofscope(this);
	this.registration = new portal_api_registration(this);
	this.registry = new portal_api_registry(this);
	this.registry.cfapp = new portal_api_registry_cfapp(this);
	this.request = new portal_api_request(this);
	this.resource = new portal_api_resource(this);
	this.rss = new portal_api_rss(this);
	this.scopes = new portal_api_scopes(this);
	this.screenpro = new portal_api_screenpro(this);
	this.share = new portal_api_share(this);
	this.site = new portal_api_site(this);
	this.software_update = new portal_api_software_update(this);
	this.subProcess = new portal_api_subProcess(this);
	this.syncspec = new portal_api_syncspec(this);
	this.tag = new portal_api_tag(this);
	this.task_list = new portal_api_task_list(this);
	this.templates = new portal_api_templates(this);
	this.tiff = new portal_api_tiff(this);
	this.users = new portal_api_users(this);
	this.utils = new portal_api_utils(this);
	this.utils.csv = new portal_api_utils_csv(this);
	this.utils.http = new portal_api_utils_http(this);
	this.utils.sql = new portal_api_utils_sql(this);
	this.utils.xml = new portal_api_utils_xml(this);
	this.valuecomposer = new portal_api_valuecomposer(this);
	this.webtrace = new portal_api_webtrace(this);
	this.whitepaper = new portal_api_whitepaper(this);
	this.workable = new portal_api_workable(this);
	this.xliff = new portal_api_xliff(this);
	this.xls = new portal_api_xls(this);
	this.xml = new portal_api_xml(this);
	this.xmp = new portal_api_xmp(this);


	this.frame = new portal_api_frame(this);
	this.frame.os = new portal_api_frame_os(this);
	this.frame.host = new portal_api_frame_host(this);

}

portal_api_base.prototype.message = function(p_title, p_msg, p_id, p_may_close) {}

portal_api_base.prototype.not_licensed = function() {}

portal_api_base.prototype.session_expired = function() {}

portal_api_base.prototype.database_down = function() {}

function portal_api_sync()
{
	var api = new portal_api_base();
	api.server_call = function(context, command, cb, error_cb) {}
	return api;
}


function portal_api_async()
{
	var api = new portal_api_base();
	api.server_call = function(context, command, cb, error_cb) {}
	return api;
}


module.exports = portal_api_base;
