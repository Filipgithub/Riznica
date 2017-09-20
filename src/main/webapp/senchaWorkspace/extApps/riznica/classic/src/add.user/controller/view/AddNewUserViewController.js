Ext.define("riznica.add.user.controller.view.AddNewUSerViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.view.addNewUser",

  onClickAddNewUser: function(thisEl) {
    /* var username = Ext.ComponentQuery.query('#usrName')[0].getValue();
     var password = Ext.ComponentQuery.query('#password')[0].getValue(); */
    var data = thisEl.up().down("#user-form").getForm().getNestedValues();

    console.log(data);
    grich.core.util.AjaxSubmitHelper.invokeRequest({
      url: riznica.configuration.contextPath + "/api/user/create",
      method: "POST",
      //maskComponents: { component: thisEl.getView() },
      jsonData: data,
      // scope: me,
      async: false,
      success: function(response, options, responseTextDecoded) {
        if (responseTextDecoded.success === true) {
          //debugger;
          // Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load();
          //  alert("New user saved!");
          var notificationDescriptor = {
            notification: {
              severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
              titleText: "User saved!!!",
              contentText: "Success"

            }
          };
          thisEl.up('#addwin').close();
          grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);

        }
      }

    });

  }


  }
);