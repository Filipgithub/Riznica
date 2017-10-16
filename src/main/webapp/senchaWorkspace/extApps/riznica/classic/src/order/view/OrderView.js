Ext.define("riznica.order.view.OrderView", {

  extend: "Ext.window.Window",

  xtype: "order",
  itemId: "order-view-id",
  controller: "OrderViewController",
  // viewModel: { type: "order-OrderViewModel" },
  autoShow: true,
  modal: true,
  layout: "fit",
  autoScroll: true,
  width: 600,
  height: 400,
  closeAction: 'hide',

  requires: [
    "riznica.order.controller.OrderViewController",
    "riznica.order.model.OrderViewModel"
  ],

  items: [
    {
      style: 'margin: 5px 5px 5px 5px',
      layout: { itemId: "order-layout-id", type: "vbox", pack: 'start', align: 'center' },
      items: [
        {
          xtype: 'form', itemId: 'order-form-Id',
          items: [
            { xtype: 'textfield', itemId: "restaurantNameId", name: "restaurantName", fieldLabel: "Restaurant" },

            { xtype: 'textfield', itemId: "orderField", name: "orderFood", fieldLabel: "Order" }, // popraviti trailing comma warnings
            {
              xtype: 'button', text: "Submit", itemId: "submitBttn",
              listeners: {
                click: "submitOrder"
              }
            }

          ]
        }
      ]
    }]


});

