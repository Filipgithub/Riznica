Ext.define("riznica.post.view.PostViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.view-PostViewController",

  //show selected post in new window
  onPostListItemSelected: function(thisEl, td, cellIndex, record, tr, rowIndex) {

    Ext.ComponentQuery.query("#post-view-postId")[0].getSelectionModel().deselectAll(true);


   // var post = Ext.ComponentQuery.query("#post-view-postId")[0].getStore().getAt(rowIndex).data;
      var preview = Ext.create("riznica.post.view.PostPreview");
      preview.getViewModel().data.entity = record.data;
      preview.show();

  },
  onClickItemContextMenuPost: function(tree, record, item, index, e, eOpts) {
    // Optimize : create menu once
    var menu_grid = new Ext.menu.Menu({
      items:
        [
          {
            //delete selected post
            text: 'Delete', handler: function() {
            Ext.Msg.confirm("Confirm", "Are you sure?", function(choice) {
              if (choice === "yes") {

                var me = Ext.ComponentQuery.query('#post-view-postId')[0];
                var data = record.data;
                delete data.class;

                grich.core.util.AjaxSubmitHelper.invokeRequest({
                  url: riznica.configuration.contextPath + "/api/post/delete",
                  method: "POST",
                  maskComponents: { component: me },
                  jsonData: Ext.util.JSON.encode(data),
                  scope: me,
                  async: false,
                  success: function(response, options, responseTextDecoded) {
                    if (responseTextDecoded.success === true) {
                      var notificationDescriptor = {
                        notification: {
                          severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
                          titleText: "Category deleted!!!",
                          contentText: "Success"
                        }
                      };
                      Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load();

                      grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);

                    }
                  }
                });

              }
            });
          }
          }
        ]
    });
    // HERE IS THE MAIN CHANGE
    var position = [e.getX() - 10, e.getY() - 10];
    e.stopEvent();
    menu_grid.showAt(position);
  }
});





