
exports.initPushNotifications = function(callback){

    Ti.App.iOS.addEventListener('usernotificationsettings', function registerForPush() {

        // Remove event listener once registered for push notifications
        Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush);

        Ti.Network.registerForPushNotifications({

            success: function(e) {

                //Set a global property with the device token
                Titanium.App.Properties.setString('push_devicetoken', e.deviceToken);

                console.log('error', "Push Notification registration succeed " + e.deviceToken);

                callback();

            },
            error:  function(e) {
                console.log('error', "Push Notification registration failed " + e.error);

                callback();
            },
            callback: function(e) {
                console.log('error', "Push Notification received " + JSON.stringify(e.data));

                // Set the App Badge number
            	Titanium.UI.iPhone.setAppBadge(Number(Titanium.UI.iPhone.appBadge)+1);

                callback();
            }
        });

    });

    // Register notification types to use
    Ti.App.iOS.registerUserNotificationSettings({
	    types: [
            Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
        ]
    });

}
