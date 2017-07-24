var FIRApp = require('FirebaseCore/FIRApp'),
    FIROptions = require('FirebaseCore/FIROptions');

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
