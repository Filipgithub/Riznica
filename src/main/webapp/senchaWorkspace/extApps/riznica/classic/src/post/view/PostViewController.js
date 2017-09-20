Ext.define("riznica.post.view.PostViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.view-PostViewController",

  //show selected post in new window
  onPostListItemSelected: function(thisEl, td, cellIndex, record, tr, rowIndex) {

    Ext.ComponentQuery.query("#post-view-postId")[0].getSelectionModel().deselectAll(true);


    var post = Ext.ComponentQuery.query("#post-view-postId")[0].getStore().getAt(rowIndex).data;


    console.log(post);
    var win = new Ext.Window({
      itemId: "postFormId",
      title: post.postTitle,
      layout: 'fit',
      autoScroll: true,
      y: 60,
      width: 600,
      height: 630,
      modal: true,

      items: [
        {
          style: 'margin: 5px 5px 5px 5px',
          layout: {
            type: "vbox",
            pack: 'start',
            align: 'center'
          },

          items: [
            {
              xtype: 'form', width: 600,
              height: 600, items: [
              { xtype: 'textfield', name: 'id', value: post.id, hidden: true },
              {
                xtype: 'textfield',
                readOnly: true,
                fieldLabel: 'Post Author',
                name: 'postAuthor',
                value: post.user.username
              },
              {
                xtype: 'textfield',
                readOnly: true,
                fieldLabel: 'Post Category',
                name: 'postCategory',
                value: post.category.name
              },

              {
                xtype: 'textarea',
                readOnly: true,
                itemId: 'content',
                name: 'postContent',
                width: "80%",
                height: 250,
                fieldLabel: 'Post Content',
                value: post.postContent

              },
              {
                xtype: "comment-view-comment",
                listeners: {
                  afterrender: function(thisEl) {


                    thisEl.getStore().getProxy().extraParams = {
                      post: thisEl.up('form').getForm().getValues().id
                    };
                    thisEl.getStore().load();

                    //  console.log("xxx");
                    console.log(thisEl.getStore());
                  }
                }


              }
            ]
            }
          ]
        }
      ]


    });
    win.show();
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





