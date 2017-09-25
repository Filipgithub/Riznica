Ext.define("riznica.order.controller.OrderViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.OrderViewController",

  submitOrder: function(thisEl) {
    debugger;
    var data = thisEl.up().getForm().getNestedValues();
    //var data = Ext.ComponentQuery.query('form').getForm().getNestedValues();
    console.log(data);
    grich.core.util.AjaxSubmitHelper.invokeRequest({
      url: riznica.configuration.contextPath + "/api/restaurantOrder/create",
      method: "POST",
      jsonData: data,
      async: false,
      success: function(response, options, responseTextDecoded) {
        if (responseTextDecoded.success === true) {
          var notificationDescriptor = {
            notification: {
              severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
              titleText: "Order saved!!!",
              contentText: "Success"

            }
          };
          thisEl.up('#order-view-id').close();


          grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);

          Ext.ComponentQuery.query("#order-view-grid-id")[0].getStore().load();

        }
      }

    });


  },

  onOrderClick: function(thisEl, td, cellIndex, record, tr, rowIndex) {
    Ext.ComponentQuery.query("#order-view-grid-id")[0].getSelectionModel().deselectAll(true);
    var preview = Ext.create('riznica.order.view.OrderPreviewView');
    preview.getViewModel().data.entity = record.data;
    preview.show();
  }
});