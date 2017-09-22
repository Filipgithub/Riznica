Ext.define("riznica.order.store.OrderStore", {
  extend: "Ext.data.Store",
  alias: "store.orderStore",

  requires: [
    "riznica.order.model.OrderModel"
  ],

  model: "riznica.order.model.OrderModel",

  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/restaurantOrder/read"
    },
    reader: {
      type: "json",
      rootProperty: "data",
      totalProperty: "total"
    },

    writer: {
      type: 'json',
      writeAllFields: false,
      rootProperty: 'data'
    },
    actionMethods: { create: "POST", read: "POST", update: "POST", destroy: "POST" },
    paramsAsJson: true,
    simpleSortMode: true,
    sortParam: "sortBy",
    directionParam: "sortDirection"
  }


});