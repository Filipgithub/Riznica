Ext.define("riznica.abstractsearchview.order.model.OrderSearchModel",
  {
    extend: "Ext.data.Model",

    fields: [
      { name: "id", type: "int", defaultValue: null, allowNull: true },
      { name: "restaurantName", type: "string", defaultValue: null, useNull: true },
      { name: "orderFood", type: "string", defaultValue: null, useNull: true }

    ]

  });