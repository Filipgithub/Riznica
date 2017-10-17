Ext.define("riznica.post.view.PostViewTabController", {
  extend: 'Ext.app.ViewController',

  alias: 'controller.postTab-ViewController',

  searchOnChange: function(filterType, filterValue) {

    if (filterType == "category") {
      //search for posts by category
      Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load({
        params: { categoryName: filterValue }
      });
    }
    else if (filterType == "title") {
      //search for posts by post title
      Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load({
        params: { postTitle: filterValue }
      });
    }
    else if (filterType == "author") {
      //search for posts by post author
      Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load({
        params: { userName: filterValue }
      });


    }
  },
  saveRecentPost: function(thisEl) {
    var data = thisEl.up().down('form').getForm().getValues();
    console.log(data);
    grich.core.util.AjaxSubmitHelper.invokeRequest({
      url: riznica.configuration.contextPath + "/api/post/create",
      method: "POST",
      //maskComponents: { component: thisEl.getView() },
      jsonData: data,
      // scope: me,
      async: false,
      success: function(response, options, responseTextDecoded) {
        if (responseTextDecoded.success === true) {
          //debugger;
          Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load();
          //alert("New post saved!");
          var notificationDescriptor = {
            notification: {
              severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
              titleText: "Post saved!!!",
              contentText: "Success"

            }
          };
          thisEl.up('#postFormId').close();
          grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);

        }
      }

    });
  },
  addNewPost: function() {
    var win = new Ext.Window({
      controller: "postTab-ViewController",
      itemId: "postFormId",
      title: 'Add new post',
      layout: 'fit',
      autoScroll: true,
      y: 120,
      width: 600,
      height: 600,
      modal: true,
      closeAction: 'hide',
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
              height: 480, items: [
              {
                xtype: 'textfield',
                fieldLabel: 'Blog Title',
                name: 'postTitle',
                text: 'Blog title'
              },
              {
                xtype: 'combobox',
                fieldLabel: 'Blog Category',
                store: new riznica.category.store.CategoryStore(),
                queryMode: 'remote',
                displayField: 'name',
                name: 'postCategory',
                valueField: 'id'
              },

              {
                xtype: 'textarea',
                itemId: 'content',
                name: 'postContent',
                width: "80%",
                height: 250,
                fieldLabel: 'Blog Content'

              }
            ]
            },
            {
              xtype: 'button',
              text: "Save post",
              handler: 'saveRecentPost'

            }
          ]
        }
      ]


    });
    win.show();
  },

});