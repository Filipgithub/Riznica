Ext.define("riznica.category.view.CategoryFormView", {
    //
    extend: 'Ext.window.Window',
    alias: 'widget.CategoryFormView',
    itemId: 'catWindowId',
    autoShow: true,//dont have to call .show()
    title: 'Add new record',
    items: [{
        xtype: 'form',
        itemId: "catFormId",
        bodyPadding: 5,//my "Default"
        flex: 1,//scale childs to fit parent
        defaultType: 'textfield',
        items: [{
            name: 'id',
            itemId: 'categoryId',
            fieldLabel: 'ID',
            readOnly: true
        }, {

            name: 'name',
            itemId: 'categoryName',
            fieldLabel: 'Name'
        }]
    }],
    buttons: [{
        text: 'Save',
        iconCls: 'button-save',//declared CSS Background somewhere
        listeners: {
            click: function (thisEl) {

                var me = thisEl.up('#catWindowId');
                var data = me.down("#catFormId").getForm().getNestedValues();

                var catId = Ext.ComponentQuery.query('#categoryId')[0].getValue();
                var url = "";

                if (catId == -1) {
                    url = riznica.configuration.contextPath + "/api/category/create";
                } else {
                    url = riznica.configuration.contextPath + "/api/category/update"
                }

                grich.core.util.AjaxSubmitHelper.invokeRequest({
                    url: url,
                    method: "POST",
                    maskComponents: {component: me},
                    jsonData: data,
                    scope: me,
                    async: false,
                    success: function (response, options, responseTextDecoded) {
                        if (responseTextDecoded.success === true) {

                            var notificationDescriptor = {
                                notification: {
                                    severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
                                    titleText: "Category saved!",
                                    contentText: "Success"
                                }
                            };
                            grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);

                            thisEl.up('#catWindowId').close();
                            Ext.ComponentQuery.query('#category-view-id')[0].getStore().load();
                        }
                    }
                });
            // Ext.ComponentQuery.query('#catId')[0].show();
            }
        }
    }, {
        text: 'Cancel',
        iconCls: 'button-cancel',
        handler: function (btn) {
            btn.up('window').close();
        }
    }]
});