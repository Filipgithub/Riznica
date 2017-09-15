Ext.define("riznica.category.controller.view.CategoryViewController", {
    extend: "Ext.app.ViewController",

    alias: "controller.categoryViewController",

    //adding new category
    onClickAddNewCategory:function(thisEl){
        //do something
        //debugger;
           // var  data = thisEl.up().down('form').getForm().getValues();
        var data = Ext.ComponentQuery.query('#ctgNameId')[0].getValue();
            console.log(data.categoryName);
            grich.core.util.AjaxSubmitHelper.invokeRequest({
                url: riznica.configuration.contextPath + "/api/category/create",
                method: "POST",
                //maskComponents: { component: thisEl.getView() },
                jsonData: {name:data},
                // scope: me,
                async: false,
                success: function(response, options, responseTextDecoded) {
                    if (responseTextDecoded.success === true) {
                        Ext.ComponentQuery.query('#category-view-id')[0].getStore().load();

                        thisEl.up('#addNewCategoryId').close();
                    }
                }

            });

    },
    //edit or delete category
    onClickItemContextMenuCategory: function (tree, record, item, index, e, eOpts) {
        // Optimize : create menu once
        var menu_grid = new Ext.menu.Menu({
           items:
                [
                    //editing category
                    {
                        text: 'Edit', handler: function () {
                        var config = {
                            xtype: 'CategoryFormView',
                            mode: 'edit',
                            title: 'Edit category'
                        };

                         var win=Ext.ComponentMgr.create(config);

                        Ext.ComponentQuery.query('#categoryId')[0].setValue(record.data.id);
                        Ext.ComponentQuery.query('#categoryName')[0].setValue(record.data.name);
                    }
                    },
                    //deleting category
                    {
                        text: 'Delete', handler: function () {
                        Ext.Msg.confirm("Confirm", "Are you sure?", function (choice) {
                            if (choice === "yes") {

                                var me = Ext.ComponentQuery.query('#category-view-category')[0];
                                var data = record.data;
                                delete data.class;

                                grich.core.util.AjaxSubmitHelper.invokeRequest({
                                    url: riznica.configuration.contextPath + "/api/category/delete",
                                    method: "POST",
                                    maskComponents: {component: me},
                                    jsonData: Ext.util.JSON.encode(data),
                                    scope: me,
                                    async: false,
                                    success: function (response, options, responseTextDecoded) {
                                        if (responseTextDecoded.success === true) {
                                            var notificationDescriptor = {
                                                notification: {
                                                    severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
                                                    titleText: "Category deleted!!!",
                                                    contentText: "Success"

                                                }
                                            };
                                            Ext.ComponentQuery.query('#category-view-id')[0].getStore().load();

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
