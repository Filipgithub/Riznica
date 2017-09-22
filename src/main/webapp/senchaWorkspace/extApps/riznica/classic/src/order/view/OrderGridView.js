Ext.define("riznica.order.view.OrderGridView", {
  extend: "Ext.grid.Panel",
  xtype: "order-view-grid",
  itemId: "order-view-gridId",
  autoLoad: true,
  autoSync: true,
  viewModel: { type: "OrderViewModel" },


  requires: [
    "riznica.order.store.OrderStore",
    "riznica.order.controller.OrderViewController",
    "riznica.order.model.OrderViewModel"
  ],

  controller: "OrderViewController",


  store: {
    type: "orderStore"
  },


  columns: [
    { text:"Client", dataIndex:"userName", flex:1 },
    { text:"Restaurant", dataIndex:"restaurantName", flex:1 }


  ],

  listeners:
    {
      cellclick: 'onOrderClick'
    }


});
