var FIRDatabase = require('HL_FirebaseDatabase'),
    HL_Utils = require('HL_Utils'),
    lastIndex = 0;

function init(){
    FIRDatabase.connectDatabase();
    FIRDatabase.getCars(loadTable);
}

function loadTable(param){

    var items = [];
    var index;
    var childrenCountIndex = param.childrenCount - 1;

    for (count = 1; items.length <= childrenCountIndex; count++) {

        index = HL_Utils.inWords(count);

        if (param.value.valueForKey(index)){
            items.push({
                imgCar: {image: param.value.valueForKey(index).valueForKey('picture') ? param.value.valueForKey(index).valueForKey('picture') : ''},
                lblTitle: {text: param.value.valueForKey(index).valueForKey('brand') ? param.value.valueForKey(index).valueForKey('brand') : ''},
                lblSubtitle: {text: param.value.valueForKey(index).valueForKey('description') ? param.value.valueForKey(index).valueForKey('description') : ''},
                indexCar: index,
         		properties: {
         			selectionStyle: OS_IOS ? Ti.UI.iOS.TableViewCellSelectionStyle.NONE : null,
                    editActions: [{color: '#FF0000', title: 'Delete'}],
                    canEdit: true
         		}
         	});

            lastIndex = count;
        }

    }

    $.rowCars.setItems(items, {animated: true});

    items = [];

}

function onNewCarClick(){
    SANDBOX.rootNavBar.openWindow(Alloy.createController('win_new_car', {lastIndex: lastIndex}).getView());
}

function onDeleteCar(e){
    FIRDatabase.deleteCar({index: e.section.items[e.itemIndex].indexCar, callback: onDeleteCarSuccess});
}

function onDeleteCarSuccess(){
    alert('Car record deleted successfully');
}

init();
