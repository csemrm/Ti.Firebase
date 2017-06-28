var FIRDatabase = require('FirebaseDatabase/FIRDatabase'),
    FIRDataEventType = require('FirebaseDatabase/FirebaseDatabase'),
    ref;

exports.connectDatabase = function(){
    ref = FIRDatabase.database().reference();
}

exports.getAppForDatabase = function(){
    return FIRDatabase.app;
}

exports.createCar = function(car){
    ref.child('cars').child(car.index).setValue(car.properties);
}

exports.deleteCar = function(car){
    ref.child('cars').child(car.index).removeValueWithCompletionBlock(
        function(e){
            car.callback();
        }
    );
}

exports.getCars = function(callback){
    var cars = ref.child('cars');

    cars.observeEventTypeWithBlock(FIRDataEventType.FIRDataEventTypeValue,
        function (snapshot){
            callback(snapshot);
        }
    );
}
