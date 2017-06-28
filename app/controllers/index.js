var pushNotificationsAPI = require('APPC_PushNotifications'),
	firebase = require('HL_Firebase'),
	FIRMessaging = require('HL_FirebaseMessaging'),
	FIRAuth = require('HL_FirebaseAuth');

firebase.configure();

// constructor
function init(){

	// Initialize the navigation Window
	$.navWindow.open();
	SANDBOX.rootNavBar = $.navWindow;

	// Initialize push notifications and register it on Firebase
	pushNotificationsAPI.initPushNotifications(onPushNotificationsSuccessfull);

};

function onLoginClick(){

	$.darkOverlay.visible = true;
	$.activIndicator.show();

	FIRAuth.loginUser({email:$.email.getValue(),
						password: $.password.getValue(),
						callback: callbackOnLogin});

}

function callbackOnLogin(param){

	if (param.error != null) {

		// User doesn't exist, so create a new user
		FIRAuth.createUser({email:$.email.getValue(),
							password: $.password.getValue(),
							callback: callbackOnLogin});

	}else{

		$.darkOverlay.visible = false;
		$.activIndicator.hide();

		SANDBOX.rootNavBar.openWindow(Alloy.createController('win_cars').getView());
	}

}

function onPushNotificationsSuccessfull(){
	FIRMessaging.connectToFcm();
}

init();
