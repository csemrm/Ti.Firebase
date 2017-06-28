// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var FIRDatabase = require('HL_FirebaseDatabase'),
    HL_Utils = require('HL_Utils');

function onSubmitNewCar(){

    var newIndex = HL_Utils.inWords(args.lastIndex+1);
    FIRDatabase.createCar({'index': newIndex,
                            'properties': {'brand': $.txtbrand.getValue(),
                                            'description': $.txtDescription.getValue()}
                            });

    $.defaultWindow.close();

}
