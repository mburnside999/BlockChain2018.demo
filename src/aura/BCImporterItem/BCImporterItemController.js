({
handleRecordUpdated : function(component, event) {

           console.log('in BCImporterItem handleRecoodUpdated()');
            //var action = component.get("c.findAll");
            //action.setCallback(this, function(a) {
               // component.set("v.growers", a.getReturnValue());
           // });
           // $A.enqueueAction(action);
        },
receiveShipment: function(component, event) {
      var x = component.get("v.importer.ExternalId");
      //alert(x);
  }
})