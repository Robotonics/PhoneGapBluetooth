/* Copyright (c) 2013 - Distrilog
*
* author: Distrilog
* 
* Update to V3 from https://github.com/phonegap/phonegap-plugins/tree/master/Android/Bluetooth/2.2.0
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not
* use this file except in compliance with the License. You may obtain a copy of
* the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/

var exec = require("cordova/exec");

function Bluetooth() {}

/**
* @param argument Argument that we are going to pass to the plugin - for this method no arguments are needed
* @param successCallback The callback which will be called when listDevices is successful
* @param failureCallback The callback which will be called when listDevices encouters an error
*/
Bluetooth.prototype.listDevices = function(argument,successCallback, failureCallback) {
	exec(successCallback, failureCallback, 'Bluetooth', 'listDevices', [argument]);
};

/**
* @param argument Argument that we are going to pass to the plugin - for this method no arguments are needed
* @param successCallback The callback which will be called when listDevices is successful
* @param failureCallback The callback which will be called when listDevices encouters an error
*/
Bluetooth.prototype.isBTEnabled = function(argument,successCallback, failureCallback) {
	if (failureCallback == null) {
		failureCallback = function () {
		};
	}

	if (typeof failureCallback != "function") {
		console.log("Bluetooth.isBTEnabled failure: failure parameter not a function");
		return;
	}

	if (typeof successCallback != "function") {
		console.log("Bluetooth.isBTEnabled failure: success callback parameter must be a function");
		return;
	}

	exec(successCallback, failureCallback, 'Bluetooth', 'isBTEnabled', [argument]);
};

/**
* @param argument Argument that we are going to pass to the plugin - for this method no arguments are needed
* @param successCallback The callback which will be called when listDevices is successful
* @param failureCallback The callback which will be called when listDevices encouters an error
*/
Bluetooth.prototype.enableBT = function(argument,successCallback, failureCallback) {
	exec(successCallback, failureCallback, 'Bluetooth', 'enableBT', [argument]);
};

/**
* @param argument Argument that we are going to pass to the plugin - for this method no arguments are needed
* @param successCallback The callback which will be called when listDevices is successful
* @param failureCallback The callback which will be called when listDevices encouters an error
*/
Bluetooth.prototype.disableBT = function(argument,successCallback, failureCallback) {
	exec(successCallback, failureCallback, 'Bluetooth', 'disableBT', [argument]);
};

/**
* @param argument Argument that we are going to pass to the plugin, you need pass the MAC address of the bluetooth device with wich you want to pair
* @param successCallback The callback which will be called when listDevices is successful
* @param failureCallback The callback which will be called when listDevices encouters an error
*/
Bluetooth.prototype.pairBT = function(argument,successCallback, failureCallback) {
	exec(successCallback, failureCallback, 'Bluetooth', 'pairBT', [argument]);
};

/**
* @param argument Argument that we are going to pass to the plugin, you need pass the MAC address of the bluetooth device that you want unpair
* @param successCallback The callback which will be called when listDevices is successful
* @param failureCallback The callback which will be called when listDevices encouters an error
*/
Bluetooth.prototype.unPairBT = function(argument,successCallback, failureCallback) {
	exec(successCallback, failureCallback, 'Bluetooth', 'unPairBT', [argument]);
};

/**
* @param argument Argument that we are going to pass to the plugin - for this method no arguments are needed
* @param successCallback The callback which will be called when listDevices is successful
* @param failureCallback The callback which will be called when listDevices encouters an error
*/
Bluetooth.prototype.listBoundDevices = function(argument,successCallback, failureCallback) {
	exec(successCallback, failureCallback, 'Bluetooth', 'listBoundDevices', [argument]);
};

/**
* @param argument Argument that we are going to pass to the plugin - for this method no arguments are needed
* @param successCallback The callback which will be called when listDevices is successful
* @param failureCallback The callback which will be called when listDevices encouters an error
*/
Bluetooth.prototype.stopDiscovering = function(argument,successCallback, failureCallback) {
	exec(successCallback, failureCallback, 'Bluetooth', 'stopDiscovering', [argument]);
};

/**
* @param argument Argument that we are going to pass to the plugin, you need pass the MAC address of the mobile that you want to know if it is bound
* @param successCallback The callback which will be called when listDevices is successful
* @param failureCallback The callback which will be called when listDevices encouters an error
*/
Bluetooth.prototype.isBound = function(argument,successCallback, failureCallback) {
	exec(successCallback, failureCallback, 'Bluetooth', 'isBound', [argument]);
};

var bluetooth = new Bluetooth();
module.exports = bluetooth;