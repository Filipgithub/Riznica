Ext.define("riznica.category.view.AddNewCategoryView", {

    extend: "Ext.window.Window",
    xtype: "add-new-category",
    itemId: "addNewCategoryId",
    controller:
        "categoryViewController",


    // itemId: "CategoryFormId",
    title: 'Add new category',
    layout: 'fit',
    autoScroll: true,
    y: 120,
    width: 400,
    height: 200,
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
                    xtype: 'form',
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: "ctgNameId",
                            fieldLabel: 'New Category',
                            name: 'categoryName',
                            text: 'Category'
                        }

                    ]
                },


                {
                    xtype: 'button',
                    text: "Save category",
                    handler: "onClickAddNewCategory"

                }
            ]
        }]


});

