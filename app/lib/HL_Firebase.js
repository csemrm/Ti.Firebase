var FIRApp = require('FirebaseAnalytics/FIRApp'),
    FIROptions = require('FirebaseAnalytics/FIROptions');

exports.configure = function() {
   FIRApp.configure();
};

exports.getAllApp = function() {
   return FIRApp.allApps();
}

exports.getAppWithName = function(name) {
   return FIRApp.appNamed(name);
}

/***** Functions to expose the FIROptions API ******/
exports.getDefaultOptions = function(){
    return FIROptions.defaultOptions();
}
