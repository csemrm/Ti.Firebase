var FIRAuth = require('FirebaseAuth/FIRAuth');

// Functions to expose the FIRAuth class
exports.createUser = function(param){

   FIRAuth.auth().createUserWithEmailPasswordCompletion(param.email,
                                                        param.password,
                                                        function(user, error){
                                                           param.callback({error:error});
                                                        });


};

exports.signOut = function(param){
   var successfull = FIRAuth.auth().signOut();
   param.callback();
}

exports.loginUser = function(param){
    FIRAuth.auth().signInWithEmailPasswordCompletion(param.email,
                                                    param.password,
                                                    function(user, error){
                                                        param.callback({error:error});
                                                    });
}

exports.currentUser = function(){
   return FIRAuth.auth().currentUser;
}
