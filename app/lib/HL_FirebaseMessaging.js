var FIRMessaging = require('FirebaseMessaging/FIRMessaging'),
    FIRInstanceID = require('FirebaseInstanceID/FIRInstanceID');

exports.getToken = function(){
    return FIRInstanceID.instanceID().token();
}

exports.connectToFcm = function(){
    FIRMessaging.messaging().connectWithCompletion(function(e){
        FIRMessaging.messaging().subscribeToTopic('users');
    })
}

exports.subscribeToTopic = function(topic){
    FIRMessaging.messaging().subscribeToTopic(topic);
}

exports.unsubscribeFromTopic = function(topic){
    FIRMessaging.messaging().unsubscribeFromTopic(topic);
}

exports.disconnect = function(){
    FIRMessaging.messaging.disconnect();
}
