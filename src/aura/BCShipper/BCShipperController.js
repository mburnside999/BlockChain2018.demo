({
    doInit : function(component, event) {

       console.log('in BCShipper doInit()');
        //var action = component.get("c.findAll");
        //action.setCallback(this, function(a) {
           // component.set("v.shippers", a.getReturnValue());
       // });
       // $A.enqueueAction(action);
    },
    handleMyShipmentEvent : function(component, event) {
             console.log("BCShipperController.js received shipmentevent");
              var searchKey=event.getParam("shipmentID");
              var action = component.get("c.findShipperByShipmentID");
               action.setParams({
            "searchKey": searchKey
          });
          action.setCallback(this, function(a) {
              console.log(a.getReturnValue());
              component.set("v.shippers", a.getReturnValue());

          });
          $A.enqueueAction(action);

          }
 })