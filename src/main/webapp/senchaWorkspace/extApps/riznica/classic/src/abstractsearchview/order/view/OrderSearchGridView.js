Ext.define("riznica.abstractsearchview.order.view.OrderSearchGridView", {
  extend: "Ext.grid.Panel",
  alias: "widget.order-OrderSearchGridView",
  itemId: "resultsGrid",

  requires: [
    "Ext.grid.column.Action",
    "Ext.grid.Panel",
    "Ext.toolbar.Paging"
  ],

  reference: "searchOrderResultsGrid",
  title: false,
  border: true,
  hidden: false,
  margin: 10,

  initComponent: function () {
    var me = this;
    Ext.apply(me, {
      columns: [
        { text: "Restaurant", flex: 1.5, align: "center", dataIndex: "restaurantName" },
        { text: "Order", flex: 2, align: "center", dataIndex: "orderFood" },
        { text: "Customer", flex: 2, align: "center", dataIndex: "userName" },
        { text: "Date", flex: 2, align: "center", dataIndex: "simpleDateFormat" }
      ],
      bbar: {
        xtype: "pagingtoolbar",
        store: me.store,
        displayInfo: true
      }
    });
    me.callParent(arguments);
  }
});
