Ext.define("riznica.abstractsearchview.order.store.OrderSearchStore", {
  extend: "Ext.data.Store",
  alias: "store.orderSearchStore",

  requires: [
    "riznica.abstractsearchview.order.model.OrderSearchModel"
  ],

  model: "riznica.abstractsearchview.order.model.OrderSearchModel",
  autoLoad: true,

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
    actionMethods: { create: "POST", read: "GET", update: "POST", destroy: "POST" },
    paramsAsJson: true,
    simpleSortMode: true,
    sortParam: "sortBy",
    directionParam: "sortDirection"
  }


});