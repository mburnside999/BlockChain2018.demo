/**
 * Created by mburnside on 27/2/18.
 */
({
handleRecordUpdated : function(component, event) {

           console.log('in BCShipperItem handleRecoodUpdated()');
            //var action = component.get("c.findAll");
            //action.setCallback(this, function(a) {
               // component.set("v.growers", a.getReturnValue());
           // });
           // $A.enqueueAction(action);
        },
receiveShipment: function(component, event) {
      var x = component.get("v.shipper.ExternalId");
      //alert(x);
  }
})