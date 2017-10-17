Ext.define("riznica.uploaddownloadfile.view.UploadDownloadViewViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.UploadDownloadViewController",


  getImage: function() {
    grich.core.util.AjaxSubmitHelper.invokeRequest({
        url: riznica.configuration.contextPath + "/api/product/get",
        method: "POST",
        //maskComponents: { component: thisEl.getView() },
        jsonData: null,
        // scope: me,
        async: false,
        success: function(response, options, responseTextDecoded) {
          console.log(response);
          //alert("success");
          if (responseTextDecoded.success === true) {
            //open image from database in new window
            var pdfWindow = window.open("");
            pdfWindow.document.write("<iframe width='100%' height='100%' src='" + responseTextDecoded.data.image + "'></iframe>")

            var notificationDescriptor = {
              notification: {
                severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
                titleText: "Image saved!!!",
                contentText: "Success"
              }
            };
            grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);
          }
        }
      }
    );
  },

  //send image
  sendImage: function() {

    var data = new Object();
    data.image = riznica.main.view.MainViewUtils.uploadDocument;
    data.id = null;

    grich.core.util.AjaxSubmitHelper.invokeRequest({
        url: riznica.configuration.contextPath + "/api/product/create",
        method: "POST",
        //maskComponents: { component: thisEl.getView() },
        jsonData: data,
        // scope: me,
        async: false,
        success: function(response, options, responseTextDecoded) {
          if (responseTextDecoded.success === true) {
            var notificationDescriptor = {
              notification: {
                severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
                titleText: "Image saved!!!",
                contentText: "Success"

              }
            };
            grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);

          }


        }
      }
    );
  }
});
