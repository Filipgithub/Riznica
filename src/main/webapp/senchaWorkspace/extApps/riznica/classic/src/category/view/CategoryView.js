Ext.define("riznica.category.view.CategoryView", {
  extend: "Ext.grid.Panel",
  xtype: "category-view-category",

  requires: [
    "riznica.category.store.CategoryStore",
    "riznica.category.controller.view.CategoryViewController"
  ],
  controller: 'categoryViewController',


  store: {
    type: "category-Store"
  },

  columns: [{text: "Name",width: "100%",dataIndex: "name"}],

  tools: [{
    type: 'plus',
    handler: function() {
      var config =
        {
          xtype: "add-new-category"
        }
      var win = Ext.ComponentMgr.create(config);
      win.show();
    }

  }],

  listeners: {

    cellclick: "onCategoryClick",

    //edit or delete selected category
    itemcontextmenu: "onClickItemContextMenuCategory"
  }


});


